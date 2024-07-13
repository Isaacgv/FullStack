import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera} from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Avatar } from "./styles";

export function Profile() {
    return (
        <Container> 
            <header>
                <a href="/">
                    <FiArrowLeft />
                </a>
            </header>

            <Form>

                <Avatar>
                    <img src="https://github.com/Isaacgv.png" alt="User photo" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input type="file" id="avatar" />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

                <Input 
                    placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input 
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Input 
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Save"/>
            </Form>

        </Container>   
    )
}