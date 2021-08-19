import { Component } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../Layout/PageLayout';
import LoginInput from './Inputs/LoginInput';
import Button from './Button/Button';
import validator from '../../utils/InputValidator';
import './LoginForm.scss';

export default class LoginForm extends Component {
  render() {
    const {
      loginData,
      loginState,
      text,
      type,
      goToMain,
      handleInput,
      handleStatus,
      handleIp,
    } = this.props;

    const { email, password } = loginState;
    const loginValid = validator.email(email) && validator.password(password);

    return (
      <PageLayout>
        <form className="loginForm" onSubmit={goToMain}>
          {loginData.map(input => (
            <LoginInput
              handleInput={handleInput}
              loginState={loginState}
              key={input.name}
              name={input.name}
              type={input.type}
              text={input.text}
              error={input.error}
            />
          ))}
          <Button
            text={text}
            type={type}
            loginValid={loginValid}
            goToMain={goToMain}
          />
        </form>

        <div className="loginOption">
          <div className="statusBox">
            <button className="keepLogin" onClick={handleStatus}>
              {loginState.statusActive ? (
                <i className="fas fa-check-circle loginStatusAfter"></i>
              ) : (
                <i className="far fa-check-circle loginStatusBefore"></i>
              )}
            </button>
            로그인 상태 유지
          </div>
          <button className="ipSecurity" onClick={handleIp}>
            IP 보안
            {loginState.ipActive ? (
              <span className="ipOnOff ipOn">ON</span>
            ) : (
              <span className="ipOnOff ipOff">OFF</span>
            )}
          </button>
        </div>

        <div className="findInfoList">
          <Link to="#" className="findInfo forgotId">
            아이디 찾기
          </Link>
          <Link to="#" className="findInfo forgotPw">
            비밀번호 찾기
          </Link>
          <Link to="./signup" className="findInfo signUp">
            회원가입
          </Link>
        </div>
      </PageLayout>
    );
  }
}
