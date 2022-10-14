import * as React from "react";

import styles from "./button.module.css";
import { Colorways } from "@/types";
import { cx } from "@/utils";

const ButtonSizes = ["xs", "sm", "md", "lg"] as const;
const ButtonKinds = ["solid", "flat", "outline", "ghost", "link"] as const;

type ButtonVariantProps = {
  kind?: typeof ButtonKinds[number];
  size?: typeof ButtonSizes[number];
  colorway?: typeof Colorways[number];
  rounded?: boolean;
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  ButtonVariantProps;

const Button = React.forwardRef(
  (props: ButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) => {
    const { colorway, kind, size, rounded, className, ...rest } = props;

    return (
      <button
        {...rest}
        ref={ref}
        className={cx(
          styles.button,
          colorway,
          kind && styles[kind],
          size && styles[size],
          rounded && styles.rounded,
          className
        )}
      />
    );
  }
);

Button.defaultProps = {
  kind: "solid",
  size: "md",
  colorway: "primary",
  rounded: false,
  disabled: false,
};

Button.displayName = "Button";
export { Button, ButtonSizes, ButtonKinds };
export type { ButtonProps };
