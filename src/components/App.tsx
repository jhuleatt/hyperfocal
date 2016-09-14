import * as React from 'react';
import { connect } from 'react-redux';
import { State, Initializing, StateModel } from '../models/state';
import {
    setFocalLength,
    setAperture,
    setSubjectDistance,
    setCameraMake,
    setCameraModel,
    setDistanceUnit,
    initialize
} from '../actions/actions';
import * as _ from 'lodash';
import Form from './Form';
import Visualization from './Visualization';
import { FormValues, FormActions, FormProperties } from '../models/form';
import { Unit } from '../models/units';
import { VizProperties } from '../models/visualization';
import { convertFromMM, convertToMM, calculateHyperfocal, round } from '../util/calculations';

function isInitializing (x: any): x is Initializing {
  return typeof x.progress === 'number';
};

export class App extends React.Component<any, {}> {
    componentDidMount() {
        this.props.initialize();
    }

    render() {
        const formProps: FormProperties = {
            values: this.props.formProperties,
            actions: {
                setFocalLength: this.props.setFocalLength,
                setAperture: this.props.setAperture,
                setSubjectDistance: this.props.setSubjectDistance,
                setCameraMake: this.props.setCameraMake,
                setCameraModel: this.props.setCameraModel,
                setDistanceUnit: this.props.setDistanceUnit
            }
        };
        if (this.props.isInitializing === true) {
            return (<h1>INITIALIZING {this.props.progress} %</h1>);
        } else {
            return (
                <div>
                    <p>The source can be found on <a href='https://github.com/jhuleatt/hyperfocal/tree/master'>github</a>. Check it out!</p>
                    <Form {...formProps} />
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
        const toMM: Function = (distance: number): number => convertToMM(state.distanceUnit, distance);
        const fromMM: Function = (distance: number): string => convertFromMM(state.distanceUnit, distance).toFixed(2);
        const formProperties: FormValues = {
            cameraMakeSelectValues: {
                values: state.cameraMakes.map((make) => ({value: make, display: make})),
                value: state.selectedMake
            },
            cameraModelSelectValues: {
                values: state.cameraModels.map((model) => ({value: model.model, display: model.model})),
                value: state.selectedModel.model
            },
            distanceUnitSelectValues: state.distanceUnits,
            selectedDistanceUnit: state.distanceUnit,
            selectedFocalLength: state.focalLength,
            selectedFStop: state.aperture,
            subjectDistance: state.subjectDistance,
            distanceUnitDisplayName: state.distanceUnit === Unit.Feet ? 'ft' : 'm'
        };
        const visualizationProperties: VizProperties = {
            cameraMake: state.selectedMake,
            cameraModel: state.selectedModel.model,
            confusion: state.selectedModel.confusion,
            focalLength: state.focalLength,
            aperture: Number(state.aperture),
            subjectDistance: Number(state.subjectDistance),
            hyperfocalDistance: fromMM(calculateHyperfocal(state.focalLength, Number(state.aperture), state.selectedModel.confusion)),
            distanceUnitDisplayName: state.distanceUnit === Unit.Feet ? 'ft' : 'm'
        };

        const props = {
            formProperties: formProperties,
            visualizationProperties: visualizationProperties
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
    setDistanceUnit: (newUnit: Unit) => {
        dispatch(setDistanceUnit(newUnit));
    },
    initialize: () => {
        dispatch(initialize());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
