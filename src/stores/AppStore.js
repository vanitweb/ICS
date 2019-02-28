import Data from './../data/data.js';
import {extendObservable} from 'mobx';

class AppStore {
    Data = new Data().salons;
    constructor(){
        extendObservable(this, this.storeProps)
    }  
}

export default AppStore;