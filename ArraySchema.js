class ArraySchema {
    constructor() {
        this.containsNumberFlag = false;
        this.customValidation = null;
    }

    containsNumber() {
        this.containsNumberFlag = true;
        return this;
    }

    custom(fn) {
        this.customValidation = fn;
        return this;
    }

    // Метод для проверки валидности данных
    isValid(value) {
        if (!Array.isArray(value)) return false;

        if (this.containsNumberFlag) {
            return value.every(item => typeof item === 'string' && /\d/.test(item));
        }

        if (this.customValidation) {
            return value.every(item => this.customValidation(item));
        }

        return true;
    }
}

export default ArraySchema;
