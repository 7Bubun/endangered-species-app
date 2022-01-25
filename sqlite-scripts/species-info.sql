/*
SPECIES:
*/

INSERT INTO SPECIES(SpeciesTag, FullSpeciesName, Category)
VALUES
('siberian-tiger', 'Siberian tiger', 'Endangered'),
('przewalski-horse', 'Przewalski''s horse', 'Endangered'),
('kemp-ridley', 'Kemp''s ridley sea turtle', 'Critically Endangered'),
('softshell-turtle', 'Asian giant softshell turtle', 'Critically Endangered'),
('edwards-pheasant', 'Edwards''s pheasant', 'Critically Endangered'),
('snow-leopard', 'Snow leopard', 'Vulnerable'),
('rhino', 'Rhinocesor', 'Endangered'),
('giant-panda', 'Giant panda', 'Vulnerable'),
('red-handfish', 'Red handfish', 'Critically endangered'),
('red-panda', 'Red panda', 'Endangered')

/*
SPECIES DETAILS:
*/
INSERT INTO SPECIESDETAILS(Id, SpeciesTag, Information)
VALUES
(1, 'siberian-tiger', 'Siberian tiger is the largest subspecies of tiger and the world''s largest cat.'),
(2, 'siberian-tiger', 'Almost all of Siberian tigers are found in eastern Russia, mainly at Primorsky Krai.'),
(13, 'siberian-tiger', 'This is the only subspecies of tiger that can survive in extremely cold areas thanks to the thick layer of fat and dense fur.'),
(3, 'przewalski-horse', 'All of Przewalski''s horses live today are descended from 12 individuals.'),
(4, 'przewalski-horse', 'Przewalski''s horses have 2 chromosomes more (66) than domestic horses (64).'),
(5, 'kemp-ridley', 'This is the most endangered and the smallest sea turtle in the world.'),
(6, 'kemp-ridley', 'Over 90 percent of all Kemp''s ridley nesting occurs in Tamaulipas, a Mexican state.'),
(7, 'softshell-turtle', 'Those turtles lack the bony scutes on their carapace, which makes their shell more leathery than bony.'),
(8, 'softshell-turtle', 'Carnivores, feeding on fish, small amphibians and other aquatic animals.'),
(9, 'edwards-pheasant', 'Pheasant subspecies living only in the rainforests of Vietnam with their population being estimated as between 50 and 250 birds.'),
(10, 'edwards-pheasant', 'Males are blue-black in color and females are chestnut brown. The chicks are brown in color.'),
(11, 'snow-leopard', 'They mostly live at high altitudes in for example Kunlun, Altai, Tian Shan, Pamir or Himalaya mountains.'),
(12, 'snow-leopard', 'In January 2020 at Illinois zoo one of the snow leopards died after contracting Covid-19.'),
(14, 'rhino', 'Out of five rhino species listed by the IUCN red list, White Rhino is the only non threatened species.'),
(15, 'rhino', 'Their powerful horns are made up of keratin, which is the same protein that forms the basis of our hair and nails.'),
(16, 'rhino', 'Rhinos communicate not only with noises, but also with excrement and urine.'),
(17, 'rhino', 'Despite their enormous size they can reach a speed of 50 km/h.'),
(18, 'giant-panda', 'Their diet mainly consists of bamboos and leaves. They spend a lot of time eating - about 12 hours a day.'),
(19, 'giant-panda', 'Pandas have 6 "fingers", one of which has similar functions to a human thumb.'),
(20, 'giant-panda', 'Despite feeding on plants, pandas'' diet is closer to that of carnivore than herbivore, as bamboos contain lots of proteins.'),
(21, 'red-handfish', 'Type of anglerfish, known for their fins, which resemble human hands.'),
(22, 'red-handfish', 'Red handfish movement looks like "walking" across the sea floor, not swimming.'),
(23, 'red-handfish', 'This species is at high risk of extinction because of pollution or warming seas that affect their seaweed habitat.'),
(24, 'red-panda', 'They are actually more closely related to racoons than the black and white giant pandas.'),
(25, 'red-panda', 'But just like giant pandas, they mostly feed on bamboos and have an extended wrist bone that has the same function as our thumb.'),
(26, 'red-panda', 'Red panda is a mascot of Firefox web browser.'),
(27, 'red-panda', 'Red pandas are slightly bigger than domestic cats.'),
(28, 'przewalski-horse', 'In 2020, the first cloned Przewalski''s horse was born'),
(29, 'kemp-ridley', 'These turtles spend their entire life in the water. Only females visit shore once per year or every second year to lay eggs.'),
(30, 'snow-leopard', 'They can prey on animals up to three times their own body weight.'),
(31, 'snow-leopard', 'Snow leopard cannot roar. Instead, their sounds include the chuff, growl, hiss, and mew.')

/*
SPECIES LINKS
*/
INSERT INTO SPECIESLINKS(Id, SpeciesTag, Link)
VALUES
(1, 'siberian-tiger', 'https://www.iucnredlist.org/species/15956/5333650'),
(2, 'przewalski-horse', 'https://www.iucnredlist.org/species/41763/97204950'),
(3, 'kemp-ridley', 'https://www.iucnredlist.org/species/11533/155057916'),
(4, 'softshell-turtle', 'https://www.iucnredlist.org/species/135458600/1076984'),
(5, 'edwards-pheasant', 'https://www.iucnredlist.org/species/45354985/129928203'),
(6, 'snow-leopard', 'https://www.iucnredlist.org/species/22732/50664030'),
(7, 'rhino', 'https://www.savetherhino.org/'),
(8, 'giant-panda', 'https://www.iucnredlist.org/species/712/121745669'),
(9, 'giant-panda', 'https://www.worldwildlife.org/species/giant-panda'),
(10, 'red-handfish', 'https://www.iucnredlist.org/species/123423510/123424379'),
(11, 'red-handfish', 'https://handfish.org.au/'),
(12, 'red-panda', 'https://redpandanetwork.org/'),
(13, 'red-panda', 'https://www.iucnredlist.org/species/714/110023718'),
(14, 'przewalski-horse', 'https://przewalskihorse.nl/'),
(15, 'snow-leopard', 'https://snowleopard.org/')

