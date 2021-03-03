module.exports = function reverse (n) {
    let s = String(n);
    s = s.split('').reverse().join('');
    s = parseInt(s);
    return Math.abs(s);
}
