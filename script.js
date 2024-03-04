document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Create 800 square elements and append them to the container
    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');

        // Add event listeners for hover effect
        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = getRandomColor();
        });

        square.addEventListener('mouseout', function () {
            setTimeout(function () {
                square.style.transition = 'background-color 1s';
                square.style.backgroundColor = 'charcoal';
            }, 1000); // 1000 milliseconds = 1 second
        });

        container.appendChild(square);
    }

    // Function to generate random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
