$(document).ready(function(){
    $('[lang="en"]').hide();
        
    $('#switch-lang').click(function() {
        console.log("switch");
        $('[lang="it"]').toggle();
        $('[lang="en"]').toggle();
    });
});