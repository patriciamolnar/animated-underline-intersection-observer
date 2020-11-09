window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const title = document.getElementById('site-title');
        const h2s = document.querySelectorAll('h2');

        const options = {
            rootMargin: '0px 0px -200px 0px' 
        }; 

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if(!entry.isIntersecting) {
                    return; 
                } else {
                    entry.target.classList.add('underline'); 
                    observer.unobserve(entry.target); 
                }
            }); 
        }, options);
        
        if(title) {
            console.log(title);
            observer.observe(title);
        }

        if(h2s) {
            h2s.forEach(h2 => {
                observer.observe(h2)
            });
        }
}