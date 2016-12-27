import React, { Component }from 'react';
import classname from 'classnames';
import Done from 'material-ui/svg-icons/action/done';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {fullWhite} from 'material-ui/styles/colors';
const styles={
    under:{
        opacity: 0
    },
    list:{
        backgroundColor:'#7f7f7f',
    },
    select: {
        backgroundColor: '#fac057',
        color: '#fff'
    },
    done: {
        margin: '6px 12px',
        width: 20,
        height: 20,
        top: 0,
        right: 12,
        verticalAlign: 'middle',
        color: fullWhite,
        fill: fullWhite
    }
};
class MenuTotal extends Component {
    constructor(props){
        super(props);
        this.state={
            menuopen: false,
            value:  'all',
            title: '全部',
            type: 'all'
        }
        this.handleMenuItemTouchTap = (event, item, index) =>{
            this.setState({menuopen: false, value: item.props.value, title: item.props.primaryText})
            this.props.fetchPosts({url: this.props.path, type: item.props.value})
            event.preventDefault()
            event.stopPropagation()
        }
    }
    toggleDropdownMenu() {
        this.setState({ menuopen: ! this.state.menuopen })
    }
    render() {
        const layout = [];
        const menuStyle = this.state.menuopen ? {position: 'fixed', top: 45, left: '18%' , width: '64%'} : {position: 'fixed', top: 45, left: -10000, width: '70%'}
        for (let attr in this.props.items) {
            const isFocused = attr === this.state.value
            const rightIconElement = isFocused ? <Done style={styles.done} /> : null
            layout.push(
                    <MenuItem
                        value={attr}
                        primaryText={this.props.items[attr]}
                        rightIcon={rightIconElement}
                        key={attr}
                        style={{ color: '#fff', borderBottom: '1px solid #585858'}}
                    />
                )
        }
        return (

            <div className={classname('dropdown-title',{open:this.state.menuopen})}>
                <a href='javascript:void(0);' className='dropdown-toggle' onClick={()=>this.toggleDropdownMenu()}>
                    {this.state.title}
                    <span className="caret"></span>
                </a>
                <Menu
                    className='dropdown-menu'
                    value={this.state.value}
                    desktop={true}
                    onItemTouchTap={this.handleMenuItemTouchTap}
                    listStyle={{paddingTop: 0, paddingBottom: 0}}
                    selectedMenuItemStyle={styles.select}
                    style={menuStyle}
                >
                    {layout}
                </Menu>
            </div>
        );
    }
}

export default MenuTotal
