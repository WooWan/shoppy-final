import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import BasicButton from "../components/ui/classnames/BasicButton";

export default {
  title: 'Button',
  component: BasicButton,
} as ComponentMeta<typeof BasicButton>;


const Template: ComponentStory<typeof BasicButton> = (args => (<BasicButton {...args}>Primary</BasicButton>));
export const Primary = Template.bind({});

Primary.args = {
  intent: 'primary',
  size: 'small',
}