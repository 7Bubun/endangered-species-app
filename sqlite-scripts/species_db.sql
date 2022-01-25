CREATE TABLE SPECIES(
SpeciesTag varchar(20) NOT NULL CONSTRAINT PK_SPECIES PRIMARY KEY,
FullSpeciesName varchar(40) NOT NULL,
Category varchar(25) NOT NULL
);

CREATE TABLE SPECIESDETAILS(
Id integer PRIMARY KEY,
SpeciesTag varchar(20) NOT NULL,
Information varchar(128) NOT NULL,
FOREIGN KEY(SpeciesTag) REFERENCES SPECIES(SpeciesTag)
);

CREATE TABLE SPECIESLINKS(
Id integer PRIMARY KEY,
SpeciesTag varchar(20) NOT NULL,
 Link varchar(255) NOT NULL,
 FOREIGN KEY(SpeciesTag) REFERENCES SPECIES(SpeciesTag)
);