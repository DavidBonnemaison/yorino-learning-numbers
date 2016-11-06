import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as AppActions from '../actions/App';

import Picker from './../components/Picker';
import PartOne from './../components/PartOne';
import PartTwo from './../components/PartTwo';
import PartThree from './../components/PartThree';
import PartFour from './../components/PartFour';

class App extends Component {

  render() {

    const { app } = this.props;

    let content = () => {
      switch (app.part) {
        case 1:
          return <PartOne />
        case 2:
          return <PartTwo />
        case 3:
          return <PartThree />
        case 4:
          return <PartFour />
        default:
          break;
      }
    }

    return (
      <div>
        <Picker type='part'/>
        <Picker type='level'/>
        <Picker type='step'/>
        {content()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AppActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
