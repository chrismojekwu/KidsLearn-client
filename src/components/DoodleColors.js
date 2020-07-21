import React  from 'react';

function DoodleColors({ colors = [], activeColor, setActiveColor}) {
    if(!colors.length) return null
    return (
        <fieldset className="doodlecolors">
            {colors.map((color,index) => (
                
                <label key={index}>
                    <div 
                    style={{borderColor:color, backgroundColor:color}}
                    className="radiobox">
                        <input
                            name="color"
                            type="radio"  
                            value={color}
                            checked={activeColor === color}
                            onChange={() => setActiveColor(color)} 
                        />
                    </div>
                </label>
             ))}
            <label>
                <div 
                style={{borderColor:"#FFFFFF"}}
                className="radiobox">
                    <input
                        name="color"
                        type="radio"  
                        value={"#FFFFFF"}
                        checked={activeColor === "#FFFFFF"}
                        onChange={() => setActiveColor("#FFFFFF")} 
                    />
                </div>
            </label> 
        </fieldset>
    )
}

export default DoodleColors;