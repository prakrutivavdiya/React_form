import React from 'react';

const FormInput=(props)=> {
      return (
        <div >
            <label className='Label'style={{float:"left"}}>{props.label}</label>
            <input
              className="FormInput"
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.handleChange}
              value={props.value}
            />
        </div>
      )
    }
export default FormInput;