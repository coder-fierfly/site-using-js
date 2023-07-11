import Fuse from 'fuse.js';

function TextAreaFilter(text, array) {
    if (text === '') {
        return array;
    }
    const fuse = new Fuse(array, {
        keys: ['target_name', 'name'], // Specify the fields in your data that should be searchable
        includeScore: true, // Enables scoring for search results
        threshold: 0.3, // Adjust the threshold to control the accuracy of the search
    });
    var results = []
    fuse.search(text).forEach(el =>
        results.push(el.item))

    return results;
}

export default TextAreaFilter;