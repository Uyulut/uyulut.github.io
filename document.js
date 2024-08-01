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
        'Folk + Punk Rock': 'Folk Punk',
        'Pop + Classical': 'Orchestral Pop',
        'Pop + Proto Punk': 'Pop Punk',
        'Blues + Proto Punk': 'Punk Blues',
        'Classical + Blues': 'Ragtime',
        'Pop + Heavy Metal': 'Pop Metal',
        'Soul + R&B': 'Funk',
        'Funk + Rock n Roll': 'Funk Rock',
        'Funk + Jazz': 'Jazz Funk',
        'Punk Blues + Heavy Metal': 'Biker Metal',
        'Funk + Soul': 'Swamp Rock',
        'Soul + Rock n Roll': 'Soul Rock',
        'Soul Rock + Electronic': 'Electronic Soul Rock',
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
        'Ambient + Electronic': 'New Age',
        'Ambient + New Age': 'Space Music',
        'Ambient + Easy Listening': 'Space Music',
        'Ambient + Progressive Rock': 'Post Progressive',
        'House + Electro Music': 'Techno',
        'House + Electronic': 'Techno',
        'House + Synth Pop': 'Techno',
        'Electro Music + Synth Pop': 'Space Disco',
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
        'Indie + Alternative Rock': 'Indie Rock',
        'Indie Rock + Pop': 'Indie Pop',
        'Disco + Classical': 'Symphonic Disco',
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
        'Bubblegum Pop + Dance': 'Dance Pop',
        'Electronic + New Wave': 'Synth Pop',
        'Soul + Jazz': 'Afrobeat',
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
        'Alternative Metal + Grunge': 'Nu Metal',
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
        'Western Swing + Rock n Roll': 'Rockabilly',
        'Rockabilly + Rock n Roll': 'Surf Music',
        'Electropop + R&B': 'Electro R&B',
        'Jazz Pop + Hip Hop': 'Jazz Hop',
        'Pop Rap + Rock n Roll': 'Rap Rock',
        'Pop Blues + Reggae Fusion': 'Blues Reggae',
        'Country Pop + Folk Pop': 'Americana',
        'Folk Punk + Orchestral Pop': 'Chamber Punk',
        'Pop Punk + Funk': 'Funk Punk',
        'Ragtime + Pop Metal': 'Ragtime Metal',
        'Jazz Funk + Biker Metal': 'Heavy Funk',
        'Electronic Soul Rock + Electro House': 'Electronic Soul House',
        'Dub + Electro Punk': 'Cyber Dub',
        'New Age + Post Progressive': 'Cosmic Progressive',
        'Techno + Space Disco': 'Tech Disco',
        'Acid Jazz + Hard Rock': 'Acid Rock Jazz',
        'Dance Pop + Progressive Rock': 'Progressive Dance',
        'Indie Pop + Symphonic Disco': 'Indie Disco',
        'Orchestral Electronic + Alternative Pop': 'Alternative Orchestral',
        'Fusion + Rap Rock': 'Fusion Rap',
        'Swing + Western Swing': 'Neo-Swing',
        'Electronic Dance Music + Trance': 'EDM Trance',
        'Punk Rock + Ska': 'Ska Punk',
        'Pop Rock + Electro Country': 'Electro Pop Rock',
        'Contemporary R&B + Indie Rock': 'Indie R&B',
        'House Pop + Hyperpop': 'Hyper House',
        'Adult Contemporary Music + Jazz Rap': 'Contemporary Jazz Pop',
        'Fusion Blues + Electro Blues': 'Electro Fusion Blues',
        'Fusion Rock + Folktronica': 'Folk Fusion Rock',
        'Grunge + Nu Jazz': 'Nu Grunge',
        'Death Metal + Classical Crossover': 'Symphonic Death Metal',
        'Hypnagogic Pop + Lo-Fi': 'Lo-Fi Hypnagogic',
        'Nu Metal + Electro Hop': 'Electronic Nu Metal',
        'Alternative Blues + Garage Blues': 'Alternative Garage Blues',
        'Orchestral Folk + Calypso': 'Orchestral Calypso',
        'Country Blues + Emo Rap': 'Emo Country',
        'Pop Screamo + Synthwave': 'Synth Screamo',
        'Alternative Rock + Soft Rap': 'Alternative Soft Rock',
        'Surf Music + Ska Punk': 'Surf Ska',
        'Bubblegum Pop + Hick Hop': 'Bubblegum Country Rap',
        'Rock n Roll + Heavy Metal': 'Hard Rock',
        'Hard Rock + Progressive Rock': 'Progressive Metal',
        'Progressive Metal + Classical': 'Symphonic Metal',
        'Funk + Punk Rock': 'Funk Punk',
        'Funk Punk + Hip Hop': 'Funk Metal',
        'Reggae + Punk Rock': 'Ska Punk',
        'Ska Punk + Pop': 'Ska Pop',
        'Electronic + Orchestral Electronic': 'Cinematic Electronic',
        'Cinematic Electronic + Ambient': 'Dark Ambient',
        'Dark Ambient + Heavy Metal': 'Drone Metal',
        'Jazz + Bossa Nova': 'Cool Jazz',
        'Cool Jazz + Electronic': 'Nu Jazz',
        'Rockabilly + Punk Rock': 'Psychobilly',
        'Psychobilly + Heavy Metal': 'Gothic Metal',
        'Gothic Metal + Symphonic Metal': 'Symphonic Gothic Metal',
        'Grunge + Heavy Metal': 'Sludge Metal',
        'Sludge Metal + Punk Rock': 'Crust Punk',
        'Crust Punk + Death Metal': 'Grindcore',
        'Grindcore + Electronic': 'Cybergrind',
    };
    
    // Load genres from Local Storage
    function loadGenresFromLocalStorage() {
        let storedGenres;
        try {
            storedGenres = JSON.parse(localStorage.getItem('createdGenres')) || [];
        } catch(error) {
            console.error('Error parsing stored genres:', error);
            storedGenres = [];
        }
        storedGenres.forEach(genre => {
            if (genre) {
                createNewGenreElement(genre, false);
            }
        });
        if (storedGenres.length === 0) {
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

document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.artist-gallery');
    const prevButton = gallery.querySelector('.prev');
    const nextButton = gallery.querySelector('.next');
    const artistDetails = gallery.querySelector('.artist-details');
    const artistImages = gallery.querySelectorAll('.artist-image img');
    const artistTexts = gallery.querySelectorAll('.artist-text');

    let currentArtistIndex = 0;
    const totalArtists = artistImages.length;

    function showArtist(index) {
        artistImages.forEach(image => image.style.transform = `translateX(${-index * 100}%)`);
        artistTexts.forEach(text => text.style.transform = `translateX(${-index * 100}%)`);
    }

    prevButton.addEventListener('click', function() {
        currentArtistIndex = (currentArtistIndex - 1 + totalArtists) % totalArtists;
        showArtist(currentArtistIndex);
    });

    nextButton.addEventListener('click', function() {
        currentArtistIndex = (currentArtistIndex + 1) % totalArtists;
        showArtist(currentArtistIndex);
    });
});document.addEventListener('DOMContentLoaded', function() {
    const audioPlayers = document.querySelectorAll('.music-player');

    audioPlayers.forEach(player => {
        const playButton = player.querySelector('.play-button');
        const pauseButton = player.querySelector('.pause-button');
        const stopButton = player.querySelector('.stop-button');
        const seekBar = player.querySelector('.seek-bar');
        const audio = player.querySelector('audio');

        playButton.addEventListener('click', () => {
            audio.play();
        });

        pauseButton.addEventListener('click', () => {
            audio.pause();
        });

        stopButton.addEventListener('click', () => {
            audio.pause();
            audio.currentTime = 0;
        });

        seekBar.addEventListener('change', () => {
            const time = audio.duration * (seekBar.value / 100);
            audio.currentTime = time;
        });

        audio.addEventListener('timeupdate', () => {
            const value = (100 / audio.duration) * audio.currentTime;
            seekBar.value = value;
        });
    });
});
// Function to filter and display genres based on search input
function filterGenres() {
    var input, filter, genres, genre, i, txtValue;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    genres = document.getElementById("genres");
    genre = genres.getElementsByClassName('genre');

    // Loop through all genre items, hide those that don't match the search query
    for (i = 0; i < genre.length; i++) {
        txtValue = genre[i].textContent || genre[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            genre[i].style.display = "";
        } else {
            genre[i].style.display = "none";
        }
    }
}

// Add event listener to the search bar input
document.getElementById('search-bar').addEventListener('input', filterGenres);
// Function to filter genres based on input
function filterGenres() {
    var input, filter, genres, genre;
    input = document.getElementById('search-bar');
    filter = input.value.toUpperCase();
    genres = document.querySelectorAll('.genre');

    genres.forEach(function(genre) {
        var genreName = genre.innerText.toUpperCase();
        if (genreName.indexOf(filter) > -1) {
            genre.style.display = ''; // Show genre if it matches the filter
        } else {
            genre.style.display = 'none'; // Hide genre if it doesn't match
        }
    });
}

// Event listener for input changes
document.getElementById('search-bar').addEventListener('input', filterGenres);

// Event listener for clear button
document.getElementById('clear-search').addEventListener('click', function() {
    document.getElementById('search-bar').value = ''; // Clear search bar
    filterGenres(); // Reset genre display to show all genres
});
document.addEventListener('DOMContentLoaded', function() {
    const instructionsElement = document.getElementById('instructions');
    instructionsElement.textContent = "Drop 2 genres to make a new one";
});

//where the music code should be
document.addEventListener('DOMContentLoaded', function() {
    // Audio map
    const genreAudioMap = {
        'Pop': new Audio('pop.mp3'),
        'Rock n Roll': new Audio('rocknroll.mp3'),
        'Hip Hop': new Audio('hiphop.mp3'),
        'Electronic': new Audio('electronic.mp3'),
        'Jazz': new Audio('jazz.mp3'),
        'Blues': new Audio('blues.mp3'),
        'Classical': new Audio('classical.mp3'),
        'Folk': new Audio('folk.mp3'),
        'Country': new Audio('country.mp3'),
        'R&B': new Audio('rnb.mp3'),
        'Reggae': new Audio('reggae.mp3'),
        'Proto Punk': new Audio('protopunk.mp3'),
        'Progressive': new Audio('progressive.mp3'),
        'Easy Listening': new Audio('easylistening.mp3')
    };

    let currentPlayingGenre = null;
    function playAudio(genre) {
        if (genreAudioMap[genre]) {
          genreAudioMap[genre].play();
          currentPlayingGenre = genre;
        } else {
          console.error(`No audio found for genre: ${genre}`);
        }
      }
      
      function stopAudio(genre) {
        if (genre && genreAudioMap[genre]) {
          genreAudioMap[genre].pause();
          genreAudioMap[genre].currentTime = 0;
          if (genre === currentPlayingGenre) {
            currentPlayingGenre = null;
          }
        }
      }
    
    function playResultAudio() {
        const resultAudio = new Audio('result.mp3');
        resultAudio.play();
    }

    // Draggable genres
    
    document.querySelectorAll('.genre-btn').forEach(button => {
        button.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', button.textContent);
        });
    });

    // Drop zone
    document.getElementById('search-bar').addEventListener('input', () => {
        const inputValue = document.getElementById('search-bar').value;
        if (currentPlayingGenre && !inputValue.includes(currentPlayingGenre)) {
          stopAudio(currentPlayingGenre); // Stop the music if the genre is no longer in the search bar
        }
      });
    
    const dropZone = document.getElementById('drop-zone');
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    dropZone.addEventListener('dragleave', (e) => {
        if (currentPlayingGenre !== null) {
            stopAudio(currentPlayingGenre); // Stop the music
            currentPlayingGenre = null; // Reset the current playing genre
        }
    });
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        const genre = e.dataTransfer.getData('text/plain');
        if (genre) {
          if (currentPlayingGenre) {
            genreAudioMap[currentPlayingGenre].pause(); // Pause the previous music
          }
          playAudio(genre);
          displayResult(genre);
        } else {
          console.error('No genre data found in drag event');
        }
      });

    dropZone.addEventListener('dragleave', (e) => {
        const genre = e.dataTransfer.getData('text/plain');
        if (genre && genre === currentPlayingGenre) {
          genreAudioMap[genre].pause(); // Pause the music instead of stopping it
        }
      });

      document.getElementById('search-bar').addEventListener('input', () => {
        const inputValue = document.getElementById('search-bar').value;
        if (!inputValue.includes(currentPlayingGenre)) {
          stopAudio(currentPlayingGenre); // Stop the music if the genre is no longer in the search bar
        }
      });
 
    function filterGenres() {
        var input, filter, genres, genre;
        input = document.getElementById('search-bar');
        filter = input.value.toUpperCase();
        genres = document.querySelectorAll('.genre-btn');

        genres.forEach(function(genre) {
            var text = genre.textContent || genre.innerText;
            if (text.toUpperCase().indexOf(filter) > -1) {
                genre.style.display = '';
            } else {
                genre.style.display = 'none';
            }
        });
    }

    function clearSearch() {
        var input = document.getElementById('drop-zone');
        input.value = '';
        filterGenres(); // Call filter function to show all genres
        clearDropZone(); // Clear the drop zone
    }
    
    document.getElementById('clear-button').addEventListener('click', function() {
    stopAudio(currentPlayingGenre); // Stop the music
    currentPlayingGenre = null; // Reset the current playing genre
    document.getElementById('search-bar').value = ''; // Clear search bar
    filterGenres(); // Reset genre display to show all genres
    const dropZone = document.getElementById('drop-zone');
    while (dropZone.firstChild) {
        dropZone.removeChild(dropZone.firstChild);
    }
});
    document.getElementById('search-bar').addEventListener('input', filterGenres);
    document.getElementById('clear-search').addEventListener('click', clearSearch);
});

document.getElementById('clear-button').addEventListener('click', () => {
    stopAudio(currentPlayingGenre); // Stop the music
    currentPlayingGenre = null; // Reset the current playing genre
    clearSearch(); // Clear the search bar
    clearDropZone(); // Clear the drop zone
  });
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
            3(fusionResult, true);
            resetButton.style.display = 'block'; // Show reset button
            playAudio(fusionResult); // Play the resulting music genre
        }
        clearDropZone(); // Clear the drop zone after result
    } else {
        result.textContent = '';
    }
}
 // Get the mixing area and drop zone elements
const mixingArea = document.getElementById('mixing-area');
const dropZone = document.getElementById('drop-zone');

// Get the genre elements
const genres = document.querySelectorAll('.genre');

// Initialize the dragged genre
let draggedGenre = null;

// Add event listeners to the genres
genres.forEach((genre) => {
  genre.addEventListener('dragstart', (e) => {
    draggedGenre = genre;
    e.dataTransfer.setData('text', genre.textContent);
  });

  genre.addEventListener('dragend', () => {
    draggedGenre = null;
  });
});

// Add event listeners to the drop zone
dropZone.addEventListener('dragover', (e) => {
  e.preventDefault();
});

dropZone.addEventListener('drop', (e) => {
  e.preventDefault();
  const droppedGenre = e.dataTransfer.getData('text');
  const genreElement = document.querySelector(`.genre:contains(${droppedGenre})`);
  if (genreElement) {
    // Add the dropped genre to the mixing area
    mixingArea.appendChild(genreElement.cloneNode(true));
  }
});

// Add event listener to the clear button
document.getElementById('clear-button').addEventListener('click', () => {
  mixingArea.innerHTML = '';
});

