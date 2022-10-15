const wordRectangle = require('./pizza.passedExam');


describe ('String', () =>{
    test ('wordRectangle with string and a number return an array with number length strings', () =>{
        let input = 'pizza';
        let input2 = 3;
        let output = ['piz', 'izz', 'zza'];
    expect(wordRectangle(input,input2).toStrictEqual(output))
    })
})