import React, {
	Component
} from 'react';

import rea from '../css/reader.css';
import http from '../http.js'
export default class Reader extends Component {
		constructor(props) {
	    super(props);
	    this.state = {titlelist:[],title:'',content:[]};
	  }
		back=()=>{
			this.props.history.goBack()
		}
		showBar=()=>{

		}
		showis=()=>{

		}
		fsize=()=>{

		}
		night=()=>{

		}
		setbg=()=>{

		}
		clicktitle=()=>{

		}
		conp=()=>{
			let id=this.props.match.params.id;

		}
		componentWillMount(){
			
			
		/*	http('/bookdetail',{id:id}).then((res)=>{
	  		this.setState({detail:res[0]})
	  	})*/
    }

	render() {
		return <div>
			<div className={rea.header}>
				<div className={rea.back} onClick={this.back}>
					<div className={rea.backicon}></div>
				</div>
			</div>
			<div className={rea.mask} onClick={this.showBar}></div>
			<div className={rea.footer}>
				<div onClick={this.showis}>
					<div className={rea.ficon}></div>
					<div className={rea.fnav}>目录</div>
				</div>
				<div onClick={this.fsize}>
					<div className={rea.ficon}></div>
					<div className={rea.fnav}>字体</div>		
				</div>
				<div onClick={this.night}>
					<div className={rea.ficon}></div>
					<div className={rea.fnav}>夜间</div>		
				</div>
			</div>
			<div className={rea.set}>
				<div className={rea.setfont}>
					<div className={rea.setf}>字号</div>
					<div className={rea.setr}>
						<div className={rea.setcon}>小</div>
						<div className={rea.setcon}>中</div>
						<div className={rea.setcon}>大</div>	
					</div>
				</div>
				<div className={rea.setbg}>
					<div className={rea.setf}>背景</div>
					<div className={rea.setr}>
						<div className={rea.setbg1} onClick={this.setbg.bind(this,1)}></div>
						<div className={rea.setbg1} onClick={this.setbg.bind(this,2)}></div>
						<div className={rea.setbg1} onClick={this.setbg.bind(this,3)}></div>
						<div className={rea.setbg1} onClick={this.setbg.bind(this,4)}></div>
					</div>
				</div>
			</div>	
			<div className="">
				<div className={rea.assideover} onClick={this.showis}></div>
				<div className={rea.list}>
					<div className={rea.listtop} >
						目录
					</div>
					<div className={rea.listmain}>
						<ul >
							{
								this.state.titlelist.map((val,index)=>{
									return <li onClick={this.clicktitle.bind(this,index)}>
										{val.title}
									</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>
			<div className={rea.content} >
				<div className={rea.title}>{this.state.title}</div>
				<div className={rea.con}>
					{
						this.state.content.map((val,index)=>{
							return <p key={index}>{val}</p>
						})
					}
				</div>
			 	<div className={rea.foot}>
					<ul>
						<li onClick={this.prev}>上一章</li>
						<li onClick={this.next}>下一章</li>
					</ul>
			  </div> 
			</div>


		</div>
	}
}

