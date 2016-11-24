import React from 'react';


import Header from './Header'
import { data } from '../list/data';


class Article extends React.Component{
    render(){
        return(
            <div>{this.props.id}</div>
        )
    }
}

class Details extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        this.setState({data: data.customer})
    }
    render() {
        let view = [];
        this.state.data.map((item, index) => {
            if(parseInt(item.number) === parseInt(this.props.params.id)){
                view.push(
                    <Article {...item}  key={index} />
                )
            }
        })
        return (
            <div>
                <div className="fiexded">
                    <Header />
                </div>
                {view}
            </div>
        )
    }
}
export default Details
