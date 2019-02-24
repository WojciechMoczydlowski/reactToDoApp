import React, { Component } from 'react';
import './style/Style.css';
import AddingBar from './AddingBar.js';
import TileArea from './TileArea.js';
class MainPage extends Component {

  constructor() {
    super();
    this.state = {
      toDoTiles: [],
      category: "family",
      titleInput: "",
      informationInput: "",
    }
  }
  handleFamilyIcon = () => {
    this.setState({
      category: "family"
    })
  }
  handleTravelIcon = () => {
    this.setState({
      category: "travel"
    })
  }
  handleWorkIcon = () => {
    this.setState({
      category: "work"
    })
  }
  handleShopIcon = () => {
    this.setState({
      category: "shop"
    })
  }
  handlePrivateIcon = () => {
    this.setState({
      category: "private"
    })
  }

  handleTitleInput = (string) => {
    this.setState({
      titleInput: string
    })
  }
  handleInformationInput = (string) => {
    this.setState({
      informationInput: string
    })
  }
  handleAddingTile = () => {
    let id = this.generateUID();
    const toDoTile = {
      category: this.state.category,
      title: this.state.titleInput,
      information: this.state.informationInput,
      activeClass: false,
      id:id,
    }
    this.setState(prevState => ({
      toDoTiles: [...prevState.toDoTiles, toDoTile],
      titleInput: "",
      informationInput: "",
    }))
  }

  handleChangeClass= (id,activeClass) => {
    let toDoTiles = this.state.toDoTiles;
    toDoTiles = toDoTiles.map(tile =>{
      tile.activeClass = id === tile.id ? !tile.activeClass : tile.activeClass;
      return tile;
    })
    this.setState({
      toDoTiles:toDoTiles,
    });
  }

  handleDeleteTile= (id) => {
    let toDoTiles = this.state.toDoTiles;
    const filteredTiles = toDoTiles.filter(tile =>{
      return tile.id !== id;
    })
    this.setState({
      toDoTiles:filteredTiles,
    });
    }
  generateUID = () => {
    // I generate the UID from two parts here 
    // to ensure the random number provide enough bits.
    var firstPart = (Math.random() * 46656) | 0;
    var secondPart = (Math.random() * 46656) | 0;
    firstPart = ("000" + firstPart.toString(36)).slice(-3);
    secondPart = ("000" + secondPart.toString(36)).slice(-3);
    return firstPart + secondPart;
}

  render() {
    return (
      <div id="MainPage">
        <AddingBar
          handleFamilyIcon={this.handleFamilyIcon}
          handleTravelIcon={this.handleTravelIcon}
          handleWorkIcon={this.handleWorkIcon}
          handleShopIcon={this.handleShopIcon}
          handlePrivateIcon={this.handlePrivateIcon}
          handleTitleInput={this.handleTitleInput}
          handleInformationInput={this.handleInformationInput}
          handleAddingTile={this.handleAddingTile}
          activeCategory = {this.state.category}
          titleInput={this.state.titleInput}
          informationInput={this.state.informationInput}
        />
        <TileArea
          activeCategory={this.state.category}
          toDoTiles={this.state.toDoTiles}
          handleChangeClass= {this.handleChangeClass}
          handleDeleteTile ={this.handleDeleteTile}
        />
      </div>
    );
  }
}
export default MainPage;