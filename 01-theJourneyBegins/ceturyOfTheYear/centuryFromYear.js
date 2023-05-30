// Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

// Example

// For year = 1905, the output should be
// solution(year) = 20;
// For year = 1700, the output should be
// solution(year) = 17.

// Obtener el input del usuario
const input = document.getElementById('input');

// Obtener el boton
const button = document.getElementById('button');

// Obtener el resultado
const result = document.getElementById('console');

// Obtener el valor del input
const getValue = (e) => {
    e.preventDefault();
    const value = input.value;
    result.innerHTML = centuryFromYear(value);
}

// Agregar el evento click al boton
button.addEventListener('click', getValue);

// Funcion para obtener el siglo
const centuryFromYear = (year) => {
    return `<p>El año ${year} pertenece al siglo ${Math.ceil(year / 100)}</p>`;
}

console.log(centuryFromYear(1905)); // 20