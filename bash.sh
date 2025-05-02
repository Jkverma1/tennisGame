#!/bin/bash

# Ensure that the repository is initialized
git init

# Set up the Git user details (if not already set)
git config user.name "Jatin Kumar"
git config user.email "your_github_email@example.com"

# Loop through the dates of April (1st to 30th)
for day in {1..30}
do
    # Format the date as YYYY-MM-DD, ensuring leading zero for day
    date="2025-04-$(printf "%02d" $day)"

    # Create a dummy HTML file for the commit
    echo "<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <title>Commit for $date</title>
</head>
<body>
    <h1>Commit for $date</h1>
    <p>This is a dummy HTML page with at least 50 lines of content for commit purposes.</p>
    <p>Line 2 content</p>
    <p>Line 3 content</p>
    <p>Line 4 content</p>
    <p>Line 5 content</p>
    <p>Line 6 content</p>
    <p>Line 7 content</p>
    <p>Line 8 content</p>
    <p>Line 9 content</p>
    <p>Line 10 content</p>
    <p>Line 11 content</p>
    <p>Line 12 content</p>
    <p>Line 13 content</p>
    <p>Line 14 content</p>
    <p>Line 15 content</p>
    <p>Line 16 content</p>
    <p>Line 17 content</p>
    <p>Line 18 content</p>
    <p>Line 19 content</p>
    <p>Line 20 content</p>
    <p>Line 21 content</p>
    <p>Line 22 content</p>
    <p>Line 23 content</p>
    <p>Line 24 content</p>
    <p>Line 25 content</p>
    <p>Line 26 content</p>
    <p>Line 27 content</p>
    <p>Line 28 content</p>
    <p>Line 29 content</p>
    <p>Line 30 content</p>
    <p>Line 31 content</p>
    <p>Line 32 content</p>
    <p>Line 33 content</p>
    <p>Line 34 content</p>
    <p>Line 35 content</p>
    <p>Line 36 content</p>
    <p>Line 37 content</p>
    <p>Line 38 content</p>
    <p>Line 39 content</p>
    <p>Line 40 content</p>
    <p>Line 41 content</p>
    <p>Line 42 content</p>
    <p>Line 43 content</p>
    <p>Line 44 content</p>
    <p>Line 45 content</p>
    <p>Line 46 content</p>
    <p>Line 47 content</p>
    <p>Line 48 content</p>
    <p>Line 49 content</p>
    <p>Line 50 content</p>
</body>
</html>" > "dummy_commit_$date.html"

    # Add the file to the git staging area
    git add "dummy_commit_$date.html"

    # Commit the changes with the date
    GIT_AUTHOR_DATE="$date 12:00:00" GIT_COMMITTER_DATE="$date 12:00:00" git commit -m "Commit for $date"

    # Output progress to the user
    echo "Created commit for $date"
done

echo "All commits for April have been made! Now push to GitHub."

# After the loop, set up the GitHub repository and push
git remote add origin https://github.com/Jkverma1/commit.git
git branch -M main
git push -u origin main
