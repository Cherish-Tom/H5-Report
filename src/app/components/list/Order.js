import React from 'react';
import {Link, browserHistory} from 'react-router';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import { Router, Route, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import Search from '../public/Search';
import MenuTotal from '../public/MenuTotal';
import {CONFIG} from '../../constants/Config';
import {Tool} from '../../constants/Tools';
import Template from '../public/template'
const styles={
    textColor:{
        color: '#7888af',
    },
    back:{
        backgroundColor: '#fff',
        margin: '12px',
        borderRadius: 4,
        boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px',
    },
    head: {
        textAlign: 'center',
        height: 45,
        lineHeight: '45px',
        backgroundColor:'rgb(255, 255, 255)',
    },
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial'
    }
}
class Head extends React.Component {
    constructor(props, context){
        super(props, context)
    }
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<MenuTotal items={CONFIG.order} {...this.context}/>}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}
Head.contextTypes={
    fetchPosts: React.PropTypes.any
}
class ViewCell extends React.Component {
	render(){
		return (
			<Link to={{pathname:`/order/${this.props.salesorderid}`, query: {url: 'orders', mode: 22}}}>
                <ListItem
                    style={styles.back}
                    primaryText={
                        <p><span style={styles.textColor}>{this.props.last_name}</span></p>
                    }
                    innerDivStyle={{padding: 8}}
                    secondaryText={
                        <p>
                            <span style={styles.textColor}>S{this.props.id}&nbsp;&nbsp;{this.props.modifiedtime.substring(0, 10)}</span><br />
                            <span ><span>金额：&nbsp;&nbsp;&nbsp;&nbsp;¥</span>{this.props.listprice}</span>
                        </p>
                    }
                    secondaryTextLines={2}
                />
            </Link>
		)
	}
}
class Order extends React.Component {
	constructor(props, context){
		super(props, context)
        this.props.fetchPosts({url: 'orders'})
		this.state = {
			data: [],
            currentPage: 1,
            totalPage: 1,
            isFetching: false,
            shouldUpdata: true
		}
        this.getNextPage = (currentPage) => {
            if(!this.state.shouldUpdata) {
                return
            }
            this.state.shouldUpdata = false
            this.props.getDate('/orders', { type: 'all', limit: 8, page: currentPage}, (res) => {
                this.state.currentPage = currentPage;
                this.state.shouldUpdata = true;
                if(res.code === 200) {
                    this.setState({data: this.state.data.concat(res.data)})
                } else {
                    console.log(res.code);
                }
            }, 'nextPage')
        }
	}
    componentWillReceiveProps(nextProps){
        let { data } = nextProps.state;
        this.state.data = data && data.data || [];
        this.state.currentPage = data && data.current || 1;
        this.state.totalPage = data && data.pages || 1;
        this.state.isFetching = nextProps.state.isFetching || false;
    }
    getChildContext(){
        return{
            fetchPosts: this.props.fetchPosts
        }
    }
	render(){
        const {currentPage, totalPage, shouldUpdata} = this.state
        if(currentPage < totalPage) {
            Tool.nextPage(this.refs.container, currentPage, totalPage, this.getNextPage, shouldUpdata)
        }
		return(
			<div>
				<div className="fiexded">
					<Head />
					<Search />
				</div>
				<div className='item_lists' ref='container'>
                    <List style={{paddingTop: 0}}>
                        {
                            this.state.data.map((item, index) => {
                                return <ViewCell {...item} key={index} />
                            })
                        }
                    </List>
                </div>
			</div>
		)
	}
}
Order.childContextTypes={
    fetchPosts: React.PropTypes.any
}

export default Template({
    component: Order
});
