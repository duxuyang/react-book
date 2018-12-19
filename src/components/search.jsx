import React, {
	Component
} from 'react';
import s from '../css/search.css';

import Top from './top'
import { Link } from 'react-router-dom';
import http from '../http.js'
export default class Search extends Component {
		constructor(props) {
	    super(props);
	    this.state = {val:'',hotlist:[],list:[],show:false};
	  }
		change=(even)=>{//input 监听
				if(even.target.value){
					this.setState({val:even.target.value,show:true})
					this.list(even.target.value)
				}else{
					this.setState({show:false})
				}
		}
		list=(msg)=>{//搜索数据
		  http('/search',{name:msg}).then((res)=>{
	  		this.setState({list:res});
	  	})
		}
		detail=()=>{//跳转详情
			
		}
		search=()=>{
			if(this.state.val){
				this.list(this.state.val)
			}else{
					this.refs.myvalue.value="盛世娇宠之名门闺香";
					this.setState({show:true})
					this.list("盛世娇宠之名门闺香")
			}
		}
		componentWillMount(){
				//热门搜索
			http('/hotsearch',"").then((res)=>{
	  		this.setState({hotlist:res});
	  	})
    }
	render() {
		return <div>
		<Top tname="搜索中心" ></Top>
		<div className={s.smain}>
			<div className={s.scon}>
				<span className=""></span>
				<form action="" >
					<input type="text" ref="myvalue" placeholder="盛世娇宠之名门闺香" onChange={this.change}/>
				</form>
			</div>
			<div className={s.search} onClick={this.search}>搜索</div>
		</div>
		<div clas="hotbooks">
			<div className={s.hotname}>热门搜索</div>
			<div className={s.hotlist}>
			<ul>
				{
					this.state.hotlist.map((val,index)=>{
						return <li onClick={this.detail.bind(this,val.id)} key={index}>
							<span className=""></span><span>{val.name}</span>
						</li>
					})
				}
				</ul>
			</div>
		</div>
		{
			this.state.show?<div className={s.box1}>
			<ul>
				{
					this.state.list.map((val,index)=>{
						return <li onClick={this.detail.bind(this,val.id)} key={index}>
							<span className=""></span><span>{val.name}</span>
						</li>
					})
					}
			</ul>
		</div>:""
		}


		</div>
	}
}








