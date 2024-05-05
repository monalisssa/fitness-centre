import {$authHost, $host} from "../../../http";


export const getTrainers = async () => {
    const {data} =  await $host.get('trainers/get_all')
    return data
}


export const createNewTrainer = async (trainer) => {
    const {data} =  await $authHost.post('trainers/add_trainer', trainer)
    return data
}





