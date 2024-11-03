import React from 'react'
import "../css/ser.css"
import web0 from "../images/dm.svg"
import web from "../images/web.svg"
import web1 from "../images/app.svg"
import web2 from "../images/seo.svg"
function Services() {
  return (
    <div>

<div class="container-fluid">
        <h1 class="text-center mt-5 display-3 fw-bold">Our <span class="theme-text">Services</span></h1>
        <hr class="mx-auto mb-5 w-25"/>
        <div class="row mb-5">
            <div class="col-12 col-sm-6 col-md-3 m-auto">
                
                <div class="card shadow">
                    <img src={web0} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">DATA SERVICES</h3>
                        <hr class="mx-auto w-75"/>
                        <p>
                          <ul>
                            <li>Historical Data Collection</li>
                            <li>Satellite Imagery Analysis</li>
                            <li>Field Observations</li>
                            <li>corruption of lakes</li>
                        </ul>
                        </p>
                    </div>
                </div>
               
            </div>
            
            <div class="col-12 col-sm-6 col-md-3 m-auto">
              
                <div class="card shadow">
                    <img src={web} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">ANALYTICAL SERVICES</h3>
                        <hr class="mx-auto w-75"/>
                        <p>
                            <li>Change Detection Analysis</li>
                            <li>Buffer Zone Effectiveness Evaluation</li>
                            <li>Environmental Impact </li>
                        </p>
                    </div>
                </div>
               
            </div>
           
            <div class="col-12 col-sm-6 col-md-3 m-auto">
               
                <div class="card shadow">
                    <img src={web1} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">CONSULTANCY SERVICES</h3>
                        <hr class="mx-auto w-75"/>
                        <p>
                            <li>Sustainability Recommendation</li>
                            <li>Conservation Strategy Development</li>
                            <li>Policy Advisory</li>
                        </p>
                    </div>
                </div>
                
            </div>
            
            <div class="col-12 col-sm-6 col-md-3 m-auto">
                
                <div class="card shadow">
                    <img src={web2} alt="" class="card-img-top"/>
                    <div class="card-body">
                        <h3 class="text-center">EDUCATIONAL AND TRAINING SERVICE</h3>
                        <hr class="mx-auto w-75"/>
                        <p>
                            <li>Workshops and Training</li>
                            <li>Capacity Building</li>
                            <li>Awareness Campaigns</li>
                        </p>
                    </div>
                </div>
             
            </div>
            
        </div>
    </div>

    </div>
  )
}

export default Services