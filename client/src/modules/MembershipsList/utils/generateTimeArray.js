export function generateTimeOptions(startHour, endHour) {
    const options = [];

    for (let hour = startHour; hour <= endHour; hour++) {
        const formattedHour = hour.toString().padStart(2, '0');
        options.push(
            <option key={hour} value={`${formattedHour}:00`}>
                {`${formattedHour}:00`}
            </option>
        );
    }

    return options;
}