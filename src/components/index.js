import React from 'react'
import  'materialize-css/dist/css/materialize.css';

import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { data } from '../utils/data'
import {Card } from './card'

export class Profiles extends React.Component{
    render(){

        var settings = {
            dots: true,
          };

       var slicedData = function(d){
            d.slice(0,6);
        }

        let profiles=  slicedData(data).map((item, index)=>{
            return(
                     <Card key={index} cardData={item}/>
            )
        })
        return(
            <Slider {...settings}>
                    <div className="row">
                            {profiles} 
                    </div>
                    <div className="row">
                            {profiles} 
                    </div>
            </Slider>
        );
    }
}