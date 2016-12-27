"use static";

import React, {Component}from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/Action/search';
import Avatar from 'material-ui/Avatar';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


const styles={
    inputs:{
        height:28,
        marginTop: 8,
        backgroundColor:'#fff',
        borderRadius: 20,
        paddingLeft: 30,
        fontSize: 14
    },
}


class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: ''
        }
        this.handleChange = (event) => {
            let value = this.reds.getValue.getValue()
            this.setState({value: value})
            console.log(value);
        }
    }
    render() {
        return (
            <div>
                <TextField
                    type='search'
                    className="search_text"
                    name='search'
                    type='text'
                    ref='getValue'
                	fullWidth={true}
                    placeholder={this.props.title}
                    inputStyle={styles.inputs}
                    underlineShow={false}
                    hintStyle={styles.hin}
                    value={this.state.value}
                    floatingLabelText={<SearchIcon color="rgba(0, 0, 0, 0.298039)"/>}
                    floatingLabelStyle={{left: 20, top: 34}}
                    floatingLabelFixed={true}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Search;
