import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import {grey400, darkBlack, lightBlack, fullWhite} from 'material-ui/styles/colors';
import Search from '../public/Search';
import Template from '../public/template';
import MenuTotal from '../public/MenuTotal';
import { CONFIG } from '../../constants/Config';
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: fullWhite,
        margin: 8,
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
class Lists extends React.Component {
    render(){
        return(
            <List style={{backgroundColor: '#efeef4',paddingTop: '93px'}} >
                {this.props.topics&&this.props.topics.map((topic, index) => (
                    <Link to={`/customer/${topic.id}`} key={index}>
                        <ListItem
                            style={styles.back}
                            key={index}
                            primaryText={
                                <p><span style={styles.textColor}>{topic.title}</span></p>
                            }
                            innerDivStyle={{padding: 8}}
                            secondaryText={
                                <p>
                                    <span style={styles.textColor}>{topic.id}&nbsp;&nbsp;{topic.created_at.substr(0, 10)}</span><br />
                                    <span style={{darkBlack}}><span>金额：&nbsp;&nbsp;&nbsp;&nbsp;&yen;</span>{topic.id}</span>
                                </p>
                            }
                            secondaryTextLines={2}
                        />
                    </Link>
                ))}
            </List>
        )
    }
}
class Customer extends React.Component {
    constructor(props){
      super(props);
      this.props.actions.fetchTopics({type: 'excellent'})
    }
    render() {
        return (
            <div>
                <div className="fiexded">
                    <Head />
                    <Search title='请输入客户名称或地址'/>
                </div>
                <Lists topics={this.props.results.topics}></Lists>
            </div>
        );
    }
}
export default Template({
    component: Customer
});
