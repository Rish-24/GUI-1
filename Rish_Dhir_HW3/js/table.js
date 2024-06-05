function StartTable() {
    document.getElementById('MinRowError').innerText = '';
    document.getElementById('MaxRowError').innerText = '';
    document.getElementById('MinColError').innerText = '';
    document.getElementById('MaxColError').innerText = '';
    document.getElementById('Table').innerHTML = ''; // Clear previous table

    var minRow = parseInt(document.getElementById("MinRow").value);
    var maxRow = parseInt(document.getElementById('MaxRow').value);
    var minCol = parseInt(document.getElementById('MinCol').value);
    var maxCol = parseInt(document.getElementById('MaxCol').value);

    console.log(minRow);
    console.log(maxRow);
    console.log(minCol);
    console.log(maxCol);

    var minRow = document.getElementById("MinRow").value;
    var maxRow = document.getElementById('MaxRow').value;
    var minCol = document.getElementById('MinCol').value;
    var maxCol = document.getElementById('MaxCol').value;

    var isValid = true;

    if (isNaN(minRow) || minRow < -50 || minRow > 50) {
        document.getElementById('MinRowError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
        isValid = false;
    }
    if (isNaN(maxRow) || maxRow < -50 || maxRow > 50) {
        document.getElementById('MaxRowError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
        isValid = false;
    }
    if (isNaN(minCol) || minCol < -50 || minCol > 50) {
        document.getElementById('MinColError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
        isValid = false;
    }
    if (isNaN(maxCol) || maxCol < -50 || maxCol > 50) {
        document.getElementById('MaxColError').innerText = 'Invalid input! Please enter a number between -50 and 50.';
        isValid = false;
    }

    if (!isValid) {
        document.getElementById('MinRow').value = '';
        document.getElementById('MaxRow').value = '';
        document.getElementById('MinCol').value = '';
        document.getElementById('MaxCol').value = '';
        return;
    }

    minRow = parseInt(minRow);
    maxRow = parseInt(maxRow);
    minCol = parseInt(minCol);
    maxCol = parseInt(maxCol);

    var MultiTable = "<table>";
    MultiTable += "<tr><th></th>";

    for (var i = 0; i < maxRow - minRow + 1; i++) {
        MultiTable += "<th>";
        MultiTable += Number(minRow) + i;
        MultiTable += "</th>";
    }
    MultiTable += "</tr>";

    for (var i = 0; i < maxCol - minCol + 1; i++) {
        MultiTable += "<tr>";
        for (var j = 0; j <= maxRow - minRow + 1; j++) {
            MultiTable += "<td>";
            if (j != 0) {
                MultiTable += (minCol + i) * (minRow + j - 1);
            } else {
                MultiTable += minCol + i;
            }
            MultiTable += "</td>";
        }
        MultiTable += "</tr>";
    }
    MultiTable += "</table>";
    document.getElementById('Table').innerHTML = MultiTable;
}