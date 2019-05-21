import React from 'react';

class DeleteBtn extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('click');
  }

  render() {
    return (
      <button className="contact_btn-delete" type="button" onClick={this.handleClick}>x</button>
    );
  }
}

export default DeleteBtn;
