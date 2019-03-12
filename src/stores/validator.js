import AppStore from './AppStore';
import { observable, action, computed } from "mobx";
import {observer} from "mobx-react";
import Messages from './../Messages';

class Validator {
    AppStore = new AppStore();
    userData = this.AppStore._UserData;
    
    @observable informationChangeSalon = {
            fieldName : '',
            value : '',
            name : this.AppStore.changeSalon.name ,
            address : this.AppStore.changeSalon.address,
            phone : this.AppStore.changeSalon.phone,
            info : this.AppStore.changeSalon.info,
            formValid: true   
    }
     @observable informationSpecialistInfo = {
            fieldName : '',
            value : '',
            name : this.AppStore.changeSpecialistInfo.name ,
            surname : this.AppStore.changeSpecialistInfo.surname,
            age: this.AppStore.changeSpecialistInfo.age,
            info: this.AppStore.changeSpecialistInfo.info,
            mail: this.AppStore.changeSpecialistInfo.mail,
            formValid: true   
    }

    @observable informationModalRegistr = {
            fieldName : '',
            value :'',
            usName : this.AppStore.Registr.name ,
            usSurName : this.AppStore.Registr.surname,
            email: this.AppStore.Registr.EmailAdress,
            phone : this.AppStore.Registr.phone,
            password: this.AppStore.Registr.password ,
            repeatPassword: this.AppStore.Registr.repeatPassword,
            formValid: true   
    }
    @observable informationModalLogin = {
            fieldName : '',
            value :'',  
            emailLogin: this.AppStore.Login.email,  
            passwordLogin: this.AppStore.Login.password ,
            formValid: true   
    }
   @computed
    get validateChangeSalonInfo() {
        let phoneValid;
        let nameValid;
        let addressValid;
        let infoValid;
        switch(this.informationChangeSalon.fieldName) {
            case 'name':
                nameValid = this.informationChangeSalon.value.length <= 30 ; 
                if(!nameValid) {
                    this.informationChangeSalon.formValid = false;
                } 
                return (nameValid) ? '' : Messages.validationErrors.salonNameError;
            case 'info':
                infoValid = this.informationChangeSalon.value.length <= 300 ; 
                 if(!infoValid) {
                    this.informationChangeSalon.formValid = false;
                } 
                return (infoValid) ? '' : Messages.validationErrors.infoError;
            case 'phone':
                phoneValid = /(^[+]{0,1}[0-9]{0,12})$/.test(this.informationChangeSalon.value);
                if(!phoneValid) {
                    this.informationChangeSalon.formValid = false;
                }
                return (phoneValid) ? '' : Messages.validationErrors.phoneError;
            case 'address':
                addressValid = this.informationChangeSalon.value.length <= 30 ; 
                 if(!addressValid) {
                    this.informationChangeSalon.formValid = false;
                }
                return (addressValid) ? '' : Messages.validationErrors.addressError;
            default:
            	return;
        }

    }

    @computed
    get validateSpecialistInfo() {
        let usNameValid;
        let usSurNameValid;
        let ageValid;
        let infoValid;
        let mailValid;      
        switch(this.informationSpecialistInfo.fieldName) {
            case 'name':
                 usNameValid = /^([A-Za-z\u0531-\u0556]{0,10})$/i.test(this.informationSpecialistInfo.value);  
                 if(!usNameValid) {
                    this.informationSpecialistInfo.formValid = false;
                } 
                return (usNameValid) ? '' : Messages.validationErrors.nameError;      
            case 'surname':
                 usSurNameValid = /^([A-Za-z\u0531-\u0556]{0,15})$/i.test(this.informationSpecialistInfo.value);  
                 if(!usNameValid) {
                    this.informationSpecialistInfo.formValid = false;
                } 
                return (usSurNameValid) ? '' : Messages.validationErrors.surnameError;
    
            case 'info':
                infoValid = this.informationSpecialistInfo.value.length <= 300 ; 
                if(!infoValid) {
                    this.informationSpecialistInfo.formValid = false;
                } 
                return (infoValid) ? '' : Messages.validationErrors.infoError;
    
            case 'age':
                ageValid = /^([0-9]{0,2})$/.test(this.informationSpecialistInfo.value); 
                if(!ageValid) {
                    this.informationSpecialistInfo.formValid = false;
                } 
                return (ageValid) ? '' : Messages.validationErrors.ageError;
            // case 'mail':
            //     mailValid =  
            //     if(!mailValid) {
            //         this.informationSpecialistInfo.formValid = false;
            //     } 
            //     return (mailValid) ? '' : Messages.validationErrors.mailError;
           
            default:
                return;
        }
    }
    @computed
    get validateModalRegistr() {
        let usNameValid;
        let usSurNameValid;
        let emailValid;
        let phoneValid;
        let passwordValid;
        let repeatPasswordValid;

        switch(this.informationModalRegistr.fieldName) {
            case 'usName':
                 usNameValid = /^([A-Za-z\u0531-\u0556]{0,10})$/i.test(this.informationModalRegistr.value);  
                 if(!usNameValid) {
                    this.informationModalRegistr.formValid = false;
                } 
                return (usNameValid) ? '' : Messages.validationErrors.nameError;         
            case 'usSurName':
                 usSurNameValid = /^([A-Za-z\u0531-\u0556]{0,15})$/i.test(this.informationModalRegistr.value);  
                 if(!usNameValid) {
                    this.informationModalRegistr.formValid = false;
                } 
                return (usSurNameValid) ? '' : Messages.validationErrors.surnameError;       
            case 'phone':
                phoneValid = /(^[+]{0,1}[0-9]{0,12})$/.test(this.informationModalRegistr.value);
                if(!phoneValid) {
                    this.informationModalRegistr.formValid = false;
                }
                return (phoneValid) ? '' : Messages.validationErrors.phoneError;             
            case 'email':
                emailValid = this.informationModalRegistr.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if(!emailValid) {
                    this.informationModalRegistr.formValid = false;
                }
                return (emailValid) ? '' : Messages.validationErrors.emailError; 
            case 'password':
                passwordValid = this.informationModalRegistr.value.length >= 8;
                if(!passwordValid) {
                    this.informationModalRegistr.formValid = false;
                }
                return (passwordValid) ? '' : Messages.validationErrors.passwordError;
            case 'repeatPassword': 
                repeatPasswordValid = (this.informationModalRegistr.value === this.informationModalRegistr.password);               
                if(!repeatPasswordValid) {
                    this.informationModalRegistr.formValid = false;
                }
                return (repeatPasswordValid) ? '' : Messages.validationErrors.repeatPasswordError;
            break;
            
            default:
                return;
        }
    }

    @computed
    get validateModalLogin() {
        let emailValid;
        let passwordValid;
        switch(this.informationModalLogin.fieldName) {
            case 'emailLogin':
                emailValid = this.informationModalLogin.value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                if(!emailValid) {
                    this.informationModalLogin.formValid = false;
                }
                return (emailValid) ? '' : Messages.validationErrors.emailError;
       
            case 'passwordLogin':
                passwordValid = this.informationModalLogin.value.length >= 8;
                if(!passwordValid) {
                    this.informationModalLogin.formValid = false;
                }
                return (passwordValid) ? '' : Messages.validationErrors.passwordError;     
            default:
                return;
        }

    }
}
export default Validator;

//mi hat information u funkcia  chem grel qani vor fieldName amen modali hamar tarbera,dra hamar amen modali hamar ira funkcian u informationna petq