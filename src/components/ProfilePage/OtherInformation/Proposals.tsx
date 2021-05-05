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
	firmOptions,
} from '../../../arraysOfData/ProfilePage/OtherInformation/Proposals';

const Heading = styled.h2`
	padding: 0 0 70px 70px;
	font-size: ${fontSize[23]};
	color: ${colors.darkNavyBlue};
	font-weight: 500;
`;

const ProposalsContainer = styled.section`
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
	grid-template-columns: repeat(6, 1fr);
	width: 100%;
	padding: 0 40px;
`;

const THead = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
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

const SeeMoreProposalsContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	padding-top: 45px;
	padding-right: 70px;
`;

const SeeMoreProposals = styled(Link)`
	font-size: ${fontSize[23]};
	color: ${colors.azure};
	font-weight: 500;
	text-decoration: none;
`;

const Proposals: FC = () => {
	return (
		<ProposalsContainer>
			<Heading>Proposals</Heading>
			<Table>
				<THead>
					<THeading>Name</THeading>
					<THeading>Entity</THeading>
					<THeading>Location</THeading>
					<THeading>Expertise</THeading>
					<THeading>Date</THeading>
					<THeading>Firm</THeading>
				</THead>
				<TBody>
					<TData>
						<TableSelect
							name="proposalsName1"
							options={nameOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsEntity1"
							options={entityOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsLocation1"
							options={locationOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsExpertise1"
							options={expertiseOptions}
						/>
					</TData>
					<TData>
						<DataPicker name="proposalsData1" />
					</TData>
					<TData>
						<TableSelect
							name="proposalsFirm1"
							options={firmOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsName2"
							options={nameOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsEntity2"
							options={entityOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsLocation2"
							options={locationOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsExpertise2"
							options={expertiseOptions}
						/>
					</TData>
					<TData>
						<DataPicker name="proposalsData2" />
					</TData>
					<TData>
						<TableSelect
							name="proposalsFirm2"
							options={firmOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsName3"
							options={nameOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsEntity3"
							options={entityOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsLocation3"
							options={locationOptions}
						/>
					</TData>
					<TData>
						<TableSelect
							name="proposalsExpertise3"
							options={expertiseOptions}
						/>
					</TData>
					<TData>
						<DataPicker name="proposalsData3" />
					</TData>
					<TData>
						<TableSelect
							name="proposalsFirm3"
							options={firmOptions}
						/>
					</TData>
				</TBody>
				<SeeMoreProposalsContainer>
					<SeeMoreProposals to="/proposals">
						See more proposals
					</SeeMoreProposals>
				</SeeMoreProposalsContainer>
			</Table>
		</ProposalsContainer>
	);
};

export default Proposals;
