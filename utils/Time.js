export function secondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60);
    const _seconds = seconds - (minutes * 60);
    const time = `${minutes}:${_seconds}`;
    return time;
}