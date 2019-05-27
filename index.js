import React from 'react';
import ReactDOM from 'react-dom';
import CRUD from './components/CRUD';
import * as serviceWorker from './serviceWorker';
const items = [
				{id:0, name:'Ken Kruger', description:'Ordered 100 Tool Kits', selected:false}, 
				{id:1, show: false, name:'Dan Richardson', description:'Ordered 500 hundred tires kits', tempDescription: '', selected:false}
			  ];
ReactDOM.render(<CRUD title={'Clients'} items={items} canEdit={true} canDelete={true} canCreate={true}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
