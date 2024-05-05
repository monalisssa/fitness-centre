export function formatWorkoutDate(input) {
    var inputDate = new Date(input);

    var day = ("0" + inputDate.getUTCDate()).slice(-2);
    var month = ("0" + (inputDate.getUTCMonth() + 1)).slice(-2);
    var year = inputDate.getUTCFullYear();

    var output = day + "." + month + "." + year;

    return output;
}
