Experigen.initialize = function () {
    var items = this.resource("items");
    var experimentalOptions = [];

    var distractor = []
        .concat(items.subset("category", "Distractor"))
        .pairWith("view", "stimulus.ejs")
        .shuffle()
        .chooseRandom(10)
        .shuffle();
    var finalH = []
        .concat(items.subset("category", "FinalH"))
        .pairWith("view", "stimulus.ejs")
        .shuffle()
        .chooseRandom(10)
        .shuffle();
    var initialH = []
        .concat(items.subset("category", "InitialH"))
        .pairWith("view", "stimulus.ejs")
        .shuffle()
        .chooseRandom(10)
        .shuffle();
    var medialCodaH = []
        .concat(items.subset("category", "MedialCodaH"))
        .pairWith("view", "stimulus.ejs")
        .shuffle()
        .chooseRandom(10)
        .shuffle();
    var medialOnsetH = []
        .concat(items.subset("category", "MedialOnsetH"))
        .pairWith("view", "stimulus.ejs")
        .shuffle()
        .chooseRandom(10)
        .shuffle();

    experimentalOptions = [
        ...distractor,
        ...finalH,
        ...initialH,
        ...medialCodaH,
        ...medialOnsetH,
    ].shuffle();
	
    this.addStaticScreen("intro.ejs");
    this.addStaticScreen("getgoing.ejs");
    // this.addStaticScreen("trial.ejs");
    this.addBlock(experimentalOptions);
    this.addStaticScreen("demographic.ejs");
    this.addStaticScreen("finalthanks.ejs");
};
