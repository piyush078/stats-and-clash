/*  GET THE CLANS DATA  */
function getClansData(name, area) {
    $("#content").html("<div class='loading'>Loading..</div>");
    $.ajax({
        url: "clans.php",
        method: "GET",
        dataType: "json",
        data: {
            name: encodeURI(name)
        }, 
        success: function(data) {
            if(data.error === 1) $("#content").html("<div class='loading'>Could not Load the Results</div>");
            else {
                $("#content").html("");
                displayClan(area, data);
            }
        },
        error: function(xhr, status, text) {
            $("#content").html("<div class='loading'>Could not Load the Results</div>");
        }
    });
}

/*  SEARCH THE CLAN BASED ON ID  */
function searchClan(clanID) {
    $("#content").before("<div class='loading'>Loading..</div>");
    $.ajax({
        url: "clans.php",
        method: "GET",
        dataType: "json",
        data: {
            tag: encodeURI(clanID)
        }, 
        success: function(data) {
            if(data.error === 1) $(".loading").text("Could not Load the Results");
            else {
                $("#content").html("");
                clan(data);
            }
        },
        error: function(xhr, status, text) {
            $(".loading").text("Could not Load the Results");
        }
    });
    setTimeout(function() {
        $(".loading").fadeOut(500, function() {
            $(this).remove();
        });
    }, 3000);
}

$(document).ready(function() {
    $("#clan-input").on("keyup", function() {
        var input = $(this).val().trim();
        getClansData(input, document.getElementById("content"));
    });
});