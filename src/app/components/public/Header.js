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
<<<<<<< HEAD
    lineHeight:'45px',
=======
    'lineHeight':'50px',
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
    color: grey900,
   },
   bar:{
       height:45,
<<<<<<< HEAD
       lineHeight:'45px',
       backgroundColor: '#fff'
=======
       backgroundColor: grey100
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
   }
};
function handleClick(){
  alert("2");
}
const Header = () => (
    <AppBar
<<<<<<< HEAD
        titleStyle={styles.text}
        style={styles.bar}
        title={<div>卓谷科技</div>}
=======
        style={styles.bar}
        title={<div style={styles.text}>卓谷科技</div>}
      // iconElementLeft={<Link to={hashHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
        // iconStyleLeft={{marginTop:0}}
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
        iconStyleRight={{marginTop:0}}
        iconElementRight={<Link to={hashHistory}><IconButton><Setting /></IconButton></Link>}
    />
)
export default Header;
