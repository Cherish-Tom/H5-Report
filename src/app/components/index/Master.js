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
            </MuiThemeProvider>
        )
    }
}

function mapStateToProps(state) {
    const {isFetching, items} = state || {isFetching: true, items: []};
    return {isFetching, items};
}
export default Master;
// export default connect(mapStateToProps)(Master);
