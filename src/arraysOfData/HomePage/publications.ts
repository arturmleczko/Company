import { PublicationColor } from '../../components/common/Publication/ColorMatching';

import lastPublication1Img from '../../media/images/last-publication-1.jpg';
import lastPublication2Img from '../../media/images/last-publication-2.jpg';
import lastPublication3Img from '../../media/images/last-publication-3.jpg';
import profile2 from '../../media/images/profile2.jpg';
import profile3 from '../../media/images/profile3.jpg';
import profile4 from '../../media/images/profile4.jpg';

interface publicationData {
	publicationId: number;
	publicationAuthor: string;
	publicationDate: string;
	publicationPhotoSrc: string;
	publicationProfileSrc: string;
	publicationText: string;
	publicationColor: PublicationColor;
}

export const publicationsData: publicationData[] = [
	{
		publicationId: 1,
		publicationAuthor: 'Nayla Coombes',
		publicationDate: '17 February 2021',
		publicationPhotoSrc: lastPublication3Img,
		publicationProfileSrc: profile4,
		publicationText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac nisi et odio volutpat luctus.',
		publicationColor: PublicationColor.dark,
	},
	{
		publicationId: 2,
		publicationAuthor: 'Suzanne Finley',
		publicationDate: '16 April 2020',
		publicationPhotoSrc: lastPublication1Img,
		publicationProfileSrc: profile2,
		publicationText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eleifend tortor vel risus hendrerit, ut.',
		publicationColor: PublicationColor.dark,
	},
	{
		publicationId: 3,
		publicationAuthor: 'Kamile Glover',
		publicationDate: '25 June 2020',
		publicationPhotoSrc: lastPublication2Img,
		publicationProfileSrc: profile3,
		publicationText:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id faucibus metus. Duis ultricies, dolor.',
		publicationColor: PublicationColor.dark,
	},
];
