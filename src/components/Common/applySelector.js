/**
 * Some properties require passing selectors, like uk-height-match="target: SELECTOR", which normally look like "> div > .uk-card"
 * But as we are adjusting to the React UIKit, we need to be able to use it as "> Panel > Card"
 * So this function is converting "> div > .uk-card" to "> Panel > Card"
 * TODO Make it smarter and extend to cover more possible cases
 */
const replacements = {
    'Panel': 'div',
    'Card': '.uk-card'
};

const applySelectors = (original) => {
    let result = original;
    for (let [key, value] of Object.entries(replacements)) {
        result = result.replace(key, value);
    }
    return result;
};

export default applySelectors;
