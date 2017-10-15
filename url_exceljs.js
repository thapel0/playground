'use strict'

const Excel = require('exceljs');
const workbook = new Excel.Workbook();
const filename = 'Rent.xls';
workbook.xlsx.readFile(filename)
    .then(function() {
        // use workbook
        const worksheet = workbook.getWorksheet(1);
        //const col = worksheet.columns(1)
        //const nameCol = worksheet.getColumn('A');
        worksheet.eachRow({ includeEmpty: false }, function(row, rowNumber) {
            console.log("Row " + rowNumber + " = " + JSON.stringify(row.values));
      });

        
    });
 
