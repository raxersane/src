import React from 'react';


class AddForm extends React.Component
{
	constructor(props) {
		super(props);
		
		this.state = {
			strName: '',
			strDescription: '',
		}
	}
	
	handleNameOnChange(event) {
		this.setState({strName:event.target.value});
	}
	
	handleDescriptionOnChange(event) {
		this.setState({strDescription:event.target.value});
	}
	
	render()
	{
		return(
			<div className="item">
				<div className="item_checkbox-wrapper"></div>
				<form className="item_wrapper" onSubmit={this.props.onSubmit(this.state)}>
					<header className="item_header">
						<div className="item_header_name">
							<input type="text" className="item_header_input" placeholder="Enter new name" defaultValue="" onChange={this.handleNameOnChange.bind(this)} />
						</div>
						<section className="item_controls">
							<input className="item_button" type="submit" value="save"/>
							<input className="item_button" onClick={this.props.onDiscard} type="button" value="cancel"/>
						</section> 
					</header>
					<div className="item_description">
						<textarea className="item_textarea" placeholder="Enter new description" defaultValue="" onChange={this.handleDescriptionOnChange.bind(this)}></textarea>				
					</div>
				</form>
			</div>
		);
	}
	
}

export default AddForm;