@echo off
setlocal enabledelayedexpansion

:: Dossier cible
set "target=public\images"

:: Fichier où enregistrer la liste
set "output=list_of_images.txt"

:: Vide le fichier avant d'écrire
echo. > %output%

:: Parcourir tous les fichiers dans target et sous-dossiers
for /r "%target%" %%f in (*.png *.jpg *.jpeg *.svg *.gif) do (
    echo %%f >> %output%
)

echo Liste terminée. Fichier généré : %output%
pause
