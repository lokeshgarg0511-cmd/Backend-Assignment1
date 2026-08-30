// Logger.js

function log(message) {
    console.log("[LOG]:", message);
}

function error(message) {
    console.log("[ERROR]:", message);
}

module.exports = {
    log,
    error
};