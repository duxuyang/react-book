import React, {
	Component
} from 'react';
import { Link } from 'react-router-dom';
import ds from '../css/detail.css';
import http from '../http.js'
import Top from './top'



export default class Detail extends Component {
		constructor(props) {
	    super(props);
	    this.state = {detail:{}};
	  }
	  back=()=>{
	  	this.props.history.goBack()
	  }
		componentWillMount(){
			let id=this.props.match.params.id;
			http('/bookdetail',{id:id}).then((res)=>{
	  		this.setState({detail:res[0]})
	  	})
    }
	render() {
		return <div>
			<Top tname="详情"  func={this.back}></Top>
			<div className={ds.main}>
				<div className={ds.con}>
					<img src={this.state.detail.images} alt="" />
					<div className={ds.coninfo}>
						<h3>{this.state.detail.name}</h3>
						<div className={ds.author}>
							{this.state.detail.author}
						</div>
						<div className={ds.bookt}>{this.state.detail.type} 140万字</div>
						<div className={ds.price}>{this.state.detail.serialize}</div>
					</div>
			  </div>
			  <div className={ds.reader}>
			  	<Link to={{pathname:'/reader/'+this.state.detail.id}}>
			  		<span>开始阅读</span>
			  	</Link>
			  	<span className={ds.addcase} onClick={this.addcase}>加入书架</span>
			  </div>
			  <p>{this.state.detail.info}
			  </p>
				<a href="" className={ds.menu}>
					<span></span>
					<span>目录</span>
					<span>已完结</span>
					<span></span>
				</a>
			</div>
			<div className={ds.comment}>
				<h4>看过这本书的人还在看</h4>
				<ul>
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>	
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>	
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>	
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>			
					<li>
						<a href="">
							<img src={require('../css/images/l1.jpg')} alt="" />
							<div className={ds.title}>是第三方都是对的多所士大夫</div>
							<div className={ds.autor}>豆芽</div>
						</a>
					</li>	

				</ul>
				<div className={ds.link}>
					<span>换一换</span>
					<span ></span>
				</div>
			</div>
		</div>
	}
}








