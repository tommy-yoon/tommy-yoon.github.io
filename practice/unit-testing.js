function testee(operand1, operand2) {
    return operand1 + operand2;
}


function testTestee() {
    const expected = 7;
    const actual = testee(5, 2);

    //assert
    if(expected == actual) {
        console.log("PASSED");
    } else {
        console.log("FAiLED");
    }
}
