class StringValidator {
    constructor() {
        this.checks = [];
    }

    isValid(value) {
        if (typeof value !== 'string') {
            return false;
        }

        for (const check of this.checks) {
            if (!check(value)) {
                return false;
            }
        }

        return true;
    }

    containsNumber() {
        this.checks.push((value) => /\d/.test(value));
        return this;
    }
}

export default StringValidator;
