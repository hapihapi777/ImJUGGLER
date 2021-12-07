'use strict';
{
  document.getElementById('go').addEventListener('click', () => {

    GetResult();
  });

  function GetResult() {
    const generation = parseInt(document.forms.generation.unit.value);
    console.log(generation);
    const tech = parseInt(document.forms.tech.cherry.value) / 10;
    console.log(tech);

    const play = parseInt(document.getElementById('play').value);
    const big = parseInt(document.getElementById('big').value);
    const reg = parseInt(document.getElementById('reg').value);
    const samai = parseInt(document.getElementById('samai').value);
    GetErr(play, "play");
    GetErr(big, "big");
    GetErr(reg, "reg");
    GetErr(samai, "samai");
    // big獲得枚数 252枚 or 240枚
    // reg 96枚
    // 1/35 2枚
    // 1/5.9886114698989
    // replay確率 1/7.298

    // テスト値
    // p 9033 b 37 r 43 d 2650 
    const p_all = play * 3;
    const b_medals = big * generation;
    const r_medals = reg * 96;
    const rep = (play / 7.298) * 3;
    const chr = (play / tech) * 2;

    const maisuu = p_all - b_medals - r_medals - rep - chr + samai;
    // const budoukakuritu = (maisuu / 8);
    const result = play / (maisuu / 8);

    const palette = document.getElementById('result');
    // palette.classList.remove('toumei');
    // if(GetErr(play, "play") && GetErr(big, "big") && GetErr(reg, "reg") && GetErr(samai, "samai")) {
      palette.textContent = ' 1 / ' + result;
    // }

    // console.log(p_all);
    // console.log(b_medals);
    // console.log(r_medals);
    // console.log(rep);
    // console.log("maisuu: " + maisuu);
    // console.log("result:" + result);
  }


  function GetErr(v, s) {
    // let result = true;
    if (v === "" || v === null) {
      console.log(s + "の入力欄エラー");
      // result = false;
    } else {
      console.log(v);

    }
  }
    // return result;
}