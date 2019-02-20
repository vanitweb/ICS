import {observable} from 'mobx';
import vars from './../../assets/images/section/vars.jpg';
import mat from './../../assets/images/section/mat.jpg';
import dim from './../../assets/images/section/dim.jpg';
 
class Data {
   @observable varsaviranocner = [
            {
                name : 'Սյուզի իմիջ կենտրոն',//varsaviranoci tvyalner
                img : "",
                adress : "",
                phone : "",
                info : "",
                category : [
                    {
                        prof : "varsahardar",
                        workers : [
                            {//ashxatoxi tvyalner
                                img : "",
                                name : "",
                                surname : "",
                                age : "",
                                textAbout : "",
                                socialNetwork : "",
                                freeHours : "",
                                workImgs : [
                                    //hascener
                                ],
                            },
                            {},
                            {}
                        ]
                    },
                    {},
                    {}
                ]
            },
            {name : 'Փարվանա'},
            {name : 'Սյուզի իմիջ կենտրոն'},
            {name : 'Սվետլանա գեղեցկության սրահ'},
            {name : 'Մերլին Մոնռո'},
            {name : 'Կոկետ Բյութի'},
            {name : 'Արփի'},
            {name : 'Անի գեղեցկության սրահ'},
            {name : 'Անահիտ'},
        ];
    @observable category = [
            {
                title : 'Վարսահարդար',
                explaText : 'Գեղեցկությունն ամենուր հույժ ցանկալի հյուր է: Գյոթե',
                img : vars,
            },
            {
                title : 'Մատնահարդար',
                explaText : 'Մարդու մեջ պետք է ամեն ինչ գեղեցիկ լինի,թե դեմքը, թե հագուստը, թե հոգին, թե մտքերը: Չեխով',
                img : mat,
            },
            {
                title : 'Դիմահարդարում',
                explaText : 'Գեղեցիկ է թվում ամեն բան, ինչին սիրով ես նայում: Մորգենշտեռն',
                img : dim,
            },
            {
                title : 'Այլ ծառայություններ',
                explaText : 'Մարդու հետ համեմատած կապիկների գեղեցկությունն անգամ անճոռնի է: Հերակլիտ',
                img : vars,
            }
        ]
    }
export {Data};
