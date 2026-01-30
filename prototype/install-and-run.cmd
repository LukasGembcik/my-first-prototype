@echo off
cd /d "%~dp0"
where node >nul 2>nul || (
  echo Node.js not found. Install LTS from https://nodejs.org and restart the terminal.
  exit /b 1
)
echo Installing dependencies...
call npm install
if errorlevel 1 exit /b 1
echo Done. Start the dev server with: npm run dev
pause
