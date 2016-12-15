import React, { Component }from 'react';
import classname from 'classnames';
import Done from 'material-ui/svg-icons/action/done';
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
            value:  'all',
            title: '全部',
            type: 'all'
        }
        this.handleClick = (event) => {
            event.preventDefault()
            const type = event.target.getAttribute('value')
            this.setState({menuopen: false, value: type, title: event.target.text})
            this.props.fetchPosts({url: this.props.path, type: type})
            this.refs.focusedItem.style = styles.select
            event.stopPropagation()
        }
    }
    toggleDropdownMenu() {
        this.setState({ menuopen: ! this.state.menuopen })
    }
    render() {
        const layout = [];
        for (let attr in this.props.items) {
            const isFocused = attr === this.state.value
            layout.push(
                    <li key={attr} ref={isFocused ? 'focusedItem' : ''} onClick={this.handleClick} style={{backgroundColor: isFocused ? '#fac057': ''}}>
                        <a href='javascript:void(0);' value={attr}>{this.props.items[attr]}{isFocused ? <Done style={styles.done} color='#fff'/> : ''}</a>
                    </li>)
        }
        return (
            <div className={classname('dropdown-title',{open:this.state.menuopen})}>
                <a href='javascript:void(0);' className='dropdown-toggle' onClick={()=>this.toggleDropdownMenu()}>
                    {this.state.title}
                    <span className="caret"></span>
                </a>
                <ul className='dropdown-menu' value={this.state.value} >
                    {layout}
                </ul>
            </div>
        );
    }
}

export default MenuTotal
