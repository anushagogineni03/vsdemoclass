//1.Create a new directory named my-first-repo
// mkdir my-first-repo
// cd my-first-repo
// git init
// touch .gitkeep
// git add .
// git commit -m "Initial commit"
// Replace .gitkeep with any other file you want to add to the folder.
//git config --global user.name ""

//2. Go inside my-first-repo and then initialize Git 
// git init
// This command sets up a new Git repository within the folder.

//3. Add a new file called about-me.txt
// The cat command allows you to create and type directly into the text file. It’s user-friendly and efficient. To create an empty yet editable file, use this command:
// cat >> about-me.txt

//4. Check the status of your repo. Read the status report carefully. Try to understand as much as you can.
// The git status command provides valuable information about the state of your local directory and the staging area. Here’s what you need to know:

//5. Add a new line in about-me.txt, it can be anything.
//echo "This is my new line." >> about-me.txt

//6. Again, check the status of your repo.
//The git status command provides valuable insights into the state of your local directory and the staging area.

//7. Add about-me.txt to the staging area.
//git add about-me.txt

//8. Now, commit the changes made so far.
//git commit -m "Added content to about-me.txt"

//9. Check the log of your commit history. Read the commit history carefully and try to understand as much as you can.
//git log command used to see the history of all the commits which we done so far

//10. Now, make another file called about-altcampus.txt. Add a line to it, it can be anything.

//11. Again check the status of your repo. Read it carefully and try to make sense of changes happening in the repo.
//The git status command provides valuable insights into the state of your local directory and the staging area

//12.Go ahead and add the changes to the staging area.
//git add <file name> this command is used to add the file from working tree to staging area

//13. Check the status of the repo again. Read and try to understand what changed again.
// git status used to check the status of the created repository

//14. Now, make the commit again.
//git commit m"message" to take snapshot or commit the file along with a message which has done

//15. Check the log of your commit history again.
//git log command used to see the history of all the commits which we done so far