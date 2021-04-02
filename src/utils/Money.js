class Money {
    static isValidFormat (value) {
        // Checks cases such as `1.000.000,20`, `1000,20`, `202,2`
        const TURKISH_CURRENCY_REGEX = /^[0-9]+(\.{1,}[0-9]{3}){0,}(\,{1}[0-9]{1,2}){0,1}$/

        return TURKISH_CURRENCY_REGEX.test(value);
    }

    static isValidCharacter (value) {
        // Only 0-9 or `,`, or `.`
        const VALID_TURKISH_CHARACTER_REGEX = /[0-9\,\.]/;

        return VALID_TURKISH_CHARACTER_REGEX.test(value);
    }

    static convertCommaToDot (value) {
        return parseFloat(value.replace(/\./g, '').replace(',', '.'));
    }
}

export default Money;
