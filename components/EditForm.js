import React from 'react';


class EditForm extends React.Component
{
	constructor(props) {
		super(props);
		
		/* Set values to change and save item data */
		this.state = this.props.itemData;
	}
	
	handleDescriptionChange = event => {
		const strTargetValue = event.target.value;
		this.setState({
			description: strTargetValue,
		})
	}
	
	saveChangesAndShow = event => {
		event.preventDefault();
		const obData = {
			strDescription:this.state.description,
			intItemKey:this.props.itemKey,
		};
		this.props.saveEditChanges(obData);
		this.props.setItemState('show');
	}
	
	/* Cancel edit, changes item state to show */
	discardChanges () {
		this.props.setItemState('show');
	}
	
	
	render() {
		const 
			strNameValue = this.props.itemData.name,
			strDescripionValue = this.props.itemData.description,
			intItemKey = this.props.itemKey,
			boolSelected = this.props.itemData.boolSelected,
			isDeleteAllowed = this.props.componentRights.isDeleteAllowed,
			itemCheckbox = 
				isDeleteAllowed ? (
					<input className="item_checkbox" type="checkbox" checked={boolSelected} onChange={this.props.onSelect(intItemKey)}/> 
				) : (
					''
				);
		
		return (
			<div className="item">
				<div className="item_checkbox-wrapper">{itemCheckbox}</div>
				<form className="item_wrapper" onSubmit={this.saveChangesAndShow}>
					<header className="item_header">
						<div className="item_header_name">
							<span className="item_name">{strNameValue}</span>
						</div>
						<section className="item_controls">
							<input className="item_button" type="submit" value="save"/>
							<input className="item_button" type="button" onClick={this.discardChanges.bind(this)} value="cancel"/>
						</section> 
					</header>
					<div className="item_description">
						<textarea className="item_textarea" onChange={this.handleDescriptionChange} defaultValue={strDescripionValue}></textarea>				
					</div>
				</form>
			</div>
		);
	}
	
}

export default EditForm;