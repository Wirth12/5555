import ObjectValidator from './src/ObjectSchema.js';
import ArrayValidator from './src/ArraySchema.js';
import StringValidator from './src/StringSchema.js';

class Validator {
    string() {
        return new StringValidator();
    }
    
    array() {
        return new ArrayValidator();
    }
    
    // Сделаем объект методом экземпляра, а не статическим
    object() {
        return new ObjectValidator();
    }
}

export default Validator;
