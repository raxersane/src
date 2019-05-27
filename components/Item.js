import React from 'react';
import ViewItem from './ViewItem';
import EditForm from './EditForm';


class Item extends React.Component
{
	constructor(props) 
	{
		super(props);
		this.state = {itemState: 'show'};
	}
	
	/* Toggles item state depending on parameter given: show - view mode, edit - edit mode */
	setItemState(newState)
	{
		this.setState({itemState: newState});
	}
	
	render()
	{
		/* Set vars for values to make code easier to read */
		let strItemState = this.state.itemState;
		let props = this.props;
		let funcSetItemState = this.setItemState.bind(this);
		let obItemData = this.props.itemData;

		if (strItemState === 'show') {
			return (
				<ViewItem itemData={obItemData} setItemState={funcSetItemState} onSelect={props.onSelect}/>
			);
		} else if (strItemState === 'edit') {
			return (
				<EditForm itemData={obItemData} setItemState={funcSetItemState} saveChanges={props.saveChanges.bind(this)}/>
			);
		} 
	}
}

export default Item;