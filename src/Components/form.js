import React, { Component } from "react";
import FormInput from "./elements/formInput";
import FormRadio from "./elements/formRadio";
import FormSelect from "./elements/formSelect";
import FormTextArea from "./elements/formTextArea";
import FormCheckbox from "./elements/formCheckbox";

class Form extends Component {

    state = {
        name:'',
        gender:'',
        email:'',
        branch:'',
        workingMode:[],
        describeYourself:'',
        rules:{
            name:{
                required:true,
                valid:false
            },
            gender:{
                required:true,
                valid:false
            },
            email:{
                required:true,
                valid:false,
                regex:/^([a-zA-Z0-9_.-]+)@([a-zA-Z0-9_.-]+)\.([a-zA-Z]){2,7}$/
            },
            branch:{
                required:true,
                valid:true
            },
            workingMode:{
                required:true,
                valid:true
            },
            describeYourself:{
                required:true,
                valid:false
            }
        },
        formIsValid:false
    }

    inputChangeHandler=(event)=>{
        if(event.target.type==="checkbox")
        {
            if(!this.state[event.target.name].includes(event.target.value) ){
                //add
                this.state[event.target.name].push(event.target.value)
            }
            else{
                //change 
                const index = this.state[event.target.name].indexOf(event.target.value);
                this.state[event.target.name].splice(index,1);
            }
        }
        else{
            this.state[event.target.name]=event.target.value
            //setstate is one step behind
        }
        this.state.rules[event.target.name].valid=this.checkValidity(event.target.name)
        //setstate is one step behind
        let formIsValid = true;
        for(let element in this.state.rules){
            formIsValid = this.state.rules[element].valid && formIsValid
        }
        
        this.setState({formIsValid:formIsValid})

     }

     checkValidity(elementname)   
     {
        let isValid = true;
        if(this.state.rules[elementname].required){
            isValid = this.state[elementname]!== '' && isValid;
            if(this.state.rules[elementname].regex){
                isValid =this.state.rules[elementname].regex.test(this.state[elementname]) && isValid;
            }
        }
        return isValid
     }
    render() {
        let form = (
            <form onSubmit={this.dataHandler}>
                <FormInput type="text"
                            placeholder="Enter your name...."
                            name="name"
                            label="Name:"
                            handleChange={ (event) =>this.inputChangeHandler(event)}/>
                <FormRadio name="gender"
                            handleChange={ (event) =>this.inputChangeHandler(event)}
                            label="Gender:"
                            options={[  {id:"rad1", value:"male"},
                                        {id:"rad2", value:"female"},
                                        {id:"rad3", value:"other"} 
                                    ]} />
                <FormInput  type="Email"
                            handleChange={ (event) =>this.inputChangeHandler(event)}
                            label="Email Id:"
                            placeholder="Enter Email Id"
                            name="email"/>
                <FormSelect label="Branch:"
                            name="branch"
                            type="Select"
                            handleChange={ (event) =>this.inputChangeHandler(event)}
                            options={[
                                {value:"CE"},
                                {value:"IT"},
                                {value:"EC"}
                            ]}/>
                <FormCheckbox label="Prefered working mode:"
                              name="workingMode"
                              type="Checkbox"
                              handleChange={ (event) =>this.inputChangeHandler(event)}
                              options={[
                                    {id:"op1", value:"WorkFromHome"},
                                    {id:"op2", value:"WorkFromOffice"}
                              ]}/>
                <FormTextArea label="Describe yourself:" 
                              type="text" 
                              handleChange={ (event) =>this.inputChangeHandler(event)}
                              placeholder="Write something about yourself.." 
                              name="describeYourself" 
                              rows="5" cols="15"/>
                <button className="Submit" disabled={!this.state.formIsValid} onClick={()=>alert("submitted")}>Submit</button>
            </form>
        )

        return (
            <div className="Form">
                <h1 style={{textAlign:"center"}}>Intern Details</h1>
                {form}
            </div>);
    }
}

export default Form;