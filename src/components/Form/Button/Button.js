import { Component } from 'react';
import './Button.scss';

export default class Input extends Component {
  render() {
    const { text, type, loginValid, goToMain } = this.props;
    return (
      <>
        {type === 'Login' && (
          <button
            className="commonButton"
            disabled={!loginValid}
            onClick={goToMain}
          >
            {text}
          </button>
        )}
        {type === 'SignUp' && <button className="commonButton">{text}</button>}
      </>
    );
  }
}
