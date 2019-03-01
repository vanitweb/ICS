import {extendObservable, computed, action} from 'mobx';

import AppStore from './AppStore';

class UIStore {
    storeProps = {
        arr : [],
        prof : "",
        searchText : "",
        searchType : "name",
        index : "",
    }
    Data = new AppStore().Data;
    constructor(){
        extendObservable(this, this.storeProps)
    }

    @action
    changeDropdown = (event) =>{
        this.index = event.target.getAttribute("data-index");
    }
    @action
    cardClick = (event) =>{
            this.arr = [];
            this.Data.forEach(item => {
                return item.category.forEach(item1 => {
                    if(item1.prof === event.target.parentElement.previousElementSibling.previousElementSibling.textContent){
                        this.prof = item1.prof;
                        item1.workers.forEach(item2 => {
                            this.arr.push(item2);
                    })
                }
            })
        })
    }
    @action
    tableSearch = (event) => {
        this.searchText = event.target.value;
    }
    @computed
    get filterTable(){
        return this.arr.filter(item => {
            return item[`${this.searchType}`].indexOf(this.searchText) !== -1
        });
    }
    @action
    onChaked = (event) =>{
        this.searchType = event.target.value
    }
    @action
    deleteCard = (event) =>{
        console.log(event.target.getAttribute("data-index"))
        console.log(event.target.getAttribute("prof"))
        console.log(event.target.getAttribute("salon-name"))
        this.Data.forEach(item =>{
            if(item.name === event.target.getAttribute("salon-name")){
                item.category.forEach(item1 =>{
                    if(item1.prof === event.target.getAttribute("prof")){
                        item1.workers.splice(event.target.getAttribute("data-index"), 1)
                        console.log(item1.workers)
                    }
                })
            }
        })
    }
}


export default UIStore ;