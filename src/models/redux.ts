export enum ActionTypes {
  Increment
}

export interface Action {
  type: ActionTypes;
  payload: any;
}

export interface IncrementAction extends Action {
  payload: number;
}

export interface State {
  count: Number;
}