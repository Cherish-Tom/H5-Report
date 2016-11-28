import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';



export default class Lists extends Component {
    render() {
        let path = this.props.location.pathname;
        let layout = [];
        if(path === '/customer') {
            this.props.topics.map((topic, index) => {
                layout.push()
            })
        }
        return (

        )
    }
}
