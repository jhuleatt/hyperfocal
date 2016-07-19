import * as React from "react";
import Select from './Select';
import LabeledInput from './LabeledInput';
import { FormProperties } from '../models/form';

export default class App extends React.Component<FormProperties, {}> {
    render() {
        return (
            <div>
                <Select {...this.props.cameraTypes.makeSelectProperties()} />
                <LabeledInput label="focal length" value={this.props.selectedFocalLength+''} onChange={console.log.bind(null,'change!')}/>
                <LabeledInput label="aperture" value={this.props.selectedFStop+''} onChange={console.log.bind(null,'change!')}/>
                <LabeledInput label="subject distance" value={this.props.subjectDistance+''} onChange={console.log.bind(null,'change!')}/>
            </div>
        );
    }
}
