# deploy.ps1 - Automate React site deployment to GitHub Pages (main branch)

# Step 1: Build the project
Write-Host "Building project..."
npm run build

# Step 2: Remove old docs folder
if (Test-Path docs) {
    Write-Host "Removing old docs folder..."
    Remove-Item -Recurse -Force docs
}

# Step 3: Rename build to docs
Write-Host "Renaming build folder to docs..."
Rename-Item build docs

# Step 4: Stage docs folder
Write-Host "Adding docs folder to git..."
git add docs

# Step 5: Commit changes
$commitMessage = Read-Host "Enter commit message"
git commit -m $commitMessage

# Step 6: Push to GitHub
Write-Host "Pushing to GitHub..."
git push origin main

Write-Host "Deployment complete! Your site should be live shortly."
