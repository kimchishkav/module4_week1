(function (window) {
    const ByeSpeaker = {};
    const speakWord = "Goodbye";

    ByeSpeaker.speak = function (name) {
        console.log(`${speakWord} ${name}`);
    };

    window.ByeSpeaker = ByeSpeaker;
})(window);
