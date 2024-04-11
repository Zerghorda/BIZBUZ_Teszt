import { bizBuz, seged } from "./bizzbuzz.js";
export function tesztBizBuz() {
  const tesztLISTA = [
    { n: 0, vart: "Nincs ilyen sorozat!" },
    { n: -1, vart: "Nincs ilyen sorozat!" },
    { n: 1, vart: "1" },
    { n: 2, vart: "1,BIZ" },
    { n: 3, vart: "1,BIZ,BUZ" },
    { n: 10, vart: "1,BIZ,BUZ,BIZ,5,BIZBUZ,7,BIZ,BUZ,BIZ" },
  ];
  tesztLISTA.forEach((tesztEset, index) => {
    let eredmeny = bizBuz(tesztEset.n);
    console.assert(
      tesztEset.vart === eredmeny,
      "%o",
      `n: ${tesztEset.n} vart: ${tesztEset.vart} kapott: ${eredmeny}`,
      `Híbás a ${index} tesztnél!`
    );
  });
}
export function tesztSeged(n) {
  const tesztLISTA = [
    { n: 1, vart: 1 },
    { n: 2, vart: "BIZ" },
    { n: 3, vart: "BUZ" },
    { n: 6, vart: "BIZBUZ" },
  ];
  tesztLISTA.forEach((tesztEset, index) => {
    let eredmeny = seged(tesztEset.n);
    console.assert(
      tesztEset.vart === eredmeny,
      "%o",
      `n: ${tesztEset.n} vart: ${tesztEset.vart} kapott: ${eredmeny}`,
      `Híbás a ${index} tesztnél!`
    );
  });
}
