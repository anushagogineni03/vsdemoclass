//Create a directory called git_exercise.
//mkdir git_exercise

//cd to git_exercise.
//cd git_exercise

//Initialize a git repository at git_exercise
//git init

//Create a file called one.py and add the following contents to the file:
//print('one')
//x = [1, 2, 3]
//y = [4, 5, 6]
//echo "print('one')" > one.py
//echo "x =[1, 2, 3]" >> one.py
//echo "y =[4, 5, 6]" >> one.py

//Commit one.py with the message "Initial message"
// git add one
// git commit -m "initial message"

//Add another file called two.py with the following contents
//print("two")
//echo "print ('two') " > two.py

//Execute git status. Understand each line printed by the command
// on branch<branch-name>: indicates the current branch you're working on.
//no commits yet: indicates that there haven't been any co mits made in the repository yet.
//untracked files: lists files that are in your working directory but are not yet tracked by git
//modified: : shows files that haven been modified since the last commit
//new file: :indicates newly added files thet haven't been staged yet.
//changes not stages forcommit: shows modified files that have been stages perviously but have been modified again since then.
//changes to be committed: lists files that are staged and ready to be committed.
// on branch main 
//no commits yet 
//un tracked files;
  // (use "git add<file>..." to
   //include in what will be
   //committed)
     // two.py

//Create a new branch called feature-2
// git branch feature-2

//Commit two.py in feature-2
// git checkout feature-2
// git add two.py
// git commit _m "add two.py"

//Go to master branch. Merge feature-2
//git checkout master
// git merge feature-2

//Create a branch named feature-3.
//git branch feature-3

//Create a file called three.py with the following contents
//print("three")
//echo "print('three')">
//three.py

//Create a file called README.md with the following contents
//## Hello, world!
//To run `feature-3`, execute `python3 three.py`
// echo"## hello, world!">
//readme .md 
//echo"'>> readme.md 
//echo"to run \` feature-3\`, 
//execute\`python3 three.py\ ` "
//>> readme .md

//Commit three.py and README.md
//git add three.py readme.md
//git commit -m "add three.py and readme.md"

//Switch to master branch. (DON'T merge feature-3 now)
// git checkout master

//Create a new branch named feature-4
//git branch feature-4
//echo "print('four')" > four.py

//Create a file called four.py with the following contents
//print("four")
//echo "print('four')" > four.py

//Create a file called README.md with the following contents

//## Hello, world!

//To run `feature-4`, execute `python3 three.py`
// echo "## hello , world!" >readme.md
//echo"">> readme.md
//echo "to run \`feature-4\`, execute \`python3 four .py\ ` ">> readme.md

//Commit four.py and README.md
// git add four.py readme.md
// git commit _m "add four .py and readme.md"

//Switch to master branch
// git checkout master

//Merge feature-3
//git merge feature-3

//Merge feature-4. Fix the merge conflicts
//

//README.md must contain:

//## Hello, world!

//To run `feature-3`, execute `python3 three.py`
//To run `feature-4`, execute `python3 four.py`
//git checkout master
//git merge feature-4
//## hello, world!
//to run `feature-3`, execute `python3 three.py`
//to run `feature-4`, execute `python3 four, py`
//git add readme.md
//git commit -m "merge feature-4: resolve conflicts in readme.md"

//Run git status
//git status

//Commit the files that need aren't committed yet. 
//git add <file1> <files2>...
//git commit -m "commit message describing the changes"
