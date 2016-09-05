import * as React from 'react';
import {SelectProperties} from '../models/select';
import { unwrapEvent } from '../util/reactHelpers';

export default class Select extends React.Component<SelectProperties, {}> {
    valueChange = (e: React.SyntheticEvent) => {
      const newValue = unwrapEvent(e);
      this.props.onChange(newValue);
    }

    render() {
      return (
          <select value={this.props.value} onChange={this.valueChange}>
            {
              this.props.values.map((val, key) => {
                return <option value={val.value} key={key}>{val.display}</option>;
              })
            }
          </select>
      );
    }
}
