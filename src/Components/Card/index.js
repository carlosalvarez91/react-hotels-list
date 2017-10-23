import React, { Component } from 'react';

class Card extends Component {
    render(){
      const { data, orderBy, toggle, dropdownActive } = this.props;
      let datastars =  data.stars;
      let newstar = "";
      let star = "\u2605";
      let i;
      for (i = 0; i < datastars; i++) {
         newstar += star ;
     }

      return (    
        <div className="media">
          <div className="media-heading">
              <div className="hotel-name-and-stars">
                <span className={ orderBy === "hotel_name" ? "active" : null }>{ data.hotel_name } </span> 
                <span className={ orderBy === "stars" ? "active" : null }><span className="stars">{ newstar}</span> {/* For Loop to count Stars! */}</span>
              </div>
              <div className="price">
               <span className={ orderBy === "price" ? "active" : null }>Holliday price:<br></br><strong>&#163;{ data.price }</strong></span>
              </div>

          </div>
          <div className="media-center">
            <img className="media-object" src={ data.img } alt={`${data.hotel_name} ${data.stars}` } /> 
          </div>
          <div className="media-body">     
          <strong>{data.departure_date}</strong> for <strong>7 Days</strong> from <strong>{data.departure_airport}</strong>, <strong>{data.family}</strong>
          <a className="btn btn-info" onClick={ toggle }>
          <i className={ dropdownActive ? "fa fa-angle-down" : "fa fa-angle-right" }></i>
          </a>
          </div>
          <div className={ dropdownActive ? "dropdown  pull-right open" : "dropdown pull-right " }>
            <div className="dropdown-menu">
              {data.description}<br></br>
              <button className="book-now">Book Now</button>
            </div>
          </div>  
        </div>     
      )
    }
  }


  export default Card
  