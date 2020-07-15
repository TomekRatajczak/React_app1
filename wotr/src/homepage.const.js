export const homepage = {
    companyName: "Whip on the River",
    navigation: [
      {
        title: 'O projekcie',
        link: '#oprojekcie',
      }, {
        title: 'Pogoda na ryby',
        link: '#pogodanaryby',
      }, {
        title: 'Formularz',
        link: '#formularz',
      }, {
        title: 'Porady',
        link: '#porady',
      },
    ],
    hero: {
      title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      subtitle: 'In nec lorem quis turpis tincidunt tempor. Sed sodales lobortis turpis, nec faucibus',
      button: "Read more",
      images: [
        require('./images/1.jpg'),
        require('./images/2.jpg'),
        require('./images/3.jpg'),
      ]
    },
    about: {
      title: 'O projekcie',
      subtitle: '„Ryby są wszędzie tylko ty nie potrafisz ich łowić”- tak brzmiały lekcje jakie otrzymywałem od mojego Ojca. Dzisiaj spotykam wielu wędkarzy, którzy jak mantra powtarzają „Panie tu nie ma ryby”, a gdy widzą że mi spławik zatapia się co chwile uznają że mam po prostu farta. Ale gdy oni piją piwo i zakładają białego robaka na haczyk nr 8 😉 Ja przygotowuje każdy szczegół: mozolne gruntowanie, odpowiednio skomponowaną i domoczoną zanętę. To tylko od Ciebie zależy czy będziesz łowić rybę co minutę czy wygolę nic nie złowisz.',subtitle2: 'Jeżeli chcesz przekonać się jak to zrobić to: ',
      button: "Zaczynajmy!"
    },
    weather: {
      title: 'Pogoda na ryby',
      button: "Read more",
    },
    fishingForm: {
      title: 'Formularz',
      parts: [
        {
          tag: "Pora roku",
          answer: [
            "Wiosna",
            "Lato",
            "Jesień",
            "Zima"
          ]
        },
        {
          tag: "Pora dnia",
          answer: [
            "Poranek",
            "Południe",
            "Wieczór",
            "Noc"
          ]
        },
        {
          tag: "Pogoda",
          answer: [
            "Pochmurno",
            "Słonecznie",
            "Umiarkowanie",
            "Deszcz"
          ]
        },
        {
          tag: "Rodzaj połowu",
          answer: [
            "Rekreacyjnie",
            "Treningowo",
            "Oficjalny trening",
            "Zawoody"
          ]
        },
        {
          tag: "Czas połowu",
          answer: [
            "2 godz",
            "3 godz",
            "4 godziny",
            "pow 5 godz"
          ]
        },
        {
          tag: "Dłogość wedki",
          answer: [
            "3m",
            "4m",
            "5m",
            "6m",
            "7m",
            "8m",
            "9m"
          ]
        },
        {
          tag: "Poławiane gatunki",
          answer: [
            "Ukleja",
            "Płoć",
            "Krąp",
            "Leszcz",
            "Kleń, Jaź, Jelec",
            "Ryby karpiowate małe",
            "Ryby karpiowate duże"
          ]
        }
        
      ]
     
    },
    depthTest: {
      title: 'Gruntowanie',
      parts: [
        {
          tag: "Głębokość minimalna",
          answer: [
            "1m",
            "2m",
            "3m",
            "4m",
            "5m",
            "6m",
            "7m",
            "8m",
            "9m",
            "10m"
          ]
        },
        {
          tag: "Głębokość maksymalna",
          answer: [
            "<1m",
            "2m",
            "3m",
            "4m",
            "5m",
            "6m",
            "7m",
            "8m",
            "9m",
            "10m"
          ]
        },
        {
          tag: "Uciąg wody w gramach",
          answer: [
            1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21
          ]
        },
        {
          tag: "Charakterystyka dna",
          answer: [
            "Płaskie",
            "Wznoszące",
            "Opadające",
            "Duże różnice głębokości"
          ]
        },
        {
          tag: "Podwodne zaczepy",
          answer: [
            "Brak",
            "Kamienie",
            "Roślinność",
            "Faszyna itp"
          ]
        }, 
      ],
      subtitle: 'Na wędkę zakładamy 3 gumki: jedną w miejscu haczyka, jedną w miejscu spławika oraz jedną pomiędzy nimi. Wyznaczą nam one maksymalną(górna gumka) i minimalną głębokość(środkowa gumka)',
    },
    floatSets: {
      title: 'Zestawy',
      parts: [
        {
          tag: "Technika prowadzenia przynęty",
          answer: [
            "Klasyczna przepływanka",
            "Przepływanka z przytrzymaniem",
            "Przepływanka z przytrzymaniem i wpuszczeniem",
            "Technika na stopa"
     
          ]
        }],
      subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.',
      button: "Read more",
    },
    groundbait: {
      title: 'Zanęta',
      subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.',
      button: "Read more",
    },
    tactics: {
      title: 'Taktyka i połów',
      subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.'  
    },
    contactDetails: {
        phone: '+48123123123',
        email: "kontakt@example.com"
    },
    contact: {
      title: 'Chcesz dowiedzieć się wiecej lub umówić się na wspólne wędkowanie!',
      subtitle: 'Jeżeli pragniesz zdobywać wiecej wiedzy zajrzyj na nasze socialmedia!',
      phoneIcon: require('../src/images/phone.svg'),
      mailIcon: require('../src/images/mail.svg'),
      fbIcon: require('../src/images/facebook.svg'),
      instIcon: require('../src/images/instagram-sketched.svg'),
      ytIcon: require('../src/images/youtube.svg'),
      twIcon: require('../src/images/twitter.svg'),
    }
  
}
