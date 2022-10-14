// CX

export type ClassValue = string | boolean | null | undefined | ClassValue[];
export type CxOptions = ClassValue[];
export type CxReturn = string;

export const cx = <T extends CxOptions>(...classes: T): CxReturn =>
  // @ts-ignore
  classes.flat(Infinity).filter(Boolean).join(" ");
