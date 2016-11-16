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
    }
    render() {
        return (
            <div>
                <TextField
                    className="search_text"
                	fullWidth={true}
                    inputStyle={styles.inputs}
                	hintText={this.props.title}
                    underlineShow={false}
                    hintStyle={styles.hin}
                    floatingLabelText={<SearchIcon color="rgba(0, 0, 0, 0.298039)"/>}
                    floatingLabelStyle={{left: 20}}
                    floatingLabelFixed={true}
                />
            </div>
        )
    }
}

export default Search;
