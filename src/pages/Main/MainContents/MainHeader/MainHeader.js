import React, { Component } from 'react';
import '../MainHeader/MainHeader.scss';

class MainHeader extends Component {
  constructor() {
    super();
    this.myRef = React.createRef();
    this.state = {
      headerData: [],
      clickedPage: [
        {
          id: 1,
          title: '함께해서 위코드',
          desc: 'LIFE FRIENDS & Character',
          imgAlt: 'character',
          imgUrl:
            'https://images.unsplash.com/photo-1521249635712-69ca33adf729?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGNoYXJhY3RlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
      isOn: false,
      elNum: 1,
    };
  }

  componentDidMount() {
    fetch('/data/headerdata.json')
      .then(response => response.json())
      .then(headerdata => {
        this.setState({ headerData: headerdata });
      });
  }

  changePage = e => {
    const { headerData } = this.state;
    const elNum = e.target.parentElement.className;
    headerData.forEach(el => {
      if (Number(elNum) === el.id) {
        this.setState({
          clickedPage: [headerData[elNum - 1]],
          elNum: Number(elNum),
        });
      }
    });
  };

  handlePrevBtn = () => {
    const { headerData, elNum } = this.state;
    let pageNum = elNum;
    console.log(elNum);
    if (0 < elNum && elNum < headerData.length) {
      this.setState({
        elNum: pageNum - 1,
        clickedPage: [headerData[elNum]],
      });
    } else if (0 >= elNum) {
      this.setState({
        elNum: headerData.length - 1,
        clickedPage: [headerData[elNum]],
      });
    }
  };

  handleNextBtn = () => {
    const { headerData, elNum } = this.state;
    let pageNum = elNum;
    if (0 <= elNum && elNum < headerData.length - 1) {
      this.setState({
        elNum: pageNum + 1,
        clickedPage: [headerData[elNum]],
      });
    } else if (elNum <= headerData.length - 1) {
      this.setState({
        elNum: 0,
        clickedPage: [headerData[elNum]],
      });
    }
  };

  changeBtnColor = e => {
    if (e.target.className === '') {
      e.target.className = 'onClick';
    }
  };

  onClickPageBtn = e => {
    this.changePage(e);
  };

  render() {
    const { headerData, clickedPage, isOn } = this.state;
    // setInterval(this.handleNextBtn, 2000);

    return (
      <header className="mainHeader">
        <div>
          {clickedPage[0] && (
            <div className="carousel">
              <div>
                <h1>{clickedPage[0].title}</h1>
                <p>{clickedPage[0].desc}</p>
              </div>
              <ul>
                <li className={isOn && 'showing'}>
                  <img
                    alt={clickedPage[0].imgAlt}
                    src={clickedPage[0].imgUrl}
                  />
                </li>
              </ul>
            </div>
          )}
        </div>
        <div>
          <p className="prev" onClick={this.handlePrevBtn}>
            <i class="fas fa-chevron-left" />
          </p>
          <p className="next" onClick={this.handleNextBtn}>
            <i class="fas fa-chevron-right" />
          </p>
        </div>
        <ul className="contentPageBtn">
          {headerData &&
            headerData.map(el => {
              return (
                <li className={el.id}>
                  <button onClick={this.onClickPageBtn} />
                </li>
              );
            })}
        </ul>
      </header>
    );
  }
}

export default MainHeader;
