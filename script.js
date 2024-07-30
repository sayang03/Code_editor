function updateOutput() {
    const htmlCode = document.getElementById('htmlCode').value;
    const cssCode = document.getElementById('cssCode').value;
    const jsCode = document.getElementById('jsCode').value;
    
    const output = document.getElementById('output');
    const outputDocument = output.contentDocument || output.contentWindow.document;

    outputDocument.open();
    outputDocument.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <style>${cssCode}</style>
        </head>
        <body>
            ${htmlCode}
            <script>${jsCode}<\/script>
        </body>
        </html>
    `);
    outputDocument.close();
}

document.getElementById('htmlCode').addEventListener('input', updateOutput);
document.getElementById('cssCode').addEventListener('input', updateOutput);
document.getElementById('jsCode').addEventListener('input', updateOutput);

updateOutput();
