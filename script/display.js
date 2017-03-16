function deleteScreen(node) {
    $(node).fadeOut(600, function() {
        node.remove();
        $(".web-bg").css("overflow", "auto");
    });
}

function player(data) {
    if(document.getElementById("coverScreen") === null) {
        var coverScreen = document.createElement("div");
        coverScreen.setAttribute("id", "cover-screen");
        $(".web-bg").css("overflow", "hidden");
        document.body.appendChild(coverScreen);
    }
    
    var townHalls = [
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level1_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level2_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level3_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level4_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level5_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level6_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level7_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level8_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level9_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level10_ingame.png',
        'http://clash-wiki.com/images/buildings/town_hall/town_hall_level11_ingame.png'
    ], playerClan = {}, playerLeague;
    
    if(data.clan !== undefined) {
        playerClan = {
            clanName: data.clan.name,
            rank: "(" + data.role + ")",
            tag: "onclick='searchClan(\"" + data.clan.tag + "\");'"
        };
    } else {
        playerClan = {
            clanName: "No Clan",
            rank: "",
            tag: ""
        };
    }

    if(data.league === undefined) playerLeague = "( Unranked )";
    else playerLeague = "(&nbsp;" + data.league.name + "&nbsp;)";
    
    var information = 
        "<div id='clash-data'>" +
            "<div class='close' onclick='deleteScreen(this.parentNode.parentNode);'><img src='https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/close-64.png' /></div>" +
            "<div class='town-hall'><img src='" + townHalls[data.townHallLevel - 1] + "' /></div>" +
            "<div class='name'>" + data.name + "</div>" +
            "<div class='town-hall-level'>(Town Hall " + data.townHallLevel + ")</div>" +
            "<div class='clan' " + playerClan.tag + "><span class='prop'>" + playerClan.clanName + "</span>&nbsp;<span class='value'>" + playerClan.rank + "</span></div>" +
            "<div class='info'>" +
                "<div class='info-block'><span class='prop'>Experience</span><span class='value'>" + data.expLevel + "</span></div>" +
                "<div class='info-block'><span class='prop'>War Stars</span><span class='value'>" + data.warStars + "</span></div>" +
                "<div class='info-block'><span class='prop'>Trophies</span><span class='value'>" + data.trophies + "&nbsp;" + playerLeague + "</span></div>" +
                "<div class='info-block'><span class='prop'>Attacks Won</span><span class='value'>" + data.attackWins + "</span></div>" +
                "<div class='info-block'><span class='prop'>Defences Won</span><span class='value'>" + data.defenseWins + "</span></div>" +
                "<div class='info-block'><span class='prop'>Troops Donated / Troops Received</span><span class='value'>" + data.donations + "&nbsp;/&nbsp;" + data.donationsReceived + "</span></div>" +
            "</div>" +
            "<div class='troops'>";
    
    for(num = 0; num < data.troops.length; ++num) {
        information += "<div class='troop-block'><span class='prop'>" + data.troops[num].name + "</span>&nbsp;-&nbsp;Level&nbsp;<span class='value'";
        if(data.troops[num].level === data.troops[num].maxLevel) {
            information += " style='color:yellow;'";
        }
        information += ">" + data.troops[num].level + "</span></div>";
    }
    
    for(num = 0; num < data.spells.length; ++num) {
        information += "<div class='troop-block'><span class='prop'>" + data.spells[num].name + "</span>&nbsp;-&nbsp;Level&nbsp;<span class='value'";
        if(data.spells[num].level === data.spells[num].maxLevel) {
            information += " style='color:yellow;'";
        }
        information += ">" + data.spells[num].level + "</span></div>";
    }
    
    information += "</div></div>";
    $(coverScreen).html(information);
}

function clan(data) {

    if(document.getElementById("coverScreen") === null) {
        var coverScreen = document.createElement("div");
        coverScreen.setAttribute("id", "cover-screen");
        $(".web-bg").css("overflow", "hidden");
        document.body.appendChild(coverScreen);
    }
    
    var information = 
        "<div id='clash-data'>" +
            "<div class='close' onclick='deleteScreen(this.parentNode.parentNode);'><img src='https://cdn0.iconfinder.com/data/icons/very-basic-android-l-lollipop-icon-pack/24/close-64.png' /></div>" +
            "<div class='badge'><img src='" + data.badgeUrls.medium + "' /></div>" +
            "<div class='name'>" + data.name + "</div>" +
            "<div class='level'>(&nbsp;Level " + data.clanLevel + "&nbsp;)</div>" +
            "<div class='description'><span class='value'>" + data.description + "</span></div>" +
            "<div class='info'>" +
                "<div class='info-block'><span class='prop'>Type</span><span class='value'>" + data.type + "</span></div>" +
                "<div class='info-block'><span class='prop'>Location</span><span class='value'>" + data.location.name + "</span></div>" +
                "<div class='info-block'><span class='prop'>War Wins</span><span class='value'>" + data.warWins + "</span></div>" +
                "<div class='info-block'><span class='prop'>War Win Streak</span><span class='value'>" + data.warWinStreak + "</span></div>" +
                "<div class='info-block'><span class='prop'>Clan Points</span><span class='value'>" + data.clanPoints + "</span></div>" +
                "<div class='info-block'><span class='prop'>Members</span><span class='value'>" + data.members + "</span></div>" +
            "</div>" +
            "<div class='members'>";
    
    for(num = 0; num < data.memberList.length; ++num) {
        information += 
            "<div class='member-block' type='player' image='" + data.memberList[num].league.iconUrls.medium + "' onclick='searchPlayer(\"" + data.memberList[num].tag + "\");'>" +
                "<div class='no' style='width:30px;'>" + data.memberList[num].clanRank + "</div>" +
                "<div class='exp' style='width:50px;'>" + data.memberList[num].expLevel + "</div>" +
                "<div class='badge' style='width:20px; background:white;'><img src = '" + data.memberList[num].league.iconUrls.tiny + "' /></div>" +
                "<div class='information'>" + data.memberList[num].name + "</div>" +
                "<div class='trophies' style='float:right; border-left:1px solid white; width:70px;'>" + data.memberList[num].trophies + "&nbsp;<img src='http://clashroyale.wiki/wp-content/uploads/2016/03/trophy.png' height=14 /></div>" +
            "</div>";
    }
    
    information += "</div></div>";
    $(coverScreen).html(information);
}