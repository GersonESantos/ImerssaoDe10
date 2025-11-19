/**
 * Calcula a soma de dois números.
 *
 * @param {number} a - O primeiro número.
 * @param {number} b - O segundo número.
 * @returns {number} A soma de `a` e `b`.
 */
function soma(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new TypeError('Os parâmetros devem ser números.');
  }
  return a + b;
}

console.log(soma(5, 3)); // 8
