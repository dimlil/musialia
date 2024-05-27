export const validateCreate = async (name, manufacturer, description, type, price, quantity) => {
    if (name === '') {
        return 'Въведете име на продукта';
    }
    if (manufacturer === '') {
        return 'Въведете производител';
    }
    if (description === '') {
        return 'Въведете описание';
    }
    if (type === '') {
        return 'Въведете тип';
    }
    if (price === '') {
        return 'Въведете цена';
    }
    if (quantity === '') {
        return 'Въведете производител';
    }
}

