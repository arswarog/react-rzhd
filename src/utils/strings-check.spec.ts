import { check } from "./strings-check"

describe('String check', () => {
    it('equal', () => {
        const result = check('qwerty', 'qwerty')

        expect(result).toBeTruthy()
    })
    it('different ', () => {
        const result = check('qWERty', 'qREWty')

        expect(result).toBeFalsy()
    })
    it('add symbol', () => {
        const result = check('quwerty', 'qwerty')

        expect(result).toBeTruthy()
    })
    it('remove symbol', () => {
        const result = check('qwerty', 'quwerty')

        expect(result).toBeTruthy()
    })
    it('replace symbol', () => {
        const result = check('qwirty', 'qwerty')

        expect(result).toBeTruthy()
    })
    it('more replacements', () => {
        const result = check('asdfasdf', 'aXdfasYf')

        expect(result).toBeFalsy()
    })
    it('different', () => {
        const result = check('1', '123')

        expect(result).toBeFalsy()
    })
    it('one symbol', () => {
        const result = check('1', '2')

        expect(result).toBeTruthy()
    })
    it('zero symbols', () => {
        const result = check('1', '')

        expect(result).toBeTruthy()
    })
})