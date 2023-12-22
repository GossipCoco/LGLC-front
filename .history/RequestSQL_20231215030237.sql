create table [dob].[user](
Id navchar(255),
FirstName navchar(255),
LastName navchar(255),
UserName navchar(255),
Login navchar(255),
Password navchar(255),
Email navchar(255),
AvatarId navchar(255),
ColorBGId navchar(255),
BirthDay DateTimeOffset,
LastConnexion  DateTimeOffset
);

create table Character(
    Id navchar(255),
    TypeCharacterId  navchar(255),
    OfficialAvatarId navchar(255),
    GradeId nvarchar(255),
    CurrentClanId nvarchar(255)
    CurrentName navchar(255),
    KitName navchar(255),
    ApprenticeName navchar(255),
    WarriorName navchar(255),
    OlderName navchar(255),
    MedecineName navchar(255),
    LeaderName navchar(255),
    Age Int,
    Description nvarchar(max)
    Biography nvarchar(max)
)

create table Grade(
    Id navchar(255)
)
create table TypeCharacter(
    Id navchar(255)
)
 create Clan(
    Id navchar(255)
    Description nvarchar(max)
    LocationType nvarchar(max)
)