import React from 'react';
import { Link, browserHistory } from 'react-router';
import MenuTotal from '../public/MenuTotal';
import Search from '../public/Search';
import Header from '../public/Header';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import { CONFIG }  from '../../constants/Config'
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
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
    fiexd:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    menu:{
        backgroundColor: '#7f7f7f',
        color: '#fff',
        border: '1px solid #333'
    },
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial'
    }
}


class Head extends React.Component {
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<MenuTotal items={CONFIG.bulletin} />}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0, marginRight: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}

class Bulletin extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className='fiexded'>
                    <Head />
                    <Search />
                </div>
            </div>
        )
    }
}


export default Bulletin
