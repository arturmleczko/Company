import { FC } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import TableSelect from '../Formik/FormTypes/Selects/TableSelect';
import DataPicker from '../Formik/FormTypes/DataPicker';

import { colors } from '../../../styledHelpers/colors';
import { fontSize } from '../../../styledHelpers/fontSizes';

import {
	nameOptions,
	entityOptions,
	locationOptions,
	expertiseOptions,
} from '../../../arraysOfData/ProfilePage/OtherInformation/ProposalsAndReviews';

const Heading = styled.h2`
	padding: 0 0 70px 70px;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const InternalReviewsContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 70px 0 50px 0;
	border-bottom: 3px solid ${colors.greyFive};
`;

const Table = styled.div`
	width: 100%;
	padding: 0 30px;
`;

const TBody = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
	width: 100%;
	padding: 0 40px;
`;

const THead = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
	width: 100%;
	padding: 0 40px;
	border-bottom: 3px solid ${colors.greyFive};
`;

const THeading = styled.span`
	padding-right: 30px;
	padding-bottom: 25px;
	font-size: ${fontSize[21]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const TData = styled.div`
	display: flex;
	align-items: center;
	padding-top: 25px;
	padding-right: 30px;
	font-size: ${fontSize[21]};
	color: ${colors.darkNavyBlue};
`;

const SeeMoreReviewsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	padding-top: 45px;
	padding-left: 40px;
`;

const SeeMoreReviews = styled(Link)`
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
	text-decoration: none;
`;

const InternalReviews: FC = () => {
	return (
		<InternalReviewsContainer>
			<Heading>Internal reviews</Heading>
			<Table>
				<THead>
					<THeading>Name</THeading>
					<THeading>Entity</THeading>
					<THeading>Location</THeading>
					<THeading>Expertise</THeading>
					<THeading>Date</THeading>
				</THead>
				<TBody>
					<TData>
						<TableSelect
							name="internalReviewsName1"
							options={nameOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsEntity1"
							options={entityOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsLocation1"
							options={locationOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsExpertise1"
							options={expertiseOptions}
						/>
					</TData>
					<TData>
						<DataPicker name="internalReviewsData1" />
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsName2"
							options={nameOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsEntity2"
							options={entityOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsLocation2"
							options={locationOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsExpertise2"
							options={expertiseOptions}
						/>
					</TData>
					<TData>
						<DataPicker name="internalReviewsData2" />
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsName3"
							options={nameOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsEntity3"
							options={entityOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsLocation3"
							options={locationOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="internalReviewsExpertise3"
							options={expertiseOptions}
						/>
					</TData>
					<TData>
						<DataPicker name="internalReviewsData3" />
					</TData>
				</TBody>
				<SeeMoreReviewsContainer>
					<SeeMoreReviews to="/reviews">
						See more reviews
					</SeeMoreReviews>
				</SeeMoreReviewsContainer>
			</Table>
		</InternalReviewsContainer>
	);
};

export default InternalReviews;
