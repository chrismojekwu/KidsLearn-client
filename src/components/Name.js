import React, { useState } from 'react';

function Name() {
    const [name,setName] = useState()
    return (
        <label className="name-input">
            <input 
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
                placeholder="Name your Doodle?"
            />
        </label>
    )
}

export default Name;