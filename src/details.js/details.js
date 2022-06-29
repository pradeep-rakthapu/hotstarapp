import React,{Component} from "react";
import './details.css'
import axios from 'axios'
import { Link } from "react-router-dom";
import Header from "../header";
const url = 'https://hotstar7.herokuapp.com/details'



class details extends Component{
       constructor(props){
        super(props)
        this.state={
            details:'',
            more:''
        }
       }

       languages=(data1)=>{
         if(data1){
            
             
            console.log(data1)
            return  data1.map((item)=> { 
               return( <span class="ml-2 badge badge-light " id="language"> {item.language} </span>);
                      })
           
        }
               
       }

   


    render(){
        
         
        return(
            <div>
                <Header/>
                    <div className="row " id="demo">
                      <div className="col-lg-6" >
                          <h1 id="name" > {this.state.details.name} </h1>

                          <span className="s">{this.state.details.genres} &nbsp;&nbsp;</span >
                          <span >{this.state.details.age}+&nbsp;&nbsp;</span >
                          <span >{this.state.details.channel}&nbsp;&nbsp;</span >
                          <span >{this.state.details.runtime}&nbsp;&nbsp;</span >
                          <span >{this.state.details.runtine}&nbsp;&nbsp;</span >
                         
                         <span >&nbsp;{this.state.details.year}&nbsp;&nbsp;</span >
                            <span >Season:{this.state.details.season}&nbsp;&nbsp;</span >
                         <span >Episode:{this.state.details.episodes}&nbsp;&nbsp;</span >
                         <p id="des" >{this.state.details.description}</p>
                             {this.languages(this.state.details.languages)} <br></br>


                         <button className=" p" > <i class="fa fa-play fa-8x" aria-hidden="true"> PLAY</i></button>
                        <button className="p" > <span >+ WatchList</span ></button> 
                          <button className="p"><i class="fa fa-share-alt" aria-hidden="true"></i></button>
                         
                          
                       </div>
                    <div className="col-lg-6" >
                            <img src= {this.state.details.image}  height="400px"  width="100%"/>
                    </div>

                   </div>
                   <div className="m-5 ">
                      <h1 className="m-5" >Trailers and Clips</h1>
                     <Link> <img className="hover" src= {this.state.details.image} height="200px" width="30%" /> </Link>
                    </div>
                    

                 </div>
            
        )

        
    }
    //
    async componentDidMount(){
        let vid = this.props.match.params.id?this.props.match.params.id:1;
        let response = await axios.get(`${url}/${vid}`)
        console.log(">>>response.data[0].restaurant_id",response.data[0])

        this.setState({details:response.data[0]})
    }
    

}
export default details;