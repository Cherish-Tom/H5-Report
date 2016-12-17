import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router';
import fetch from 'isomorphic-fetch';
import AppBar from 'material-ui/AppBar';
import Search from '../public/Search';
import MenuTotal from '../public/MenuTotal';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import PhoneForwarded from 'material-ui/svg-icons/notification/phone-forwarded';
import Add from 'material-ui/svg-icons/content/add';
import {CONFIG} from '../../constants/Config';
import Template from '../public/template';
import {Tool} from '../../constants/Tools';
const styles = {
    title:{
        textAlign: 'center',
        lineHeight: '45px',
        height: 45,
        overflow: 'initial',
    },
    bar: {
        backgroundColor: '#fff',
        lineHeight: '45px',
        height: 45,
    },
    phone:{
        width: 16,
        height: 16,
        top: 20
    },
    container:{
        width: '100%',
        height: 132,
        bottom: 0,
        top: 'none',
        padding: 20,
        transform: 'translate(0, 145px)',
        overflow: 'hidden'
    },
    transform: {
        width: '100%',
        height: 132,
        bottom: 0,
        top: 'none',
        padding: 20,
        transform: 'translate(0, 0)',
        overflow: 'hidden'
    }
}
class Head extends React.Component {
    constructor(props, context) {
        super(props, context);
    }
    render() {
        return(
            <AppBar
                style={styles.bar}
                title={<MenuTotal items={CONFIG.contact} {...this.context}/>}
                titleStyle={styles.title}
                iconStyleLeft={{marginTop: 0,marginRight: 0}}
                iconStyleRight={{marginTop: 0}}
                iconElementLeft={<IconButton onClick={this.context.router.goBack}><ArrowBaclIcon color="#5e95c9"/></IconButton>}
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
class ContactList extends React.Component {
    constructor(props, context){
        super(props, context);
        this.props.fetchPosts({url: 'contacts'})
        this.state={
            data: [],
            open: false,
            tel: '',
            currentPage: 1,
            totalPage: 1,
            isFetching: false,
            shouldUpdata: false
        }
        this.handleClose = (event) => {
            this.setState({open: false})
        }
        this.handleToggle = (event) => {
            let parent = event.currentTarget.parentNode;
            let tel = parent.querySelector('.tel').childNodes[2].nodeValue;
            this.setState({open: !this.state.open, tel: tel});
            event.preventDefault();
        }
        this.getNextPage = (currentPage) => {
            if(!this.state.shouldUpdata){
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
            },'nextPage')
        }
    }
    getChildContext(){
        return{
            fetchPosts: this.props.fetchPosts
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
    render() {
        return (
            <div>
                <div className="fiexded" >
                    <Head />
                    <Search title="请输入电话号码或者联系人"/>
                </div>
                <List className="contact_list" ref='container'>
                    {this.state.data&&this.state.data.map((item) => (
                        <Link to={{pathname:`/contact/${item.contactid}`, query:{url: 'contacts', mode: 4}}} key={item.contactid}>
                            <ListItem
                                className='contact'
                                key={item.contactid}
                                rightIconButton={<IconButton iconStyle={styles.phone} touch={true} onTouchTap={this.handleToggle}>
                                    <PhoneForwarded color='#a2dd86'/>
                                </IconButton>}
                                primaryText={<p className='contact_primary'>{item.lastname}</p>}
                                innerDivStyle={{padding: '16px 30px 16px 16px'}}
                                secondaryText={
                                    <p className="contact_second">
                                        <span className='company'>{<i className="material-icons">&#xE90B;</i>}{item.account_type}</span>
                                        <span className='position'>{<i className="material-icons">&#xE332;</i>}{item.contact_no}</span>
                                        <span className='tel' ref='tel'>{<i className="material-icons">&#xE551;</i>}{item.mobile}</span>
                                    </p>
                                }
                            />
                        </Link>
                    ))}
                </List>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    containerStyle={this.state.open?styles.transform:styles.container}
                    onRequestChange={(open) => this.setState({open})}
                >
                    <RaisedButton
                        fullWidth={true}
                        backgroundColor='#82bde3'
                        labelColor='#fff'
                        label={this.state.tel?this.state.tel:'10000'}
                        href={`tel:${this.state.tel}`}
                        style={{marginBottom: 20}}
                        onTouchTap={this.handleClose}
                    />
                    <RaisedButton
                        onTouchTap={this.handleClose}
                        label="取消"
                        fullWidth={true}
                        backgroundColor='#bdbdbd'
                        labelColor='#fff'
                    />
                </Drawer>
            </div>

        );
    }
}
ContactList.childContextTypes = {
    fetchPosts: React.PropTypes.any
}
export default Template({
    component: ContactList
});
