@echo off
:BEGIN
echo (1) Dev
echo (2) Local
CHOICE /N /C:12 /M "Pick mode"
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
END: