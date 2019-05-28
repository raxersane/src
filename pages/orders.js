import React from 'react';
import CRUD from '../components/CRUD';

const items = [
	{
		name:'Tools', 
		description:'100 hundred kits, 50 masonry, 50 metalworking', 
	}, 
	{
		name:'Tires', 
		description:'500 packs, 250 winter and 250 summer packs', 
	},
];

const initRights = {
	'isEditAllowed': false,
	'isCreateAllowed': false,
	'isDeleteAllowed': false,
};

function Orders() {
	return <CRUD title={'Orders'} items={items} componentRights={initRights}/>;
}


export default Orders;