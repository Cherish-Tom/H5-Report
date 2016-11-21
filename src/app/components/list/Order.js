import React from 'react';
import {Link} from 'react-router';
import {List, ListItem, MakeSelectable} from 'material-ui/List';
import { Router, Route, hashHistory } from 'react-router';
const styles= {
	a :{
		"color":"#6b9ac8",
		"borderBottom":"1px solid #ccc",
	}
}
const ContactRecordList = () =>(
	<List>
		<Link to="/app">
			<ListItem
				style={styles.a}
				primaryText={
					<div className="Order-list">
						<p className="comp" >希望集团</p>
						<p className="time">S0317 2015-10-29</p>
						<p className="money">金额：￥87.00</p>
					</div>
				}
			 />
		 </Link>
		<Link to="/app">
			<ListItem
				style={styles.a}
				primaryText={
					<div className="Order-list">
						<p className="comp">希望集团</p>
						<p className="time">S0317 2015-10-29</p>
						<p className="money">金额：￥87.00</p>
					</div>

				}
			 />
		 </Link>

	</List>
	)


export default ContactRecordList;
