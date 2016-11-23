import React from 'react';
import {Link, browserHistory} from 'react-router';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import { Router, Route, hashHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ArrowBaclIcon from 'material-ui/svg-icons/navigation/arrow-back';
import Add from 'material-ui/svg-icons/content/add';
import Search from '../public/Search';
import Menu from '../public/Menu';
import {CONFIG} from '../../constants/Config';
import {dataList} from './data'
const styles={
    textColor:{
        color: '#7888af',
    },
    back:{
        backgroundColor: '#fff',
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
    title:{
        height: 45,
        lineHeight: '45px',
        overflow: 'initial'
    }
}
class Head extends React.Component {
    render() {
        return(
            <AppBar
                style={styles.head}
                titleStyle={styles.title}
                title={<Menu items={CONFIG.order} />}
                iconStyleRight={{marginTop: 0}}
                iconStyleLeft={{marginTop: 0}}
                iconElementLeft={<Link to={browserHistory}><IconButton><ArrowBaclIcon color="#5e95c9"/></IconButton></Link>}
                iconElementRight={<IconButton><Add color="#5e95c9"/></IconButton>}
            />
        )
    }
}
class ViewCell extends React.Component {
	render(){
		return (
			<ListItem
				style={styles.back}
				primaryText={
					<p><span style={styles.textColor}>{this.props.name}</span></p>
				}
				secondaryText={
					<p>
						<span style={styles.textColor}>{this.props.id}&nbsp;&nbsp;{this.props.created_at.substring(0, 10)}</span><br />
						<span ><span>金额：&nbsp;&nbsp;&nbsp;&nbsp;¥</span>{this.props.price}</span>
					</p>
				}
				secondaryTextLines={2}
			/>
		)
	}
}
class Record extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}
	componentDidMount(){
		this.setState({data: dataList.customer})
	}
	render(){
		return(
			<div>
				<div className="fiexded">
					<Head />
					<Search />
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
