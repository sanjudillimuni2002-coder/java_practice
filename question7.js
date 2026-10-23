const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#000000']; 
for (let i = 0; i < colors.length; i++) {
    const box = document.createElement('div');
    box.style.width = '100px';
    box.style.height = '100px';
    box.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.margin = '10px';
    document.body.append(box);
};