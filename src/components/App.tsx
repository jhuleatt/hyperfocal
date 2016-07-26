import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../models/redux';
import { setFocalLength, setAperture, setSubjectDistance, setCameraMake, setCameraModel } from '../actions/actions';
import * as _ from 'lodash';
import Form from './Form';
import Visualization from './Visualization';
import { FormProperties, VizProperties } from '../models/form.ts';

export class App extends React.Component<any, {}> {
    render() {
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

const mapStateToProps = (state: State) => {
    return {
        formProperties: new FormProperties(state.cameraOptions, state.focalLength, state.aperture, state.subjectDistance, state.camera),
        visualizationProperties: new VizProperties(state.camera, state.focalLength, state.aperture, state.subjectDistance)
    };
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
