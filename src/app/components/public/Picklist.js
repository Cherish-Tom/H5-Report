import React, { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';


export default class Picklist extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value
        }
        this.handleChange = (event, index, value) => {
            this.setState({value: value})
        }
    }
    render(){
        return(
            <div name={this.props.fieldname} value={this.state.value}>
                <DropDownMenu
                    value={this.state.value}
                    onChange={this.handleChange}
                    underlineStyle={{display: 'none'}}
                    iconStyle={{display: 'none'}}
                    listStyle={{backgroundColor: '#efefef', paddingTop: 0, paddingBottom: 0}}
                    autoWidth={true}
                    maxHeight={300}
                    menuStyle={{width: '67vw', boxShadow: '1px 2px 3px rgba(0, 0, 0, .5)'}}
                    labelStyle={{padding: 0, lineHeight: '40px', color: '#5e95c9'}}
                    style={{height: 40}}
                     >
                    {this.props.list.map((item, index) => {
                        return <MenuItem value={item[this.props.fieldname + '_name']} primaryText={item[this.props.fieldname + '_name']} key={index} style={{borderBottom: '1px solid #d7d7d7', lineHeight: '40px'}}/>
                    })}
                </DropDownMenu>
            </div>
        )

    }

}
