import React from 'react';


class AddForm extends React.Component
{
	constructor(props) {
		super(props);
		
		this.state = {
			id: Date.now(),
			name: '',
			description: '',
		}
	}
	
	handleNameOnChange(event) {
		this.setState({name:event.target.value});
	}
	
	handleDescriptionOnChange(event) {
		this.setState({description:event.target.value});
	}
	
	render()
	{
			return(
				<div className="item">
					<input className="item_checkbox" type="checkbox"/>
					<form className="item_wrapper" onSubmit={this.props.onSubmit(this.state)}>
						<header className="item_header">
							<div className="item_header_name">
								<input type="text" placeholder="Enter new name" defaultValue="" onChange={this.handleNameOnChange.bind(this)} />
							</div>
							<section className="item_controls">
								<input className="item_button" type="submit" value="save"/>
								<input className="item_button" onClick={this.props.onDiscard} type="button" value="cancel"/>
							</section> 
						</header>
						<textarea className="item_textarea" placeholder="Enter new description" defaultValue="" onChange={this.handleDescriptionOnChange.bind(this)}></textarea>				
					</form>
				</div>
			);
	}
	
}

export default AddForm;