let object = { 
  '1': '01',
  '2': '02',
  '3': '0',
  '4': '0',
  '5': '0',
  '6': '0',
  '7': '0',
  '8': '0',
  '9': '0',
  '10': '0',
  '11': '0',
  '12': '0',
  '13': '0',
  '14': '0',
  '15': '0',
  '16': '0',
  '17': '0',
  '18': '0',
  '19': '0',
  '20': '0',
  '21': '0',
  '22': '0',
  '23': '0',
  '24': '0',
  '25': '0',
  '26': '0',
  '27': '0',
  '28': '0' 
}

//console.log(object)

let orderForm = [];
let tempForm = Object.entries(object);
    tempForm.forEach(function(element) {
      if (element[1] > 0) {
        orderForm.push({"itemID":element[0], "Qty": element[1]});
    }
});

console.log("-------",orderForm)
