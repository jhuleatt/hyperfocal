import * as React from 'react';
import {InputProperties} from '../models/form';

export default class LabeledInput extends React.Component<InputProperties, {}> {
    valueChange = (e: React.SyntheticEvent) => {
      const eventElement: HTMLInputElement = (e.target as HTMLInputElement);
      const newValue = eventElement.value;
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
