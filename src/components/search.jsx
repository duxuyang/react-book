import React, {
	Component
} from 'react';
import '../css/search.css';
import Top from './top'
import { Link } from 'react-router-dom';
import http from '../http.js'
export default class Search extends Component {
		constructor(props) {
	    super(props);
	    this.state = {};
	  }

	render() {
		return <div>
		<Top tname="搜索中心" ></Top>
		<div className="smain">
			<div className="scon">
				<span className="iconfont icon-sousuo1"></span>
				<form action="" >
					<input type="text" placeholder="盛世娇宠之名门闺香" />
				</form>
			</div>
			<div className="search" onClick="search">搜索</div>
		</div>
		<div clas="hotbooks">
			<div className="hotname">热门搜索</div>
			<div className="hotlist">
{/*				<ul>
					<li v-for="(val,im) in hotlist" @click="hlist(val.id)"><span className="iconfont icon-shu"></span><span>{{val.name}}</span></li>
				</ul>*/}
			</div>
		</div>
		<div className="box1" v-show="islist">
{/*			<ul>
				<li v-for="(val,index) in list" @click="dlist(val.id)"><span className="iconfont icon-shu"></span><span>{{val.name}}</span></li>
			</ul>*/}
		</div>

		</div>
	}
}








