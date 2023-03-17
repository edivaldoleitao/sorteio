function readCsvFile(params) {
    var fileCsv = document.querySelector('#csv').files

    if (fileCsv.length > 0) {
        
        var file = fileCsv[0]
        var reader = new FileReader();
        reader.readAsText(file)

        reader.onload = function (event) {
            var csvData = event.target.result
            debugger
        }
        
    }
    debugger
}