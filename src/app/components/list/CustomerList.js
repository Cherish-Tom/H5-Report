import React from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import {grey400, darkBlack, lightBlack, fullWhite} from 'material-ui/styles/colors';
import Search from '../public/Search';
import Menu from '../public/Menu';
import dataContactList from './dataContactList.json';
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: '#fff',
        margin: '0 12px 12px',
        borderRadius: 4,
        boxShadow:'rgba(0, 0, 0, 0.117647) 0px 1px 6px',
    },
    head: {
        textAlign: 'center',
        backgroundColor:'rgb(245, 245, 245)',
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
        color: fullWhite,
        border: '1px solid #333'
    }


}

const muiTheme = getMuiTheme({
    appBar: {
        height: 45,
        textColor:'#5e95c9',
    }
})

class Head extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <AppBar
                style={styles.head}
                title={<Menu />}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconMenu
                        iconButtonElement={<IconButton><Add color="#5e95c9"/></IconButton>}
                        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    >
                        <MenuItem primaryText="快速创建" />
                        <MenuItem primaryText="创建" />
                    </IconMenu>}
            >
            </AppBar>
        )
    }
}
class Lists extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <List style={{backgroundColor: '#efeef4',paddingTop: '96px'}}>
                    {dataContactList.map((item, index) => (
                        <ListItem
                            style={styles.back}
                            key={index}
                            primaryText={
                                <p><span style={styles.textColor}>{item.name}</span></p>
                            }
                            secondaryText={
                                <p>
                                    <span style={styles.textColor}>{item.id}&nbsp;&nbsp;{item.time}</span><br />
                                    <span style={{darkBlack}}><span>金额：&nbsp;&nbsp;&nbsp;&nbsp;</span>{item.price}</span>
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                    ))}
                </List>
            </div>
        )
    }
}
class CustomerList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <div style={styles.fiexd}>
                        <Head />
                        <Search title='请输入客户名称或地址'/>
                    </div>
                    <Lists />
                </div>
            </MuiThemeProvider>

        );
    }
}
export default CustomerList;
