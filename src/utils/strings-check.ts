export function check(a: string, b: string): boolean {
    if (Math.abs(a.length - b.length) > 1) {
        return false;
    }

    let diff: string = '';

    for (let i: number = 0; i < Math.min(a.length, b.length); i++) {
        if (a.charAt(i) != b.charAt(i)) {
            if (a.slice(0, i) + a.slice(i + 1, a.length) === b || b.slice(0, i) + b.slice(i + 1, b.length) === a) {
                return true;
            } else {
                diff += a.charAt(i);

                if (diff.length > 1) {
                    return false;
                }
            }
        }
    }

    return diff.length <= 1;
}
