export function bizBuz(n) {
  let eredmeny = "";

  if (n <= 0) {
    eredmeny = "Nincs ilyen sorozat!";
  } else {
    for (let index = 1; index <= n; index++) {
      if (index === n) {
        eredmeny += seged(index);
      } else {
        eredmeny += seged(index) + ",";
      }
    }
  }

  return eredmeny;
}
export function seged(n) {
  let eredmeny = "";
  if (n % 2 === 0 && n % 3 === 0) {
    eredmeny = "BIZBUZ";
  } else if (n % 2 === 0) {
    eredmeny = "BIZ";
  } else if (n % 3 === 0) {
    eredmeny = "BUZ";
  } else {
    eredmeny = n;
  }
  return eredmeny;
}
