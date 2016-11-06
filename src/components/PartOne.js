import React, {Component, PropTypes} from 'react';
import * as PickerActions from './../actions/Picker';
import * as ExpectActions from './../actions/Expect';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sample} from 'lodash';

class PartOne extends Component {

  constructor(props, context) {
    super(props, context);
  }


  render() {

    const {pickerActions, expectActions, app, numbers, expect} = this.props;
    const setter = (item, val) => pickerActions.updateStep(item, val);

    const checkAnswer = e => {
      const correctGuess = Number(e.target.innerText) === expect;
      console.log(e.target.innerText);
      console.log(app.expect);
      console.log(correctGuess);
    };

    const showLabels = () => {
      setTimeout(()=> {
        const labels = Array.from(document.querySelectorAll(".Label"));
        labels.forEach((label, i) => {
          setTimeout(()=> {
            label.classList.add('Label--blinking');
            setTimeout(() => {
              label.classList.remove('Label--blinking');
            }, 3000);
          }, (3000 * i + 1));
        });
        setTimeout(() => setter('step', 0), (labels.length) * 3000);
      }, 1000);
    };

    const step0 = (
      <div>
        <button onClick={()=>setter('step', 1)}>
          J'écoute
        </button>
        <button onClick={()=>setter('step', 2)}>
          Je montre
        </button>
      </div>
    );

    const step1 = (
      <div>
        {numbers.map(num => <div key={num} className='Label'>{num}</div>)}
      </div>
    );


    const step2 = (
      <div>
        {numbers.map(num => <div key={num} className='Label' onClick={checkAnswer}>{num}</div>)}
      </div>
    );

    switch (app.step) {
      case 1:
        showLabels();
        break;
      case 2 :
        const toGuess = sample(numbers);
        expectActions.updateExpect(toGuess);
        break;
      default:
        break;
    }

    return (
      <div>
        { app.step === 1 ? step1 : app.step === 2 ? step2 : step0 }
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    app: state.app,
    expect: state.expect
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pickerActions: bindActionCreators(PickerActions, dispatch),
    expectActions: bindActionCreators(ExpectActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartOne);
