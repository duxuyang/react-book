import React, {
	Component
} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import demo from '../css/demo.css';
export default class Demo extends Component {
		constructor(props) {
	    super(props);
	    this.state = {};
	  }


	render() {
		return <div>

	<Button>default</Button><WhiteSpace />
	<Button disabled>default disabled</Button><WhiteSpace />
	<Button type="primary">primary</Button><WhiteSpace />
	<Button type="primary" disabled>primary disabled</Button><WhiteSpace />

	<div className={demo.list}>
			32322dsdsfsdfsdfsdfsdf
	</div>
		</div>
	}
}








