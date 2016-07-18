$(document).ready(function() {
    // Add an extra-deep shadow when someone hovers over a card.
    // .hoverable has a similar effect, but the shadow isn't as deep.
    $(".card").hover(function(event) {
        $(this).toggleClass("z-depth-3");
    });
});
