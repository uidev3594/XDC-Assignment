import React from "react";
import "materialize-css/dist/css/materialize.css";
import Media from "react-media";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { data } from "../utils/data";
import { Card } from "./card";

export class Profiles extends React.Component {

  getSlicedData = (start, end) => {
    return data.slice(start, end).map((item, index) => {
      return <Card key={index} cardData={item} />;
    });
  };

  manipulateRows = () => {
    let count = data.length / 6;
    let countArray = new Array(count).fill(0);

    return countArray.map((item, index) => {
      return (
        <div className="row pad">
          <Media
            query="(max-width: 599px)"
            render={() =>  this.getSlicedData(index * 1, index * 1 + 1)}
           />
           <Media
            query="(min-width: 600px)"
            render={() =>  this.getSlicedData(index * 6, index * 6 + 6)}
           />
        </div>
      );
    });
  };

  render() {
   var settings = {
      arrows: true
    };

    return <Slider {...settings}>{this.manipulateRows()}</Slider>;
  }
}
