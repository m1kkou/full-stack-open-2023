```mermaid
sequenceDiagram;
    participant browser;
    participant server;
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css;
    activate server;
    server-->>browser: the css file;
    deactivate server;
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js;
    activate server;
    server-->>browser: the JavaScript file;
    deactivate server;
    
    Note right of browser: spa.js directs the browser to excecute an HTTP GET to /exampleapp/data.json. 

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json;
    activate server;
    server-->>browser: [..., {content: "Dippadaa dippadii", date: "2023-03-04T06:34:32.997Z"} ];
    deactivate server;

    Note right of browser: If fetch is succesful the spa.js renders the received notes to HTML document.

 ```
