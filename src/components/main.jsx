import React, {
	Component
} from 'react';
import { Link } from 'react-router-dom';
import http from '../http.js'
import main from '../css/main.css';


export default class Main extends Component {
	constructor(props) {
    super(props);
    this.state = {userimg:true,freelist:[],hotlist:[]};
  }
  name="tom"
  get=()=>{

  }
  componentWillMount(){
  	//免费
		http('/freeread',"").then((res)=>{
  		this.setState({freelist:res});
  	
  	})
  	//热门
		http('/hotbook',"").then((res)=>{
  		this.setState({hotlist:res});

  	})
  }
  componentDidMount(){

  } 
  user=()=>{

  }
  booksm=()=>{

  }
  search=()=>{//搜索
    this.props.history.push('/search')
  }
  type=(msg)=>{//类型
		console.log(msg)
  }
	render() {
		return <div>
			<div className={main.header}>
				<ul>
					<li onClick={this.user}>
					{this.state.userimg?<img src={require('../css/images/user.png')} />:<img src={require('../css/images/userhead.jpg')} />}
					</li>
					<li onClick={this.booksm}>
						<img src={require('../css/images/bookslist.png')} alt="" />
					</li>
				</ul>
      </div>

		<div className={main.wiper}>
			<img src={require('../css/images/l1.jpg')} alt="" />
		</div>
		<div className={main.search}>
			<div className={main.cen} onClick={this.search}>
				<span ></span>
				<span>盛世娇宠之名门闺香</span>
			</div>
		</div>
		<div className={main.nav}>
			<div className={main.nav1}>
				<div onClick={this.type.bind(this,"玄幻")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>玄幻</h4>
				</div>
				<div onClick={this.type.bind(this,"修真")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>修真</h4>
				</div>
				<div onClick={this.type.bind(this,"都市")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>都市</h4>
				</div>
				<div onClick={this.type.bind(this,"历史")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>历史</h4>
				</div>
				<div onClick={this.type.bind(this,"网游")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>网游</h4>
				</div>
				<div onClick={this.type.bind(this,"科幻")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>科幻</h4>
				</div>
				<div onClick={this.type.bind(this,"言情")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>言情</h4>
				</div>
				<div onClick={this.type.bind(this,"其他")}>
					<div className={main.icon}></div>
					<h4 className={main.guid}>其他</h4>
				</div>
			</div>
		</div>
		<div className={main.booklist}>
			<div className={main.top}>
				<h2 className={main.title}>免费读书</h2>
				<div className={main.more}>
					<span>更多</span>
					<span></span>
				</div>
			</div>
			<div className={main.list}>
					<ul>
						{
							this.state.freelist.map((val,index)=>{
								return <li key={index}>
									<Link to={{pathname:'/detail',id:val.id }}>
											<img src={val.images} alt="" />
											<div className={main.tname}>{val.name}</div>
											<div className={main.tauthor}>{val.author}</div>
									</Link>
								</li>
							})
						}
					</ul>
			</div>
		</div>	
		<div className={main.booklist}>
			<h2 className={main.title}>热门小说</h2>
			<div className={main.list}>
					<ul>
						{
							this.state.hotlist.map((val,index)=>{
								return <li key={index}>
									<Link to={{pathname:'/detail',id:val.id }}>
											<img src={val.images} alt="" />
											<div className={main.tname}>{val.name}</div>
											<div className={main.tauthor}>{val.author}</div>
									</Link>
								</li>
							})
						}
					</ul>
			</div>
		</div>
		<div className={main.booklist}>
			<div className={main.top}>
				<h2 className={main.title}>排行榜</h2>
				<div className={main.more}>
					<span>更多</span>
					<span></span>
				</div>
			</div>
			<div className={main.list}>
					<ul>
						<li>
							<a href="">
								<img src={require('../css/images/150.jpg')} alt="" />
								<div className={main.tname}>择天记</div>
								<div className={main.tauthor}>丽丽</div>						
							</a>
						</li>
						<li>
							<a href="">
								<img src={require('../css/images/150.jpg')} alt="" />
								<div className={main.tname}>择天记</div>
								<div className={main.tauthor}>丽丽</div>						
							</a>
						</li>
						<li>
							<a href="">
								<img src={require('../css/images/150.jpg')} alt="" />
								<div className={main.tname}>择天记</div>
								<div className={main.tauthor}>丽丽</div>						
							</a>
						</li>
						<li>
							<a href="">
								<img src={require('../css/images/150.jpg')} alt="" />
								<div className={main.tname}>择天记</div>
								<div className={main.tauthor}>丽丽</div>						
							</a>
						</li>
																	
					</ul>
			</div>
		</div>
		</div>
	}
}