import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './language.css'
const url = ''
const curl = 'https://hotstar7.herokuapp.com/homebar?languageid='

class Languages extends Component{
        constructor(props){
            super(props)
            this.state={
                languages:''
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
                        this.setState({languages:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                      <div className="col-lg-2 mt-5" id="colhover" value="1" onClick={()=>{this.handelevent(1)}}  >
                            
                            <h1>ENGLISH</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5 " id="colhover" value="2" onClick={()=>{this.handelevent(2)}}  >
                            
                            <h1>HINDI</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="3" onClick={()=>{this.handelevent(3)}}  >
                            
                            <h1>TELUGU</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="4" onClick={()=>{this.handelevent(4)}}  >
                            
                            <h1>MALAYALAM</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="5" onClick={()=>{this.handelevent(5)}}  >
                            
                            <h1>BENGALI</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="6" onClick={()=>{this.handelevent(6)}}  >
                            
                            <h1>TAMIL</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="7" onClick={()=>{this.handelevent(7)}}  >
                            
                            <h1>KANNADA</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="8" onClick={()=>{this.handelevent(8)}}  >
                            
                            <h1>ODIA</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="9" onClick={()=>{this.handelevent(9)}}  >
                            
                            <h1>MARATHI</h1>
                
                        </div>
                    </div>

                       <div className="row">
                            {this.filter(this.state.languages)}
                       </div>
                      </>
                )
            }

            //
            
        
}


export default Languages ;