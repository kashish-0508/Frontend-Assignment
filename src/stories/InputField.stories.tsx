// src/stories/InputField.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { InputField } from "../components/InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = {
  args: {
    label: "Name",
    placeholder: "Enter your name",
    helperText: "This is helper text",
  },
};

export const Invalid: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    invalid: true,
    errorMessage: "Email is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Outlined" placeholder="Outlined" variant="outlined" />
      <InputField label="Filled" placeholder="Filled" variant="filled" />
      <InputField label="Ghost" placeholder="Ghost" variant="ghost" />
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <InputField label="Small" placeholder="Small" size="sm" />
      <InputField label="Medium" placeholder="Medium" size="md" />
      <InputField label="Large" placeholder="Large" size="lg" />
    </div>
  ),
};

/* --- NEW Stories for Optional Features --- */

export const Clearable: Story = {
  args: {
    label: "Search",
    placeholder: "Type something",
    clearable: true,
  },
};

export const PasswordToggle: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    passwordToggle: true,
  },
};

export const PasswordWithClear: Story = {
  args: {
    label: "Password",
    placeholder: "Enter password",
    type: "password",
    passwordToggle: true,
    clearable: true,
  },
};
