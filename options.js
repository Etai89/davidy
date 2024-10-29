$(document).ready(() => {
    14400 + 12000 + 9000
    const totalA = 30000
    let total = totalA
    const firstPayment = totalA * 35 / 100
    const secondPayment = totalA * 25 / 100
    const thirdPayment = totalA * 30 / 100
    const lastPayment = 3000
const payments = ()=>{
    $('#totalPayment').text("₪" + totalA.toLocaleString())
    $('#firstPayment').text("₪" + firstPayment.toLocaleString())
    $('#secondPayment').text("₪" + secondPayment.toLocaleString())
    $('#thirdPayment').text("₪" + thirdPayment.toLocaleString())
    $('#lastPayment').text("₪" + lastPayment.toLocaleString())
    $('#totalPayment').text("₪" + total.toLocaleString())
}
payments()



    $('#option').change(() => {
        if ($('#option').is(':checked')) {
            $('#thirdStage').removeClass('visible')
            $('#fourPayment').removeClass('visible')
            total = totalA + lastPayment
 
            payments()
        }
        if (!$('#option').is(':checked')) {
            $('#thirdStage').addClass('visible')
            $('#fourPayment').addClass('visible')
            total = totalA
            
            payments()
        }
    });
    

})