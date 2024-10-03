function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            if (!Array.isArray(mixedArray)) {
                throw new Error('Input must be an array');
            }

            const result = mixedArray.filter(item => typeof item === 'string')
                           .map(word => word.toLowerCase());

            resolve(result);
        } catch (error) {
            reject(error.message);
        }
    });
}

// Example usage
const mixedArray = ['NOODLES', 10, true, 25, false, 'Pasta'];
lowerCaseWords(mixedArray).then(result => console.log(result));