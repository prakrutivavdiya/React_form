import React from 'react';

const FormSelect=(props)=>{
  return (
    <div style={{display:"flex"}}>
      <label className='Label'>{props.label}</label>
      <select
        value={props.value}
        className="FormSelect"
        onChange={props.handleChange}
        name={props.name}>
        
        {props.options.map(option => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        
        ))}
      </select>
    </div>
  )
}
export default FormSelect;
