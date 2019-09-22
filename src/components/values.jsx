import React from 'react';
import './../css/values.css'
const Values = () => {
    return( 
        <div id="values">
            <div id="valuesTitle">Building A Better World <br/> One Website At A Time</div>
            <div id="intuitive" className="value shadow-left">
                <div className="valueIcon"/>
                <div className="valueTitle">Intuitive Design</div>
            </div>


            <div id="detail" className="value shadow">
                <div className="valueIcon"/>
                <div className="valueTitle">Detail Oriented</div>
            </div>

            <div id="creative" className="value shadow-right">
                <div className="valueIcon"/>
                <div className="valueTitle">Creative Solutions</div>
            </div>
        </div>
    )
}
export default Values;