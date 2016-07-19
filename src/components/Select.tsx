import * as React from 'react';
import {SelectProperties} from '../models/form';

export default class Select extends React.Component<SelectProperties, {}> {
    render() {
        return (
            <select value={this.props.value} onChange={this.props.onChange}>
              {
                this.props.values.map((val) => {
                  return <option value={val.value} key={val.value}>{val.display}</option>
                })
              }
            </select>
        );
    }
}
