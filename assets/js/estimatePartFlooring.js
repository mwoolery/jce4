console.log("estimate part flooring is running");

$(document).ready(function(){

    // it will be hidden at first
    $('#flooringOptions').hide();
    $('#usesUrethane').change(function(){
    if(this.checked){
        $('#flooringOptions').show();
    }else{
        $('#flooringOptions').hide();
    }
    });


    // it will be hidden at first
    $('#flooringOptions2').hide();
    $('#usesEpoxy').change(function(){
    if(this.checked){
        $('#flooringOptions2').show();
    }else{
        $('#flooringOptions2').hide();
    }
    });

});
