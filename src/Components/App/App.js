import React, { Component } from 'react';
import _ from 'lodash'
import SortBy from '../SortBy'
import Card from '../Card'

class App extends Component {
  constructor(){
    super();
    this.state = {      
      data: data, // array from the bottom of this script
      orderBy: "price",
      order: "asc",
      dropdownActive: false
    };
    this.doOrderBy = this.doOrderBy.bind(this);
    this.doOrder = this.doOrder.bind(this);
    this.toggle = this.toggle.bind(this);
  }
  toggle(e){
    e.preventDefault();
    let isActive = this.state.dropdownActive;
    isActive = !isActive;
    this.setState({dropdownActive: isActive});
  }
  doOrderBy(e){
    e.preventDefault();
    const newOrderBy = e.target.getAttribute('data-value');
    this.setState({orderBy : newOrderBy});
  }
  doOrder(e){
    e.preventDefault();
    const newOrder = e.target.getAttribute('data-value');
    this.setState({order : newOrder});
  }
  render() {    
    const orderBy = this.state.orderBy;
    const order = this.state.order;
    let sorted = this.state.data;
    
    sorted = _.orderBy(sorted, (item) => {
      return item[orderBy]
    }, order);     
    
    const items = sorted.map((item)=>{
      return (
      <Card
          toggle={ this.toggle } 
          dropdownActive={ this.state.dropdownActive } 
          data={ item } 
          key={ item.id } 
          orderBy={ this.state.orderBy }
       />)
    }); 
    
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2">

              <SortBy
                dropdownActive={ this.state.dropdownActive } 
                doOrderBy={ this.doOrderBy }
                doOrder={ this.doOrder }
                orderBy={ this.state.orderBy }
                order={ this.state.order } />

            {items} {/* items -> Card Component */}
          </div>          
        </div>                
      </div>
    )
  }
}


const data = [
{ "id": 1, "hotel_name": "Costa Adeje Gran Hotel", "stars": 5, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "./assets/image_01.png", "departure_airport": "East Midlands", "departure_date": "3 July 2014", "price": 1136.50, "family":"2 Adults, 2 children & 1 infant" },
{"id": 2, "hotel_name": "Aguamarina Golf Hotel and Apartments", "stars": 4, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "./assets/image_02.png", "departure_airport": "Manchester", "departure_date": "3 July 2014", "price": 499.99, "family":"2 Adults, 2 children"},
{"id": 3, "hotel_name": "Laguna Park II", "stars": 3, "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "img": "./assets/image_03.png", "departure_airport": "Liverpool", "departure_date": "24 May 2014", "price": 696.8, "family":"2 Adults & 1 child"}];

export default App;
