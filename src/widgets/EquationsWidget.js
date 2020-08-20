import RenderResultsWidget from './RenderResultsWidget.js';

export default function equationsWidget(){
    Array.from( document.getElementsByClassName('equationInput') ).forEach(node => {
        node.addEventListener('keyup', (event) => {
            bindUpDownArrowKeys(event, node);
            renderSumIfValidInput(event)
        })
    })
}

function bindUpDownArrowKeys(event, node) {
    if (event.key == "ArrowUp") {
        node.value = parseInt(node.value) + 1;
    }
    else if (event.key == "ArrowDown") {
        node.value = parseInt(node.value) - 1;
    }
}

function renderSumIfValidInput(event) {
    if (!isNaN(event.target.value)) {
        RenderResultsWidget();
    }
    else {
        event.target.value = 0;
    }
}
