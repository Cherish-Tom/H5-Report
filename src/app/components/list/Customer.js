import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {AppBar,IconButton,List, ListItem} from 'material-ui';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import Search from '../public/Search';
import Template from '../public/template';
import MenuTotal from '../public/MenuTotal';
import Loading from '../public/Loading';
import { CONFIG } from '../../constants/Config';
import { Tool } from '../../constants/Tools';
import { is, fromJS} from 'immutable';
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: '#fff',
        borderRadius: 4,
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
        overflow: 'initial',
        color: 'rgb(33, 33, 33)',
        fontSize: 18
    }
}
class Head extends Component {
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<MenuTotal items={CONFIG.customer} {...this.props} {...this.context}/>}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0, marginRight: 0}}
                iconElementLeft={<IconButton onTouchTap={this.context.router.goBack}><ArrowBaclIcon color="#5e95c9"/></IconButton>}
                iconElementRight={<IconButton onTouchTap={this.props.openMenu}><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}
Head.contextTypes = {
    fetchPosts: React.PropTypes.any,
    type: React.PropTypes.string,
    router: React.PropTypes.object
}
class Lists extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        return !is(fromJS(this.props), fromJS(nextProps)) || !is(fromJS(this.state),fromJS(nextState))
    }
    render(){
        return(
            <List className='item_lists'>
                {this.props.datas.map((data, index) => (
                    <Link to={{pathname:`/customer/${data.accountid}`, query: {url: 'customer', mode: 6}}} key={data.accountid}>
                        <ListItem
                            style={styles.back}
                            key={data.accountid}
                            primaryText={
                                <p><span style={styles.textColor}>{data.accountname}</span></p>
                            }
                            innerDivStyle={{padding: '16px 30px 16px 16px', backgroundColor: (index % 2) ? '#efeef4': '#fff'}}
                        />
                    </Link>
                ))}
            </List>
        )
    }
}
class Customer extends Component {
    constructor(props, context){
        super(props, context)
        this.props.fetchPosts({url: 'customer'})
        this.state = {
            data: [],
            currentPage: 1,
            totalPage: 2,
            limit: 8,
            shouldUpdata: true,
            isFetching: false,
            open: false
        }
        this.getNextPage = (currentPage) => {
            if(!this.state.shouldUpdata) return
            this.state.shouldUpdata = false
            this.props.getDate('/customer', { type: 'all', limit: 12, page: currentPage}, (res) => {
                this.state.currentPage = currentPage;
                this.state.shouldUpdata = true;
                if(res.code === 200) {
                    this.setState({data: this.state.data.concat(res.data)})
                } else {
                    console.log(res.code);
                }
            }, 'nextPage')
        }
        this.openMenu = () => {
            this.setState({open: !this.state.open})
        }
    }
    componentDidMount(){
        if(this.state.currentPage < this.state.totalPage) {
            Tool.nextPage(ReactDOM.findDOMNode(this.refs.container), this.state.currentPage, this.state.totalPage, this.getNextPage, this.state.shouldUpdata)
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
        return {
            fetchPosts: this.props.fetchPosts,
            type: this.state.type
        }
    }
    render() {
        return (
            <div>
                <div className="fiexded">
                    <Head path={this.props.location.pathname} openMenu={this.openMenu}/>
                    <Search title='请输入客户名称或地址'/>
                </div>
                <Lists ref='container' datas = {this.state.data} />
                <div className='create_menu' style={{display: this.state.open ? 'block' : 'none'}}>
                    <div><Link to={{pathname: '/customer/new', query: {mode: 6}}}>创建</Link></div>
                    <div><Link to={{pathname: '/customer/fastnew', query: {mode: 6}}}>快速创建</Link></div>
                </div>
            </div>
        )

    }
}
Customer.childContextTypes = {
    fetchPosts: React.PropTypes.any,
    type: React.PropTypes.string
}
export default Template({
    component: Customer,
});
