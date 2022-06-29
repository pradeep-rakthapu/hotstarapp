import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
 const Footer =()=>{
    return(
        <div className="footer">
            <div id="b1">
                <span className="fc"> About Disney+Hotstar</span>
                <span className="fc">Terms of Use</span>
                <span className="fc" >Privacy Policy</span>
                <span className="fc">Feedback</span>
                <span className="fc">FAQ</span>
                <span className="fc">Carrers</span>

                <p className="fa">© 2022 STAR. All Rights Reserved. HBO, Home Box Office and all related channel and programming logos are service marks of, and all related programming visuals and elements are the property of, Home Box Office, Inc. All rights reserved.</p>
            </div>
            <div id ="b2">
                <p className="fa" > Connect with us</p>
                <p></p>
                <Link> <button className="badge badge-info bt" >FB &nbsp; </button> </Link>
                <Link> <button className=" badge badge-info bt" >INSTAGRAM &nbsp; </button> </Link>
            </div>

            
            
         </div>
    )

 }
 export default Footer;