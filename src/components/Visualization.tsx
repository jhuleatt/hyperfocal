import * as React from 'react';
import { VizProperties } from '../models/visualization';

export default class Visualization extends React.Component<VizProperties, {}> {
    render() {
        return (
            <div>
              <div>
                <h3>Your Selections</h3>
                <p>{this.props.cameraMake + ' ' + this.props.cameraModel}</p>
                <p>{this.props.focalLength}</p>
                <p>{this.props.aperture}</p>
                <p>{this.props.subjectDistance}</p>
              </div>
              <div>
                <h3>Hyperfocal Distance</h3>
                <p>{this.props.hyperfocalDistance} {this.props.distanceUnitDisplayName}</p>
              </div>
            </div>
        );
    }
}