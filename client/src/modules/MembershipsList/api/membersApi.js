import {$authHost, $host} from "../../../http";

export const getUserMembers = async (user_id) => {
    const {data} =  await $authHost.get(`members/get_all/${user_id}`)
    return data
}


export const addUserMember = async (member) => {

    const {user_id, trainer_id, membership_id} = member
    const { data } = await $authHost.post(`members/add_member?user_id=${user_id}&trainer_id=${trainer_id}&membership_id=${membership_id}`, {
        joining_date: member.joining_date,
    });
    return data

}
