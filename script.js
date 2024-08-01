document.addEventListener('DOMContentLoaded', () => {
    const genres = document.querySelectorAll('.genre');
    const dropZone = document.getElementById('drop-zone');
    const result = document.getElementById('result');
    const genreList = document.getElementById('genres');
    const resetButton = document.getElementById('reset-button');
    const clearButton = document.getElementById('clear-button');
    const mixButton = document.getElementById('mix-button');
    const songName = document.getElementById('song-name'); 
    const volumeControl = document.getElementById('volume');
    mixButton.addEventListener('click', mixGenres);
    clearButton.addEventListener('click', clearDropZone);

    let droppedGenres = [];
    let currentPlayingGenre = null;

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
        'Ambient + Pop' : 'Ambient Pop',
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
        'Indie + Rock n Roll': 'Indie Rock',
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
        'Rock n Roll + Blues + Country': 'Roots Rock',
        'Electronic + Hip Hop + R&B': 'Trip Hop',
        'Jazz + Funk + Hip Hop': 'Acid Jazz',
        'Pop + Rock n Roll + Electronic': 'Synth Rock',
        'Classical + Electronic + Ambient': 'Modern Classical',
        'Folk + Rock n Roll + Country': 'Americana',
        'Reggae + Pop + R&B': 'Reggae Fusion',
        'Jazz + Classical + Pop': 'Third Stream',
        'Blues + Rock n Roll + Heavy Metal': 'Blues Rock',
        'Hip Hop + Electronic + Dance': 'Electro Hip Hop',
        'Rock n Roll + Electronic + Pop + Hip Hop': 'Industrial Hip Hop',
        'Jazz + Classical + Electronic + Ambient': 'Nu Jazz',
        'Folk + Country + Rock n Roll + Blues': 'Southern Rock',
        'Electronic + Dance + Pop + R&B': 'Electropop',
        'Hip Hop + R&B + Jazz + Soul': 'Neo Soul',
        'Rock n Roll + Blues + Jazz + Country + Folk': 'Roots Music',
        'Electronic + Hip Hop + R&B + Pop + Dance': 'Contemporary R&B',
        'Classical + Jazz + Electronic + Ambient + World Music': 'New Age',
        'Pop + Rock n Roll + Electronic + Hip Hop + R&B': 'Alternative R&B',
        'Folk + Country + Blues + Bluegrass + Gospel': 'Americana'
    };

    const genreAudioMap = {
        'Pop': new Audio('ES_Overthinker - Mindme - 36000-51000.wav'),
        'Rock n Roll': new Audio('ES_My Domain - Non-State Actor - 26000-41000.wav'),
        'Hip Hop': new Audio('es-letsgetit-bahabanks.wav'),
        'Electronic': new Audio('ES_Pebbles - Rocket Jr - 25000-40000.wav'),
        'Jazz': new Audio('ES_A Summer Nights Kiss - Wendy Marcini - 13000-28000.wav'),
        'Blues': new Audio('ES_2nd Street Shuffle - Roots and Recognition - 11000-26000.wav'),
        'Classical': new Audio('ES_Mozart_ Piano Concerto No. 23 in A major, K. 488_ III. Allegro assai - Mira Ma - 10000-25000.wav'),
        'Folk': new Audio('ES_Pearls Stroll - American Legion - 13000-28000.wav'),
        'Country': new Audio('ES_Heartbreak Alley - Roots and Recognition - 14000-29000.wav'),
        'R&B': new Audio('ES_Let Me Go - Snake City - 15000-30000.wav'),
        'Reggae': new Audio('ES_Penguins - Daniel Fridell - 8000-23000.wav'),
        'Proto Punk': new Audio('ES_Bones - Coma Svensson - 17000-32000.wav'),
        'Progressive': new Audio('progressive.mp3'),
        'Easy Listening': new Audio('ES_Done Deal No_ - Harry Edvino - 9000-24000.wav')
    };
   
    const resultAudioMap = {
        'Pop Rock': new Audio('ES_A Heartless World - Mindme - 9000-24000.wav'),
        'Soft Rock': new Audio('ES_Psalm 91 - JOYSPRING - 35000-50000.wav'),
        'Electronic Rock': new Audio('ES_Data Rawk - Def Lev - 22000-37000.wav'),
        'Electropop': new Audio('ES_Shake You Off - Paisley Pink - 18000-33000.wav'),
        'Acid Jazz': new Audio('ES_Loose the Goose - Lucas Pittman - 16000-31000.wav'),
        'Funk': new Audio('ES_Cant Handle It - Ryan James Carr - 18000-33000.wav'),
        'Grunge': new Audio('ES_School of Life - Rockin For Decades - 14000-29000.wav'),
        'Alternative Rock': new Audio('ES_Sun Ray Beach - Dew Of Light - 8000-23000.wav'),
        'Americana': new Audio('ES_Backyard Folklore - Northside - 15000-30000.wav'),
        'Dub': new Audio('ES_Eardrum - Push N Glide - 26000-41000.wav'),
        'Country Blues': new Audio('ES_Backroad Blues - Roots and Recognition - 15000-30000.wav'),
        'Pop Punk': new Audio('ES_Me Myself and I - Sven Karlsson - 17000-32000.wav'),
        'Contemporary R&B': new Audio('ES_The End of You and Me - spring gang - 12000-27000.wav'),
        'Ambient': new Audio('ES_Beginners Mind - Harbours & Oceans - 17000-32000.wav'),
        'New Age': new Audio('ES_Tangeh - DEX 1200 - 18000-33000.wav'),
        'Ragtime': new Audio('ES_Lost in Town - The Fly Guy Five - 9000-24000.wav'),
        'Folk Pop': new Audio('ES_Second Guessing - Victor Lundberg - 30000-45000.wav'),
        'Chill Out': new Audio('ES_O12 - HATAMITSUNAMI - 38000-53000.wav'),
        'Soul': new Audio('ES_Just Be Mine - John Runefelt - 19000-34000.wav'),
        'Disco': new Audio('ES_WHAT! - Basixx - 26000-41000.wav'),
        'Swing': new Audio('ES_Straight 56 - Roy Edwin Williams - 9000-24000.wav'),
        'Fusion Jazz': new Audio('ES_Gratitude Loop - HATAMITSUNAMI - 21000-36000.wav'),
        'Nu Metal': new Audio('ES_Groove Commander - Dillon Knighton - 36658-146631.wav'),
        'Dance Pop': new Audio('ES_Hide and Seek (Instrumental Version) - Hallman - 42000-57000.wav'),
        'Punk Rock': new Audio('ES_So Bad - Divorce Applause - 10000-25000.wav'),
        'Ambient Pop': new Audio('ES_Safari - Paisley Pink - 35000-50000.wav'),
        'Garage': new Audio('ES_Glitter Gutter - Conditional - 10000-25000.wav'),
        'Calypso': new Audio('ES_Jawbone Jam - Tiki Tiki - 14000-29000.wav'),
        'Ska': new Audio('ES_Cant Beat Em Join Em - Carlton Lees - 8000-23000.wav'),
        'Afrobeat': new Audio('ES_Mereto - HATAMITSUNAMI - 14000-29000.wav'),
        'Indie Pop': new Audio('ES_Some Kind of Friend - Vicki Vox - 35000-50000.wav'),



    };
    function playAudio(genre, isResult = false) {
        if (!genre) {
            console.error('No genre provided');
            return;
        }
        
        let audioMap = isResult ? resultAudioMap : genreAudioMap;
        console.log('Playing audio for:', genre, 'isResult:', isResult);
        
        if (!audioMap[genre] && genreCombinations[genre]) {
            genre = genreCombinations[genre];
            isResult = true;
            audioMap = resultAudioMap;
        }
    
        if (audioMap[genre]) {
            if (currentPlayingGenre) {
                stopAudio(currentPlayingGenre, currentPlayingGenre in resultAudioMap);
            }
            audioMap[genre].volume = volumeControl.value;
            try {
                audioMap[genre].play();
            } catch (e) {
                console.error('Error playing audio:', e);
            }
            currentPlayingGenre = genre;
            
            let fileName = audioMap[genre].src.split('/').pop();
            updateSongName(fileName);
        } else {
            console.error(`No audio found for genre: ${genre}`);
            updateSongName("No song playing");
        }
    }
    
    function stopAudio(genre, isResult = false) {
        if (!genre) {
            return;
        }
        
        let audioMap = isResult ? resultAudioMap : genreAudioMap;
        if (audioMap[genre]) {
            try {
                audioMap[genre].pause();
                audioMap[genre].currentTime = 0;
            } catch (e) {
                console.error('Error stopping audio:', e);
            }
            if (genre === currentPlayingGenre) {
                currentPlayingGenre = null;
                updateSongName("No song playing");
            }
        }
    }
    
    function updateSongName(songName) {
        const songNameElement = document.getElementById('song-name');
        const nowPlayingElement = document.getElementById('now-playing');
        
        if (songNameElement && nowPlayingElement) {
            if (songName && songName !== "No song playing") {
                songName = songName.replace(/%/g, ' '); // Replace % with space
                songName = songName.replace(/20/g, ' '); // Replace % with space
                songNameElement.textContent = shortenFileName(songName);
                songNameElement.setAttribute('data-full-name', songName);
                nowPlayingElement.textContent = "Now Playing:";
            } else {
                songNameElement.textContent = "No song playing";
                songNameElement.removeAttribute('data-full-name');
                nowPlayingElement.textContent = "";
            }
        } else {
            console.error('Song name or Now Playing element not found');
        }
    }
    
    function shortenFileName(fileName, maxLength = 100) {
        if (!fileName) {
            return '';
        }
        const startIndex = fileName.indexOf('ES_') + 3; 
        const songName = fileName.slice(startIndex);
        
        // Remove numbers and file type from the song name
        const cleanedName = songName.replace(/\d+/g, '').replace(/\.[^\.]+$/g, '');
        
        if (cleanedName.length <= maxLength) return cleanedName;
        return cleanedName.substr(0, maxLength - 3) + '...';
    }
    genres.forEach(genre => {
        genre.addEventListener('dragstart', dragStart);
    });

    dropZone.addEventListener('dragover', dragOver);
    dropZone.addEventListener('drop', drop);
    dropZone.addEventListener('dragleave', dragLeave);

    function dragStart(e) {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    }

    function dragOver(e) {
        e.preventDefault();
        this.classList.add('dragover');
    }

    function dragLeave(e) {
        this.classList.remove('dragover');
        if (currentPlayingGenre !== null) {
            stopAudio(currentPlayingGenre);
            currentPlayingGenre = null;
        }
    }

    function drop(e) {
        e.preventDefault();
        this.classList.remove('dragover');
        let genre;
        if (e.type === 'touchend') {
          const draggedElement = document.querySelector('.dragging');
          if (draggedElement) {
            genre = draggedElement.textContent;
            draggedElement.classList.remove('dragging');
            draggedElement.style.position = 'static';
          }
        } else {
          genre = e.dataTransfer.getData('text/plain');
        }
      
        if (genre) {
          if (droppedGenres.includes(genre)) {
            // Genre is already in the droppedGenres array, remove it
            const index = droppedGenres.indexOf(genre);
            if (index > -1) {
              droppedGenres.splice(index, 1);
            }
            updateDropZone();
            if (currentPlayingGenre === genre) {
              stopAudio(currentPlayingGenre, currentPlayingGenre in resultAudioMap);
              currentPlayingGenre = null;
            }
          } else {
            // Genre is not in the droppedGenres array, add it
            droppedGenres.push(genre);
            updateDropZone();
            if (currentPlayingGenre) {
              stopAudio(currentPlayingGenre, currentPlayingGenre in resultAudioMap);
            }
            playAudio(genre, genre in resultAudioMap);
            currentPlayingGenre = genre;
          }
        }
      }
      mixButton.addEventListener('click', function() {
        mixGenres();
        clearDropZone();
    });


    function playResultAudio(genre) {
        // Implementation of playResultAudio function
    }
    
    function mixGenres() {
        console.log('Mixing genres...');
        if (droppedGenres.length < 2) {
            return; // Return early if there are fewer than two dropped genres
        }
    
        const sortedGenres = droppedGenres.sort().join(' + ');
        console.log('Mixing genres:', sortedGenres);
        let fusionResult = genreCombinations[sortedGenres];
    
        if (!fusionResult) {
            fusionResult = findComplexCombination(droppedGenres);
        }
    
        if (fusionResult) {
            console.log('Fusion result:', fusionResult);
            const isNewGenre = !Array.from(genreList.children).some(child => child.textContent === fusionResult);
            if (isNewGenre) {
                result.textContent = `New Genre Created: ${fusionResult}`;
                createNewGenreElement(fusionResult, true);
            } else {
                result.textContent = `Existing Genre: ${fusionResult}`;
            }
            resetButton.style.display = 'block';
            playResultAudio(fusionResult);
        } else {
            console.log('Unknown fusion');
            result.textContent = `${sortedGenres} = Unknown Fusion`;
        }
    
        // Clear the drop zone and reset droppedGenres
        clearDropZone();
    }
    
    function clearDropZone() {
        droppedGenres = [];
        dropZone.innerHTML = '';
        
        if (currentPlayingGenre) {
            stopAudio(currentPlayingGenre, currentPlayingGenre in resultAudioMap);
            currentPlayingGenre = null;
        }
    
        // Ensure the drop zone is visually empty
        updateDropZone();
    }
    
    function updateDropZone() {
        dropZone.innerHTML = '';
        droppedGenres.forEach(genre => {
            const genreElement = document.createElement('div');
            genreElement.classList.add('genre');
            genreElement.textContent = genre;
            dropZone.appendChild(genreElement);
        });
    }
    
    // Update the drop function to ensure it's correctly handling the dropped genres
   
    function findComplexCombination(genres) {
        let combinations = generateCombinations(genres);
        for (let combination of combinations) {
            if (genreCombinations[combination]) {
                return genreCombinations[combination];
            }
        }
        return null;
    }

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

    function createNewGenreElement(fusionResult, save = true) {
        console.log(`Creating new genre element: ${fusionResult}`);
        if (!Array.from(genreList.children).some(child => child.textContent.includes(fusionResult))) {
            const newFusionGenre = document.createElement('div');
            newFusionGenre.className = 'genre';
            newFusionGenre.draggable = true;
            newFusionGenre.innerHTML = `${fusionResult}`;
            newFusionGenre.addEventListener('dragstart', dragStart);
            genreList.appendChild(newFusionGenre);

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

    clearButton.addEventListener('click', function() {
        clearDropZone();
        stopAllAudio();
    });
    resetButton.addEventListener('click', function() {
        clearDropZone();
        genreList.innerHTML = '';
        localStorage.removeItem('createdGenres');
        initializeDefaultGenres();
        resetButton.style.display = 'none';
        result.textContent = '';
    });

    function loadGenresFromLocalStorage() {
        let storedGenres;
        try {
            storedGenres = JSON.parse(localStorage.getItem('createdGenres')) || [];
        } catch (error) {
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
        saveGenresToLocalStorage();
    }

    function saveGenresToLocalStorage() {
        const createdGenres = Array.from(genreList.children).map(genre => genre.textContent);
        localStorage.setItem('createdGenres', JSON.stringify(createdGenres));
    }

    loadGenresFromLocalStorage();

    function updateVolume() {
        const volume = volumeControl.value;
        for (let genre in genreAudioMap) {
            genreAudioMap[genre].volume = volume;
        }
        for (let genre in resultAudioMap) {
            resultAudioMap[genre].volume = volume;
        }
    }

    volumeControl.addEventListener('input', updateVolume);
});

function loadAudio(url) {
    return new Promise((resolve, reject) => {
        const audio = new Audio(url);
        audio.addEventListener('canplaythrough', () => resolve(audio));
        audio.addEventListener('error', (e) => reject(e));
    });
}

// שימוש:
loadAudio('ES_A Heartless World - Mindme - 9000-24000.wav')
    .then(audio => {
        resultAudioMap['Pop Rock'] = audio;
    })
    .catch(error => {
        console.error('Failed to load audio:', error);
    });

    function stopAllAudio() {
        for (let genre in genreAudioMap) {
            stopAudio(genre);
        }
        for (let genre in resultAudioMap) {
            stopAudio(genre, true);
        }
        currentPlayingGenre = null;
    }

    // הוסף את זה לתחילת הקובץ script.js
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

if (isTouchDevice()) {
    genres.forEach(genre => {
        genre.addEventListener('touchstart', dragStart, {passive: false});
        genre.addEventListener('touchmove', drag, {passive: false});
        genre.addEventListener('touchend', drop);
    });

    dropZone.addEventListener('touchmove', dragOver, {passive: false});
    dropZone.addEventListener('touchend', drop);
}

function dragStart(e) {
    if (e.type === 'touchstart') {
        e.preventDefault();
        this.classList.add('dragging');
    } else {
        e.dataTransfer.setData('text/plain', e.target.textContent);
    }
}

function drag(e) {
    if (e.type === 'touchmove') {
        e.preventDefault();
        const touch = e.targetTouches[0];
        this.style.position = 'absolute';
        this.style.left = touch.pageX - 25 + 'px';
        this.style.top = touch.pageY - 25 + 'px';
    }
}

function dragOver(e) {
    e.preventDefault();
    this.classList.add('dragover');
}

function drop(e) {
    e.preventDefault();
    this.classList.remove('dragover');
    
    if (e.type === 'touchend') {
        const genre = document.querySelector('.dragging');
        if (genre && !droppedGenres.includes(genre.textContent)) {
            droppedGenres.push(genre.textContent);
            updateDropZone();
        }
        genre.classList.remove('dragging');
        genre.style.position = 'static';
    } else {
        const genre = e.dataTransfer.getData('text/plain');
        if (!droppedGenres.includes(genre)) {
            droppedGenres.push(genre);
            updateDropZone();
        }
    }
}