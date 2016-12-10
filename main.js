define(function (require, exports, module) {

    "use strict";
    
    var LanguageManager = brackets.getModule("language/LanguageManager");

    LanguageManager.defineLanguage("gas", {
        name: "GNU Asssembler",
        mode: "gas",
        fileExtensions: ["s"]
    });
    
});
