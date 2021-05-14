cmdkey /delete:vscode-insiders-microsoft.login/account
cmdkey /delete:git:https://github.com
::shutdown -s -t 30 -c "may tinh se tat trong 30s nua"
taskkill /F /IM chrome.exe /T > nul

del /f/q/s frontend\src\*.* >nul
del /f/q/s backend\routes\*.* >nul
del /f/q/s backend\views\*.* >nul
del /f/q/s .\database.txt
del /f/q/s .\database.sql
del /f/q/s .\databaseMore.txt
del /f/q/s .\scriptGetUser.js
del /f/q/s .\script.js
del /f/q/s .\readme.md
del /f/q/s .\.gitignore

del /f/q/s %temp%\*.* >nul