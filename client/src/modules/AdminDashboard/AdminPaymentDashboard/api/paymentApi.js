import {$authHost} from "../../../../http";

export const fetchAllPayment = async () => {


    const { data } = await $authHost.get('users/all');
    console.log(data)
    return data;
}





export const fetchAllStatistics = async () => {


    const { data } = await $authHost.get('users/all');
    console.log(data)
    return data;
}