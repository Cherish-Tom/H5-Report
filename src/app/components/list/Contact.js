import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import {Link, browserHistory} from 'react-router';
import fetch from 'isomorphic-fetch';
import AppBar from 'material-ui/AppBar';
import Search from '../public/Search';
import Menu from '../public/Menu';
import RaisedButton from 'material-ui/RaisedButton';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import PhoneForwarded from 'material-ui/svg-icons/notification/phone-forwarded';
import Add from 'material-ui/svg-icons/content/add';
import {CONFIG} from '../../constants/Config';

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

const contactData = [
    {
        name: '张三',
        company: '新希望集团新希望集团新希望集团新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '18633537746'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '13281521352'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    },
    {
        name: '张三',
        company: '新希望集团',
        position: '副总',
        tel: '0816-2333333'
    }
]
class Head extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <AppBar
                style={styles.bar}
                title={<Menu items={CONFIG.contact}/>}
                titleStyle={styles.title}
                iconStyleLeft={{marginTop: 0}}
                iconStyleRight={{marginTop: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            >
            </AppBar>
        )
    }
}
class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state={
            contact: [],
            open: false,
            tel: ''
        }
    }
    componentDidMount(){
        const self = this;
        fetch(`http://localhost:3030/dataCustomerList.json`)
            .then(response => response.json())
            .then(json => self.setState({contact: json}))
    }
    handleToggle(e) {
        event.preventDefault()
        event.stopPropagation()
        let parent = e.currentTarget.parentNode
        let tel = parent.querySelector('.tel').childNodes[2].nodeValue
        this.setState({open: !this.state.open, tel: tel})
    }
    handleClose(){ this.setState({open: false})}
    render() {
        return (
            <div>
                <div className="fiexded" >
                    <Head />
                    <Search title="请输入电话号码或者联系人"/>
                </div>
                <List className="contact_list">
                    {this.state.contact&&this.state.contact.map((item,index) => (
                        <ListItem
                            className='contact'
                            key={index}
                            rightIconButton={<IconButton iconStyle={styles.phone} touch={true} onTouchTap={this.handleToggle}>
                                <PhoneForwarded color='#a2dd86'/>
                            </IconButton>}
                            primaryText={<p className='contact_primary'>{item.name}</p>}
                            innerDivStyle={{padding: '16px 30px 16px 16px'}}
                            secondaryText={
                                <p className="contact_second">
                                    <span className='company'>{<i className="material-icons">&#xE90B;</i>}{item.company}</span>
                                    <span className='position'>{<i className="material-icons">&#xE332;</i>}{item.position}</span>
                                    <span className='tel' ref='tel'>{<i className="material-icons">&#xE551;</i>}{item.tel}</span>
                                </p>
                            }
                        />
                    ))}
                </List>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    containerStyle={this.state.open?styles.transform:styles.container}
                    onRequestChange={(open) => this.setState({open})}>
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

export default ContactList;
