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
    let warning = false;

    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) {
            if (a[i] === b[i - 1] && !warning) {
                i++;
                // warning = true;
            } else counter++;
        }
    }

    if (counter > 1) return false;

    return true;
}
