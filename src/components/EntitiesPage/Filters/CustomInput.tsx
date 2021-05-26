import { FC } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

interface ICustomInputProps {
	placeholder: string;
}

const Input = styled.input`
	width: 200px;
	height: 50px;
	padding: 10px 15px;
	margin: 0 10px;
	border: none;
	border-radius: 7px;
	outline: none;
	background-color: ${colors.greyFour};
	font-size: ${fontSize[22]};
	color: ${colors.greyFourteen};

	&::placeholder {
		color: ${colors.greyFourteen};
	}
`;

const CustomInput: FC<ICustomInputProps> = ({ placeholder }) => {
	return <Input placeholder={placeholder} disabled />;
};

export default CustomInput;
