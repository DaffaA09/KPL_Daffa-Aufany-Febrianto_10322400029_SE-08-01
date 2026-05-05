export function hitungHuruf(teks) {
  const hurufSaja = teks.match(/[a-zA-Z]/g);
  
  return hurufSaja ? hurufSaja.length : 0;
}


export function hitungKata(teks) {
  const kata = teks.match(/\b[a-zA-Z]+\b/g);

  return kata ? kata.length : 0;
}