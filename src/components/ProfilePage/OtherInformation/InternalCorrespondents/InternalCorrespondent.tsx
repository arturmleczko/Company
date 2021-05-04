import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useField } from 'formik';
import { useSelector } from 'react-redux';

import { IState } from '../../../../reducers';
import { IPhotosReducer } from '../../../../reducers/photosReducer';

import { ISinglePhoto } from '../../../../entities/photos';

import CorrespondentSelect from './CorrespondentSelect';
import SingleAction from './SingleAction';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import messageIcon from '../../../../media/icons/message.svg';
import profileIcon from '../../../../media/icons/user.svg';

import defaultPhotos from '../../../../tools/apiTools/defaultValues/defaultPhotos';

interface IInternalCorrespondentProps {
	name: string;
}

const ActionsContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 325px;
	margin-left: 80px;
`;

const InternalCorrespondentContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 68px;
	padding-left: 20px;
	background-color: ${colors.greyEleven};
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
`;

const CorespondentPhoto = styled.img`
	width: 48px;
	height: 48px;
	margin-right: 5px;
	border-radius: 50%;
`;

const InternalCorrespondent: FC<IInternalCorrespondentProps> = ({ name }) => {
	const [photos, setPhotos] = useState<ISinglePhoto[]>(defaultPhotos);
	const [photoSrc, setSrcPhoto] = useState<string>('');

	const field = useField(name);
	const fieldValue: number = field[0].value;
	const photoId: number = fieldValue ? fieldValue - 1 : 0;

	const { photosList } = useSelector<IState, IPhotosReducer>(
		(globalState) => ({
			...globalState.photos,
		})
	);

	useEffect(() => {
		if (photosList.length !== 0) {
			setPhotos(photosList);
		}
	}, [photosList]);

	useEffect(() => {
		if (photos !== defaultPhotos) {
			const photo = photos[photoId];
			setSrcPhoto(photo.thumbnailUrl);
		}
	}, [photoId, photos]);

	return (
		<InternalCorrespondentContainer>
			<CorespondentPhoto src={photoSrc} />
			<CorrespondentSelect name={name} />
			<ActionsContainer>
				<SingleAction src={messageIcon} text="Message" />
				<SingleAction src={profileIcon} text="Profile" />
			</ActionsContainer>
		</InternalCorrespondentContainer>
	);
};

export default InternalCorrespondent;
