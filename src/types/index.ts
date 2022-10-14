export const Colorways = ["primary", "success", "danger", "neutral"] as const;
export const Colors = [
  "slate",
  "gray",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;
export const AllColors = [...Colorways, ...Colors] as const;
