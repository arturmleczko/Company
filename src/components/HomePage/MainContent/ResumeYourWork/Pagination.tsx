import { Dispatch, FC, SetStateAction, FormEvent, useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

interface IPaginationProps {
	postsPerPage: number;
	totalPublications: number;
	selectValue: string;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

interface IPageNumberItemPropsStyle {
	currentPage: number;
}

const PaginationContainer = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 20px;
`;

const PageNumbersContainer = styled.ul`
	display: flex;
`;

const PageNumberItem = styled.li<IPageNumberItemPropsStyle>`
	padding: 7px;
	color: ${colors.blue};
	font-size: ${fontSize[20]};
	cursor: pointer;

	&:nth-child(${({ currentPage }) =>
				currentPage ? `${currentPage}` : null}) {
		color: ${colors.black};
	}
`;

const PaginationButton = styled.span`
	padding: 0 12px;
	color: ${colors.blue};
	font-size: ${fontSize[20]};
	text-transform: uppercase;
`;

const Pagination: FC<IPaginationProps> = ({
	postsPerPage,
	totalPublications,
	selectValue,
	currentPage,
	setCurrentPage,
}) => {
	const pageNumbers: number[] = [];

	useEffect(() => {
		setCurrentPage(1);
	}, [selectValue, setCurrentPage]);

	for (let i = 1; i < Math.ceil(totalPublications / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const paginate = (e: FormEvent, pageNumber: number): void => {
		const pageNumberItem = e.currentTarget as HTMLLIElement;
		const parent = pageNumberItem.parentElement as HTMLUListElement;
		const parentChildren = parent.children;

		for (let i = 0; i < parentChildren.length; i++) {
			const child = parentChildren[i] as HTMLLIElement;
			child.style.color = `${colors.blue}`;
		}

		setCurrentPage(pageNumber);
		pageNumberItem.style.color = `${colors.black}`;
	};

	const pageNumbersList =
		pageNumbers.length >= currentPage
			? pageNumbers.map((pageNumber) => (
					<PageNumberItem
						key={pageNumber}
						onClick={(e) => paginate(e, pageNumber)}
						currentPage={currentPage}
					>
						{pageNumber}
					</PageNumberItem>
			  ))
			: null;

	return (
		<PaginationContainer>
			<PaginationButton>previous</PaginationButton>
			<PageNumbersContainer>{pageNumbersList}</PageNumbersContainer>

			<PaginationButton>next</PaginationButton>
		</PaginationContainer>
	);
};

export default Pagination;
