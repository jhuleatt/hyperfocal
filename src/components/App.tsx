import * as React from 'react';
import { connect } from 'react-redux';
import { State, Initializing, StateModel } from '../models/state';
import {
    setFocalLength,
    setAperture,
    setSubjectDistance,
    setCameraMake,
    setCameraModel,
    initialize
} from '../actions/actions';
import * as _ from 'lodash';
import Form from './Form';
import Visualization from './Visualization';
import { FormProperties } from '../models/form';
import { Unit } from '../models/units';
import { VizProperties } from '../models/visualization';
import { convertFromMM, convertToMM, calculateHyperfocal } from '../util/calculations';

function isInitializing (x: any): x is Initializing {
  return typeof x.progress === 'number';
};

export class App extends React.Component<any, {}> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        if (this.props.isInitializing === true) {
            return (<h1>INITIALIZING {this.props.progress} %</h1>);
        } else {
            return (
                <div>
                    <p>The source can be found on <a href='https://github.com/jhuleatt/hyperfocal/tree/master'>github</a>. Check it out!</p>
                    <Form
                        {...this.props.formProperties}
                        setFocalLength={this.props.setFocalLength}
                        setAperture={this.props.setAperture}
                        setSubjectDistance={this.props.setSubjectDistance}
                        setCameraMake={this.props.setCameraMake}
                        setCameraModel={this.props.setCameraModel}
                    />
                    <Visualization
                        {...this.props.visualizationProperties}
                    />
                </div>
            );
        }
    }
}

const mapStateToProps = (state: StateModel): Object => {
    if (isInitializing(state)) {
        const props = {
            isInitializing: true,
            progress: state.progress
        };

        return props;
    } else {
        const props = {
            formProperties: {
                cameraMakeSelectOptions: {
                    values: state.cameraMakes.map((make) => ({value: make, display: make})),
                    value: state.selectedMake,
                },
                cameraModelSelectOptions: {
                    values: state.cameraModels.map((model) => ({value: model.model, display: model.model})),
                    value: state.selectedModel.model,
                },
                selectedFocalLength: state.focalLength,
                selectedFStop: state.aperture,
                subjectDistance: convertFromMM(state.distanceUnit, state.subjectDistanceMM)
            },
            visualizationProperties: {
                cameraMake: state.selectedMake,
                cameraModel: state.selectedModel.model,
                confusion: state.selectedModel.confusion,
                focalLength: state.focalLength,
                aperture: state.aperture,
                subjectDistance: convertFromMM(state.distanceUnit, state.subjectDistanceMM),
                hyperfocalDistance: calculateHyperfocal(state.focalLength, state.aperture, state.selectedModel.confusion),
                distanceUnitDisplayName: state.distanceUnit === Unit.Feet ? 'ft' : 'm'
            }
        };

        return props;
    }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setFocalLength: (focalLength: number) => {
        dispatch(setFocalLength(focalLength));
    },
    setAperture: (aperture: number) => {
        dispatch(setAperture(aperture));
    },
    setSubjectDistance: (distance: number) => {
        dispatch(setSubjectDistance(distance));
    },
    setCameraMake: (make: string) => {
        dispatch(setCameraMake(make));
    },
    setCameraModel: (model: string) => {
        dispatch(setCameraModel(model));
    },
    initialize: () => {
        dispatch(initialize());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
