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
		
		let boolShowDescription = this.state.showDescription;
		
		if (boolShowDescription === false) {
			this.setState({showDescription:true});
		} else {
			this.setState({showDescription:false});
		}
	}
	
	/* Show/hide description depends on state.showDescription value */
	toggleDescriptionVisibility() {
		
		let strItemDescription = this.props.itemData.description;
		let boolShowDescription = this.state.showDescription;
		
		if (boolShowDescription) {
			return (
				<div className="item_description">{strItemDescription}</div>
			);
		}
	}
	
	render()
	{
		/* Set vars for values to make code easier to read */
		let funcOnSelect = this.props.onSelect;
		let funcSetItemState = this.props.setItemState;
		let intItemId = this.props.itemData.id;
		let strItemName = this.props.itemData.name;
		
		return (
			<div className="item">
				<input className="item_checkbox" type="checkbox" onChange={funcOnSelect(intItemId)}/>
				<div className="item_wrapper">
						<header className="item_header">
							<div className="item_header_name">
								<span className="item_name" onClick={this.handleViewOnClick.bind(this)}>{strItemName}</span>
							</div>
							<div className="item_controls">
								<span className="item_button" onClick={() => funcSetItemState('edit')}>edit</span>
							</div>
						</header>
						{this.toggleDescriptionVisibility()}
				</div>
			</div>
		);
	}
	
}

export default ViewItem;