import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './tv.css'
const url = 'https://hotstar7.herokuapp.com/tv'
const curl = 'https://hotstar7.herokuapp.com/tv?channel='

class Tv extends Component{
        constructor(props){
            super(props)
            this.state={
                tv:''
            }
        }
        filter=(data)=>{
            if(data){
                return data.map(item=>{
                    return(

                        <div className="col-lg-2 mt-5 ml-5" id="block" key={item.v_id}>
                            <div id="inblock" >
                            <img  src={item.image} height="75%" width="95%" />
                            <Link to={`/details/${item.v_id}`}>
                            <p>{item.name}</p> </Link>
                            <span>{item.genres}.&nbsp;</span>
                            <span>{item.channel}.</span>
                            <p>{item.year}</p>
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
                        this.setState({tv:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                        <div className="col-lg-2 " id="colhover" value="HotstarSpecials" onClick={()=>{this.handelevent("HotstarSpecials")}}  >
                            
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1119/661119-h"     height="100%" width="100%"/>
                
                        </div>

                        <div className="col-lg-2 " id="colhover"  value="Starplus" onClick={()=>{this.handelevent("Starplus")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h"
                            height="100%" width="100%"/>
                        </div>

                        <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Starmaa")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6620/776620-h"
                            height="100%" width="100%"/>
                        </div>
                        <div className="col-lg-2 bg-info" id= "colhover" value="" onClick={()=>{this.handelevent("")}}  >
                            <center>
                              <h1 className="m-5 " >OTHERS</h1>
                            </center>
                        </div>
                      </div>

                       <div className="row">
                            {this.filter(this.state.tv)}
                       </div>
                      </>
                )
            }

            //
            componentDidMount(){
                fetch(url,{method:'GET'})
                .then((res)=>res.json())
                .then((data)=>{
                    console.log(data)
                    this.setState({tv: data})
            
                    })
                
              }
        
}
export default Tv