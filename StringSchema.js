class StringSchema {
    constructor() {
        this.containsNumberFlag = false;
    }

    // Метод для добавления проверки на наличие числа в строке
    containsNumber() {
        this.containsNumberFlag = true;
        return this;
    }

    // Метод для проверки валидности данных
    isValid(value) {
        if (typeof value !== 'string') return false;

        if (this.containsNumberFlag) {
            return /\d/.test(value);
        }

        return true;
    }
}

export default StringSchema;
