@echo off
title AI Portfolio Controller
color 0b

echo ========================================================
echo   AI ENGINEER PORTFOLIO - LAUNCHER
echo ========================================================
echo.

:: Check if Python is installed
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [!] Python not found in system path.
    echo [*] Fallback: Opening index.html directly...
    echo.
    start "" "index.html"
) else (
    echo [*] Python detected. Starting local server...
    echo [*] Hosting at: c
    echo.
    echo [!] KEEP THIS WINDOW OPEN while viewing the site.
    echo.
    
    :: Open browser after a slight delay to ensure server is up
    timeout /t 2 >nul
    start "" http://localhost:8000
    
    :: Start the server
    python -m http.server 8000
)

pause
