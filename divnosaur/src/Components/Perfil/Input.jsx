import React from 'react';

class TextareaPerfil extends React.Component {
  handleMouseOver = (event) => {
    event.target.style.cursor = 'pointer';
  };

  render() {
    return (
      <textarea
        className="textareaPerfil"
        onMouseOver={this.handleMouseOver}
      ></textarea>
    );
  }
}

export default TextareaPerfil;
