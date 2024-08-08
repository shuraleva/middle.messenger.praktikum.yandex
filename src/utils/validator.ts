export function inputValidator(item: EventTarget) {
    const input = item as HTMLInputElement;
    if (!input.value) {
        return;
    }

    console.log(event);
    const message: string = validateInput(input.name, input.value);
    input.setCustomValidity(message);
    input.reportValidity();
};


export function validateInput(inputName: string, value: string): string {
    switch (inputName) {
        case "first_name":
        case "second_name": {
            const regex: RegExp = /^[A-ZА-Я][A-ZА-Яa-zа-я-\s]*$/;
            return !regex.test(value) ? "латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)" : "";
        }
        case "login": {
            const regex: RegExp = /^(?!.*[\s])(?!^\d*$)[a-zA-Z\d-_]{3,20}$/;
            return !regex.test(value) ?  "от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)" : "";
        }
        case "email": {
            const regex: RegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return !regex.test(value) ? "латиница, может включать цифры и спецсимволы вроде дефиса и подчёркивания, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы" : "";
        }
        case "password": {
            const regex: RegExp = /^(?=.*[A-ZА-Я])(?=.*\d)[A-Za-zА-Яа-я\d]{8,40}$/;
            return !regex.test(value) ? " от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра." : "";
        }
        case "phone": {
            const regex: RegExp = /^(\+)?\d{10,15}$/;
            return !regex.test(value) ? "от 10 до 15 символов, состоит из цифр, может начинается с плюса." : "";
        }
        case "message": {
            return value ? "" : "не должно быть пустым.";
        }
        default: {
            return "";
        }
    }
}
