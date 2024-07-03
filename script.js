document.addEventListener('DOMContentLoaded', () => {
  const rainbowContainer = document.getElementById('rainbowContainer');

  function createSegment(color, index) {
    const segment = document.createElement('div');
    segment.classList.add('rainbowSegment');
    segment.style.backgroundColor = color;
    segment.style.bottom = `${index * 20}px`;
    return segment;
  }

  function animateSegment(segment, delay) {
    return new Promise(resolve => {
      setTimeout(() => {
        segment.style.transform = 'translateY(0)';
        segment.addEventListener('transitionend', resolve, { once: true });
      }, delay);
    });
  }

  async function createRainbow() {
    const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];

    for (const [index, color] of colors.entries()) {
      const segment = createSegment(color, index);
      rainbowContainer.appendChild(segment);
      await animateSegment(segment, 500); // Animate each segment with a delay of 500ms
    }
  }

  createRainbow();
});
