import { colors } from '../../../styledHelpers/colors';

interface PublicationColorSpec {
	textColor: string;
	dateColor: string;
	authorColor: string;
}

export enum PublicationColor {
	bright,
	dark,
}

const brightColor: PublicationColorSpec = {
	textColor: colors.white,
	dateColor: colors.greySeven,
	authorColor: colors.greyEight,
};

const darkColor: PublicationColorSpec = {
	textColor: colors.darNavyBlue,
	dateColor: colors.greyTwo,
	authorColor: colors.greySix,
};

export const getTextColor = (publicationColor: PublicationColor): string => {
	switch (publicationColor) {
		case PublicationColor.bright:
			return brightColor.textColor;
		case PublicationColor.dark:
			return darkColor.textColor;
	}
};

export const getDateColor = (publicationColor: PublicationColor): string => {
	switch (publicationColor) {
		case PublicationColor.bright:
			return brightColor.dateColor;
		case PublicationColor.dark:
			return darkColor.dateColor;
	}
};

export const getAuthorColor = (publicationColor: PublicationColor): string => {
	switch (publicationColor) {
		case PublicationColor.bright:
			return brightColor.authorColor;
		case PublicationColor.dark:
			return darkColor.authorColor;
	}
};
