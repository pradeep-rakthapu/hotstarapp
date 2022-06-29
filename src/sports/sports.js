import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './sports.css'
const url = 'https://hotstar7.herokuapp.com/sports'
const curl = 'https://hotstar7.herokuapp.com/sports?sporttype='

class Sports extends Component{
        constructor(props){
            super(props)
            this.state={
                sports:''
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
                            
                            <span>{item.sport}.&nbsp;</span>
                            <span>{item.tournment}.&nbsp;</span>
                            <span>{item.runtime}.</span>
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
                        this.setState({sports:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                        <div className="col-lg-2 mt-5" id="colhover" value="1" onClick={()=>{this.handelevent("Cricket")}}  >
                            
                            <h1>CRICKET</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5 " id="colhover" value="2" onClick={()=>{this.handelevent("Football")}}  >
                            
                            <h1>FOOTBALL</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="3" onClick={()=>{this.handelevent("Tennis")}}  >
                            
                            <h1>TENNIS</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="4" onClick={()=>{this.handelevent("Kabaddi")}}  >
                            
                            <h1>KABADDI</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="5" onClick={()=>{this.handelevent("Golf")}}  >
                            
                            <h1>GOLF</h1>
                
                        </div>
                        <div className="col-lg-2 mt-5" id="colhover" value="6" onClick={()=>{this.handelevent("Formula 1")}}  >
                            
                            <h1>FORMULA1</h1>
                
                        </div>
                      </div>

                       <div className="row">
                            {this.filter(this.state.sports)}
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
                    this.setState({sports: data})
            
                    })
                
              }
        
}
export default Sports