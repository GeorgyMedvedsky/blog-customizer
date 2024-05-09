import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import clsx from 'clsx';
import { Text } from '../text';
import { Select } from '../select';
import {
	fontFamilyOptions,
	fontSizeOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	OptionType,
	defaultArticleState,
} from 'src/constants/articleProps';
import { RadioGroup } from '../radio-group';
import { Separator } from '../separator';

enum articleParamsKeys {
	FONT_FAMILY = 'fontFamily',
	FONT_SIZE = 'fontSize',
	FONT_COLOR = 'fontColor',
	BACKGROUND_COLOR = 'backgroundColor',
	CONTENT_WIDTH = 'contentWidth',
}

type TArticleParams = {
	fontFamily: OptionType;
	fontSize: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
};

type ArticleParamsFormProps = {
	articleParams: TArticleParams;
	setArticleParams: React.Dispatch<
		React.SetStateAction<{
			fontFamily: OptionType;
			fontSize: OptionType;
			fontColor: OptionType;
			backgroundColor: OptionType;
			contentWidth: OptionType;
		}>
	>;
};

export const ArticleParamsForm: React.FC<ArticleParamsFormProps> = ({
	articleParams,
	setArticleParams,
}) => {
	const [visible, setVisible] = useState(false);
	const [articleParamsForm, setArticleParamsForm] = useState({
		fontFamily: articleParams.fontFamily,
		fontSize: articleParams.fontSize,
		fontColor: articleParams.fontColor,
		backgroundColor: articleParams.backgroundColor,
		contentWidth: articleParams.contentWidth,
	});

	const handleToggleVisible = () => {
		setVisible(!visible);
	};

	const handleParamChange = (paramName: string, option: OptionType) => {
		setArticleParamsForm((prevParams) => ({
			...prevParams,
			[paramName]: option,
		}));
	};
	// REF
	const handleResetForm = () => {
		setArticleParamsForm({
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
		setArticleParams({
			fontFamily: defaultArticleState.fontFamilyOption,
			fontSize: defaultArticleState.fontSizeOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			contentWidth: defaultArticleState.contentWidth,
		});
	};

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setArticleParams({
			fontFamily: articleParamsForm.fontFamily,
			fontSize: articleParamsForm.fontSize,
			fontColor: articleParamsForm.fontColor,
			backgroundColor: articleParamsForm.backgroundColor,
			contentWidth: articleParamsForm.contentWidth,
		});
	};

	return (
		<>
			<ArrowButton state={visible} handleClick={handleToggleVisible} />
			{visible && (
				<aside
					className={clsx(styles.container, {
						[styles.container_open]: visible,
					})}>
					<form className={styles.form} onSubmit={handleSubmitForm}>
						<Text as={'h2'} size={31} weight={800} uppercase={true}>
							Задайте параметры
						</Text>
						<Select
							selected={articleParamsForm.fontFamily}
							options={fontFamilyOptions}
							title='Шрифт'
							onChange={(option) => {
								handleParamChange(articleParamsKeys.FONT_FAMILY, option);
							}}
						/>
						<RadioGroup
							name='font-size'
							selected={articleParamsForm.fontSize}
							options={fontSizeOptions}
							title='Размер шрифта'
							onChange={(option) => {
								handleParamChange(articleParamsKeys.FONT_SIZE, option);
							}}
						/>
						<Select
							selected={articleParamsForm.fontColor}
							options={fontColors}
							title='Цвет шрифта'
							onChange={(option) => {
								handleParamChange(articleParamsKeys.FONT_COLOR, option);
							}}
						/>
						<Separator />
						<Select
							selected={articleParamsForm.backgroundColor}
							options={backgroundColors}
							title='Цвет фона'
							onChange={(option) => {
								handleParamChange(articleParamsKeys.BACKGROUND_COLOR, option);
							}}
						/>
						<Select
							selected={articleParamsForm.contentWidth}
							options={contentWidthArr}
							title='Ширина контента'
							onChange={(option) => {
								handleParamChange(articleParamsKeys.CONTENT_WIDTH, option);
							}}
						/>
						<div className={styles.bottomContainer}>
							<Button title='Сбросить' type='reset' onClick={handleResetForm} />
							<Button title='Применить' type='submit' />
						</div>
					</form>
				</aside>
			)}
		</>
	);
};
