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
    @action
    setInputsValue = (event) =>
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
    consoleInfo = (event) => {
      // console.log(event.target.getAttribute("salonName"));//saloni anun
      // console.log(event.target.getAttribute("category"));//kategoria
      this.information.salonTitle = event.target.getAttribute("salonName");
      this.information.salonAddress = event.target.getAttribute("address");
      this._Data.forEach(item => {
          if (item.name === event.target.getAttribute("salonName")) {
              item.category.forEach(item1 => {
                if (item1.prof === event.target.getAttribute("category")) {
                    item1.workers.push(this.information)
                }
              })
          }
    })
      console.log(this.information);
      console.log(this.Data[0].category[0].workers);
    }
}

export default AppStore;