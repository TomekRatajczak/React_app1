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
            "Zima"
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
            "oow 5 godzin"
          ]
        },
        {
          tag: "dłogość edki",
          answer: [
            "3 m",
            "4 m",
            "5 m",
            "6 m",
            "7 m",
            "8 m",
            "9 m"
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
      subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.',
      button: "Read more",
    },
    floatSets: {
      title: 'Zestawy',
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
        email: "kontakt@example.com",
        address: {
          street: 'ul. abc 11/2',
          city: 'Poznan',
          country: 'Poland',
          postcode: '80-123'
        }
    },
    contact: {
      title: 'Lets Get In Touch!',
      subtitle: 'Phasellus nisi sem, laoreet pulvinar pellentesque quis, laoreet eget elit. Ut non placerat est. Vivamus molestie libero ac lacinia vehicula.',
    }
  
}
