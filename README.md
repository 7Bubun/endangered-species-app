# endangered-species-app
 Projekt zaliczeniowy nr 3 na zajęcia z przedmiotu "Wprowadzenie do aplikacji i rozwiązań opartych o Sztuczną Inteligencję i Microsoft Azure". 

## Główne funkcjonalności
-pokazywanie zagrożonych gatunków na wybranym na mapie obszarze 
-klasyfikacja zwierząt na obrazach i wyświetlanie komunikatu, jeśli zwierzę jest przedstawicielem zagrożonego gatunku
-miniencyklopedia zawierająca informacje na temat niektórych zagrożonych gatunków oraz linki do dalszych informacji (artykuły itp. z stron trzecich)
-integralność wcześniej wymienionych funkcjonalności między sobą, np. jeśli w wyniku klasyfikacji model zwróci zagrożony gatunek, to powinien również zwrócić link do strony miniencyklopedii opisującej dany gatunek (jeśli posiada wpis)

## Architektura
![azure_proj3_diagram](https://user-images.githubusercontent.com/62255561/145049140-054a7ca2-c248-48a9-913f-bdded98ca551.jpg)


1. Cognitive Services - klasyfikacja zwierząt na zdjęciach
2. Maps - mapa, kliknięcie na dany region pokazuje informacje na temat zagrożonych gatunków na wybranym terytorium
3. Storage Account - przechowywanie obrazów w Blob Storage
4. Functions - zarządzanie danymi z bazy danych oraz Blob Storage
5. SQL Database - przechowywanie danych (poza obrazami) 
6. Key Vault - przechowywanie sekretów
7. App Services - hostowanie aplikacji
