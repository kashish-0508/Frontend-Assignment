// src/stories/DataTable.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { DataTable } from "../components/DataTable";

interface User {
  id: number;
  name: string;
  email: string;
}

const sampleData: User[] = [
  { id: 1, name: "Kashish", email: "kashish@example.com" },
  { id: 2, name: "Rahul", email: "rahul@example.com" },
  { id: 3, name: "Aarav", email: "aarav@example.com" },
];

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DataTable<User>>;

export const Default: Story = {
  args: {
    data: sampleData,
    columns: [
      { key: "name", title: "Name", dataIndex: "name", sortable: true },
      { key: "email", title: "Email", dataIndex: "email" },
    ],
    selectable: true,
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "email", title: "Email", dataIndex: "email" },
    ],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: [
      { key: "name", title: "Name", dataIndex: "name" },
      { key: "email", title: "Email", dataIndex: "email" },
    ],
  },
};
