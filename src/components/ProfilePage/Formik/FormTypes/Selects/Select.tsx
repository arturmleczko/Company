import { FC } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';

import { IOptions } from '../../../../../arraysOfData/ProfilePage/OtherInformation/JobInformation';

import { fontSize } from '../../../../../styledHelpers/fontSizes';
import { colors } from '../../../../../styledHelpers/colors';

export interface ISelectProps {
	name: string;
	options: IOptions[];
}

const SelectContainer = styled.div`
	padding-right: 30px;

	&& select {
		font-size: ${fontSize[23]};
		color: ${colors.darkNavyBlue};
		border: none;
		cursor: pointer;
	}
`;

const Select: FC<ISelectProps> = ({ name, options }) => {
	return (
		<SelectContainer>
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
		</SelectContainer>
	);
};

export default Select;
