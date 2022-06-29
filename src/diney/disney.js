import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './disney.css'
const url = 'https://hotstar7.herokuapp.com/disney'
const curl = 'https://hotstar7.herokuapp.com/disney?channel='

class Disney extends Component{
        constructor(props){
            super(props)
            this.state={
                disney:''
            }
        }
        filter=(data)=>{
            if(data){
                return data.map(item=>{
                    return(

                        <div className="col-lg-2 mt-5 ml-5" id="block" key={item.v_id}>
                            <div id="inblock" >
                            <img  src={item.image} height="75%" width="95%" />
                            <Link to={`/details/${item.v_id}`}><p>{item.name}</p></Link>
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
                        this.setState({disney:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                        <div className="col-lg-2 " id="colhover" value="HotstarSpecials" onClick={()=>{this.handelevent("Disney")}}  >
                            
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6347/746347-h"     height="100%" width="100%"/>
                
                        </div>

                        <div className="col-lg-2 " id="colhover"  value="Starplus" onClick={()=>{this.handelevent("Pixar")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6348/746348-h"
                            height="100%" width="100%"/>
                        </div>

                        <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Marvel")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6349/746349-h"
                            height="100%" width="100%"/>
                        </div>
                        <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Starwars")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6357/746357-h"
                            height="100%" width="100%"/>
                        </div>
                        <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Natgeo")}}  >
                            <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/6355/746355-h"
                            height="100%" width="100%"/>
                        </div>
                        
                      </div>

                       <div className="row">
                            {this.filter(this.state.disney)}
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
                    this.setState({disney: data})
            
                    })
                
              }
        
}
export default Disney