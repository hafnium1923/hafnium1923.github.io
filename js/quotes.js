const quotes = [
    {
      quote: "힘을 가진 돌은 사람을 행복하게도 하지만 불행하게도 하지.",
      movie: "천공의성 라퓨타",
    },
    {
      quote: "걱정하지 않아도 돼. 내가 지켜줄테니까",
      movie: "벼랑위의 포뇨",
    },
    {
      quote:
        "그래요. 마음이라는건 무겁거든요",
      movie: "하울의 움직이는성",
    },
    {
      quote: "자신의 이름을 소중히 하렴.",
      movie: "센과치히로의 행방불명",
    },
    {
      quote: "누구도 운명을 바꿀 수 없어. 운명을 기다리느냐 운명에 맞서느냐는 택할 수 있지",
      movie: "모노노케 히메",
    },
    {
      quote: "싫다던가 돌아가고 싶던가라고 말하고 싶어질 때도 있겠지만 괴로워도 참고 기회를 기다리는거야.",
      movie: "센과치히로의 행방불명",
    },
    {
      quote: "키키, 그렇게 겉모습에 신경쓰지 말아라. 중요한 건 마음이야",
      movie: "마녀배달부 키키",
    }
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const movie = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  movie.innerText = todaysQuote.movie;