import React from 'react';
import Header from '../public/Header';
import FontIcon from 'material-ui/FontIcon';
import {grey500} from 'material-ui/styles/colors';
const styles = {
    description:{
        marginTop: '15%',
        padding: '0 15%',
        textAlign: 'center'
    },
    version: {
        fontSize: 14,
        color: '#5e95c9',
        marginBottom: 20
    },
    content: {
        backgroundColor: '#fff',
        fontSize: 14,
        padding: 10,
        textAlign: 'left',
        borderRadius: 4,
        boxShadow: '1px 2px 3px rgba(0, 0, 0, .3)'
    },
    footer:{
        position: 'fixed',
        left: '15%',
        bottom: 0
    },
    a:{
        display: 'block',
        color: '#2075c5',
        marginBottom: 10
    },
    icon:{
        fontSize: 16,
        verticalAlign: 'top',
    },
    span:{
        color: '#efecec',
        paddingRight: 4
    }
}
class About extends React.Component {
  constructor(props) {
      super(props);
  }
  render() {
      return (
            <div className='warp'>
                <Header title='关于我们' path={this.props.location.pathname}/>
                <div className='description' style={styles.description}>
                    <div className='logo'>
                        <img src='http://www.zoogooo.com/Public/Home/images/logo.png' width='160'/>
                    </div>
                    <p className='version' style={styles.version}>版本：1.0.0</p>
                    <div className='content' style={styles.content}>
                        我公司秉承“为客户创造价值”的经营理念，致力于为中小企业提供客户关系管理（CRM）和销售管理解决方案，帮助中小企业提高运营效率，节约运营成本，促进企业成长。
                    </div>
                </div>
                <div className='footer' style={styles.footer}>
                    <a href='http://www.zoogooo.com' target='_blank' style={styles.a}>
                        <FontIcon className="material-icons" style={styles.icon} color={grey500}>language</FontIcon>
                        <span style={styles.span}>网址:</span>http://www.zoogooo.com
                    </a>
                    <a href='tel:0816-2219710' target='_blank' style={styles.a}>
                        <FontIcon className="material-icons" style={styles.icon} color={grey500}>phone</FontIcon>
                        <span style={styles.span}>电话:</span>0816-2219710
                    </a>
                </div>
            </div>
      )
  }
}
export default About;
