import "./login.css"
import { Card, CardRoot, CardBody, CardHeader, Box, Image, Text, Center, Input, Button } from "@chakra-ui/react"
import Book from "../assets/book.jpg"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import { Toaster } from "../components/ui/toaster";
import React, { useEffect } from 'react';


const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState(); // username -> variable sama function getter, setUsername -> setter
    const [password, setPassword] = useState();
    
    useEffect(() => {
        const username = localStorage.getItem("usernameLS");

        if (username)
        {
            navigate("/dashboard");
        }
    }, []);


    const handleLogin = async () => {
        const url = "http://localhost/inventarisweb_php/proseslogin.php";
        const body = {
            username: username,
            password: password
        };
        
        try {
            const response = await axios.post(url, body);

            if (response.data.STATUS === "BERHASIL")
            {
                localStorage.setItem("usernameLS", response.data.DATA[0]["username"]);
                localStorage.setItem("namaLS", response.data.DATA[0]["nama"]);
                navigate("/dashboard");
                console.log("berhasil");
                TampilPesan("Info", "Selamat Datang")
            }

            else
            {
                navigate("/");
                console.log("gagal");
                TampilPesan("Info", "Username atau Password Salah")
            }
        }

        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <Box backgroundColor="teal" width="100dvw" height="100dvh" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <Toaster/>

                <CardRoot className="card" borderRadius="20px" backgroundColor="white" color="black" display="flex" flexDirection="column" alignItems="stretch" justifyContent="stretch">
                    <CardHeader>
                        <Center>
                            <Image width="150px" src={Book}></Image>
                        </Center>
                        <Text textAlign="center" fontWeight="bold">My Inventory</Text>
                    </CardHeader>

                    <CardBody gapY="10px" display="flex" flexDirection="column" alignItems="center" justifyContent="start" height="fit-content">
                        <Input placeholder="Username" type="text"
                            onChange={(e) => {
                                setUsername(e.target.value)
                            }}></Input>
                        <Input placeholder="Password" type="password"
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}></Input>
                        <Button backgroundColor="teal" color="white" borderRadius="10px" width="100%"
                            onClick={() => {
                                handleLogin()
                            }}>
                            <Text>LOGIN</Text>
                        </Button>
                    </CardBody>

                </CardRoot>
            </Box>
        </>
    );
};

export default Login;