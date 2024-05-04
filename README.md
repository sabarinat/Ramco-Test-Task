## Websiter Tracker
 This repository for tracking the webiste and store the details of information like what are the events did in respective component(URL Pages). 
 Show those information in dashboard with the Tables and charts.
Trcaking information:
   In version 1.0.0 3 events are tracking mosue over, click, keydown.
   Information are collection with times and will store in database.

# 3 Folders are Created
   1.Tracker.
   2. Backend.
   3. Dashboard.
  # Tracker
     1.We can use as a package by folowing below steps.
        1.Go to Tracker folder, run the comment <npm i>, It will install the package which we need.
        2.We need to run on below comments in project which we want to tracking
          ## npm i <folder-name?
          After that tracker project  are stored in node module.
        3. We can use the tracker module by declare that project
          ## import * as tracker from 'website-tracker' in (boostarp module)
        4. We can set API URL, To store the tracking information 
            tracker.setUrl('http://localhost:3001');
        5. Once we run the project, events are tarcking and components information that we are using in webiste.

        # Important:- Component is mentioned as URL page we are using
   # Backend
      we are using the type ORM for database connections.
       Run the project in devepoment:-
         #npm i
         #npm run dev
        Run in production:-
          # npm i
          # npm run start.
   # DashBoard
     It is use for show the tracking information through chart and tables.
     # Informations:
         1.Time spend on website.
         2. Time spent on pages.
         3. Events(MouseOver, KeyDown, Click) are tracking.
      # Run the  Project:-
          # npm i
          # npm run start
         
        
    
