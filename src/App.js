import React, {Component} from 'react';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import "./App.css"

import Auctions from "./Auctions/Auctions"
import Header from "./Layout/Header"
import Nav from "./Layout/Nav"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
      <div style={{display:"flex"}}>
        <Nav/>
        <Header />
        <Auctions />
      </div>  
      </MuiThemeProvider>
    );
  }
}

export default App;
