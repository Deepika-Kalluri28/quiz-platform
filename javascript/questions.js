const questions = [
    {
category: "easy",
  questions: [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Marketing Language",
        "Hyper Tool Markup Language"
      ],
      answer: "Hyper Text Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<a>", "<link>", "<href>", "<url>"],
      answer: "<a>"
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["font-color", "color", "text-color", "background-color"],
      answer: "color"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["<!-- -->", "//", "**", "##"],
      answer: "//"
    },
    {
      question: "Which tag is used for the largest heading?",
      options: ["<h6>", "<heading>", "<h1>", "<head>"],
      answer: "<h1>"
    },
    {
      question: "Which CSS property controls text size?",
      options: ["text-size", "font-style", "font-size", "size"],
      answer: "font-size"
    },
    {
      question: "Which HTML tag is used to insert an image?",
      options: ["<img>", "<image>", "<pic>", "<src>"],
      answer: "<img>"
    },
    {
      question: "How do you declare a JavaScript variable?",
      options: ["var x;", "int x;", "string x;", "declare x;"],
      answer: "var x;"
    },
    {
      question: "Which CSS property sets background color?",
      options: ["color", "bgcolor", "background-color", "background"],
      answer: "background-color"
    },
    {
      question: "Which HTML tag is used to create a list item?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<li>"
    },
    {
      question: "Which keyword is used to define a constant in JS?",
      options: ["let", "var", "const", "static"],
      answer: "const"
    },
    {
      question: "Which HTML attribute specifies an image path?",
      options: ["href", "src", "alt", "path"],
      answer: "src"
    },
    {
      question: "Which CSS property makes text bold?",
      options: ["font-weight", "text-bold", "bold", "font-style"],
      answer: "font-weight"
    },
    {
      question: "Which tag is used to create a button?",
      options: ["<input>", "<btn>", "<button>", "<click>"],
      answer: "<button>"
    },
    {
      question: "Which JavaScript function displays a message box?",
      options: ["msg()", "alert()", "prompt()", "display()"],
      answer: "alert()"
    },
    {
      question: "Which HTML tag defines a paragraph?",
      options: ["<p>", "<para>", "<text>", "<pg>"],
      answer: "<p>"
    },
    {
      question: "Which CSS property is used to align text?",
      options: ["text-align", "align", "position", "float"],
      answer: "text-align"
    },
    {
      question: "Which symbol is used to end a JS statement?",
      options: [".", ":", ";", ","],
      answer: ";"
    },
    {
      question: "Which HTML tag contains metadata?",
      options: ["<body>", "<meta>", "<head>", "<title>"],
      answer: "<head>"
    },
    {
      question: "Which CSS unit is relative?",
      options: ["px", "cm", "em", "mm"],
      answer: "em"
    },
    {
      question: "Which JS keyword declares block-scoped variables?",
      options: ["var", "const", "let", "static"],
      answer: "let"
    },
    {
      question: "Which HTML tag is used for line break?",
      options: ["<br>", "<lb>", "<break>", "<line>"],
      answer: "<br>"
    },
    {
      question: "Which CSS property controls spacing inside an element?",
      options: ["margin", "padding", "border", "gap"],
      answer: "padding"
    },
    {
      question: "Which JavaScript operator is used for addition?",
      options: ["+", "-", "*", "/"],
      answer: "+"
    },
    {
      question: "Which HTML tag is used to create a table?",
      options: ["<tab>", "<table>", "<tr>", "<td>"],
      answer: "<table>"
    },
  ],
},
{
    category: "moderate",
  questions: [
    {
      question: "Which HTML attribute is used to provide alternative text for images?",
      options: ["title", "src", "alt", "name"],
      answer: "alt"
    },
    {
      question: "Which CSS property is used to hide an element?",
      options: ["display: none", "visibility: hidden", "opacity: 0", "All of these"],
      answer: "All of these"
    },
    {
      question: "Which method converts JSON to JS object?",
      options: ["JSON.parse()", "JSON.stringify()", "parseJSON()", "convertJSON()"],
      answer: "JSON.parse()"
    },
    {
      question: "Which HTML tag is used for dropdown list?",
      options: ["<input>", "<select>", "<option>", "<list>"],
      answer: "<select>"
    },
    {
      question: "Which CSS property controls element positioning?",
      options: ["float", "position", "display", "align"],
      answer: "position"
    },
    {
      question: "Which JS method is used to select an element by ID?",
      options: [
        "getElementById()",
        "querySelectorAll()",
        "getElementsByClass()",
        "selectById()"
      ],
      answer: "getElementById()"
    },
    {
      question: "Which CSS value makes an element flexible?",
      options: ["block", "inline", "flex", "grid"],
      answer: "flex"
    },
    {
      question: "Which HTML tag defines navigation links?",
      options: ["<nav>", "<menu>", "<header>", "<section>"],
      answer: "<nav>"
    },
    {
      question: "Which JS loop runs at least once?",
      options: ["for", "while", "do-while", "foreach"],
      answer: "do-while"
    },
    {
      question: "Which CSS property controls element stacking?",
      options: ["z-index", "index", "layer", "stack"],
      answer: "z-index"
    },
    {
      question: "Which HTML tag is used for embedding video?",
      options: ["<media>", "<movie>", "<video>", "<embed>"],
      answer: "<video>"
    },
    {
      question: "Which JS function delays execution?",
      options: ["delay()", "setTimeout()", "wait()", "pause()"],
      answer: "setTimeout()"
    },
    {
      question: "Which CSS property rounds corners?",
      options: ["border-style", "border-radius", "corner-radius", "radius"],
      answer: "border-radius"
    },
    {
      question: "Which HTML tag defines footer?",
      options: ["<bottom>", "<footer>", "<end>", "<section>"],
      answer: "<footer>"
    },
    {
      question: "Which JS keyword stops a loop?",
      options: ["exit", "stop", "break", "return"],
      answer: "break"
    },
    {
      question: "Which CSS layout is two-dimensional?",
      options: ["Flexbox", "Grid", "Block", "Inline"],
      answer: "Grid"
    },
    {
      question: "Which HTML tag groups form elements?",
      options: ["<group>", "<fieldset>", "<form>", "<section>"],
      answer: "<fieldset>"
    },
    {
      question: "Which JS operator checks both value and type?",
      options: ["==", "!=", "===", "="],
      answer: "==="
    },
    {
      question: "Which CSS property creates shadow?",
      options: ["box-shadow", "text-shadow", "shadow", "Both A and B"],
      answer: "Both A and B"
    },
    {
      question: "Which HTML input type is for email?",
      options: ["text", "mail", "email", "input"],
      answer: "email"
    },
    {
      question: "Which JS array method adds an element at end?",
      options: ["push()", "pop()", "shift()", "unshift()"],
      answer: "push()"
    },
    {
      question: "Which CSS property changes cursor style?",
      options: ["pointer", "cursor", "mouse", "hover"],
      answer: "cursor"
    },
    {
      question: "Which HTML tag is semantic?",
      options: ["<div>", "<span>", "<article>", "<b>"],
      answer: "<article>"
    },
    {
      question: "Which JS method converts object to JSON?",
      options: ["JSON.parse()", "JSON.stringify()", "toJSON()", "convert()"],
      answer: "JSON.stringify()"
    },
    {
      question: "Which CSS property controls overflow?",
      options: ["overflow", "scroll", "clip", "hidden"],
      answer: "overflow"
    },
  ],
},
{
    category: "difficult",
  questions: [
    {
      question: "Which HTML API is used for offline storage?",
      options: ["Cookies", "LocalStorage", "SessionStorage", "Both B and C"],
      answer: "Both B and C"
    },
    {
      question: "Which CSS function is used for animations?",
      options: ["@keyframes", "@animate", "@motion", "@frames"],
      answer: "@keyframes"
    },
    {
      question: "Which JS feature allows function inside function?",
      options: ["Closure", "Callback", "Promise", "Async"],
      answer: "Closure"
    },
    {
      question: "Which CSS selector has highest priority?",
      options: ["Class", "Element", "ID", "Universal"],
      answer: "ID"
    },
    {
      question: "Which JS method is used to handle async code?",
      options: ["callback", "promise", "async/await", "All of these"],
      answer: "All of these"
    },
    {
      question: "Which HTML attribute improves accessibility?",
      options: ["role", "aria-label", "alt", "All of these"],
      answer: "All of these"
    },
    {
      question: "Which CSS unit is viewport based?",
      options: ["em", "rem", "vh", "px"],
      answer: "vh"
    },
    {
      question: "Which JS method removes last array element?",
      options: ["pop()", "push()", "slice()", "splice()"],
      answer: "pop()"
    },
    {
      question: "Which HTML tag is used for canvas drawing?",
      options: ["<draw>", "<canvas>", "<svg>", "<graphic>"],
      answer: "<canvas>"
    },
    {
      question: "Which CSS property creates grid layout?",
      options: ["display: flex", "display: grid", "grid-template", "layout"],
      answer: "display: grid"
    },
    {
      question: "Which JS operator spreads array?",
      options: ["...", "=>", "??", "::"],
      answer: "..."
    },
    {
      question: "Which HTML tag is deprecated?",
      options: ["<center>", "<section>", "<article>", "<nav>"],
      answer: "<center>"
    },
    {
      question: "Which CSS pseudo-class selects first child?",
      options: [":first", ":first-child", ":child", ":nth"],
      answer: ":first-child"
    },
    {
      question: "Which JS object handles dates?",
      options: ["Time", "Calendar", "Date", "Moment"],
      answer: "Date"
    },
    {
      question: "Which HTML element is inline?",
      options: ["<div>", "<section>", "<span>", "<article>"],
      answer: "<span>"
    },
    {
      question: "Which CSS property makes text uppercase?",
      options: ["text-transform", "font-style", "letter-spacing", "case"],
      answer: "text-transform"
    },
    {
      question: "Which JS keyword defines a class?",
      options: ["object", "function", "class", "prototype"],
      answer: "class"
    },
    {
      question: "Which HTML tag embeds SVG?",
      options: ["<svg>", "<vector>", "<img>", "<canvas>"],
      answer: "<svg>"
    },
    {
      question: "Which CSS property controls flex direction?",
      options: ["flex-wrap", "flex-flow", "flex-direction", "align-items"],
      answer: "flex-direction"
    },
    {
      question: "Which JS method merges arrays?",
      options: ["concat()", "join()", "merge()", "append()"],
      answer: "concat()"
    },
    {
      question: "Which HTML attribute opens link in new tab?",
      options: ["new", "_blank", "target", "open"],
      answer: "_blank"
    },
    {
      question: "Which CSS pseudo-element targets first line?",
      options: ["::first", "::line", "::first-line", "::start"],
      answer: "::first-line"
    },
    {
      question: "Which JS feature prevents reassignment?",
      options: ["let", "var", "const", "static"],
      answer: "const"
    },
    {
      question: "Which HTML tag is used for progress bar?",
      options: ["<range>", "<meter>", "<progress>", "<bar>"],
      answer: "<progress>"
    },
    {
      question: "Which CSS property aligns items vertically in flex?",
      options: ["align-items", "justify-content", "text-align", "position"],
      answer: "align-items"
    },
  ],
},
{
    category: "harder",
  questions: [
    {
      question: "Which JS concept allows data hiding?",
      options: ["Closure", "Prototype", "Inheritance", "Hoisting"],
      answer: "Closure"
    },
    {
      question: "Which CSS property improves performance for animations?",
      options: ["will-change", "transform", "transition", "animation"],
      answer: "will-change"
    },
    {
      question: "Which HTML feature improves SEO?",
      options: ["Semantic tags", "Meta keywords", "Tables", "Inline styles"],
      answer: "Semantic tags"
    },
    {
      question: "Which JS method freezes an object?",
      options: ["Object.freeze()", "Object.seal()", "Object.lock()", "Object.stop()"],
      answer: "Object.freeze()"
    },
    {
      question: "Which CSS property isolates stacking context?",
      options: ["z-index", "position", "isolation", "display"],
      answer: "isolation"
    },
    {
      question: "Which JS pattern avoids global scope pollution?",
      options: ["IIFE", "Callback", "Promise", "Loop"],
      answer: "IIFE"
    },
    {
      question: "Which HTML attribute defers script execution?",
      options: ["async", "defer", "delay", "load"],
      answer: "defer"
    },
    {
      question: "Which CSS function creates responsive font?",
      options: ["calc()", "clamp()", "var()", "minmax()"],
      answer: "clamp()"
    },
    {
      question: "Which JS API handles browser history?",
      options: ["History API", "Navigator API", "Location API", "Storage API"],
      answer: "History API"
    },
    {
      question: "Which HTML element supports shadow DOM?",
      options: ["Custom elements", "Div", "Span", "Template"],
      answer: "Custom elements"
    },
    {
      question: "Which CSS property prevents layout shift?",
      options: ["aspect-ratio", "height", "min-height", "overflow"],
      answer: "aspect-ratio"
    },
    {
      question: "Which JS method schedules microtasks?",
      options: ["setTimeout()", "Promise.then()", "setInterval()", "requestAnimationFrame()"],
      answer: "Promise.then()"
    },
    {
      question: "Which HTML tag defines reusable markup?",
      options: ["<reuse>", "<slot>", "<template>", "<clone>"],
      answer: "<template>"
    },
    {
      question: "Which CSS selector targets attribute presence?",
      options: ["[attr]", ".attr", "#attr", "::attr"],
      answer: "[attr]"
    },
    {
      question: "Which JS feature enables lazy loading modules?",
      options: ["import()", "require()", "include()", "load()"],
      answer: "import()"
    },
    {
      question: "Which HTML API allows drag and drop?",
      options: ["Touch API", "Drag and Drop API", "Mouse API", "Event API"],
      answer: "Drag and Drop API"
    },
    {
      question: "Which CSS property enables smooth scrolling?",
      options: ["scroll-behavior", "overflow", "position", "transition"],
      answer: "scroll-behavior"
    },
    {
      question: "Which JS method cancels animation frame?",
      options: [
        "cancelAnimationFrame()",
        "stopAnimationFrame()",
        "clearFrame()",
        "removeFrame()"
      ],
      answer: "cancelAnimationFrame()"
    },
    {
      question: "Which HTML attribute enhances security?",
      options: ["sandbox", "secure", "lock", "protect"],
      answer: "sandbox"
    },
    {
      question: "Which CSS feature supports container-based layout?",
      options: ["Container Queries", "Media Queries", "Flexbox", "Grid"],
      answer: "Container Queries"
    },
    {
      question: "Which JS object handles binary data?",
      options: ["Blob", "File", "ArrayBuffer", "All of these"],
      answer: "All of these"
    },
    {
      question: "Which HTML tag defines dialog box?",
      options: ["<dialog>", "<popup>", "<modal>", "<alert>"],
      answer: "<dialog>"
    },
    {
      question: "Which CSS property improves text readability?",
      options: ["line-height", "font-size", "letter-spacing", "word-break"],
      answer: "line-height"
    },
    {
      question: "Which JS feature allows private fields?",
      options: ["#", "_", "private", "sealed"],
      answer: "#"
    },
    {
      question: "Which HTML attribute controls referrer info?",
      options: ["referrerpolicy", "policy", "secure", "privacy"],
      answer: "referrerpolicy"
    },
  ],
},
];

