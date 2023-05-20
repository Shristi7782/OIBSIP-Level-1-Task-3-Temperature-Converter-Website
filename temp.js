const calculateTemp = () => {
    const input = document.getElementById('temp').value;

    const tempchoosen = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempchoosen.selectedIndex].value;

    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    const converter = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = celToFah(input) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("result").innerHTML = converter(input) + "&#176; Celsius";
    }
}
