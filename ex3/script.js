let printQueue = [];

function enqueue() {
    const fileName = document.getElementById('fileName').value;
    if (fileName.trim() !== '') {
        printQueue.push(fileName);
        updateQueue();
    }
}

function printFile() {
    if (printQueue.length > 0) {
        const printedFile = printQueue.shift();
        alert(`Imprimindo: ${printedFile}`);
        updateQueue();
    } else {
        alert('A fila de impressão está vazia.');
    }
}

function updateQueue() {
    const queueContainer = document.getElementById('printQueue');
    queueContainer.innerHTML = '';

    printQueue.forEach((file) => {
        const listItem = document.createElement('li');
        listItem.textContent = file;
        queueContainer.appendChild(listItem);
    });
}
