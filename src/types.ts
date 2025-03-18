// eslint-disable ban-types

export type StringLiteralOrString<TLiteral extends string> =
  | TLiteral
  | (string & {});
