import React ,{Component}from 'react';
import {render} from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
export default class Master extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <MuiThemeProvider>
                <div>{this.props.children}</div>
            </MuiThemeProvider>
        )
    }
}
