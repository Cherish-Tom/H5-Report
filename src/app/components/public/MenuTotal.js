import React, { Component }from 'react';
import classname from 'classnames';
import Paper from 'material-ui/Paper';
import Done from 'material-ui/svg-icons/action/done';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Template from './template';
const styles={
    menu:{
        top: 45
    },
    under:{
        opacity: 0
    },
    list:{
        backgroundColor:'#7f7f7f',
    },
    select: {
        backgroundColor: '#fac057',
    },
    done: {
        position: 'absolute',
        right: 12,
        top: 5,
        width: 20,
        height: 20,
        verticalAlign: 'middle',
    }
};
class MenuTotal extends Component {
    constructor(props){
        super(props);
        this.state={
            menuopen: false,
            value: 0,
            title: '',
            type: ''
        }
    }
    toggleDropdownMenu() {
         this.setState({ menuopen: ! this.state.menuopen })
    }
    componentDidMount() {
        this.setState({title: '全部', type: this.state.type || 'all'});
    }
    handleClick(type) {
        this.setState({ menuopen: false,type: type });
        this.props.actions.fetchTopics({type: type})
        event.preventDefault();
    }
    render() {
        const layout = [];
        const items = this.props.items;
        for(let attr in items) {
            layout.push(
                    <li onClick={this.handleClick.bind(this,items[attr])} key={attr.hashcode}>
                        <a href='javascript:void(0);'>{attr}{<Done style={styles.done} color='#fff'/>}</a>
                    </li>)
        }
        return (
            <div className={classname('dropdown-title',{open:this.state.menuopen})}>
                <a href='javascript:void(0);' className='dropdown-toggle' onClick={()=>this.toggleDropdownMenu()}>
                    {this.state.title   }
                    <span className="caret"></span>
                </a>
                <ul className='dropdown-menu' role='menu' value={this.state.value}>
                    {layout}
                </ul>
            </div>
        );
    }
}

export default Template({
    component: MenuTotal
});
