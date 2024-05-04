import React, {useState} from 'react';

import RatingStars from "./RatingStars";
import {Button, Form} from "react-bootstrap";
import no_avatar_image from "../../../../static/no_avatar_image.jpg";
import {formatDate} from "../../utils/getArraySpecialities";

const CommentCard = ({comment, addComment, addNewComment}) => {


    const [rating, setRating] = useState(0)
    const [textComment, setTextComment] = useState('')
    const handleSetRating = (rating) =>
    {
        setRating(rating)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addNewComment(rating, textComment)

    }
    return (
        <div className={`bg-[rgb(23,23,23,.8)] p-4 flex flex-col gap-2 comment-card ${addComment ? 'mb-5 add-comment-card' : ''}`}>
            <div className="flex justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-12 rounded-full">
                        {
                            comment.avatar!=null ?
                                <img src={"data:image/png;base64," + comment.avatar} className="avatar-image">
                                </img>
                                :

                                <img src={no_avatar_image} className="avatar-image">
                                </img>
                        }
                    </div>
                    <div className="flex flex-col">
                        {comment.name}

                        {
                            !addComment && <span className="text-sm text-gray-500">
                            {formatDate(comment.date_comment)}</span>
                        }

                    </div>
                </div>

                {
                    !addComment ?  <RatingStars stars={comment.stars} type={false}/>
                        :

                        <RatingStars stars={0} type={true} handleSetRating={handleSetRating}/>
                }

            </div>


            {
                addComment ?
                    <Form className="flex flex-column gap-3" onSubmit={handleSubmit}>

                        <Form.Control as="textarea" placeholder="Введите комментарий..."
                                      className="bg-transparent border-none text-white mt-2 h-24"
                                      value={textComment}
                                      onChange={(event) => setTextComment(event.target.value)}
                        >

                        </Form.Control>

                        <div className="flex justify-end">
                            <Button className="btn-light" type="submit">Добавить</Button>
                        </div>

                    </Form>


                    :
                    <p className="text-sm">

                        {comment.text_commentary}
                    </p>
            }


        </div>
    );
};

export default CommentCard;