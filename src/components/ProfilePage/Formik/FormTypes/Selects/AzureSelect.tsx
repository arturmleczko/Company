import { FC } from 'react';
import styled from 'styled-components';
import { Field, ErrorMessage } from 'formik';

import { IOptions } from '../../../../../arraysOfData/ProfilePage/OtherInformation/JobInformation';
import TextError from '../../FormErrors/TextError';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

export interface ISelectProps {
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
		cursor: pointer;
	}
`;

const AzureSelect: FC<ISelectProps> = ({ name, options }) => {
	return (
		<AzureSelectContainer>
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
			<ErrorMessage name={name} component={TextError} />
		</AzureSelectContainer>
	);
};

export default AzureSelect;
