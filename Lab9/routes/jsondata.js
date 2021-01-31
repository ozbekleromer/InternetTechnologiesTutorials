var express = require('express');
var router = express.Router();

/* POST users listing. */
router.post('/', function (req, res, next) {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let operation = req.body.operation;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        result = "Num1 and Num2 must be a number!";
    } else {
        switch (operation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                if (num2 != 0)
                    result = num1 / num2;
                else
                    result = "Cannot divide by zero";
                break;
            default:
                result = "Wrong Operation";
        }
    }

    let jsonResult = JSON.stringify({
        num1: num1,
        num2: num2,
        operation: operation,
        result: result,
    });

    res.send(jsonResult);
});

module.exports = router;