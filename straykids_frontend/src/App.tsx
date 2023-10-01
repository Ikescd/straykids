import { useTranslation } from 'react-i18next';
import { ThemeStore } from './constants/theme/ThemeStore';

function App() {
	return (
		<ThemeStore>
			{/* les routes */}
			<Hello />
		</ThemeStore>
	);
}

const Hello = () => {
	const { t } = useTranslation();

	return (
		<h1>
			{t('hello')}

			{t('traduction_wip')}

			{t('no_trad')}
		</h1>
	);
};

export default App;
