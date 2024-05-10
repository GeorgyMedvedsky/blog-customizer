import { CSSProperties, useState } from 'react';
import { ArticleParamsForm } from '../article-params-form';
import { Article } from '../article';
import { defaultArticleState } from 'src/constants/articleProps';
import styles from './index.module.scss';

const App = () => {
	const [articleParams, setArticleParams] = useState(defaultArticleState);

	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': articleParams.fontFamily.value,
					'--font-size': articleParams.fontSize.value,
					'--font-color': articleParams.fontColor.value,
					'--bg-color': articleParams.backgroundColor.value,
					'--container-width': articleParams.contentWidth.value,
				} as CSSProperties
			}>

			<ArticleParamsForm
				articleParams={articleParams}
				setArticleParams={setArticleParams}
			/>
			<Article />
		</div>
	);
};

export default App;