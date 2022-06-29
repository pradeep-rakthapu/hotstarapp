import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './channel.css'
const url = ''
const curl = 'https://hotstar7.herokuapp.com/homebar?channel='

class Channel extends Component{
        constructor(props){
            super(props)
            this.state={
                channel:''
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
                        this.setState({channel:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                          <div className="col-lg-2 mt-5" id="colhover" value="HotstarSpecials" onClick={()=>{this.handelevent("Hotstarspecials")}}  >
                            
                              <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1119/661119-h"     height="100%" width="100%"/>
                
                          </div>

                         <div className="col-lg-2 mt-5" id="colhover"  value="Starplus" onClick={()=>{this.handelevent("Disney")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2046/1102046-h-cc9479e5f2a0"
                             height="100%" width="100%"/>
                          </div>

                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Starworld")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1138/661138-h"
                            height="100%" width="100%"/>
                           </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Hbo")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1105/661105-h"
                            height="100%" width="100%"/>
                          </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Selectpicks")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1116/661116-h"
                              height="100%" width="100%"/>
                          </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Abcstudios")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1100/661100-h"
                              height="100%" width="100%"/>
                          </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Starplus")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1132/661132-h"
                              height="100%" width="100%"/>
                          </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Asianet")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1103/661103-h"
                              height="100%" width="100%"/>
                          </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Starmaa")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6620/776620-h"
                              height="100%" width="100%"/>
                          </div>
                          <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Natgeo")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6355/746355-h"
                            height="100%" width="100%"/>
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Marvel")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6349/746349-h"
                            height="100%" width="100%"/>
                        </div>
                        
                           <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("")}}  >
                         
                           </div>
                           <div className="col-lg-2 mt-5" id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("")}}  >
                            
                           </div>

                        </div>

                       <div className="row">
                            {this.filter(this.state.channel)}
                       </div>
                      </>
                )
            }

            //
            
        
}


export default Channel ;