import React from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
const styles={
    menu:{
        top: 45
    },
    under:{
        opacity: 0
    },
    list:{
        backgroundColor:'#7f7f7f',
    },
    select: {
        backgroundColor: '#fac057',
    }
};

 class Menu extends React.Component {
    constructor(props){
        super(props);
        this.state={
            value:0,
        };
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(event,index,value){
        event.stopPropagation();
        event.preventDefault();
        this.setState({value});
    }
    render() {
        return (
            <div>
                <DropDownMenu value={this.state.value} onChange={this.handleChange} underlineStyle={styles.under}>
                    <MenuItem value={1} primaryText='我的'/>
                    <MenuItem value={2} primaryText='全部'/>
                    <MenuItem value={3} primaryText='潜在客户'/>
                    <MenuItem value={4} primaryText='VIP客户'/>
                    <MenuItem value={5} primaryText='成交客户'/>
                    <MenuItem value={6} primaryText='热点客户'/>
                    <MenuItem value={7} primaryText='30天未更新'/>
                    <MenuItem value={8} primaryText='本月创建'/>
                    <MenuItem value={9} primaryText='公海客户'/>
                </DropDownMenu>
            </div>
        );
    }
}

export default Menu;
