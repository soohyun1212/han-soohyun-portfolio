@echo off
setlocal
cd /d "%~dp0"
if exist ".tools\node-v24.22.2-win-x64\npm.cmd" set "PATH=%CD%\.tools\node-v24.22.2-win-x64;%PATH%"
where npm.cmd >nul 2>nul
if errorlevel 1 (
  echo Please install Node.js 24 LTS, then open this file again.
  pause
  exit /b 1
)
if not exist "node_modules\next\package.json" call npm.cmd ci --no-audit --no-fund
if errorlevel 1 exit /b 1
call npm.cmd run dev
endlocal
