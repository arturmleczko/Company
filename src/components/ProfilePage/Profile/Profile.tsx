import { FC, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import 'yup-phone';

import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photosReducer';
import { IUsersReducer } from '../../../reducers/usersReducer';

import ProfilePicture from './ProfilePicture';
import InputOne from '../Formik/FormTypes/Inputs/InputOne';
import BoldInput from '../Formik/FormTypes/Inputs/BoldInput';
import ControlPanel from './ControlPanel';

import { colors } from '../../../styledHelpers/colors';
import { ProfileSection } from '../../../styledHelpers/oftenUsed';

import { ISinglePhoto } from '../../../entities/photos';
import { ISingleUser } from '../../../entities/users';

import defaultUser from '../../../tools/apiTools/defaultValues/defaultUser';
import defaultPhotos from '../../../tools/apiTools/defaultValues/defaultPhotos';
import mainUserIdx from '../../../tools/apiTools/mainUserIdx';
import matchUserToPhoto from '../../../tools/apiTools/matchUserToPhoto';

export interface IFormValues {
	name: string;
	street: string;
	city: string;
	professionalStatus: string;
	email: string;
	phone: string;
}

interface IProfileContainerProps {
	formState: boolean;
}

const ContactDetails = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	width: 50%;
	height: 90px;
	align-self: flex-end;
`;

const FormContainer = styled(Form)`
	display: flex;
	width: 100%;
	height: 100%;
`;

const InformationContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 60%;
	height: 100%;
	padding-left: 60px;
`;

const ProfileContainer = styled(ProfileSection)<IProfileContainerProps>`
	position: relative;
	height: 330px;
	padding: 70px;

	& input {
		width: 90%;
		pointer-events: ${({ formState }) => (formState ? 'auto' : 'none')};
		border: ${({ formState }) =>
			formState
				? `2px solid ${colors.greyFive}`
				: '2px solid transparent '};
		border-radius: 7px;
		padding: 5px 0 5px 20px;
		outline: none;
		transition: 0.2s ease-out;
	}
`;

const BasicInformation = styled.div`
	display: flex;
	align-items: center;
	width: 50%;
	height: 100%;
`;

const initialValues: IFormValues = {
	name: '',
	street: '',
	city: '',
	professionalStatus: '',
	email: '',
	phone: '',
};

const validationSchema = Yup.object({
	name: Yup.string().required().min(7).max(40),
	street: Yup.string().required().max(88),
	city: Yup.string().required().max(22),
	professionalStatus: Yup.string().required(),
	email: Yup.string().email().required(),
	phone: Yup.string().phone().required(),
});

const onSubmit = (values: IFormValues) => {
	console.log(values);
};

const Profile: FC = () => {
	const [user, setUser] = useState<ISingleUser>(defaultUser);
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);
	const [formValues, setFormValues] = useState<IFormValues | null>(null);
	const [formState, setFormState] = useState<boolean>(false);

	const { usersList, photosList } = useSelector<
		IState,
		IUsersReducer & IPhotosReducer
	>((globalState) => ({
		...globalState.users,
		...globalState.photos,
	}));

	useEffect(() => {
		if (usersList.length !== 0) {
			const singleUser = usersList[mainUserIdx];

			setUser(singleUser);
			setPhotos(photosList);
		}
	}, [usersList, photosList]);

	const { id, name, address, email } = user;
	const { city, street } = address;
	const { url } = matchUserToPhoto(photos, id);

	const savedValues: IFormValues = {
		name,
		street,
		city,
		professionalStatus: 'Partner',
		email,
		phone: '+33 (0)6 12 34 56 78',
	};

	useEffect(() => {
		setFormValues(savedValues);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	const editText = () => {
		setFormState((prevState) => !prevState);
	};

	const restoreInitialValues = () => {
		setFormValues(null);
	};

	useEffect(() => {
		if (formValues === null) {
			setFormValues(savedValues);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [formValues]);

	return (
		<Formik
			initialValues={formValues || initialValues}
			validationSchema={validationSchema}
			onSubmit={onSubmit}
			enableReinitialize
		>
			{({ errors }) => (
				<ProfileContainer formState={formState}>
					<FormContainer>
						<BasicInformation>
							<ProfilePicture src={url} />
							<InformationContainer>
								<BoldInput type="text" name="name" />
								<BoldInput type="text" name="street" />
								<InputOne type="text" name="city" />
								<InputOne
									type="text"
									name="professionalStatus"
								/>
							</InformationContainer>
						</BasicInformation>
						<ContactDetails>
							<InputOne type="email" name="email" />
							<InputOne type="text" name="phone" />
						</ContactDetails>
						<ControlPanel
							formState={formState}
							errors={errors}
							editText={editText}
							restoreInitialValues={restoreInitialValues}
						/>
					</FormContainer>
				</ProfileContainer>
			)}
		</Formik>
	);
};

export default Profile;
