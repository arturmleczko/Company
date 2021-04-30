import { FC } from 'react';
import styled from 'styled-components';

import editIcon from '../../media/icons/pencil.svg';
import saveIcon from '../../media/icons/save.svg';
import undoIcon from '../../media/icons/undo.svg';

interface IFormPanelProps {
	formState: boolean;
	editText: () => void;
	restoreInitialValues: () => void;
}

const FormPanelContainer = styled.div`
	position: absolute;
	display: flex;
	top: 0;
	right: 0;
	height: 30px;
	margin: 70px 50px 0 0;
`;

const SaveOrEditButton = styled.img`
	width: 30px;
	height: 30px;
	cursor: pointer;
`;

const UndoButton = styled.img`
	width: 30px;
	height: 30px;
	margin-right: 30px;
	cursor: pointer;
`;

const FormPanel: FC<IFormPanelProps> = ({
	formState,
	editText,
	restoreInitialValues,
}) => {
	const checkUndoButton = formState ? (
		<UndoButton src={undoIcon} onClick={restoreInitialValues} />
	) : null;
	const selectedActionIcon = formState ? saveIcon : editIcon;

	return (
		<FormPanelContainer>
			{checkUndoButton}
			<SaveOrEditButton src={selectedActionIcon} onClick={editText} />
		</FormPanelContainer>
	);
};

export default FormPanel;
