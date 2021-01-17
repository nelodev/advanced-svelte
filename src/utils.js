export function pick_random(array) {
    const index = Math.floor(array.length * Math.random());
    return array[index];
}

export function sleep(ms) {
    return new Promise((fulfill) => {
        setTimeout(fulfill, ms);
    });
}

export function load_image(src) {
    return new Promise((fulfill, reject) => {
        const img = new Image();
        img.onload = () => fulfill(img);
        img.onerror = reject;
        img.src = src;
    });
}
