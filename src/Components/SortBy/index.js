import React, { Component } from 'react';

class SortBy extends Component {    
    render() { 
      
      const { orderBy , doOrderBy, doOrder } = this.props;
      const names = [["hotel_name", "alphabetically"], ["stars", "by stars"], ["price", "by price"]];
      const output = names.map((item)=>{
          return (<button 
                  className={orderBy === item[0] ? "sort-by-buttons-active" : "sort-by-buttons" }
                  onClick={ doOrderBy } 
                  data-value={ item[0]} >
                   Sort <strong>{item[1] }</strong>
                  </button>)
      });      
            
      return (
        <div>
          <div className="flex-container">
              { output }
          </div>  
          {/*<li><a  onClick={ doOrder } data-value="asc">ascendind </a></li>
          <li><a  onClick={ doOrder } data-value="desc">descending </a></li>*/}
        </div>
     )   
    }
  }



  export default SortBy