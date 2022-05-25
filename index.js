import csv from 'csvtojson';
import { writeFile } from 'fs';

const fileJson = await csv().fromFile('./input.csv');
const arrFileJson = [...fileJson];

writeFile('output.json',JSON.stringify(arrFileJson), (err) => {
    if(err){
        throw err
    }
    console.log('Arquivo convertido com sucesso !');
})

