const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'resolved after 500ms!' });
        }, 500);
    });
};

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('rejected after 500ms!'));
        }, 500);
    });
};

resolvedPromise()
    .then((result) => {
        console.log('Resolved Promise:', result);  
    })
    .catch((error) => {
        console.error('Error:', error);
    });

rejectedPromise()
    .then((result) => {
        console.log('Resolved Promise:', result);
    })
    .catch((error) => {
        console.error('Rejected Promise Error:', error.message);  
    });