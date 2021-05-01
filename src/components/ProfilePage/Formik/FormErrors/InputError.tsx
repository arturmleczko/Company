import { FC } from 'react';
import styled from 'styled-components';

const InputErrorContainer = styled.div`
	display: none;
`;
const InputError: FC = ({ children }) => {
	return <InputErrorContainer>{children}</InputErrorContainer>;
};

export default InputError;
