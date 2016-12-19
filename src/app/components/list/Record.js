import React, { Component }from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Search from '../public/Search';
import MenuTotal from '../public/MenuTotal';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Add from 'material-ui/svg-icons/content/add';
import {CONFIG} from '../../constants/Config';
import Template from '../public/template'
const styles = {
    title:{
        textAlign: 'center',
        lineHeight: '45px',
        height: 45,
        overflow: 'initial'
    },
    bar: {
        backgroundColor: '#fff',
        lineHeight: '45px',
        height: 45,
    },
    textColor: {
        color: '#7888af',
        maxWidth: '75%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    back: {
        margin: 12,
        backgroundColor: '#fff',
        borderRadius: 4
    },
    inner:{
        padding: '10px 100px 10px 10px'
    },
    btn:{
        width: 100,
        padding: 0,
        height: 36,
        textAlign: 'right'
    }
}
class Head extends Component {
    constructor(props, context){
        super(props, context)
    }
    render() {
        return(
            <AppBar
                style={styles.bar}
                title={<MenuTotal items={CONFIG.record} {...this.context}/>}
                titleStyle={styles.title}
                iconStyleLeft={{marginTop: 0}}
                iconStyleRight={{marginTop: 0}}
                iconElementLeft={<IconButton onTouchTap={this.context.router.goBack}><ArrowBaclIcon color="#5e95c9"/></IconButton>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            >
            </AppBar>
        )
    }
}
Head.contextTypes={
    fetchPosts: React.PropTypes.any,
    router: React.PropTypes.object
}
class ViewCell extends React.Component {
    render() {
        return (
            <Link to={{pathname:`/record/${this.props.contactrecordID}`, query:{url: 'records', mode: 55}}}>
                <ListItem
                    style={styles.back}
                    innerDivStyle={styles.inner}
                    primaryText = {<p style={styles.textColor}>{this.props.Subject}</p>}
                    secondaryText={<p className="contact_second">
                        <span className='company'>{this.props.accountname}</span>
                        <span className='position'>{this.props.lastname}</span>
                    </p>}
                    rightIconButton={<IconButton style={styles.btn}><span className="created_at">{this.props.lastcontactdate}</span><ChevronRight color='#a4e6cf'/></IconButton>}
                />
            </Link>
        )

    }
}

class Record extends Component {
    constructor(props, context){
        super(props, context);
        this.props.fetchPosts({url: 'records'})
        this.state = {
            data: [],
            currentPage: 1,
            totalPage: 1,
            isFetching: false,
            shouldUpdata: false
        }
        this.getNextPage = (currentPage) => {
            if(!this.state.shouldUpdata) {
                return
            }
            this.state.shouldUpdata = false
            this.props.getDate('/records', { type: 'all', limit: 8, page: currentPage}, (res) => {
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
    componentDidMount(){
        const {currentPage, totalPage, shouldUpdata} = this.state
        if(currentPage < totalPage) {
            Tool.nextPage(this.refs.container, currentPage, totalPage, this.getNextPage, shouldUpdata)
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
        return (
            <div>
                <div className="fiexded" >
                    <Head />
                    <Search title="请输入电话号码或者联系人" />
                </div>
                <List style={{backgroundColor: '#efeef4',paddingTop: '93px'}} ref="container">
                    {
                        this.state.data.map((item, index) => {
                            return <ViewCell {...item} key={index} />
                        })
                    }
                </List>
            </div>
        )
    }
}
Record.childContextTypes={
    fetchPosts: React.PropTypes.any
}
export default Template({
    component: Record
});
