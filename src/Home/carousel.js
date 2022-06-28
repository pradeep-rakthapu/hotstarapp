import React,{Component} from "react";
import './home.css'
const url = 'https://hotstar7.herokuapp.com/scroller'
class Carousel extends Component{
                constructor(){
                    super()
                    this.state={
                        carousel:'',
                        languages:''
                    }
                }
                

               
           Carouselitem=()=>{
            if(this.state.carousel){
                return  this.state.carousel.map(item=>{
                    return(
                        <div class="carousel-item  "key={item.v_id} >
                          <div class="row " id="rowbg">
                             <div class="col-lg-6 text-white m-0 "  >
                                <h3 class="m-5 ">{item.name}</h3>
                                <p class="ml-5"> {item.genres}.{item.year}</p>
                                  <p class="ml-5 "> {item.description} </p>
                                  <p className="ml-5">AVAILABLE IN </p>
                                  {
                                     item.languages.map(data=> { 
                                        return( <span class="ml-2 badge badge-light " id="language"> {data.language} </span>)
                                               })
                                  }
                                
                                                        
                                  

                                       
                                </div>
                             <div class="col-lg-6   m-0 " id="rimgbg" >
                               <img src={item.image} class="" height="100%" width="100%" alt={item.name}/>
                              

                             </div>

                            </div>
                         
                        </div>
                    )
                })
            }

           }


    render(){
        return(
            <div id="demo" class="carousel slide " data-ride="carousel">
            <ul class="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" class="active"> </li>
                <li data-target="#demo" data-slide-to="1" > </li>
                <li data-target="#demo" data-slide-to="2" > </li>
                <li data-target="#demo" data-slide-to="3" > </li>
                <li data-target="#demo" data-slide-to="4" > </li>
                <li data-target="#demo" data-slide-to="5" > </li>

            </ul>
            <div class="carousel-inner ">
                <div class="carousel-item active " id="colbg" >
                    <div class="row   p-2 ml-2 " id="rowbg" >
                        <div class="col-lg-2 ">
                            <div class="mt-5 ml-5">
                            <img src="https://i.ibb.co/3Tr9zcc/D-Hotstar-logo-Dark-BG-120x120.png" alt=""  class="ml-4" height="50px" width="50px"  />
                            <br/>
                            <p class=" text-white">Disney+Hotstar </p>
                            <p class=" text-white">For Non-Stop Entertainment</p>
                            <button class="badge badge-primary mt-1">SUBSCRIBE</button>
                            </div>
                        </div>
                        <div class="col-lg-10">
                            <a ><img src="https://i.ibb.co/JcryCVM/nowstreaming.jpg" alt="nowstreaming" id="rimgbg" height="100%" width="100%" /></a>
                         
                      </div>
                       
                   </div>
                </div>

                {this.Carouselitem()}

              
            <a class="carousel-control-prev" href="#demo " data-slide="prev">
                <span class="carousel-control-prev-icon"></span>
              </a>
              <a class="carousel-control-next" href="#demo" data-slide="next">
                <span class="carousel-control-next-icon"></span>
              </a>
        
        </div>
        </div>
        )
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data);
            this.setState({
                carousel: data,
                languages : data.languages
            })
    
            })
        
      }
} 
export default Carousel;