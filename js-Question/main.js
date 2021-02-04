(()=>{

  const Quiz = [{
    question : 'これは大根ですか？ニンジンですか？',
    choice : [
      '大根です' ,
      'ニンジンです',
      'いいえ、ごぼうです'
    ],
    imageS: '大根.jpg',
    correct : '大根です'
  },
  {
    question : '土曜日の次はまぐろですか？',
    choice : [
      'サヴァです' ,
      'マグロです',
      'いいえ、日曜日です'
    ],
    imageS: 'マグロ.jpg',
    correct : 'いいえ、日曜日です'
  },
  {
    question : 'へい！siri!　今日の天気は？？',
    choice : [
      '土曜日です' ,
      '1月です',
      '晴れです！'
    ],
    imageS: '晴れ.jpg',
    correct : '晴れです！'
  }
];

  const $doc = document;
  const $question = $doc.getElementById('question');
  const $button = $doc.querySelectorAll('button');
  const $img = $doc.querySelector('img');
  const buttonLen = $button.length;
  const quisLen = Quiz.length;
  let quisIndex = 0 ;
  let score = 0 ;
  
  
  const setQuiz = ()=>{
    $img.src = Quiz[quisIndex].imageS;    //写真
    $question.textContent = Quiz[quisIndex].question;   //問題設置
    let buttonindex = 0 ;
    
    //ボタン設置
    while(buttonindex < buttonLen){
      $button[buttonindex].textContent = Quiz[quisIndex].choice[buttonindex];　//選択肢
      buttonindex ++;
    }
  };
  setQuiz();
  
  //判定
  const Handler = (e)=>{
    const $target = e.target;    　//クリックされたAnswerを指す
    if($target.textContent === Quiz[quisIndex].correct){
      window.alert('正解です！');
      score ++ ;
    }else{
      window.alert('不正解です');
    }

    quisIndex ++;
    
    if(quisIndex < quisLen){
      setQuiz();
    }else{
      if(score + "/" + quisLen === (3 + "/" + 3)){
        window.alert('終了！！' + "正答率は>>" + score + "/" + quisLen +
        "素晴らしいです！！");
      }else{
        window.alert('終了！！' + "正答率は>>" + score + "/" + quisLen);
      }
    }
  };


  //イベントのループ定義は単体でしなければバクが出る。
  let handlerIndex = 0 ;
  while(handlerIndex < quisLen){
    $button[handlerIndex].addEventListener('click' , (e)=>{
      Handler(e);
    });
    handlerIndex ++;
  }

})();