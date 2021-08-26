import React, { Component } from "react";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          source: { id: null, name: "CNBC" },
          author: "Peter Schacknow",
          title:
            "Stocks making the biggest moves premarket: Coty, Dollar General, Dollar Tree, Smucker and others - CNBC",
          description:
            "These are the stocks posting the largest moves before the bell.",
          url: "https://www.cnbc.com/2021/08/26/stocks-making-the-biggest-moves-premarket-coty-dollar-general-dollar-tree-smucker-and-others.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/103196840-GettyImages-170446608.jpg?v=1574097065",
          publishedAt: "2021-08-26T11:57:32Z",
          content:
            "Check out the companies making headlines before the bell:\r\nCoty (COTY) The cosmetics maker's shares added 2.7% in the premarket after it said it expects a return to annual sales growth this year. Cot… [+3958 chars]",
        },
        {
          source: { id: null, name: "Gizmodo.com" },
          author: "Matt Novak",
          title:
            "Japan Halts Moderna Vaccinations After Foreign Substances Found in 39 Vials - Gizmodo",
          description:
            "The country has 1.63 million doses of Moderna's covid-19 vaccine that will now go unused.",
          url: "https://gizmodo.com/japan-halts-moderna-vaccinations-after-foreign-substanc-1847561489",
          urlToImage:
            "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fa37d32774d5163727ff7096a38cb7c9.jpg",
          publishedAt: "2021-08-26T11:00:00Z",
          content:
            "Japans health ministry has decided to halt all covid-19 vaccinations that depend on the Moderna brand after foreign substances were found in 39 vials, according to the Japan Times. The foreign substa… [+2367 chars]",
        },
        {
          source: { id: "cnn", name: "CNN" },
          author: "Jack Guy, CNN",
          title:
            "Man arrested after food injected with needles at supermarkets - CNN",
          description:
            "A man has been arrested on suspicion of contaminating food after processed meat and microwaveable products were injected with needles at three London stores.",
          url: "https://www.cnn.com/2021/08/26/europe/london-supermarket-contamination-arrest-scli-intl-gbr/index.html",
          urlToImage:
            "https://cdn.cnn.com/cnnnext/dam/assets/210826094503-01-fulham-food-contamination-restricted-super-tease.jpg",
          publishedAt: "2021-08-26T10:23:00Z",
          content: null,
        },
        {
          source: { id: null, name: "NPR" },
          author: "",
          title:
            "New Stores Are Still Opening, Retail Hiring At Record Pace - NPR",
          description:
            "The U.S. retail industry is setting records: workers quitting and workers hired. Wages are finally growing. And despite the pandemic devastation, brand-new stores are still opening.",
          url: "https://www.npr.org/2021/08/26/1029768029/seriously-you-opened-a-store-in-the-pandemic-and-more-surprising-retail-trends",
          urlToImage:
            "https://media.npr.org/assets/img/2021/08/24/gettyimages-1234592805_wide-338ff997092041369029eb32872f0ba0440d7f7d.jpg?s=1400",
          publishedAt: "2021-08-26T10:00:56Z",
          content:
            "People shop at Macy's in New York on Aug. 9, 2021.\r\nKena Betancur/AFP/Getty Images\r\nOn a gray, dreary February day, Marguerite Adzick looked out on ice caps floating off a desolate beach along the Je… [+5757 chars]",
        },
        {
          source: { id: null, name: "Investing.com" },
          author: "Reuters",
          title:
            "Asian shares spooked by Delta spread as Jackson Hole looms By Reuters - Investing.com",
          description: "Shares tap the brakes, bonds sense caution",
          url: "https://www.investing.com/news/economy/asian-shares-retreat-from-rally-south-korea-raises-rates-2599981",
          urlToImage:
            "https://i-invdn-com.investing.com/news/indicatornews_5_800x533_L_1412601619.jpg",
          publishedAt: "2021-08-26T09:55:00Z",
          content:
            "By Marc Jones\r\nLONDON (Reuters) - World shares tapped the brakes on Thursday as China troubles struck again, while Europe's bond markets steadied after confident-sounding ECB policymakers had caused … [+4296 chars]",
        },
        {
          source: { id: null, name: "HuffPost" },
          author: "Julia Ries",
          title:
            "Should We Have Waited Longer Between COVID-19 Vaccine Doses? - HuffPost",
          description:
            "Here's what experts have learned about the time between the Pfizer and Moderna shots and how that affects overall protection.",
          url: "https://www.huffpost.com/entry/waited-longer-covid-19-vaccine-doses_l_6126435de4b0231e3696f0cf",
          urlToImage:
            "https://img.huffingtonpost.com/asset/612658bc26000078cf53f6a7.jpeg?cache=pPe9REPSh6&ops=1778_1000",
          publishedAt: "2021-08-26T09:45:02Z",
          content:
            "When the Pfizer and Moderna COVID-19vaccines first became available in December 2020, there was a strict dosing schedule recommended for the inoculations.\r\nPeople who got the Pfizer shot were advised… [+5326 chars]",
        },
        {
          source: {
            id: "the-wall-street-journal",
            name: "The Wall Street Journal",
          },
          author: "Benjamin Katz",
          title:
            "Europeans Are Flying Again, Just as Americans Pull Back - The Wall Street Journal",
          description:
            "Capacity returns across Europe, as Delta variant takes a bite out of U.S., China domestic air travel",
          url: "https://www.wsj.com/articles/europeans-are-flying-again-just-as-americans-pull-back-11629970202",
          urlToImage: "https://images.wsj.net/im-390630/social",
          publishedAt: "2021-08-26T09:30:00Z",
          content:
            "LONDONEuropean air travel is finally returning, thanks to a barrage of cheap tickets from discount carriers and the relatively smooth rollout of a continentwide vaccination-certification system.\r\nUnt… [+1006 chars]",
        },
        {
          source: { id: null, name: "Fox Business" },
          author: "Ken Martin",
          title:
            "Bitcoin price dips below $47,000 Thursday morning - Fox Business",
          description:
            "Bitcoin was trading more than 2% lower Thursday morning.",
          url: "https://www.foxbusiness.com/markets/bitcoin-price-8-26-2021",
          urlToImage:
            "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/01/0/0/81f32139-2143595eab251610VgnVCM100000d7c1a8c0____-bitcoin.png?ve=1&tl=1",
          publishedAt: "2021-08-26T08:28:26Z",
          content:
            "Bitcoin\r\n was trading more than 2% lower Thursday morning.\r\nThe price was around $46,800 per coin, while rivals Ethereum and Dogecoin\r\n were trading around $3,100 and 27 cents per coin, respectively,… [+1460 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Vicky McKeever",
          title:
            "Treasury yields are flat ahead of Fed Jackson Hole summit and economic data - CNBC",
          description:
            "U.S. Treasury yields were mixed on Thursday morning, ahead of the Federal Reserve's Jackson Hole symposium, as well as the release of economic growth data.",
          url: "https://www.cnbc.com/2021/08/26/us-bonds-treasury-yields-mixed-ahead-of-fed-jackson-hole-symposium.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/106859523-1616690762270Trading-Floor-OB-Photo-210325-PRESS-5-jpg?v=1616690891",
          publishedAt: "2021-08-26T08:15:09Z",
          content:
            "U.S. Treasury yields were mixed on Thursday, ahead of the Federal Reserve's Jackson Hole symposium, as well as the release of economic data.\r\nThe yield on the benchmark 10-year Treasury note rose les… [+1597 chars]",
        },
        {
          source: { id: null, name: "Yahoo Entertainment" },
          author: "Lucy Harley-McKeown",
          title:
            "Global stocks head lower ahead of Jackson Hole summit - Yahoo Tech",
          description:
            "All eyes will be on the virtual summit of central bankers at Jackson Hole.",
          url: "https://finance.yahoo.com/news/jackson-hole-symposium-global-stock-market-26-august-ftse-cac-dax-sp-500-dow-jones-nasdaq-074432911.html",
          urlToImage:
            "https://s.yimg.com/ny/api/res/1.2/RIt65nQ9N_zLaY.PvMdcGQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2021-07/d306ca90-e589-11eb-bbf7-adaa3a0c3a35",
          publishedAt: "2021-08-26T07:44:32Z",
          content:
            "Jerome Powell's comments at the Jackson Hole meeting of central bankers should give a read on future plans. Photo: Nicholas Kamm/AFP via Getty\r\nInvestors were erring on the side of caution on Thursda… [+1896 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Chloe Taylor",
          title:
            "US authorities investigating Deutsche Bank’s DWS Group over sustainable investing claims: WSJ - CNBC",
          description:
            "Deutsche Bank's asset management arm, DWS Group, is being investigated by U.S. authorities over claims it made about its sustainable investing practices, the Wall Street Journal reported.",
          url: "https://www.cnbc.com/2021/08/26/us-authorities-investigating-dws-groups-sustainable-investing-claims-wsj.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/105084638-DWS.jpg?v=1629963626",
          publishedAt: "2021-08-26T07:39:03Z",
          content:
            "Deutsche Bank's asset management arm, DWS Group, is being investigated by U.S. authorities over claims it made about its sustainable investing practices, the Wall Street Journal reported Wednesday. \r… [+649 chars]",
        },
        {
          source: { id: null, name: "Fox Business" },
          author: "Ken Martin",
          title:
            "Stock futures trade cautiously after record day - Fox Business",
          description:
            "U.S. equity futures were trading lower ahead of the Thursday session on Wall Street.",
          url: "https://www.foxbusiness.com/markets/stock-futures-trade-lower-after-record-day",
          urlToImage:
            "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2018/02/0/0/8815b045-ap16301578658834.jpg?ve=1&tl=1",
          publishedAt: "2021-08-26T07:31:14Z",
          content:
            "U.S. equity futures are searching for direction ahead of the Thursday session on Wall Street.\r\nThe major futures indexes suggest a small gain on the Dow and a decline of 0.2% on the Nasdaq.\r\nGET FOX … [+2511 chars]",
        },
        {
          source: { id: null, name: "New York Times" },
          author: "Niraj Chokshi, Margot Sanger-Katz, Tara Siegel Bernard",
          title:
            "Delta’s Extra $200 Insurance Fee Shows Vaccine Dilemma for Employers - The New York Times",
          description:
            "Charging unvaccinated workers more for health coverage may seem more appealing than a mandate but could be harder to carry out.",
          url: "https://www.nytimes.com/2021/08/26/business/delta-insurance-fee-unvaccinated.html",
          urlToImage:
            "https://static01.nyt.com/images/2021/08/25/business/25vax-insurance/25vax-insurance-facebookJumbo.jpg",
          publishedAt: "2021-08-26T07:00:12Z",
          content:
            "At Delta, the surcharge is one of several new requirements for unvaccinated workers. Starting immediately, those employees will have to wear masks indoors. In about two weeks, they will be subjected … [+2148 chars]",
        },
        {
          source: { id: null, name: "CNBC" },
          author: "Saheli Roy Choudhury",
          title:
            "Australia's Qantas hopes to resume international flights by Christmas, CEO says - CNBC",
          description:
            "Qantas CEO Alan Joyce told CNBC he expects the first flights out of Australia would be to highly vaccinated destinations like Singapore.",
          url: "https://www.cnbc.com/2021/08/26/australia-qantas-preparing-for-international-flights-from-december-ceo-says.html",
          urlToImage:
            "https://image.cnbcfm.com/api/v1/image/106818951-1609835139087-gettyimages-474742809-78706607.jpeg?v=1617678915",
          publishedAt: "2021-08-26T05:47:59Z",
          content:
            "Australian carrier Qantas expects international flights to the U.S., the U.K. and parts of Asia to resume by Christmas, CEO Alan Joyce said Thursday.\r\nSince March last year, Australia has closed its … [+3809 chars]",
        },
        {
          source: { id: "financial-times", name: "Financial Times" },
          author: null,
          title:
            "South Korea becomes first big Asian economy to raise interest rates - Financial Times",
          description:
            "Fears over rising property prices and record household debt outweigh surging Covid threat",
          url: "https://www.ft.com/content/5377cf69-4b5c-494b-b515-837c5bd4b8fe",
          urlToImage:
            "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F3a99f644-105d-4466-a945-72ccc086cb2d.jpg?source=next-opengraph&fit=scale-down&width=900",
          publishedAt: "2021-08-26T05:15:00Z",
          content:
            "South Korea has become the first big Asian economy to raise interest rates since the start of the pandemic, as record household debt and rocketing property prices outweighed fears over Seoul’s strugg… [+3690 chars]",
        },
        {
          source: { id: "google-news", name: "Google News" },
          author: null,
          title:
            "Ark's Cathie Wood on Investing in China, Tesla, Chip Shortage - Bloomberg Markets and Finance",
          description: null,
          url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YTlzc0JuRjRXTjTSAQA?oc=5",
          urlToImage: null,
          publishedAt: "2021-08-26T04:51:24Z",
          content: null,
        },
        {
          source: { id: "associated-press", name: "Associated Press" },
          author: "Adriana Gomez Licon",
          title:
            "Cruise lines require vaccinations, tests, amid virus surge - Associated Press",
          description:
            "MIAMI (AP) — Joel Steckler was eager for his first cruise in more than a year and a half, and he chose the ship that just two months ago became the first to accept passengers again after a long pandemic shutdown.",
          url: "https://apnews.com/article/lifestyle-business-health-travel-coronavirus-pandemic-f48c6f4a0292e217c6becf039c68668c",
          urlToImage:
            "https://storage.googleapis.com/afs-prod/media/b1bb77e36ec9428289d447f2966e33c0/3000.jpeg",
          publishedAt: "2021-08-26T04:11:43Z",
          content:
            "MIAMI (AP) Joel Steckler was eager for his first cruise in more than a year and a half, and he chose the ship that just two months ago became the first to accept passengers again after a long pandemi… [+4013 chars]",
        },
        {
          source: { id: "bloomberg", name: "Bloomberg" },
          author: null,
          title:
            "Evergrande EV Stock Loses $80 Billion in World's Worst Rout - Bloomberg",
          description: null,
          url: "https://www.bloomberg.com/tosv2.html?vid=&uuid=2cf10859-066c-11ec-ae96-5379417a7454&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0wOC0yNi9ldmVyZ3JhbmRlLWV2LXVuaXQtbG9zZXMtODAtYmlsbGlvbi1pbi13b3JsZC1zLXdvcnN0LXN0b2NrLXJvdXQ=",
          urlToImage: null,
          publishedAt: "2021-08-26T04:04:00Z",
          content:
            "To continue, please click the box below to let us know you're not a robot.",
        },
        {
          source: { id: "google-news", name: "Google News" },
          author: null,
          title:
            "Cramer's lightning round: Up to 5% of your portfolio should be in crypto - CNBC Television",
          description: null,
          url: "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9THM1MmpGQ25TWG_SAQA?oc=5",
          urlToImage: null,
          publishedAt: "2021-08-26T03:25:24Z",
          content: null,
        },
        {
          source: {
            id: "the-wall-street-journal",
            name: "The Wall Street Journal",
          },
          author: "Aaron Tilley",
          title:
            "Microsoft Hires Former Top Amazon Cloud Executive, Adding to Rivalry - The Wall Street Journal",
          description:
            "Charlie Bell was previously a senior vice president at Amazon and top lieutenant to CEO Andy Jassy",
          url: "https://www.wsj.com/articles/microsoft-hires-former-top-amazon-cloud-executive-adding-to-rivalry-11629947484",
          urlToImage: "https://images.wsj.net/im-391515/social",
          publishedAt: "2021-08-26T03:11:00Z",
          content:
            "Microsoft Corp. hired a top Amazon.com Inc. cloud veteran and ally of Chief Executive Andy Jassy, according to a company document, in a rare jump of a senior executive between the cloud-computing ind… [+1350 chars]",
        },
      ],
      loading: true,
    };
  }

  render() {
    return <div></div>;
  }
}

export default News;
