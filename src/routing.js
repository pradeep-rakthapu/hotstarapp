import React from "react";
import { BrowserRouter,Route } from "react-router-dom";
import Home from "./Home/home";
import Tv from "./listingpage.js/tv";
import Movies from "./movies/movies";
import Sports from "./sports/sports";
import Disney from "./diney/disney";
import Kids from "./kids/kids";
import Channel from "./homebar/channel";
import Genres from "./homebar/genres";
import Languages from "./homebar/language";
import details from "./details.js/details";
import Footer from "./footer";

const Routing=()=>{
    return (
        <BrowserRouter>
        <Route  exact path='/' component={Home}  />
        <Route   path='/tv' component={Tv}  />
        <Route   path='/movies' component={Movies}  />
        <Route   path='/sports' component={Sports}  />
        <Route   path='/disney' component={Disney}  />
        <Route   path='/kids' component={Kids}  />
        <Route   path='/homebar/channel' component={Channel}  />
        <Route   path='/homebar/genres' component={Genres}  />
        <Route   path='/homebar/languages' component={Languages}  />
        <Route   path='/details/:id' component={details}  />
        <Footer/>
        </BrowserRouter>
        
    )
}

export default Routing;