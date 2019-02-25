import React, { Component } from 'react';
import Carusel from './Carusel';
import { Container,  Row } from 'reactstrap';
import CardCategory from './../CardCategory.jsx';
import './../../../assets/stylesheets/section.css';

class Section extends Component {
    render() {
        const {categorys, slideItems, cardClick} = this.props;
        return (
            <section>
                <Container fluid className = "carusel">
                    <Carusel slideItems = {slideItems} />
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {categorys.map(item =>{
                            return  <React.Fragment key = {item.title}>
                                <CardCategory 
                                    cardClick = {cardClick}
                                    img={item.img}
                                    title={item.title}
                                    explaText={item.explaText}
                                    CardClass = "cardSection1"
                                    />
                            </React.Fragment>
                        })}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Section;
