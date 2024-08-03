document.getElementById('tempForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;

    let celsius, fahrenheit, kelvin;

    switch (unit) {
        case 'celsius':
            celsius = temp;
            fahrenheit = (temp * 9/5) + 32;
            kelvin = temp + 273.15;
            break;
        case 'fahrenheit':
            celsius = (temp - 32) * 5/9;
            fahrenheit = temp;
            kelvin = (temp - 32) * 5/9 + 273.15;
            break;
        case 'kelvin':
            celsius = temp - 273.15;
            fahrenheit = (temp - 273.15) * 9/5 + 32;
            kelvin = temp;
            break;
    }

    document.getElementById('results').innerHTML = `
        <p>${temp} ${unit.charAt(0).toUpperCase() + unit.slice(1)} is equivalent to:</p>
        <p>${celsius.toFixed(2)} Celsius</p>
        <p>${fahrenheit.toFixed(2)} Fahrenheit</p>
        <p>${kelvin.toFixed(2)} Kelvin</p>
    `;
});