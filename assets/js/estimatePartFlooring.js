console.log("estimate part flooring is running");

$(document).ready(function(){

if(document.getElementById('usesUrethane').checked) {
    $("#flooringOptions").show();
} else {
    $("#flooringOptions").hide();
}

if(document.getElementById('usesEpoxy').checked) {
    $("#flooringOptions2").show();
} else {
    $("#flooringOptions2").hide();
}


      
    $('#usesUrethane').change(function(){
    if(this.checked){
        $('#flooringOptions').show();
    }else{
        $('#flooringOptions').hide();
    }
    });
    // it will be hidden at first
  
    $('#usesEpoxy').change(function(){
    if(this.checked){
        $('#flooringOptions2').show();
    }else{
        $('#flooringOptions2').hide();
    }
    });

});
