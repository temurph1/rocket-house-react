import React, {Component} from 'react';
import Paper from 'material-ui/Paper';
import AuctionList from './AuctionList';

class Auctions extends Component {
	constructor(props) {
	  super(props);
	  this.state = {
	    
	  };
	}

  render() {
    return (
      <div style={{display:"flex", width:"100%", flexWrap:"wrap", paddingLeft:"230px", paddingTop:"50px", margin:"6px", marginRight:"0"}}>
        <AuctionList />
      </div>
    );
  }
}

export default Auctions;
