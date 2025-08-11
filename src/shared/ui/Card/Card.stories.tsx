import type { Meta, StoryObj } from "@storybook/react-vite";
import Card from ".";
import type { CardProps, CardMProps, CardSProps } from "./Card.types";

const meta: Meta<typeof Card> = {
  title: "Design System/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Card 디자인 시스템 (M/S)",
      },
    },
  },
  argTypes: {
    size: { control: { type: "inline-radio" }, options: ["M", "S"] },
    state: { control: { type: "select" } },
    title: { control: "text" },
    date: { control: "text" },
    chipLabel: { control: "text" },
    chipVisible: { control: "boolean" },
    balls: { control: false },
    bonusBall: { control: false },
    iconRight: { control: false },
    footerLeft: { control: "text" },
    footerRight: { control: "text" },
    ball: { control: false },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

const sampleBalls = [
  { number: 4, color: "yellow" as const },
  { number: 12, color: "blue" as const },
  { number: 19, color: "blue" as const },
  { number: 27, color: "red" as const },
  { number: 33, color: "red" as const },
  { number: 41, color: "gray" as const },
];

export const M_Joined: Story = {
  name: "M / 참여",
  args: {
    size: "M",
    state: "joined",
    title: "1180회",
    date: "2025-07-17",
    chipLabel: "참여",
    chipVisible: true,
    balls: sampleBalls,
    bonusBall: { number: 7, color: "green" },
    footerLeft: "17명 당첨",
    footerRight: "1,593,643,500원 씩",
  } satisfies CardMProps,
};

export const M_NotJoined: Story = {
  name: "M / 미참여",
  args: {
    size: "M",
    state: "not_joined",
    title: "1180회",
    date: "2025-07-17",
    chipLabel: "미참여",
    chipVisible: false,
    balls: sampleBalls,
    bonusBall: { number: 7, color: "green" },
    footerLeft: "17명 당첨",
    footerRight: "1,593,643,500원 씩",
  } satisfies CardMProps,
};

export const S_Default: Story = {
  name: "S / 기본",
  args: {
    size: "S",
    state: "default",
    rank: 1,
    title: "160회",
    ball: { number: 4, color: "yellow" },
  } satisfies CardSProps,
};

export const Playground: Story = {
  args: {
    size: "M",
    state: "joined",
    title: "1180회",
    date: "2025-07-17",
    chipLabel: "참여",
    chipVisible: true,
    balls: sampleBalls,
    bonusBall: { number: 7, color: "green" },
    footerLeft: "17명 당첨",
    footerRight: "1,593,643,500원 씩",
  } as CardProps,
  render: (args) => <Card {...args} />,
};
