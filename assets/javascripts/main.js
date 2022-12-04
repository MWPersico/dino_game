var game = {
    view: document.getElementById('view'),
    started: false,
    lower: false,
    dinoPosition: 0,
    images: {
        buttons:[],
        dinos:[],
        objects:[],
        cropImg: (imagem, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight, cWidth, cHeight)=>{
            const canvas = document.createElement('canvas');
            canvas.style.cssText = `width:${cWidth}px; height:${cHeight}px; margin-left:1px;`;
            const ctx = canvas.getContext('2d');
            let image = new Image();
            image.src = imagem;
            image.addEventListener('load', ()=>{
                ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
            })
            return canvas;
        },
        addDino: function(canvas = []){
            canvas.forEach((dino, index)=>{
                dino.classList.add('dino');
                if(dino.style.height == '75px') dino.classList.add('lowerDino')
                dino.id="dino"+index;
                this.dinos.push(dino);

            })
        }, 
        addObject: function(canvas = []){
            canvas.forEach(object=>{
                object.classList = "object";
                this.objects.push(object);
            })
        }
    },

    dinoRender: function(dinoIndex){
        if(this.view.children.length == 0){
            this.view.appendChild(this.images.dinos[dinoIndex]);
        }else{
            for(element of this.view.children){
                if(element.classList.contains('dino')){
                    this.view.removeChild(element);
                }
                this.view.appendChild(this.images.dinos[dinoIndex]);         
            }
        }
    },
    
    start: function(e){
        if(e.type == 'click'){
            game.started = true;
            game.dinoRun();
            window.addEventListener('keydown', game.dinoControls)
            game.view.removeEventListener('click', game.start)
            window.removeEventListener('keydown', game.start)
        }else if(e.type == 'keydown' ){
            if(e.key == 'Enter'){
                game.started = true;
                game.dinoRun();
                window.addEventListener('keydown', game.dinoControls)
                window.removeEventListener('keydown', game.start)
                game.view.removeEventListener('click', game.start)
            }
        }
    },

    dinoRun: function(){
        setInterval(()=>{
            if(this.lower){
                if(this.dinoPosition<3 || this.dinoPosition>5) this.dinoPosition = 3;
                this.dinoRender(this.dinoPosition);
                this.dinoPosition++;
                
            }else{
                if(this.dinoPosition>2) this.dinoPosition = 0;
                this.dinoRender(this.dinoPosition);
                this.dinoPosition++;
            }
        }, 100)
    },

    dinoControls: function(e){
        if(e.key == 'ArrowRight' || e.key == "d" || e.key == "D"){
            game.lower = false;
        }
        if(e.key == 'ArrowDown' || e.key == "s" || e.key == "S"){
            game.lower = true;
            window.addEventListener('keyup', e=>{
                if(e.key == "ArrowDown" || e.key == "s" || e.key == "S"){
                    game.lower = false;  
                }
            })
            
        }
    }
}

let dinoImages = "./assets/images/dino.png";
game.images.addDino([
    game.images.cropImg(dinoImages, 0, 3, 44, 60, 0, 0, 300, 150, 80, 100), 
    game.images.cropImg(dinoImages, 88, 3, 44, 60, 0, 0, 300, 150, 80, 100),
    game.images.cropImg(dinoImages, 132, 3, 44, 60, 0, 0, 300, 150, 80, 100),
    game.images.cropImg(dinoImages, 264, 21, 59, 42, 0, 0, 300, 150, 100, 75),
    game.images.cropImg(dinoImages, 323, 21, 59, 42, 0, 0, 300, 150, 100, 75),
    game.images.cropImg(dinoImages, 323, 21, 59, 42, 0, 0, 300, 150, 100, 75),
    game.images.cropImg(dinoImages, 44, 3, 44, 60, 0, 0, 300, 150, 80, 100),
    game.images.cropImg(dinoImages, 176, 3, 44, 60, 0, 0, 300, 150, 80, 100),
    game.images.cropImg(dinoImages, 220, 3, 44, 60, 0, 0, 300, 150, 80, 100)
]);
game.images.addObject([
    game.images.cropImg(dinoImages, 383, 20, 34, 45, 0, 0, 300, 150, 60, 60)
]);


window.addEventListener('keydown', game.start);
game.view.addEventListener('click', game.start);