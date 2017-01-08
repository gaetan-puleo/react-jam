import React , {Component} from "react";
import _ from "lodash";

export default class Search extends Component{
  render(){
    return (
      <div className="searchForm">
          <form>
            <input type="search" placeholder="Search a track" onChange={this.props.app.onSearch.bind(this.props.app,this.props.jam)} />
          </form> 
      </div>
    );
  }
}