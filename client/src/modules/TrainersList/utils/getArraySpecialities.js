
export const getArraySpecialities = (trainers) =>
{
    const array_specilities = new Set()
    trainers.forEach(trainer => trainer.specialities.forEach(
            speciality => array_specilities.add(speciality.name)))
    return Array.from(array_specilities)

}

export const getArrayExperienceYears = (trainers) =>
{
    const array_experience_years = new Set()
    trainers.forEach(trainer => {

        array_experience_years.add(trainer.experience)
    }
    )

    return Array.from(array_experience_years)

}


export const formatYears = (years) => {
    if (years === 0) {
        return "лет";
    }

    const lastDigit = years % 10;
    const lastTwoDigits = years % 100;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        return "лет";
    }

    if (lastDigit === 1) {
        return "год";
    }

    if (lastDigit >= 2 && lastDigit <= 4) {
        return "года";
    }

    return "лет";
};

export const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' };
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', options);
}

export const formatDateWithoutTime = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric'};
    const date = new Date(dateString);
    return date.toLocaleString('ru-RU', options);
}
