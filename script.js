document.addEventListener('DOMContentLoaded', () => {
    const genres = document.querySelectorAll('.genre');
    const dropZone = document.getElementById('drop-zone');
    const result = document.getElementById('result');
    const genreList = document.getElementById('genres');
    const resetButton = document.getElementById('reset-button');

    const genreCombinations = {
        'Pop + Electronic': 'Electropop',
        'Pop + R&B': 'Contemporary R&B',
        'Pop + Jazz': 'Jazz Pop',
        'Pop + Hip Hop': 'Pop Rap',
        'Pop + Rock n Roll': 'Pop Rock',
        'Pop + Blues': 'Pop Blues',
        'Pop + Reggae': 'Reggae Fusion',
        'Pop + Country': 'Country Pop',
        'Pop + Folk': 'Folk Pop',
        'Pop + Classical': 'Orchestral Pop',
        'Pop + Proto Punk': 'Pop Punk',
        'Blues + Proto Punk': 'Punk Blues',
        'Pop + Heavy Metal': 'Pop Metal',
        'Soul + R&B': 'Funk',
        'Funk + Rock n Roll': 'Funk Rock',
        'Funk + Jazz': 'Jazz Funk',
        'Funk + Soul': 'Swamp Rock',
        'Funk + Hip Hop': 'Electro Music',
        'Electro Music + House': 'Electro House',
        'Electronic + Funk': 'Electro Music',
        'Electronic + Country': 'Electro Country',
        'Electronic + R&B': 'Electronic R&B',
        'Electronic + Reggae': 'Dub',
        'Electronic + Proto Punk': 'Electro Punk',
        'Electro Music + Proto Punk': 'Electro Punk',
        'Electronic + Punk Rock': 'Electro Punk',
        'Electro Music + Punk Rock': 'Electro Punk',
        'Easy Listening + Electronic': 'Ambient',
        'Ambient + Progressive Rock': 'Post Progressive',
        'House + Electro Music': 'Techno',
        'House + Electronic': 'Techno',
        'House + Synth Pop': 'Techno',
        'Electro Music + Country': 'Electro Country',
        'Fusion Jazz + Soul': 'Acid Jazz',
        'Fusion Jazz + Disco': 'Acid Jazz',
        'Fusion Jazz + Funk': 'Acid Jazz',
        'Fusion Jazz + Hip Hop': 'Acid Jazz',
        'Acid Rock + Garage': 'Hard Rock',
        'Pop + Soul': 'Pop Soul',
        'Pop + Disco': 'Dance Pop',
        'Progressive + Rock n Roll': 'Progressive Rock',
        'Pop + Indie': 'Indie Pop',
        'Indie Pop + Pop': 'Twee Pop',
        'Electronic + Classical': 'Orchestral Electronic',
        'Pop + Alternative Rock': 'Alternative Pop',
        'Rock n Roll + Jazz': 'Fusion',
        'Rock n Roll + Proto Punk': 'Punk Rock',
        'Jazz + Hip Hop': 'Jazz Rap',
        'Rock n Roll + Hip Hop': 'Rap Rock',
        'Blues + Jazz': 'Swing',
        'Swing + Folk': 'Dance',
        'Jazz + Folk': 'Folk Jazz',
        'Jazz + Country': 'Western Swing',
        'Jazz + Swing': 'Western Swing',
        'Dance + Electronic': 'Electronic Dance Music',
        'Electronic Dance Music + Disco': 'House',
        'Electronic Dance Music + Funk': 'House',
        'House + Techno': 'Trance',
        'Blues + Jazz': 'Swing',
        'Classical + Jazz': 'Orchestral Jazz',
        'Blues + Hip Hop': 'Hip Hop Blues',
        'Classical + Rock n Roll': 'Symphonic Rock',
        'Folk + Rock n Roll': 'Folk Rock',
        'Blues + Swing': 'Jump Blues',
        'Electronic + Rock n Roll': 'Electronic Rock',
        'Country + Rock n Roll': 'Country Rock',
        'R&B + Hip Hop': 'Contemporary R&B',
        'Reggae + Hip Hop': 'Reggaeton',
        'Folk + Electronic': 'Folktronica',
        'Jazz + Electronic': 'Nu Jazz',
        'Blues + Electronic': 'Electro Blues',
        'Hip Hop + Electro Music': 'Electro Hop',
        'Hip Hop + Electronic': 'Electro Hop',
        'Classical + Hip Hop': 'Classical Crossover',
        'Folk + Hip Hop': 'Folk Hip Hop',
        'Country + Hip Hop': 'Hick Hop',
        'R&B + Rock n Roll': 'Beat Music',
        'Beat Music + Rock n Roll': 'Garage',
        'Beat Music+ Pop': 'Bubblegum Pop',
        'Bubblegum Pop + Dance': "Dance Pop",
        'Electronic + New Wave': 'Synth Pop',
        'Disco + Synth Pop': 'House Pop',
        'Pop + Dance Pop': 'Teen Pop',
        'Pop Rock + Rock n Roll': 'Soft Rock',
        'Soft Rock + Pop': 'Adult Contemporary Music',
        'Pop + Dance': 'Hyperpop',
        'Reggae + Rock n Roll': 'Reggae Fusion',
        'Fusion + Blues': 'Fusion Blues',
        'Fusion + Rock n Roll': 'Fusion Rock',
        'Fusion + Jazz': 'Fusion Jazz',
        'Fusion + Hip Hop': 'Fusion Hip Hop',
        'Fusion + Classical': 'Fusion Classical',
        'Fusion + Folk': 'Fusion Folk',
        'Fusion + Electronic': 'Fusion Electronic',
        'Fusion + Country': 'Fusion Country',
        'Fusion + R&B': 'Fusion R&B',
        'Fusion + Reggae': 'Reggae Fusion',
        'Punk Rock + Hard Rock': 'Grunge',
        'Punk Rock + Proto Punk': 'Hardcore Punk',
        'Hardcore Punk + Heavy Metal': 'Death Metal',
        'Rock n Roll + Garage': 'Indie',
        'Progressive + Garage': 'Hard Rock',
        'Progressive + Folk': 'Psychedelic Music',
        'Psychedelic Music + Rock n Roll': 'Acid Rock',
        'Psychedelic Music + Pop': 'Hypnagogic Pop',
        'Ambient + Chill Out': 'Lo-Fi',
        'Easy Listening + Jazz': 'Chill Out',
        'Psychedelic Music + Jazz': 'Acid Jazz',
        'Heavy Metal + Alternative Rock': 'Alternative Metal',
        'Acid Rock + Rock n Roll': 'Heavy Metal',
        'Rock n Roll + Blues': 'Garage',
        'Pop + Punk Rock': 'Indie',
        'Indie + Punk Rock': 'Alternative Rock',
        'Pop + Proto Punk': 'Pop Punk',
        'Pop + Rock n Roll': 'Pop Rock',
        'Rock n Roll + Grunge': 'Alternative Rock',
        'Alternative Rock + Punk Rock': 'Emo',
        'Emo + Hardcore Punk': 'Screamo',
        'Garage + Blues': 'Garage Blues',
        'Garage + House': 'Garage House',
        'Indie + Blues': 'Indie Blues',
        'Garage House + Electronic': 'UK Garage',
        'Garage House + R&B': 'UK Garage',
        'UK Garage + Dub': 'Dubstep',
        'Alternative Rock + Blues': 'Alternative Blues',
        'Folk + Classical': 'Orchestral Folk',
        'Reggae + Folk': 'Kaiso',
        'Kaiso + Folk': 'Calypso',
        'Progressive + Pop': 'Progressive Pop',
        'Hard Rock + Acid Rock': 'Glam Rock',
        'Glam Rock + Heavy Metal': 'Glam Metal',
        'Glam Rock + Proto Punk': 'Glam Punk',
        'Glam Rock + Punk Rock': 'New Wave',
        'Calypso + Jazz': 'Ska',
        'Ska + Reggae': 'Dancehall',
        'Dancehall + Reggae': 'Reggaeton',
        'Folk + Blues': 'Country Blues',
        'Country + Blues': 'Country Blues',
        'Punk Rock + Blues': 'Punk Blues',
        'Emo + Hip Hop': 'Emo Rap',
        'Emo + Pop': 'Emo Pop',
        'Screamo + Pop': 'Pop Screamo',
        'Screamo + Electronic': 'Sass',
        'Pop + Fusion': 'Electropop',
        'Electronic + Fusion': 'Synthwave',
        'Pop + Pop Rock': 'Pop Rock',
        'Pop + Grunge': 'Alternative Rock',
        'Proto Punk + Grunge': 'Punk Rock',
        'Proto Punk + Pop Rock': 'Punk Rock',
        'Proto Punk + Garage Rock': 'Punk Rock',
        'Pop + Soul': 'Disco',
        'Blues + R&B': 'Soul',
        'Dance + Rock n Roll': 'Dance Rock',
        'Punk Rock + Hip Hop': 'Punk Rap',
        'Progressive + Hip Hop': 'Progressive Rap',
        'Easy Listening + Hip Hop': 'Soft Rap',
        'Easy Listening + Rock n Roll': 'Soft Rock',
        'Easy Listening + Pop': 'Soft Pop',
        'Punk Rock + Ska': 'Ska Punk'
    };

    // Load genres from Local Storage
    function loadGenresFromLocalStorage() {
        const storedGenres = JSON.parse(localStorage.getItem('createdGenres'));
        if (storedGenres && storedGenres.length > 0) {
            storedGenres.forEach(genre => {
                createNewGenreElement(genre, false);
            });
        } else {
            initializeDefaultGenres();
        }
    }

    function initializeDefaultGenres() {
        const defaultGenres = ['Pop', 'Rock n Roll', 'Hip Hop', 'Electronic', 'Jazz', 'Blues', 'Classical', 'Folk', 'Country', 'R&B', 'Reggae', 'Proto Punk', 'Progressive', 'Easy Listening'];
        defaultGenres.forEach(genre => {
            createNewGenreElement(genre, false);
        });
    }

    function saveGenresToLocalStorage() {
        const createdGenres = Array.from(genreList.children).map(genre => genre.textContent);
        localStorage.setItem('createdGenres', JSON.stringify(createdGenres));
    }

    function resetGame() {
        localStorage.removeItem('createdGenres');
        genreList.innerHTML = '';
        dropZone.innerHTML = '';
        result.textContent = '';
        resetButton.style.display = 'none';
        initializeDefaultGenres();
    }

    genres.forEach(genre => {
        genre.addEventListener('dragstart', dragStart);
    });

    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);
    document.body.addEventListener('dragover', bodyDragOver);
    document.body.addEventListener('drop', bodyDrop);

    resetButton.addEventListener('click', resetGame);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
        if (e.target.closest('#drop-zone')) {
            setTimeout(() => {
                e.target.classList.add('dragging');
            }, 0);
        }
    }

    function dragOver(e) {
        e.preventDefault();
    }

    function bodyDragOver(e) {
        e.preventDefault();
    }

    function bodyDrop(e) {
        const draggingElement = document.querySelector('.dragging');
        if (draggingElement && draggingElement.closest('#drop-zone')) {
            draggingElement.remove();
            updateResult();
        }
    }

    function drop(e) {
        e.preventDefault();
        const genreName = e.dataTransfer.getData('text');
        
        if (!Array.from(dropZone.children).some(child => child.textContent.includes(genreName))) {
            const newGenre = document.createElement('div');
            newGenre.className = 'genre';
            newGenre.draggable = true;
            newGenre.innerHTML = `${genreName}<span class="remove">×</span>`;
            newGenre.addEventListener('dragstart', dragStart);
            
            const removeButton = newGenre.querySelector('.remove');
            removeButton.addEventListener('click', removeGenre);
            
            dropZone.appendChild(newGenre);
            updateResult();
        }
        
        // Hide the placeholder text when genres are dropped
        const placeholderText = dropZone.querySelector('.placeholder-text');
        if (placeholderText) {
            placeholderText.style.display = 'none';
        }
    }

    function removeGenre(e) {
        e.target.closest('.genre').remove();
        updateResult();
    }

    function updateResult() {
        const mixedGenres = Array.from(dropZone.children).map(child => child.textContent.replace('×', '').trim());
        if (mixedGenres.length > 1) {
            const sortedGenres = mixedGenres.sort().join(' + ');
            let fusionResult = genreCombinations[sortedGenres];
            if (!fusionResult) {
                fusionResult = findComplexCombination(mixedGenres);
            }
            result.textContent = `${sortedGenres} = ${fusionResult || 'Unknown Fusion'}`;
            if (fusionResult && fusionResult !== 'Unknown Fusion') {
                console.log(`Fusion result: ${fusionResult}`); // Add log message for debugging
                createNewGenreElement(fusionResult, true);
                resetButton.style.display = 'block'; // Show reset button
            }
            clearDropZone(); // Clear the drop zone after result
        } else {
            result.textContent = '';
        }
    }

    function clearDropZone() {
        while (dropZone.firstChild) {
            dropZone.removeChild(dropZone.firstChild);
        }
    }

    function createNewGenreElement(fusionResult, save = true) {
        console.log(`Creating new genre element: ${fusionResult}`); // Add log message for debugging
        if (!Array.from(genreList.children).some(child => child.textContent.includes(fusionResult))) {
            const newFusionGenre = document.createElement('div');
            newFusionGenre.className = 'genre';
            newFusionGenre.draggable = true;
            newFusionGenre.innerHTML = `${fusionResult}`;
            newFusionGenre.addEventListener('dragstart', dragStart);
            genreList.appendChild(newFusionGenre);
            
            // Add scrollable class if genres exceed max height
            if (genreList.scrollHeight > genreList.clientHeight) {
                genreList.classList.add('scrollable');
            }

            if (save) {
                saveGenresToLocalStorage();
            }
        } else {
            console.log(`Genre ${fusionResult} already exists in the list.`);
        }
    }

    function findComplexCombination(genres) {
        let combinations = generateCombinations(genres);
        for (let combination of combinations) {
            if (genreCombinations[combination]) {
                return genreCombinations[combination];
            }
        }
        return null;
    }
    document.querySelector('.menu-icon').addEventListener('click', function() {
        console.log('Menu icon clicked');
        document.querySelector('header').classList.toggle('expanded');
        document.querySelector('nav ul').classList.toggle('show');
    });
    function generateCombinations(array) {
        if (array.length === 1) {
            return array;
        }
        let result = [];
        for (let i = 0; i < array.length; i++) {
            let rest = array.slice(0, i).concat(array.slice(i + 1));
            let restCombinations = generateCombinations(rest);
            for (let j = 0; j < restCombinations.length; j++) {
                result.push(array[i] + ' + ' + restCombinations[j]);
            }
        }
        return result;
    }

    // Load genres from Local Storage when the page loads
    loadGenresFromLocalStorage();
});
