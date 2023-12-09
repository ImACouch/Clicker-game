var num = 0
    var mult = 1
    var mult_up_price = 10
    var CPS = 0
    var CPS_up_price = 20
    var reberths = 0
    var reberth_prise = 500
    
    document.getElementById("num").innerHTML = "Clikes: "+num+"!";
    document.getElementById("mult_").innerHTML = "Multipliyer: "+mult;

    function main_update() {
        update_button_backround()
        document.getElementById("num").innerHTML = "Clikes: "+num+"!";
        document.getElementById("mult_").innerHTML = "Multipliyer: "+mult;
        document.getElementById("mult_up_button").innerHTML = "Upgrade Multiyplyer for "+mult_up_price+ " Clikes";
        document.getElementById("CPS_").innerHTML = "Clicks per second: "+CPS;
        document.getElementById("add_clicker").innerHTML = "Upgrade CPS for "+CPS_up_price+ " Clikes";
        a=reberths*25
        b=a/100+1
        document.getElementById("Reberths").innerHTML = "Reberths: " +reberths+"| Click boost: " + a +"%"
        document.getElementById("Reberth_b").innerHTML = "Reberth! Needs: "+reberth_prise+ " Clikes";
       
        //saveToLocalStorage()
    }

    function update_button_backround() {
        if (num>=mult_up_price) {
            document.getElementById("mult_up_button").style.backgroundColor = "green";
        }
        else {
            document.getElementById("mult_up_button").style.backgroundColor = "red";
        }

        if (num>=CPS_up_price) {
            document.getElementById("add_clicker").style.backgroundColor = "green";
        }
        else {
            document.getElementById("add_clicker").style.backgroundColor = "red";
        }

        if (num>=reberth_prise) {
            document.getElementById("Reberth_b").style.opacity = 1;
            document.getElementById("Reberth_b").style.backgroundColor = "purple";
            document.getElementById("Reberth_b").style.borderColor = "yellow";
        }
        else {
            document.getElementById("Reberth_b").style.opacity = 0.5;
            document.getElementById("Reberth_b").style.backgroundColor = "gray";
            document.getElementById("Reberth_b").style.borderColor = "black";
        }

    }

    function clickee() {
        console.log("Click")
        if (reberths >= 1) {
            a=reberths*25
            b=a/100+1
            num+=mult*b
        }
        else {
            num+=mult
        }

        

        main_update()
    }

    function upgrade_mult () {
        if (num>=mult_up_price ) {
            num -=mult_up_price
            mult+=1
            mult_up_price*=1.5

            main_update()
        }
        

    }

    function upgrade_CPS() {
        if (num>=CPS_up_price ) {
            num -=CPS_up_price
            CPS+=0.5
            CPS_up_price*=1.5

            main_update()
        }
    }

    function CPS_run() {
        if (reberths >= 1) {
            a=reberths*25
            b=a/100+1
            num+=CPS*b
        }
        else {
            num+=CPS
        }
        document.getElementById("num").innerHTML = "Clikes: "+num+"!";
        
        saveToLocalStorage()
    }

    setInterval(CPS_run,1000)
    
    

    //save stuff
    const button = document.querySelector('.button');
    const button2 = document.querySelector('.mult_up_b');

    const saveToLocalStorage = () => {
        localStorage.setItem('Clikes', num)

        localStorage.setItem('mult', mult)

        localStorage.setItem('mult_up_price', mult_up_price)

        localStorage.setItem('CPS', CPS)

        localStorage.setItem('CPS_up_prise', CPS_up_price)

        localStorage.setItem('reberths', reberths)

        localStorage.setItem('reberth_prise', reberth_prise)

        lode()
    }

    function lode () {
        const storageinpute_num = localStorage.getItem('Clikes')
        const storageinpute_mult = localStorage.getItem('mult')
        const storageinpute_mult_up_price = localStorage.getItem('mult_up_price')
        const storageinpute_CPS = localStorage.getItem('CPS')
        const storageinpute_CPS_up_prise = localStorage.getItem('CPS_up_prise')
        const storageinpute_reberth = localStorage.getItem('reberths')
        const storageinpute_reberth_up_prise = localStorage.getItem('reberth_prise')

        if (storageinpute_num) {
            num = parseFloat(storageinpute_num)
            num = Math.round(num * 10)/10
        }

        if (storageinpute_mult) {
            mult = parseInt(storageinpute_mult)
        }

        if (storageinpute_mult_up_price) {
            mult_up_price = parseInt(storageinpute_mult_up_price)
        }

        if (storageinpute_CPS) {
            CPS = parseFloat(storageinpute_CPS)
        }

        if (storageinpute_CPS_up_prise) {
            CPS_up_price = parseFloat(storageinpute_CPS_up_prise)
        }

        if (storageinpute_reberth) {
            reberths = parseFloat(storageinpute_reberth)
        }

        if (storageinpute_reberth_up_prise) {
            reberth_prise = parseFloat(storageinpute_reberth_up_prise)
        }


        main_update()



        
    }

    function reset_proggress () {
        num=0
        mult = 1
        mult_up_price = 10
        CPS = 0
        CPS_up_price = 20

        saveToLocalStorage()
        main_update()
    }

    function reset_all () {
        reset_proggress()
        reberth_prise = 500
        reberths = 0
        saveToLocalStorage()
        main_update()
    }

    function Reberth () {
        if (num>= 1) {
            reset_proggress()
            reberths+=1
            reberth_prise*=2
            a=reberths*25
            b=a/100+1
            document.getElementById("Reberths").innerHTML = "Reberths: " +reberths+"| Click boost: " + a +"%"
            saveToLocalStorage()
            main_update()
        }
    }
    
    button.addEventListener('click', saveToLocalStorage)

    lode()

    main_update()
