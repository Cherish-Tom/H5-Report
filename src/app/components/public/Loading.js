import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';
const load = {
    position: 'fixed',
    top: '40%',
    left: '40%',
    zIndex: 9999,

}
const Loading = () => {
    return(
        <CircularProgress style={load} color='rgb(94, 149, 201)'/>
    )
}
export default Loading
