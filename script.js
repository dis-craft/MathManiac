function calculateDerivative() {
    const variable = document.getElementById("variable").value;
    const expression = document.getElementById("expression").value;

    try {
        const expr = math.parse(expression);
        const derivative = math.derivative(expr, variable).toString();
        document.getElementById("result").textContent = `Derivative: ${derivative}`;
    } catch (error) {
        document.getElementById("result").textContent = "Error: Invalid input";
    }
}