document.getElementById('btn-hire').addEventListener('click', function () {
    document.getElementById('balance-id').style.color = "lightgreen";
    document.getElementById('forward-id').style.color = "lightgreen";
    document.getElementById('total-id').style.color = "red";
    const Value = getValueFromButton('price-id')
    const Name = getInfosFromId('name-id', 'position-id')[0];
    const Position = getInfosFromId('name-id', 'position-id')[1];
    setInfoIntoList(Name, 'name-list', Position, 'position-list');
    setValueintoWallet(Value, 'balance-id', 'forward-id', 'total-id');
})