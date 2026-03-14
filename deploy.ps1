# deploy.ps1 - Automate React site deployment to GitHub Pages (main branch)

Write-Host "Building project..."
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed. Deployment stopped."
    exit 1
}

if (Test-Path docs) {
    Write-Host "Removing old docs folder..."
    Remove-Item -Recurse -Force docs
}

if (Test-Path build) {
    Write-Host "Renaming build folder to docs..."
    Rename-Item build docs
} else {
    Write-Host "Build folder not found. Deployment stopped."
    exit 1
}

Write-Host "Adding all changed files to git..."
git add .

$commitMessage = Read-Host "Enter commit message"

git diff --cached --quiet
if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit."
} else {
    git commit -m "$commitMessage"
}

Write-Host "Pushing to GitHub..."
git push origin main

Write-Host "Deployment complete! Your site should be live shortly."