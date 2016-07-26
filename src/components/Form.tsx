import * as React from 'react';
import Select from './Select';
import LabeledInput from './LabeledInput';
import { FormProperties, SelectProperties } from '../models/form';

export default class App extends React.Component<FormProperties, {}> {
    render() {
        const cameraMakes: SelectProperties = new SelectProperties(this.props.cameraTypes.getCameraMakes(), this.props.selectedCamera.make);
        const cameraModels: SelectProperties = new SelectProperties(this.props.cameraTypes.getCameraModels(this.props.selectedCamera.make), this.props.selectedCamera.model);
        return (
            <div>
                <Select {...cameraMakes} onChange={this.props.setCameraMake}/>
                <Select {...cameraModels} onChange={this.props.setCameraModel}/>
                <LabeledInput label='focal length' value={this.props.selectedFocalLength + ''} onChange={this.props.setFocalLength} />
                <LabeledInput label='aperture' value={this.props.selectedFStop + ''} onChange={this.props.setAperture} />
                <LabeledInput label='subject distance' value={this.props.subjectDistance + ''} onChange={this.props.setSubjectDistance} />
            </div>
        );
    }
}
