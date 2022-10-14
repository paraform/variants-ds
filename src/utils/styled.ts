import {
  ComponentProps,
  createElement,
  ElementType,
  forwardRef,
  ForwardRefExoticComponent,
  PropsWithoutRef,
} from "react";
import { variantProps } from "./variant-props";
import { Simplify, VariantOptions, Variants, VariantsConfig } from "./variants";

type StyledComponent<
  T extends ElementType,
  C extends VariantsConfig<V>,
  V extends Variants = C["variants"]
> = ForwardRefExoticComponent<
  PropsWithoutRef<ComponentProps<T> & VariantOptions<C>> &
    React.RefAttributes<T>
>;

type VariantsOf<T> = T extends VariantsConfig<infer V> ? V : {};

export function styled<
  T extends ElementType,
  C extends VariantsConfig<V>,
  V extends Variants = VariantsOf<C>
>(type: T, config: string | Simplify<C>): StyledComponent<T, C> {
  const styledProps =
    typeof config === "string"
      ? variantProps({ base: config, variants: {} })
      : variantProps(config);
  // eslint-disable-next-line react/display-name
  return forwardRef<T, ComponentProps<T> & VariantOptions<C>>((props, ref) =>
    createElement(type, { ...styledProps(props), ref })
  );
}
