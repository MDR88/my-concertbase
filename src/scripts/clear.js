//Clears The DOM.

const clearVault = () => {
    const container = document.querySelector("#concert-vault-container");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};

const clearAll = () => {
    const container = document.querySelector(".base-div-container");
    while (container.firstElementChild) {
        container.removeChild(container.firstElementChild);
    };
};

module.exports = {clearVault, clearAll}