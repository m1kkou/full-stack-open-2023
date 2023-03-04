```mermaid
sequenceDiagram;
    participant browser;
    participant server;
    
    Note right of browser: The browser sends a HTTP POST request to server with a form in the payload: note=Dippadaa+dippadii;
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note;
    activate server;
    server-->>browser: URL redirection;
    
    Note right of browser: The browser receives a redirect (HTTP 302) which triggers a GET request to the /exampleapp/notes endpoint;
    deactivate server;

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css;
    activate server;
    server-->>browser: the css file;
    deactivate server;
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js;
    activate server;
    server-->>browser: the JavaScript file;
    deactivate server;
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json;
    activate server;
    server-->>browser: [..., {content: "Dippadaa dippadii", date: "2023-03-04T06:34:32.997Z"} ];
    deactivate server;

    Note right of browser: The browser executes the callback function that renders the notes. The data .json now holds the added note.

 ```
