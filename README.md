# endangered-species-app
 Projekt zaliczeniowy nr 3 na zajęcia z przedmiotu "Wprowadzenie do aplikacji i rozwiązań opartych o Sztuczną Inteligencję i Microsoft Azure". 

## Opis projektu
Głównym założeniem projektu jest stworzenie aplikacji webowej zwiększającej świadomość społeczną na temat zagrożonych gatunków. Aplikacja umożliwia poszerzenie wiedzy na ten temat. Ponadto, aplikacja daje możliwość weryfikacji, czy dane zwierzę jest przedstawicielem zagrożonego gatunku. Komponenty systemu zostały wdrożone na chmurze Microsoft Azure.

## Link do wideoprezentacji
https://www.youtube.com/watch?v=kSzz2birLzE

## Skład zespołu
- Szymon Kuś https://github.com/ogoras
- Kacper Hołubowicz https://github.com/KacperHolubowicz
- Jakub Grenda https://github.com/7Bubun
- Paweł Cegielski https://github.com/Skokus

## Główne funkcjonalności
- pokazywanie zagrożonych gatunków na wybranym na mapie obszarze 
- klasyfikacja zwierząt na obrazach i wyświetlanie kategorii zagrożenia, do której dany gatunek należy, a także linków do informacji na ich temat
- miniencyklopedia zawierająca informacje na temat niektórych zagrożonych gatunków oraz linki do dalszych informacji (artykuły itp. z stron trzecich)

## Schemat działania
### mapa
 1. Użytkownik wybiera zakładkę "Map of Endangered Species".
 2. Wyświetlenie użytkownikowi widoku mapy z zaznaczonymi punktami związanymi z poszczególnymi krajami.
 3. Po wciśnięciu punktu prawym przyciskiem myszy pod mapą pojawia się lista zagrożonych gatunków występujących w danym kraju.
### klasyfikacja obrazów
 1. Użytkownik wybiera zakładkę "Species Classification".
 2. Użytkownik wybiera zdjęcie zwierzęcia z swojego urządzenia i potwierdza.
 3. Aplikacja wyświetla wynik klasyfikacji w postaci nazwy zagrożonego garunku, kategorii zagrożenia oraz linki do zasobów informacyjnych.
### encyklopedia
 1. Użytkownik wybiera zakładkę "Encyclopedia".
 2. Aplikacja wyświetla informacje.

## Architektura
![architektura_azure_proj3](https://user-images.githubusercontent.com/62255561/150975141-926e0054-87a7-4839-a634-b8a404235e45.jpg)

1. Cognitive Services - klasyfikacja zwierząt na zdjęciach
2. Maps - mapa, kliknięcie na dany region pokazuje informacje na temat zagrożonych gatunków na wybranym terytorium
3. Storage Account - przechowywanie obrazów w Blob Storage
4. Functions - zarządzanie danymi z bazy danych oraz Blob Storage
5. SQL Database - przechowywanie danych (poza obrazami) 
6. App Services - hostowanie aplikacji

## Stos technologiczny
- .NET 5
- React.js
- Node.js
- JavaScript

## Zakres prac
- Funkcjonalność mapy (widok + logika): Szymon Kuś, Paweł Cegielski
- Model klasyfikacji obrazów Cognitive Services: Kacper Hołubowicz, Jakub Grenda
- Front-end aplikacji webowej: Jakub Grenda, Paweł Cegielski, Szymon Kuś
- Azure Functions (back-end aplikacji webowej): Kacper Hołubowicz
- Baza danych oraz Blob Storage (konfiguracja oraz dane): Kacper Hołubowicz
- Wdrożenie aplikacji na Azure: Paweł Cegielski, Kacper Hołubowicz
