/*  SEND THE PLAYER TAG AND GET THE RESULTS  */
function searchPlayer(playerID) {
 /*   var data = {
  "tag": "#RQVR20PG",
  "name": "بوعبدالله",
  "townHallLevel": 11,
  "expLevel": 146,
  "trophies": 5813,
  "bestTrophies": 6218,
  "warStars": 480,
  "attackWins": 100,
  "defenseWins": 6,
  "role": "coLeader",
  "donations": 962,
  "donationsReceived": 4962,
  "clan": {
    "tag": "#P8PPLJ2",
    "name": "Q8 Army",
    "clanLevel": 12,
    "badgeUrls": {
      "small": "https://api-assets.clashofclans.com/badges/70/ZpEG3Ao1kUD5nLBtOPFXDMLaWFrDpY7uY7MNqR8Olc4.png",
      "large": "https://api-assets.clashofclans.com/badges/512/ZpEG3Ao1kUD5nLBtOPFXDMLaWFrDpY7uY7MNqR8Olc4.png",
      "medium": "https://api-assets.clashofclans.com/badges/200/ZpEG3Ao1kUD5nLBtOPFXDMLaWFrDpY7uY7MNqR8Olc4.png"
    }
  },
  "league": {
    "id": 29000022,
    "name": "Legend League",
    "iconUrls": {
      "small": "https://api-assets.clashofclans.com/leagues/72/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png",
      "tiny": "https://api-assets.clashofclans.com/leagues/36/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png",
      "medium": "https://api-assets.clashofclans.com/leagues/288/R2zmhyqQ0_lKcDR5EyghXCxgyC9mm_mVMIjAbmGoZtw.png"
    }
  },
  "legendStatistics": {
    "legendTrophies": 5635,
    "previousSeason": {
      "id": "2017-02",
      "rank": 1,
      "trophies": 6209
    },
    "bestSeason": {
      "id": "2017-02",
      "rank": 1,
      "trophies": 6209
    },
    "currentSeason": {
      "rank": 139,
      "trophies": 5813
    }
  },
  "achievements": [
    {
      "name": "Bigger Coffers",
      "stars": 3,
      "value": 12,
      "target": 10,
      "info": "Upgrade a Gold Storage to level 10",
      "completionInfo": "Highest Gold Storage level: 12"
    },
    {
      "name": "Get those Goblins!",
      "stars": 3,
      "value": 150,
      "target": 150,
      "info": "Win 150 stars on the Campaign Map",
      "completionInfo": "Stars in Campaign Map: 150"
    },
    {
      "name": "Bigger & Better",
      "stars": 3,
      "value": 11,
      "target": 8,
      "info": "Upgrade Town Hall to level 8",
      "completionInfo": "Current Town Hall level: 11"
    },
    {
      "name": "Nice and Tidy",
      "stars": 3,
      "value": 2615,
      "target": 500,
      "info": "Remove 500 obstacles (trees, rocks, bushes)",
      "completionInfo": "Total obstacles removed: 2615"
    },
    {
      "name": "Release the Beasts",
      "stars": 3,
      "value": 1,
      "target": 1,
      "info": "Unlock Dragon in the Barracks"
    },
    
    {
      "name": "Gold Grab",
      "stars": 3,
      "value": 1578850164,
      "target": 100000000,
      "info": "Steal 100000000 gold",
      "completionInfo": "Total Gold looted: 1578850164"
    },
    {
      "name": "Elixir Escapade",
      "stars": 3,
      "value": 1526030250,
      "target": 100000000,
      "info": "Steal 100000000 elixir",
      "completionInfo": "Total Elixir looted: 1526030250"
    },
    {
      "name": "Sweet Victory!",
      "stars": 3,
      "value": 6218,
      "target": 1250,
      "info": "Achieve a total of 1250 trophies in Multiplayer battles",
      "completionInfo": "Trophy record: 6218"
    },
    {
      "name": "Empire Builder",
      "stars": 3,
      "value": 7,
      "target": 4,
      "info": "Upgrade Clan Castle to level 4",
      "completionInfo": "Current Clan Castle level: 7"
    },
    {
      "name": "Wall Buster",
      "stars": 3,
      "value": 59923,
      "target": 2000,
      "info": "Destroy 2000 Walls in Multiplayer battles",
      "completionInfo": "Total walls destroyed: 59923"
    },
    {
      "name": "Humiliator",
      "stars": 3,
      "value": 4075,
      "target": 2000,
      "info": "Destroy 2000 Town Halls in Multiplayer battles",
      "completionInfo": "Total Town Halls destroyed: 4075"
    },
    {
      "name": "Union Buster",
      "stars": 3,
      "value": 17969,
      "target": 2500,
      "info": "Destroy 2500 Builder's Huts in Multiplayer battles",
      "completionInfo": "Total Builder's Huts destroyed: 17969"
    },
    {
      "name": "Conqueror",
      "stars": 3,
      "value": 5435,
      "target": 5000,
      "info": "Win 5000 Multiplayer battles",
      "completionInfo": "Total multiplayer battles won: 5435"
    },
    {
      "name": "Unbreakable",
      "stars": 2,
      "value": 319,
      "target": 5000,
      "info": "Successfully defend against 5000 attacks",
      "completionInfo": "Total defenses won: 319"
    },
    {
      "name": "Friend in Need",
      "stars": 3,
      "value": 42299,
      "target": 25000,
      "info": "Donate 25000 Clan Castle capacity worth of reinforcements",
      "completionInfo": "Total capacity donated: 42299"
    },
    {
      "name": "Mortar Mauler",
      "stars": 3,
      "value": 15350,
      "target": 5000,
      "info": "Destroy 5000 Mortars in Multiplayer battles",
      "completionInfo": "Total Mortars destroyed: 15350"
    },
    {
      "name": "Heroic Heist",
      "stars": 3,
      "value": 9601074,
      "target": 1000000,
      "info": "Steal 1000000 Dark Elixir",
      "completionInfo": "Total Dark Elixir looted: 9601074"
    },
    {
      "name": "League All-Star",
      "stars": 3,
      "value": 22,
      "target": 1,
      "info": "Become a Champion!"
    },
    {
      "name": "X-Bow Exterminator",
      "stars": 3,
      "value": 9723,
      "target": 2500,
      "info": "Destroy 2500 X-Bows in Multiplayer battles",
      "completionInfo": "Total X-Bows destroyed: 9723"
    },
    {
      "name": "Firefighter",
      "stars": 2,
      "value": 4121,
      "target": 5000,
      "info": "Destroy 5000 Inferno Towers in Multiplayer battles",
      "completionInfo": "Total Inferno Towers destroyed: 4121"
    },
    {
      "name": "War Hero",
      "stars": 2,
      "value": 480,
      "target": 1000,
      "info": "Score 1000 stars for your clan in Clan War battles",
      "completionInfo": "Total stars scored for clan in Clan War battles: 480"
    },
    {
      "name": "Treasurer",
      "stars": 3,
      "value": 246827554,
      "target": 100000000,
      "info": "Collect 100000000 gold from the Treasury",
      "completionInfo": "Total gold collected in Clan War bonuses: 246827554"
    },
    {
      "name": "Anti-Artillery",
      "stars": 2,
      "value": 1486,
      "target": 2000,
      "info": "Destroy 2000 Eagle Artilleries in Multiplayer battles",
      "completionInfo": "Total Eagle Artilleries destroyed: 1486"
    },
    {
      "name": "Sharing is caring",
      "stars": 1,
      "value": 818,
      "target": 2000,
      "info": "Donate 2000 spell storage capacity worth of spells",
      "completionInfo": "Total spell capacity donated: 818"
    }
  ],
  "troops": [
    {
      "name": "Barbarian",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Archer",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Goblin",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Giant",
      "level": 8,
      "maxLevel": 8
    },
    {
      "name": "Wall Breaker",
      "level": 6,
      "maxLevel": 6
    },
    {
      "name": "Balloon",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Wizard",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Healer",
      "level": 4,
      "maxLevel": 4
    },
    {
      "name": "Dragon",
      "level": 6,
      "maxLevel": 6
    },
    {
      "name": "P.E.K.K.A",
      "level": 5,
      "maxLevel": 5
    },
    {
      "name": "Minion",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Hog Rider",
      "level": 6,
      "maxLevel": 7
    },
    {
      "name": "Valkyrie",
      "level": 5,
      "maxLevel": 5
    },
    {
      "name": "Golem",
      "level": 6,
      "maxLevel": 6
    },
    {
      "name": "Witch",
      "level": 3,
      "maxLevel": 3
    },
    {
      "name": "Lava Hound",
      "level": 4,
      "maxLevel": 4
    },
    {
      "name": "Bowler",
      "level": 3,
      "maxLevel": 3
    },
    {
      "name": "Baby Dragon",
      "level": 5,
      "maxLevel": 5
    },
    {
      "name": "Miner",
      "level": 4,
      "maxLevel": 4
    }
  ],
  "heroes": [
    {
      "name": "Barbarian King",
      "level": 45,
      "maxLevel": 45
    },
    {
      "name": "Archer Queen",
      "level": 45,
      "maxLevel": 45
    },
    {
      "name": "Grand Warden",
      "level": 20,
      "maxLevel": 20
    }
  ],
  "spells": [
    {
      "name": "Lightning Spell",
      "level": 7,
      "maxLevel": 7
    },
    {
      "name": "Healing Spell",
      "level": 6,
      "maxLevel": 6
    },
    {
      "name": "Rage Spell",
      "level": 5,
      "maxLevel": 5
    },
    {
      "name": "Jump Spell",
      "level": 3,
      "maxLevel": 3
    },
    {
      "name": "Freeze Spell",
      "level": 5,
      "maxLevel": 5
    },
    {
      "name": "Poison Spell",
      "level": 5,
      "maxLevel": 5
    },
    {
      "name": "Earthquake Spell",
      "level": 4,
      "maxLevel": 4
    },
    {
      "name": "Haste Spell",
      "level": 4,
      "maxLevel": 4
    },
    {
      "name": "Clone Spell",
      "level": 4,
      "maxLevel": 4
    },
    {
      "name": "Skeleton Spell",
      "level": 3,
      "maxLevel": 4
    }
  ]
}; */
  $("#content").html("<div class='loading'>Loading..</div>");
    $.ajax({
        url: "player.php",
        method: "GET",
        dataType: "json",
        data: {
            tag: encodeURI(playerID)
        }, 
        success: function(data) {
            if(data.error === 1) $("#content").html("<div class='loading'>Could not Load the Results</div>");
            else {
                $("#content").html("");
                player(data);
            }
        },
        error: function(xhr, status, text) {
            $("#content").html("<div class='loading'>Could not Load the Results</div>");
        }
    });
}

$(document).ready(function() {
    $("#player-input").on("keyup", function() {
        var input = $(this).val().trim();
        if(input[0] !== '#') input = "#" + input;
        searchPlayer(input);
    });
});