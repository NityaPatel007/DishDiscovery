const images = ['italianpasta.jpg', 'back.jpg', 'Pancakes.jpg', 'Poha.jpg'];
        let currentIndex = 0;

        function changeBackground() {
            const heroSlider = document.querySelector('.hero-slider');
            const heroText = document.querySelector('.hero-text');
            const currentImage = images[currentIndex];

            heroSlider.style.backgroundImage = `url('${currentImage}')`;

            // Set text color based on the current image
            const textColor = getTextcolorForImage(currentImage);
            heroText.style.color = textColor;

            currentIndex = (currentIndex + 1) % images.length;
        }

        function getTextcolorForImage(image) {
            // Check the current image and return the appropriate text color
            if (image === 'italianpasta.jpg' || image === 'back.jpg') {
                return 'black';
            } else if (image === 'Pancakes.jpg' || image === 'Poha.jpg') {
                return 'white';npm i express ejs express-validator
            }
        }

        setInterval(changeBackground, 5000);