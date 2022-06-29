import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './genres.css'
const url = ''
const curl = 'https://hotstar7.herokuapp.com/homebar?genres='

class Genres extends Component{
        constructor(props){
            super(props)
            this.state={
                genres:''
            }
        }
        filter=(data)=>{
            if(data){
                return data.map(item=>{
                    return(

                        <div className="col-lg-2 mt-5 ml-5" id="block" key={item.v_id}>
                            <div id="inblock" >
                            <img  src={item.image} height="75%" width="95%" />
                            <>
                            <Link to={`/details/${item.v_id}`}><p>{item.name}</p></Link>
                            <span>{item.channel}.&nbsp;</span>
                            
                            <span>{item.runtime}</span>
                            <span>{item.genres}</span>
                            <p>{item.year}</p>
                            
                            </>
                            </div>

                        </div>
                    )
                })
            }

        }

        handelevent=(data1)=>{
                   
                    
                    fetch(`${curl}${data1}`,{method:'GET'})
                    .then((res)=>res.json())
                    .then((data)=>{
                        console.log(data)
                        this.setState({genres:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                      <div className="col-lg-2 mt-5" id="colhover" value="1" onClick={()=>{this.handelevent("Romance")}}  >
                            
                            <h1>ROMANCE</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5 " id="colhover" value="2" onClick={()=>{this.handelevent("Action")}}  >
                            
                            <h1>ACTION</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="3" onClick={()=>{this.handelevent("Adventure")}}  >
                            
                            <h1>ADVENTURE</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="4" onClick={()=>{this.handelevent("Thriller")}}  >
                            
                            <h1>THRILLER</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="5" onClick={()=>{this.handelevent("Crime")}}  >
                            
                            <h1>CRIME</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="6" onClick={()=>{this.handelevent("Kids")}}  >
                            
                            <h1>KIDS</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="7" onClick={()=>{this.handelevent("Horror")}}  >
                            
                            <h1>HORROR</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="8" onClick={()=>{this.handelevent("Drama")}}  >
                            
                            <h1>DRAMA</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="9" onClick={()=>{this.handelevent("Family")}}  >
                            
                            <h1>FAMILY</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Sport")}}  >
                            
                        <h1>SPORTS</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Historical")}}  >
                            
                        <h1>HISTORICAL</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Mythology")}}  >
                            
                            <h1>MYTHOLOGY</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Animation")}}  >
                            
                            <h1>ANIMATION</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Teen")}}  >
                            
                            <h1>TEEN</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Reality")}}  >
                            
                            <h1>REALITY</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Comedy")}}  >
                            
                            <h1>COMEDY</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Mystery")}}  >
                            
                            <h1>MYSTERY</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Science")}}  >
                            
                            <h1>SCIENCE</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Fantasy")}}  >
                            
                            <h1>FANTASY</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="" onClick={()=>{this.handelevent("Musical")}}  >
                            
                            <h1>Musical</h1>
                
                        </div>
                    </div>

                       <div className="row">
                            {this.filter(this.state.genres)}
                       </div>
                      </>
                )
            }

            //
            
        
}


export default Genres ;