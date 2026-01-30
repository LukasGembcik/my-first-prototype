# Run from repo root or from prototype/
# Requires: Node.js LTS installed (nodejs.org)

$ErrorActionPreference = "Stop"
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $scriptDir

if (-not (Get-Command node -ErrorAction SilentlyContinue)) {
    Write-Host "Node.js not found. Install LTS from https://nodejs.org and restart the terminal."
    exit 1
}

Write-Host "Installing dependencies..."
npm install
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Done. Start the dev server with: npm run dev"
# Uncomment next line to start dev server automatically:
# npm run dev
