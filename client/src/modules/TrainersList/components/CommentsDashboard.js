import React, {useEffect, useState} from 'react';
import {Container, Form, Row} from "react-bootstrap";
import CommentsList from "./CommentsListComponents/CommentsList";
import CommentsFilterBox from "./CommentsListComponents/CommentsFilterBox";
import {useDispatch, useSelector} from "react-redux";
import {getAllTrainers} from "../store/trainersSlice";
import {getArraySpecialities} from "../utils/getArraySpecialities";
import {addCommentToTrainer, getAllComments} from "../store/commentsSlice";
import CommentCard from "./CommentsListComponents/CommentCard";
import ReactLoading from "react-loading";

const CommentsDashboard = ({trainer_id}) => {

    const dispatch = useDispatch();
    const comments = useSelector(state => state.comments);
    const user = useSelector(state => state.currentUser);
    const [addComment, setAddComment] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        dispatch(getAllComments(trainer_id))
    }, []);

    const handleAddComment = () =>
    {
        setAddComment(!addComment)
    }

    const addNewComment = (rating, textComment) =>
    {
        const comment = {
            rating: rating,
            textCommentary: textComment,
            user_id: user.user.id,
            trainer_id: trainer_id
        }


        dispatch(addCommentToTrainer(comment))


        setLoading(true)
        setTimeout(() => {
                setAddComment(false)
                setLoading(false)
            }, 1000

        )
    }

    return (
        <Container className="flex gap-32 mt-10 flex-col">

            {
                loading ?

                    <div className="w-1/2 flex justify-center">
                        <ReactLoading type={"spin"} width={50}/>
                    </div>
                    :
            <CommentsList comments={comments.comments} setAddComment={handleAddComment} addComment={addComment} user={user.user} addNewComment = {addNewComment}/>}
        </Container>
    );
};

export default CommentsDashboard;