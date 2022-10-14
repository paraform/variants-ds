import * as React from "react";
import { cx, variants, VariantPropsOf } from "@/utils";
import { Colorways } from "@/types";

const card = variants({
  base: "bg-loContrast p-4 shadow-bold1 border-subtle2 dark:border-tint border-1 border-dotted rounded-md",
  variants: {
    elevation: {
      none: "shadow-none",
      lg: "shadow-2xl",
    },
  },
  defaultVariants: {
    elevation: "lg",
  },
});

type CardProps = VariantPropsOf<typeof card> & {
  className?: string;
  colorway?: typeof Colorways[number];
  children?: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  colorway,
  elevation,
  className,
  children,
}) => {
  return (
    <div className={cx(colorway, card({ elevation: elevation }), className)}>
      {children}
    </div>
  );
};

export default Card;
