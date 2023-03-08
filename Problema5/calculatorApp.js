var nr1 = 0;
var nr2 = 0;
var result = 0;

function printValue(divId, value) {
    $("#" + divId).html(value);
}
function getNumber1()
{
    nr1 = parseInt($("#nr1").val());
}
function getNumber2()
{
    nr2 = parseInt($("#nr2").val());
}
printValue("result", '0');

$("#nr1").on('input', getNumber1);
$("#nr2").on('input', getNumber2);
$("#plus").on('click', plus);
$("#minus").on('click', minus);
$("#multiply").on('click', multiply);
$("#divide").on('click', divide);
$("#rest").on('click', rest);
$("#equal").on('click', equal);

function plus() {
    result = nr1 + nr2;

}
function minus() {
    result = nr1 - nr2;

}
function multiply() {
    result = nr1 * nr2;

}
function divide() {
    result = nr1 / nr2;

}
function rest() {
    result = nr1 % nr2;

}
function equal() {

    printValue("result", result);
}