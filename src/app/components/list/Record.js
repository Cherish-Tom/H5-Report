import React, { Component }from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Search from '../public/Search';
import Menu from '../public/Menu';
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
        overflow: 'initial'
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
    },
    a:{
        display: 'block',
        backgroundColor: '#82bde3',
        marginBottom: 20,
        height: 36,
        width: '100%',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 36,
        borderRadius: 2
    }
}
class Head extends React.Component {
    render() {
        return(
            <AppBar
                style={styles.bar}
                title={<Menu items={CONFIG.record}/>}
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
class Record extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <div className="fiexded" >
                    <Head />
                    <Search title="请输入电话号码或者联系人" />
                </div>
                <List className='contact_list'>

                </List>
            </div>
        )
    }
}


export default Record;
