import { Meta, Story } from '@storybook/angular';

import { TaskComponent } from './task.component';

export default {
  component: TaskComponent,
  title: 'NEW API/Task',
  argTypes: {
    pinTask: {
      action: 'pinTask',
    },
    archiveTask: {
      action: 'archiveTask',
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: args,
});

export const Default = Template.bind({});
Default.args = {
  task: {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_PINNED',
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...Default.args['task'],
    state: 'TASK_ARCHIVED',
  },
};
