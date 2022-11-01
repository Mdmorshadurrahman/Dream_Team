function getValueFromButton(inputId) {
    const getButton = document.getElementById(inputId);
    const getButtonValue = parseInt(getButton.innerText);
    return getButtonValue;
}
function getInfosFromId(nameId, positionId) {
    const getName = document.getElementById(nameId);
    const getPosition = document.getElementById(positionId);
    const getNameValue = getName.innerText;
    const getPositionValue = getPosition.innerText;
    getNameValue.innerText = '';
    getPositionValue.innerText = '';
    return [getNameValue, getPositionValue];
}
function setInfoIntoList(nameIn, nameOut, positionIn, positionOut) {
    const nameId = document.getElementById(nameOut);
    const positionId = document.getElementById(positionOut);
    nameId.innerText = nameIn;
    positionId.innerText = '(' + positionIn + ')';
}
function setValueintoWallet(buttonIn, balance, forward, total) {
    const oldbalance = document.getElementById(balance);
    const oldforward = document.getElementById(forward);
    const oldtotal = document.getElementById(total);
    oldbalance.innerText = parseInt(oldbalance.innerText) - buttonIn;
    oldforward.innerText = parseInt(oldforward.innerText) + buttonIn;
    oldtotal.innerText = parseInt(oldtotal.innerText) + buttonIn;
}