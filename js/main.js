'use strict';
{
  // 関数
  function GetErr(v, s) {
    let result = true;
    if (isNaN(v) || v === "" || v === null) {
      console.log(s + "の入力欄エラー");
      result = false;
    } else {
      console.log(v);
    }
    return result;
  }

  // 
  let minus = false;
  // console.log(minus);

  let caution = document.getElementById('caution');

  const plus_b = document.getElementById('plus_b');
  const minus_b = document.getElementById('minus_b');

  plus_b.disabled = true;
  plus_b.addEventListener('click', () => {
    minus = false;
    caution.textContent = "※差枚数の入力欄通常モード";
    plus_b.disabled = true;
    minus_b.disabled = false;
    console.log(minus);
  })

  minus_b.addEventListener('click', () => {
    minus = true;
    caution.textContent = "※正数を入れてもマイナスになります";
    minus_b.disabled = true;
    plus_b.disabled = false;
    console.log(minus);
  })

  document.getElementById('go').addEventListener('click', () => {
    const generation = parseInt(document.forms.generation.unit.value);
    console.log(generation);
    const tech = parseInt(document.forms.tech.cherry.value) / 10;
    console.log(tech);

    const play = parseInt(document.getElementById('play').value);
    const big = parseInt(document.getElementById('big').value);
    const reg = parseInt(document.getElementById('reg').value);
    let samai = parseInt(document.getElementById('samai').value);
    if (minus && samai > 0) samai = samai * -1;

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
    
    const result = play / (maisuu / 8);
    
    const palette = document.getElementById('result');
    const inp_p =GetErr(play, "play");
    const inp_b =GetErr(big, "big");
    const inp_r =GetErr(reg, "reg");
    const inp_s =GetErr(samai, "samai");
    // palette.classList.remove('toumei');
    if (inp_p && inp_b && inp_r && inp_s) {
      palette.textContent = ' 1 / ' + result;
    }

    // console.log(p_all);
    // console.log(b_medals);
    // console.log(r_medals);
    // console.log(rep);
    // console.log("maisuu: " + maisuu);
    // console.log("result:" + result);

    // GetResult();
  });
}