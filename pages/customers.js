import React from 'react';
import CRUD from '../components/CRUD';

const items = [
	{
		name:'Ken Kruger', 
		description:'Ordered 100 Tool Kits', 
	}, 
	{
		name:'Dan Richardson', 
		description:'Ordered 500 hundred tires kits', 
	},
];

const initRights = {
	'isEditAllowed': true,
	'isCreateAllowed': true,
	'isDeleteAllowed': true,
};

function Customers() {
	return <CRUD title={'Customers'} items={items} componentRights={initRights}/>;
}

export default Customers;
