import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";

export const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    } 

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <controlLabel>Email</controlLabel>
                    <FormControl
                      autoFocus
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      />
                </FormGroup>
                <formGroup controlId="password" bsSize="large">
                    <controlLabel>Password</controlLabel>
                    <FormControl
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      type="password"
                    />
                </formGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    )
}