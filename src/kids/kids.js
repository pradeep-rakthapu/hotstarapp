import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../header";
import './kids.css'
const url = 'https://hotstar7.herokuapp.com/kids'
const curl = 'https://hotstar7.herokuapp.com/kids?channel='

class Kids extends Component{
        constructor(props){
            super(props)
            this.state={
                kids:''
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
                            <Link to={`/details/${item.v_id}`}>
                            <p>{item.name}</p>  </Link>
                            <span>{item.channel}.&nbsp;</span>
                            
                            <span>{item.runtime}</span>
                            <span>{item.runtine}</span>
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
                        this.setState({kids:data})
                    })



        }


            render(){
                return(
                <>
                      <Header/> 
                      <div className="row filter">
                          <div className="col-lg-2 " id="colhover" value="HotstarSpecials" onClick={()=>{this.handelevent("Mickey")}}  >
                            
                              <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1627/651627-r"     height="100%" width="100%"/>
                
                          </div>

                         <div className="col-lg-2 " id="colhover"  value="Starplus" onClick={()=>{this.handelevent("Princesses")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1658/651658-r"
                             height="100%" width="90%"/>
                          </div>

                          <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Junior")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/3341/653341-r"
                            height="100%" width="90%"/>
                           </div>
                          <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Superhero")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1650/651650-r"
                            height="100%" width="90%"/>
                          </div>
                          <div className="col-lg-2 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Action")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/6715/646715-r"
                              height="100%" width="90%"/>
                          </div>
                          {/* <div className="col-lg-2  mt-5 " id="colhover"  value="Starmaa" onClick={()=>{this.handelevent("Animal")}}  >
                             <img src="https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1586/651586-r"
                              height="100%" width="90%"/>
                          </div> */}

                        </div>

                       <div className="row">

                            {this.filter(this.state.kids)}
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
                    this.setState({kids: data})
            
                    })
                
              }
        
}


export default Kids ;