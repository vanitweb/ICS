import Data from './../data/data.js';
import UserData from './../data/userData.js'
import {extendObservable, action} from 'mobx';
import {homeConfigs} from './../config/categoryConfig';



class AppStore {
    Data = new Data().salons;
    UserData = new UserData();
    initData = () => {
        extendObservable(this, this.Data);
    }
    initUserData = () => {
        extendObservable(this, this.UserData);        
    }
    defaultSpecialistImage = '/static/assets/images/users/specialist.png';
    storeProps = {
        searchText : '',
        searchType : 'name',
        index : '',
        addCategoryName : '',
        _Data : this.Data,
        _UserData : this.UserData,


        isUser : '',



        information : {
            img : this.defaultSpecialistImage,
            name : 'Անուն',
            surname : 'Ազգանուն',
            age : 'Տարիք',
            textAbout : 'Տեղեկատվություն',
            socialNetwork : 'Կապ սոց․ կայքեր',
        },
        changeSalon : {
            img : this.defaultSpecialistImage,
            name : '',
            info : '',
        	address : '',
            phone : '',
            prof : '',
            profSelected : '',
        },
        changeSpecialistInfo : {
            img : this.defaultSpecialistImage,
            name : '',
            surname : '',
            age : '',
            info : '',
            mail : '',
        },
        changeUser : {
            name : '',
            surname : '',
            phone : '',
        },
        id : {
            salonIndex : 0,
            categoryIndex : 0,
            specialistIndex : 0,
        },
        isPagePath : false,
        Registr : {
            name:'',
            surname:'',
            EmailAdress:'',
            nickName:'',
            password:''
        },
        Login : {
          email : '',
          password : ''
        }
    }
    constructor(){
        extendObservable(this, this.storeProps);
    }
    @action
    filterId(id){
        this.id = {
            salonIndex : 0,
            categoryIndex : 0,
            specialistIndex : 0,
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
    @action
    isPath = (whichIndex, whichPage) => {
        if(whichPage === 'salon'){
            if(this._Data[whichIndex.salonIndex]){
                this.isPagePath = true;
            }
        }else if(whichPage === 'category'){
            if (homeConfigs.categorys[whichIndex.categoryIndex]) {
                this.isPagePath = true;
            }
        }else if(whichPage === 'specialist'){
            if(this._Data[whichIndex.salonIndex] 
                && whichIndex.salonIndex === whichIndex.whichSalon 
                && this._Data[whichIndex.salonIndex].category[whichIndex.categoryIndex]
                && this._Data[whichIndex.salonIndex].category[whichIndex.categoryIndex].workers[whichIndex.specialistIndex]){
                    this.isPagePath = true;
            }
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
            case 'Նկար':
                if (event.target.files && event.target.files[0]) {
                    this.information.img = URL.createObjectURL(event.target.files[0])
                }
                break;
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
        this.information = {
            img : this.defaultSpecialistImage,
            name : 'Անուն',
            surname : 'Ազգանուն',
            age : 'Տարիք',
            textAbout : 'Տեղեկատվություն',
            socialNetwork : 'Կապ սոց․ կայքեր',
        };
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
            this.id.categoryIndex = index;
            item.id = `${salonIndex}-${index}`;
        });
        if (this._Data[salonIndex].category.length !== 0) {
            this._Data[salonIndex].category[this.id.categoryIndex].workers.forEach((item, index) => {
                item.id = `${salonIndex}-${this.id.categoryIndex}-${index}`
            })
        }
        
    }
    @action
    changeSalonInfo = (event) =>{
        switch(event.target.getAttribute("name")){
            case 'file':
                if (event.target.files && event.target.files[0]) {
                    this.changeSalon.img = URL.createObjectURL(event.target.files[0])
                }
                break;
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
    changeSalonSubmit = (event) =>{
        const id = event.target.getAttribute('salon-id');
        const item = this._Data[id];
        item.name = this.changeSalon.name;
        item.info = this.changeSalon.info;
        item.address = this.changeSalon.address;
        item.phone = this.changeSalon.phone;
        item.img = this.changeSalon.img;
        item.category.forEach((item, index) => {
            if(item.prof === this.changeSalon.profSelected){
                item.prof = this.changeSalon.prof
            }
        })
    }
    //specialist
    @action
    changeSpeciaistInfo = (event) =>{
        switch(event.target.getAttribute("name")){
            case 'file':
                if (event.target.files && event.target.files[0]) {
                    this.changeSpecialistInfo.img = URL.createObjectURL(event.target.files[0])
                }
                break;
            case 'name':
            this.changeSpecialistInfo.name = event.target.value;
                break;
            case 'surname':
            this.changeSpecialistInfo.surname = event.target.value;
                break;
            case 'age':
                this.changeSpecialistInfo.age = event.target.value;
                break;
            case 'info':
                this.changeSpecialistInfo.info = event.target.value;
                break;
            case 'mail':
                this.changeSpecialistInfo.mail = event.target.value;
                break;
            default:
                return;
        }
    }
    @action
    changeSpecialistSubmit = (event) =>{
        const id = event.target.getAttribute('specialist-id');
        this.filterId(id);
        const {salonIndex, categoryIndex, specialistIndex} = this.id;
        const item = this._Data[salonIndex].category[categoryIndex].workers[specialistIndex];
        item.img = this.changeSpecialistInfo.img;
        item.name = this.changeSpecialistInfo.name;
        item.surname = this.changeSpecialistInfo.surname;
        item.age = this.changeSpecialistInfo.age;
        item.textAbout = this.changeSpecialistInfo.info;
        item.socialNetwork = this.changeSpecialistInfo.mail;
    }
    @action
    AddWorkerImg =(event) => {
        if (event.target.files && event.target.files[0]) {
            this.defaultSpecialistImage = URL.createObjectURL(event.target.files[0])
        }
    }
    @action
    deleteWorksImage = (event) => {//?
        this.filterId(event.target.getAttribute('specialist-id'))
        const {salonIndex, categoryIndex, specialistIndex} = this.id;
        this._Data[salonIndex].category[categoryIndex].workers[specialistIndex].workImgs.splice(event.target.getAttribute('data-index'),1);
    }
    @action
    changeSpeciaistWorkImages = (event) => {
        this.filterId(event.target.getAttribute('specialist-id'));
        const {salonIndex, categoryIndex, specialistIndex} = this.id;
        const imageIndex = event.target.getAttribute('index');
        if (event.target.files && event.target.files[0]) {
            this._Data[salonIndex].category[categoryIndex].workers[specialistIndex].workImgs[imageIndex] = URL.createObjectURL(event.target.files[0])
        }
    }
    @action
    addSpeciaistWorkImages = (event) => {
        this.filterId(event.target.getAttribute('specialist-id'));
        const {salonIndex, categoryIndex, specialistIndex} = this.id;
        if (event.target.files && event.target.files[0]) {
            this._Data[salonIndex].category[categoryIndex].workers[specialistIndex].workImgs.push(URL.createObjectURL(event.target.files[0]));
        }
    }
    //acaunt
    @action
    changeUserInfo = (event) =>{
        switch(event.target.getAttribute("name")){
            case 'name':
                this.changeUser.name = event.target.value;
                break;
            case 'surname':
                this.changeUser.surname = event.target.value;
                break;
            case 'phone':
                this.changeUser.phone = event.target.value;
                break;
            default:
                return;
        }        
    }

    @action
    changeUserSubmit = (event) =>{
        console.log(11111);
        const id = event.target.getAttribute('user-id');
        console.log(this._UserData[id].name);
        this._UserData.users[id].name = this.changeUser.name;
        this._UserData.users[id].surname = this.changeUser.surname;
        this._UserData.users[id].phoneNumber = this.changeUser.phone;
        console.log(this._UserData[id].name);
        console.log(2);
    }

    @action
    InfoRegister = (event) => {
        switch(event.target.previousElementSibling.textContent) {
            case 'Անուն':
                this.Registr.name = event.target.value;
                break;
            case 'Ազգանուն':
                this.Registr.surname = event.target.value;
                break;
            case 'Էլ. փոստ':
                this.Registr.EmailAdress = event.target.value;
                break;
            case 'Մուտքանուն':
                this.Registr.nickName = event.target.value;
                break;
            case 'Գաղտնաբառ':
                this.Registr.password = event.target.value;
                break;
            default:
                return;
        }
    }

    @action
    SaveValues = () => {
        this._UserData.users.push(this.Registr);
        this.Registr = {
            name:'',
            surname:'',
            EmailAdress:'',
            nickName:'',
            password:''
        }
        console.log(this._UserData.users);
    }
    @action
    InfoLogIn = (event) => {
        switch(event.target.previousElementSibling.textContent) {
            case 'Էլ. փոստ':
                this.Login.email = event.target.value;
                break;
            case 'Գաղտնաբառ':
                this.Login.password = event.target.value;
                break;
            default:
                return;
        }
    }
    @action
    LogInTest = () =>{
      this._UserData.users.forEach((item, index) => {
            if(item.email === this.Login.email && item.password === this.Login.password){
                console.log(true);
            }
            else{
                console.log(false);
            }
        });
    }

    
}

export default AppStore;
