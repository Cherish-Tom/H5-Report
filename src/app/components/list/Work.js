import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import {Link, browserHistory} from 'react-router';
import MenuTotal from '../public/MenuTotal';
import Search from '../public/Search';
import { CONFIG } from '../../constants/Config';
import Template from '../public/template';
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
    fiexd:{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
    },
    menu:{
        backgroundColor: '#7f7f7f',
        color: '#fff',
        border: '1px solid #333'
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
                title={<MenuTotal items={CONFIG.work} path = {this.props.path}/>}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0, marginRight: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}
class Lists extends Component{
    render(){
        return(
            <div style={{paddingTop: 93}}>
                <div style={{margin: 10}}>
                    <Link to='#'>
                        <div className='work-content'>
                            <div className='work-header'>
                                <div className='work-img'>
                                    <img src='images/nature.jpg' width='50' height='50'/>
                                </div>
                                <div className='work-msg'>
                                    <p className='work-name'>管理员</p>
                                    <p className='work-time'>06月30日 16:39</p>
                                </div>
                                <span className='work-label'>日记</span>
                            </div>
                            <div className='work-body'>
                                <p>今日工作总结</p>
                                <span>49878944987894498789449878944987894498789449878944987894498789449878944987894</span>
                                <p>明日工作计划</p>
                                <span>5486486</span>
                                <p>工作心得体会</p>
                                <span>548748947</span>
                            </div>
                        </div>
                    </Link>
                    <div className='work-replies'>
                        <a href='javascript:void(0);'><i className="material-icons">&#xE625;</i><span>4</span></a>
                        <a href='javascript:void(0);'><i className="material-icons">&#xE8DC;</i><span>4</span></a>
                    </div>
                </div>
            </div>
        )
    }
}
class Work extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className='fiexded'>
                    <Head />
                    <Search />
                </div>
                <Lists ></Lists>
            </div>
        )
    }
}


export default Template({
    component: Work
})
