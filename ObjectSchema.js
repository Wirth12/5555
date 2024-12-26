class ObjectValidator {
    constructor(data = {}) {
        this.data = data;
    }

    shape(schema) {
        this.validations = schema;
        return this;
    }

    isValid() {
        return this.validate(this.data, this.validations);
    }

    validate(data, validations) {
        if (typeof data !== 'object' || data === null) {
            return { valid: false, message: 'Input is not a valid object.' };
        }

        for (const key in validations) {
            if (validations.hasOwnProperty(key)) {
                const validator = validations[key];
                const value = data[key];

                if (typeof validator === 'function') {
                    if (!validator(value)) {
                        return { valid: false, message: `Field "${key}" failed validation.` };
                    }
                } else if (typeof validator === 'object') {
                    const nestedValidator = new ObjectValidator(value);
                    nestedValidator.shape(validator);
                    const result = nestedValidator.isValid();
                    if (!result.valid) {
                        return { valid: false, message: `Field "${key}": ${result.message}` };
                    }
                }
            }
        }

        return { valid: true, message: 'All fields passed validation.' };
    }
}

export default ObjectValidator;
