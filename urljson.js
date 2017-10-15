'use strict'
const convertExcel = require('excel-as-json').processFile;

function fixJson(error, file_data){
    // 'file_data' will contain the converted data, or 'error' will contain the error occured
}

convertExcel('Rent.xls', 'test.json', {sheet:"1"}, fixJson);