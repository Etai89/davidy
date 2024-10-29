$(document).ready(() => {


    const whatsapp = $('#whatsApp')
    const callMe = $('#callMe')
    const gmail = $('#gmail')
    const buttons = [whatsapp, callMe, gmail]

    for (let btn = 0; btn < buttons.length; btn++) {
        $(buttons[btn]).on('mouseover', () => {
            $(buttons[btn]).css('width', '52px')
            $(buttons[btn]).css('height', '52px')
        })
    }
    for (let btn = 0; btn < buttons.length; btn++) {
        $(buttons[btn]).on('mouseout', () => {
            $(buttons[btn]).css('width', '50px')
            $(buttons[btn]).css('height', '50px')
        })
    }

    function call() {
        window.location.href = "tel:+972549832002";
    }

    callMe.on('click', () => {
        call()
    })

    function whatsAppMe() {
        const phoneNumber = "972549832002";
        const message = encodeURIComponent("היי איתי, אשמח אם תחזור אלי.");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }

    whatsapp.on('click', () => {
        whatsAppMe()
    })


    const dataVisability = ()=>{
        $('#ClientName').hide();
        $('#clientIdNumber').hide();
        $('#clientPhone').hide();
        $('#clientId').html(`
            <p>שם מלא: ${$('#ClientName').val()}</p>
            <p>ת.ז / ח.פ: ${$('#clientIdNumber').val()}</p>
            <p>טלפון: ${$('#clientPhone').val()}</p>
            `)
        $('#clientDeclearation').css('height', '390px')
    }

    const pdf = () => {
        $('#print').hide();
        $('#buttons').hide();
        dataVisability();
        print();
    
        // Add a delay after print
        setTimeout(() => {
            $('#fullDoc').css('display', 'none');
            $('#thankYou').toggleClass('visible');
        }, 2000); // Delay of 2000ms (2 seconds)
    };
    

    $('#print').click(() => {
        if(!$('.canvasSettings').length){
            alert('בבקשה חתום לפני שאתה מדפיס את קובץ ה-PDF')
            return
        }
        const clientName = $('#ClientName').val();
        const clientId = $('#clientIdNumber').val();
        const clientPhone = $('#clientPhone').val();


        if (!clientName || !clientId || !clientPhone) {
            alert('נא למלא את כל השדות טקסט (שם מלא, ת.ז / ח.פ , טלפון)');
            return;
        }

        if (clientId.length < 9){
            alert('השדה חייב להכיל לפחות 9 ספרות')
            return
        }
        if (clientPhone.length < 10){
            alert('השדה חייב להכיל לפחות 10 ספרות')
            return
        }

        if(!$('#approveDeclearation').is(':checked')){
            alert('נא לאשר שקראת והבנת את כל התנאים וההוראות באתר.')
            return
        }
        pdf()
    });
    
})
