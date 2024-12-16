export function select(selector, scope = document) {
    return scope.querySelector(selector);
}

export function selectAll(selector, scope = document) {
    return scope.querySelectorAll(selector);
}

export function listen(selector, event, callback) {
    return selector.addEventListener(event, callback); 
}

export function create(element, scope = document) {
    return scope.createElement(element);
}

export function selectElement(selector, scope = document) {
    return scope.getElementById(selector);
}
