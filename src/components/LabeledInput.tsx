import * as React from 'react';
import {InputProperties} from '../models/form';

export default class LabeledInput extends React.Component<InputProperties, {}> {
    render() {
        return (
            <div>
              {this.props.label}: <input value={this.props.value} onChange={this.props.onChange} type="text"/>
            </div>
        );
    }
}
