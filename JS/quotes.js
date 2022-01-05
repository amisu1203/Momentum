const ads = [
    {
        text : '그 어느 때보다 더 모던해진 Bois de Rose가 당신을 기다립니다.',
        brand : 'DIOR',
        link : `https://www.dior.com/ko_kr`
    },
    {
        text : `MISS DIOR eau de Parfum이 새로운 Velvety Fresh Floral Bouquet로 다시 태어났습니다.`,
        brand : 'DIOR',
        link : `https://www.dior.com/ko_kr`
    },
    {
        text : `다양한 입술 톤에 어울리는 내추럴한 컬러들을 재해석한 루즈 디올 컬러 립밤을 지금 확인해보세요. `,
        brand : `DIOR`,
        link : `https://www.dior.com/ko_kr`
    },
    {
        text : `오랜 세월을 거쳐 프라다 노하우의 아이콘이 된 브러시드 가죽 벨트는 당신의 하루를 환상적으로 만듭니다.`,
        brand : `PRADA` ,
        link : `https://www.prada.com/kr/ko.html`
    },
    {
        text : `스쿱넥 디자인이 플레어 실루엣을 한층 더 돋보이게, 스트레치 드릴 미니 드레스를 지금 만나보세요.`,
        brand : `PRADA`,
        link : `https://www.prada.com/kr/ko.html`
    },
    {
        text : `관능적인 플로럴 향이 밀랍과 바닐라로 부드러워지고, 투베로즈 앱솔루트와 베티베르가 완성하는 La Femme Prada.`,
        brand : `PRADA`,
        link : `https://www.prada.com/kr/ko.html`
    },
    {
        text : `2021년, 샤넬은 N°5의 100년을 기념하여 가브리엘 샤넬의 행운의 숫자를 골드로 새긴 새로운 디자인의 향수 라벨을 선보입니다.`,
        brand : `CHANEL`,
        link : `https://www.chanel.com/kr/`
    },
    {
        text : `매력적인 잔향이 돋보이는 아로마틱 우디 향의 블루 드 샤넬로 근사한 하루를 만끽하세요.`,
        brand : `CHANEL`,
        link : `https://www.chanel.com/kr/`
    },
    {
        text : `퀄팅 모티브 카프스킨 스트랩이 매트 블랙, 블루 진, 네이비 블루, 핑크, 골드 브라운 컬러로 출시됩니다.`,
        brand : `CHANEL`,
        link : `https://www.chanel.com/kr/`
    },
    {
        text : `매화꽃을 풍부하게 함유한 샤넬 르 블랑 라 바즈. 촉촉한 텍스처로 피부에 편안함을 선사합니다.`,
        brand : `CHANEL`,
        link : `https://www.chanel.com/kr/`
    }
];

const text = document.querySelector('#ad span:nth-child(1)');
const link = document.querySelector('#ad a');

const todaysAds = ads[Math.floor(Math.random() * ads.length)];

text.innerText = todaysAds.text;
link.innerText = `${todaysAds.brand}`;
link.setAttribute('href', todaysAds.link);