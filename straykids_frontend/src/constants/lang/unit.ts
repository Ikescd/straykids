import translationEN from './traductions/en.json';
import translationFR from './traductions/fr.json';
import translationKR from './traductions/kr.json';

export enum Language {
	EN = 'en',
	FR = 'fr',
	KR = 'kr',
}

export const languageResources = {
	en: {
		translation: translationEN,
	},
	fr: {
		translation: translationFR,
	},
	kr: {
		translation: translationKR,
	},
};
