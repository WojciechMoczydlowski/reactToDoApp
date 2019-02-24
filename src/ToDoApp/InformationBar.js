import React, { Component } from 'react';
import './style/Style.css';
class InformationBar extends Component {

  handleTitleInput = (event) => {
    this.props.handleTitleInput(event.target.value);
  }

  handleInformationInput = (event) => {
    this.props.handleInformationInput(event.target.value);
  }
  render() {
    return (
      <div id="InformationBar">
        <form>
          <input
            type="text"
            placeholder="Add title..."
            id="titleInput"
            maxlength="25"
            onChange={this.handleTitleInput}
            value={this.props.titleInput} />
          <textarea
            placeholder="Add some information..."
            id="informationInput"
            onChange={this.handleInformationInput}
            value={this.props.informationInput} />
          <input type="button" value="Add" id="addButton" onClick = {this.props.handleAddingTile}/>
        </form>
        <div></div>
      </div>
    );
  }
}
export default InformationBar;