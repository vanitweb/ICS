import Data from './../data/data.js';
import {extendObservable, computed, action} from 'mobx';

class AppStore { 
    Data = new Data().salons;
    initData = () =>{
        extendObservable(this, this.Data);
    }
    storeProps = {
        searchText : "",
        searchType : "name",
        index : "",
        addCategoryName : "",
        _Data : this.Data,
        information : {},
    }
    constructor(){
        extendObservable(this, this.storeProps)
    }
    @action
    tableSearch = (event) => {
        this.searchText = event.target.value;
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
    @action
    AddWorkerInfo = (event) =>
    {
        switch(event.target.previousElementSibling.textContent) {
            case 'Անուն':
                this.information.name = event.target.value;
                break;
            case 'Ազգանուն':
                this.information.surname = event.target.value;
                break;
            case 'Տարիք':
                this.information.age = event.target.value;
                break;
            case 'Տեղեկատվություն':
                this.information.textAbout = event.target.value;
                break;
            case 'Կապ սոց․ կայքեր':
                this.information.socialNetwork = event.target.value;
                break;
            default:
                return;
        }
    }
    @action
    AddWorkerData = (event) => {
      this.information.salonTitle = event.target.getAttribute("salon-name");
      this.information.salonAddress = event.target.getAttribute("address");
      this._Data.forEach(item => {
          if (item.name === event.target.getAttribute("salon-name")) {
              item.category.map(item1 => {
                if (item1.prof === event.target.getAttribute("category")) {
                    item1.workers.push(this.information)
                }
              })
          }
    })
    }
    @action
    AddWorkerImg =(event) =>{
        //hascen sxala talis
    }
    @action
    deleteWorksImage = () =>{
        
    }
}

export default AppStore;