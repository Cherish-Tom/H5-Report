import React from 'react';
import Header from '../public/Header';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
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

class Check extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
            data:[]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount(){
        // this.setState({data: dataList.customer});
    }
    handleChange(value) {
        this.setState({
            slideIndex:value,
        });
    }
    render(){
        return (
            <div>
                <Header />
                <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.back} inkBarStyle={styles.ink}>
                    <Tab label="我的签到" value={0} style={styles.lable}/>
                    <Tab label="下属签到" value={1} style={styles.lable}/>
                </Tabs>
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={{paddingTop: 95}}>
                    <div>
                    </div>
                    <div style={styles.slide}>
                    </div>
                </SwipeableViews>
            </div>
        )
    }
}

export default Check
