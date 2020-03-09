import React from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import { Form, Formik, ErrorMessage } from "formik";
import { TextField, Button, Card, CardContent } from "@material-ui/core"



const Login = (props) => (
    <div>
        <Formik
        initialValues={{
            email: '',
            password: ''
        }}
        validate={values => {
            const errors = {};
            if (!values.email){
                errors.email = "required";
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
                errors.email = "Invaild Email address";
            }
            return errors
        }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }, 400)
        }}
        >
        {({ isSubmitting }) => (
            <Card style={{width: "40%", margin: "0 auto", textAlign: "center"}}>
                <CardContent>

              
            <Form>
                <TextField name="email" type="email" placeholder="Enter your Email"  />
                <ErrorMessage name="email" component="div" />
                <br />
                <TextField name="password" type="password"  />
                <ErrorMessage name="password" component="div" />
                <br />
                <Button onClick={() => {
                    auth.login(() => {
                        props.history.push("/dashboard");
                    })
                }} type="submit" disabled={isSubmitting}>Login</Button>
                <Link to="/register">Need an account? Register</Link>
            </Form>
              </CardContent>
            </Card>

        )}
        </Formik>
    </div>
)

export default Login;