import React from 'react';
import Header from '../public/Header';
import SwipeableViews from 'react-swipeable-views';
import {Tabs, Tab} from 'material-ui/Tabs';
const styles = {
    back:{
        'borderTop': '1px solid #5e95c9',
        'borderBottom': '1px solid #5e95c9',
        'borderRight': '1px solid #5e95c9',
        'overflow': 'hidden',
    },
    handline:{
        fontSize: 24,
        paddingTop: 16,
        marginBottom: 12,
        fontWeight: 400,
    },
    slide: {
         padding: 10,
    },
    lable:{
        'borderLeft': '1px solid #5e95c9',
        position: 'relative',
        zIndex: 10
    },
    bar:{
        height:45,
        backgroundColor: '#fff'
    },
    ink:{
        height:50,
        backgroundColor:'rgb(94, 149, 201)',
        marginTop: -50,
    },
    boxback:{
        backgroundColor: "#fff",
        margin: '12px',
        borderRadius: 4,
    },
    child:{
        position: 'absolute',
        left: 6,
        top: 25
    }
}

class Check extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            slideIndex: 0,
            data:[]
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(value) {
        this.setState({
            slideIndex:value,
        });
    }
    render(){
        const height = window.screen.height - 95;
        const mapHeight = height - 104;
        return (
            <div>
                <Header path={this.props.location.pathname}/>
                <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.back} inkBarStyle={styles.ink}>
                    <Tab label="我的签到" value={0} style={styles.lable}/>
                    <Tab label="下属签到" value={1} style={styles.lable}/>
                </Tabs>
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={{height: height}}>
                    <div>
                        <Map style={{height: mapHeight}}/>
                        <div className='check_input'>
                            <input type='text' placeholder='请点击选择客户'/>
                            <input type='text' placeholder='请输入描述'/>
                            <a href="javascript: void(0)">签到</a>
                        </div>
                    </div>
                    <div></div>
                </SwipeableViews>
            </div>
        )
    }
}
class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            point: null
      }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.storeAddress !== this.props.storeAddress || nextProps.mapArea !== this.props.mapArea) {
            this.addressToPoint(nextProps);
        }
        if (!nextProps.storeAddress && !nextProps.mapArea && nextProps.storeAddress !== this.props.storeAddress) {
            this.setState({
                map: this.createBMap(this.props.id)
            })
        }
    }
    componentDidMount() {
        this.setState({
            map: this.createBMap(this.props.id)
        })
    }
    createBMap(id) {
        let  map = new BMap.Map(id);
        let  point = new BMap.Point(104.7024560001,31.4961330000);
        let  marker = new BMap.Marker(point)
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        map.addControl(new BMap.NavigationControl());
        map.centerAndZoom(point, 17);
        map.enableScrollWheelZoom();
        map.addOverlay(marker)
        // function setLocal(result) {
        //     const cityName = result.name;
        //     map.setCenter(cityName);
        // }
        // let  myCity = new BMap.LocalCity();
        myCity.get(setLocal);
        map.addEventListener("click", function(e){
            var center = map.getCenter();
            console.log("地图中心点变更为：" + e.point.lng + ", " + e.point.lat);
        });
        map.addEventListener("zoomend", function(){
            console.log("地图缩放至：" + this.getZoom() + "级");
        });
        return map
    }
    // addressToPoint(nextProps) {
    //     const { onSelect } = this.props;
    //     const { map } = this.state;
    //     const marker = this.marker;
    //     map.clearOverlays();
    //     let myPoint = new BMap.Geocoder();
    //     myPoint.getPoint(nextProps.mapArea + nextProps.storeAddress, function(poi) {
    //         map.centerAndZoom(poi, 17);
    //         map.addOverlay(marker(poi));
    //         onSelect(poi)
    //     }, nextProps.mapArea)
    // }
    // marker(poi) {
    //     let marker = new BMap.Marker(poi);
    //     marker.setAnimation(BMAP_ANIMATION_BOUNCE);
    //     return marker
    // }
    render() {
        return (
            <div id={this.props.id} {...this.props}></div>
        )
    }
}
Map.propTypes= {
    id: React.PropTypes.string,
    mapArea: React.PropTypes.string,
    storeAddress: React.PropTypes.string
}
Map.defaultProps= {
    id: 'location',
}
export default Check
