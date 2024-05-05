import React from 'react';
import CommentCard from "./CommentCard";

import {Button, Row} from "react-bootstrap";
import {BiPlus} from "react-icons/bi";

const CommentsList = ({comments, addComment, setAddComment, user, addNewComment}) => {
    return (
        <Row className="w-2/3 mt-5">
            <div className="flex justify-between items-center mb-5">
                <h2 className="mb-3 text-2xl ">Отзывы</h2>
                <Button className="btn-light flex gap-2 items-center" onClick={() => setAddComment()}>
                    Добавить отзыв
                    <BiPlus size={20}/>
                </Button>
            </div>

            {
                addComment &&

                <CommentCard addComment={addComment} comment={user} addNewComment={addNewComment}/>

            }
            {
                comments.length === 0 ?
                    <div className="flex gap-4 justify-center items-center">
                        <p>Нет ни одного отзыва...</p>
                    </div>

                    :
                comments.map(comment =>
                    <CommentCard comment={comment}/>
                )
            }

        </Row>
    );
};

export default CommentsList;