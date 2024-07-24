@echo off
setlocal enabledelayedexpansion

:: Set the directory path
set "directoryPath=C:\Users\gossi\OneDrive\Documents\project\Project-Warriors\front-app-v3\public\images\parallax\fond"

:: Set the output SQL file
set "outputSQLFile=insert_files.sql"

:: Set the table name and columns
set "tableName=Parallax"
set "idColumn=Id"
set "fileNameColumn=Name"
set "Position=0"

:: Generate SQL file header
(
echo USE laGuerreDesClans;
echo GO
echo SET NOCOUNT ON;
echo
) > "%outputSQLFile%"

:: Initialize a counter for IDs
set /a idCounter=1

:: List files and generate SQL insert statements
for %%f in ("%directoryPath%\*.*") do (
    set "fileName=%%~nxf"
    (
    echo INSERT INTO %tableName% (%idColumn%, %fileNameColumn%, '%Position%') VALUES ('!idCounter!', '!fileName!', '0');
    ) >> "%outputSQLFile%"
    set /a idCounter+=1
)

:: Generate SQL file footer
(
echo
echo SET NOCOUNT OFF;
echo GO
) >> "%outputSQLFile%"

echo SQL script has been generated: %outputSQLFile%
pause
