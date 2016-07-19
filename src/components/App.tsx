import * as React from 'react';
import { connect } from 'react-redux';
import { State } from '../models/redux';
import { setFocalLength, setAperture, setSubjectDistance } from '../actions/actions';
import * as _ from 'lodash';
import Form from './Form';
import { FormProperties } from '../models/form.ts';

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
                />
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        formProperties: new FormProperties(state.cameraOptions, state.camera.name, state.focalLength, state.aperture, state.subjectDistance)
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
