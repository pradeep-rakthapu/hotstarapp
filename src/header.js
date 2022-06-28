import React,{Component} from "react";
import { Link } from "react-router-dom";
import './header.css'

class Header extends Component{
     constructor(){
        super()

     }
     render(){
        return(
            <header>
          <nav class="navbar navbar-expand-sm  navbar-dark fixed-top" id="nav" >
            
              <ul class="navbar-nav ml-5">
                  <li class="nav-item dropdown">
                      <a class="nav-link  dropdown-toggle mt-2" href="#" id ="navbardrop" data-toggle ="dropdown" >  <i class="fa fa-bars fa-1x " aria-hidden="true"></i></a>

                      <div class="dropdown-menu ">
                          <a  class="dropdown-item " href="#"> channels</a>
                          <a  class="dropdown-item" href="#"> geners</a>
                          <a  class="dropdown-item" href="#"> languages</a>
                      </div>
                  </li>
                  <li class="nav-item">
                    <Link  to='/' className="nav-brand ml-3" > <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg" alt=""/> </Link>
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link  dropdown-toggle ml-3" href="#" id ="navbardrop" data-toggle ="dropdown" >TV</a>

                    <div class="dropdown-menu ">
                        <a  class="dropdown-item " href="#"> other shows</a>
                        <a  class="dropdown-item" href="#"> Hotstar Specials</a>
                        <a  class="dropdown-item" href="#"> Star jalsa</a>
                        <a  class="dropdown-item" href="#"> Star plus</a>
                        <a  class="dropdown-item" href="#"> Star vijay</a>
                        <a  class="dropdown-item" href="#"> others</a>
                    </div>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle ml-3" id="navbardrop" data-toggle="dropdown"> Movies</a>
                    <div class="dropdown-menu" >
                        <a href="#" class="dropdown-item" >Hindi</a>
                        <a href="#" class="dropdown-item" >Telugu</a>
                        <a href="#" class="dropdown-item" >English</a>
                        <a href="#" class="dropdown-item" > Tamil</a>
                        <a href="#" class="dropdown-item" >Malyalam</a>
                        <a href="#" class="dropdown-item" >Others</a>

                    </div>

                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle ml-3" id="navbardrop" data-toggle="dropdown">Sports</a>
                    <div class="dropdown-menu" >
                        <a href="#" class="dropdown-item" >Cricket</a>
                        <a href="#" class="dropdown-item" >Football</a>
                        <a href="#" class="dropdown-item" >Hockey</a>
                        <a href="#" class="dropdown-item" >Kabaddi</a>
                        <a href="#" class="dropdown-item" >esports</a>
                        <a href="#" class="dropdown-item" >Others</a>

                    </div>


                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link ml-3"> Disney+</a>

                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link ml-3 "><img src="https://www.hotstar.com/assets/4aa70ede8904e16b7630300c09219c8e.svg" alt=""/></a>

                </li>
               
              </ul>
                <form  class="form-inline ml-auto mt-2 " action="#">
                  <input class="form-control  justify-content-end    mr-sm-2" type="text" placeholder="search"/>
                </form>
                <span class="badge badge-primary mt-0" id='sub' >SUBSCRIBE</span>
                <ul class="navbar-nav ml-2">
                <li class="nav-item dropdown">
                <a href="#"  class="nav-link dropdown-toggle  " id="navbardrop" data-toggle="dropdown"> <img src="https://www.hotstar.com/assets/c724e71754181298e3f835e46ade0517.svg" alt=""/> </a>
                <div class="dropdown-menu ">
                    <a href="#" class="dropdown-item" > watchlist</a>
                        <a href="#" class="dropdown-item" >account</a>
                        <a href="#" class="dropdown-item" >Others</a>
                </div>
            </li>
        </ul>
          </nav>
        </header>
        )
     }


}
export default Header;