import React, {Component} from 'react';
import AddIcon from 'material-ui/svg-icons/content/add';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends Component {
  render() {
    return (
	    <div style={{backgroundColor:"rgb(36,41,46)", fontColor:"white", height:"100%", position:"fixed", left:"0", top:"0px", width:"230px", zIndex:"0", paddingTop:"60px"}}>
          <MenuItem className="nav-item">PLATFORM<AddIcon style={{float:"right", marginTop:"8px"}}/></MenuItem>
          <MenuItem className="nav-item">TYPE<AddIcon style={{float:"right", marginTop:"8px"}}/></MenuItem>
          <MenuItem className="nav-item">CERTIFICATION<AddIcon style={{float:"right", marginTop:"8px"}}/></MenuItem>
          <MenuItem className="nav-item">RARITY<AddIcon style={{float:"right", marginTop:"8px"}}/></MenuItem>
          <MenuItem className="nav-item">COLOR<AddIcon style={{float:"right", marginTop:"8px"}}/></MenuItem>

        </div>
    );
  }
}

export default Nav;
