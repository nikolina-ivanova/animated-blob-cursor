const blobCursor = (() => {  
    const CURSOR = document.querySelector('#cursorBlob');
    const LINKS = document.querySelectorAll('.nav_link');
    const setCursorPos = (e) => {
      const { pageX: posX, pageY: posY } = e;
        if(posX > (window.innerWidth - 100)) {
        CURSOR.style.left = `${window.innerWidth - CURSOR.offsetWidth}px`;
        }
        else if(posY > (window.innerHeight - 50)){
            CURSOR.style.top = `${window.innerHeight - CURSOR.offsetHeight}px`;
        }
        else {
        CURSOR.style.top = `${posY - (CURSOR.offsetHeight / 2)}px`;
        CURSOR.style.left = `${posX - (CURSOR.offsetWidth / 2)}px`;
        }
    };
    document.addEventListener('mousemove', setCursorPos);

    const setCursorHover = () => CURSOR.style.transform = 'scale(3)';
    const removeCursorHover = () => CURSOR.style.transform = '';
    LINKS.forEach(link => link.addEventListener('mouseover', setCursorHover));
    LINKS.forEach(link => link.addEventListener('mouseleave', removeCursorHover));
})();  