
# Prototyyppi Portfolio!
Hei, rakentamani prototyyppi portfolion on tarkoitus olla harjoitusta tulevaisuutta varten! Verkkosivulta löytyy elementtejä jota löytäisi portfolio verkkosivulta kuten, tiedot taidot yms. Verrkosivulla on paljon paikanvaraaja kuvia, video ja tekstejä jotka joko hain netistä tai pyysin ChatGPT:tä generoimaan. Verkkosivun on pääosin tarkoitus osoittaa osaamisen kehitystä ja alta löytyy kaikki arvioiti kriteerit ja miten ne tättyy, kiitos!

# Vertais arviointia varten!

#  <span style="color:lightgreen;">HTML </span>

1. **Basic HTML structure is present**
 - Tämän löytää heti HTML tiedoston avatessa!
 2. **HTML structure with clear content differentiation (headings, paragraphs, lists)**
 - Verkkosivun html tiedostoissa on selvä erottelu!
 3. **Use of forms, links, and media**
 - Formin löytää contact.htm tiedostosta.
 - Linkkejä esiintyy kuvissa sekä otsikoissa, kuten otsikon ME alla olevasta kuvasta ja sivun pääotsikosta.
 - media löytyy pääsivulta kuvien muodossa galleriassa jossa on ensimmäisellä sivulla 2 kuvaa ja video sekä ME otsikon alta olevasta kuva esityksestä.
 4. **Tables are effectively used**
 - Tämän näkee Skills/hobbies osuuden alla jossa on esitetty taitoja taulukon muodossa.
 - Koodissa myös rakennan pöytää lisää Javascriptin kautta! Javascript.js Tablerow ja Tablehead luokissa.
 5. **Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.**
 - Htm tiedostossa on eroiteltu elementtejä merkitysoppin perusteella.

 #  <span style="color:lightblue;">CSS </span>
 1. **Basic CSS styling (colors, fonts).**
 - Tämän näkee jo heti nettisivun avatessa sillä värit ja fontit ovat muutettuja.
 2. **Use of classes and IDs to style specific elements.**
 - Avatessa Webstyle tai ContactStyle CSS teidostot voi niissä nähdä molempia toteutus tapoja! Käytin enemmän Class pohjaista osoitusta, mutta responsiivisuuden ohjaavassa osiossa käytin myös hiukan ID pohjaista osoitusta!
 ![Kuva ID pohjaisesta osoituksesta!](/READMEASSETS/IDOsoitus.png)
 3. **Implementation of responsive design elements.**
 - Nämä näkee vaihtaessa puheli näkymään jolloin etusivulla olevat elementit muutuvat tehdäkseen sivusta luettavamman. 
 - Etusivulla olevat flexboxit muutuvat column orientaatioon näytön koon muutuessa tarpeeksi pieneksi!
 - Galleria elementti myös muuttuu column muotoon jotta sitä on helpompi käyttää ja lukea!
 - Pääotsikkon orientaatio muutuu myös täysin!

 ![Kuva ID pohjaisesta osoituksesta!](/READMEASSETS/Responsive.gif)
 
 4. **Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)**
 - Nettisivulla on käytetty molempia Flex-boxeja sekä Gridejä. Gridin näkee index.htm tiedostostossa ja flex boxeja näkee molemmissa contact ja index sivuilla
 5. **Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.of the content.**
 - Olen todella huono frontendin tekemisessä sillä minulla ei yksinkertaisesti ole silmää aestetiikkaan, mutta toivottavasti se ei ole aivan hirveä! 

  #  <span style="color:yellow;">JAVA </span>
  1. **Simple interactions (like alerts on button click).**
  - Tämä varmaan täytyy ajastimessa joka aloitetaan heti sivun latauksessa joka laukaisee alertin nettisivulla joka kysyy käyttäjältä tykkääkö hän nettisivusta.
  - Myös contact sivun from antaa alertin jos viesti saadaan lähetettyä submit nappulan painamisen jälkeen jonka näkee edeltävässä demovideossa!

  ![Image of the alert](/READMEASSETS/alert.png)
  
  2. **Multiple event listeners and basic DOM manipulations.**
  - Nettisivulla on lomake elementti, 4 nappia, linkkejä jotka kaikki sisältävät kuuntelijoita. 
  - Napit tekevät DOM manipuloitia galleriassa vaihtaakseen kuvaa ja muita elementtejä!
  - Ajastettu alert joka kysyy käyttäjän mielipidettä vaihtaa otsikon vieressä olevaa emojia! 
  - Lomakke sisältää eri virheen käsittelyjä jotka kertovat käyttäjälle DOM manipulaatiota käyttäen mistä virheestä on kyse!
  - Heti latauksessa aloitettu timer kokoajan tekee DOM manipulaaatiota automaattisessa kuva esittelyssä!
  - Javascriptin puolella rakennan lisää taulukkoa joka on myös DOM manipulaatiota!
  3. **Use of arrays, objects, and functions.**
  - Kurkkaamalla javascriptiin näkee, että sivulla on käytetty kaikkia.
  - Arraytä käytin kuvien osotteiden talletamiseen sekä objectien osoitteiden talettamiseen funktionaalisuutta varten!
  - Objecteja ohjaamaan gallerian toiminnalisuutta jota käytetään javascript.js tiedostossa galleryhandler luokassa!. 
  - Funtioita taas on vähän joka paikassa.
  4. **Advanced logic, looping through data, and dynamic DOM updates.**
  - Voit dynaamisesti vaikutta DOM elementteihin galleriassa. Javascript tiedostotoissa molemmissa on logiikkaa ja loopeja!
  - Taulukon rakentaminen käyttää for lauseita headereiden ja paragraphien laittamiseen tablerow ja tableheader luokissa!
  - Kuva esittelyn ImageTimer() funktio javascript.js tiedostossa sisältää foreach loopin.
  5. **Consistent use of Object-Oriented JavaScript principles.**
  - Verkkosivun kuvagalleriassa käytettiin molempia luokkia sekä objecteja jotka ohjaavat gallerian toiminnallisuutta.
  - Contact sivulla käytin myös luokkia lomakkeen logiikkaa rakentaessa ContactJs.js tiedostossa.
  - Sillä minulla oli todella huono mielikuvitus käytin myös polymorphismia taulukkojen rakentamiseen jossa funktio SetToTable() on Tableheader luokassa headerin asettaja ja Tablerow luokassa normaalin tiedon asetttaja. Tämän löytää javascript.js tiedostosta!

  #  <span style="color:red;">ASYNCHRONOUS OPERATIONS</span>
  1. **Use of timers**
  - Heti ensimmäisellä sivulla näkee vaihtuvan kuvan joka käyttää ajastinta.
  - Ensimmäiseltä sivulta myös löytyy ajastettu alertti joka pomppaa käyttäjälle tietyn ajan täyttessä. josta löytyy JAVA osuudesta kuva! 
  2. **Successful implementation of an AJAX call or Fetch**
  - Contact sivulla on lomake elementti joka tekee POSTin tietokantaan josta löytyy kohdassa viisi demovideo sekä contact sivulla on myös alaviittessä nappi jolla voi hakea kuvan koirasta https://dog.ceo/api/breeds/image/random apia käytteäen. Molemmat käyttävät fetchiä!
  3. **Data from the asynchronous call is displayed on the webpagev**
  - Contact sivulla on alaviitteessä nappi jossa lukee "press me for an image!" jos paina nappia tekee nettisivu API callin fetchiä käyttäen https://dog.ceo/api/breeds/image/random API:ta
  4. **Error handling is implemented (for failed API calls, etc.)**
  - Formissa on POSTi jossa on virheen käsittelyä. Jos kokeilet painaa sitä antaa se virheen ensin tyhjistä kentistä, mutta jos kentät ovat täytetty valittaa se verkko ongelmasta nettisivulla. (email osio vaatii "@" merkin)
 5. **Effective use of asynchronous data to enhance user experience (like filtering, sorting).**
 - Form käyttää fetch kirjastoa lähettääkseen POST methodilla tiedot tietokantaan.
 - Formissa on myös virheen käsittely joka estää POST methodin yrityksen jos yhetyttä ei saada tehtyä backendiin.
 - En laita backendiä githubiin sillä se on hyvin simppeli ja kukaan ei varmaan jaksa asentaa tietokantoja yms joten tässä on demo toiminnalisuudesta! https://youtu.be/ED5MO3o3Fq8
