import * as React from 'react';
import Select from './Select';
import LabeledInput from './LabeledInput';
import { FormProperties } from '../models/form';
import { SelectProperties } from '../models/select';

export default class App extends React.Component<FormProperties, {}> {
    render() {
        return (
            <div>
                <Select {...this.props.cameraMakeSelectOptions} onChange={this.props.setCameraMake}/>
                <Select {...this.props.cameraModelSelectOptions} onChange={this.props.setCameraModel}/>
                <LabeledInput label='focal length (mm)' value={this.props.selectedFocalLength + ''} onChange={this.props.setFocalLength} />
                <LabeledInput label='aperture f/' value={this.props.selectedFStop + ''} onChange={this.props.setAperture} />
                <LabeledInput label={`subject distance (${this.props.distanceUnitDisplayName})`} value={this.props.subjectDistance + ''} onChange={this.props.setSubjectDistance} />
            </div>
        );
    }
}
