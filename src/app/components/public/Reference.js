import React from 'react'
import Header from './Header'
import Search from './Search'


export default class Reference extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='fiexded'>
                <Header path={this.props.location.pathname}/>
                <Search />
            </div>
        )
    }
}
