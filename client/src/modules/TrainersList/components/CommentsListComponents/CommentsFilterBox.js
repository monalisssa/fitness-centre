import React from 'react';
import {Button, Container, Form} from "react-bootstrap";


const CommentsFilterBox = () => {
    return (
            <Container className="w-3/12 mt-20 ">

                <Form className="flex flex-col gap-5 w-full">
                    <div className="flex flex-col gap-3">
                        <h4>Фильтры</h4>
                        <Form.Select aria-label="Default select example" className="bg-zinc-800 text-white">
                            <option value={""}>Любой опыт работы</option>
                            <option value={""}>Любой опыт работы</option>
                        </Form.Select>
                    </div>


                    <Button className="btn" >
                        Сбросить фильтры
                    </Button>


                </Form>
            </Container>

    );
};

export default CommentsFilterBox;