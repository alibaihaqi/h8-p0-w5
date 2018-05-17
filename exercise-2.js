function  naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];

  var output = [];


  if (arrPenumpang.length === 0) {
    return output;
  }
  else {
    for (var i = 0; i <= arrPenumpang.length - 1; i++) {
        var object = {};

        object.penumpang = arrPenumpang[i][0];
        object.naikDari = arrPenumpang[i][1];
        object.tujuan = arrPenumpang[i][2];
        object.bayar = (2000 * (rute.indexOf(arrPenumpang[i][2]) - rute.indexOf(arrPenumpang[i][1])));
        output.push(object);    
    }
  }
  return output;
  //your code here
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]