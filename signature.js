var isSign = false;
var leftMButtonDown = false;

jQuery(function () {
    //Initialize sign pad
    init_Sign_Canvas();
});

function fun_submit() {
    if (isSign) {
        var canvas = $("#canvas").get(0);
        var imgData = canvas.toDataURL();
        jQuery('#page').find('p').remove();
        jQuery('#page').find('img').remove();
        jQuery('#page').append(jQuery('<p><strong>החתימה שלך:</strong></p>'));
        jQuery('#page').append($('<img/>').attr('src', imgData));
        $('#canvas').addClass('canvasSettings')
        $('#btnSubmitSign').addClass('canvasSettings')
        $('#btnClearSign').addClass('canvasSettings')
        $('.canvasSettings').hide()
        // closePopUp();

    } else {
        alert('Please sign');
    }
}

// function closePopUp() {
//     jQuery('#divPopUpSignContract').popup('close');
//     jQuery('#divPopUpSignContract').popup('close');
// }

function init_Sign_Canvas() {
    isSign = false;
    leftMButtonDown = false;

    //Set Canvas width
    var sizedWindowWidth = $(window).width();
    if (sizedWindowWidth > 700)
        sizedWindowWidth = $(window).width() / 2;
    else if (sizedWindowWidth > 400)
        sizedWindowWidth = sizedWindowWidth - 100;
    else
        sizedWindowWidth = sizedWindowWidth - 90;

    $("#canvas").width(sizedWindowWidth);
    $("#canvas").height(200);
    $("#canvas").css("border", "1px solid #000");

    var canvas = $("#canvas").get(0);

    canvasContext = canvas.getContext('2d');

    if (canvasContext) {
        canvasContext.canvas.width = sizedWindowWidth;
        canvasContext.canvas.height = 200;

        canvasContext.fillStyle = "#fff";
        canvasContext.fillRect(0, 0, sizedWindowWidth, 200);

        canvasContext.moveTo(50, 150);
        canvasContext.lineTo(sizedWindowWidth - 50, 150);
        canvasContext.stroke();

        canvasContext.fillStyle = "#000";
        canvasContext.font = "20px Arial";
        canvasContext.fillText("x", 40, 155);
    }
    // Bind Mouse events
    $(canvas).on('mousedown', function (e) {
        if (e.which === 1) {
            leftMButtonDown = true;
            canvasContext.fillStyle = "#000";
            var x = e.pageX - $(e.target).offset().left;
            var y = e.pageY - $(e.target).offset().top;
            canvasContext.moveTo(x, y);
        }
        e.preventDefault();
        return false;
    });

    $(canvas).on('mouseup', function (e) {
        if (leftMButtonDown && e.which === 1) {
            leftMButtonDown = false;
            isSign = true;
        }
        e.preventDefault();
        return false;
    });

    // draw a line from the last point to this one
    $(canvas).on('mousemove', function (e) {
        if (leftMButtonDown == true) {
            canvasContext.fillStyle = "#000";
            var x = e.pageX - $(e.target).offset().left;
            var y = e.pageY - $(e.target).offset().top;
            canvasContext.lineTo(x, y);
            canvasContext.stroke();
        }
        e.preventDefault();
        return false;
    });

    //bind touch events
    $(canvas).on('touchstart', function (e) {
        leftMButtonDown = true;
        canvasContext.fillStyle = "#000";
        var t = e.originalEvent.touches[0];
        var x = t.pageX - $(e.target).offset().left;
        var y = t.pageY - $(e.target).offset().top;
        canvasContext.moveTo(x, y);

        e.preventDefault();
        return false;
    });

    $(canvas).on('touchmove', function (e) {
        canvasContext.fillStyle = "#000";
        var t = e.originalEvent.touches[0];
        var x = t.pageX - $(e.target).offset().left;
        var y = t.pageY - $(e.target).offset().top;
        canvasContext.lineTo(x, y);
        canvasContext.stroke();

        e.preventDefault();
        return false;
    });

    $(canvas).on('touchend', function (e) {
        if (leftMButtonDown) {
            leftMButtonDown = false;
            isSign = true;
        }

    });
}