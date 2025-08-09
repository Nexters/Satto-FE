export const cardRadius = {
  container: "rounded-[12px]",
  badge: "rounded-[6px]",
} as const;

export const cardBase = {
  bg: "bg-white",
} as const;

export const cardM = {
  container: [
    cardBase.bg,
    cardRadius.container,

    "p-4 flex flex-col gap-4 w-[327px]",
  ].join(" "),
  header: ["flex flex-row items-center gap-[6px] w-full"].join(" "),
  title: [
    "text-[18px] leading-6 font-bold tracking-[-0.015em] text-gray-1",
  ].join(" "),
  divider: ["w-px h-[10px] bg-gray-5"].join(" "),
  date: [
    "text-[12px] leading-6 font-medium tracking-[-0.015em] text-gray-4",
  ].join(" "),
  ballsRow: ["flex flex-row items-center gap-2 w-full"].join(" "),
  bonusDivider: ["text-gray-3 text-[10px] leading-6 font-bold mx-1"].join(" "),
  ballWrap: ["relative w-8 h-8"].join(" "),
  ballNumber: [
    "absolute inset-0 flex items-center justify-center text-[14px] leading-6 font-extrabold tracking-[-0.015em] text-white",
  ].join(" "),
  iconRight: [
    "w-[14px] h-[14px] rounded-[10px] flex items-center justify-center",
  ].join(" "),
  footerBadge: [
    cardRadius.badge,

    "border border-gray-8 px-3 py-2 flex flex-row items-center gap-1 w-full",
  ].join(" "),
  footerText: [
    "text-[12px] leading-6 font-semibold tracking-[-0.015em] text-gray-1",
  ].join(" "),
  footerDot: ["w-[3px] h-[3px] rounded-full bg-gray-6"].join(" "),
} as const;

export const cardS = {
  container: [
    cardBase.bg,
    cardRadius.container,

    "w-[327px] h-[77px] px-5 py-4 flex flex-row items-center gap-4",
  ].join(" "),
  ballWrap: ["relative w-8 h-8"].join(" "),
  ballNumber: [
    "absolute inset-0 flex items-center justify-center text-[14px] leading-6 font-extrabold tracking-[-0.015em] text-white",
  ].join(" "),
  textWrap: ["flex-1 flex flex-col"].join(" "),
  title: [
    "text-[18px] leading-6 font-semibold tracking-[-0.015em] text-gray-3",
  ].join(" "),
  rankRow: ["flex items-center gap-1"].join(" "),
  rank: [
    "text-[12px] leading-6 font-medium tracking-[-0.015em] text-[#6E777C]",
  ].join(" "),
  rankIcon: ["w-[14px] h-[14px] object-contain"].join(" "),
} as const;
