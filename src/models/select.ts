export interface SelectOption {
  value: any;
  display: string;
}

export interface SelectProperties {
  values: SelectValues;
  actions: SelectActions;
}

export interface SelectValues {
  values: Array<SelectOption>;
  value: any;
}

export interface SelectActions {
  onChange: Function;
}