import MatchMapping from "../MatshMapping";

function TextAreaFilter(text, array) {
    if (text === '') {
        return array;
    }
    var results = []

    const searchRegex = new RegExp(text, 'i');

    array.map(element => {
        if (searchRegex.test(element.target_name) || searchRegex.test(element.name) || searchRegex.test(MatchMapping[element.state].description)) {
            results.push(element);
        }
    });

    return results;
}

export default TextAreaFilter;