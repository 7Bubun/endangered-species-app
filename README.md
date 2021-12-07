# endangered-species-app
 Projekt zaliczeniowy nr 3 na zajęcia z przedmiotu "Wprowadzenie do aplikacji i rozwiązań opartych o Sztuczną Inteligencję i Microsoft Azure". 

## Główne funkcjonalności
-pokazywanie zagrożonych gatunków na wybranym na mapie obszarze 
-klasyfikacja zwierząt na obrazach i wyświetlanie komunikatu, jeśli zwierzę jest przedstawicielem zagrożonego gatunku
-miniencyklopedia zawierająca informacje na temat niektórych zagrożonych gatunków oraz linki do dalszych informacji (artykuły itp. z stron trzecich)
-integralność wcześniej wymienionych funkcjonalności między sobą, np. jeśli w wyniku klasyfikacji model zwróci zagrożony gatunek, to powinien również zwrócić link do strony miniencyklopedii opisującej dany gatunek (jeśli posiada wpis)

## Architektura
![azure_proj3_diagram](https://user-images.githubusercontent.com/62255561/145049140-054a7ca2-c248-48a9-913f-bdded98ca551.jpg)


Cognitive Services - klasyfikacja zwierząt na zdjęciach
Maps - mapa, kliknięcie na dany region pokazuje informacje na temat zagrożonych gatunków na wybranym terytorium
Storage Account - przechowywanie obrazów w Blob Storage
Functions - zarządzanie danymi z bazy danych oraz Blob Storage
SQL Database - przechowywanie danych (poza obrazami) 
Key Vault - przechowywanie sekretów
App Services - hostowanie aplikacji
