const app = require('./app');
//devolver un formato json
async function main(){
    await app.listen(3000)
    console.log('serve is running')
}

main();