import React ,{Component} from "react";
import '../css/ItemMusic.css';

export default class ItemMusic extends Component {
  render(){
    return (
      <li className="ItemMusic" data-position={this.props.position} onClick={this.props.app.OnAudioSelect.bind(this.props.app)} ref={this.props.result.id}>
          <div className="ItemMusic__Image"><img alt={this.props.result.name} src={this.props.result.image} /></div>
          <div className="ItemMusic__Content">
            <div className="ItemMusic__title">{this.props.result.name}</div>
            <a href={this.props.result.audiodownload}>download</a>
            <div>{this.props.result.artist_name}</div>
        </div>
      </li>
    );
  }
}


