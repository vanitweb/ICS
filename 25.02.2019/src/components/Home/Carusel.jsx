import React, { Component } from 'react';
import {Carousel, CarouselItem, CarouselControl, CarouselIndicators} from 'reactstrap';



class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.slideItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.slideItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }
    
    render() {
        const { activeIndex } = this.state;
        const { slideItems } = this.props;

        const slides = slideItems.map((item) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={item.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    >
                    <img src = {item.Img} alt = {item.altText} width = "100%" />
                </CarouselItem>
            );
        });

        return (
            <div>
                <style>
                    {
                        `.custom-tag {
                                max-width: 100%;
                                height: 90vh;
                        }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                    >
                    <CarouselIndicators 
                        items={slideItems} 
                        activeIndex={activeIndex} 
                        onClickHandler={this.goToIndex} 
                        />
                    {slides}
                    <CarouselControl 
                        direction="prev" 
                        directionText="Previous" 
                        onClickHandler={this.previous} 
                        />
                    <CarouselControl
                        direction="next"
                        directionText="Next" 
                        onClickHandler={this.next}
                        />
                </Carousel>
            </div>
        );
    }
}

export default Example;
