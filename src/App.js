import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addItem, removeItem} from './actions';
import _ from 'lodash';

class App extends Component {
	constructor(props) {
		super(props);
		this.totalCalc = this.totalCalc.bind(this);
		this.subtotalCalc = this.subtotalCalc.bind(this);
		this.inc = this.inc.bind(this);
		this.dec = this.dec.bind(this);
	}
	
	totalCalc() {
		let subtotal = 0;
		_.forEach(this.props.items, function(item) {
			subtotal += (item.unit_price * item.quantity);
		});
		return (subtotal * ((this.props.tax * 0.01) + 1)).toFixed(2);
	}
	
	subtotalCalc() {
		let subtotal = 0;
		_.forEach(this.props.items, function(item) {
			subtotal += (item.unit_price * item.quantity);
		});
		return subtotal.toFixed(2);
	}
	
	inc(id) {
		console.log("inc", id);
	}
	
	dec(id) {
		console.log("dec", id);
	}
	
	
	render() {
		return (
			<div className="App">
				<table>
					<thead>
					<tr>
						<th>Image</th>
						<th>Item</th>
						<th>Quantity</th>
						<th colSpan={2}>Price</th>
					</tr>
					</thead>
					<tbody>
					{this.props.items.map((key, index) => {
						return <tr key={index}>
							<td><img src={this.props.items[index].thumbnail} height={50}/></td>
							<td>{this.props.items[index].name}</td>
							<td>{this.props.items[index].quantity}</td>
							<td>{this.props.items[index].unit_price.toFixed(2)}</td>
							<td>
								<button onClick={() => this.props.addItem(this.props.items[index])}>+</button>
								<br/>
								<button onClick={() => this.props.removeItem(this.props.items[index])}>-</button>
							</td>
						</tr>
					})}
					<tr>
						<td colSpan={4} style={{textAlign: "right"}}>Subtotal</td>
						<td>${this.subtotalCalc()}</td>
					</tr>
					<tr>
						<td colSpan={4} style={{textAlign: "right"}}>sales tax ({this.props.tax}%)</td>
						<td>${(this.subtotalCalc() * (this.props.tax * 0.01)).toFixed(2)}</td>
					</tr>
					<tr>
						<td colSpan={4} style={{textAlign: "right"}}>Total</td>
						<td>${this.totalCalc()}</td>
					</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		items: state.items,
		tax: state.sales_tax,
		subtotal: state.subtotal
	}
}

function mapDispatchToProps(dispatch) {
	return {
		addItem: bindActionCreators(addItem, dispatch),
		removeItem: bindActionCreators(removeItem, dispatch)
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
