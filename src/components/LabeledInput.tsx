import * as React from 'react';
import {InputProperties} from '../models/input';
import { unwrapEvent } from '../util/reactHelpers';

export default class LabeledInput extends React.Component<InputProperties, {}> {
    valueChange = (e: React.SyntheticEvent) => {
      const newValue = unwrapEvent(e);
      this.props.onChange(newValue);
    }

    render() {
        return (
            <div>
              {this.props.label}: <input value={this.props.value} onChange={this.valueChange} type='text'/>
            </div>
        );
    }
}
