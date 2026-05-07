import "./login.css"
import { Card, CardRoot, CardBody, CardHeader, Box, Image, Text, Center, Input, Button } from "@chakra-ui/react"
import Book from "../assets/book.jpg"

const Login = () => {
    return (
        <>
            <Box backgroundColor="teal" width="100dvw" height="100dvh" display="flex" flexDirection="row" justifyContent="center" alignItems="center">
                <CardRoot className="card" borderRadius="20px" backgroundColor="white" color="black" display="flex" flexDirection="column" alignItems="stretch" justifyContent="stretch">
                    <CardHeader>
                        <Center>
                            <Image width="150px" src={Book}></Image>
                        </Center>
                        <Text textAlign="center" fontWeight="bold">My Inventory</Text>
                    </CardHeader>

                    <CardBody gapY="10px" display="flex" flexDirection="column" alignItems="center" justifyContent="start" height="fit-content">
                        <Input placeholder="Username" type="text"></Input>
                        <Input placeholder="Password" type="password"></Input>
                        <Button backgroundColor="teal" color="white" borderRadius="10px" width="100%">
                            <Text>LOGIN</Text>
                        </Button>
                    </CardBody>

                </CardRoot>
            </Box>
        </>
    );
};

export default Login;