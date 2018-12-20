import React, {
	Component
} from 'react';
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import 'antd-mobile/lib/date-picker/style/css';  
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




		</div>
	}
}








