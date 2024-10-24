function adjustBodyMargin() {
    const toolbar = document.querySelector('.toolbar');
    const content = document.querySelector('.content');
    content.style.paddingTop = `${toolbar.offsetHeight}px`;
}

// Adjust on load and on resize
window.onload = adjustBodyMargin;
window.onresize = adjustBodyMargin;