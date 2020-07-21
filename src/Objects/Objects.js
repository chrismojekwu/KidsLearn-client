import React, {useState} from 'react'
import icons from './icons'

function Objects(props) {

    const[object,setObject] = useState("")

    

    const buttons = icons.map((items,index) => {
        return (
            <i onClick={e => setObject(`fas ${items} fa-10x`)}
            className={`fas ${items} fa-lg`} key={index} id="objecticon" ></i>
        )
    })

    

    return (
        <div className="activity" >
            <div className="objects">
                <div className="objectsdisplay">
                    <i id="objectlarge" className={object}></i>
                </div>

                <div className="controls">
                    {buttons}
                </div>

            </div>
        </div>
    )
}

export default Objects

/* <i value class="fas fa-couch"></i>
                    <i class="fas fa-bicycle"></i> */ 