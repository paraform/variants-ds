import {
  Simplify,
  VariantOptions,
  variants,
  Variants,
  VariantsConfig,
} from "./variants";

/**
 * Utility type to infer the first argument of a variantProps function.
 */
export type VariantPropsOf<T> = T extends (props: infer P) => any ? P : never;

/**
 * Type for the variantProps() argument – consists of the VariantOptions and an optional className for chaining.
 */
type VariantProps<
  C extends VariantsConfig<V>,
  V extends Variants = C["variants"]
> = VariantOptions<C> & { className?: string };

export function variantProps<
  C extends VariantsConfig<V>,
  V extends Variants = C["variants"]
>(config: Simplify<C>) {
  const variantClassName = variants<C>(config);
  return <P extends VariantProps<C>>(props: P) => {
    const result: any = {};

    // Pass-through all unrelated props
    for (let prop in props) {
      if (config.variants && !(prop in config.variants)) {
        result[prop] = props[prop];
      }
    }

    // Add the optionally passed className prop for chaining
    result.className = [props.className, variantClassName(props)]
      .filter(Boolean)
      .join(" ");

    return result as { className: string } & Omit<P, keyof C["variants"]>;
  };
}
