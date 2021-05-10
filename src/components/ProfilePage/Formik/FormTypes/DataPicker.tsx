import { FC } from 'react';
import styled from 'styled-components';
import DataView from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Field, useField } from 'formik';

import { fontSize } from '../../../../styledHelpers/fontSizes';
import { colors } from '../../../../styledHelpers/colors';

interface IDataPicker {
	name: string;
}

const DataPickerContainer = styled.div`
	&& input {
		padding: 0;
		border: none !important;
		width: 100%;
		border-radius: 0;
		font-size: ${fontSize[21]};
		color: ${colors.darkNavyBlue};
		cursor: pointer;
	}
`;

const DataPicker: FC<IDataPicker> = ({ name }) => {
	const field = useField(name);
	const { setValue } = field[2];
	const { value } = field[0];

	return (
		<DataPickerContainer>
			<label htmlFor={name}></label>
			<Field name={name}>
				{() => (
					<DataView
						id={name}
						selected={value}
						onChange={(value) => setValue(value)}
					/>
				)}
			</Field>
		</DataPickerContainer>
	);
};

export default DataPicker;
