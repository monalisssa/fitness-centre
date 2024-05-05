import {$authHost, $host} from "../../../http";


export const getMemberships = async () => {
    const {data} =  await $host.get('memberships/get_all')
    return data
}


export const fetchAddMembership = async (membership) => {

    const { data } = await $authHost.post(`memberships/add_membership`, membership);
    return data
}




