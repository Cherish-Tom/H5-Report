<<<<<<< HEAD
import React ,{ Component }from 'react';
import { connect } from 'react-redux';
import { fetchIssuesIfNeeded } from '../../actions/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class Master extends Component {
    constructor(props, content){
        super(props, content);
    }
    // componentDidMount() {
    //     const { dispatch } = this.props;
    //     dispatch(fetchIssuesIfNeeded('created', 10000));
    // }
    render() {
        if(this.props.isFetching) {
            return null;
        }
        return(
            <MuiThemeProvider>
                {this.props.children}
=======
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
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
            </MuiThemeProvider>
        )
    }
}
<<<<<<< HEAD

function mapStateToProps(state) {
    const {isFetching, items} = state || {isFetching: true, items: []};
    return {isFetching, items};
}
export default Master;
// export default connect(mapStateToProps)(Master);
=======
>>>>>>> ba9ef2f07895a690fd869d6d90eb3d0e5fb7cd8e
