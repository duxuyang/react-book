import React, {
	Component
} from 'react';

import rea from '../css/reader.css';
import http from '../http.js'
export default class Reader extends Component {
		constructor(props) {
	    super(props);
	    this.state = {
	    	bid:'',      //id
	    	panel:false,//头尾显示
		    setpan:false,//设置字体框弹出
				asside:false,
				titlelist:[],//章节列表
				content:[],//内容
				title:'',   //标题
				curChapter:1, //当前章节
				maxChapter:'',//总章数
				bg:1 , //背景
				bg_night:1,
				info:{}  //存储章节
	    };
	  }
		back=()=>{
			this.props.history.goBack()
		}
		showBar=()=>{//单击中间 是否显示头尾
			let m=this.state.panel;
			this.setState({panel:!m,setpan:false})
		}
		showis=()=>{//目录是否显示
			let ass=this.state.asside;
			this.setState({asside:!ass})
		}
		fsize=()=>{//单击字体
			let setp=this.state.setpan;
			this.setState({setpan:!setp})
		}
		night=()=>{//夜间模式切换
			this.state.bg_night==='0'?this.setState({bg_night:''}):this.setState({bg_night:'0'})
		}
		setbg=(msg)=>{//设置背景
			this.setState({bg:msg})
		}
		clicktitle=(msg)=>{//点击章列表
			let index=msg+1;
			this.setState({curChapter:index,asside:false})
			this.conp(index);
			this.showBar()
			this.saveinfo(index)
		}
		conp=(num)=>{//内容
      http('/reader',{id:this.state.bid,number:num}).then((res)=>{
	  		this.setState({content:res[0].content.split("-"),title:res[0].title})
	  	})
		}
		next=()=>{//下一章
			let curr=this.state.curChapter;
			if(curr<this.state.maxChapter){
				curr++;
				this.conp(curr);
				this.setState({curChapter:curr})
				this.saveinfo(curr)
			}
		}
		prev=()=>{//上一章
			let curr=this.state.curChapter;
			if(curr>1){
				curr--;
				this.conp(curr);
				this.setState({curChapter:curr})
				this.saveinfo(curr)
			}
		}
	  saveinfo(num){//本地存储章节
	  	let listinfo=this.state.info;
	  	listinfo[this.state.bid]={id:this.state.bid,num:num}
	  	this.setState({info:listinfo})
     localStorage.setItem("readinfo",JSON.stringify(this.state.info));
		}
		componentWillMount(){
		  var id=this.props.match.params.id;
			this.setState({bid:id});
    }
	  componentDidMount(){
			if(localStorage.getItem("readinfo")){//有
				this.state.info=JSON.parse(localStorage.getItem("readinfo"));
				let man=false;
				for(let p in this.state.info){
						if(this.state.info[p].id==this.state.bid){
							man=true;
							this.state.curChapter=this.state.info[p].num;
							this.conp(this.state.info[p].num)
						}
				}
				if(man==false){
					this.state.curChapter=1;
					this.conp(1);
					this.saveinfo(1);
			}
			}else{//没有
				this.state.curChapter=1;
				this.conp(1);
				this.saveinfo(1);
			}
			//目录
			 http('/title',{id:this.state.bid}).then((res)=>{
	  		this.setState({titlelist:res,maxChapter:res.length})
	  	})
	}
	render() {
		return <div>
			{
				this.state.panel?<div className={rea.header}>
				<div className={rea.back} onClick={this.back}>
					<div className={rea.backicon}></div>
				</div>
			</div> : ""
			}
			{
				this.state.panel?<div className={rea.footer}>
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
			</div>: ""
			}
			<div className={rea.mask} onClick={this.showBar}></div>
			{
				this.state.setpan?<div className={rea.set}>
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
			</div> :""
			}
			
			<div className={`${rea.asside} ${this.state.asside?rea.ashow:''}`}>
				<div className={rea.assideover} onClick={this.showis}></div>
				<div className={rea.list}>
					<div className={rea.listtop} >
						目录
					</div>
					<div className={rea.listmain}>
						<ul >
							{
								this.state.titlelist.map((val,index)=>{
									return <li onClick={this.clicktitle.bind(this,index)} key={index}>
										{val.title}
									</li>
								})
							}
						</ul>
					</div>
				</div>
			</div>

			<div className={rea.content} bg={this.state.bg} night={this.state.bg_night}>
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

