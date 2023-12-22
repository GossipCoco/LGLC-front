create table [dbo].[user](
Id nvarchar(255),
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
    Id nvarchar(255),
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
    Id nvarchar(255)
)
create table TypeCharacter(
    Id nvarchar(255)
)
 create table Clan(
    Id nvarchar(255),
    Description nvarchar(max),
    LocationType nvarchar(max)
)

create table Image(
    Id nvarchar(255),
    typeImage  nvarchar(255),
)

create table ColorBG(
    Id nvarchar(255),
)