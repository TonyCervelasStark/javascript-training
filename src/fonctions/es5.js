var topics = require('../data').topics;

// ******* Filtered topics *******
var result = topics.filter(function (topic) {
    // returns true if we keep this topic
    return topic.user.name === 'Leonard';
});
console.log('result :', result);

console.log('########');

var resultFat = topics.filter(topic => topic.user.name === 'Leonard');
console.log('resultFat :', resultFat);

console.log('########');


// ******* Mapped topics *******
var titles = topics.map(function (topic) {
    return topic.title;
});
console.log('titles :', titles);

console.log('########');

var fatTitles = topics.map(topic => topic.title);
console.log('titles :', fatTitles);

// ******* Contain violence *******

var hasViolence = topics.some(function (topic) {
    return topic.tags.includes('violence');
});
console.log('has violence : ', hasViolence);
console.log('########');



// ******* Sheldon's comments *******
var filtered = topics.filter(function (topic) {
    return topic.comments.some(function (comment) {
        return comment.user.name === 'Sheldon';
    });
});
console.log('filtered : ', filtered);

var title = filtered.map(function (topic) {
    return topic.title;
});
console.log('Sheldon Comments : ', title);

//fat arrow style
var fatFiltered = topics.filter(topic => topic.comments.some(comment => comment.user.name === 'Sheldon')).map(topic => topic.title);
console.log('Fat Sheldon Comments : ', fatFiltered);


// ******* Penny's sorted ids comments ********
var pennyComment = [];
var fatPennyComment = [];

var sortFunction = function (a, b) {
    if (a === b) {
        return 0;
    }
    return a < b ? -1 : 1;
};

topics.forEach(function (topic) {
    return topic.comments.forEach(function (comment) {
        if (comment.user.name === 'Penny') {
            pennyComment.push(comment.id)
        }
    });
});
console.log('filtered : ', pennyComment.sort(sortFunction));

//fat arrow style
topics.filter(topic => topic.comments.forEach(comment => comment.user.name === 'Penny' ? fatPennyComment.push(comment.id) : 0));
console.log('filtered : ', fatPennyComment.sort(sortFunction));


// ******* "Fun" tags for non admin ********
var tableTag =[];

topics.forEach(function (topic){
    topic.comments.forEach(function (comment) {
        if(!comment.user.admin && comment.tags != undefined){
            comment.tags.forEach(function (tag) {
                if(tag.includes('fun')){
                    tableTag.push(comment.content);
                }

            })
        }

    })
});

console.log('tags : ', tableTag);