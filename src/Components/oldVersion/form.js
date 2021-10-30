import React, { Component } from 'react';
import Input from './input';

class Form extends Component {

    state = {
        Form: {
            name: {
                label: 'Name:',
                elementType: 'Input',
                elementConfig: {
                    type: 'Text',
                    placeholder: 'Enter your name....'
                },
                value:'',
                validation:{
                    required:true,
                },
                isValid: false,
                isTouched:false
            },
            gender:{
                label: 'Gender:',
                elementType: 'Radio',
                elementConfig: {
                    options:[
                        {id:'rad1', value:'male', displayValue:'male'},
                        {id:'rad2', value:'female', displayValue:'female'},
                        {id:'rad3', value:'other', displayValue:'other'},
                        
                    ]
                },
                value:'male',
                validation:{
                    required:true
                },
                isValid: true,
                isTouched:false
            },
            email: {
                label: 'E-mail Id:',
                elementType: 'Input',
                elementConfig: {
                    type: 'Email',
                    placeholder: 'Enter Email Id'
                },
                value:'',
                validation:{
                    required:true,
                    regex:/^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]){2,7}$/
                },
                isValid: false,
                isTouched:false
            },
            branch:{
                label: 'Branch:',
                elementType: 'Select',
                elementConfig: {
                    options:[
                        {value:'CE', displayValue:'CE'},
                        {value:'IT', displayValue:'IT'},
                        {value:'EC', displayValue:'EC'}
                    ]
                },
                value:'CE',
                validation:{
                    required:true
                },
                isValid: true,
                isTouched:false
            },
            preferedWorkingMode:{
                label: 'Prefered working mode:',
                elementType: 'Checkbox',
                elementConfig: {
                    options:[
                        {id:'op1', value:'WorkFromHome', displayValue:'Work From Home'},
                        {id:'op2', value:'WorkFromOffice', displayValue:'Work From Office'}
                        
                    ]
                },
                value:[],
                validation:{
                    required:true
                },
                isValid: true,
                isTouched:false
            },
            
            describeYourself: {
                label: 'Describe yourself:',
                elementType: 'TextArea',
                elementConfig: {
                    type: 'Text',
                    placeholder: 'Write something about you:'
                },
                value:'',
                validation:{
                    required:false
                },
                isValid: false,
                isTouched:false
            },
        },
        formIsValid:false
    }

    dataHandler = (event) =>{
        event.preventDefault()
        const formData = {};
        for(let formElement in this.state.Form){
            formData[formElement] = this.state.Form[formElement].value;
        }

        //write prepared object into firebase file.
    }

    checkValidity = (value, rules) =>{
        let isValid = true;
        if(rules.required){
            isValid = value!== '' && isValid;
            if(rules.regex){
                isValid = rules.regex.test(value) && isValid;
            }
        }
        return isValid
    }

    inputChangeHandler = (event, inputIdentifier) =>{
        const updatedForm = {
            ...this.state.Form
        }
        const updatedFormElement = {
            ...updatedForm[inputIdentifier]
        }
        if(inputIdentifier === 'preferedWorkingMode'){
            //multi select
            if(!updatedFormElement.value.includes(event.target.value) ){
                //add
                updatedFormElement.value.push(event.target.value)
            }
            else{
                //change 
                const index = updatedFormElement.value.indexOf(event.target.value);
                updatedFormElement.value.splice(index,1);
            }
        }
        else{
            //single select, radio or text input
        updatedFormElement.value = event.target.value;}
        updatedFormElement.isValid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)
        updatedFormElement.isTouched = true;
        updatedForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for(let inputIdentifier in updatedForm){
            formIsValid = updatedForm[inputIdentifier].isValid && formIsValid
        }
        
        this.setState({Form: updatedForm, formIsValid:formIsValid})
    }

    render() {

        let formElements = [];
        for (let key in this.state.Form){
            formElements.push({
                id: key,
                config: this.state.Form[key]
            })
        }

        let form = (
            <form onSubmit={this.dataHandler}>
                {
                    formElements.map(element =>(
                        <Input 
                            key={element.id}
                            elementType = {element.config.elementType}
                            label = {element.config.label}
                            elementConfig={element.config.elementConfig}
                            value = {element.config.value}
                            invalid = {!element.config.isValid}
                            touched = {element.config.isTouched}
                            changed = {(event) =>this.inputChangeHandler(event, element.id)}/>
                    ))
                }
                <button className='Submit' disabled={!this.state.formIsValid} onClick={()=>alert('submitted')}>Submit</button>
            </form>
        )

        return (
            <div className='Form'>
                <h1>Intern Details</h1>
                {form}
            </div>);
    }
}

export default Form;