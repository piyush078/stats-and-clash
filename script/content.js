/*  SHOW THE DATA ON THE WEBPAGE  */
function displayContent(area, dataArray, num) {
    
    var onClickAction = null;
    if(dataArray.type === "player") onClickAction = "onclick='searchPlayer(\"" + dataArray.link + "\");'";
    else onClickAction = "onclick='searchClan(\"" + dataArray.link + "\");'";
        
    var block = "<div class='block' type='" + dataArray.type + "' image='" + dataArray.image + "' " + onClickAction + ">" +
                    "<div class='no'>" + num + "</div>" +
                    "<div class='exp'>" + dataArray.experience + "</div>" +
                    "<div class='badge'><img src = '" + dataArray.badge + "' /></div>" +
                    "<div class='information'><div class='name'>" + dataArray.biggerInfo + "</div><div class='add-info'>" + dataArray.smallerInfo + "</div></div>" +
                    "<div class='trophies'>" + dataArray.trophies + "&nbsp;<img src='http://clashroyale.wiki/wp-content/uploads/2016/03/trophy.png' height=14 /></div>" +
                "</div>";
    
    $(area).append(block);
}

/*  DISPLAY THE LIST OF THE PLAYERS  */
function displayPlayer(area, data) {
    
    area.innerHTML = "";
    data = data.items;
    for(num = 0; num < data.length; ++num) {
        console.log(data[num])
        displayContent(area, {
            experience: data[num].expLevel, 
            badge: (data[num].league === undefined) ? (data[num].trophies > 5500 ? "https://api-assets.clashofclans.com/leagues/36/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png" : "https://api-assets.clashofclans.com/leagues/36/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png") : data[num].league.iconUrls.small,
            biggerInfo: data[num].name,
            smallerInfo: (data[num].clan === undefined) ? "< No Clan >" : data[num].clan.name,
            trophies: data[num].trophies,
            link: data[num].tag,
            type: "player",
            image: (data[num].league === undefined) ? (data[num].trophies > 5500 ? "https://api-assets.clashofclans.com/leagues/72/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png" : "https://api-assets.clashofclans.com/leagues/72/e--YMyIexEQQhE4imLoJcwhYn6Uy8KqlgyY3_kFV6t4.png") : data[num].league.iconUrls.small,
        }, num+1);
    }
}

/*  DISPLAY THE CLAN DETAILS  */
function displayClan(area, data) {
   
    area.innerHTML = "";
    data = data.items;
    for(num = 0; num < data.length; ++num) {
        displayContent(area, {
            experience: data[num].clanLevel, 
            badge: data[num].badgeUrls.small,
            biggerInfo: data[num].name,
            smallerInfo: (data[num].location === undefined) ? "Not Set" : data[num].location.name,
            trophies: data[num].clanPoints,
            link: data[num].tag,
            type: "clan",
            image: data[num].badgeUrls.medium
        }, num+1);
    }
}