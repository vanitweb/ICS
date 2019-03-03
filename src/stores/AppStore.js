import Data from './../data/data.js';
import {extendObservable, computed, action} from 'mobx';

class AppStore { 
    Data = new Data().salons;
    initData = () =>{
        extendObservable(this, this.Data);
    }
    storeProps = {
        arr : [],
        prof : "",
        searchText : "",
        searchType : "name",
        index : "",
        addCategoryName : "",
        _Data : this.Data
    }
    constructor(){
        extendObservable(this, this.storeProps)
    }
    @action
    tableSearch = (event) => {
        this.searchText = event.target.value;
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
        this._Data.forEach(item =>{
            if(item.name === event.target.getAttribute("salon-name")){
                item.category.forEach(item1 =>{
                    if(item1.prof === event.target.getAttribute("prof")){ item1.workers.splice(event.target.getAttribute("data-index"), 1)
                    }
                })
            }
        })
    }
    @action
    addCategorychange = (event) =>{
        this.addCategoryName = event.target.value;
    }
    @action
    addCategory = (event) => {
        this._Data.forEach(item =>{
            if(item.name === event.target.getAttribute("salon-name")){
                item.category.push({
                    prof : this.addCategoryName,
                    workers : [],
                })
            }
        })
    }
    @action
    deleteCategory = (event) =>{
        this._Data.forEach(item =>{
            if(item.name === event.target.getAttribute("salon-name")){
                item.category.splice(event.target.getAttribute("data-index"), 1)
            }
        })
    }
}

export default AppStore;