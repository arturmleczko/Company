import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import styled from 'styled-components';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

enum PaginationValue {
	Next = 'next',
	Prev = 'prev',
	Number = 'number',
}

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
	color: ${colors.blueTwo};
	font-size: ${fontSize[20]};
	cursor: pointer;

	&:nth-child(${({ currentPage }) =>
				currentPage ? `${currentPage}` : null}) {
		color: ${colors.black};
		font-weight: 500;
	}
`;

const PaginationButton = styled.button`
	padding: 0 12px;
	border: none;
	background-color: inherit;
	color: ${colors.blueTwo};
	font-size: ${fontSize[20]};
	font-weight: 500;
	text-transform: uppercase;
	transition: color 0.1s ease-in-out;

	&:hover {
		color: ${colors.blueThree};
	}
`;

const Pagination: FC<IPaginationProps> = ({
	postsPerPage,
	totalPublications,
	selectValue,
	currentPage,
	setCurrentPage,
}) => {
	let pageNumbers: number[] = [];

	useEffect(() => {
		setCurrentPage(1);
	}, [selectValue, setCurrentPage]);

	for (let i = 1; i < Math.ceil(totalPublications / postsPerPage); i++) {
		pageNumbers.push(i);
	}

	const paginate = (pageNumber: number): void => {
		setCurrentPage(pageNumber);
	};

	const changePage = (direction: string) => {
		if (direction === PaginationValue.Prev) {
			setCurrentPage((prevState) => prevState - 1);
		} else if (direction === PaginationValue.Next) {
			setCurrentPage((prevState) => prevState + 1);
		}
	};

	const pageNumbersList =
		pageNumbers.length >= currentPage
			? pageNumbers.map((pageNumber) => (
					<PageNumberItem
						key={pageNumber}
						onClick={() => paginate(pageNumber)}
						currentPage={currentPage}
					>
						{pageNumber}
					</PageNumberItem>
			  ))
			: null;

	const checkPreviousButton =
		currentPage > 1 && pageNumbers.length !== 0 ? (
			<PaginationButton onClick={() => changePage(PaginationValue.Prev)}>
				previous
			</PaginationButton>
		) : null;

	const checkNextButton =
		pageNumbers.length !== currentPage && pageNumbers.length !== 0 ? (
			<PaginationButton onClick={() => changePage(PaginationValue.Next)}>
				next
			</PaginationButton>
		) : null;

	return (
		<PaginationContainer>
			{checkPreviousButton}
			<PageNumbersContainer>{pageNumbersList}</PageNumbersContainer>
			{checkNextButton}
		</PaginationContainer>
	);
};

export default Pagination;
