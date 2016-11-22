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
    $("input[type='radio']").click(function(evt){ 
        // alert(evt.target.id);
        $('#dis_bid_'+(evt.target.id).substr(0,1)).html($('#mbid_'+evt.target.id).html());
        // console.log($('#mbid_'+evt.target.id).html());
    });
});

