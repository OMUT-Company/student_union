import React, { useState } from 'react'
import '../select/style.scss'

const  SelectIt =()=> {

 const [value, setValue] = useState('coconut')
    
 const  handleChange=(event) =>{
     setValue( event.target.value);
  }
    return (
        <label>
          <select value={ value} onChange={ handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
    )
}

export default SelectIt