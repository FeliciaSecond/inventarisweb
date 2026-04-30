import "./login.css"
import { Card, Image } from "@chakra-ui/react"
import Book from "./assets/book.jpg"

const Login = () => {
    return (
        <>
            <main>
                <Card.Root>
                    <Card.Header>
                        <Image src={Book}></Image>
                    </Card.Header>

                    <Card.Body>
                        <p>test body</p>
                    </Card.Body>

                    <Card.Footer>

                    </Card.Footer>

                </Card.Root>
            </main>
        </>
    );
};

export default Login;