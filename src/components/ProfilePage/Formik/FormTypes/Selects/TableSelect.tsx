import { FC } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

import { IOptions } from '../../../../../arraysOfData/ProfilePage/OtherInformation/JobInformation';
import { ISelectProps } from './AzureSelect';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

const TableSelectContainer = styled.div`
	&& select {
		font-size: ${fontSize[21]};
		color: ${colors.darkNavyBlue};
		border: none;
		cursor: pointer;
	}
`;

const TableSelect: FC<ISelectProps> = ({ name, options }) => {
	return (
		<TableSelectContainer>
			<label htmlFor={name}></label>
			<Field as="select" id={name} name={name}>
				{options.map(({ value, key }) => {
					return (
						<option key={value} value={value}>
							{key}
						</option>
					);
				})}
			</Field>
		</TableSelectContainer>
	);
};

export default TableSelect;
