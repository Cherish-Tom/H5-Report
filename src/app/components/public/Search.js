"use static";

import React, {Component}from 'react';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import SearchIcon from 'material-ui/svg-icons/Action/search';
import Avatar from 'material-ui/Avatar';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';


const styles={
    inputs:{
        height:36,
        marginTop:6,
        backgroundColor:'#fff',
        borderRadius: 20,
        paddingLeft: 30
    },
    hin:{
        color: "rgba(0, 0, 0, 0.298039)",
        fontSize: 12,
        zIndex:10,
        left: 42
    },
    float:{
        left: 24
    }
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
                    className="search_text"
                    name='search'
                    id='search'
                    type='text'
                    ref='getValue'
                	fullWidth={true}
                    inputStyle={styles.inputs}
                	hintText={this.props.title}
                    underlineShow={false}
                    hintStyle={styles.hin}
                    value={this.state.value}
                    floatingLabelText={<SearchIcon color="rgba(0, 0, 0, 0.298039)"/>}
                    floatingLabelStyle={{left: 20}}
                    floatingLabelFixed={true}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}

export default Search;
