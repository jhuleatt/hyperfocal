import * as React from 'react';
import { calculateHyperfocal } from '../util/calculations.ts';
import { VizProperties } from '../models/form';

export default class Visualization extends React.Component<VizProperties, {}> {
    render() {
      const hyperfocalDistance = calculateHyperfocal(this.props.focalLength, this.props.aperture, this.props.camera.confusion);
        return (
            <div>
              <div>
                <h3>Your Selections</h3>
                <p>{this.props.camera.prettyPrint()}</p>
                <p>{this.props.focalLength}</p>
                <p>{this.props.aperture}</p>
                <p>{this.props.subjectDistance}</p>
              </div>
              <div>
                <h3>Hyperfocal Distance</h3>
                <p>{hyperfocalDistance} mm</p>
              </div>
            </div>
        );
    }
}