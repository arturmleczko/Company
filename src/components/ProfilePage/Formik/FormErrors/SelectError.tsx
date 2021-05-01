import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

const SelectErrorContainer = styled.div`
	padding-top: 7px;
	color: ${colors.red};
	font-size: ${fontSize[19]};
	font-weight: 500;
`;

const SelectError: FC = ({ children }) => {
	return <SelectErrorContainer>{children}</SelectErrorContainer>;
};

export default SelectError;
