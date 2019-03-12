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


        isUser : 'user',



        information : {
            img : this.defaultSpecialistImage,
            name : 'Անուն',
            surname : 'Ազգանուն',
            age : 'Տարիք',
            textAbout : 'Տեղեկատվություն',
            socialNetwork : [],//Eroooooooooooooooooooooooooooooooooo
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
            salonIndex : "",
            categoryIndex : "",
            specialistIndex : "",
        },
        isPagePath : false,
        Registr : {
            name:'',
            surname:'',
            EmailAdress:'',
            phone:'',
            password:'',
            repeatPassword: ''
        },
        Login : {
          email : '',
          password : ''
        },
        AccountInfo : {
          image:'',
          name: '',
          surname: '',
          email: '',
          phoneNumber: '',
          password: ''
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
                //console.log(homeConfigs.categorys[whichIndex.categoryIndex])
                this.isPagePath = true;
            }
        }else if(whichPage === 'specialist'){
            if (whichIndex.ee.path.split('/')[1] === 'Salon') {
                console.log(whichIndex.ee.path.split('/')[1])//Salon
                if(this._Data[whichIndex.salonIndex]
                    && whichIndex.salonIndex === whichIndex.whichSalon 
                    && this._Data[whichIndex.salonIndex].category[whichIndex.categoryIndex]
                    && this._Data[whichIndex.salonIndex].category[whichIndex.categoryIndex].workers[whichIndex.specialistIndex]){
                        this.isPagePath = true;
                }
            }else if(whichIndex.ee.path.split('/')[1] === 'Category'){
                // console.log(whichIndex.ee.path.split('/')[1])//Category
                // console.log(whichIndex)
                if(whichIndex.categoryIndex === whichIndex.whichCategory
                    && this._Data[whichIndex.salonIndex]
                    && this._Data[whichIndex.salonIndex].category[whichIndex.categoryIndex]
                    && this._Data[whichIndex.salonIndex].category[whichIndex.categoryIndex].workers[whichIndex.specialistIndex]){
                        console.log(45)
                        this.isPagePath = true;
                }
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
                // this.information.socialNetwork = event.target.value;//Erooooooooooooooo
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
            socialNetwork : [],
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
    changeSalonInfo = (name) =>{
        switch(name){
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
        // item.socialNetwork = this.changeSpecialistInfo.mail;//Eroooooooooooooooo
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
            case 'Հեռախոս':
                this.Registr.phone = event.target.value;
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
    InfoLogin = (event) => {
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

    
    @action  //cookie e avelacnum
    setCookie = (cname, cvalue, exdays) => {
          var d = new Date();
          d.setTime(d.getTime() + (exdays*24*60*60*1000));
          var expires = "expires="+ d.toUTCString();
          document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    @action
    getCookie = (cname) => {  //mer tvac nameov cookin e veradardznum
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for(var i = 0; i <ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              // console.log(c.substring(name.length, c.length));
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
    @action
    LoginTest = () => {
      this._UserData.users.forEach((item, index) => {
            if(item.email === this.Login.email && item.password === this.Login.password){
                console.log(item);
                this.AccountInfo.name = item.name;
                this.AccountInfo.image = item.image;
                this.AccountInfo.surname = item.surname;
                this.AccountInfo.email = item.email;
                this.AccountInfo.phoneNumber = item.phoneNumber;
                this.AccountInfo.password = item.password;
                this.setCookie('Login.mail', item.email, "12.02.2020");
                this.setCookie('Login.password', item.password, "12.02.2020");
                this.isUser = 'user';
                this.getCookie('Login.mail') ==="";
                this.getCookie('Login.password')==="";

            }
        });
        if( this.getCookie('Registr.mail') === this.Login.email  && this.getCookie('Registr.password') === this.Login.password){

            this.AccountInfo.name = "Նոր ստեղծված էջ";
            this.AccountInfo.image = "Նոր ստեղծված էջ";
            this.AccountInfo.surname = "Նոր ստեղծված էջ";
            this.AccountInfo.email = this.getCookie('Registr.mail');
            this.AccountInfo.phoneNumber = "Նոր ստեղծված էջ";
            this.AccountInfo.password = this.getCookie('Registr.password');
            this.setCookie('Login.mail', this.getCookie('Registr.mail') , "12.02.2020");
            this.setCookie('Login.password', this.getCookie('Registr.password'), "12.02.2020");
            this.isUser = 'user';
        }
    }
    @action
    FuncForCookie = () => {
        if (this.getCookie('Login.mail'))
        {
            this._UserData.users.forEach((item, index) => {
              if(item.email === this.getCookie('Login.mail') && item.password === this.getCookie('Login.password')){
                  console.log(item);
                  this.AccountInfo.name = item.name;
                  this.AccountInfo.image = item.image;
                  this.AccountInfo.surname = item.surname;
                  this.AccountInfo.email = item.email;
                  this.AccountInfo.phoneNumber = item.phoneNumber;
                  this.AccountInfo.password = item.password;
                  this.isUser = 'user';
              }
              else{
                  return;
              }
          });
        }
        if(this.getCookie('Registr.mail'))
        {
            if (this.getCookie('Registr.mail') === this.getCookie('Login.mail') && this.getCookie('Registr.password') === this.getCookie('Login.password')) {
            this.AccountInfo.name = "Նոր ստեղծված էջ";
            this.AccountInfo.image = "Նոր ստեղծված էջ";
            this.AccountInfo.surname = "Նոր ստեղծված էջ";
            this.AccountInfo.email = this.getCookie('Registr.mail');
            this.AccountInfo.phoneNumber = "Նոր ստեղծված էջ";
            this.AccountInfo.password = this.getCookie('Registr.password');
            this.isUser = 'user';
          }
        }
          
    }
    @action
    LogOut = () => {
        this.isUser = '';
        this.AccountInfo.name = "";
        this.AccountInfo.image = "";
        this.AccountInfo.surname = "";
        this.AccountInfo.email = "";
        this.AccountInfo.phoneNumber = "";
        this.AccountInfo.password = "";
        this.setCookie('Login.mail', "", "12.02.2020");
        this.setCookie('Login.password', "", "12.02.2020");
    }

    @action
    SaveValues = () => {
        this._UserData.users.push(this.Registr);

        this.setCookie('Registr.mail', this.Registr.EmailAdress , "12.02.2020");
        this.setCookie('Registr.password', this.Registr.password , "12.02.2020");
        // console.log(this._UserData.users);
    }
    

    
}

export default AppStore;
