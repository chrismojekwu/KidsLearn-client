import React, { useState, useEffect, useReducer} from 'react';
import Name from '../components/Name'
import DoodleColors from '../components/DoodleColors'
import Canvas from './Canvas'

function Doodle(props) {
    const [colors] = useState(['#000000','#FF0C00','#0017FF','#FFFB00','#39FF00','#8600FF','#FF8300'])
    const [activeColor, setActiveColor] = useState(colors[0])
    
    
    return (
        <header className="header">
            <div className="doodle">
                <Name/>
            </div>
            <div className="colors">
                <DoodleColors
                    colors={colors}
                    activeColor={activeColor}
                    setActiveColor={setActiveColor}
                />
                <Canvas
                    color={activeColor}
                    height={window.innerHeight}
                    width={window.innerWidth}
                    sideWidth={props.sideWidth}
                />
            </div>
        </header>
    )
}

export default Doodle;