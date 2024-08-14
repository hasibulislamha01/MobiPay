document.querySelectorAll('input[type=number]').forEach(input => {
    input.addEventListener('wheel', function(event) {
        event.preventDefault();
    });
});
