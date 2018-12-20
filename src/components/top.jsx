import React, {
	Component
} from 'react';
import top from '../css/top.css';
export default class Top extends Component {
		constructor(props) {
	    super(props);
	    this.state = {};
	  }

  tback=()=>{
		this.props.func();
  }
	render() {
		return <div>
		<div className={top.header}>
			<div className={top.backbox} onClick={this.tback}>
				<div className={top.back}></div>
			</div>
			<div className={top.tname}>{this.props.tname}</div>
		</div>

		</div>
	}
}








