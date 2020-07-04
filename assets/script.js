function getMidLabAnswer() {
    let result = document.getElementById("result");
    let form = document.getElementById("form");
    let verb = document.getElementById("verb").value;
    let noun = document.getElementById("noun").value;
    let adjective = document.getElementById("adjective").value;
    let adverb = document.getElementById("adverb").value;
    result.style.display = "none";
    if (verb === "" || noun === "" || adjective === "" || adverb === "") {
        result.style.display = "none";
    } else {
        document.getElementById("verb-id").innerHTML = verb;
        document.getElementById("noun-id").innerHTML = noun;
        document.getElementById("adjective-id").innerHTML = adjective;
        document.getElementById("adverb-id").innerHTML = adverb;
        result.style.display = "block";
        form.style.display = "none";
    }
}
