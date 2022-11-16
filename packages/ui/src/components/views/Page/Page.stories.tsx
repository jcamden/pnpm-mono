import { expect } from '@storybook/jest';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args: Record<string, never>) => (
  <Page {...args} />
);

export const LoggedOut = Template.bind({});

LoggedOut.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  // You can also add some assertions.
  expect(canvas.queryByRole('button', { name: /Log out/i })).toBeNull();
  expect(canvas.queryByRole('button', { name: /Log in/i })).toBeTruthy();
};

export const LoggedIn = Template.bind({});

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);

  // You can also add some assertions.
  expect(canvas.queryByRole('button', { name: /Log in/i })).toBeNull();
  expect(canvas.queryByRole('button', { name: /Log out/i })).toBeTruthy();
};
