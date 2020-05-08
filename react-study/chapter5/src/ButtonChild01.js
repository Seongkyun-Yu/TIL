import React, { Component } from 'react';

class ButtonChild01 extends Component {
  state = {
    title: this.props.title,
    color: this.props.color,
  };
  handleButtonClick = () => {
    console.log('Button Child01 클릭!');
  };

  render() {
    const { title, color } = this.state;
    const ButtonStyle = {
      border: 'none',
      width: 100,
      height: 30,
      background: color,
    };
    return (
      <button style={ButtonStyle} onClick={this.handleButtonClick}>
        {title}
      </button>
    );
  }
}

ButtonChild01.defaultProps = {
  title: '이름없음 버튼',
};

export default ButtonChild01;
