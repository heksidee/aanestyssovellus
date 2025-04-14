# Äänestyssovellus

Tämä on äänestyssovellus, jossa  käyttäjä valitsee roolikseen joko ylläpitäjä tai äänestäjä.

Sovelluksen eri rooleilla on eri oikeuksia sovelluksessa.

Sovelluksella ylläpitäjä voi luoda uusia äänestyksiä sekä poistaa niitä. 

Äänestäjä pääsee näkemään luotuja äänestyksiä ja niiden tilanteita sekä äänestää valitsemaansa äänestystä.

## Sovelluksen repository

https://github.com/heksidee/aanestyssovellus.git

## Uuden äänestyksen luominen

Kun ylläpitäjä luo uuden äänestyksen, on siinä oltava kysymys ja vähintään kaksi vaihtoehtoa. Vaihtoehtoja äänestykseen voi luoda enemmänkin kuin kaksi. Jos tarvittavat kentät äänestyksen luomisessa eivät täytä kriteerejä, antaa sovellus tästä ilmoituksen.

## Äänestys

Käyttäjä ei voi antaa tyhjää ääntä, eli sovellus antaa ilmoituksen jos jotain vaihtoehtoa ei ole valittu. Käyttäjä voi äänestää useamman kerran samaa äänestystä. 

Käyttäjälle näkyy äänijakauma ja grafiikka kyseisen äänestyksen tilanteesta.

## Äänestyksen poistaminen

Kun ylläpitäjä poistaa äänestystä, kysyy sovellus aina varmistuksen, haluaako ylläpitäjä varmasti poistaa äänestyksen. 