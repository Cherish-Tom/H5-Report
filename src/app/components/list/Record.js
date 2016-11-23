import React, { Component }from 'react';
import {List, ListItem} from 'material-ui/List';
import {Link, browserHistory} from 'react-router';
import AppBar from 'material-ui/AppBar';
import Search from '../public/Search';
import Menu from '../public/Menu';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import ChevronRight from 'material-ui/svg-icons/navigation/chevron-right';
import Add from 'material-ui/svg-icons/content/add';
import {dataList} from './data';
import {CONFIG} from '../../constants/Config';
const styles = {
    title:{
        textAlign: 'center',
        lineHeight: '45px',
        height: 45,
        overflow: 'initial'
    },
    bar: {
        backgroundColor: '#fff',
        lineHeight: '45px',
        height: 45,
    },
    textColor: {
        color: '#7888af',
        maxWidth: '75%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    back: {
        margin: 12,
        backgroundColor: '#fff',
        borderRadius: 4
    },
    inner:{
        padding: '10px 100px 10px 10px'
    },
    btn:{
        width: 100,
        padding: 0,
        height: 36,
        textAlign: 'right'
    }
}
class Head extends React.Component {
    render() {
        return(
            <AppBar
                style={styles.bar}
                title={<Menu items={CONFIG.record}/>}
                titleStyle={styles.title}
                iconStyleLeft={{marginTop: 0}}
                iconStyleRight={{marginTop: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            >
            </AppBar>
        )
    }
}
class ViewCell extends React.Component {
    render(){
        return (
            <ListItem
                style={styles.back}
                innerDivStyle={styles.inner}
                primaryText = {<p style={styles.textColor}>{this.props.name}</p>}
                secondaryText={<p className="contact_second">
                    <span className='company'>{this.props.company}</span>
                    <span className='position'>{this.props.prople}</span>
                </p>}
                rightIconButton={<IconButton style={styles.btn}><span className="created_at">{this.props.created_at.substring(0, 10)}</span><ChevronRight color='#a4e6cf'/></IconButton>}
            />
        )

    }
}

class Record extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({data: dataList.record});
    }
    render(){
        return (
            <div>
                <div className="fiexded" >
                    <Head />
                    <Search title="请输入电话号码或者联系人" />
                </div>
                <List style={{backgroundColor: '#efeef4',paddingTop: '93px'}}>
                    {
                        this.state.data.map((item, index) => {
                            return <ViewCell {...item} key={index} />
                        })
                    }
                </List>
            </div>
        )
    }
}
export default Record;
