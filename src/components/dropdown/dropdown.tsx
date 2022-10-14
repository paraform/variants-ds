// import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
import { cx, styled } from "@/utils";
import styles from "./dropdown.module.css";

const Root = DropdownPrimitive.Root;
const Portal = DropdownPrimitive.Portal;
const Sub = DropdownPrimitive.Sub;
const Trigger = DropdownPrimitive.Trigger;
const SubTrigger = DropdownPrimitive.SubTrigger;

const Content = styled(DropdownPrimitive.Content, {
  base: cx(
    "neutral",
    styles.content,
    "radix-state-open:radix-side-top:animate-slideDownAndFade radix-state-open:radix-side-right:animate-slideLeftAndFade radix-state-open:radix-side-bottom:animate-slideUpAndFade radix-state-open:radix-side-left:animate-slideRightAndFade"
  ),
  variants: {},
});

const SubContent = styled(DropdownPrimitive.SubContent, {
  base: styles.content,
  variants: {},
});

const Arrow = styled(DropdownPrimitive.Arrow, {
  base: styles.arrow,
  variants: {},
});

const Item = styled(DropdownPrimitive.Item, {
  base: cx("primary", styles.item),
  variants: {},
});
const Group = DropdownPrimitive.Group;

const RadioItem = styled(DropdownPrimitive.RadioItem, {
  base: cx("primary", styles.item),
  variants: {},
});
const RadioGroup = DropdownPrimitive.RadioGroup;

const CheckboxItem = styled(DropdownPrimitive.CheckboxItem, {
  base: cx("primary", styles.item),
  variants: {},
});

const ItemIndicator = styled(DropdownPrimitive.ItemIndicator, {
  base: styles.indicator,
  variants: {},
});

const Label = styled(DropdownPrimitive.Label, {
  base: cx("primary", styles.label),
  variants: {},
});

const Separator = styled(DropdownPrimitive.Separator, {
  base: styles.separator,
  variants: {},
});

type SlotProps = {
  children?: React.ReactNode;
};

const RightSlot: React.FC<SlotProps> = ({ children }) => {
  return <div className={styles.rightSlot}>{children}</div>;
};

RightSlot.displayName = "RightSlot";

const LeftSlot: React.FC<SlotProps> = ({ children }) => {
  return <div className={styles.leftSlot}>{children}</div>;
};

LeftSlot.displayName = "LeftSlot";

export {
  Root,
  Portal,
  Sub,
  Content,
  SubContent,
  Trigger,
  SubTrigger,
  Arrow,
  Item,
  Group,
  RadioItem,
  RadioGroup,
  CheckboxItem,
  ItemIndicator,
  Label,
  Separator,
  RightSlot,
  LeftSlot,
};
