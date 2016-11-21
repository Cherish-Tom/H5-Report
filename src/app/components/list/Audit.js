import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Router, Route, browserHistory, Link} from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Setting from 'material-ui/svg-icons/action/settings';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import {blue600,blueGrey50,grey100,grey900} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
    tabs: {
        backgroundColor: blueGrey50,
        textColor:'rgba(94, 149, 201 ,.8)',
        selectedTextColor: 'rgba(255, 255, 255, 1)'
    },
    appBar:{
        height: 45,
    }
})

const styles = {
    back:{
        'borderTop': '1px solid #5e95c9',
        'borderBottom': '1px solid #5e95c9',
        'borderRight': '1px solid #5e95c9',
        'overflow': 'hidden',
    },
    handline:{
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
         padding: 10,
    },
    lable:{
        'borderLeft': '1px solid #5e95c9',
        position: 'relative',
        zIndex: 10
    },
    bar:{
        height:45,
        backgroundColor: grey100
    },
    title:{
        textAlign: 'center',
        fontSize:18,
        lineHeight:'45px',
        color: grey900,
    },
    ink:{
        height:50,
        backgroundColor:'rgb(94, 149, 201)',
        marginTop: -50,
    }
}

export default class AuditList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({
            slideIndex:value,
        });
    }
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>

                <div>
                    <AppBar
                        style={styles.bar}
                        title={<div style={styles.title}>审批中心</div>}
                        iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                        iconStyleLeft={{marginTop:0}}
                        iconStyleRight={{marginTop:0}}
                        iconElementRight={<Link to={browserHistory}><IconButton><Setting /></IconButton></Link>}
                    />
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.back} inkBarStyle={styles.ink}>
                        <Tab label="已审批" value={0} style={styles.lable}/>
                        <Tab label="待审批" value={1} style={styles.lable}/>
                        <Tab label="近30天" value={2} style={styles.lable}/>
                    </Tabs>
                    <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} >
                        <div>
                            <h2 style={styles.headline}>Tabs with slide effect</h2>
                            Swipe to see the next slide.<br />
                        </div>
                        <div style={styles.slide}>
                            slide n°2
                        </div>
                        <div style={styles.slide}>
                            slide n°3
                        </div>
                    </SwipeableViews>
                </div>
            </MuiThemeProvider>
    )
    }
}
