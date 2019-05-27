import React from 'react';


class EditForm extends React.Component
{
	constructor(props) {
		super(props);

		/* Set vars for values to make code easier to read */
		let strDescription = this.props.itemData.description;
		let intItemId = this.props.itemData.id;
		
		/* Set values to change and save item data */
		this.state = {
			intItemId:intItemId, 
			strDescription:strDescription,
		};
	}
	
	handleDescriptionChange(event) {
		let strTargetValue = event.target.value;
		this.setState({
			strDescription: strTargetValue,
		})
	}
	
	saveChangesAndShow(obData, event) {
		event.preventDefault();
		this.props.saveChanges(obData);
		this.props.setItemState('show');
	}
	
	discardChanges() {
		this.setState(null);
		this.props.setItemState('show');
	}
	
	
	render() {
		/* Set vars for values to make code easier to read */
		let state = this.state;
		let obChangeData = {
			intItemId:state.intItemId, 
			strDescription:state.strDescription,
		}
		let strItemName = this.props.itemData.name;
		
		return (
			<div className="item">
				<input className="item_checkbox" type="checkbox"/>
				<form className="item_wrapper">
					<header className="item_header">
						<div className="item_header_name">
							<span className="item_name">{strItemName}</span>
						</div>
						<section className="item_controls">
							<input className="item_button" type="button" onClick={this.saveChangesAndShow.bind(this, obChangeData)} value="save"/>
							<input className="item_button" type="button" onClick={this.discardChanges.bind(this)} value="cancel"/>
						</section> 
					</header>
					<textarea className="item_textarea" onChange={this.handleDescriptionChange.bind(this)} defaultValue={state.strDescription}></textarea>				
				</form>
			</div>
		);
	}
	
}

export default EditForm;