const isPalendrom = () => {
    const userStr = prompt('Введіть рядок');
    const normUserData = userStr.toLowerCase()
        .replace(/[^\w\s]|_/g, ' ')
        .split(' ').join('')
    console.log(normUserData);
};

isPalendrom();