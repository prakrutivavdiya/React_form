import React from 'react';

const FormTextArea=(props)=> {
      return (
        <div style={{display:'flex'}}>
            <label className='Label'>{props.label}</label>
            <textarea className='FormTextArea'
              name={props.name}
              type={props.type}
              placeholder={props.placeholder}
              onChange={props.handleChange}
              value={props.value}
              rows={props.rows}
              cols={props.cols}
            />
        </div>
      )
  }

export default FormTextArea;