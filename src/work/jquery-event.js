function displaySearch(term) {
    clean('section.search');
    var contents = search(term);
    contents.forEach(function (content) {
        const pElement = $('<p>').text(content);
        $('section.search').append(pElement);
    });
}

function displaySearchValue() {
    displaySearch($('input.search').val());
}

/* $('button').on('click', function () {
 //const term = $('input.search');
 //console.log('test',term, term.val());
 //displaySearch(term.val());
 displaySearchValue();
 });*/

$('button').on('click', displaySearchValue);

function clean(localisation){
    $(localisation).empty();
}

// $('body').text(contents.join(' '));
