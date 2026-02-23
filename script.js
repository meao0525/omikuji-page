// Omikuji logic (vanilla JS)
(function(){
  const fortunes = [
    { title: '大吉', emoji: '🌟', type: 'big', msg: '最高の運勢です！今日は自信を持って進みましょう。' },
    { title: '中吉', emoji: '✨', type: 'good', msg: 'まずまず良い運勢。小さなチャンスを大切に。' },
    { title: '小吉', emoji: '🍀', type: 'neutral', msg: '穏やかな運勢。焦らずゆっくり成長を。' },
    { title: '吉',   emoji: '🎋', type: 'neutral', msg: '良い日になりそう。周りとの調和を大切に。' },
    { title: '末吉', emoji: '🕊️', type: 'neutral', msg: 'これから運が開けます。小さな一歩を。' },
    { title: '凶',   emoji: '⚠️', type: 'bad', msg: '注意が必要です。無理をせず慎重に行動を。' },
    { title: '大凶', emoji: '⛈️', type: 'bad', msg: '辛抱の時。無理に動かず守りを固めましょう。' }
  ];

  const btn = document.getElementById('omikujiBtn');
  const result = document.getElementById('result');
  const card = document.getElementById('fortuneCard');
  const title = document.getElementById('fortuneTitle');
  const msg = document.getElementById('fortuneMsg');
  const emoji = document.getElementById('emoji');

  function pickRandom(){
    const i = Math.floor(Math.random() * fortunes.length);
    return fortunes[i];
  }

  function show(f){
    // remove previous variant classes
    card.classList.remove('big','good','neutral','bad','reveal');

    // set content
    emoji.textContent = f.emoji;
    title.textContent = f.title;
    msg.textContent = f.msg;

    // add variant class
    card.classList.add(f.type);

    // reveal
    result.classList.remove('hidden');
    // trigger animation
    requestAnimationFrame(()=>{
      card.classList.add('reveal');
    });

    // set accessible status message
    result.setAttribute('aria-hidden','false');
  }

  btn.addEventListener('click', ()=>{
    const f = pickRandom();
    show(f);
    // brief disable to avoid double clicks during animation
    btn.disabled = true;
    setTimeout(()=>btn.disabled = false, 700);
  });

  // allow Enter/Space on button when focused (native), and pressing R to randomize
  document.addEventListener('keydown', (e)=>{
    if(e.key.toLowerCase() === 'r'){
      btn.click();
    }
  });

})();
