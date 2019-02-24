import React, { Component } from 'react';
import ToDoTile from './ToDoTile.js';
import './style/Style.css';
class TileArea extends Component {

  render() {
    let activeCategory = this.props.activeCategory;
    let toDoTiles = this.props.toDoTiles.map(
      (tile) => {
        if(activeCategory===tile.category)
        return (
          <ToDoTile
            title={tile.title}
            information={tile.information}
            category={tile.category}
            activeClass={tile.activeClass}
            handleChangeClass={this.props.handleChangeClass}
            handleDeleteTile ={this.props.handleDeleteTile}
            id={tile.id}
            key={tile.id}
          />)
          return null;
      }
    );
    return (
      <div id="TileArea">
        {toDoTiles}
      </div>
    );
  }
}
export default TileArea;