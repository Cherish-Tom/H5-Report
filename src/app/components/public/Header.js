import React from 'react';
import AppBar from 'material-ui/AppBar';

import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Setting from 'material-ui/svg-icons/action/settings';

import {browserHistory, Link} from 'react-router';
import {grey100, grey900} from 'material-ui/styles/colors';
const styles={
  text: {
    textAlign: 'center',
    fontSize:18,
    height:45,
    lineHeight:'45px',
    color: grey900,
   },
   bar:{
       height:45,
       lineHeight:'45px',
       backgroundColor: '#fff'
   }
};
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        const pathname = window.location.pathname;
        let title, leftIcons, rightIcons;
        switch(pathname) {
            case '/':
                title = '卓谷科技'
                rightIcons = <Setting color="#555"/>
                break;
            case '/photo':
                title = '拍照'
                leftIcons = <ArrowBaclIcon color="#5e95c9"/>
        }
        return (
            <AppBar
                titleStyle={styles.text}
                style={styles.bar}
                title={title}
                iconStyleRight={{marginTop:0}}
                iconStyleLeft={{marginTop:0}}
                iconElementLeft={<Link to={browserHistory}><IconButton>{leftIcons}</IconButton></Link>}
                iconElementRight={<IconButton>{rightIcons}</IconButton>}
            />

        )
    }
}
Header.defaultProps={
    title:'卓谷科技'
}
export default Header;
