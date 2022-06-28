import React, { Component } from "react";
import Header from "../header";
import Carousel from "./carousel";
import DisneySlider from "./disney";
import './home.css'
import KidsSlider from "./kids";
import MovieSlider from "./movies";
import SimpleSlider from "./sliders";
import SportSlider from "./sport";
import TvSlider from "./tv";
class Home extends  Component{
        constructor(){
            super()
            this.state={
                carousel:''
            }
        }

            render(){
                return( 
                <>
                    <Header/>
                    <Carousel/>
                  <SimpleSlider/>
                  <TvSlider/>
                  <MovieSlider/>
                  <SportSlider/>
                  <KidsSlider/>
                  <DisneySlider/>
                 </>
                )
            }
        
}
export default Home;