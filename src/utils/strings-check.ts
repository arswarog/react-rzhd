export function check(a: string, b: string): boolean {
    if (Math.abs(a.length - b.length) > 1) {
        return false;
    }

    if (a.length < b.length) {
        const t = a;

        a = b;
        b = t;
    }

    let counter = 0;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (a[i] === b[i - 1]) return true;

            counter++;
        }
    }

    if (counter > 1) return false;

    return true;
}
