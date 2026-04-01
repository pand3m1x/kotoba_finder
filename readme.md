About my final project: Kotoba Finder (Name Pending):


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

Set up APP and MAIN []

Folder Tree with correctly rendered components, api is called correctly:

/SRC 
  /pages
    GamePage (for rooms to render in) []
    Login []
    Register []
    Vocab [] (test routes first)
    Vocab [] (needs auth to work)

  /context
    UserContext []

  /components
    Navbar []
    Room []
    VocabCard []

  /clients
    api [x]

  /assets
    /bathroom [x]
    /bedroom [x]
    /characters [x]
    /kitchen [x]
    /laundryroom [x]
    /livingroom [x]

GAMEPAGE []

Gameplay area that loads room with correct items []
allows progression to next room after all items collect []


 Additional Readings:

 This project uses a similiar setup to music/streaming apps, where the USER can't add things, but has the ability to log
 in, have access to specific content, and the ability to save/favorite items:

 https://medium.com/@blog.iroidsolutions/how-to-build-a-music-streaming-app-like-spotify-features-cost-15c09d8613c1
 https://xunna.hashnode.dev/building-a-music-app-with-nodejs