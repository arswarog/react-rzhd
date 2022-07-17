export function check(a: string, b: string): boolean {
    if (Math.abs(a.length - b.length) > 1) {
        return false;
    }

    let count: number = 0;

    for (let i: number = 0; i < Math.min(a.length, b.length); i++) {
        if (a.charAt(i) != b.charAt(i)) {
            if (a.slice(0, i) + a.slice(i + 1, a.length) === b || b.slice(0, i) + b.slice(i + 1, b.length) === a) {
                return true;
            } else {
                count++;

                if (count > 1) {
                    return false;
                }
            }
        }
    }

    return count <= 1;
}
