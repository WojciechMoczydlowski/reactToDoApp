import React, { Component } from 'react';
import CategoryBar from './CategoryBar.js';
import InformationBar from './InformationBar.js';
import './style/Style.css';
class AddingBar extends Component {

  render() {
    return (
      <div id="AddingBar">
        <CategoryBar 
          handleFamilyIcon = {this.props.handleFamilyIcon}
          handleTravelIcon = {this.props.handleTravelIcon}
          handleWorkIcon = {this.props.handleWorkIcon}
          handleShopIcon = {this.props.handleShopIcon}
          handlePrivateIcon = {this.props.handlePrivateIcon}
          activeCategory = {this.props.activeCategory}
        />
        <InformationBar 
        handleTitleInput = {this.props.handleTitleInput}
        handleInformationInput = {this.props.handleInformationInput}
        handleAddingTile = {this.props.handleAddingTile}
        titleInput = {this.props.titleInput}
        informationInput = {this.props.informationInput}
        />
      </div>
    );
  }
}
export default AddingBar;