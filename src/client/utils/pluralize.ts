export function pluralize(count: number, words: [string, string, string]): string {
    if (!count) {
        return 'нет ' + words[2];
    }

    const lastNum = count % 10;

    if (lastNum === 0) {
        return count + ' ' + words[2];
    }

    if (count % 100 > 10 && count % 100 < 20) {
        return count + ' ' + words[2];
    }

    if (lastNum === 1) {
        return count + ' ' + words[0];
    }

    if (lastNum < 5) {
        return count + ' ' + words[1];
    }

    return count + ' ' + words[2];
}
