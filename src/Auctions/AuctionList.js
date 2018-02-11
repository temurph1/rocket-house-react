import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import {auctionList} from './../MockData.js'

class AuctionList extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    auctions: auctionList.data
	  };
	}

	getBorder = (color) => {
		return "2px solid " + color
	}	

  render() {
    return (
    	this.state.auctions.map((auction) =>
    		<Paper style={{cursor:"pointer", margin:"2px", backgroundColor:auction.color, borderRadius:"0", color:"black", display:"flex", flexDirection:"column"}}>
    			<img src={auction.url} style={{width:"83px", height:"auto"}} />
    			<div style={{fontSize:"12px", height:"20px", textAlign:"center", fontWeight:"bolder"}}> 
    				{auction.price} <img style={{width:"16px", height:"16px"}} src="images/key.png"/> 
    			</div>
    		</Paper>
    	)
    );
  }
}

export default AuctionList;
