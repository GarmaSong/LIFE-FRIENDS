import { Component } from 'react';
import LoginForm from '../../components/Form/LoginForm';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      statusActive: false,
      ipActive: false,
    };
  }

  goToMain = e => {
    e.preventDefault();
    const API = 'http://172.16.20.241:8000/users/login';
    const { email, password } = this.state;
    fetch(API, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(res => {
        switch (res.status) {
          case 400:
            alert('아이디 또는 비밀번호를 입력해주세요');
            break;

          case 401:
            alert('아이디 또는 비밀번호를 확인해주세요');
            break;

          case 200:
            alert('로그인에 성공했습니다.');
            return res.json();

          default:
            alert('잠시 후에 다시 이용해주세요.');
        }
      })
      .then(res => {
        if (res) {
          // save localstroage
          localStorage.setItem('MESSAGE', res['ACCESS_TOKEN']);
          // push to main
          this.props.history.push('./');
        }
      });
  };

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleStatus = () => {
    const { statusActive } = this.state;
    this.setState({
      statusActive: !statusActive,
    });
  };

  handleIp = () => {
    const { ipActive } = this.state;
    this.setState({
      ipActive: !ipActive,
    });
  };

  render() {
    return (
      <LoginForm
        type="Login"
        text="로그인"
        loginData={loginData}
        loginState={{ ...this.state }}
        goToMain={this.goToMain}
        handleInput={this.handleInput}
        handleStatus={this.handleStatus}
        handleIp={this.handleIp}
      />
    );
  }
}

const loginData = [
  {
    type: 'text',
    text: '아이디',
    name: 'email',
    error: '아이디를 입력해주세요.',
  },
  {
    type: 'password',
    text: '비밀번호',
    name: 'password',
    error: '비밀번호를 입력해주세요.',
  },
];
