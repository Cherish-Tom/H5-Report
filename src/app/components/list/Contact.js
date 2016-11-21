import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Search from '../public/Search';
import Menu from '../public/Menu';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import {CONFIG} from '../../constants/Config'
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
    menu: {
        backgroundColor: '#7f7f7f',
        border: '1px solid #333',
    },
    item: {
        color: '#fff',
        fontSize: '14px',
        borderBottom: '1px solid #333',
        lineHeight: '30px',
        textAlign: 'center'
    },
    list: {
        backgroundColor: '#fff',
        margin: '0 12px 12px',
        borderRadius: 4,
        boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px',
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
                iconElementRight={<IconMenu
                        iconButtonElement={<IconButton><Add color="#5e95c9"/></IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="快速创建"/>
                        <MenuItem primaryText="创建"/>
                        <MenuItem primaryText="拍名片创建"/>
                        <MenuItem primaryText="选名片创建"/>
                    </IconMenu>}
            >
            </AppBar>
        )
    }
}

class ContactList extends React.Component {
    constructor(props){
        super(props);
        this.state={
            contact: []
        }
    }
    componentDidMount(){
        this.setState({contact: contactData})
    }
    render() {
        return (
            <div>
                <div className="fiexded">
                    <Head />
                    <Search />
                </div>
                <List style={{paddingTop: '93px'}} className="contact_list">
                    {this.state.contact&&this.state.contact.map((item,index) => (
                        <ListItem
                            className='contact'
                            key={index}
                            primaryText={<p className='contact_primary'>{item.name}</p>}
                            secondaryText={
                                <p className="contact_second">
                                    <span className='company'>{<i className="material-icons">&#xE90B;</i>}{item.company}</span>
                                    <span className='position'>{<i className="material-icons">&#xE332;</i>}{item.position}</span>
                                    <span className='tel'>{<i className="material-icons">&#xE551;</i>}{item.tel}</span>
                                    </p>
                            }
                        />
                    ))}
                </List>
            </div>

        );
    }
}

export default ContactList;
