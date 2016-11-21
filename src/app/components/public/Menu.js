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
        color: '#fff'
    }
};

class Menu extends Component {
    constructor(props){
        super(props);
        this.state={
            menuopen: false,
            value: 0
        }
    }
    toggleDropdownMenu(){
         this.setState({ menuopen: ! this.state.menuopen })
    }
    handleChange (event, index, value){
        this.setState({ menuopen: false, value: value})
    }
    render() {
        return (
            <div className={classname({open:this.state.menuopen})}>
                <a href='javascript:void(0);' className='dropdown-toggle' onClick={()=>this.toggleDropdownMenu()}>
                    全部
                    <span className="caret"></span>
                </a>
                <ul className='dropdown-menu' role='menu' value={this.state.index} onChange={this.handleChange}>
                    {this.props.items.map((item, index) => {
                        return <li key={index}><a href='javascript:void(0);'>{item}{<Done style={styles.done}/>}</a></li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Menu;
