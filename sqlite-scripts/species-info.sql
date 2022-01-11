/*
SPECIES:
*/

INSERT INTO SPECIES(SpeciesTag, FullSpeciesName, Category)
VALUES
('siberian-tiger', 'Siberian tiger', 'Endangered'),
('przewalski-horse', "Przewalski's horse", 'Endangered'),
('kemp-ridley', "Kemp's ridley sea turtle", 'Critically Endangered'),
('softshell-turtle', 'Asian giant softshell turtle', 'Critically Endangered'),
('edwards-pheasant', "Edwards's pheasant", 'Critically Endangered'),
('snow-leopard', 'Snow leopard', 'Vulnerable');


/*
SPECIES DETAILS:
*/
INSERT INTO SPECIESDETAILS(SpeciesTag, Information)
VALUES
('siberian-tiger', "Siberian tiger is the largest subspecies of tiger and the world's largest cat."),
('siberian-tiger', "Almost all of Siberian tigers are found in eastern Russia, mainly at Primorsky Krai. This is the only subspecies of tiger that can survive in extremely cold areas thanks to the thick layer of fat and dense fur."),
('przewalski-horse', "All of Przewalski's horses live today are descended from 12 individuals."),
('przewalski-horse', "Przewalski's horses have 2 chromosomes more (66) than domestic horses (64)."),
('kemp-ridley', "This is the most endangered and the smallest sea turtle in the world."),
('kemp-ridley', "Over 90 percent of all Kemp's ridley nesting occurs in Tamaulipas, a Mexican state."),
('softshell-turtle', "Those turtles lack the bony scutes on their carapace, which makes their shell more leathery than bony."),
('softshell-turtle', "Carnivores, feeding on fish, small amphibians and other aquatic animals."),
('edwards-pheasant', "Pheasant subspecies living only in the rainforests of Vietnam with their population being estimated as between 50 and 250 birds."),
('edwards-pheasant', "Males are blue-black in color and females are chestnut brown. The chicks are brown in color. These birds have red legs. Male pheasants also have a white crest on their heads."),
('snow-leopard', "They mostly live at high altitudes in for example Kunlun, Altai, Tian Shan, Pamir or Himalaya mountains."),
('snow-leopard', "In January 2020 at Illinois zoo one of the snow leopards died after contracting Covid-19.");

\*
SPECIES LINKS
*/
INSERT INTO SPECIESLINKS(SpeciesTag, Link)
VALUES
('siberian-tiger', 'https://www.iucnredlist.org/species/15956/5333650'),
('przewalski-horse', 'https://www.iucnredlist.org/species/41763/97204950'),
('kemp-ridley', 'https://www.iucnredlist.org/species/11533/155057916'),
('softshell-turtle', 'https://www.iucnredlist.org/species/135458600/1076984'),
('edwards-pheasant', 'https://www.iucnredlist.org/species/45354985/129928203'),
('snow-leopard', 'https://www.iucnredlist.org/species/22732/50664030');