export interface SelectOption {
  value: string;
  display: string;
}

export interface SelectProperties {
  values: Array<SelectOption>;
  value: string;
  onChange: Function;
}