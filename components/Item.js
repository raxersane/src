import React from 'react';
import ViewItem from './ViewItem';
import EditForm from './EditForm';


class Item extends React.Component
{
	constructor(props) 
	{
		super(props);
		this.state = this.props;
		//this.state= {itemState: 'show'};
		this.props.selected = true;
	}
	
	setItemState(state)
	{
		this.setState({itemState: state});
	}
	
	render()
	{
		return('');
		{/* 		let itemState = this.state.itemData.itemState;
		
		if (itemState == 'show') {
			return (
				<ViewItem changeItemState={this.setItemState.bind(this)} onSelect={this.props.selectItem}/>
			);
		} else if (itemState == 'edit') {
			return (
				<EditForm changeItemState={this.setItemState.bind(this)} saveChanges={this.saveChanges.bind(this)}/>
			);
		} */}
	}
	
}

export default Item;