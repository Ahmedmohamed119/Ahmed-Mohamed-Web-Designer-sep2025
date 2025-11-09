

    const progressContainer = document.getElementById('progress-indicator-container');
    const circumference = 176; 
    function updateProgressIndicator() {
        const scrollHeight = document.documentElement.scrollHeight;
        const clientHeight = document.documentElement.clientHeight;
        const scrollPosition = document.documentElement.scrollTop;
        
        const scrollTotal = scrollHeight - clientHeight;
        const scrollPercentage = scrollTotal > 0 ? (scrollPosition / scrollTotal) : 0; 

        const offset = circumference * (1 - scrollPercentage);
        
        document.documentElement.style.setProperty('--progress-offset', offset);

        if (scrollPosition > 100) { 
            progressContainer.classList.add('visible');
        } else {
            progressContainer.classList.remove('visible');
        }
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' 
        });
    }

    window.addEventListener('scroll', updateProgressIndicator);
    window.scrollToTop = scrollToTop;
    
    updateProgressIndicator();
