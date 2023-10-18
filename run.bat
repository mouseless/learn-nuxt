@echo off
:BEGIN
echo (1) Dev
echo (2) Local
echo (3) Eslint
echo (4) Eslint Fix
CHOICE /N /C:12345 /M "Pick mode"
IF ERRORLEVEL == 4 GOTO Eslint-Fix
IF ERRORLEVEL == 3 GOTO Eslint
IF ERRORLEVEL == 2 GOTO Local
IF ERRORLEVEL == 1 GOTO Dev
GOTO END
:Dev
cd .theme
npm run dev
cd ..
:Local
cd .theme
npm run local
cd ..
:Eslint
cd .theme
npm run lint
cd ..
:Eslint-Fix
cd .theme
npx eslint . --fix
cd ..
END: