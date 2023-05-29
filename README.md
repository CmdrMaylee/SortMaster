# SortMaster

A web app that teach about sorting algorithms and present it in an edutainment way, allowing the user to read about how different sorting algorithms work and test them to compare resulting times by a list of previous sorting runs.

## Run Instructions

The program is separated into 2 projects: Backend & Frontend Web. Either can be run on their own. The service is currently not hosted on any separate domain, and can thus only be run locally.

Backend: Open a terminal in "backend\src\" and execute "dotnet restore". Once the project is fully restored, run "dotnet run" from the same directory to start a local instance of the backend(database uses SqlLite, which the frontend will automatically connect to).

Frontend Web: NODEJS WITH NPM REQUIRED. Open a terminal window in "frontend web - vite\src\" and run the command "npm install". Once installation is succesfull, run "npm run dev" to initiate a local version of the web page.

With both apps running on separate terminal windows, the frontend can be reached via the address provided in the terminal it started from. If both are running and correctly hooked, the dropdown menu on the webpage should say "Choose Algorithm" instead of "API Down". There should be some sort histories in the database already, and can be seen when selecting an algorithm.

## 

## Backend

The backend is an ASP.NET Core application that handles a combination of CRUD API calls and a database. Sorting attempts are done through the API by sending the name of the algorithm to use and the size of the dataset to sort. The backend will then create a C# number array of that size, fill it with numbers starting at 0, randomize its order, and then sort it with the selected algorithm. Algorithms are stored in the database, with paragraphs of information for general performance, how it works and big-O notations. There are also appropriate endpoints concerning sorting histories, covering most major CRUD endpoint types.

The sorting operations keep track of sorting times by comparing the DateTime of when it started to when it ended (The start and stop times are the only time-related properties stored in the database), dynamically comparing the times when the raw minutes & seconds need to be retrieved.

## Frontend

The frontend is written in React via Vite, and gives a utility-esque design for performing sort operations via the backend's API endpoints. With both apps running, the user gets a list of algorithms to choose from, a visual representation of a randomized array of numbers in their chosen array size, can issue a sort operation on the API, and eventually send a sort report to the database, which can then be retrieved accordingly. The highscore component shows all sort histories in the database in order of date sent, which can currently not be changed (and is indeed not part of the original vision).

If a sorting operation is started and never finished (either if the dataset is too large, or you're using BogoSort), there is no way to stop it (short of reloading the page).
