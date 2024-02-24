function sum(a, b) {
	const firstNumber = Number(a);
	const secondNumber = Number(b);

	if (isNaN(firstNumber) || isNaN(secondNumber)) {
		throw new Error("The input value must be a number");
	}

	return firstNumber + secondNumber;
}

try {
	console.log(sum(12, 3));
	console.log(sum(true, 1));
	console.log(sum("a", "b"));
} catch (err) {
	console.log("Wait! an error has ocurred");
    console.log(`Error: ${err.message}`)
} finally {
	console.log('Program Ended')
}
