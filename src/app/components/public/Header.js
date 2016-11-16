import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Setting from 'material-ui/svg-icons/action/settings';

import {Router, Route, hashHistory} from 'react-router';
import {Link} from 'react-router';
import {grey100, grey900} from 'material-ui/styles/colors';
const styles={
  text: {
    textAlign: 'center',
    fontSize:18,
    height:45,
    'lineHeight':'50px',
    color: grey900,
   },
   bar:{
       height:45,
       backgroundColor: grey100
   }
};
function handleClick(){
  alert("2");
}
const Header = () => (
    <AppBar
        style={styles.bar}
        title={<div style={styles.text}>卓谷科技</div>}
      // iconElementLeft={<Link to={hashHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
        // iconStyleLeft={{marginTop:0}}
        iconStyleRight={{marginTop:0}}
        iconElementRight={<Link to={hashHistory}><IconButton><Setting /></IconButton></Link>}
    />
)
export default Header;
