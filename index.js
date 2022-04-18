const fs = require('fs');

async function main(params)  {
    try {
        console.log('run');
        const date = new Date(Date.now()).toLocaleString();
        console.log('d', date);


        fs.writeFileSync('date.txt', date);
    } catch (e) {
        console.error('crashed',e);
    }
}

main();