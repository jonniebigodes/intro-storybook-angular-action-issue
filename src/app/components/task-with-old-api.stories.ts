import { Meta, Story } from '@storybook/angular';

import { action } from '@storybook/addon-actions';

import { TaskComponent } from './task.component';

export default {
  component: TaskComponent,
  title: 'OLD API/Task',
  excludeStories: /.*Data$/,
} as Meta;

export const actionsData = {
  pinTask: action('pinTask'),
  archiveTask: action('archiveTask'),
};
const Template: Story = (args) => ({
  props: {
    ...args,
    onPinTask: actionsData.pinTask,
    onArchiveTask: actionsData.archiveTask,
  },
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
