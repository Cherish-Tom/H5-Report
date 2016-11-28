import React, { Component }from 'react';
import classname from 'classnames';
import Paper from 'material-ui/Paper';
import Done from 'material-ui/svg-icons/action/done';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
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
        this.handleClick = this.handleClick.bind(this);
        this.state={
            menuopen: false,
            value: 0
        }
    }
    toggleDropdownMenu() {
         this.setState({ menuopen: ! this.state.menuopen })
    }
    handleClick(event)
    {
        this.setState({ menuopen: false })
        event.preventDefault();
    }
    handleChange(event, index, value){
        this.setState({value: value})
    }
    render() {
        return (
            <div className={classname('dropdown-title',{open:this.state.menuopen})}>
                <a href='javascript:void(0);' className='dropdown-toggle' onClick={()=>this.toggleDropdownMenu()}>
                    全部
                    <span className="caret"></span>
                </a>

                <ul className='dropdown-menu' role='menu' value={this.state.value} onChange={this.handleChange}>
                    {this.props.items.map((item, index) => {
                        return  <li key={index} value={index} onClick={this.handleClick}>
                                    <a href='javascript:void(0);'>{item}{<Done style={styles.done} color='#fff'/>}</a>
                                </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default MenuTotal;
