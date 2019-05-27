import React from 'react';
import Item from './Item';
import AddForm from './AddForm';
import './css/CRUD.css';
import './css/reset.css';

class CRUD extends React.Component
{
	
	constructor(props) {
		super(props);
		this.state = {items: this.props.items, showAddForm:false};
	}
	
	/* creates Item component instance for each element of init array */
	getItems() {
		const items = this.state.items.map(obItem =>
			<Item key={obItem.id} itemData={obItem} onSelect={this.selectItem.bind(this)} saveChanges={this.saveChanges.bind(this)}/>
		);
		return items;
	}
	
	/* toggles item selected state when it's checkbox changes; item's checkboxes onSubmit handler */
	selectItem = itemId => event => {
		let itemChecked = event.target.checked;
		this.setState({
			items: this.state.items.map(obItem => {
				if (obItem.id === itemId) {
					itemChecked ? 
					obItem['selected'] = true :  
					obItem['selected'] = false;
				}
				return obItem;
			})
		});
	}
	
	/* select/unselect every existing Item */
	selectAll() {
		
	}
	
	showAddForm() {
		this.setState({showAddForm: true});
	}
	
	hideAddForm() {
		this.setState({showAddForm: false});
	}
	
	deleteSelectedItems() {
		this.setState({
			items: this.state.items.filter(function(item){
				return !item.selected;
			})
		});
		
	}
	
	/* creates new item in state.items; AddForm OnSubmit handler  */
	addItem = itemData => event =>{
		event.preventDefault();
		let newArray = this.state.items.concat([
            {itemData}
		]);
		this.setState({items: newArray, showAddForm: false})
		
	}
	
	saveChanges = data => {
		this.setState({
			items: this.state.items.map(obItem => {
				if (obItem.id === data.intItemId) {
					obItem['description'] = data.strDescription;
				}
				return obItem;
			})
		});
	}
	
	render(){
		/* Set vars for values to make code easier to read */
		let componentRights = this.props.componentRights;
		let showAddForm = this.state.showAddForm;
		
		/* Checks if delete allowed and show\hide select & delete buttons */
		let selectAllButton = componentRights.isDeleteAllowed ? <li className="toolbar_item">Select/Unselect All</li> : '';
		let deleteButton = componentRights.isDeleteAllowed ? <li className="toolbar_item" onClick={this.deleteSelectedItems.bind(this)}>Delete Selected</li> : '';
		
		return(
		<div className="root_wrapper">
			<nav className="toolbar">
				<ul className="toolbar_list">
					<li className="toolbar_item" onClick={this.showAddForm.bind(this)}>Add New</li>
					{selectAllButton}
					{deleteButton}
				</ul>
			</nav>
			<main className="main">
				<h1 className="page-title">Items</h1>
				{this.getItems()}
				{showAddForm ? <AddForm onSubmit={this.addItem.bind(this)} isActive={this.state.showAddForm} onDiscard={this.hideAddForm.bind(this)}/> : ''}
			</main>
		</div>
		);
	}
}
	
export default CRUD;