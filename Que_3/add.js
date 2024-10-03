const fs = require('fs').promises;
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

async function createLogFiles() {
    try {
        await fs.mkdir(logsDir);  
        console.log('Logs directory created.');
    } catch (error) {
        console.log('Logs directory already exists.');
    }

    process.chdir(logsDir);  

    for (let i = 1; i <= 10; i++) {
        const fileName = `log${i}.txt`;
        await fs.writeFile(fileName, `This is log file #${i}.`);  
        console.log(`Created file: ${fileName}`);
    }
}

createLogFiles();
