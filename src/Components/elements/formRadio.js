import React from 'react';

const FormRadio=(props)=> {
      return (
        <div style={{display:'flex'}}>
            <label className='Label'>{props.label}</label>
            <div
                style={{textAlign: 'left', display: 'inline-flex' }}
                className='FormRadio'
                value={props.value}
                onChange={props.handleChange}>
                
                {props.options.map(option => (
                    <div key={option.value}>
                        <input type="radio" name={props.name} id={option.id} value={option.value} />
                        <label htmlFor={option.id} style={{ marginRight: '50px'}}>{option.value}</label>
                    </div>
                ))}
            </div>
          </div>
      )
  }
export default FormRadio;
