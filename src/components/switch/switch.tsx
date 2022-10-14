import * as React from "react";
import * as SwitchPrimitive from "@radix-ui/react-switch";
import { SwitchProps } from "@radix-ui/react-switch";

import styles from "./switch.module.css";
import { cx, variantProps, VariantPropsOf } from "@/utils";

const switchVariants = variantProps({
  base: cx("primary", styles.root),
  variants: {
    size: {
      sm: styles.sm,
      md: styles.md,
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type Props = SwitchProps & VariantPropsOf<typeof switchVariants>;

const Switch: React.FC<Props> = (props) => {
  return (
    <SwitchPrimitive.Root {...switchVariants(props)}>
      <SwitchPrimitive.Thumb className={styles.thumb} />
    </SwitchPrimitive.Root>
  );
};

Switch.defaultProps = {
  size: "md",
};
Switch.displayName = "Switch";
export { Switch };
