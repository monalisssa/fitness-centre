import {$authHost, $host} from "../../../http";


export const getComments = async (trainer_id) => {
    const {data} =  await $host.get(`comments/get_all/${trainer_id}`)
    return data
}


export const addComment = async (comment) => {

    console.log(comment)
    const {user_id, trainer_id} = comment
    const { data } = await $authHost.post(`comments/add_comment?user_id=${user_id}&trainer_id=${trainer_id}`, {
        text_commentary: comment.textCommentary,
        stars: comment.rating,
    });
    return data
}




