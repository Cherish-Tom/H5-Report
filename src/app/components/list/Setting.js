import React from 'react';
import Header from '../public/Header';



class Setting extends React.Component {
    constructor(props,contxt){
        super(props, contxt);
    }
    render() {
        return (
            <div>
                <div className='fiexded'>
                    <Header />
                </div>
            </div>
        )
    }
}


export default Setting
