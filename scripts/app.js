document.querySelectorAll('.draggable').forEach(win => {
  let offsetX = 0, offsetY = 0, isDragging = false;

  const title = win.querySelector('.title-bar');
  title.addEventListener('mousedown', e => {
    isDragging = true;
    offsetX = e.clientX - win.getBoundingClientRect().left;
    offsetY = e.clientY - win.getBoundingClientRect().top;
    win.style.cursor = 'grabbing';
    win.style.zIndex = 9999;
    win.style.filter = 'drop-shadow(8px 8px 0 rgba(0,0,0,0.2))';
  });

  document.addEventListener('mousemove', e => {
    if (!isDragging) return;
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    const maxX = window.innerWidth - win.offsetWidth;
    const maxY = window.innerHeight - win.offsetHeight;
    win.style.left = `${Math.min(Math.max(x, 0), maxX)}px`;
    win.style.top = `${Math.min(Math.max(y, 0), maxY)}px`;
  });

  document.addEventListener('mouseup', () => {
    isDragging = false;
    win.style.cursor = 'grab';
    win.style.filter = 'none';
  });
});
