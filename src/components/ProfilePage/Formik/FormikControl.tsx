import { FC } from 'react';

import Input from './FormTypes/Input';

export enum FormType {
	Input = 'input',
	Select = 'select',
	Date = 'date',
}

interface IFormikControlProps {
	control: FormType;
	type: string;
	name: string;
	fontWeight?: number;
}

const FormikControl: FC<IFormikControlProps> = ({ control, ...rest }) => {
	switch (control) {
		case FormType.Input:
			return <Input {...rest} />;
		case FormType.Select:
		case FormType.Date:
		default:
			return null;
	}
};

export default FormikControl;
