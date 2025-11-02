create table [dbo].[user](
Id nvarchar(255) NOT NULL PRIMARY KEY,
FirstName nvarchar(255),
LastName nvarchar(255),
UserName nvarchar(255),
Login nvarchar(255),
Password nvarchar(255),
Email nvarchar(255),
AvatarId nvarchar(255),
ColorBGId nvarchar(255),
BirthDay DateTimeOffset,
LastConnexion  DateTimeOffset
);

create table Character(
    Id nvarchar(255) NOT NULL PRIMARY KEY,
    TypeCharacterId nvarchar(255),
    OfficialAvatarId nvarchar(255),
    GradeId nvarchar(255),
    CurrentClanId nvarchar(255),
    CurrentName nvarchar(255),
    KitName nvarchar(255),
    ApprenticeName nvarchar(255),
    WarriorName nvarchar(255),
    OlderName nvarchar(255),
    MedecineName nvarchar(255),
    LeaderName nvarchar(255),
    Age Int,
    Description nvarchar(max),
    Biography nvarchar(max)
)

create table Grade(
    Id nvarchar(255) NOT NULL PRIMARY KEY
)
create table TypeCharacter(
    Id nvarchar(255) NOT NULL PRIMARY KEY
)
 create table Clan(
    Id nvarchar(255) NOT NULL PRIMARY KEY,
    Description nvarchar(max),
    LocationType nvarchar(max)
)

create table Image(
    Id nvarchar(255) NOT NULL PRIMARY KEY,
    typeImage  nvarchar(255),
)

create table ColorBG(
    Id nvarchar(255) NOT NULL PRIMARY KEY,
)

ALTER TABLE  [dbo].[user]
ADD FOREIGN KEY (AvatarId) REFERENCES Image(Id);

ALTER TABLE  [dbo].[user]
ADD FOREIGN KEY (ColorBGId) REFERENCES ColorBG(Id);

ALTER TABLE Clan
ADD ImageId nvarchar(255);

ALTER TABLE  Clan
ADD FOREIGN KEY (ImageId) REFERENCES Image(Id);

create table Story(
    Id nvarchar(255) NOT NULL PRIMARY KEY,
    Name nvarchar(255),
    Summary nvarchar(max),
    UserId nvarchar(255),
)

create table StoryCharacter(
    Id nvarchar(255)
    CharacterId nvarchar(255)
    StoryId nvarchar(255)
)

Alter table StoryCharacter
ADD FOREIGN KEY (CharacterId) REFERENCES Character(Id)

ALTER TABLE StoryCharacter
ADD FOREIGN KEY (StoryId) REFERENCES Story(Id)


create TABLE chapter(
    Id nvarchar(255) NOT NULL PRIMARY KEY,
    Name nvarchar(255),
    Chapter nvarchar(max),
    StoryId nvarchar(255),
)

ALTER TABLE chapter
ADD FOREIGN KEY (StoryId) REFERENCES Story(Id)

ALTER TABLE Story
ADD FOREIGN KEY (UserId) REFERENCES [dbo].[user](Id)


<p><span class="font-weight-600">Objectif</span> : progresser en écriture dans l’univers Warriors avec un cadre bienveillant et des retours concrets.</p>
<p><span class="font-weight-600">Rythme</span> : un prompt hebdomadaire (+ un challenge mensuel) ; participation libre, lecture commune le week-end.</p>
<p><span class="font-weight-600">Fonctionnement</span> : on poste son brouillon (300–800 mots), chacun laisse 2 retours utiles (forme + fond), puis réécriture courte.</p>
<p><span class="font-weight-600">Prompts</span> : scènes d’amitié, batailles, introspections de guérisseurs, décisions de chefs, météo & terrain comme contraintes.</p>
<p><span class="font-weight-600">Relectures</span> : focus sur clarté, voix des personnages, cohérence du lore, gestion des ellipses, et finition des dialogues.</p>
<p><span class="font-weight-600">Règles</span> : respect, pas de spoilers majeurs sans balises, citer les références de canon si utilisées, indiquer le niveau de maturité.</p>
<p><span class="font-weight-600">Niveau</span> : ouvert débutant→confirmé ; tag [Débutant] ou [Confirmé] pour recevoir un retour adapté.</p><p>Outils : fiche personnage type, check-list de relecture, banque d’astuces (verbes d’action, variantes de rythme, descriptions).</p>
<p><span class="font-weight-600">Organisation</span> : un fil par prompt, posts épinglés (règles + calendrier), récap mensuel des progrès et coups de cœur.</p><p>Résultats attendus : 1 texte finalisé par mois, 2 retours donnés par texte posté, et un mini-portfolio personnel à la fin du trimestre.</p>




