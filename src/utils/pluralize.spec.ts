import { pluralize } from './pluralize';

describe('pluralize', () => {
    let words: [string, string, string];

    beforeEach(() => {
        words = ['остановка', 'ocтановки', 'остановок'];
    });

    it('0', () => {
        words = ['луна', 'луны', 'лун'];
        const result = pluralize(0, words);

        expect(result).toBe('нет лун');
    });
    it('1', () => {
        const result = pluralize(1, words);

        expect(result).toBe('1 остановка');
    });
    it('2', () => {
        const result = pluralize(2, words);

        expect(result).toBe('2 ocтановки');
    });
    it('5', () => {
        const result = pluralize(5, words);

        expect(result).toBe('5 остановок');
    });
    it('10', () => {
        const result = pluralize(10, words);

        expect(result).toBe('10 остановок');
    });
    it('20', () => {
        const result = pluralize(20, words);

        expect(result).toBe('20 остановок');
    });
    it('91', () => {
        const result = pluralize(91, words);

        expect(result).toBe('91 остановка');
    });
    it('112', () => {
        const result = pluralize(112, words);

        expect(result).toBe('112 остановок');
    });
    it('120', () => {
        const result = pluralize(120, words);

        expect(result).toBe('120 остановок');
    });
});
