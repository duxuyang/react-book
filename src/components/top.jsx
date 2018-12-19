import React, {
	Component
} from 'react';
import '../css/top.css';
export default class Top extends Component {
/*		constructor(props) {
	    super(props);
	    this.state = {};
	  }*/

  tback(){
		this.props.history.goBack()
  }
	render() {
		return <div>
		<div className="header">
			<div className="backbox" onClick={this.tback}>
				<div className="back"></div>
			</div>
			<div className="tname">{this.props.tname}</div>
		</div>

		</div>
	}
}








