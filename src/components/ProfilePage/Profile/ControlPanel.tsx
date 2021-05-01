import { FC } from 'react';
import styled from 'styled-components';

import editIcon from '../../../media/icons/pencil.svg';
import saveIcon from '../../../media/icons/save.svg';
import undoIcon from '../../../media/icons/undo.svg';

interface IControlPanelProps {
	formState: boolean;
	editText: () => void;
	restoreInitialValues: () => void;
}

const FormPanelContainer = styled.div`
	position: absolute;
	display: flex;
	top: 70px;
	right: 60px;
	height: 30px;
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
const ControlPanel: FC<IControlPanelProps> = ({
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

export default ControlPanel;
