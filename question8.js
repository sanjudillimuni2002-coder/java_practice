   const box = document.createElement('div');

        box.style.width = '100px';
        box.style.height = '100px';
        box.style.backgroundColor = '#ff0000';

        box.style.position = 'absolute';
        box.style.left = '0px';

        document.body.append(box);

        let x = 0;

        setInterval(() => {
            x += 2;
            box.style.left = x + 'px';
        }, 10);