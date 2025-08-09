import type { Preview } from "@storybook/react-vite";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    docs: {
      toc: true,
    },
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default preview;
