About my final project: Kotoba Finder :

Deployed! :D

https://kotobafinder.netlify.app/

Check List:

Visual resources:
 rooms [x]
 items [x]
 character [x]

## BACKEND

folder/file setup:
 utils > auth [x]
 models > room, user, items [x]
 routes > user, vocab cards, (character location)rooms, items[x]
 config [x]

MongoDB setup and connected [x]

Schema for:
 USER [x]
 HOME/Location [] // for later
 ROOM [x]
 ITEMS [x]
 successfully tests in Postman [x]

Routes:
 USER [x]
 Vocab Cards [x]
 ITEMS [x]
 ROOMS [x]

## FRONTEND

Set up APP and MAIN [x]

Folder Tree with correctly rendered components, api is called correctly:

/SRC 
  /pages
    GamePage (for rooms to render in) [x]
    Login [x]
    Register [x]
    Vocab [x] (test routes first)
    Vocab [x] (needs auth to work)

  /context
    UserContext [x]

  /components
    Navbar [x]
    Room []
    VocabCard [x]

  /clients
    api [x]

  /assets
    /bathroom [x]
    /bedroom [x]
    /characters [x]
    /kitchen [x]
    /laundryroom [x]
    /livingroom [x]
    * decided to move things to cloud based storage: https://console.cloudinary.com/ [x]

GAMEPAGE []

Gameplay area that loads room with correct items [x]
allows progression to next room after all items collect []

Make Beautiful [x] // will improve more later


 Additional Readings:

 This project uses a similiar setup to music/streaming apps, where the USER can't add things, but has the ability to log
 in, have access to specific content, and the ability to save/favorite items:

 https://medium.com/@blog.iroidsolutions/how-to-build-a-music-streaming-app-like-spotify-features-cost-15c09d8613c1
 https://xunna.hashnode.dev/building-a-music-app-with-nodejs

 on similiar game mechanics:

 quizzes: 
 https://medium.com/%40frontendqueens/building-a-quiz-app-in-react-a-beginners-guide-200e07d41e17
 https://dev.to/oyegoke/state-control-in-react-behind-the-scenes-of-our-quiz-app-4acd
 https://www.geeksforgeeks.org/reactjs/create-a-quiz-app-using-react-hooks-and-timer-based-state-management/

 dating sim/visual novel games:
 (not too useful now but addresses dynamic routing with images)
 https://progosling.com/en/blog/one-step-in-high-school
 (interesting)
 https://react.narraleaf.com/documentation/basic/create-scene