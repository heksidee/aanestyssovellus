# Äänestyssovellus

Tämä on äänestyssovellus, jossa  uusi käyttäjä rekisteröityy ja tämän jälkeen voi kirjautua sovellukseen sisään.

Kun käyttäjä on kirjautunut sisään sovellukseen, voi hän tarkastella muiden antamia ääniä eri äänestyksissä ja tarkastaa äänestystilanteen. Käyttäjä voi myös valita äänestyksen ja antaa äänen kyseisessä äänestyksessä. Käyttäjä voi antaa vain yhden äänen per äänestys. 

Sovelluksella on myös ylläpitäjä jolla on hieman laajemmat oikeudet käyttäjään verrattuna. Ylläpitäjä voi edellämainittujen asioiden lisäksi myös luoda äänestyksiä ja poistaa niitä.

## Sovelluksen repository

https://github.com/heksidee/aanestyssovellus.git

## Uuden käyttäjän rekisteröityminen

Käyttäjän tulee rekisteröityä ensimmäisellä kerralla. Käyttäjänimi saa sisältää vain kirjaimia tai numeroita. Jos käyttäjänimi sisältää erikoismerkkejä, antaa sovellus tästä virheilmoituksen. 

Salasanan tulee sisältää vähintään 6 merkkiä, joista vähintään yhden on oltava iso kirjain ja vähintään yhden numero. Jos nämä ehdot eivät täyty, antaa sovellus tästä virheilmoituksen. 

## Sisäänkirjautuminen sovellukseen

Kun sovellukseen kirjaudutaan sisään käyttäjänä tai ylläpitäjänä, tarkastaa sovellus aina käyttäjänimen sekä salasanan. Jos edellämainitut ovat hyväksyttyjä, päästää sovellus kirjautumaan sisään. Jos jompikumpi, käyttäjänimi tai salasana, eivät täsmää antaa sovellus siitä ilmoituksen.

## Käyttäjän sisäänkirjauduttua

Kun käyttäjä on kirjautunut sisään sovellukseen, näkee hän etusivulla ylläpitäjän tekemiä äänestyksiä sekä muiden käyttäjien antamat äänet äänestyksissä. 

Käyttäjän on mahdollista äänestää luoduissa äänestyksissä. Rajoituksena käyttäjällä on kuitenkin yksi ääni per äänestys. Sovellus tarkastaa tämän ehdon aina ja jos käyttäjä yrittää antaa toisen äänen äänestyksessä, antaa sovellus tästä virheilmoituksen. 

## Ylläpitäjän sisäänkirjauduttua

Ylläpitäjä voi tarkastaa ääniä joita on annettu äänestyksissä ja niiden tilanteen. Ylläpitäjä voi myös luoda uusia äänestyksiä sekä poistaa näitä. 