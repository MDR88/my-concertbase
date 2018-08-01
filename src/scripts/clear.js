//Clears The DOM.

//CLears the child div that displays all concerts.
const clearVault = () => {
    const container = document.querySelector("#concert-vault-container");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
        console.log("ClearVault", clearVault)
    };
};
//clears the main parent div and clears the entire DOM.
const clearAll = () => {
    const container = document.querySelector(".base-div-container");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};
module.exports = {clearVault, clearAll}