import {extendObservable} from 'mobx';

import {teachersData} from '../data/teachersData';

class AppStore {
	storeValues = {
		teachers: []
	};
	
	constructor() {
		extendObservable(this, this.storeValues);
	}
	
	@action
	initData = () => {
		this.teachers = observable(teachersData);
		// set(this.teachers, teachersData);
	};
	
	getData = () => {
		// TODO load some data
		return teachersData;
	};

	saveData = () => {
		// send some data
	};
}

export {AppStore};