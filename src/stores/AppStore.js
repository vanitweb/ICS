import Data from './../data/data.js';
import {extendObservable, action} from 'mobx';
import {homeConfigs} from './../config/categoryConfig';

class AppStore { 
    Data = new Data().salons;
    initData = () => {
        extendObservable(this, this.Data);
    }
    storeProps = {
        searchText : '',
        searchType : 'name',
        index : '',
        addCategoryName : '',
        _Data : this.Data,
        information : {}, 
        changeSalon : {
            name : '',
            info : '',
        	address : '',
            phone : '',
            prof : '',
            profSelected : '',
        },
        isUser : 'salon',
        id : {
            salonIndex : "",
            categoryIndex : "",
            specialistIndex : "",
        },
        l:''
    }
    constructor(){
        extendObservable(this, this.storeProps);
    }
    @action
    filterId(id){
        this.id = {
            salonIndex : "",
            categoryIndex : "",
            specialistIndex : "",
        };
        const idArr = id.split('-');
        switch(idArr.length){
            case 1:
                this.id.salonIndex = idArr[0];
                break;
            case 2:
                this.id.salonIndex = idArr[0];
                this.id.categoryIndex = idArr[1];
                break;
            case 3:
                this.id.salonIndex = idArr[0];
                this.id.categoryIndex = idArr[1];
                this.id.specialistIndex = idArr[2];
                
        }
    }
    //category
    @action
    tableSearch = (event) => {
        this.searchText = event.target.value;
    }
    @action
    onChaked = (event) => {
        this.searchType = event.target.value;
    }
    //salon
    @action
    deleteWorker = (event) => {
        const id = event.target.getAttribute('specialist-id');
        this.filterId(id);
        const {salonIndex, categoryIndex} = this.id;
        this._Data[salonIndex].category[categoryIndex].workers.forEach((item, index) => {
            if(item.id === id){
                this._Data[salonIndex].category[categoryIndex].workers.splice(index, 1);
            }
        });
        this._Data[salonIndex].category[categoryIndex].workers.forEach((item, index) => {
            item.id = `${salonIndex}-${categoryIndex}-${index}`;
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
    AddWorker = (event) => {
        const id = event.target.getAttribute('category-id');
        this.filterId(id)
        const {salonIndex, categoryIndex, specialistIndex} = this.id;
        this.information.salonTitle = this._Data[salonIndex].name;
        this.information.salonAddress = this._Data[salonIndex].address;
        this.information.workImgs = [];
        const category = this._Data[salonIndex].category[categoryIndex];
        if(category.workers.length === 0){
            this.id.specialistIndex = 0; 
        }else{
            this.id.specialistIndex = this._Data[salonIndex].category[categoryIndex].workers.length;
        }//nkar chi vercnum
        this.information.id = `${salonIndex}-${categoryIndex}-${this.id.specialistIndex}`
        category.workers.push(this.information)
        this.information = {}
    }
    @action
    addCategoryChange = (event) => {
        this.addCategoryName = event.target.value;
    }
    @action
    addCategory = (event) => {
        const salonIndex = event.target.getAttribute('salon-index'); 
        if(this._Data[salonIndex].category.length === 0){
            this.id.categoryIndex = 0;
        }else{
            this.id.categoryIndex = this._Data[salonIndex].category.length;
        }
        this._Data[salonIndex].category.push({
            id : `${salonIndex}-${this.id.categoryIndex}`,
            prof : this.addCategoryName,
            workers : [],
        })
    }
    @action
    deleteCategory = (event) => {
        const id = event.target.getAttribute('category-id');
        this.filterId(id); 
        const {salonIndex, categoryIndex} = this.id;
        this._Data[salonIndex].category.forEach((item, index) => {
            if(item.id === id){
                this._Data[salonIndex].category.splice(index, 1);
            }
        });
        this._Data[salonIndex].category.forEach((item, index) => {
            item.id = `${salonIndex}-${index}`
        });
        console.log(this._Data[salonIndex].category)
    }
    @action
    changeSalonInfo = (event) =>{//nkar chi vercnum
        switch(event.target.getAttribute("name")){
            case 'name':
            this.changeSalon.name = event.target.value;
                break;
            case 'info':
            this.changeSalon.info = event.target.value;
                break;
            case 'address':
                this.changeSalon.address = event.target.value;
                break;
            case 'phone':
                this.changeSalon.phone = event.target.value;
                break;
            case 'category':
                this.changeSalon.prof = event.target.value;
                break;
            default:
                return;
        }
        
    }
    @action
    changeSalonSubmit = (event) =>{//nkar chi vercnum
        const id = event.target.getAttribute('salon-id');
        this._Data[id].name = this.changeSalon.name;
        this._Data[id].info = this.changeSalon.info;
        this._Data[id].address = this.changeSalon.address;
        this._Data[id].phone = this.changeSalon.phone;
        this._Data[id].category.forEach((item, index) => {
            if(item.prof === this.changeSalon.profSelected){
                item.prof = this.changeSalon.prof
            }
        })
    }
    //specialist
    @action
    AddWorkerImg =(event) => {
         if (event.target.files && event.target.files[0]) {
        this.l = URL.createObjectURL(event.target.files[0])
    }
        //hascen sxala talis
    }
    @action
    deleteWorksImage = (event) => {//?
        this._Data.forEach (item => {
            if(item.salonTitle === event.target.getAttribute('salon-name')){
                item.category.forEach(item1 => {
                    item1.workers.forEach(item2 => {
                        item2.worksImgs.splice(event.target.getAttribute('data-index'),1);
                    });
                });
            }
        });
    }
}

export default AppStore;