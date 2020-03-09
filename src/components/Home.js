import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Button } from "@material-ui/core";
import "./home.css"


function Home() {
    return (
        <div>
            <Box className="box">
                <Container className="mainContainer">
                    <h1>Welcome to BookCLICKS</h1>
                    <p>Here is where you can see the top books by just one click of a button.</p>
                    <Button><Link to={"/login"}>Login</Link></Button>
                    <Button><Link to={"/register"}>Register</Link></Button>
                </Container>
            </Box>

        </div>
    )
}
export default Home