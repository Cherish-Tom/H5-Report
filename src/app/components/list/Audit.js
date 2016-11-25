import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import {Router, Route, browserHistory, Link} from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Setting from 'material-ui/svg-icons/action/settings';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import {blue600,blueGrey50,grey100,grey900} from 'material-ui/styles/colors';
import {dataList} from './data';

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
        backgroundColor: '#fff'
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
    },
    boxback:{
        backgroundColor: "#fff",
        margin: '12px',
        borderRadius: 4,
    },
    child:{
        position: 'absolute',
        left: 6,
        top: 25
    }
}
class Cell extends React.Component {
    render(){
        const { id , name, created_at, sales_price, sales_director} = this.props;
        return(
            <ListItem
                style={styles.boxback}
                innerDivStyle={{padding: '6px 6px 6px 80px'}}
                children={<span style={styles.child}>销售订单</span>}
                primaryText={<p className="overflow">{id}&nbsp;({name})</p>}
                insetChildren={true}
                secondaryText={
                    <p style={{color:'#7888af'}}>
                        {created_at}&nbsp;￥{sales_price}<br />
                        {sales_director}
                    </p>
                }
                secondaryTextLines={2}
            />
        )
    }
}
class Audit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
            data:[]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        this.setState({data: dataList.customer});
    }
    handleChange(value) {
        this.setState({
            slideIndex:value,
        });
    }
    render() {
        return (
            <div style={{backgroundColor: '#efeef4'}}>
                <div className="fiexded">
                    <AppBar
                        style={styles.bar}
                        title={<div style={styles.title}>审批中心</div>}
                        iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                        iconStyleLeft={{marginTop:0}}
                    />
                    <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.back} inkBarStyle={styles.ink}>
                        <Tab label="已审批" value={0} style={styles.lable}/>
                        <Tab label="待审批" value={1} style={styles.lable}/>
                        <Tab label="近30天" value={2} style={styles.lable}/>
                    </Tabs>
                </div>
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={{paddingTop: 95}}>
                    <List>
                        {
                            this.state.data.map((item, index) => {
                                return <Cell {...item.basic} key={index}/>
                            })
                        }
                    </List>
                    <div style={styles.slide}>
                    </div>
                    <div style={styles.slide}>
                    </div>
                </SwipeableViews>
            </div>
    )
    }
}
export default Audit
