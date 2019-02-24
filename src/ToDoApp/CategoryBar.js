import React, { Component } from 'react';
import './style/Style.css';
import './style/fontello/css/fontello.css';
class CategoryBar extends Component {

  render() {
    let familyClass =  this.props.activeCategory === "family" ? "categoryIcon tooltip categoryhover" : "categoryIcon tooltip";
    let travelClass = this.props.activeCategory === "travel" ? "categoryIcon tooltip categoryhover" : "categoryIcon tooltip";
    let workClass = this.props.activeCategory === "work" ? "categoryIcon tooltip categoryhover" : "categoryIcon tooltip";
    let shopClass = this.props.activeCategory === "shop" ? "categoryIcon tooltip categoryhover" : "categoryIcon tooltip";
    let privateClass = this.props.activeCategory === "private" ? "categoryIcon tooltip categoryhover" : "categoryIcon tooltip";
    return (
      <div id="CategoryBar">
        <div className={familyClass} onClick={this.props.handleFamilyIcon}>
          <div className="tooltiptext">Family</div>
          <i className="demo-icon icon-adult ">
          </i>
        </div>
        <div className={travelClass} onClick={this.props.handleTravelIcon}>
          <div className="tooltiptext">Travel</div>
          <i className="demo-icon icon-camera-alt">
          </i>
        </div>
        <div className={workClass} onClick={this.props.handleWorkIcon}>
          <div className="tooltiptext">Work</div>
          <i className="demo-icon icon-bank">
          </i>
        </div>
        <div className={shopClass} onClick={this.props.handleShopIcon}>
          <div className="tooltiptext">Shop</div>
          <i className="demo-icon icon-basket">
          </i>
        </div>
        <div className={privateClass} onClick={this.props.handlePrivateIcon}>
          <div className="tooltiptext">Private</div>
          <i className="demo-icon icon-key">
          </i>
        </div>
      </div>
    );
  }
}
export default CategoryBar;