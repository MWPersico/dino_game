//Objeto para tratar e armazenar imagens do jogo
var imagens = {
    buttons:[],
    dino:[],
    objects:[],
    cropImg: (imagem, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, cWidth, cHeight)=>{
        const canvas = document.createElement('canvas');
        canvas.style.cssText = `width:${cWidth}px; height:${cHeight}px; margin-left:1px`;
        const ctx = canvas.getContext('2d');
        let image = new Image();
        image.src = imagem;

        // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        image.addEventListener('load', ()=>{
            ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
        })
        return canvas;
    }
}

imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 0, 3, 44, 60, 0, 0, 300, 150, 80, 100));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 44, 3, 44, 60, 0, 0, 300, 150, 80, 100));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 88, 3, 44, 60, 0, 0, 300, 150, 80, 100));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 132, 3, 44, 60, 0, 0, 300, 150, 80, 100));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 176, 3, 44, 60, 0, 0, 300, 150, 80, 100));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 220, 3, 44, 60, 0, 0, 300, 150, 80, 100));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 264, 21, 59, 42, 0, 0, 300, 150, 100, 75));
imagens.dino.push(imagens.cropImg('./assets/images/dino.png', 323, 21, 59, 42, 0, 0, 300, 150, 100, 75));

imagens.dino.forEach(element=>document.body.appendChild(element));
