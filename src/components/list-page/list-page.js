import React, { Component } from 'react';
import Header from '../header/header.js';
import SearchBar from './search-bar.js';
import Filters from './filters.js';
import Item from './item.js';
import ItemModal from './item-modal.js';
import axios from 'axios';

class List extends Component {

	constructor(props){
		super(props);
		this.state = { 
			items : [],
			isLoaded : false,
			itemsCopy : [],
			itemTypes : [],
			showModal : false,
			modalItem : {}
		};
	}

	componentDidMount(){
		this.fetchItems();
	}

	render() {
		let listContainer;
		if(this.state.isLoaded)
			if(this.state.items.length)
				listContainer = this.state.items.map((item) =>
			    	<Item key={item.itemCode} item={item} handleClick={(item) => this.handleItemClick(item)} />
				);
			else
				listContainer = <div> No Results </div>
		else
			listContainer = <div> Loading </div>

		return (
			<div>
				<Header/>
				<SearchBar onSearchChange={(searchText)=> this.searchItem(searchText)}/>
				<div className="mt-2 border">
					<Filters filters={this.state.itemTypes} onFilterSelect={(type)=> this.filterItems(type)}/>
				</div>
				<div className="list-group">
					{listContainer}
				</div>
				<ItemModal showModal={this.state.showModal} item={this.state.modalItem} handleModalClose={()=>this.handleModalClose()}/>
			</div>
		);
	}

	handleItemClick(item){
		this.setState({showModal : true, modalItem : item})
	}

	handleModalClose(){
		this.setState({showModal : false})
	}

	fetchItems() {
		axios.get(`https://demo8558685.mockable.io/get-items`)
			.then((res) => {
				let items = res.data.response.result.sort(this.sortItems)
				let temp = [];
				for(let i =0; i<items.length; i++){
					if(items[i].type === "Special"){
						temp.push(items[i]);
						items.splice(i,1);
						i-=1;
					}
				}
				items = temp.concat(items);
				this.setState({items : items, isLoaded : true, itemsCopy : items});
				this.findTypes(items)
			});
			
	}

	searchItem(searchText){
		if (searchText && searchText.trim() !== '') {
			let items = this.state.itemsCopy.filter((i) => {
				return (i.itemName.toLowerCase().indexOf(searchText.toLowerCase()) > -1);
			});
			this.setState({items : items });
		}
		else{
			this.setState({items : this.state.itemsCopy });
		}
	}

	findTypes(data){
		let flags = [], itemTypes = [{type: 'All', isSelected : false}], type;
		for(let i=0;i<data.length;i++){
		if( flags[data[i].type]) continue;
			flags[data[i].type]=true;
			type = {type : data[i].type, isSelected : false}
			itemTypes.push(type);
		}
		this.setState({itemTypes : itemTypes });
	}

	sortItems(a,b){
	    if(a.type === b.type){
	    	return a.itemName < b.itemName ? -1 : 1;
	    }
	    return a.type < b.type ? -1 : 1;
  	}

  	filterItems(type){
  		let itemTypes = this.state.itemTypes;
  		itemTypes.forEach((item) =>{
  			item.isSelected = false;
  			if(item.type === type)
  				item.isSelected = true;
  		})
  		
  		this.setState({itemTypes : itemTypes});
  		console.log(this.state);
		if(type === 'All'){
			this.setState({items : this.state.itemsCopy });
		}
		else{
			let items = this.state.itemsCopy.filter((item) => {
				return item.type === type;
			});
			this.setState({items : items });
		}    
	}
}

export default List;