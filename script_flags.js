let screen = document.querySelector('canvas'),
    brush = screen.getContext('2d'),
    count = 0,
    list = []

let flags = {

    italyFlag(){
        brush.fillStyle = 'green'
        brush.fillRect(0, 0, screen.width/3, screen.height)

        brush.fillStyle = 'white'
        brush.fillRect(screen.width/3, 0, screen.width/3, screen.height)

        brush.fillStyle = 'red'
        brush.fillRect(screen.width/1.5, 0, screen.width/3, screen.height)


    },

    franceFlag(){
        brush.fillStyle = 'blue';
        brush.fillRect(0, 0, screen.width/3, screen.height);

        brush.fillStyle = 'white';
        brush.fillRect(screen.width/3, 0, screen.width/3, screen.height)

        brush.fillStyle = 'red'
        brush.fillRect(screen.width/1.5, 0, screen.width/3, screen.height)


    },
    netherlandsFlag(){
        brush.fillStyle = 'red';
        brush.fillRect(0, 0, screen.width, screen.height/3);

        brush.fillStyle = 'white';
        brush.fillRect(0, screen.height/3, screen.width, screen.height/3);

        brush.fillStyle = 'blue';
        brush.fillRect(0, screen.height/1.5, screen.width, screen.height/3);


    },

     germanyFlag(){
        brush.fillStyle = 'black';
        brush.fillRect(0, 0, screen.width, screen.height/3);

        brush.fillStyle = 'red';
        brush.fillRect(0, screen.height/3, screen.width, screen.height/3);

        brush.fillStyle = 'yellow';
        brush.fillRect(0, screen.height/1.5, screen.width, screen.height/3);

        // console.log(screen.height/1.5)
        // console.log(screen.height/3)

    },

     brazilFlag(){

        let distance = (screen.height/14),
            lightning = 3.5*distance;

        // Fundo da bandeira
        brush.fillStyle = 'green';
        brush.fillRect(0, 0, screen.width, screen.height)

        //Uma parte do triângulo - lado esquerdo
        brush.fillStyle = 'yellow';
        brush.beginPath();
        brush.moveTo(screen.width/2, Math.floor((screen.height/2)/10));
        brush.lineTo(Math.floor(screen.width/2)/16, screen.height/2);
        brush.lineTo(screen.width/2, screen.height - Math.floor((screen.height/2)/10));
        brush.fill();

        //Outra parte do triângulo - lado direito
        brush.fillStyle = 'yellow';
        brush.moveTo(screen.width/2, Math.floor((screen.height/2)/10));
        brush.lineTo(screen.width - Math.floor((screen.width/2)/16), screen.height/2);
        brush.lineTo(screen.width/2, screen.height - Math.floor((screen.height/2)/10));
        brush.fill();

        //Circulo da bandeira
        brush.fillStyle = 'blue';
        brush.beginPath();
        brush.arc(screen.width/2, screen.height/2, lightning, 0, 2 * Math.PI);
        brush.fill()

    },

     addFlags(count) {
        list = [
            flags.italyFlag,
            flags.franceFlag,
            flags.netherlandsFlag,
            flags.germanyFlag,
            flags.brazilFlag
        ]


        return list[count]();

    }

}

setInterval(function(){
    if(count >= list.length){
        count = 0
    }

    flags.addFlags(count)
    count++

}, 500)










