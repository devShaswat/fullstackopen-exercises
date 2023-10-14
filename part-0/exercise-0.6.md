```
sequence diagram
  participant Browser
  participant Server

  Browser->>Server:POST
  https://studies.cs.helsinki.fi/exampleapp/new_spa
  Server-->> status code 200 OK
  unlike the previous traditional app (notes) where the server responses the 301 URL Redirect , and the notes file
  had to fetch no less than five requests(1 (new_notes) + 4(notes,main.css,main.js,data.json)) , that was taking a   of efforts.

  But now here in Single Page Application(SPA) while inserting the new_note into the SPA the browser needs to make   a single request and the #response with status code 200 OK, which indicates that there is no an need of fetching   making requests for any other files.

  The JavaScript code will gets active and insert the note to the SPA directly using event handlers.

  As honestly speaking i'm not familiar with javaScript codes till now, so it's not making any worth to me to copy 
  the code from the part0 text and paste here.
