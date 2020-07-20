import React from 'react';
import s from './style.module.css';


export default class Tactics extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let fish = 'Ukleje'
    if (this.props.spicies === "Ukleja"){
      fish = ' Ukleje'
    }else if (this.props.spicies === "Płoć"){
      fish = ' Płocie'
    }else if (this.props.spicies === "Krąp"){
      fish = ' Krąpie'
    }else if (this.props.spicies === "Leszcz"){
      fish = ' Leszcze'
    }else if (this.props.spicies === "Kleń, Jaź, Brzana"){
      fish = ' ryby takie jak Kleń, Jaź, Brzana'
    }else if (this.props.spicies === "Ryby karpiowate małe"){
      fish = ' ryby karpiowate małe'
    }else if (this.props.spicies === "Ryby karpiowate duże"){
      fish = ' ryby karpiowate duże'
    }
    let timeOfTheYear = 'Wiosną'
    if (this.props.partOfTheYear === "Wiosna"){
      timeOfTheYear = ' Wiosną'
    }else if (this.props.partOfTheYear === "Lato"){
      timeOfTheYear = ' Latem'
    }else if (this.props.partOfTheYear === "Jesień"){
      timeOfTheYear = ' Jesienią'
    }else if (this.props.partOfTheYear === "Zima"){
      timeOfTheYear = ' Zimą'
    }
    
    let whereToFish = 'Ukleja jest rybą, która żeruje w niewielkich odległościach od brzegu, w    miejscach z małym uciągiem. Dla tego najlepiej szukać jej w klatach pomiędy głowkami (zwłaszcza w środkowych częściach), rzecznych portach oraz we wszelkich miejscach ze spowolnieniami nurtu. Do połowu ukleji każda pora jest dobra, ale najlepiej ryby te biorą w słoneczne dni ze stałym cisnieniem. Żerowanie tych ryb słabnie przy niskich temperaturach i bardzo silnym wietrze. Najlepszą przynętą do połowu ukleji jest pinka i biały robak, kolotrystyka dowolna ale zdaża sie że ukleja bardzo agresywnie reaguje na kolor czerwony lub żółty. Jest to uzależnione od przyzwycajeń ryby w danym łowisku'

    if (this.props.spicies === "Ukleja"){
      whereToFish = 'Ukleja jest rybą, która żeruje w niewielkich odległościach od brzegu, w miejscach z małym uciągiem. Dla tego najlepiej szukać jej w klatach pomiędy głowkami (zwłaszcza w środkowych częściach), rzecznych portach oraz we wszelkich miejscach ze spowolnieniami nurtu. Do połowu ukleji każda pora jest dobra, ale najlepiej ryby te biorą w słoneczne dni ze stałym cisnieniem. Żerowanie tych ryb słabnie przy niskich temperaturach i bardzo silnym wietrze. Najlepszą przynętą do połowu ukleji jest pinka i biały robak, kolotrystyka dowolna ale zdaża sie że ukleja bardzo agresywnie reaguje na kolor czerwony lub żółty. Jest to uzależnione od przyzwycajeń ryby w danym łowisku'
    }else if (this.props.spicies === "Płoć"){
      whereToFish = 'Płoć jest rybą, która żeruje w praktycznie każdym miejscu rzeki, jednakże najpardziej lubi miejsca ze spowolnonym nurtem. Dla tego najlepiej szukać jej w obaszarach gdzie nurt rzeki łączy się ze spokojną wądą lub za przeszkodami, które spowalniają nurt. Płoć żeruje najbardziej o poranku, ale można poławiać ją przez cały dzień. Żerowanie tych ryb słabnie przy bardzo dużych zmianach cisnienia. Najlepszą przynętą do połowu płoci jest ochotka, pinka i biały robak. Jesienią i zimą płoć bardzo dobrze reaguje na aromaty korzenne oraz konopie. Składniki te poprawiają metabolizm tej ryby i oczyszczają jej ukłat trawienny. Jest to cecha charakterystyczna dla tego gatunku'
    }else if (this.props.spicies === "Krąp"){
      whereToFish = 'Krąp jest rybą, która żeruje we wszelich miejscach z uciągiem rzeki, jednakże najpardziej preferuje głębsze miejsca. Dla tego najlepiej szukać go w rynnach głównego nurtu oraz głębokich klatkach przy główkach(tam gdzie prąd wsteczy utworzył zagłębienia). Krąp żeruje najbardziej o poranku i wieczorem, ale można poławiać go przez cały dzień. Żerowanie tych ryb słabnie przy bardzo dużych zmianach cisnienia. Najlepszą przynętą do połowu krąpia jest ochotka, pinka i biały robak. Ponieaż krąp jest bardzo postpolitą rybą naszych rzek i występuje w nich bardzo licznie, umiejętne znaleźienie stanowiska żerowania tej ryby liest kluczem do sukcesu na prywatnych wyprawach i zawodach wędkarskich'
    }else if (this.props.spicies === "Leszcz"){
      whereToFish = 'Leszcz jest rybą, która żeruje we wszelich miejscach z uciągiem rzeki, jednakże najpardziej preferuje głębsze miejsca. Dla tego najlepiej szukać go w rynnach głównego nurtu oraz głębokich klatkach przy główkach(tam gdzie prąd wsteczy utworzył zagłębienia). Leszcz żeruje najbardziej o poranku i wieczorem, ale można poławiać go przez cały dzień. Żerowanie tych ryb słabnie przy bardzo dużych zmianach cisnienia i niskiej temperaturze wody. Najlepszą przynętą do połowu leszcza jest dendrobena, kukurydza i biały robak. Ponieaż leszcz jest jedną z nawiększych ryb naszych rzek i występuje w nich bardzo licznie, umiejętne znaleźienie stanowiska żerowania tej ryby liest kluczem do sukcesu na prywatnych wyprawach i zawodach wędkarskich'
    }else if (this.props.spicies === "Kleń, Jaź, Brzana"){
      whereToFish = 'Ryby te żeruje we wszelich miejscach z uciągiem rzeki, jednakże najpardziej preferują spokojne miejsca w okolicach bystrego nurtu. Dla tego najlepiej szukać ich w rynnach głównego nurtu(w okolicy przeszkód), na ostorgach oraz głębokich klatkach przy główkach(tam gdzie prąd wsteczy utworzył zagłębienia). Ryby te żerują najbardziej przed i po zachodzie słońca, ale można poławiać je przez cały dzień. Żerowanie tych ryb słabnie przy spadkach cisnienia i deszczowej pogodzie. Najlepszą przynętą do ich połowu jest ochotka, biały robak, pinka i kukurydza. Ponieaż kleń, jaź i brzana to jedne z nawiększych i najwaleczniejszych ryb naszych rzek - umiejętne znaleźienie stanowiska żerowania tyc ryb jest kluczem do sukcesu na prywatnych wyprawach i zawodach wędkarskich'
    }else if (this.props.spicies === "Ryby karpiowate małe"){
      whereToFish = 'Małe ryby żerują w praktycznie każdym miejscu rzeki, jednakże najpardziej lubią miejsca ze spowolnonym nurtem. Dla tego najlepiej szukać ich w obaszarach gdzie nurt rzeki łączy się ze spokojną wądą lub za przeszkodami, które spowalniają nurt. Małe ryby żerują najbardziej o poranku i późnym popołudniem, ale można poławiać je przez cały dzień. Żerowanie tych ryb słabnie przy bardzo dużych zmianach cisnienia. Najlepszą przynętą do ich połowu jest ochotka, pinka i biały robak. Niemal tak ważnym elementem jak przynęta, jest tu kolor zanęty. Ponieważ małe ryby aby uchronić się przed drapieżnikami unikają jasnych plam na dnie, gdyż sa na nich widoczne. Taka ciemna zanęta w szególności wpływa na suchces połowu'
    }else if (this.props.spicies === "Ryby karpiowate duże"){
      whereToFish = 'Ryby te żeruje we wszelich miejscach z uciągiem rzeki, jednakże najpardziej preferują spokojne miejsca w okolicach bystrego nurtu. Dla tego najlepiej szukać ich w rynnach głównego nurtu oraz głębokich klatkach przy główkach(tam gdzie prąd wsteczy utworzył zagłębienia). Ryby te żerują najbardziej najbardziej o poranku i wieczorem, ale można poławiać je przez cały dzień. Żerowanie tych ryb słabnie przy dużych różnicach cisnienia. Najlepszą przynętą do ich połowu jest dendrobena, ochotka, biały robak, pinka i kukurydza. Aby łowić ryby duże należy odselekcjonować je od mniejszych przedstawcieli gatunku. Najleprzym na to sposobem jest wybranie większej przynęty oraz odpowiedni dobór koloru zanęty. Duże ryby szukają pokarmu w jasnych plamach na dnie w przeiwieństwie do ryb małych(które chronią się przed drapieżnikami na tle ciemmego dna). Kolor zanęty do połowu dużych ryb powinien być w miare jasny, maksymalnie do koloru mlecznej czekolady'
    }
    let howToFish = 'Technika klasycznej przepływanki to chyba najcześciej wykorzystywany sposób poławiania ryb w rzece. Jego zasady są bardzo proste, ale aby skutecznie łowić tą metodą musimy znaleźć do tego korzystne warunki. Metodą tą możemy łowić jedynie na w miare równym gruncie, tak aby przynęta znjdywała się możliwie jak najbliżej dna oraz prąd rzeki nie może być zbyt silny w stosunku do naszego zestawu gdyż wtedy będzie on spływał zbyt szybko. Grunt w tej metodzie ustawiamy tak aby przynęta przemieszczała się tuż nad dnem. Zarzucamy zestaw na godzine 1 i ściągamy go wedką o około 1m. Swobodnie puszczamy zestaw aż do maksymalnej odległości na której napnie nam się żyłka. Wyciągamy zestaw i zarzucamy go ponownie'

    let howToattract = 'Necenie ukleji jest bardzo specyficzne. Wynika ono ze sposobu jakim pobiera ona pokarm. Ukleja nie pobiera pokarmu z dna, szuka go przy powierzchni lub w toni. Ukleja bardzo mocno reaguje na smuge zanętową i w niej szuka pokarmu. Ukleje nęcimymy zanętą o konstystencji kremu. W mokre palce nabieramy porcje zanęty o objętości łyzki do zupy i rzucamy w pole łowienia (promien około 0,5m od spławika). Nęcimy z częstotliwością ok jednej porcji zanęty na 1-2min aby skutecznie utrzymać ukleje w łowisku. Staramy się nęcić coraz bliżej tak aby przyciągnąć ukele jak najbliżej naszego stanowiska. Ukleje łowimy szybkościowo(obecny rekord świata wynosi 515 szt/godzine) a im bliżej stanowiska ją mamy tym szybciej ją wyciągniemy.'
    if ((this.props.floatSet === "Klasyczna przepływanka")&&
        (this.props.spicies === "Ukleja")){
          howToattract = 'Necenie ukleji jest bardzo specyficzne. Wynika ono ze sposobu jakim pobiera ona pokarm. Ukleja nie pobiera pokarmu z dna, szuka go przy powierzchni lub w toni. Ukleja bardzo mocno reaguje na smuge zanętową i w niej szuka pokarmu. Ukleje nęcimymy zanętą o konstystencji kremu. W mokre palce nabieramy porcje zanęty o objętości łyzki do zupy i rzucamy w pole łowienia (promien około 0,5m od spławika). Nęcimy z częstotliwością ok jednej porcji zanęty na 1-2min aby skutecznie utrzymać ukleje w łowisku. Staramy się nęcić coraz bliżej tak aby przyciągnąć ukele jak najbliżej naszego stanowiska. Ukleje łowimy szybkościowo(obecny rekord świata wynosi 515 szt/godzine) a im bliżej stanowiska ją mamy tym szybciej ją wyciągniemy.'
        }
    if (this.props.floatSet === "Klasyczna przepływanka"){
      howToFish = 'Technika klasycznej przepływanki to chyba najcześciej wykorzystywany sposób poławiania ryb w rzece. Jego zasady są bardzo proste, ale aby skutecznie łowić tą metodą musimy znaleźć do tego korzystne warunki. Metodą tą możemy łowić jedynie na w miare równym gruncie, tak aby przynęta znjdywała się możliwie jak najbliżej dna oraz prąd rzeki nie może być zbyt silny w stosunku do naszego zestawu gdyż wtedy będzie on spływał zbyt szybko. Grunt w tej metodzie ustawiamy tak aby przynęta przemieszczała się tuż nad dnem. Zarzucamy zestaw na godzine 1 i ściągamy go wedką o około 1m. Swobodnie puszczamy zestaw aż do maksymalnej odległości na której napnie nam się żyłka. Wyciągamy zestaw i zarzucamy go ponownie'

      howToattract = 'Nęcenie do połowó batem znacznie rózni się od necenia do połowów tyczką czy innymi metodami. W przypadku połowów klasyczną przepływanką stosujemy tzw pole łowienia. Z racji tego że nie jesteśmy w stnie przepuścić naszego zestawu za każdym razem w taki sam sposób nie nęcimy wstępnie. Zarzucamy zestaw i co max 15 minut wrzucamy 2-3 kule wielkości mandarynki w miejsca zarzucania zestawu. Nęcenie wykonujemy w okolice wrzucanego zestawu na wysokości od stanowiska do maksymalnie jednego metra poniżej. Mozemy przygotować siebie klilka kul na zapas ale przygotowując się do zawodów warto nauczyć się lepienia kuli jedną ręką gdyż jest to jedyna możliwość wg regulaminu większości zawodów'

    }else if (this.props.floatSet === "Przepływanka z przytrzymaniem"){
      howToFish = 'Technika przepływanki z przytrzymaniem to chyba najskuteczniejszy sposób poławiania ryb w rzece. Stosowanie tej techniki wymaga wprawy i dostosowania tempa spuszczania zestawu z nurtem rzeki, ale aby skutecznie łowić tą metodą musimy znaleźć do tego korzystne warunki. Metodą tą możemy obławiać dowolnie ukształtowane dno, ale duża liczba zaczepów uniemożliwi nam przegruntowanie zestawu konieczne do prawidłowego prowadzenia przynęty. Także prąd rzeki nie może być zbyt silny w stosunku do naszego zestawu gdyż wtedy nie będziemy w stanie skutecznie prowadzić przynęty nad dnem. Grunt w tej metodzie ustawiamy tak aby obciązenie główne znajdowało się nad dnem. Zarzucamy zestaw na godzine 12 i napinamy żyłke. Dzieki zastosowaniu spławika Cralusso Surf zestaw spuszczany w kontorlowany przez nas zestaw nie będzie przybliżał się do brzego jak w przypadku klasycznych spławików. Najważniejszym elementem jest tutaj tępo spuszczania zestawu. Gdy będziemy robić to zbyt wolno w stosunku do prądu rzeki, nasz zestawy uniesie się za wyskoko i przepłynie nad głowami ryb. gdy za szybko spuścimy zestaw a na naszej drodze znajdzie się przeszkoda to złapiemy zaczep. Alternatywnie do tej metody możemy użyć klasycznych spławików typu dysk lub bombka ale ograniczy to nasz zasięg do długości wędki'

      howToattract = 'Nęcenie do połowów batem znacznie rózni się od necenia do połowów tyczką czy innymi metodami. W przypadku połowów przepływanką z przetrzymaniem stosujemy tzw punkt nęcenia i prowadzimy zestaw od kul w rozmyciu. Nęcenie wykonujemy na wysokości naszego stanowiska lub powyżej w przypadku silnego nurtu. Necenie wstępne to 1/4 całości zanęty, następnieresztę dzielimy tak aby zanęty starczyło na nęcenie kulami o wielkości pomarańczy w odstępach ok 30 min. Mozemy przygotować siebie klilka kul na zapas ale przygotowując się do zawodów warto nauczyć się lepienia kuli jedną ręką gdyż jest to jedyna możliwość wg regulaminu większości zawodów'

    }else if (this.props.floatSet === "Przepływanka z przytrzymaniem i wpuszczeniem"){
      howToFish = 'Technika przepływanki z przytrzymaniem i wpuszczeniem to tajna broń która potrafi wykpić najostrożniejsze ryby w rzece. Stosowanie tej techniki wymaga wprawy przez dostosowania tempa spuszczania zestawu z nurtem rzeki oraz wyobraźni co dzieje się z naszym zestawem. Metodą tą możemy obławiać dowolnie ukształtowane dno, ale szczegołnie skuteczna jest w przypadku głebokich dołków gdzie ustawiają się ryby lub zaczepów, które utrudniają poławianie innymi technikami. Grunt w tej metodzie ustawiamy tak aby obciązenie główne znajdowało się 20 cm nad dnem. W przypadku spławiku typu dysk wpuszczamy zestaw na odległości równej długości wędki a w przypadku spławika Surf zarzucamy zestaw na godzine 12 i napinamy żyłke. Dzieki zastosowaniu spławika Cralusso Surf zestaw spuszczany w kontorlowany przez nas zestaw nie będzie przybliżał się do brzego jak w przypadku klasycznych spławików. Spuszczamy w konrolowany sposób nasz zestaw i gdy trafiamy na potencjalą miejscówkę ryby luzujemy żyłkę aby podać jej przynęte pod pysk. Analogicznie przytrzymując zestaw przed przeszkodą tak aby się nieznacznie nad nią unisł. Tuż za nią luzujemy żyłke i wpadnie on za przeszkodę gdzie prawdopodobnie czają sie ryby'

      howToattract = 'Nęcenie do połowów batem znacznie rózni się od necenia do połowów tyczką czy innymi metodami. W przypadku połowów przepływanką z przetrzymaniem i wpuszczeniem stosujemy tzw punkty nęcenia i prowadzimy zestaw przez linie wyznaczone przez te punkty. Nęcenie wykonujemy na wysokości potencjalnego stanowiska ryb lub powyżej w przypadku silnego nurtu. Necenie wstępne to 1/4 całości zanęty, następnie resztę dzielimy tak aby zanęty starczyło na nęcenie kulami o wielkości pomarańczy w odstępach ok 30 min. Mozemy przygotować siebie klilka kul na zapas ale przygotowując się do zawodów warto nauczyć się lepienia kuli jedną ręką gdyż jest to jedyna możliwość wg regulaminu większości zawodów'

    }else if (this.props.floatSet === "Technika na stopa"){
      howToFish = 'Technika na stopa to domena wędkarzy łowiących na tyczke ale w przypatku bata takrze możemy ją wykorzystać. Jej zasady są bardzo proste, ale aby skutecznie łowić tą metodą musimy znaleźć do tego korzystne warunki. Metodą tą możemy łowić jedynie na uciągach, gdzie prąd rzeki nie będzie zbyt silny w stosunku do naszego zestawu gdyż wtedy będzie on spływał unosił się zbyt wysoko. Grunt w tej metodzie ustawiamy tak aby obciążenie głowne znajdywało się tuż nad dnem. Zarzucamy zestaw przed docelowe miejsce i na napiętej żyłce wpuszczamy go w punkt łowienia. Gdy właściwie go ustawimy przytrzymujemy estaw i czekamy na rybę. Do techniki tej nadaję sie wyłącznie spławik typu dysk który ze względu na swią budowę stabilnie ustawia się w prodzie rzeki i pozwala na właściwą prezetacje przynęty'

      howToattract = 'Nęcenie do połowów batem znacznie rózni się od necenia do połowów tyczką czy innymi metodami. W przypadku połowów na stopa stosujemy tzw punkt ęcenia i trzymamy zestaw za kulami zanętowymi. Nęcenie wykonujemy na wysokości łowienia lub powyżej w przypadku silnego nurtu. Necenie wstępne to 1/3 całości zanęty, następnie resztę dzielimy tak aby zanęty starczyło na nęcenie kulami o wielkości pomarańczy w odstępach ok 45-60 min. Mozemy przygotować siebie klilka kul na zapas ale przygotowując się do zawodów warto nauczyć się lepienia kuli jedną ręką gdyż jest to jedyna możliwość wg regulaminu większości zawodów'
    }

    return (
      <div className={s.root}>
        <div className="container">
          <h2 className="mb-5 text-center">Taktyka i polów</h2>
          <p>Aby skutecznie łowić {fish} {timeOfTheYear} należy przestrzegać kilku następujączych zasad:</p>
          <p>{whereToFish}</p>
          <img className="rounded mx-auto d-block img-fluid" src="http://www.fishingfanatics.pl/wp-content/uploads/2016/09/DSC_5781.jpg" alt="1" />
          <p>{howToFish}</p>
          <img className="rounded mx-auto d-block img-fluid" src="https://dariuszciechanskiwedkarstwo.files.wordpress.com/2016/03/diagramy.jpg" alt="2" />
          <p>{howToattract}</p>      
          <img className="rounded mx-auto d-block img-fluid" src="https://gorek-gliny.pl/wp-content/uploads/2018/12/IMG_8101.jpg" alt="3" />
          <p>Duis ut sapien aliquet, elementum nisi in, pulvinar libero. Morbi dui libero, tristique nec risus nec, imperdiet rutrum nibh. Aenean volutpat sem id fermentum condimentum. Nulla lobortis, odio sed elementum mattis, sem est egestas ipsum, at interdum mauris odio nec velit. Nam in odio pharetra, finibus eros et, sollicitudin urna. Nam sagittis eu lorem sed faucibus. Sed ac ante luctus, bibendum tortor et, ultricies odio. Nunc et fringilla arcu. Fusce dictum lectus lorem, ac imperdiet tortor luctus sit amet.</p>
        </div>
      </div>
    )
  }
}