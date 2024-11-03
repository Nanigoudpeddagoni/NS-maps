import React from 'react';
import '../css/map.css';
import { useNavigate } from 'react-router-dom';
const Maps = () => {

 let navigation = useNavigate()
    let submit = function(){
        navigation('/Map') 

    }
    return (
    
     <div className="container">
        <div className='con'>

    
            <h1>land occupation</h1>
            <form>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
                <select>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                </select>
                <button type="submit" onClick={submit}>Submit</button>
            </form>
            <div className="text-content">
                <p>Water is essential for life. Conserving water helps protect our natural ecosystems and ensures that we have enough water for future generations. Let's work together to save water and preserve our reservoirs and natural landscapes.</p>
            </div>
          
        </div>
        </div>
      
           );
 };

export default Maps;