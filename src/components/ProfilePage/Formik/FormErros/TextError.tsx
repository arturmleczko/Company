import { FC } from 'react';
import styled from 'styled-components';

const TextErrorContainer = styled.div`
	display: none;
`;
const TextError: FC = ({ children }) => {
	return <TextErrorContainer>{children}</TextErrorContainer>;
};

export default TextError;
