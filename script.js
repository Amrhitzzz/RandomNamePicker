 var x = 0;
    var array = Array();


    function input() {

        array[x] = document.getElementById("inputid").value;
        x++;
        document.getElementById("inputid").value = "";
        var names = document.getElementsByClassName('names');

        color();
        namelist();
        function namelist() {


            // document.getElementById('Result').innerText = `aaaaaaa`;

            var result = "Your Entered Names are as follow <br>";
            for (var y = 0; y < array.length; y++) {
                result += [y + 1 + '.'] + ' ' + array[y] + '<br>';
            }
            document.getElementById("namelist").innerHTML = `${result}`;
        }

        function color() {

            let container = document.querySelectorAll('body');//to change body color
            // let container = document.querySelectorAll('div.container'); //to change content background color
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);

            container.forEach(function (odd) {
                odd.style.background = "rgba(" + r + "," + g + "," + b + ",1)";
                // odd.style.color = "rgb(" + r + "," + b + "," + g + ")";

            });


        }


    }

    function randomname() {
        let show = array[Math.floor(Math.random() * array.length)];
        let displayblock = document.getElementById('random');
        displayblock.style.display = "block";
        document.getElementById('random').innerHTML = `We got a random name -->>>>` + '<span>' + show + '</span>';
        let container = document.querySelectorAll('body');
        // let container = document.querySelectorAll('div#random');
        // let container = document.querySelectorAll('div.container');
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        container.forEach(function (odd) {
            odd.style.background = "rgba(" + r + "," + g + "," + b + ",1)";
        });

    }