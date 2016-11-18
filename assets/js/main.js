console.log("main.js was running");

$(document).ready(function(){

    // it will be hidden at first
    $('#aggregateOptions').hide();
    $('#usesAggregate').change(function(){
    if(this.checked){
        $('#aggregateOptions').show();
    }else{
        $('#aggregateOptions').hide();
    }
});
});

