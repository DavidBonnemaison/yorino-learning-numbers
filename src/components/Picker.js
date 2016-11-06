import React, { Component, PropTypes } from 'react';
import * as PickerActions from './../actions/Picker';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Picker extends Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {

    const { app, type, actions } = this.props;

    const setter = (item, val) => actions.updateStep(item, val);

    return (
      <div className="Picker">
        {type} :
        <input
          value={app[type]}
          placeholder={type}
          type="number"
          min="1"
          max="4"
          onChange={ e => setter(type, Number(e.target.value)) }
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    app: state.app
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PickerActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Picker);
