import { FC } from 'react';
import styled from 'styled-components';
import { FormikErrors } from 'formik';

import { IFormValues } from './Profile';

import editIcon from '../../../media/icons/pencil.svg';
import saveIcon from '../../../media/icons/save.svg';
import undoIcon from '../../../media/icons/undo.svg';
import { colors } from '../../../styledHelpers/colors';

interface IControlPanelProps {
	formState: boolean;
	errors: FormikErrors<IFormValues>;
	editText: () => void;
	restoreInitialValues: () => void;
}

const EditButton = styled.img`
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

const ControlPanelContainer = styled.div`
	position: absolute;
	display: flex;
	top: 70px;
	right: 60px;
	height: 30px;
`;

const SaveButton = styled.button`
	width: 30px;
	height: 30px;
	border: none;
	background-color: ${colors.white};
	background-image: url(${saveIcon});
	background-position: center;
	background-size: cover;
	cursor: pointer;
`;

const UndoButton = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 30px;
	cursor: pointer;
`;
const ControlPanel: FC<IControlPanelProps> = ({
	formState,
	errors,
	editText,
	restoreInitialValues,
}) => {
	const errorsNumber = Object.keys(errors).length;
	const checkErrors = errorsNumber === 0 ? true : false;

	const saveForm = () => {
		if (checkErrors === true) {
			editText();
		}
	};

	const selectAction = formState ? (
		<>
			<UndoButton src={undoIcon} onClick={restoreInitialValues} />
			<SaveButton type="submit" onClick={saveForm} />
		</>
	) : (
		<EditButton src={editIcon} onClick={editText} />
	);

	return <ControlPanelContainer>{selectAction}</ControlPanelContainer>;
};

export default ControlPanel;
