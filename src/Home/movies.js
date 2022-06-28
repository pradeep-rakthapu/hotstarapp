import React, { Component } from "react";
import Slider from "react-slick";
import './slider.css'
const url ='https://hotstar7.herokuapp.com/movies'

 class MovieSlider extends Component {
    constructor() {
        super();
        this.state = {
            sliders:''
        }
    }
        
    sliders() {
      if(this.state.sliders){
        return this.state.sliders.map(data => {
            return (
                <div key={data.v_id} className="tile" >
                    <img alt="image" src={data.image} />
                    <p>{data.name}</p>
                </div>
            )
        });
      }
    }
       
  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 8,
      slidesToScroll: 8
    };
    return (
      <div className="cards" >
        <h2> Movies</h2>
        <Slider {...settings} >
        {this.sliders()}
        </Slider>
      </div>
    );
  }

  // 
  componentDidMount(){
    fetch(url,{method:'GET'})
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
        this.setState({sliders: data})

        })
    
  }
}
export default MovieSlider;