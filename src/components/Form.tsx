import * as React from 'react';
import Select from './Select';
import LabeledInput from './LabeledInput';
import { FormProperties } from '../models/form';
import { SelectProperties } from '../models/select';
import { DescriptiveUnit } from '../models/units';

export default class App extends React.Component<FormProperties, {}> {
    render() {
        const cameraMakeSelectOptions: SelectProperties = {
            values: this.props.values.cameraMakeSelectValues,
            actions: {
                onChange: this.props.actions.setCameraMake
            }
        };

        const cameraModelSelectOptions: SelectProperties = {
            values: this.props.values.cameraModelSelectValues,
            actions: {
                onChange: this.props.actions.setCameraModel
            }
        };

        const distanceUnitSelectOptions: SelectProperties = {
            values: {
                value: this.props.values.selectedDistanceUnit,
                values: this.props.values.distanceUnitSelectValues.map((unitDescription: DescriptiveUnit) => {
                    return {
                        value: unitDescription.value,
                        display: unitDescription.display
                    };
                })
            },
            actions: {
                onChange: this.props.actions.setDistanceUnit
            }
        };
        return (
            <div>
                <Select {...cameraMakeSelectOptions}/>
                <Select {...cameraModelSelectOptions}/>
                <LabeledInput label='focal length (mm)' value={this.props.values.selectedFocalLength + ''} onChange={this.props.actions.setFocalLength} />
                <LabeledInput label='aperture f/' value={this.props.values.selectedFStop + ''} onChange={this.props.actions.setAperture} />
                <LabeledInput label={`subject distance (${this.props.values.distanceUnitDisplayName})`} value={this.props.values.subjectDistance + ''} onChange={this.props.actions.setSubjectDistance} />
                <Select {...distanceUnitSelectOptions}/>
            </div>
        );
    }
}
