const fs = require('fs').promises;
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

async function removeLogFiles() {
    try {
        const files = await fs.readdir(logsDir);
        for (const file of files) {
            const filePath = path.join(logsDir, file);
            console.log(`Deleting file: ${file}`);
            await fs.unlink(filePath);  
        }
        await fs.rmdir(logsDir);  
        console.log('Logs directory removed.');
    } catch (error) {
        console.log('Logs directory does not exist.');
    }
}

removeLogFiles();
