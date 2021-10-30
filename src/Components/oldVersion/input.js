import React from 'react';

const input = (props) => {
    let inputElement = null;
    const inputClasses =['Input'];

    switch (props.elementType) {
        case 'Input':
            inputElement = <input
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        case 'Select':
            inputElement = <select
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <option key={option.value} value={option.value}>
                        {option.displayValue}
                    </option>
                ))}
            </select>
            break;
        case 'Checkbox':
            inputElement = <div
                style={{ textAlign: 'left', }}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <div key={option.value}>
                        <input type="checkbox" id={option.id} value={option.value} />
                        <label htmlFor={option.id}>{option.displayValue}</label>
                    </div>
                ))}
            </div>
            break;
        case 'Radio':
            inputElement = <div
                style={{textAlign: 'left', display: 'inline-flex' }}
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}>
                {props.elementConfig.options.map(option => (
                    <div key={option.value}>
                        <input type="radio" name='delivery' id={option.id} value={option.value} />
                        <label htmlFor={option.id} style={{ 'margin-right': '50px'}}>{option.displayValue}</label>
                    </div>
                ))}
            </div>
            break;
        case 'TextArea':
            inputElement = <textarea
                className={inputClasses.join(' ')}
                {...props.elementConfig}
                value={props.value}
                onChange={props.changed}
            />
            break;
        default:
            inputElement = <input
                className={inputClasses}
                onChange={props.changed}
            />
    }

    return (
        <div>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;