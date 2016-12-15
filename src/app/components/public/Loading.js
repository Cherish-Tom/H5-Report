import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const load = {
    position: 'fixed',
    top: '40%',
    left: '40%',
    zIndex: 9999
}
const Loading = () => {
    return(
        <CircularProgress style={load} />
    )
}
export default Loading
