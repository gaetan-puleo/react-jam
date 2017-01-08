import React ,{Component} from "react";
import ItemMusic from "./ItemMusic"

export default class ListMusic extends Component {
  //map each track to each ItemMusic Component
  mapTracksInfo(){
    return this.props.app.state.results.map((result,i) => {return <ItemMusic app={this.props.app} position={i} result={result} key={result.id}/>})
  }
  render(){
    let content ;
    if(!this.props.app.state.results){
      content = <div>search a track</div>
    }
    else{
      content = this.mapTracksInfo();
    }
    return (
        <ul className="ListMusic">
          {content}
        </ul>
    )
  }
}