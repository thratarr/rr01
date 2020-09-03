import React, { Component } from "react";

export default class PopUp extends Component {
  handleClick = () => {
    this.props.toggle(this.props.id);
  };

  render() {
    return (
      <div>
        <div>
          <span className="close" onClick={this.handleClick}>
            &times;
          </span>
          <form>
            <h3>current deck = no. {this.props.id}</h3>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <br />
            <input type="submit" />
          </form>
        </div>
      </div>
    );
  }
}
