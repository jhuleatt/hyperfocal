import * as React from "react";
import { connect } from 'react-redux';
import { State } from "../models/redux";
import { increment } from '../actions/actions';
import * as _ from 'lodash';

export class App extends React.Component<any, {}> {
    render() {
        return (
            <div>
                <h1>Hello!</h1>
                <h3>{this.props.count}</h3>
                <button onClick={this.props.increment(7)}>Click Me</button>
            </div>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: (amount: number) => {
        return () => {
            dispatch(increment(amount));
        };
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
