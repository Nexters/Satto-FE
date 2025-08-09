import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "Design System/Divider",
  component: Divider,
  parameters: { layout: "padded" },
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const Single: Story = {
  name: "Single (Figma Spec)",
  render: () => (
    <div className="relative w-[480px] h-[400px] bg-white border border-gray-8 overflow-hidden">
      <Divider />
    </div>
  ),
};
