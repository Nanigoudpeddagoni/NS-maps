import React from 'react';
import "../css/About.css"
import map from "../images/MAP.jpg" 
function About() {
  var modal = document.getElementById("myModal");
                        
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }

  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="content-section">
            <div className="title">
              <h1>About Us</h1>
            </div>
            <div className="content">
              <h3>Exploration of lakes and their evolving landscapes!</h3>
              <p>
                This project delves into the intricate relationship between lakes and their surrounding environments,
                focusing on the concept of buffer zones and the changes in lake occupation from past to present.
                Through comprehensive research and data analysis, we aim to compare historical and contemporary lake usage
                highlighting how human activities have altered these ecosystems. Our project includes maps, infographics,
                and visual representations that illustrate the significant transformations over time, providing insights
                into the ecological, social, and economic implications of lake management.
              </p>
              <div className="button">
                <a href="">Read More</a>
              </div>
            </div>
            <div className="social">
              <a href=""><i className="fab fa-facebook-f"></i></a>
              <a href=""><i className="fab fa-x-twitter"></i></a>
              <a href=""><i className="fab fa-instagram"></i></a>
            </div>
          </div>
          <div className="image-section">
            <img id="myImg" src={map} alt="Buffer Zone"/>
            <div id="myModal" className="modal">
              {/* The Close Button */}
              <span className="close">×</span>
              {/* Modal Content (The Image) */}
              <img className="modal-content" id="img01" alt="Modal"/>
              {/* Modal Caption (Image Text) */}
              <div id="caption"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
