const eyel = document.querySelector('.pupill');
        const eyer = document.querySelector('.pupilr')
        window.addEventListener('mousemove', (evt) => {
            const x = -(window.innerWidth  - evt.pageX) / 1000;
            const y = -(window.innerHeight  - evt.pageY) / 1000;
            eyel.style.transform = `translateY(${y*60}px) translateX(${x*60}px)`;
            eyer.style.transform = `translateY(${y*60}px) translateX(${x*60}px)`;
            eyel.style.left = "80px"
            eyer.style.left = "80px"
            eyel.style.top = "60px"
            eyer.style.top = "60px"
        });