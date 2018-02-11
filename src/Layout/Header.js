import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import SettingsIcon from 'material-ui/svg-icons/action/settings'
import AddIcon from 'material-ui/svg-icons/content/add'
import SearchBar from 'material-ui-search-bar'

class Header extends Component {
  render() {
    return (
    	<div style={{position:"absolute", top:"0", right:"0", display:"flex", width:"100%", overflow:"hidden"}}>
	    	<div className="dark-grey header-font" style={{color:"white", fontSize:"32px", textAlign:"center", lineHeight:"50px", minWidth:"230px", maxWidth:"230px", height:"50px"}}>
	    		Rocket House
	    	</div>
	        <AppBar showMenuIconButton={false} style={{backgroundColor:"white", height:"50px"}} />
		    <div className="blue" style={{minWidth:"60px", maxWidth:"60px", display:"flex", alignItems:"center", height:"50px"}}>
			    <IconMenu
			      iconButtonElement={<IconButton style={{paddingLeft:"18px"}} ><SettingsIcon/></IconButton>}
			      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
			      targetOrigin={{horizontal: 'left', vertical: 'top'}}
			    >
			      <MenuItem primaryText="Refresh" />
			      <MenuItem primaryText="Send feedback" />
			      <MenuItem primaryText="Settings" />
			      <MenuItem primaryText="Help" />
			      <MenuItem primaryText="Sign out" />
			    </IconMenu>
	        </div>
	        <div className="orange" style={{minWidth:"56px", maxWidth:"56px", display:"flex", alignItems:"center", height:"50px"}}>
		        <IconButton style={{paddingLeft:"18px"}}>
		        	<AddIcon/>
		        </IconButton>
	        </div>
        </div>
    );
  }
}

export default Header;
