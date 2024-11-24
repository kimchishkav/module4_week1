(function (window) {
    const HelloSpeaker = {};
    const speakWord = "Hello";

    HelloSpeaker.speak = function (name) {
        console.log(`${speakWord} ${name}`);
    };

    window.HelloSpeaker = HelloSpeaker;
})(window);
