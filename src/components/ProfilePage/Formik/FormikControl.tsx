import { FC } from 'react';

import Input from './FormTypes/Inputs/Input';
import BoldInput from './FormTypes/Inputs/BoldInput';

export enum FormType {
	Input = 'input',
	BoldInput = 'boldInput',
	Select = 'select',
	Date = 'date',
}

interface IFormikControlProps {
	control: FormType;
	type: string;
	name: string;
}

const FormikControl: FC<IFormikControlProps> = ({ control, ...rest }) => {
	switch (control) {
		case FormType.Input:
			return <Input {...rest} />;
		case FormType.BoldInput:
			return <BoldInput {...rest} />;
		case FormType.Select:
		case FormType.Date:
		default:
			return null;
	}
};

export default FormikControl;
