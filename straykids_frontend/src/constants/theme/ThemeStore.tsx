import i18next from 'i18next';
import { createContext, useState } from 'react';
import { languageResources, Language } from '../lang/unit';

import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

interface I_ContextProps {
	lang: string;
	theme: string;

	switchLang: (
		lang: string,
		savePref?: boolean,
		event?: MouseEvent,
		value?: string
	) => void;
	switchTheme: (theme: string, savePref?: boolean) => void;
}

export const ThemeContext = createContext<I_ContextProps>({
	lang: '',
	theme: '',
	switchLang: () => null,
	switchTheme: () => null,
});

i18next
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: languageResources,
		fallbackLng: Language.FR,
		keySeparator: '.',
		interpolation: {
			escapeValue: false,
		},
	})
	.then(() => {
		i18next.changeLanguage(i18next.resolvedLanguage).then();
	});

export const ThemeStore = ({ children }: any) => {
	const [theme, setTheme] = useState<string>(() => {
		const localTheme = localStorage.getItem('theme');
		return localTheme ? JSON.parse(localTheme) : 'light';
	});
	const [lang, setLang] = useState<Language | string>(() => {
		const localLang = localStorage.getItem('i18nextLng');
		return localLang ? localLang : ('fr' as Language);
	});

	const switchLang = (lang: string): void => {
		localStorage.setItem('i18nextLang', lang);
		setLang(lang as Language);

		if (lang === 'en') i18next.changeLanguage(Language.EN).then();
		else if (lang === 'kr') i18next.changeLanguage(Language.KR).then();
		else i18next.changeLanguage(Language.FR).then();
	};

	const switchTheme = (theme: string): void => {
		localStorage.setItem('theme', theme);
		setTheme(theme);
	};

	return (
		<ThemeContext.Provider value={{ lang, theme, switchLang, switchTheme }}>
			{/* Icii, tout ce qui est lié au thème (css & autres) */}
			<Header switchLang={switchLang} switchTheme={switchTheme} />
			{children}
		</ThemeContext.Provider>
	);
};

const Header = ({ switchLang, switchTheme }: any) => {
	return (
		<>
			<button onClick={() => switchLang('fr')}>FR</button>
			<button onClick={() => switchLang('en')}>EN</button>
			<button onClick={() => switchLang('kr')}>KR</button>
		</>
	);
};
