import React from 'react';
import './css/Item.css';
import ViewItem from './ViewItem';
import EditForm from './EditForm';


class Item extends React.Component
{
	constructor(props) 
	{
		super(props);
		this.state = {itemState: 'show'};
	}
	
	/* Toggles component mode depending on newState parameter given: show/edit */
	setItemState(newState)
	{
		this.setState({itemState: newState});
	}
	
	render()
	{
		/* Set vars for short values to make code easier to read */
		const 
			strItemState = this.state.itemState,
			funcSetItemState = this.setItemState.bind(this),
			intItemKey = this.props.itemKey,
			obItemData = this.props.itemData,
			componentRights = this.props.componentRights;

		if (strItemState === 'show') {
			return (
				<ViewItem 
					itemKey={intItemKey} 
					itemData={obItemData} 
					setItemState={funcSetItemState} 
					onSelect={this.props.onSelect}
					componentRights={componentRights}
				/>
			);
		} else if (strItemState === 'edit' && componentRights.isEditAllowed) {
			return (
				<EditForm 
					itemKey={intItemKey}
					itemData={obItemData}
					onSelect={this.props.onSelect}
					setItemState={funcSetItemState}
					saveEditChanges={this.props.saveEditChanges}
					componentRights={componentRights}
				/>
			);
		} 
	}
}

export default Item;