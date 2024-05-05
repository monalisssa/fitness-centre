
export function calculateTrainingDates(numDays, weeklyFrequency, startDate, workoutTime) {
    const trainingDates = [];
    const millisecondsPerDay = 24 * 60 * 60 * 1000; // Количество миллисекунд в одном дне

    // Перебираем все дни в пределах заданного количества дней
    for (let day = 0; day < numDays; day++) {
        const currentDateTime = new Date(startDate.getTime() + day * millisecondsPerDay);

        // Проверяем, является ли текущий день тренировочным днем (не воскресенье и не суббота)
        if (currentDateTime.getDay() !== 0 && currentDateTime.getDay() !== 6) {
            const workoutDate = `${currentDateTime.getFullYear()}-${(currentDateTime.getMonth() + 1).toString().padStart(2, '0')}-${currentDateTime.getDate().toString().padStart(2, '0')}`;


            trainingDates.push({ workout_date: workoutDate, workout_time: workoutTime });
        }
    }

    return trainingDates;
}