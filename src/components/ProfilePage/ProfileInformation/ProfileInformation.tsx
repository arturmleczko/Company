import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { IState } from '../../../reducers';
import { IPhotosReducer } from '../../../reducers/photosReducer';
import { IUsersReducer } from '../../../reducers/usersReducer';

import FormikControl, { FormType } from '../Formik/FormikControl';
import ProfilePicture from './ProfilePicture';
import CustomIcon from '../../common/CustomIcon';

import { ISinglePhoto } from '../../../entities/photos';
import { ISingleUser } from '../../../entities/users';

import defaultUser from '../../../tools/apiTools/defaultValues/defaultUser';
import defaultPhotos from '../../../tools/apiTools/defaultValues/defaultPhotos';
import mainUserIdx from '../../../tools/apiTools/mainUserIdx';
import matchUserToPhoto from '../../../tools/apiTools/matchUserToPhoto';

import pencilIcon from '../../../media/icons/pencil.svg';

interface IFormValues {
	name: string;
	street: string;
	city: string;
	website: string;
	email: string;
	phone: string;
}

const ContactInformation = styled.div`
	display: flex;
	flex-direction: column;
`;

const DetailedInformation = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 50px;
`;

const FormContainer = styled(Form)`
	display: flex;
	width: 100%;
	padding: 70px 0;

	& input {
		pointer-events: none;
		border: none;
	}
`;

const LeftSection = styled.div`
	display: flex;
	width: 50%;
	height: 160px;
`;

const RightSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-end;
	width: 50%;
	height: 160px;
`;

const initialValues: IFormValues = {
	name: '',
	street: '',
	city: '',
	website: '',
	email: '',
	phone: '',
};

const validationSchema = Yup.object({
	name: Yup.string().required('Required'),
});

const onSubmit = (values: any) => {
	console.log(values);
};

const ProfileInformation: FC = () => {
	const [user, setUser] = useState<ISingleUser>(defaultUser);
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);
	const [formValues, setFormValues] = useState<IFormValues>(initialValues);

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

	const { id, name, address, email, phone, website } = user;
	const { city, street } = address;
	const { url } = matchUserToPhoto(photos, id);

	const savedValues = {
		name,
		street,
		city,
		website,
		email,
		phone,
	};

	useEffect(() => {
		setFormValues(savedValues);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [user]);

	return (
		<Formik
			initialValues={formValues}
			onSubmit={onSubmit}
			validationSchema={validationSchema}
			enableReinitialize
		>
			<FormContainer>
				<LeftSection>
					<ProfilePicture src={url} />
					<DetailedInformation>
						<FormikControl
							control={FormType.Input}
							type="text"
							name="name"
							fontWeight={500}
						/>
						<FormikControl
							control={FormType.Input}
							type="text"
							name="street"
							fontWeight={500}
						/>
						<FormikControl
							control={FormType.Input}
							type="text"
							name="city"
						/>
						<FormikControl
							control={FormType.Input}
							type="text"
							name="website"
						/>
					</DetailedInformation>
				</LeftSection>
				<RightSection>
					<CustomIcon src={pencilIcon} size={30} />
					<ContactInformation>
						<FormikControl
							control={FormType.Input}
							type="email"
							name="email"
						/>
						<FormikControl
							control={FormType.Input}
							type="tel"
							name="phone"
						/>
					</ContactInformation>
				</RightSection>
			</FormContainer>
		</Formik>
	);
};

export default ProfileInformation;
