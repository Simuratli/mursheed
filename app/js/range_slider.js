$(function() {
    $("#slider-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));

    $('#amount').focusout(function() {
        var sliderVal = $(this).val();
        var splitSliderVal = sliderVal.replace(/\$/g, '').split('-');
        $("#slider-range").slider({
            values: [parseInt(splitSliderVal[0]), parseInt(splitSliderVal[1])]
        });
    });
});