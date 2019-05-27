import React from 'react';

class ViewItem extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {data:this.props.data}
		
	}
	
	handleViewOnClick() {
		
	}
	
	render()
	{
		return (
			<div className="item">
				<input className="item_checkbox" type="checkbox" onChange={this.props.onSelect}/>
				<div className="item_wrapper">
						<header className="item_header">
							<div className="item_header_name">
								<span className="item_name">Name</span>
							</div>
							<div className="item_controls">
								<span className="item_button">edit</span>
							</div>
						</header>
						<div className="item_description">SomeDescription</div>
				</div>
			</div>
		);
	}
	
}

export default ViewItem;