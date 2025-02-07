document.getElementById('download-btn').addEventListener('click', function () {
    const link = document.createElement('a');
    link.href = 'README.md'; // Remplace par le nom exact de ton fichier
    link.download = 'README.md'; // Nom du fichier téléchargé
    link.click();
});
