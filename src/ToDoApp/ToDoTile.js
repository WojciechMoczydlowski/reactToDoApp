import React, { Component } from 'react';
import './style/Style.css';
import './style/fontelloBin/css/fontello.css';
class ToDoTile extends Component {

  handleChangeClass = () => {
   this.props.handleChangeClass(this.props.id,this.props.activeClass);
  }

  handleDeleteTile= () => {
    this.props.handleDeleteTile(this.props.id);
   }

  render() {
    let activeClass = this.props.activeClass === true ? "active" : "inactive";
    let informationClass = this.props.activeClass === true ? "activeInformation" : "inactiveInformation"
    return (
      <div className="ToDoTile">
        <i className="binIcon demo-icon icon-bitbucket" onClick={this.handleDeleteTile}/>
        <div className={activeClass} onClick={this.handleChangeClass}>{this.props.title}</div>
        <div className={informationClass}>{this.props.information}</div>
      </div>
    );
  }
}
export default ToDoTile;