import React from 'react';

class ViewItem extends React.Component
{
	constructor(props) {
		super(props);
		/* init showDescription to hide item description within default behaviour*/
		this.state = {showDescription:false};
	}
	
	/* Toggles state.showDescription to show/hide item */
	handleViewOnClick() {
		if (this.state.showDescription === false) {
			this.setState({showDescription:true});
		} else {
			this.setState({showDescription:false});
		}
	}
	
	/* Show/hide description depends on state.showDescription value */
	toggleDescriptionVisibility() {
		const 
			strItemDescription = this.props.itemData.description;
		
		if (this.state.showDescription) {
			return (
				<div className="item_description">{strItemDescription}</div>
			);
		}
	}
	
	render()
	{
		/* Set vars for values to make code easier to read */
		const 
			intItemKey = this.props.itemKey,
			strItemName = this.props.itemData.name,
			boolSelected = this.props.itemData.boolSelected,
			/* Checks if action allowed and shows corresponding button */
			isDeleteAllowed = this.props.componentRights.isDeleteAllowed,
			isEditAllowed = this.props.componentRights.isEditAllowed,
			itemCheckbox = 
				isDeleteAllowed ? (
					<input className="item_checkbox" type="checkbox" checked={boolSelected} onChange={this.props.onSelect(intItemKey)}/> 
				) : (
					''
				),
			itemEditButton = 
				isEditAllowed ? (
					<span className="item_button" onClick={() => this.props.setItemState('edit')}>edit</span> 
				) : (
					''
				);
			
		
		return (
			<div className="item">
				<div className="item_checkbox-wrapper">{itemCheckbox}</div>
				<div className="item_wrapper">
						<header className="item_header">
							<div className="item_header_name">
								<span className="item_name" onClick={this.handleViewOnClick.bind(this)}>{strItemName}</span>
							</div>
							<div className="item_controls">
								{itemEditButton}
							</div>
						</header>
						{this.toggleDescriptionVisibility()}
				</div>
			</div>
		);
	}
	
}

export default ViewItem;