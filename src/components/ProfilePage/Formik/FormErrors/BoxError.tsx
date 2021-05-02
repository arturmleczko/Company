import { FC } from 'react';
import styled from 'styled-components';

const BoxErrorContainer = styled.div`
	display: none;
`;
const BoxError: FC = ({ children }) => {
	return <BoxErrorContainer>{children}</BoxErrorContainer>;
};

export default BoxError;
