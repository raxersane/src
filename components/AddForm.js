import React from 'react';


class GetItem extends React.Component
{
	constructor(props) {
		super(props);
		this.state = {itemData:this.props.data}
	}
	
	render()
	{
		let obItem = this.state.itemData;
		return(
			<div className="item" key={obItem.id}>
			 <input onChange={this.handleCheckboxChange.bind(this)} className="item_checkbox" type="checkbox"/>
				<ul className="item_wrapper" key={obItem.id}>
						<header className="item_header">
							<li className="item_name" onClick={this.showDescription.bind(this)}>{obItem.name}</li>
							<section className="item_controls">
								<li className="item_edit-button" data-action='edit' data-id={obItem.id} onClick={this.editItem.bind(this)}>Edit</li>
							</section>
						</header>
						{obItem.show ? <li className="item_description">{obItem.description}</li> : ''}
				</ul>
			</div>
		);
	}
	
}

export default GetItem;