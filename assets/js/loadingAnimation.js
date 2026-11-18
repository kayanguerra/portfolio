document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingPercentage = document.getElementById('loading-percentage');

    // ← ADICIONA essa verificação
    if (!loadingScreen || !loadingPercentage) return;

    let percentage = 0;

    const loadingInterval = setInterval(() => {
        if (percentage >= 100) {
            clearInterval(loadingInterval);
            loadingScreen.style.display = 'none';  
        } else {
            percentage++;
            loadingPercentage.innerText = `${percentage}%`;
            loadingScreen.style.background = `linear-gradient(to bottom, var(--blue) ${percentage}%, var(--black) ${percentage}%)`;
        }
    }, 10); 
});
