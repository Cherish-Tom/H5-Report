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
        return (
            <div>
                <Header />
                <Tabs onChange={this.handleChange} value={this.state.slideIndex} style={styles.back} inkBarStyle={styles.ink}>
                    <Tab label="我的签到" value={0} style={styles.lable}/>
                    <Tab label="下属签到" value={1} style={styles.lable}/>
                </Tabs>
                <SwipeableViews index={this.state.slideIndex} onChangeIndex={this.handleChange} style={{paddingTop: 95}}>
                    <div></div>
                    <div></div>
                    <div style={styles.slide}>
                    </div>
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
  propTypes: {
      id: React.PropTypes.string,
      mapArea: React.PropTypes.string,
      storeAddress: React.PropTypes.string
  }
  defaultProps: {
      id: 'location',
      storeAddress: '',
      mapArea: '',
      ak: null
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
      let  point = new BMap.Point(116.404, 39.915);
      map.addControl(new BMap.NavigationControl());
      map.centerAndZoom(point, 10);
      map.enableScrollWheelZoom();
      function setLocal(result) {
          const cityName = result.name;
          map.setCenter(cityName);
      }
      let  myCity = new BMap.LocalCity();
      myCity.get(setLocal);
      return map
  }
  addressToPoint(nextProps) {
      const {onSelect} = this.props;
      const { map } = this.state;
      const marker = this.marker;
      map.clearOverlays();
      let myPoint = new BMap.Geocoder();
      myPoint.getPoint(nextProps.mapArea + nextProps.storeAddress, function(poi) {
          map.centerAndZoom(poi, 17);
          map.addOverlay(marker(poi));
          onSelect(poi)
      }, nextProps.mapArea)
  }
  marker(poi) {
      let marker = new BMap.Marker(poi);
      marker.setAnimation(BMAP_ANIMATION_BOUNCE);
      return marker
  }
  render() {
      return (
          <div id={this.props.id} {...this.props}></div>
      )
  }
}

export default Check
