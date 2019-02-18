import React, { Component } from 'react';
import Carusel from './Carusel';
import vars from './../../../assets/images/section/vars.jpg';
import mat from './../../../assets/images/section/mat.jpg';
import dim from './../../../assets/images/section/dim.jpg';
import { Container, Row, Col } from 'reactstrap';
import './../../../assets/stylesheets/section.css';
import CardCategory from './CardCategory.jsx';

class Section extends Component {
    render() {
        const category = [
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
                explaText : 'Գեղեցիկ է թվում ամեն բան, ինչին սիրով ես նայում: Մորգենշտեռն' ,
                img : dim,
            },
            {
                title : 'Այլ ծառայություններ',
                explaText : 'Մարդու հետ համեմատած կապիկների գեղեցկությունն անգամ անճոռնի է: Հերակլիտ',
                img : vars,
            },
        ];
        const cardMap = category.map((item,index) => {
            return  <Col key={item.title} lg = {3} md={6} sm = {6} xs = {8} className="cardOne">
                        <CardCategory 
                            img={item.img} 
                            title={item.title} explaText={item.explaText}
                            />
                    </Col>
        });
        return (
            <section className = "sections">
                <Container fluid className="carusel">
                    <Carusel />
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {cardMap}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Section;
