import { FC } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

import { IOptions } from '../../../../../arraysOfData/ProfilePage/OtherInformation/JobInformation';
import SelectError from '../../FormErrors/SelectError';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

interface IAzureSelectProps {
	name: string;
	options: IOptions[];
}

const AzureSelectContainer = styled.div`
	padding-right: 30px;

	& select {
		padding: 6px 20px;
		background-color: ${colors.brightAzure};
		border-radius: 7px;
		border: none;
		outline: none;
		font-family: 'Roboto', sans-serif;
		font-size: ${fontSize[23]};
		color: ${colors.azure};
	}
`;

const AzureSelect: FC<IAzureSelectProps> = ({ name, options }) => {
	return (
		<AzureSelectContainer>
			<label htmlFor={name}></label>
			<Field as="select" id={name} name={name}>
				{options.map((option) => {
					return (
						<option key={option.value} value={option.value}>
							{option.key}
						</option>
					);
				})}
			</Field>
			<ErrorMessage name={name} component={SelectError} />
		</AzureSelectContainer>
	);
};

export default AzureSelect;
