import { FC } from 'react';
import styled from 'styled-components';

import { RoundedContainer } from '../../../../styledHelpers/oftenUsed';

const WorkspaceContainer = styled(RoundedContainer)`
	height: 320px;
	margin-bottom: 7px;
`;

const Workspace: FC = () => {
	return <WorkspaceContainer>Workspace</WorkspaceContainer>;
};

export default Workspace;
