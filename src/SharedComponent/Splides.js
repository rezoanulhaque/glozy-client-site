import React from 'react';
import firstPic from './../images/first-pic.jpg';
import secondPic from './../images/second-pic.jpg';
import thirdPic from './../images/third-pic.jpg';
import forthPic from './../images/forth-pic.jpg';
import { Splide, SplideSlide } from '@splidejs/react-splide';

const Splides = () => {
    return (
        <div className="container">
            <Splide options={{
                rewind: true,
                gap: '1rem',
                perPage: 5,
                perMove: 1,
                type: 'loop',
                
                updateOnMove: true,
                width: "200",
                autoplay: true,
                breakpoints: {
                    '768': {
                        perPage: 2,
                        gap    : '1rem',
                    }
                }
            }}>
                
                <SplideSlide>
                    <img style={{border: "2px solid #0079C5", borderRadius: "10px"}} src={firstPic} alt="products 2" />
                    
                </SplideSlide>
                <SplideSlide>
                    <img style={{border: "2px solid #0079C5", borderRadius: "10px"}} src={secondPic} alt="products 1" />
                    
                </SplideSlide>
                <SplideSlide>
                    <img style={{border: "2px solid #0079C5", borderRadius: "10px"}} src={thirdPic} alt="products 3" />
                    
                </SplideSlide>
                <SplideSlide>
                    <img style={{border: "2px solid #0079C5", borderRadius: "10px"}} src={forthPic} alt="products 4" />
                    
                </SplideSlide>
                <SplideSlide>
                    <img style={{border: "2px solid #0079C5", borderRadius: "10px"}} src={forthPic} alt="products 5" />
                </SplideSlide>
                <SplideSlide>
                    <img style={{border: "2px solid #0079C5", borderRadius: "10px"}} src={forthPic} alt="products 6" />
                
                </SplideSlide>
                
            </Splide>
        </div>
    );
};

export default Splides;