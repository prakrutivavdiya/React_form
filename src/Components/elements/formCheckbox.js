import React from 'react';

const FormCheckbox=(props)=>{
      return (
        <div style={{display:"flex"}}>
            <label className='Label'>{props.label}</label>
                <div value={props.value}
                     onChange={props.handleChange}
                     className="FormCheckbox">
                    {props.options.map(option => (
                        <div key={option.value}>
                            <input type="checkbox" id={option.id} value={option.value} name={props.name} />
                            <label htmlFor={option.id}>{option.value}</label>
                        </div>
                    ))}
                 </div>
          </div>
            
      )
  }
export default FormCheckbox;