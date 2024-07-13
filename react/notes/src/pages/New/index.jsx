import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";

import { Container, Form } from "./styles";

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Note</h1>
                        <a href="">Back</a>
                    </header>

                    <Input placeholder="Title" />
                    <Textarea placeholder="Notes"/>      

                </Form>
            </main>
        </Container>
    );
}