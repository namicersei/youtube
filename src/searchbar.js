import React, { Component} from 'react';


class searchBar extends React.Component {
     
  constructor(props){
  	super(props);

  	this.state={term: ''};    
  }


	render() {



     return(
           <div>
     	<input onChange={event=> this.setState({term : event.target.value})} />
          
     	</div>
     	

     	);
	}


	onInputChange(event){
		console.log(event);
	}
	
}

export default searchBar;