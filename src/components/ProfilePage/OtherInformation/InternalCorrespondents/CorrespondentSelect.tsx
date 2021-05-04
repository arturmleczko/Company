import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { Field } from 'formik';
import { useSelector } from 'react-redux';

import { IState } from '../../../../reducers';
import { IUsersReducer } from '../../../../reducers/usersReducer';

import { ISingleUser } from '../../../../entities/users';

import { colors } from '../../../../styledHelpers/colors';
import { fontSize } from '../../../../styledHelpers/fontSizes';

import defaultUsers from '../../../../tools/apiTools/defaultValues/defaultUsers';

interface ICorrespondentSelect {
	name: string;
}

const CorrespondentSelectContainer = styled.div`
	display: flex;
	align-items: center;

	&& select {
		padding: 0 20px;
		border: none;
		background-color: ${colors.greyEleven};
		font-family: 'Roboto', sans-serif;
		font-size: ${fontSize[23]};
		color: ${colors.darkNavyBlue};
		font-weight: 500;
		cursor: pointer;

		&:focus {
			border: none;
		}
	}
`;

const CorrespondentSelect: FC<ICorrespondentSelect> = ({ name }) => {
	const [users, setUsers] = useState<ISingleUser[]>(defaultUsers);

	const { usersList } = useSelector<IState, IUsersReducer>((globalState) => ({
		...globalState.users,
	}));

	useEffect(() => {
		if (usersList.length !== 0) {
			setUsers(usersList);
		}
	}, [usersList]);

	return (
		<CorrespondentSelectContainer>
			<label htmlFor={name}></label>
			<Field as="select" id={name} name={name}>
				{users.map(({ name, id }) => {
					if (name !== 'Ervin Howell') {
						return (
							<option key={name} value={id}>
								{name}
							</option>
						);
					} else {
						return null;
					}
				})}
			</Field>
		</CorrespondentSelectContainer>
	);
};

export default CorrespondentSelect;
