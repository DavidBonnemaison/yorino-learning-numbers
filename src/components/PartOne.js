import React, {Component, PropTypes} from 'react';
import * as PickerActions from './../actions/Picker';
import * as ExpectActions from './../actions/Expect';
import * as ShowActions from './../actions/Show';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {sample} from 'lodash';
import Sound from './../components/Sound';

class PartOne extends Component {

  constructor(props, context) {
    super(props, context);
  }

  mustRemind(prevExpect, currentExpect) {
    return prevExpect === currentExpect;
  }

  render() {

    const {pickerActions, expectActions, showActions, app, numbers, expect, show, reminder} = this.props;
    const setter = (item, val) => pickerActions.updateStep(item, val);

    const checkAnswer = e => {
      const correctGuess = Number(e.target.innerText) === expect;
    };

    const showLabels = () => {
      setTimeout(()=> {
        const labels = Array.from(document.querySelectorAll(".Label"));
        labels.forEach((label, i) => {
          setTimeout(()=> {
            showActions.updateShow(i + 1);
            label.classList.add('Label--blinking');
            setTimeout(() => {
              label.classList.remove('Label--blinking');
            }, 3000);
          }, (3000 * i + 1));
        });
        setTimeout(() => {
          showActions.updateShow(null);
          return setter('step', 0);
        }, (labels.length) * 3000);
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
        if (!show) {
          showLabels();
        }
        break;
      case 2 :
        let toGuess;
        if (!expect) {
          toGuess = 1;
          expectActions.updateExpect(toGuess);
          expectActions.checkReminder(toGuess);
        }
        break;
      default:
        break;
    }

    if (reminder.checkRemind) {
      if (this.mustRemind(reminder.checkRemind, expect)) {
        
      }
    }

    return (
      <div>
        { app.step === 1 ? step1 : app.step === 2 ? step2 : step0 }
        <Sound />
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    app: state.app,
    expect: state.expect,
    show: state.show,
    reminder: state.reminder
  };
}

function mapDispatchToProps(dispatch) {
  return {
    pickerActions: bindActionCreators(PickerActions, dispatch),
    expectActions: bindActionCreators(ExpectActions, dispatch),
    showActions: bindActionCreators(ShowActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PartOne);
