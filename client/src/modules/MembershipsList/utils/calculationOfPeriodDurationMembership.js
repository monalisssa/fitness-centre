export function getDurationString(days) {
    if (days === 1) return '1 день';
    if (days < 7) return `${days} дня`;
    if (days === 7) return '1 неделя';
    if (days < 30) return `${Math.floor(days / 7)} недели`;
    if (days === 30) return '1 месяц';
    return `${Math.floor(days / 30)} месяц${days >= 60 ? 'а' : ''}`;
}