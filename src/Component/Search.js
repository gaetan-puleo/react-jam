import React , {Component} from "react";

export default class Search extends Component{
  render(){
    return (
      <div>
          <form>
            <input name="searchMusic" type="search" />
          </form> 
      </div>
    );
  }
}