import {$authHost, $host} from "../../../http";


export const registration = async (user) => {
    const {data} =  await $host.post('users/registration?role_id=2', user)
    localStorage.setItem('token', data.token)
    return data.token

}

export const login = async (user) => {

    const {data} =  await $host.post('users/authenticate', user)
    sessionStorage.setItem('token', data.token)
    return data.token
}


export const check = async () => {
    const {data} = await $authHost.get('users/refresh_token' )
    if(data.token !== "") {
        sessionStorage.setItem('token', data.token)
        return data.token
    }
    else return null
}


export const getInfo = async (user_id) => {
    console.log(user_id)
    const {data} = await $host.get(`users/${user_id}` )
    return data
}


export const editAvatar = async (avatar_obj) => {

    const form_data = new FormData()
    form_data.append('avatar', avatar_obj.avatar);
    const { data } = await $authHost.put('users/edit_avatar/' + avatar_obj.user_id, form_data, {
        headers: {
            'Content-Type': 'multipart/form-data',
        }
    });

    return data;
}


export const editUserInf = async (user) => {


    const { data } = await $authHost.put('users/edit_user/' + user.id, user);
    return data;
}

export const fetchEditStatus = async (edit_user) => {

    const { data } = await $authHost.put(`users/edit_status/${edit_user.id}?status=${edit_user.status}`);
    return data;
}

export const fetchAllUsers = async () => {


    const { data } = await $authHost.get('users/all');
    console.log(data)
    return data;
}
