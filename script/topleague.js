/*  RETRIEVE THE TOP PLAYERS  */
function getTopLeague(limit, area) {
    $("#content").html("<div class='loading'>Loading..</div>");
    $.ajax({
        url: "topLeague.php",
        method: "GET",
        dataType: "json",
        data: {
            limit: limit
        }, 
        success: function(data) {
            if(data.error === 1) $("#content").html("<div class='loading'>Could not Load the Results</div>");
            else {
                $("#content").html("");
                displayPlayer(area, data);
            }
        },
        error: function(xhr, status, text) {
            $("#content").html("<div class='loading'>Could not Load the Results</div>");
        }
    });
}

/*  SHOW THE TOP LEAGUE PLAYERS  */
function loadTopLeague() {
    
    var topLeague = document.createElement("div"),  
        leagueHead = document.createElement("div"), //  LEAGUE BLOCK HEADER
        leagueList = document.createElement("div"), //  LIST OF THE PLAYERS
        leagueLink = document.createElement("div"), //  LINK TO COMPLETE LIST
        contentArea = document.getElementById("content");
    
    contentArea.appendChild(topLeague);
    topLeague.setAttribute("class", "top-league");
    leagueHead.setAttribute("class", "block-header");
    leagueHead.appendChild(document.createTextNode("League Rankings"));

    leagueLink.setAttribute("class", "block-link");
    leagueLink.setAttribute("onclick", "topPlayers");
    leagueLink.appendChild(document.createTextNode("More Rankings"));
    topLeague.appendChild(leagueHead);
    topLeague.appendChild(leagueList);
    topLeague.appendChild(leagueLink);
    getTopLeague(5, leagueList);
}