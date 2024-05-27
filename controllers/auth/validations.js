export const validateLogin = async (email, password) => {
    if (email === '') {
        return 'Въведете имейл';
    }
    if (password === '') {
        return 'Въведете парола';
    }
}

export const validateRegister = async (email, password, rePassword) => {
    if (email === '') {
        return 'Въведете имейл';
    }
    if (password === '') {
        return 'Въведете парола';
    }
    if (password.length < 8) {
        return 'Въведете с повече от 8 символа';
    }
    if (rePassword === '') {
        return 'Въведете потвърди паролата'
    }
    if (password !== rePassword) {
        return 'Паролите не съвпадат'
    }
}

