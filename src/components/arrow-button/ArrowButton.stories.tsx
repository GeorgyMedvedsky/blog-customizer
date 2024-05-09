import type { Meta, StoryObj } from '@storybook/react';

import { ArrowButton, OnClick } from './ArrowButton';

const meta: Meta<typeof ArrowButton> = {
	component: ArrowButton,
};

export default meta;
type Story = StoryObj<typeof ArrowButton>;

export const ArrowButtonStory: Story = {
	render: (args) => {
		// Здесь мы создаем функцию handleClick для демонстрации в Storybook
		const handleClick: OnClick = () => {
			console.log('Кнопка была нажата');
		};

		// Передаем state и handleClick как пропсы
		return (
			<>
				<ArrowButton state={args.state} handleClick={handleClick} />
			</>
		);
	},
	args: {
		state: false, // Значение по умолчанию для state
	},
};
