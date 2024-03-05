//1. Create a new directory learn-branching
//mkdir learn-branching

//2. Go inside learn-branching and initialize Git
//cd learn-branching
//git init

//3. Create a new file called, index.txt. Also add atleast one line in it, it can be anything.
//echo Hello, this is my first line in index.txt > index.txt

//4. Add index.txt to staging area and then commit it as well.
//git add index.txt
//git commit -m "Initial commit with index.txt"

//5. Check log in the decorated form and read the commit history, especially note where HEAD is and which branch are you on.
//git log --oneline --decorate --graph --all

//6. Create a new branch called login (use git branch commmand to do this)
//git branch login

//7. Create another branch called dashboard (use git branch commmand to do this)
//git branch dashboard

//8. Switch to login branch
//git switch login

//9. Add a file called login.txt, add a line in it.
//echo "This is the login branch." > login.txt
//git add login.txt
//git commit -m "Add login.txt with a line on login branch"

//10. Change the first line index.txt, change can be anything.
//git add index.txt
//git commit -m "Change the first line in index.txt"


// 11.Add all changes to staging and then commit it.
//git add .
//git commit -m "Committing changes to index.txt and adding login.txt"


//12. Again check log in the decorated form and read the commit history.
//git log --oneline --decorate --graph --all


// 13.Now switch to master branch.
//git switch master

// 14.Take a look at all the files you have in this branch. Do you see login.txt that you created in previous steps? Do you understand what happened here and why login.txt is not available in master?
//git checkout login
//git ls-files

// 15.Check log again. How many commits do you see?
//git rev-list --count master

//16. Now merge the changes from login branch to master branch.
//git switch master
//git merge login
//git commit -m "Merge changes from login branch into master"

//17. Check log again. Notice the changes.
//git log --oneline --decorate --graph --all

//18. Now we won't need login again, so delete login branch.
//git branch -D login

//19. Now switch to the dashboard branch that we created earlier.
//git switch dashboard

// 20.Check log again, notice the position of HEAD.
//git log --oneline --decorate --graph --all

// 21.Create a new file called dashboard.txt. Add atleast one line to it.
//echo "This is the dashboard branch." > dashboard.txt

//22. Also change the first line in index.txt to something else, it can be anything other than the change you made in login branch.
//git add index.txt
//git commit -m "Change the first line in index.txt on dashboard branch"


//23. Stage and commit the changes.
//git add .
//git commit -m "Add dashboard.txt and change first line in index.txt on dashboard branch"


// 24.Check and examine log again.
//git log --oneline --decorate --graph --all

//25. Switch to master branch.
//git switch master

//26. Merge dashboard branch into master branch now.
//git switch master
//git merge dashboard
//git commit -m "Merge changes from dashboard branch into master"

//27. You would have got a merge conflict. Try to resolve the conflict by removing the markers and selectively keeping the part from both the branches.
//git merge dashboard
//git add path/to/conflicted/file
//git commit -m "Merge changes from dashboard branch into master"

// 28.Stage and commit the changes made while resolving the conflict.
//git add path/to/conflicted/file
//git commit -m "Resolve merge conflict by incorporating changes from both branches"

// 29.Check log again.
//git log --oneline --decorate --graph --all
