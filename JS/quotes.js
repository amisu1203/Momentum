const quotes = [
    {
        quote : '행동 없는 말은 이상주의를 훼손한다.',
        author : 'Herbert Hoover'
    },
    {
        quote : `당신이 어떤 일을 해낼 수 있는지 누군가가 물어보면 대답해라. '물론이죠!' 그 다음 어떻게 그 일을 해낼 수 있을지 부지런히 고민하라.`,
        author : 'Theodore Roosevelt'
    },
    {
        quote : `지금 적극적으로 실행되는 괜찮은 계획이 다음 주의 완벽한 계획보다 낫다.`,
        author : `George S. Patton`
    },
    {
        quote : `좋은 책을 읽는 것은 과거 몇 세기의 가장 훌륭한 사람들과 이야기를 나누는 것과 같다.`,
        author : `Rene Descartes`
    },
    {
        quote : `성공은 영원하지 않고, 실패는 치명적이지 않다.`,
        author : `Mike Ditka`
    },
    {
        quote : `모든 전사 중 가장 강한 전사는 이 두 가지, 시간과 인내다.`,
        author : `Leo Tolstoy`
    },
    {
        quote : `오직 한 가지 성공이 있을 뿐이다. 바로 자기 자신만의 방식으로 삶을 살아갈 수 있느냐이다.`,
        author : `Christopher Morley`
    },
    {
        quote : `이른 아침은 입에 황금을 물고 있다.`,
        author : `Benjamin Franklin`
    },
    {
        quote : `경험을 현명하게 사용한다면, 어떤 일도 시간 낭비는 아니다.`,
        author : `Auguste Rodin`
    },
    {
        quote : `시간은 인간이 쓸 수 있는 가장 값진 것이다.`,
        author : `Theophrastus`
    }
];

const quote = document.querySelector('#quote span:nth-child(1)');
const author = document.querySelector('#quote span:nth-child(2)');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;