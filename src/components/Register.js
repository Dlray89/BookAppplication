import React from "react";
import { TextField, Button, Card, CardContent } from "@material-ui/core"




class Registration extends React.Component{
    constructor(props){
        super(props)
    

    this.state = {
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        passwordConfirmation: '',

    }

}

changeHandler = event => {
    
    this.setState({[event.target.name] : event.target.value})
}

submitHandler = event => {
    event.preventDefault()
    console.log(event)
}

    render(){
        const  { firstName, lastName, userName, password, passwordConfirmation} = this.state
        return(
           

            
            <div>
                 <Card>
                <CardContent>
                <form onSubmit={this.submitHandler}>
               <TextField aria-invalid="false" name="firsrName" placeholder="Your First Name"  type="text" id={firstName} onChange={this.changeHandler}  />
<br />
               <TextField aria-invalid="false" name="lastName" placeholder="Your Last Name"  type="text" id={lastName} onChange={this.changeHandler} />
<br />
               <TextField aria-invalid="false" name="userName" placeholder="Create a Username" type="text" id={userName} onChange={this.changeHandler} />
               <br />
               <TextField aria-invalid="false" type="password" placeholder="Create a password" name="password" id={password} onChange={this.changeHandler}   />
               <br />
               <TextField aria-invalid="false" type="passwordConfirmation" placeholder=" Confirm your password" name="passwordConfirmation" id={passwordConfirmation} onChange={this.changeHandler}   />
               <br />

               <Button type="submit">Register</Button>
               <Button type="reset">Reset</Button>
               </form>
                   </CardContent>
            </Card>
            </div>
        );
    }
}

export default Registration;