import vars from './../../assets/images/section/vars.jpg'
import mat from './../../assets/images/section/mat.jpg'
import dim from './../../assets/images/section/dim.jpg'
import spa from './../../assets/images/section/spa.jpg'
import varsImg from './../../assets/images/section/carusel/1.jpg';
import matImg from './../../assets/images/section/carusel/2.jpg';
import dimImg from './../../assets/images/section/carusel/3.jpg';
import aylImg from './../../assets/images/section/carusel/4.jpg';
const homeConfigs = {
	categorys : [
        {
            title : 'Վարսահարդարներ',
            explaText : 'Գեղեցկությունն ամենուր հույժ ցանկալի հյուր է: Գյոթե',
            img : vars,
        },
        {
            title : 'Դիմահարդարներ',
            explaText : 'Գեղեցկությունը ձիրք ու զորություն ունի սրտերը խաղաղություն մտցնելու: Սերվանտես',
            img : dim,
        },
        {
            title : 'Մատնահարդարներ',
            explaText : 'Մարդու մեջ պետք է ամեն ինչ գեղեցիկ լինի,թե դեմքը, թե հագուստը, թե հոգին, թե մտքերը: Չեխով',
            img : mat,
        },
        {
            title : 'Այլ ծառայություններ',
            explaText : 'Գեղեցիկն աստվածային է, վեհը՝ մարդկային: Լեսինգ',
            img : spa,
        }
        ],
    slideItems : [
        {
            id: 1,
            altText: 'Վարսահարդարներ',
            Img : varsImg
        },
        {
            id: 3,
            altText: 'Դիմահարդարներ',
            Img : dimImg
        },
        {
            id: 2,
            altText: 'Մատնահարդարներ',
            Img : matImg
        },
        {
            id: 4,
            altText: 'Այլ ծառայություններ',
            Img : aylImg
        }
    ]
};
export {homeConfigs};