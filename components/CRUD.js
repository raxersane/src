import React from 'react';
import Item from './Item';
import AddForm from './AddForm';
import './css/CRUD.css';
import './css/reset.css';

class CRUD extends React.Component
{
	
	constructor(props) {
		super(props);
		
		/* Init item default selected value */
		const arItems = this.props.items.map(obItem => {
			obItem['boolSelected'] = false;
			return obItem;
		})
		this.state = {arItems: arItems, boolShowAddForm:false, boolAllItemsSelected:false};
	}
	
	/* creates Item component instance for each element of init array */
	getItems() {
		const arItems = this.state.arItems.map((obItem, itemKey) =>
			<Item 
				componentRights={this.props.componentRights} 
				key={itemKey} 
				itemKey={itemKey} 
				itemData={obItem} 
				onSelect={this.selectItem.bind(this)} 
				saveEditChanges={this.saveEditChanges.bind(this)}
			/>
		);
		return arItems;
	}
	
	/* toggles item selected state when it's checkbox changes; item's checkboxes onSubmit handler */
	selectItem = itemKey => event => {
		const itemChecked = event.target.checked;
		this.setState({
			arItems: this.state.arItems.map((obItem, key) => {
				if (itemKey === key) {
					itemChecked ? obItem['boolSelected'] = true :  obItem['boolSelected'] = false;
				}
				return obItem;
			})
		});
	}
	
	/* select/unselect every existing Item */
	toggleSelectAll() {
		const boolAllItemsSelected = this.state.boolAllItemsSelected;
		this.setState({
			arItems: this.state.arItems.map(obItem => {
				if (!boolAllItemsSelected) {
					obItem['boolSelected'] = true;
				} else {
					obItem['boolSelected'] = false;
				}
				return obItem;
			}),
			boolAllItemsSelected: this.state.boolAllItemsSelected ? false : true,
			
		});
	}
	
	/* Shows item add form */
	showAddForm() {
		this.setState({boolShowAddForm: true});
	}
	
	/* Hides item add form */
	hideAddForm() {
		this.setState({boolShowAddForm: false});
	}
	
	/* Delete every selected item */
	deleteSelectedItems() {
		const deleteAllowed = this.props.componentRights.isDeleteAllowed;
		/* Check delete rights */
		if (deleteAllowed) {
			this.setState({
				arItems: this.state.arItems.filter(function(item){
					return !item.boolSelected;
				})
			});
		}
	}
	
	/* Create new item in state.items; AddForm OnSubmit handler  */
	addItem = itemData => event =>{
		const createAllowed = this.props.componentRights.isCreateAllowed;
		/* Check add rights */
		if (createAllowed) {
			event.preventDefault();
			const arNewItems = this.state.arItems.concat([
				{name:itemData.strName, description:itemData.strDescription}
			]);
			this.setState({arItems: arNewItems, boolShowAddForm:false})
		}
		
	}
	
	/* Saves data after item is edited */
	saveEditChanges = (data) => {
		const editAllowed = this.props.componentRights.isEditAllowed;
		/* Check delete rights */
		if (editAllowed) {
			this.setState({
				arItems: this.state.arItems.map((obItem, key) => {
					if (key === data.intItemKey) {
						obItem['description'] = data.strDescription;
					}
					return obItem;
				})
			});
		}
	}
	
	render(){
		const 
			componentRights = this.props.componentRights,
			boolShowAddForm = this.state.boolShowAddForm,
			/* Checks if action allowed and shows corresponding button */
			selectAllButton = 
				componentRights.isDeleteAllowed ? (
						<li className="button" onClick={this.toggleSelectAll.bind(this)}>Select/Unselect All</li>
					) : (
						''
					),
			deleteButton = 
				componentRights.isDeleteAllowed ? (
						<li className="button" onClick={this.deleteSelectedItems.bind(this)}>Delete Selected</li>
					) : ( 
						''
					),
			addButton = 
				componentRights.isCreateAllowed ? (
					<li className="button" onClick={this.showAddForm.bind(this)}>Add New</li>
					) : (
						''
					);
		return(
			<div className="root_wrapper">
				<header className="header">
						<h1 className="page-title">{this.props.title}</h1>{addButton}
				</header>
				<main className="main">
					{this.getItems()}
					{boolShowAddForm ? <AddForm onSubmit={this.addItem.bind(this)} isActive={this.state.showAddForm} onDiscard={this.hideAddForm.bind(this)}/> : ''}
				</main>
				<footer className="footer">
					{selectAllButton}
					{deleteButton}
				</footer>
			</div>
		);
	}
}
	
export default CRUD;