import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import {grey400, darkBlack, lightBlack, fullWhite} from 'material-ui/styles/colors';
import Search from '../public/Search';
import MenuTotal from '../public/MenuTotal';
//头部选项
import { CONFIG } from '../../constants/Config';
//模拟数据来源
import {dataList} from './data';
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: fullWhite,
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
        color: fullWhite,
        border: '1px solid #333'
    },
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial'
    }
}
class Head extends Component {
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<MenuTotal items={CONFIG.customer} />}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0, marginRight: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}
class Lists extends React.Component{
    render(){
        return(
            <List style={{backgroundColor: '#efeef4',paddingTop: '93px'}} >
                {this.props.data&&this.props.data.map((item, index) => (
                    <a href={`/customer/list/${item.basic.number}`} key={index}>
                        <ListItem
                            style={styles.back}
                            key={index}
                            primaryText={
                                <p><span style={styles.textColor}>{item.basic.name}</span></p>
                            }
                            secondaryText={
                                <p>
                                    <span style={styles.textColor}>{item.basic.id}&nbsp;&nbsp;{item.basic.created_at.substr(0, 10)}</span><br />
                                    <span style={{darkBlack}}><span>金额：&nbsp;&nbsp;&nbsp;&nbsp;</span>{item.basic.sales_price}</span>
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                    </a>
                ))}
            </List>
        )
    }
}
class Customer extends React.Component {
    constructor(props){
      super(props);
      this.props.actions.fetchTopicsIfNeed({type: 'excellent'})
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="fiexded">
                    <Head />
                    <Search title='请输入客户名称或地址'/>
                </div>
            </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})
const mapStateToProps = state => {
  const { postReddit } = state
  let replies = [], topics = [], topic = {}, results = postReddit['results']
  if (results) {
    switch (results.type) {
      case actions.TOPIC:
        topic = results.topic
        replies = results.replies
        break
      case actions.TOPICS:
        topics = results.topics
        break
      default:
        {}
    }
  }
  return { results: { replies, topics, topic } }
}
export default connect(mapStateToProps, mapDispatchToProps)(Customer);
