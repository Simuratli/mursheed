$(document).ready(function() {
    $('.multiple').select2();
    $('.country-selector').select2();
    $('.languageselector').select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Language'
        }
    });
    $('.roomsize').select2({
        placeholder: {
            id: '-1', // the value of the option
            text: 'Otaq Sayını seçin'
        }
    });
});