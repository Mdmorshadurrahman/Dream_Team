
const selectionBoard = (id) => {
    document.getElementById('balance-id').style.color = "lightgreen";
    document.getElementById('forward-id').style.color = "lightgreen";
    document.getElementById('total-id').style.color = "red";
    const Value = getValueFromButton('price-id' + id)
    const Name = getInfosFromId('name-id' + id, 'position-id' + id)[0];
    const Position = getInfosFromId('name-id' + id, 'position-id' + id)[1];
    setInfoIntoList(Name, 'name-list', Position, 'position-list');
    setValueintoWallet(Value, 'balance-id', 'forward-id', 'total-id');

}