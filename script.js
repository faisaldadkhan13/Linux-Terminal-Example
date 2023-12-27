const terminal = document.getElementById('terminal');
const commandInput = document.getElementById('commandInput');

commandInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        executeCommand(commandInput.value.trim());
    }
});

function executeCommand(command) {
    const output = document.createElement('p');
    output.textContent = `$ ${command}`;
    terminal.querySelector('.output').appendChild(output);

    switch (command.toLowerCase()) {
        case 'help':
            printHelp();
            break;
        case 'clear':
            clearTerminal();
            break;
        default:
            printError(`Command not found: ${command}`);
    }

    commandInput.value = '';
    terminal.scrollTop = terminal.scrollHeight;
}

function printHelp() {
    const helpText = [
        'Available Commands:',
        '- help: Display this help message.',
        '- clear: Clear the terminal screen.'
    ];

    helpText.forEach(text => printOutput(text));
}

function clearTerminal() {
    terminal.querySelector('.output').innerHTML = '';
}

function printOutput(text) {
    const output = document.createElement('p');
    output.textContent = text;
    terminal.querySelector('.output').appendChild(output);
}

function printError(message) {
    const error = document.createElement('p');
    error.style.color = '#ff0000';
    error.textContent = `Error: ${message}`;
    terminal.querySelector('.output').appendChild(error);
}
