import React from 'react';
import Item from './Item';
import './css/CRUD.css';
import './css/reset.css';

class CRUD extends React.Component
{
	
	constructor(props) {
		super(props);
		this.state = {items: this.props.items};
	}
	
	getItems() {
		const items = this.state.items.map((obItem) =>
			<Item itemData={obItem} onSelect={this.selectItem.bind(this)}/>
		);
		return items;
	}
	
	selectItem(event) {
		console.log(event);
	}
	
	selectAll() {
		
	}
	
	deleteItems() {
		
	}
	
	addItem() {
		
	}
	
	render(){
		return(
		<div className="root_wrapper">
			<nav className="toolbar">
				<ul className="toolbar_list">
					<li className="toolbar_item" onClick={''}>Add New</li>
					<li className="toolbar_item">Select/Unselect All</li>
					<li className="toolbar_item">Delete Selected</li>
				</ul>
			</nav>
			<main className="main">
				<h1 className="page-title">Items</h1>
				{/* <div className="item">
					<input className="item_checkbox" type="checkbox"/>
					<div className="item_wrapper">
							<header className="item_header">
								<div className="item_header_name">
									<span className="item_name">Name</span>
								</div>
								<div className="item_controls">
									<span className="item_button">edit</span>
								</div>
							</header>
							<div className="item_description">SomeDescription</div>
					</div>
				</div>
				<div className="item">
					<input className="item_checkbox" type="checkbox"/>
					<form className="item_wrapper">
						<header className="item_header">
							<div className="item_header_name">
								<span className="item_name">Name</span>
							</div>
							<section className="item_controls">
								<input className="item_button" type="button" value="view"/>
								<input className="item_button" type="submit" value="save"/>
								<input className="item_button" type="button" value="cancel"/>
							</section> 
						</header>
						<textarea className="item_textarea">Some Description</textarea>				
					</form>
				</div>				
				<div className="item">
					<input className="item_checkbox" type="checkbox"/>
					<form className="item_wrapper">
						<header className="item_header">
							<div className="item_header_name">
								<input placeholder="Enter new name" value="" />
							</div>
							<section className="item_controls">
								<input className="item_button" type="submit" value="save"/>
								<input className="item_button" type="button" value="cancel"/>
							</section> 
						</header>
						<textarea className="item_textarea" placeholder="Enter new description"></textarea>				
					</form>
				</div> */}
				{this.getItems()}
			</main>
		</div>
		);
	}
}
	
export default CRUD;