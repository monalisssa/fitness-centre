import {$authHost, $host} from "../../../http";

export const fetchWorkouts = async (id) => {
    const {data} =  await $authHost.get(`workouts/${id}`)
    return data
}


export const createNewWorkout = async (workout) => {

    const {data} =  await $authHost.post(`workouts/add_workout?trainer_id=${workout.trainer_id}&member_id=${workout.member_id}`, workout.workouts)
    return data
}

export const createNewWorkouts = async (workout) => {

    console.log(workout)
    const {data} =  await $authHost.post(`workouts/add_workouts?trainer_id=${workout.trainer_id}&member_id=${workout.member_id}`, workout.workouts)
    return data
}