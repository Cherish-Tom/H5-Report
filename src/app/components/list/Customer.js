import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import Search from '../public/Search';
import Template from '../public/template';
import MenuTotal from '../public/MenuTotal';
import { CONFIG } from '../../constants/Config';
import {Tool} from '../../constants/Tools';
const styles={
    textColor:{
        color: '#7888af',
        padding: '0',
    },
    back:{
        backgroundColor: '#fff',
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
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial',
        color: 'rgb(33, 33, 33)',
        fontSize: 18
    }
}
class Head extends Component {
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<MenuTotal items={CONFIG.customer} path = {this.props.path}/>}
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
                    <Link to={`/customer/${topic.accountid}`} key={index}>
                        <ListItem
                            style={styles.back}
                            key={index}
                            primaryText={
                                <p><span style={styles.textColor}>{topic.accountname}</span></p>
                            }
                            innerDivStyle={{padding: 8}}
                            secondaryText={
                                <p>
                                    <span style={styles.account_no}>S{topic.account_no}&nbsp;&nbsp;{topic.createdtime.substr(0, 10)}</span><br />
                                    <span>金额：<span>&nbsp;&nbsp;&nbsp;&nbsp;&yen;</span>{topic.discount_rate}</span>
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
      this.props.fetchTopics({url: 'customer'});
      this.state = {
          data: [],
          currentPage: 1,
          totalPage: 1,
          limit: 20,
          shouldUpdata: true
      }
      this.getNextPage = (currentPage) => {
          if(!this.state.shouldUpdata) {
              return
          }
          this.state.shouldUpdata = false
          this.props.getDate('/customer', {page: currentPage, type: 'all'}, (res) => {
              this.state.currentPage = currentPage;
              this.state.shouldUpdata = true;
              if(res.code === 200) {
                  this.state.data = this.state.data.concat(res.data.data)
                  this.setState(this.state.data)
              } else {

              }
          }, 'nextPage')
      }


    }
    shouldComponentUpdate(nextProps, nextState) {
        return !(this.props === nextProps) || !(this.state === nextState)
    }
    componentDidMount() {
        this.setState({totalPage: this.props.topics.pages})
    }
    render() {
        if(this.state.currentPage < this.state.totalPage){
            Tool.nextPage(this.refs.container, this.state.currentPage, this.state.totalPage, this.getNextPage, this.state.shouldUpdata)
        }
        return (
            <div>
                <div className="fiexded">
                    <Head path={this.props.location.pathname} />
                    <Search title='请输入客户名称或地址'/>
                </div>
                <Lists topics={this.props.topics.data} ref='container'></Lists>
            </div>
        );
    }
}
export default Template({
    component: Customer
});
