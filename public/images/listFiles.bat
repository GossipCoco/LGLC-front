@echo off
setlocal enabledelayedexpansion

:: Chemin du dossier à lister (ADAPTE si besoin)
set "folder=C:\Users\gossi\Documents\Project\Project-Warriors\front-app-v3\public\images"

:: Fichier où enregistrer la liste
set "output=liste_images.txt"

:: Nettoyage de l'ancien fichier si existe
if exist "%output%" del "%output%"

:: Boucle sur tous les fichiers .png et .jpg (et autres si tu veux)
for /R "%folder%" %%f in (*.png *.jpg *.jpeg *.webp) do (
    echo %%f >> "%output%"
)

echo Liste terminée.
pause
