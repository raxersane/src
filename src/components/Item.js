import React from 'react';
import './css/Item.css';

class Item extends React.Component
{
	constructor(props) 
	{
		super(props);
		const 
			itemDescription = this.props.itemData.description ? this.props.itemData.description : '',
			itemState = this.props.itemState ? this.props.itemState : 'preview';
		this.state = {itemState: itemState, tempName: '', tempDescription: itemDescription};
	}
	
	/* Getters*/
	getItemState() {
		return this.state.itemState;
	}
	
	IsAddAllowed() {
		return this.props.componentRights.IsAddAllowed;
	}
	
	/* Item DOM getters */
	getDomDescription() {
		const 
			strTempDescription = this.state.tempDescription,
			strDescription = this.props.itemData.description,
			strItemState = this.state.itemState;
		let jsxDescription;
			
		switch (strItemState) {
			case 'show':
				jsxDescription = (
					<div className="item_description">{strDescription}</div>
				);
			break;
			case 'edit':
			case 'add':
				jsxDescription = (
					<textarea 
						className="item_textarea" 
						placeholder="Enter new description" 
						defaultValue={strTempDescription} 
						onChange={this.handleDescriptionOnChange.bind(this)}
					></textarea>				
				);
			break;
			default:
			break;
		}
		return jsxDescription;
	}
	
	getDomName() {
		const 
			strItemState = this.getItemState(),
			strName = this.props.itemData.name;

		let jsxName = '';
			
		switch (strItemState) {
			case 'preview':
			case 'show':
			case 'edit':
			default:
				jsxName = (
					<span className="item_name" onClick={this.handleNameOnClick.bind(this)}>
						{strName}
					</span>
				);
			break;
			case 'add':
				jsxName = (
					<input 
						type="text" 
						className="item_header_input" 
						placeholder="Enter new name" 
						defaultValue="" 
						onChange={this.handleNameOnChange.bind(this)} 
					/>
				);
			break;
		}
		return jsxName;
	}
	
		
	getDomCheckbox() {
		const 
			isDeleteAllowed = this.props.componentRights.isDeleteAllowed,
			boolSelected = this.props.itemData.boolSelected,
			intItemKey = this.props.itemKey,
			itemState = this.state.itemState;
		if (isDeleteAllowed && itemState !== 'add') {
			return(
				<input 
					className="item_checkbox" 
					type="checkbox" 
					checked={boolSelected} 
					onChange={this.props.onSelect(intItemKey)}
				/> 
			);
		}
	}
	
	getDomControls() {
		const 
			strItemState = this.getItemState(),
			isEditAllowed = this.props.componentRights.isEditAllowed,
			itemEditButton = 
				isEditAllowed ? (
					<span key='edit' className="item_button" onClick={this.handleEditOnClick.bind(this)}>edit</span> 
				) : (
					''
				),
			itemSaveButton = 
				isEditAllowed ? (
					<input key='save' className="item_button" type="submit" value="save"/>
				) : (
					''
				),
			itemCancelButton = 
				isEditAllowed ? (
					<input key='cancel' className="item_button" onClick={this.handleCancelOnClick.bind(this)} type="button" value="cancel"/>
				) : (
					''
				);
		let jsxControls = '';
		switch(strItemState) {
			case 'preview':
			case 'show':
				jsxControls = [itemEditButton];
			break;
			case 'add':
			case 'edit':
				jsxControls = [itemSaveButton, itemCancelButton];
			break;
			default:
			break;
		}

		return jsxControls;
	}
	
	getDomItem() {
		return(
			<div className="item_inner">
				<header className="item_header">
					<div className="item_header_name">
						{this.getDomName()}
					</div>
					<div className="item_controls">
						{this.getDomControls()}
					</div>
				</header>
				{this.getDomDescription()}
			</div>
		);
	}
	
	getItem() {
		const 
			itemState = this.getItemState(),
			domItem = this.getDomItem();
			
			
			if (itemState === 'preview' || itemState ===  'show') { 
				return (
					<div className="item_wrapper">{domItem}</div>
				);
			} else if (itemState === 'edit') {
				return (
					<form className="item_wrapper" onSubmit={this.handleFormOnSubmit.bind(this)}>{domItem}</form>
				);
			} else if (itemState === 'add') {
				const itemData = {
					strName:this.state.tempName,
					strDescription:this.state.tempDescription,
				};
				return (
					<form className="item_wrapper" onSubmit={this.props.onSubmit(itemData)}>{domItem}</form>
				);
			}
	}
	
	/* Event handlers */
	
	handleNameOnChange(event) {
		const strName = event.target.value;
		this.setState({tempName: strName});
	}
	
	handleNameOnClick(event) {
		const itemState = this.getItemState();
		const newItemState = 
			itemState === 'preview' ? (
				'show'
			) : ( 
				'preview'
			);
		
		this.setState({
			itemState: newItemState,
		});
	}
	
	handleEditOnClick() {
		this.setState({itemState: 'edit'});
	}
	
	handleDescriptionOnChange(event) {
		const strDescription = event.target.value;
		this.setState({
			tempDescription:strDescription,
		});
	}	
	
	handleFormOnSubmit(event) {
		event.preventDefault();
		this.setState({
			description: this.state.tempDescription,
			name: this.state.tempName,
			itemState: 'show',
		});
	}
	
	handleCancelOnClick() {
		if (this.state.itemState === 'add') {
			this.props.onCancel();
		} else {
			this.setState({
				itemState: 'show',
				tempDescription: this.props.itemData.description,
			});
		}
		
	}
	
	render() {
		return (
			<div className="item">
				<div className="item_checkbox-wrapper">{this.getDomCheckbox()}</div>
				{this.getItem()}
			</div>
		);
	}
}

export default Item;