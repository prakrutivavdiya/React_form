import {Form, FormGroup, Label, Input, Button } from 'reactstrap';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const Registration = () => {
    return (
        <Form className="form col-sm-5 mx-auto my-5 border py-5 px-4">
                <center><h1 className='pb-4'>Sign Up</h1></center>
                <FormGroup>
                    <Label>Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Enter email"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Enter password"
                    />
                </FormGroup>
                <center><Button className='col-sm-4 mt-4' color="primary">Submit</Button></center>            
        </Form>
    );

}

export default Registration;