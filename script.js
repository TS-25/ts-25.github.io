function calculateEMI() {
    // Get input values
    const principal = parseFloat(document.getElementById('loanAmount').value);
    const annualInterestRate = parseFloat(document.getElementById('interestRate').value);
    const tenureInYears = parseFloat(document.getElementById('tenure').value);

    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(tenureInYears) || principal <= 0 || annualInterestRate <= 0 || tenureInYears <= 0) {
        alert("Please enter valid positive values.");
        return;
    }

    // Convert annual interest rate to monthly and tenure to months
    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const tenureInMonths = tenureInYears * 12;

    // EMI Calculation formula: EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]
    const emi = (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenureInMonths)) / 
                (Math.pow(1 + monthlyInterestRate, tenureInMonths) - 1);

    // Display the result
    document.getElementById('emiResult').innerHTML = `EMI: ₹${emi.toFixed(2)}`;
}
