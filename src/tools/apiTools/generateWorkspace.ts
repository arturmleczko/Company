import entitiesIcon from '../../media/icons/entities3.svg';
import contractIcon from '../../media/icons/contract.svg';
import groupNormIcon from '../../media/icons/book.svg';

const generateWorkspace = (commentId: number): [string, string] => {
	switch (commentId % 5) {
		case 1:
			return [contractIcon, 'Client contract'];
		case 2:
			return [contractIcon, 'Supplier contract'];
		case 3:
			return [entitiesIcon, 'Corporate'];
		case 4:
			return [groupNormIcon, 'Group norms'];
		default:
			return [contractIcon, 'Real estate contracts'];
	}
};

export default generateWorkspace;
