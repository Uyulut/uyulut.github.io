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
                if (genreAudioMap[genre]) {
                    genreAudioMap[genre].pause();
                    genreAudioMap[genre].currentTime = 0;
                    currentPlayingGenre = null;
                }
            }

            function playResultAudio() {
                const resultAudio = new Audio('result.mp3');
                resultAudio.play();
            }

            function displayResult(genre) {
                const result = document.getElementById('result');
                result.textContent = `You selected ${genre}!`;
                playResultAudio();
            }

            // Draggable genres
            document.querySelectorAll('.genre-btn').forEach(button => {
                button.addEventListener('dragstart', (e) => {
                    e.dataTransfer.setData('text/plain', button.textContent);
                });
            });

            // Drop zone
            const dropZone = document.getElementById('drop-zone');
            dropZone.addEventListener('dragover', (e) => {
                e.preventDefault();
            });

            dropZone.addEventListener('drop', (e) => {
                e.preventDefault();
                const genre = e.dataTransfer.getData('text/plain');
                playAudio(genre);
                displayResult(genre);
            });

            dropZone.addEventListener('dragleave', (e) => {
                const genre = e.dataTransfer.getData('text/plain');
                if (genre === currentPlayingGenre) {
                    stopAudio(genre);
                }
            });

            // Search functionality (assuming this part remains unchanged)
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
                var input = document.getElementById('search-bar');
                input.value = '';
                filterGenres(); // Call filter function to show all genres
            }

            document.getElementById('search-bar').addEventListener('input', filterGenres);
            document.getElementById('clear-search').addEventListener('click', clearSearch);
        });