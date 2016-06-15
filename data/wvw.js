/*
 * This file is used by http://gw2timer.com/wvw
 * Contains Mists continent map lands (zone), realm (region), and WvW objectives.
 */

var GW2T_REALM_DATA = {
"pvp": {
	name_en: "Player vs. Player",
	name_de: "Spieler gegen Spieler",
	name_es: "Jugador contra Jugador",
	name_fr: "Joueur contre Joueur",
	name_zh: "PvP",
	color: "gray"
},
"wvw": {
	name_en: "World vs. World",
	name_de: "Welt gegen Welt",
	name_es: "Mundo contra Mundo",
	name_fr: "Monde contre Monde",
	name_zh: "世界之戰",
	color: "green"
},
"fotm": {
	name_en: "Fractals of the Mists",
	name_de: "Fraktale der Nebel",
	name_es: "Fractales de la Niebla",
	name_fr: "Fractales des Brumes",
	name_zh: "迷霧碎層",
	color: "blue"
}
};

/*
 * Lands are sorted by importance.
 */
var GW2T_LAND_ROTATION = { // These will be added to the Zones object depending on map rotation
	Alpine: {
		"alpinered": // north side
		{
			id: "94",
			name_en: "Red Borderlands",
			name_de: "Rot Grenzlande",
			name_es: "Tierras Fronterizas de rojo",
			name_fr: "Territoires frontaliers rouge",
			name_zh: "沙漠邊境之地紅色",
			region: "wvw",
			map_rect: [[-30720, -43008], [30720, 43008]],
			continent_rect: [[9214, 8958], [11774, 12542]]
		},
		"alpineblue": // west side
		{
			id: "96",
			name_en: "Blue Borderlands",
			name_de: "Blau Grenzlande",
			name_es: "Tierras Fronterizas de azul",
			name_fr: "Territoires frontaliers bleu",
			name_zh: "沙漠邊境之地藍色",
			region: "wvw",
			map_rect: [[-30720, -43008], [30720, 43008]],
			continent_rect: [[12798, 10878], [15358, 14462]]
		},
		"alpinegreen": // east side
		{
			id: "95",
			name_en: "Green Borderlands",
			name_de: "Grün Grenzlande",
			name_es: "Tierras Fronterizas de verde",
			name_fr: "Territoires frontaliers vert",
			name_zh: "沙漠邊境之地綠色",
			region: "wvw",
			map_rect: [[-30720, -43008], [30720, 43008]],
			continent_rect: [[5630, 11518], [8190, 15102]]
		}
	},
	Desert: {
		"desertred": // north side
		{
			id: "1099",
			name_en: "Red Borderlands",
			name_de: "Rot Grenzlande",
			name_es: "Tierras Fronterizas de rojo",
			name_fr: "Territoires frontaliers rouge",
			name_zh: "沙漠邊境之地紅色",
			region: "wvw",
			map_rect: [[-36864, -36864], [36864, 36864]],
			continent_rect: [[9214, 8958], [12286, 12030]]
		},
		"desertblue": // west side
		{
			id: "1143",
			name_en: "Blue Borderlands",
			name_de: "Blau Grenzlande",
			name_es: "Tierras Fronterizas de azul",
			name_fr: "Territoires frontaliers bleu",
			name_zh: "沙漠邊境之地藍色",
			region: "wvw",
			map_rect: [[-36864, -36864], [36864, 36864]],
			continent_rect: [[12798, 10878], [15870, 13950]]
		},
		"desertgreen": // east side
		{
			id: "1102",
			name_en: "Green Borderlands",
			name_de: "Grün Grenzlande",
			name_es: "Tierras Fronterizas de verde",
			name_fr: "Territoires frontaliers vert",
			name_zh: "沙漠邊境之地綠色",
			region: "wvw",
			map_rect: [[-36864, -36864], [36864, 36864]],
			continent_rect: [[5630, 11518], [8702, 14590]]
		}
	}
};
var GW2T_LAND_DATA = {
"eternal": // south side
{
	id: "38",
	name_en: "Eternal Battlegrounds",
	name_de: "Ewige Schlachtfelder",
	name_es: "Campos de batalla eternos",
	name_fr: "Champs de bataille éternels",
	name_zh: "永恆戰場",
	region: "wvw",
	map_rect: [[-36864, -36864], [36864, 36864]],
	continent_rect: [[8958, 12798], [12030, 15870]]
},
"edge":
{
	id: "968",
	name_en: "Edge of the Mists",
	name_de: "Rand der Nebel",
	name_es: "El Borde de la Niebla",
	name_fr: "La lisière des Brumes",
	name_zh: "迷霧邊界",
	region: "wvw",
	map_rect: [[-36864, -36864], [36864, 36864]],
	continent_rect: [[5994, 8446], [9066, 11518]]
},
"fractals":
{
	id: "872",
	name_en: "Fractals of the Mists",
	name_de: "Fraktale der Nebel",
	name_es: "Fractales de la Niebla",
	name_fr: "Fractales des Brumes",
	name_zh: "迷霧碎層",
	region: "fotm",
	map_rect: [[-36864, -36864], [36864, 36864]],
	continent_rect: [[10880, 3328], [13952, 6400]]
},
"heart":
{
	id: "350",
	name_en: "Heart of the Mists",
	name_de: "Herz der Nebel",
	name_es: "Corazón de la Niebla",
	name_fr: "Cœur des Brumes",
	name_zh: "迷霧之心",
	region: "pvp",
	map_rect: [[-21504, -21504], [21504, 21504]],
	continent_rect: [[4865, 6398], [6657, 8190]]
},
"kyhlo":
{
	id: "549",
	name_en: "Battle of Kyhlo",
	name_de: "Die Schlacht von Kyhlo",
	name_es: "La Batalla de Kyhlo",
	name_fr: "Bataille de Kyhlo",
	name_zh: "凱洛城之戰",
	region: "pvp",
	map_rect: [[-9216, -9216], [9216, 9216]],
	continent_rect: [[3326, 5374], [4094, 6142]]
},
"niflhel":
{
	id: "554",
	name_en: "Forest of Niflhel",
	name_de: "Der Wald von Niflhel",
	name_es: "Bosque de Niflhel",
	name_fr: "Forêt de Niflhel",
	name_zh: "尼菲爾森林",
	region: "pvp",
	map_rect: [[-12288, -6144], [12288, 9216]],
	continent_rect: [[7038, 4860], [8062, 5500]]
},
"foefire":
{
	id: "795",
	name_en: "Legacy of the Foefire",
	name_de: "Vermächtnis des Feindfeuers",
	name_es: "El Legado del Fuego Enemigo",
	name_fr: "Héritage du Fléau de feu",
	name_zh: "煉獄的遺產",
	region: "pvp",
	map_rect: [[-9216, -12288], [12288, 15360]],
	continent_rect: [[2558, 8190], [3454, 9342]]
},
"storm":
{
	id: "875",
	name_en: "Temple of the Silent Storm",
	name_de: "Tempel des stillen Sturms",
	name_es: "Templo de la Tormenta Silenciosa",
	name_fr: "Temple de la Tempête silencieuse",
	name_zh: "靜風神殿",
	region: "pvp",
	map_rect: [[-12288, -6144], [12288, 9216]],
	continent_rect: [[4096, 9344], [5120, 9984]]
},
"spirit":
{
	id: "894",
	name_en: "Spirit Watch",
	name_de: "Geisterwacht",
	name_es: "Vigilancia del Espíritu",
	name_fr: "Observatoire des Esprits",
	name_zh: "眾靈守望",
	region: "pvp",
	map_rect: [[-12288, -12288], [12288, 12288]],
	continent_rect: [[1920, 5248], [2944, 6272]]
},
"skyhammer":
{
	id: "900",
	name_en: "Skyhammer",
	name_de: "Hammer des Himmels",
	name_es: "Martillo Celestial",
	name_fr: "Marteau céleste",
	name_zh: "天空巨錘",
	region: "pvp",
	map_rect: [[-12288, -6144], [12288, 9216]],
	continent_rect: [[7168, 7422], [8192, 8062]]
},
"courtyard":
{
	id: "984",
	name_en: "Courtyard",
	name_de: "Hof",
	name_es: "Patio",
	name_fr: "Cour",
	name_zh: "庭院",
	region: "pvp",
	map_rect: [[-12288, -12288], [12288, 12288]],
	continent_rect: [[2048, 7040], [3072, 8064]]
},
"champion":
{
	id: "1011",
	name_en: "Battle of Champion's Dusk",
	name_de: "Die Schlacht von Champions Dämmerung",
	name_es: "Batalla del Crepúsculo del Campeón",
	name_fr: "Bataille du crépuscule du Champion",
	name_zh: "末日英雄之战",
	region: "pvp",
	map_rect: [[-12288, -6144], [12288, 9216]],
	continent_rect: [[8448, 7680], [9472, 8320]]
}
};

/*
 * Server translated names for user selection.
 */
var GW2T_SERVER_DATA = {
"1001": {
	id: 1001,
	name_en: "Anvil Rock",
	name_de: "Amboss-Stein",
	name_es: "Roca del Yunque",
	name_fr: "Rocher de l'enclume",
	name_zh: "鐵砧石",
	nick_en: "AR", nick_de: "AS", nick_es: "RdY", nick_fr: "RdlE", nick_zh: "鐵砧石"
},
"1002": {
	id: 1002,
	name_en: "Borlis Pass",
	name_de: "Borlis-Pass",
	name_es: "Paso de Borlis",
	name_fr: "Passage de Borlis",
	name_zh: "波裡斯小徑",
	nick_en: "BP", nick_de: "BP", nick_es: "PdB", nick_fr: "PdB", nick_zh: "波裡斯小徑"
},
"1003": {
	id: 1003,
	name_en: "Yak's Bend",
	name_de: "Yakbiegung",
	name_es: "Declive del Yak",
	name_fr: "Courbe du Yak",
	name_zh: "牦牛拐角",
	nick_en: "YB", nick_de: "YB", nick_es: "DdY", nick_fr: "CdY", nick_zh: "牦牛拐角"
},
"1004": {
	id: 1004,
	name_en: "Henge of Denravi",
	name_de: "Steinkreis von Denravi",
	name_es: "Círculo de Denravi",
	name_fr: "Cromlech de Denravi",
	name_zh: "德拉維石陣",
	nick_en: "HoD", nick_de: "SvD", nick_es: "CdD", nick_fr: "CdD", nick_zh: "德拉維石陣"
},
"1005": {
	id: 1005,
	name_en: "Maguuma",
	name_de: "Maguuma",
	name_es: "Maguuma",
	name_fr: "Maguuma",
	name_zh: "邁古瑪",
	nick_en: "Mag", nick_de: "Mag", nick_es: "Mag", nick_fr: "Mag", nick_zh: "邁古瑪"
},
"1006": {
	id: 1006,
	name_en: "Sorrow's Furnace",
	name_de: "Hochofen der Betrübnis",
	name_es: "Fragua del Pesar",
	name_fr: "Fourneau des lamentations",
	name_zh: "悲傷熔爐",
	nick_en: "SF", nick_de: "HdB", nick_es: "FdP", nick_fr: "FdL", nick_zh: "悲傷熔爐"
},
"1007": {
	id: 1007,
	name_en: "Gate of Madness",
	name_de: "Tor des Wahnsinns",
	name_es: "Puerta de la Locura",
	name_fr: "Porte de la folie",
	name_zh: "瘋狂之門",
	nick_en: "GoM", nick_de: "TdW", nick_es: "PdlL", nick_fr: "PdlF", nick_zh: "瘋狂之門"
},
"1008": {
	id: 1008,
	name_en: "Jade Quarry",
	name_de: "Jade-Steinbruch",
	name_es: "Cantera de Jade",
	name_fr: "Carrière de jade",
	name_zh: "翠玉礦洞",
	nick_en: "JQ", nick_de: "JS", nick_es: "CdJ", nick_fr: "CdJ", nick_zh: "翠玉礦洞"
},
"1009": {
	id: 1009,
	name_en: "Fort Aspenwood",
	name_de: "Fort Espenwald",
	name_es: "Fuerte Aspenwood",
	name_fr: "Fort Trembleforêt",
	name_zh: "白楊堡壘",
	nick_en: "FA", nick_de: "FE", nick_es: "FA", nick_fr: "FT", nick_zh: "白楊堡壘"
},
"1010": {
	id: 1010,
	name_en: "Ehmry Bay",
	name_de: "Ehmry-Bucht",
	name_es: "Bahía de Ehmry",
	name_fr: "Baie d'Ehmry",
	name_zh: "艾瑪海灣",
	nick_en: "EB", nick_de: "EB", nick_es: "BdE", nick_fr: "BdE", nick_zh: "艾瑪海灣"
},
"1011": {
	id: 1011,
	name_en: "Stormbluff Isle",
	name_de: "Sturmklippen-Insel",
	name_es: "Isla Cimatormenta",
	name_fr: "Ile de la Falaise tumultueuse",
	name_zh: "暴風崖島",
	nick_en: "SBI", nick_de: "SKI", nick_es: "IC", nick_fr: "IFT", nick_zh: "暴風崖島"
},
"1012": {
	id: 1012,
	name_en: "Darkhaven",
	name_de: "Finsterfreistatt",
	name_es: "Refugio Oscuro",
	name_fr: "Refuge noir",
	name_zh: "暗黑庇護所",
	nick_en: "DH", nick_de: "FF", nick_es: "RO", nick_fr: "RN", nick_zh: "暗黑庇護所"
},
"1013": {
	id: 1013,
	name_en: "Sanctum of Rall",
	name_de: "Heilige Halle von Rall",
	name_es: "Sagrario de Rall",
	name_fr: "Sanctuaire de Rall",
	name_zh: "羅爾聖所",
	nick_en: "SoR", nick_de: "HHvR", nick_es: "SdR", nick_fr: "SdR", nick_zh: "羅爾聖所"
},
"1014": {
	id: 1014,
	name_en: "Crystal Desert",
	name_de: "Kristallwüste",
	name_es: "Desierto de Cristal",
	name_fr: "Désert de cristal",
	name_zh: "水晶沙漠",
	nick_en: "CD", nick_de: "KW", nick_es: "DdC", nick_fr: "DdC", nick_zh: "水晶沙漠"
},
"1015": {
	id: 1015,
	name_en: "Isle of Janthir",
	name_de: "Janthir-Insel",
	name_es: "Isla de Janthir",
	name_fr: "Ile de Janthir",
	name_zh: "珍瑟之島",
	nick_en: "IoJ", nick_de: "JI", nick_es: "IdJ", nick_fr: "IdJ", nick_zh: "珍瑟之島"
},
"1016": {
	id: 1016,
	name_en: "Sea of Sorrows",
	name_de: "Meer des Leids",
	name_es: "Mar de los Pesares",
	name_fr: "Mer des lamentations",
	name_zh: "悲傷之海",
	nick_en: "SoS", nick_de: "MdL", nick_es: "MdlP", nick_fr: "MdL", nick_zh: "悲傷之海"
},
"1017": {
	id: 1017,
	name_en: "Tarnished Coast",
	name_de: "Befleckte Küste",
	name_es: "Costa de Bronce",
	name_fr: "Côte ternie",
	name_zh: "晦暗海岸",
	nick_en: "TC", nick_de: "BK", nick_es: "CdB", nick_fr: "CT", nick_zh: "晦暗海岸"
},
"1018": {
	id: 1018,
	name_en: "Northern Shiverpeaks",
	name_de: "Nördliche Zittergipfel",
	name_es: "Picosescalofriantes del Norte",
	name_fr: "Cimefroides nordiques",
	name_zh: "北席瓦雪山",
	nick_en: "NSP", nick_de: "NZG", nick_es: "PFdN", nick_fr: "CFN", nick_zh: "北席瓦雪山"
},
"1019": {
	id: 1019,
	name_en: "Blackgate",
	name_de: "Schwarztor",
	name_es: "Puertanegra",
	name_fr: "Portenoire",
	name_zh: "黑暗之門",
	nick_en: "BG", nick_de: "ST", nick_es: "PN", nick_fr: "PN", nick_zh: "黑暗之門"
},
"1020": {
	id: 1020,
	name_en: "Ferguson's Crossing",
	name_de: "Fergusons Kreuzung",
	name_es: "Encrucijada de Ferguson",
	name_fr: "Croisée de Ferguson",
	name_zh: "弗格森渡口",
	nick_en: "FC", nick_de: "FK", nick_es: "EdF", nick_fr: "CdF", nick_zh: "弗格森渡口"
},
"1021": {
	id: 1021,
	name_en: "Dragonbrand",
	name_de: "Drachenbrand",
	name_es: "Marca del Dragón",
	name_fr: "Stigmate du dragon",
	name_zh: "烙印之地",
	nick_en: "DB", nick_de: "DB", nick_es: "MdD", nick_fr: "SdD", nick_zh: "烙印之地"
},
"1022": {
	id: 1022,
	name_en: "Kaineng",
	name_de: "Kaineng",
	name_es: "Kaineng",
	name_fr: "Kaineng",
	name_zh: "凱寧",
	nick_en: "KN", nick_de: "KN", nick_es: "KN", nick_fr: "KN", nick_zh: "凱寧"
},
"1023": {
	id: 1023,
	name_en: "Devona's Rest",
	name_de: "Devonas Ruh",
	name_es: "Descanso de Devona",
	name_fr: "Repos de Devona",
	name_zh: "德佛娜之眠",
	nick_en: "DR", nick_de: "DR", nick_es: "DdD", nick_fr: "RdD", nick_zh: "德佛娜之眠"
},
"1024": {
	id: 1024,
	name_en: "Eredon Terrace",
	name_de: "Eredon-Terrasse",
	name_es: "Terraza de Eredon",
	name_fr: "Plateau d'Eredon",
	name_zh: "伊雷登平台",
	nick_en: "ET", nick_de: "ET", nick_es: "TdE", nick_fr: "PdE", nick_zh: "伊雷登平台"
},
"2001": {
	id: 2001,
	name_en: "Fissure of Woe",
	name_de: "Riss des Kummers",
	name_es: "Fisura de la Aflicción",
	name_fr: "Fissure du malheur",
	name_zh: "悲嘆縫隙",
	nick_en: "FoW", nick_de: "RdK", nick_es: "FdlA", nick_fr: "FdM", nick_zh: "悲嘆縫隙"
},
"2002": {
	id: 2002,
	name_en: "Desolation",
	name_de: "Ödnis",
	name_es: "Desolación",
	name_fr: "Désolation",
	name_zh: "荒蕪廢墟",
	nick_en: "DS", nick_de: "ÖN", nick_es: "DS", nick_fr: "DS", nick_zh: "荒蕪廢墟"
},
"2003": {
	id: 2003,
	name_en: "Gandara",
	name_de: "Gandara",
	name_es: "Gandara",
	name_fr: "Gandara",
	name_zh: "甘達拉",
	nick_en: "GD", nick_de: "GD", nick_es: "GD", nick_fr: "GD", nick_zh: "甘達拉"
},
"2004": {
	id: 2004,
	name_en: "Blacktide",
	name_de: "Schwarzwasser",
	name_es: "Marea Negra",
	name_fr: "Noirflot",
	name_zh: "黑潮",
	nick_en: "BT", nick_de: "SW", nick_es: "MN", nick_fr: "NF", nick_zh: "黑潮"
},
"2005": {
	id: 2005,
	name_en: "Ring of Fire",
	name_de: "Feuerring",
	name_es: "Anillo de fuego",
	name_fr: "Cercle de feu",
	name_zh: "火焰之環",
	nick_en: "RoF", nick_de: "FR", nick_es: "AdF", nick_fr: "CdF", nick_zh: "火焰之環"
},
"2006": {
	id: 2006,
	name_en: "Underworld",
	name_de: "Unterwelt",
	name_es: "Inframundo",
	name_fr: "Outre-monde",
	name_zh: "地下世界",
	nick_en: "UW", nick_de: "UW", nick_es: "IM", nick_fr: "OM", nick_zh: "地下世界"
},
"2007": {
	id: 2007,
	name_en: "Far Shiverpeaks",
	name_de: "Ferne Zittergipfel",
	name_es: "Lejanas Picosescalofriantes",
	name_fr: "Lointaines Cimefroides",
	name_zh: "席瓦雪山遠境",
	nick_en: "FSP", nick_de: "FZG", nick_es: "LPF", nick_fr: "LCF", nick_zh: "席瓦雪山遠境"
},
"2008": {
	id: 2008,
	name_en: "Whiteside Ridge",
	name_de: "Weißflankgrat",
	name_es: "Cadena Laderablanca",
	name_fr: "Crête de Verseblanc",
	name_zh: "白際山脊",
	nick_en: "WSR", nick_de: "WFG", nick_es: "CLB", nick_fr: "CVB", nick_zh: "白際山脊"
},
"2009": {
	id: 2009,
	name_en: "Ruins of Surmia",
	name_de: "Ruinen von Surmia",
	name_es: "Ruinas de Surmia",
	name_fr: "Ruines de Surmia",
	name_zh: "瑟米亞廢墟",
	nick_en: "RoS", nick_de: "RvS", nick_es: "RdS", nick_fr: "RdS", nick_zh: "瑟米亞廢墟"
},
"2010": {
	id: 2010,
	name_en: "Seafarer's Rest",
	name_de: "Seemannsruh",
	name_es: "Refugio del Viajante",
	name_fr: "Repos du Marin",
	name_zh: "航海者之寧",
	nick_en: "SFR", nick_de: "SMS", nick_es: "RdV", nick_fr: "RdM", nick_zh: "航海者之寧"
},
"2011": {
	id: 2011,
	name_en: "Vabbi",
	name_de: "Vaabi",
	name_es: "Vabbi",
	name_fr: "Vabbi",
	name_zh: "瓦比",
	nick_en: "VB", nick_de: "VB", nick_es: "VB", nick_fr: "VB", nick_zh: "瓦比"
},
"2012": {
	id: 2012,
	name_en: "Piken Square",
	name_de: "Piken-Platz",
	name_es: "Plaza de Piken",
	name_fr: "Place Piken",
	name_zh: "派肯廣場",
	nick_en: "PS", nick_de: "PP", nick_es: "PdP", nick_fr: "PP", nick_zh: "派肯廣場"
},
"2013": {
	id: 2013,
	name_en: "Aurora Glade",
	name_de: "Auroralichtung",
	name_es: "Claro de la Aurora",
	name_fr: "Clairière de l'aurore",
	name_zh: "曙光林地",
	nick_en: "AG", nick_de: "AL", nick_es: "CdlA", nick_fr: "CdlA", nick_zh: "曙光林地"
},
"2014": {
	id: 2014,
	name_en: "Gunnar's Hold",
	name_de: "Gunnars Feste",
	name_es: "Fuerte de Gunnar",
	name_fr: "Campement de Gunnar",
	name_zh: "納爾要塞",
	nick_en: "GH", nick_de: "GF", nick_es: "FdG", nick_fr: "CdG", nick_zh: "納爾要塞"
},
"2101": {
	id: 2101,
	name_en: "Jade Sea",
	name_de: "Jademeer",
	name_es: "Mar de Jade",
	name_fr: "Mer de Jade",
	name_zh: "翠玉之海",
	nick_en: "JS", nick_de: "JM", nick_es: "MdJ", nick_fr: "MdJ", nick_zh: "翠玉之海"
},
"2102": {
	id: 2102,
	name_en: "Fort Ranik",
	name_de: "Fort Ranik",
	name_es: "Fuerte Ranik",
	name_fr: "Fort Ranik",
	name_zh: "拉尼克堡",
	nick_en: "FR", nick_de: "FR", nick_es: "FR", nick_fr: "FR", nick_zh: "拉尼克堡"
},
"2103": {
	id: 2103,
	name_en: "Augury Rock",
	name_de: "Fels der Weissagung",
	name_es: "Roca del Augurio",
	name_fr: "Roche de l'Augure",
	name_zh: "預言之石",
	nick_en: "AR", nick_de: "FdW", nick_es: "RdA", nick_fr: "RdlA", nick_zh: "預言之石"
},
"2104": {
	id: 2104,
	name_en: "Vizunah Square",
	name_de: "Vizunah-Platz",
	name_es: "Plaza de Vizunah",
	name_fr: "Place de Vizunah",
	name_zh: "薇茹廣場",
	nick_en: "VS", nick_de: "VP", nick_es: "PdV", nick_fr: "PdV", nick_zh: "薇茹廣場"
},
"2105": {
	id: 2105,
	name_en: "Arborstone",
	name_de: "Arborstein",
	name_es: "Piedra Arbórea",
	name_fr: "Pierre Arborea",
	name_zh: "亞博之石 ",
	nick_en: "AS", nick_de: "AS", nick_es: "PA", nick_fr: "PA", nick_zh: "亞博之石 "
},
"2201": {
	id: 2201,
	name_en: "Kodash",
	name_de: "Kodasch",
	name_es: "Kodash",
	name_fr: "Kodash",
	name_zh: "聖潔之石",
	nick_en: "KD", nick_de: "KD", nick_es: "KD", nick_fr: "KD", nick_zh: "聖潔之石"
},
"2202": {
	id: 2202,
	name_en: "Riverside",
	name_de: "Flussufer",
	name_es: "Ribera",
	name_fr: "Provinces fluviales",
	name_zh: "河畔",
	nick_en: "RS", nick_de: "FS", nick_es: "RB", nick_fr: "PF", nick_zh: "河畔"
},
"2203": {
	id: 2203,
	name_en: "Elona Reach",
	name_de: "Elonaspitze",
	name_es: "Cañón de Elona",
	name_fr: "Bief d'Elona",
	name_zh: "伊倫娜海岸",
	nick_en: "ER", nick_de: "ES", nick_es: "CdE", nick_fr: "BdE", nick_zh: "伊倫娜海岸"
},
"2204": {
	id: 2204,
	name_en: "Abaddon's Mouth",
	name_de: "Abaddons Maul",
	name_es: "Boca de Abaddon",
	name_fr: "Bouche d'Abaddon",
	name_zh: "阿伯頓之口",
	nick_en: "AM", nick_de: "AM", nick_es: "BdA", nick_fr: "BdA", nick_zh: "阿伯頓之口"
},
"2205": {
	id: 2205,
	name_en: "Drakkar Lake",
	name_de: "Drakkar-See",
	name_es: "Lago Drakkar",
	name_fr: "Lac Drakkar",
	name_zh: "德拉克湖",
	nick_en: "DL", nick_de: "DS", nick_es: "LD", nick_fr: "LD", nick_zh: "德拉克湖"
},
"2206": {
	id: 2206,
	name_en: "Miller's Sound",
	name_de: "Millersund",
	name_es: "Estrecho de Miller",
	name_fr: "Détroit de Miller",
	name_zh: "米勒之聲",
	nick_en: "MS", nick_de: "MS", nick_es: "EdM", nick_fr: "DdM", nick_zh: "米勒之聲"
},
"2207": {
	id: 2207,
	name_en: "Dzagonur",
	name_de: "Dzagonur",
	name_es: "Dzagonur",
	name_fr: "Dzagonur",
	name_zh: "扎格諾",
	nick_en: "DZN", nick_de: "DZN", nick_es: "DZN", nick_fr: "DZN", nick_zh: "扎格諾"
},
"2301": {
	id: 2301,
	name_en: "Baruch Bay",
	name_de: "Baruch-Bucht",
	name_es: "Bahía de Baruch",
	name_fr: "Baie de Baruch",
	name_zh: "巴魯克海灣",
	nick_en: "BB", nick_de: "BB", nick_es: "BdB", nick_fr: "BdB", nick_zh: "巴魯克海灣"
}
};

/*
 * Objectives in WvW capturable map locations. Objectives on the borderlands are
 * duplicate and directional, so their nicks are to be generated by a function.
 * Objective icons are colorized as so: Lightness, Saturation, Brightness
 * Red: 0, 70, 0
 * Blue: 200, 80, 0
 * Green: 140, 60, 0
 */
var GW2T_OBJECTIVE_DATA_EBG = {
"38-1": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Keep",
	name_en: "Overlook",
	name_de: "Aussichtspunkt",
	name_es: "Mirador",
	name_fr: "Belvédère",
	name_zh: "眺望台",
	nick_en: "Overlook", nick_de: "Aussichtspunkt", nick_es: "Mirador", nick_fr: "Belvédère", nick_zh: "眺望台",
	id: "38-1",
	map_id: "38",
	coord: [10764, 13656]
},
"38-2": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Keep",
	name_en: "Valley",
	name_de: "Tal",
	name_es: "Valle",
	name_fr: "Vallée",
	name_zh: "溪谷",
	nick_en: "Valley", nick_de: "Tal", nick_es: "Valle", nick_fr: "Vallée", nick_zh: "溪谷",
	id: "38-2",
	map_id: "38",
	coord: [11490, 15122]
},
"38-3": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Keep",
	name_en: "Lowlands",
	name_de: "Tiefland",
	name_es: "Tierras bajas",
	name_fr: "Basses terres",
	name_zh: "低地",
	nick_en: "Lowlands", nick_de: "Tiefland", nick_es: "Tierrasbajas", nick_fr: "Bassesterres", nick_zh: "低地",
	id: "38-3",
	map_id: "38",
	coord: [9604, 15130]
},
"38-4": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Camp",
	name_en: "Golanta Clearing",
	name_de: "Golanta-Lichtung",
	name_es: "Claro Golanta",
	name_fr: "Clairière de Golanta",
	name_zh: "格蘭塔空地",
	nick_en: "Golanta", nick_de: "Golanta", nick_es: "Golanta", nick_fr: "Golanta", nick_zh: "格蘭塔",
	id: "38-4",
	map_id: "38",
	coord: [10203, 15437]
},
"38-5": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Camp",
	name_en: "Pangloss Rise",
	name_de: "Pangloss-Anhöhe",
	name_es: "Colina Pangloss",
	name_fr: "Montée de Pangloss",
	name_zh: "潘樂高地",
	nick_en: "Pangloss", nick_de: "Pangloss", nick_es: "Pangloss", nick_fr: "Pangloss", nick_zh: "潘樂",
	id: "38-5",
	map_id: "38",
	coord: [11280, 13737]
},
"38-6": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Camp",
	name_en: "Speldan Clearcut",
	name_de: "Speldan-Kahlschlag",
	name_es: "Claro Espeldia",
	name_fr: "Forêt rasée de Speldan",
	name_zh: "斯佩爾丹營地",
	nick_en: "Speldan", nick_de: "Speldan", nick_es: "Espeldia", nick_fr: "Speldan", nick_zh: "斯佩爾丹",
	id: "38-6",
	map_id: "38",
	coord: [9841, 13546]
},
"38-7": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Camp",
	name_en: "Danelon Passage",
	name_de: "Danelon-Passage",
	name_es: "Pasaje Danelon",
	name_fr: "Passage Danelon",
	name_zh: "丹隆之廊",
	nick_en: "Danelon", nick_de: "Danelon", nick_es: "Danelon", nick_fr: "Danelon", nick_zh: "丹隆",
	id: "38-7",
	map_id: "38",
	coord: [11038, 15556]
},
"38-8": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Camp",
	name_en: "Umberglade Woods",
	name_de: "Umberlichtung-Forst",
	name_es: "Bosques Clarosombra",
	name_fr: "Bois d'Ombreclair",
	name_zh: "褐沼樹林",
	nick_en: "Umberglade", nick_de: "Umberlichtung", nick_es: "Clarosombra", nick_fr: "Ombreclair", nick_zh: "褐沼",
	id: "38-8",
	map_id: "38",
	coord: [11562, 14470]
},
"38-9": {
	nativeowner: "Neutral",
	map_type: "Center",
	type: "Castle",
	name_en: "Stonemist Castle",
	name_de: "Schloss Steinnebel",
	name_es: "Castillo Piedraniebla",
	name_fr: "Château Brumepierre",
	name_zh: "石雲堡",
	nick_en: "Stonemist", nick_de: "Steinnebel", nick_es: "Piedraniebla", nick_fr: "Brumepierre", nick_zh: "石雲",
	id: "38-9",
	map_id: "38",
	coord: [10606, 14576]
},
"38-10": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Camp",
	name_en: "Rogue's Quarry",
	name_de: "Schurkenbruch",
	name_es: "Cantera del Pícaro",
	name_fr: "Carrière du voleur",
	name_zh: "盜賊採石場",
	nick_en: "Rogue", nick_de: "Schurkenbruch", nick_es: "Pícaro", nick_fr: "Voleur", nick_zh: "盜賊",
	id: "38-10",
	map_id: "38",
	coord: [9571, 14423]
},
"38-11": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Tower",
	name_en: "Aldon's Ledge",
	name_de: "Aldons Vorsprung",
	name_es: "Cornisa de Aldon",
	name_fr: "Corniche d'Aldon",
	name_zh: "阿爾丹暗礁",
	nick_en: "Aldon", nick_de: "Aldons", nick_es: "Aldon", nick_fr: "Aldon", nick_zh: "阿爾丹",
	id: "38-11",
	map_id: "38",
	coord: [9414, 14793]
},
"38-12": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Tower",
	name_en: "Wildcreek Run",
	name_de: "Wildbach-Strecke",
	name_es: "Pista Arroyosalvaje",
	name_fr: "Piste du ruisseau sauvage",
	name_zh: "野溪急道",
	nick_en: "Wildcreek", nick_de: "Wildbach", nick_es: "Arroyosalvaje", nick_fr: "Ruisseausauvage", nick_zh: "野溪急",
	id: "38-12",
	map_id: "38",
	coord: [9906, 14625]
},
"38-13": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Tower",
	name_en: "Jerrifer's Slough",
	name_de: "Jerrifers Sumpfloch",
	name_es: "Cenagal de Jerrifer",
	name_fr: "Bourbier de Jerrifer",
	name_zh: "杰裡弗泥潭",
	nick_en: "Jerrifer", nick_de: "Jerrifers", nick_es: "Jerrifer", nick_fr: "Jerrifer", nick_zh: "杰裡弗",
	id: "38-13",
	map_id: "38",
	coord: [9806, 15406]
},
"38-14": {
	nativeowner: "Green",
	map_type: "Center",
	type: "Tower",
	name_en: "Klovan Gully",
	name_de: "Klovan-Senke",
	name_es: "Barranco Klovan",
	name_fr: "Petit ravin de Klovan",
	name_zh: "科洛文水渠",
	nick_en: "Klovan", nick_de: "Klovan", nick_es: "Klovan", nick_fr: "Klovan", nick_zh: "科洛文",
	id: "38-14",
	map_id: "38",
	coord: [10172, 15082]
},
"38-15": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Tower",
	name_en: "Langor Gulch",
	name_de: "Langor-Schlucht",
	name_es: "Barranco Langor",
	name_fr: "Ravin de Langor",
	name_zh: "朗格爾峽谷",
	nick_en: "Langor", nick_de: "Langor", nick_es: "Langor", nick_fr: "Langor", nick_zh: "朗格爾",
	id: "38-15",
	map_id: "38",
	coord: [11453, 15491]
},
"38-16": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Tower",
	name_en: "Quentin Lake",
	name_de: "Quentin-See",
	name_es: "Lago Quentin",
	name_fr: "Lac Quentin",
	name_zh: "昆汀湖",
	nick_en: "Quentin", nick_de: "Quentin", nick_es: "Quentin", nick_fr: "Quentin", nick_zh: "昆汀",
	id: "38-16",
	map_id: "38",
	coord: [10850, 15224]
},
"38-17": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Tower",
	name_en: "Mendon's Gap",
	name_de: "Mendons Spalt",
	name_es: "Zanja de Mendon",
	name_fr: "Faille de Mendon",
	name_zh: "曼敦峽谷",
	nick_en: "Mendon", nick_de: "Mendons", nick_es: "Mendon", nick_fr: "Mendon", nick_zh: "曼敦",
	id: "38-17",
	map_id: "38",
	coord: [10257, 13514]
},
"38-18": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Tower",
	name_en: "Anzalias Pass",
	name_de: "Anzalias-Pass",
	name_es: "Paso Anzalias",
	name_fr: "Col d'Anzalias",
	name_zh: "真語小徑",
	nick_en: "Anzalias", nick_de: "Anzalias", nick_es: "Anzalias", nick_fr: "Anzalias", nick_zh: "真語",
	id: "38-18",
	map_id: "38",
	coord: [10189, 14082]
},
"38-19": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Tower",
	name_en: "Ogrewatch Cut",
	name_de: "Ogerwacht-Kanal",
	name_es: "Tajo de la Guardia del Ogro",
	name_fr: "Percée de Gardogre",
	name_zh: "食人魔山路",
	nick_en: "Ogrewatch", nick_de: "Ogerwacht", nick_es: "Ogroguardia", nick_fr: "Gardogre", nick_zh: "食人魔",
	id: "38-19",
	map_id: "38",
	coord: [11011, 13850]
},
"38-20": {
	nativeowner: "Red",
	map_type: "Center",
	type: "Tower",
	name_en: "Veloka Slope",
	name_de: "Veloka-Hang",
	name_es: "Pendiente Veloka",
	name_fr: "Flanc de Veloka",
	name_zh: "維羅卡斜坡",
	nick_en: "Veloka", nick_de: "Veloka", nick_es: "Veloka", nick_fr: "Veloka", nick_zh: "維羅卡",
	id: "38-20",
	map_id: "38",
	coord: [11090, 13488]
},
"38-21": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Tower",
	name_en: "Durios Gulch",
	name_de: "Durios-Schlucht",
	name_es: "Barranco Durios",
	name_fr: "Ravin de Durios",
	name_zh: "德裡尤斯峽谷",
	nick_en: "Durios", nick_de: "Durios", nick_es: "Durios", nick_fr: "Durios", nick_zh: "德裡尤斯",
	id: "38-21",
	map_id: "38",
	coord: [11156, 14528]
},
"38-22": {
	nativeowner: "Blue",
	map_type: "Center",
	type: "Tower",
	name_en: "Bravost Escarpment",
	name_de: "Bravost-Abhang",
	name_es: "Escarpadura Bravost",
	name_fr: "Falaise de Bravost",
	name_zh: "斗膽懸崖",
	nick_en: "Bravost", nick_de: "Bravost", nick_es: "Bravost", nick_fr: "Bravost", nick_zh: "斗膽",
	id: "38-22",
	map_id: "38",
	coord: [11766, 14794]
}
};
var GW2T_OBJECTIVE_DATA_ALPINE = {
"94-32": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Keep",
	name_en: "Etheron Hills",
	name_de: "Etheron-Hügel",
	name_es: "Colinas Etheron",
	name_fr: "Collines d'Etheron",
	name_zh: "伊瑟隆丘陵",
	direction: "East",
	id: "94-32",
	map_id: 94,
	coord: [11671, 10961]
},
"94-33": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Keep",
	name_en: "Dreaming Bay",
	name_de: "Traumbucht",
	name_es: "Bahía Onírica",
	name_fr: "Baie des rêves",
	name_zh: "入夢港",
	direction: "West",
	id: "94-33",
	map_id: 94,
	coord: [9451, 11037]
},
"94-34": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Victor's Lodge",
	name_de: "Sieger-Halle",
	name_es: "Albergue del Vencedor",
	name_fr: "Pavillon du Vainqueur",
	name_zh: "勝利酒館",
	direction: "South",
	id: "94-34",
	map_id: 94,
	coord: [10497, 12100]
},
"94-35": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Greenbriar",
	name_de: "Grünstrauch",
	name_es: "Zarzaverde",
	name_fr: "Vert-bruyère",
	name_zh: "綠荊地",
	direction: "Southwest",
	id: "94-35",
	map_id: 94,
	coord: [10105, 11419]
},
"94-36": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Bluelake",
	name_de: "Blausee",
	name_es: "Lagoazul",
	name_fr: "Lac bleu",
	name_zh: "澄藍之湖",
	direction: "Southeast",
	id: "94-36",
	map_id: 94,
	coord: [10997, 11490]
},
"94-37": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Keep",
	name_en: "Garrison",
	name_de: "Festung von",
	name_es: "Fuerte",
	name_fr: "- Garnison",
	name_zh: "要塞",
	alias: "Garrison",
	id: "94-37",
	map_id: 94,
	coord: [10470, 10516]
},
"94-38": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Longview",
	name_de: "Weitsicht",
	name_es: "Vistaluenga",
	name_fr: "Longuevue",
	name_zh: "遠眺之地",
	direction: "Northwest",
	id: "94-38",
	map_id: 94,
	coord: [9861, 10158]
},
"94-39": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "The Godsword",
	name_de: "Das Gottesschwert",
	name_es: "La Hoja Divina",
	name_fr: "L'Epée divine",
	name_zh: "神語之地",
	direction: "North",
	id: "94-39",
	map_id: 94,
	coord: [10499, 9308]
},
"94-40": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Cliffside",
	name_de: "Felswand",
	name_es: "Despeñadero",
	name_fr: "Flanc de falaise",
	name_zh: "崖壁",
	direction: "Northeast",
	id: "94-40",
	map_id: 94,
	coord: [11099, 10110]
},
"94-50": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Bluewater Lowlands",
	name_de: "Blauwasser-Tiefland",
	name_es: "Tierras Bajas de Aguazul",
	name_fr: "Basses terres d'Eau-Azur",
	name_zh: "藍水低地",
	direction: "Southeast",
	id: "94-50",
	map_id: 94,
	coord: [11437, 11581]
},
"94-51": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Astralholme",
	name_de: "Astralholm",
	name_es: "Isleta Astral",
	name_fr: "Heaume astral",
	name_zh: "群星島",
	direction: "Northeast",
	id: "94-51",
	map_id: 94,
	coord: [11448, 10216]
},
"94-52": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Arah's Hope",
	name_de: "Arahs Hoffnung",
	name_es: "Esperanza de Arah",
	name_fr: "Espoir d'Arah",
	name_zh: "亞拉之冀",
	direction: "Northwest",
	id: "94-52",
	map_id: 94,
	coord: [9637, 10279]
},
"94-53": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Greenvale Refuge",
	name_de: "Grüntal-Zuflucht",
	name_es: "Refugio Valleverde",
	name_fr: "Refuge de Valvert",
	name_zh: "綠谷避難所",
	direction: "Southwest",
	id: "94-53",
	map_id: 94,
	coord: [9674, 11534]
},
"94-62": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Ruins",
	name_en: "Demontrance Lake",
	name_de: "Dämonentrance-See",
	name_es: "Lago Trancedemoníaco",
	name_fr: "Lac Maletranse",
	name_zh: "魔幻湖",
	direction: "South",
	id: "94-62",
	map_id: 94,
	coord: [10481, 11420]
},
"94-63": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Ruins",
	name_en: "Demontrance Lake",
	name_de: "Dämonentrance-See",
	name_es: "Lago Trancedemoníaco",
	name_fr: "Lac Maletranse",
	name_zh: "魔幻湖",
	direction: "Southwest",
	id: "94-63",
	map_id: 94,
	coord: [10177, 11155]
},
"94-64": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Ruins",
	name_en: "Demontrance Lake",
	name_de: "Dämonentrance-See",
	name_es: "Lago Trancedemoníaco",
	name_fr: "Lac Maletranse",
	name_zh: "魔幻湖",
	direction: "Northwest",
	id: "94-64",
	map_id: 94,
	coord: [10275, 10783]
},
"94-65": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Ruins",
	name_en: "Demontrance Lake",
	name_de: "Dämonentrance-See",
	name_es: "Lago Trancedemoníaco",
	name_fr: "Lac Maletranse",
	name_zh: "魔幻湖",
	direction: "Northeast",
	id: "94-65",
	map_id: 94,
	coord: [10743, 10837]
},
"94-66": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Ruins",
	name_en: "Demontrance Lake",
	name_de: "Dämonentrance-See",
	name_es: "Lago Trancedemoníaco",
	name_fr: "Lac Maletranse",
	name_zh: "魔幻湖",
	direction: "Southeast",
	id: "94-66",
	map_id: 94,
	coord: [10778, 11192]
},
"95-32": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Keep",
	name_en: "Shadaran Hills",
	name_de: "Shadaran-Hügel",
	name_es: "Colinas Shadaran",
	name_fr: "Collines Shadaran",
	name_zh: "夏達然丘陵",
	direction: "East",
	id: "95-32",
	map_id: 95,
	coord: [8087, 13521]
},
"95-33": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Keep",
	name_en: "Dreadfall Bay",
	name_de: "Schreckensfall-Bucht",
	name_es: "Bahía Salto Aciago",
	name_fr: "Baie du Noir déclin",
	name_zh: "恐懼海灣",
	direction: "West",
	id: "95-33",
	map_id: 95,
	coord: [5867, 13597]
},
"95-34": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Hero's Lodge",
	name_de: "Heldenhalle",
	name_es: "Albergue del Héroe",
	name_fr: "Pavillon du Héros",
	name_zh: "英雄酒館",
	direction: "South",
	id: "95-34",
	map_id: 95,
	coord: [6913, 14660]
},
"95-35": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Bluebriar",
	name_de: "Blaustrauch",
	name_es: "Zarzazul",
	name_fr: "Bruyazur",
	name_zh: "藍荊地",
	direction: "Southwest",
	id: "95-35",
	map_id: 95,
	coord: [6521, 13979]
},
"95-36": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Redlake",
	name_de: "Rotsee",
	name_es: "Lagorrojo",
	name_fr: "Lac rouge",
	name_zh: "血紅之湖",
	direction: "Southeast",
	id: "95-36",
	map_id: 95,
	coord: [7413, 14050]
},
"95-37": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Keep",
	name_en: "Garrison",
	name_de: "Festung von",
	name_es: "Fuerte",
	name_fr: "- Garnison",
	name_zh: "要塞",
	alias: "Garrison",
	id: "95-37",
	map_id: 95,
	coord: [6886, 13076]
},
"95-38": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Sunnyhill",
	name_de: "Sonnenhügel",
	name_es: "Colina Soleada",
	name_fr: "Colline ensoleillée",
	name_zh: "旭光之丘",
	direction: "Northwest",
	id: "95-38",
	map_id: 95,
	coord: [6277, 12718]
},
"95-39": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "The Titanpaw",
	name_de: "Die Titanenpranke",
	name_es: "La Garra del Titán",
	name_fr: "Bras du Titan",
	name_zh: "泰坦之爪",
	direction: "North",
	id: "95-39",
	map_id: 95,
	coord: [6915, 11868]
},
"95-40": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Cragtop",
	name_de: "Schroffgipfel",
	name_es: "Cumbrepeñasco",
	name_fr: "Sommet de Hautcrag",
	name_zh: "崖頂",
	direction: "Northeast",
	id: "95-40",
	map_id: 95,
	coord: [7515, 12670]
},
"95-50": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Redwater Lowlands",
	name_de: "Rotwasser-Tiefland",
	name_es: "Tierras Bajas de Aguarroja",
	name_fr: "Basses terres de Rubicon",
	name_zh: "赤水低地",
	direction: "Southeast",
	id: "95-50",
	map_id: 95,
	coord: [7853, 14141]
},
"95-51": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Foghaven",
	name_de: "Nebel-Freistatt",
	name_es: "Refugio Neblinoso",
	name_fr: "Havre gris",
	name_zh: "迷霧避難所",
	direction: "Northeast",
	id: "95-51",
	map_id: 95,
	coord: [7864, 12776]
},
"95-52": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Faithleap",
	name_de: "Glaubenssprung",
	name_es: "Salto de Fe",
	name_fr: "Saut de la Foi",
	name_zh: "信仰之躍",
	direction: "Northwest",
	id: "95-52",
	map_id: 95,
	coord: [6053, 12839]
},
"95-53": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Bluevale Refuge",
	name_de: "Blautal-Zuflucht",
	name_es: "Refugio Valleazul",
	name_fr: "Refuge de Bleuval",
	name_zh: "藍谷避難所",
	direction: "Southwest",
	id: "95-53",
	map_id: 95,
	coord: [6090, 14094]
},
"95-62": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Ruins",
	name_en: "Daemonspell Lake",
	name_de: "Dämonenzauber-See",
	name_es: "Lago Daemonia",
	name_fr: "Lac de Maldémon",
	name_zh: "魔符之湖",
	direction: "South",
	id: "95-62",
	map_id: 95,
	coord: [6897, 13980]
},
"95-63": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Ruins",
	name_en: "Daemonspell Lake",
	name_de: "Dämonenzauber-See",
	name_es: "Lago Daemonia",
	name_fr: "Lac de Maldémon",
	name_zh: "魔符之湖",
	direction: "Southwest",
	id: "95-63",
	map_id: 95,
	coord: [6593, 13715]
},
"95-64": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Ruins",
	name_en: "Daemonspell Lake",
	name_de: "Dämonenzauber-See",
	name_es: "Lago Daemonia",
	name_fr: "Lac de Maldémon",
	name_zh: "魔符之湖",
	direction: "Northwest",
	id: "95-64",
	map_id: 95,
	coord: [6691, 13343]
},
"95-65": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Ruins",
	name_en: "Daemonspell Lake",
	name_de: "Dämonenzauber-See",
	name_es: "Lago Daemonia",
	name_fr: "Lac de Maldémon",
	name_zh: "魔符之湖",
	direction: "Northeast",
	id: "95-65",
	map_id: 95,
	coord: [7159, 13397]
},
"95-66": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Ruins",
	name_en: "Daemonspell Lake",
	name_de: "Dämonenzauber-See",
	name_es: "Lago Daemonia",
	name_fr: "Lac de Maldémon",
	name_zh: "魔符之湖",
	direction: "Southeast",
	id: "95-66",
	map_id: 95,
	coord: [7194, 13752]
},
"96-32": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Keep",
	name_en: "Askalion Hills",
	name_de: "Askalion-Hügel",
	name_es: "Colinas Askalion",
	name_fr: "Collines d'Askalion",
	name_zh: "阿斯卡裡昂丘陵",
	direction: "East",
	id: "96-32",
	map_id: 96,
	coord: [15255, 12881]
},
"96-33": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Keep",
	name_en: "Ascension Bay",
	name_de: "Aufstiegsbucht",
	name_es: "Bahía de la Ascensión",
	name_fr: "Baie de l'Ascension",
	name_zh: "攀天海灣",
	direction: "West",
	id: "96-33",
	map_id: 96,
	coord: [13035, 12957]
},
"96-34": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Champion's Demesne",
	name_de: "Champions Landsitz",
	name_es: "Patrimonio del Campeón",
	name_fr: "Fief du Champion",
	name_zh: "冠軍領土",
	direction: "South",
	id: "96-34",
	map_id: 96,
	coord: [14081, 14020]
},
"96-35": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Redbriar",
	name_de: "Rotstrauch",
	name_es: "Zarzarroja",
	name_fr: "Bruyerouge",
	name_zh: "紅荊地",
	direction: "Southwest",
	id: "96-35",
	map_id: 96,
	coord: [13689, 13339]
},
"96-36": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Greenlake",
	name_de: "Grünsee",
	name_es: "Lagoverde",
	name_fr: "Lac vert",
	name_zh: "翠綠之湖",
	direction: "Southeast",
	id: "96-36",
	map_id: 96,
	coord: [14581, 13410]
},
"96-37": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Keep",
	name_en: "Garrison",
	name_de: "Festung von",
	name_es: "Fuerte",
	name_fr: "- Garnison",
	name_zh: "要塞",
	alias: "Garrison",
	id: "96-37",
	map_id: 96,
	coord: [14054, 12436]
},
"96-38": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Woodhaven",
	name_de: "Wald-Freistatt",
	name_es: "Refugio Forestal",
	name_fr: "Boisrefuge",
	name_zh: "荒木崗",
	direction: "Northwest",
	id: "96-38",
	map_id: 96,
	coord: [13445, 12078]
},
"96-39": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "The Spiritholme",
	name_de: "Der Geistholm",
	name_es: "La Isleta Espiritual",
	name_fr: "Le Heaume spirituel",
	name_zh: "靈魂沙洲",
	direction: "North",
	id: "96-39",
	map_id: 96,
	coord: [14083, 11228]
},
"96-40": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Dawn's Eyrie",
	name_de: "Horst der Morgendämmerung",
	name_es: "Aguilera del Alba",
	name_fr: "Repaire de l'aube",
	name_zh: "破曉高地",
	direction: "Northeast",
	id: "96-40",
	map_id: 96,
	coord: [14683, 12030]
},
"96-50": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Greenwater Lowlands",
	name_de: "Grünwasser-Tiefland",
	name_es: "Tierras bajas de Aguaverde",
	name_fr: "Basses terres d'Eau-Verdoyante",
	name_zh: "綠水低地",
	direction: "Southeast",
	id: "96-50",
	map_id: 96,
	coord: [15021, 13501]
},
"96-51": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Stargrove",
	name_de: "Sternhain",
	name_es: "Arboleda de las Estrellas",
	name_fr: "Bosquet étoilé",
	name_zh: "辰星之林",
	direction: "Northeast",
	id: "96-51",
	map_id: 96,
	coord: [15032, 12136]
},
"96-52": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Godslore",
	name_de: "Gottessage",
	name_es: "Sabiduría de los Dioses",
	name_fr: "Savoir divin",
	name_zh: "神學之地",
	direction: "Northwest",
	id: "96-52",
	map_id: 96,
	coord: [13221, 12199]
},
"96-53": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Redvale Refuge",
	name_de: "Rottal-Zuflucht",
	name_es: "Refugio Vallerrojo",
	name_fr: "Refuge de Valrouge",
	name_zh: "紅谷避難所",
	direction: "Southwest",
	id: "96-53",
	map_id: 96,
	coord: [13258, 13454]
},
"96-62": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Ruins",
	name_en: "Devilheart Lake",
	name_de: "Teufelsherz-See",
	name_es: "Lago Corazonvil",
	name_fr: "Lac Diablecœur",
	name_zh: "魔心之湖",
	direction: "South",
	id: "96-62",
	map_id: 96,
	coord: [14065, 13340]
},
"96-63": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Ruins",
	name_en: "Devilheart Lake",
	name_de: "Teufelsherz-See",
	name_es: "Lago Corazonvil",
	name_fr: "Lac Diablecœur",
	name_zh: "魔心之湖",
	direction: "Southwest",
	id: "96-63",
	map_id: 96,
	coord: [13761, 13075]
},
"96-64": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Ruins",
	name_en: "Devilheart Lake",
	name_de: "Teufelsherz-See",
	name_es: "Lago Corazonvil",
	name_fr: "Lac Diablecœur",
	name_zh: "魔心之湖",
	direction: "Northwest",
	id: "96-64",
	map_id: 96,
	coord: [13859, 12703]
},
"96-65": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Ruins",
	name_en: "Devilheart Lake",
	name_de: "Teufelsherz-See",
	name_es: "Lago Corazonvil",
	name_fr: "Lac Diablecœur",
	name_zh: "魔心之湖",
	direction: "Northeast",
	id: "96-65",
	map_id: 96,
	coord: [14327, 12757]
},
"96-66": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Ruins",
	name_en: "Devilheart Lake",
	name_de: "Teufelsherz-See",
	name_es: "Lago Corazonvil",
	name_fr: "Lac Diablecœur",
	name_zh: "魔心之湖",
	direction: "Southeast",
	id: "96-66",
	map_id: 96,
	coord: [14362, 13112]
}
};
var GW2T_OBJECTIVE_DATA_DESERT = {
"1099-99": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Hamm's Lab",
	name_de: "Hamms Labor",
	name_es: "Laboratorio de Hamm",
	name_fr: "Laboratoire de Hamm",
	name_zh: "漢姆的實驗室",
	direction: "North",
	id: "1099-99",
	map_id: "1099",
	coord: [10743, 9482]
},
"1099-100": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Bauer Farmstead",
	name_de: "Bauer-Gehöft",
	name_es: "Hacienda de Bauer",
	name_fr: "Ferme Bauer",
	name_zh: "鮑爾的農場",
	direction: "Southeast",
	id: "1099-100",
	map_id: "1099",
	coord: [11889, 11291]
},
"1099-101": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "McLain's Encampment",
	name_de: "McLains Lager",
	name_es: "Campamento de McLain",
	name_fr: "Campement de McLain",
	name_zh: "麥克萊恩的營地",
	direction: "Southwest",
	id: "1099-101",
	map_id: "1099",
	coord: [9584, 11295]
},
"1099-102": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "O'del Academy",
	name_de: "O'del-Akademie",
	name_es: "Academia O'del",
	name_fr: "Académie de O'del",
	name_zh: "歐黛學院",
	direction: "Northwest",
	id: "1099-102",
	map_id: "1099",
	coord: [9832, 9508]
},
"1099-104": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Eternal Necropolis",
	name_de: "Ewige Nekropole",
	name_es: "Necrópolis Eterna",
	name_fr: "Nécropole éternelle",
	name_zh: "永恆魂都",
	direction: "Northeast",
	id: "1099-104",
	map_id: "1099",
	coord: [11739, 9654]
},
"1099-105": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Crankshaft Depot",
	name_de: "Kurbelwellen-Depot",
	name_es: "Depósito de Palancamanijas",
	name_fr: "Dépôt Vilebrequin",
	name_zh: "機軸補給站",
	direction: "Southeast",
	id: "1099-105",
	map_id: "1099",
	coord: [11257, 11551]
},
"1099-106": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Keep",
	name_en: "Blistering Undercroft",
	name_de: "Brennende Gruft",
	name_es: "Sótano Achicharrante",
	name_fr: "Crypte embrasée",
	name_zh: "沸騰墓穴",
	direction: "West",
	id: "1099-106",
	map_id: "1099",
	coord: [9328, 10634]
},
"1099-109": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Roy's Refuge",
	name_de: "Roys Zuflucht",
	name_es: "Refugio de Roy",
	name_fr: "Refuge de Roy",
	name_zh: "羅伊的避難所",
	direction: "Northeast",
	id: "1099-109",
	map_id: "1099",
	coord: [12100, 10019]
},
"1099-110": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Tower",
	name_en: "Parched Outpost",
	name_de: "Verdörrter Außenposten",
	name_es: "Puesto Avanzado Abrasado",
	name_fr: "Avant-poste dévasté",
	name_zh: "焦枯前哨",
	direction: "Southwest",
	id: "1099-110",
	map_id: "1099",
	coord: [10244, 11331]
},
"1099-113": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Keep",
	name_en: "Stoic Rampart",
	name_de: "Stoischer Festungswall",
	name_es: "Muralla Estoica",
	name_fr: "Rempart stoïque",
	name_zh: "堅忍壁壘",
	alias: "Garrison",
	id: "1099-113",
	map_id: "1099",
	coord: [10777, 10120]
},
"1099-114": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Keep",
	name_en: "Osprey's Palace",
	name_de: "Fischadler-Palast",
	name_es: "Palacio del Águila Pescadora",
	name_fr: "Palais du balbuzard",
	name_zh: "魚鷹宮殿",
	direction: "East",
	id: "1099-114",
	map_id: "1099",
	coord: [12203, 10706]
},
"1099-115": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Boettiger's Hideaway",
	name_de: "Boettigers Versteck",
	name_es: "Escondrijo de Boettiger",
	name_fr: "Antre de Boettiger",
	name_zh: "波提加的藏匿點",
	direction: "Northwest",
	id: "1099-115",
	map_id: "1099",
	coord: [9313, 9994]
},
"1099-116": {
	nativeowner: "Red",
	map_type: "RedHome",
	type: "Camp",
	name_en: "Dustwhisper Well",
	name_de: "Brunnen des Staubflüsterns",
	name_es: "Pozo del Murmullo de Polvo",
	name_fr: "Puits du Souffle-poussière",
	name_zh: "塵語之井",
	direction: "South",
	id: "1099-116",
	map_id: "1099",
	coord: [10747, 11854]
},
"1102-99": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Lesh's Lab",
	name_de: "Leshs Labor",
	name_es: "Laboratorio de Lesh",
	name_fr: "Laboratoire de Lesh",
	name_zh: "萊希的實驗室",
	direction: "North",
	id: "1102-99",
	map_id: "1102",
	coord: [7159, 12042]
},
"1102-100": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Barrett Farmstead",
	name_de: "Barrett-Gehöft",
	name_es: "Hacienda de Barrett",
	name_fr: "Ferme Barrett",
	name_zh: "巴裡特的農場",
	direction: "Southeast",
	id: "1102-100",
	map_id: "1102",
	coord: [8305, 13851]
},
"1102-101": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Patrick's Encampment",
	name_de: "Patricks Lager",
	name_es: "Campamento de Patrick",
	name_fr: "Campement de Patrick",
	name_zh: "帕特裡克的營地",
	direction: "Southwest",
	id: "1102-101",
	map_id: "1102",
	coord: [6000, 13855]
},
"1102-102": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Y'lan Academy",
	name_de: "Y'lan-Akademie",
	name_es: "Academia Y'lan",
	name_fr: "Académie de Y'lan",
	name_zh: "依蘭學院",
	direction: "Northwest",
	id: "1102-102",
	map_id: "1102",
	coord: [6248, 12068]
},
"1102-104": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Deathless Necropolis",
	name_de: "Todlose Nekropole",
	name_es: "Necrópolis Inmortal",
	name_fr: "Nécropole immortelle",
	name_zh: "不死魂都",
	direction: "Northeast",
	id: "1102-104",
	map_id: "1102",
	coord: [8155, 12214]
},
"1102-105": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Sparkplug Depot",
	name_de: "Zündfunken-Depot",
	name_es: "Depósito de Bujías",
	name_fr: "Dépôt Bougie",
	name_zh: "火塞補給站",
	direction: "Southeast",
	id: "1102-105",
	map_id: "1102",
	coord: [7673, 14111]
},
"1102-106": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Keep",
	name_en: "Scorching Undercroft",
	name_de: "Versengende Gruft",
	name_es: "Sótano Abrasador",
	name_fr: "Crypte cuisante",
	name_zh: "焦熱墓穴",
	direction: "West",
	id: "1102-106",
	map_id: "1102",
	coord: [5744, 13194]
},
"1102-109": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Norfolk's Refuge",
	name_de: "Norfolks Zuflucht",
	name_es: "Refugio de Norfolk",
	name_fr: "Refuge de Norfolk",
	name_zh: "諾弗克的避難所",
	direction: "Northeast",
	id: "1102-109",
	map_id: "1102",
	coord: [8516, 12579]
},
"1102-110": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Tower",
	name_en: "Withered Outpost",
	name_de: "Welker Außenposten",
	name_es: "Puesto Avanzado Desolado",
	name_fr: "Avant-poste ravagé",
	name_zh: "凋零前哨",
	direction: "Southwest",
	id: "1102-110",
	map_id: "1102",
	coord: [6660, 13891]
},
"1102-113": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Keep",
	name_en: "Impassive Rampart",
	name_de: "Unbeeindruckter Festungswall",
	name_es: "Muralla Imperturbable",
	name_fr: "Rempart impassible",
	name_zh: "無情壁壘",
	alias: "Garrison",
	id: "1102-113",
	map_id: "1102",
	coord: [7193, 12680]
},
"1102-114": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Keep",
	name_en: "Harrier's Palace",
	name_de: "Weihen-Palast",
	name_es: "Palacio del Aguilucho",
	name_fr: "Palais du circaète",
	name_zh: "鷂鷹宮殿",
	direction: "East",
	id: "1102-114",
	map_id: "1102",
	coord: [8619, 13266]
},
"1102-115": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Hughe's Hideaway",
	name_de: "Hughes Versteck",
	name_es: "Escondrijo de Hughe",
	name_fr: "Antre de Hughe",
	name_zh: "休赫的藏匿點",
	direction: "Northwest",
	id: "1102-115",
	map_id: "1102",
	coord: [5729, 12554]
},
"1102-116": {
	nativeowner: "Green",
	map_type: "GreenHome",
	type: "Camp",
	name_en: "Smashedhope Well",
	name_de: "Brunnen der Zerschlagenen Hoffnung",
	name_es: "Pozo Tragaesperanza",
	name_fr: "Puits du Rêve-brisé",
	name_zh: "絕望之井",
	direction: "South",
	id: "1102-116",
	map_id: "1102",
	coord: [7163, 14414]
},
"1143-99": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Zakk's Lab",
	name_de: "Zakks Labor",
	name_es: "Laboratorio de Zakk",
	name_fr: "Laboratoire de Zakk",
	name_zh: "扎科的實驗室",
	direction: "North",
	id: "1143-99",
	map_id: "1143",
	coord: [14327, 11402]
},
"1143-100": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Gee Farmstead",
	name_de: "Gee-Gehöft",
	name_es: "Hacienda de Gee",
	name_fr: "Ferme Gee",
	name_zh: "基的農場",
	direction: "Southeast",
	id: "1143-100",
	map_id: "1143",
	coord: [15473, 13211]
},
"1143-101": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Habib's Encampment",
	name_de: "Habibs Lager",
	name_es: "Campamento de Habib",
	name_fr: "Campement d'Habib",
	name_zh: "哈比伯的營地",
	direction: "Southwest",
	id: "1143-101",
	map_id: "1143",
	coord: [13168, 13215]
},
"1143-102": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Kay'li Academy",
	name_de: "Kay'li-Akademie",
	name_es: "Academia Kay'li",
	name_fr: "Académie de Kay'li",
	name_zh: "凱立學院",
	direction: "Northwest",
	id: "1143-102",
	map_id: "1143",
	coord: [13416, 11428]
},
"1143-104": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Undying Necropolis",
	name_de: "Unsterbliche Nekropole",
	name_es: "Necrópolis Imperecedera",
	name_fr: "Nécropole impérissable",
	name_zh: "不朽魂都",
	direction: "Northeast",
	id: "1143-104",
	map_id: "1143",
	coord: [15323, 11574]
},
"1143-105": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Flywheel Depot",
	name_de: "Schwungrad-Depot",
	name_es: "Depósito de Volantes",
	name_fr: "Dépôt Engrenage",
	name_zh: "飛輪補給站",
	direction: "Southeast",
	id: "1143-105",
	map_id: "1143",
	coord: [14841, 13471]
},
"1143-106": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Keep",
	name_en: "Torrid Undercroft",
	name_de: "Glühende Gruft",
	name_es: "Sótano Sofocante",
	name_fr: "Crypte torride",
	name_zh: "酷熱墓穴",
	direction: "West",
	id: "1143-106",
	map_id: "1143",
	coord: [12912, 12554]
},
"1143-109": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Olivier's Refuge",
	name_de: "Oliviers Zuflucht",
	name_es: "Refugio de Olivier",
	name_fr: "Refuge d'Olivier",
	name_zh: "奧立弗的避難所",
	direction: "Northeast",
	id: "1143-109",
	map_id: "1143",
	coord: [15684, 11939]
},
"1143-110": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Tower",
	name_en: "Barren Outpost",
	name_de: "Öder Außenposten",
	name_es: "Puesto Avanzado Abandonado",
	name_fr: "Avant-poste délabré",
	name_zh: "貧瘠前哨",
	direction: "Southwest",
	id: "1143-110",
	map_id: "1143",
	coord: [13828, 13251]
},
"1143-113": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Keep",
	name_en: "Hardened Rampart",
	name_de: "Stahlharter Festungswall",
	name_es: "Muralla Endurecida",
	name_fr: "Rempart durci",
	name_zh: "防護壁壘",
	alias: "Garrison",
	id: "1143-113",
	map_id: "1143",
	coord: [14361, 12040]
},
"1143-114": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Keep",
	name_en: "Shrike's Palace",
	name_de: "Würger-Palast",
	name_es: "Palacio del Alcaudón",
	name_fr: "Palais de la pie-grièche",
	name_zh: "烏鶇宮殿",
	direction: "East",
	id: "1143-114",
	map_id: "1143",
	coord: [15787, 12626]
},
"1143-115": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Berdrow's Hideaway",
	name_de: "Berdrows Versteck",
	name_es: "Escondrijo de Berdrow",
	name_fr: "Antre de Berdrow",
	name_zh: "貝德羅的藏匿點",
	direction: "Northwest",
	id: "1143-115",
	map_id: "1143",
	coord: [12897, 11914]
},
"1143-116": {
	nativeowner: "Blue",
	map_type: "BlueHome",
	type: "Camp",
	name_en: "Lastgasp Well",
	name_de: "Brunnen des Letzten Schnaufers",
	name_es: "Pozo del Último Suspiro",
	name_fr: "Puits du Dernier-soupir",
	name_zh: "瀕死之井",
	direction: "South",
	id: "1143-116",
	map_id: "1143",
	coord: [14331, 13774]
}
};

/*
 * Siege weapons and blueprint supply.
 */
var GW2T_WEAPON_DATA = {
portal: {
	id: "portal",
	image: "portal",
	type: "skill",
	color: "pink",
	isPlaceable: true,
	range: 5000
},
flameram: {
	id: "flameram",
	image: "flameram",
	type: "field",
	color: "orange",
	isPlaceable: false,
	range: 360,
	supply: [40, 50, 40]
},
arrowcart: {
	id: "arrowcart",
	image: "arrowcart",
	type: "field",
	color: "orange",
	isPlaceable: true,
	range: 2500,
	supply: [40, 50, 40]
},
ballista: {
	id: "ballista",
	image: "ballista",
	type: "field",
	color: "orange",
	isPlaceable: true,
	range: 3000,
	supply: [30, 40, 30]
},
catapult: {
	id: "catapult",
	image: "catapult",
	type: "field",
	color: "orange",
	isPlaceable: true,
	range: 4000,
	tooltip: "<dfn>Power</dfn> = Range<br /><dfn>0%</dfn> = 1500<br /><dfn>25%</dfn> = 2100<br /><dfn>50%</dfn> = 2700<br /><dfn>75%</dfn> = 3300<br /><dfn>100%</dfn> = 3800<br />Radius 432",
	supply: [40, 50, 40]
},
trebuchet: {
	id: "trebuchet",
	image: "trebuchet",
	type: "field",
	color: "orange",
	isPlaceable: true,
	range: 10000,
	tooltip: "<dfn>Power</dfn> = Range<br /><dfn>0%</dfn> = 2200<br /><dfn>25%</dfn> = 3700<br /><dfn>50%</dfn> = 5300<br /><dfn>75%</dfn> = 7000<br /><dfn>100%</dfn> = 8500<br />Radius 420",
	supply: [100, 120, 100]
},
golem: {
	id: "golem",
	image: "golem",
	type: "field",
	color: "orange",
	isPlaceable: false,
	range: 1500,
	supply: [100, 150, 50]
},
shieldgenerator: {
	id: "shieldgenerator",
	image: "shieldgenerator",
	type: "field",
	color: "orange",
	isPlaceable: true,
	range: 3300,
	supply: [40, 50, 40]
},
burningoil: {
	id: "burningoil",
	image: "burningoil",
	type: "base",
	color: "yellow",
	opacity: 0.1,
	fillOpacity: 0.01,
	isPlaceable: false,
	range: 600
},
cannon: {
	id: "cannon",
	image: "cannon",
	type: "base",
	color: "yellow",
	opacity: 0.1,
	fillOpacity: 0.01,
	isPlaceable: true,
	range: 3750
},
mortar: {
	id: "mortar",
	image: "mortar",
	type: "base",
	color: "yellow",
	opacity: 0.1,
	fillOpacity: 0.01,
	isPlaceable: true,
	range: 9400
},
burningoildesert: {
	id: "burningoildesert",
	image: "burningoil",
	type: "base",
	color: "gold",
	opacity: 0.1,
	fillOpacity: 0.01,
	isPlaceable: false,
	range: 850
}
};

/*
 * Map placement of siege weapons, and destructible objective walls and gates.
 * The coordinates are all from the Green Borderlands. To place on the red and
 * blue borderlands, the offset metadata must be used.
 */
var GW2T_PLACEMENT_ROTATION = {
Alpine: {
	ZoneNicks: ["alpinered", "alpineblue", "alpinegreen"],
	Siege: [{"id":"trebuchet","coord":[5914,14107]},{"id":"trebuchet","coord":[5965,14024]},{"id":"catapult","coord":[6067,13846]},{"id":"catapult","coord":[6069,13774]},{"id":"catapult","coord":[5883,13106]},{"id":"trebuchet","coord":[6072,13251]},{"id":"catapult","coord":[6314,13554]},{"id":"trebuchet","coord":[6451,13978]},{"id":"catapult","coord":[6549,13979]},{"id":"catapult","coord":[6805,14101]},{"id":"catapult","coord":[7452,14065]},{"id":"trebuchet","coord":[7738,13761]},{"id":"catapult","coord":[7718,13507]},{"id":"trebuchet","coord":[7858,12981]},{"id":"trebuchet","coord":[7402,12783]},{"id":"catapult","coord":[7330,12785]},{"id":"catapult","coord":[7463,12672]},{"id":"portal","coord":[6921,12731]},{"id":"catapult","coord":[6930,12837]},{"id":"trebuchet","coord":[7065,13001]},{"id":"trebuchet","coord":[6601,12641]},{"id":"trebuchet","coord":[6321,12724]},{"id":"catapult","coord":[6252,12538]},{"id":"trebuchet","coord":[6178,12301]},{"id":"trebuchet","coord":[7555,13512]}]
},
Desert: {
	ZoneNicks: ["desertred", "desertblue", "desertgreen"],
	Barricade: [
	// rampart
	[[6751, 12477], [6821, 12479]],
	[[6700, 12479], [6720, 12479]],
	[[7512, 12490], [7581, 12485]],
	[[7614, 12481], [7635, 12480]],
	// NW tower
	[[6399, 12277], [6468, 12275]],
	[[6492, 12274], [6547, 12263]],
	// SW tower
	[[6864, 14033], [6892, 14040]],
	[[6824, 14021], [6844, 14026]],
	[[6490, 13807], [6504, 13844]],
	[[6520, 13879], [6572, 13928]],
	// NE tower
	[[8003, 12342], [8057, 12327]],
	[[7933, 12369], [7977, 12358]],
	// SE tower
	[[7351, 13963], [7421, 13978]],
	[[7457, 13986], [7519, 13995]],
	[[7849, 14063], [7921, 14055]],
	[[7949, 14043], [7992, 14018]]
	],
	Wall: [
	// rampart
	[[7373, 12545], [7408, 12584]],
	[[7257, 12810], [7279, 12810]],
	[[7077, 12799], [7117, 12803]],
	[[6832, 12484], [6834, 12534]],
	[[6840, 12476], [6922, 12471]],
	[[7049, 12519], [7082, 12480]],
	[[7434, 12490], [7485, 12491]],
	[[7497, 12500], [7501, 12551]],
	// W keep
	[[5963, 12948], [6012, 12946]],
	[[6108, 12945], [6160, 12946]],
	[[6236, 13016], [6236, 13047]],
	[[5933, 13223], [5933, 13245]],
	[[5932, 13134], [5932, 13153]],
	[[6001, 13411], [6034, 13411]],
	[[6128, 13414], [6161, 13414]],
	[[6267, 13288], [6267, 13310]],
	// E keep
	[[8271, 13013], [8297, 13012]],
	[[8078, 13062], [8077, 13106]],
	[[8408, 13338], [8426, 13349]],
	[[8408, 13158], [8422, 13150]],
	[[8131, 13417], [8166, 13444]],
	// NW tower
	[[6315, 12277], [6365, 12277]],
	[[6378, 12211], [6377, 12262]],
	[[6141, 12277], [6199, 12278]],
	[[6127, 12189], [6127, 12262]],
	[[6330, 11884], [6405, 11917]],
	[[6413, 11938], [6401, 11965]],
	// SW tower
	[[6583, 13987], [6575, 14026]],
	[[6655, 14057], [6695, 14063]],
	[[6770, 14052], [6801, 14025]],
	[[6714, 13880], [6741, 13907]],
	// SE tower
	[[7581, 13967], [7622, 13949]],
	[[7547, 14150], [7591, 14191]],
	[[7769, 14216], [7795, 14185]],
	[[7821, 14159], [7828, 14082]],
	// NE tower
	[[8060, 12236], [8081, 12295]],
	[[8030, 12131], [8051, 12194]],
	[[8055, 12087], [8085, 12066]],
	[[8117, 12055], [8184, 12027]],
	[[8173, 12317], [8249, 12304]]
	],
	Gate: [
	// rampart
	[[7323, 12492], [7340, 12510]],
	[[7505, 12611], [7507, 12633]],
	[[7174, 12812], [7198, 12812]],
	[[6835, 12594], [6835, 12617]],
	[[7005, 12575], [7021, 12554]],
	// W keep
	[[6059, 12942], [6078, 12942]],
	[[5931, 13307], [5931, 13327]],
	[[5931, 13052], [5932, 13076]],
	[[6060, 13412], [6081, 13412]],
	[[6281, 13179], [6281, 13202]],
	// E keep
	[[8189, 12983], [8210, 12983]],
	[[8078, 13259], [8077, 13278]],
	[[8438, 13425], [8458, 13440]],
	[[8458, 13110], [8480, 13096]],
	[[8219, 13475], [8238, 13482]],
	// NW tower
	[[6237, 12262], [6258, 12262]],
	// SW tower
	[[6593, 14049], [6611, 14051]],
	// SE tower
	[[7716, 14242], [7734, 14236]],
	// NE tower
	[[8111, 12322], [8131, 12322]]
	],
	ShrineEarth: [[6380, 12595], [7154, 12245], [7939, 12553]],
	ShrineFire: [[6376, 12878], [6125, 13248], [6419, 13460]],
	ShrineAir: [[8624, 12840], [7976, 13437], [8559, 13723]],
	Sentry: [[6649,12216],[6157,12477],[6066,12634],[5912,13640],[6302,13924],[7120,14112],[8078,14070],[8062,13805],[8184,12735],[8149,12524],[7905,11960]],
	Depot: [[7158,12101],[6275,12150],[5763,12557],[6031,13037],[5883,13191],[5925,13191],[6143,13193],[6105,13324],[5972,13889],[6775,14000],[7177,14475],[7770,14116],[8335,13823],[8231,13426],[8459,13371],[8203,13243],[8522,13133],[8221,13081],[8547,12599],[8320,12157],[7463,12719],[7340,12560],[7147,12781],[7069,12550],[6862,12495]],
	Siege: [{"id":"cannon","coord":[8057,13294]},{"id":"cannon","coord":[8057,13239]},{"id":"mortar","coord":[8013,13193]},{"id":"mortar","coord":[8484,13462]},{"id":"cannon","coord":[8453,13483]},{"id":"cannon","coord":[8395,13445]},{"id":"cannon","coord":[8478,13056]},{"id":"cannon","coord":[8423,13091]},{"id":"mortar","coord":[8504,13073]},{"id":"mortar","coord":[8228,13478]},{"id":"cannon","coord":[8243,13506]},{"id":"cannon","coord":[8195,13485]},{"id":"mortar","coord":[8265,12292]},{"id":"cannon","coord":[8104,12420]},{"id":"cannon","coord":[8156,12416]},{"id":"mortar","coord":[7453,12625]},{"id":"mortar","coord":[7738,14113]},{"id":"cannon","coord":[7329,12461]},{"id":"cannon","coord":[7370,12506]},{"id":"cannon","coord":[7542,12579]},{"id":"cannon","coord":[7541,12664]},{"id":"cannon","coord":[7144,12835]},{"id":"cannon","coord":[7230,12839]},{"id":"mortar","coord":[7187,12876]},{"id":"cannon","coord":[6803,12563]},{"id":"cannon","coord":[6803,12646]},{"id":"mortar","coord":[6871,12604]},{"id":"cannon","coord":[7015,12528]},{"id":"cannon","coord":[6978,12578]},{"id":"mortar","coord":[7026,12575]},{"id":"cannon","coord":[6274,12351]},{"id":"cannon","coord":[6221,12351]},{"id":"cannon","coord":[6021,12921]},{"id":"cannon","coord":[6098,12920]},{"id":"mortar","coord":[6150,13392]},{"id":"mortar","coord":[6167,13184]},{"id":"cannon","coord":[5962,13110]},{"id":"mortar","coord":[5995,13115]},{"id":"cannon","coord":[5962,13270]},{"id":"mortar","coord":[5995,13267]},{"id":"mortar","coord":[5969,12952]},{"id":"mortar","coord":[6006,13411]},{"id":"cannon","coord":[6044,13433]},{"id":"cannon","coord":[6117,13435]},{"id":"mortar","coord":[6398,12273]},{"id":"cannon","coord":[5963,13335]},{"id":"cannon","coord":[5964,13048]},{"id":"cannon","coord":[6558,14121]},{"id":"cannon","coord":[6625,14136]},{"id":"cannon","coord":[7736,14329]},{"id":"cannon","coord":[7780,14302]},{"id":"mortar","coord":[6751,14065]},{"id":"mortar","coord":[7323,12509]},{"id":"cannon","coord":[8175,12962]},{"id":"cannon","coord":[8227,12964]},{"id":"mortar","coord":[8082,12947]}]
}
};
var GW2T_PLACEMENT_DATA = {
Eternal: {
	ZoneNicks: ["eternal"],
	Wall: [
	// lowlands
	[[9789, 15150], [9841, 15147]],
	[[9854, 15141], [9891, 15104]],
	[[9684, 14857], [9643, 14890]],
	[[9629, 14900], [9588, 14934]],
	[[9582, 14946], [9577, 14997]],
	[[9634, 15221], [9653, 15203]],
	[[9656, 15201], [9693, 15167]],
	[[9693, 15155], [9658, 15117]],
	// aldon
	[[9423, 14833], [9457, 14865]],
	[[9399, 14931], [9378, 14913]],
	// jerrifer
	[[9798, 15380], [9826, 15333]],
	[[9836, 15329], [9859, 15343]],
	// wildcreek
	[[9915, 14544], [9949, 14508]],
	// klovan
	[[10332, 15115], [10286, 15111]],
	[[10284, 15110], [10259, 15108]],
	// overlook
	[[10633, 13847], [10581, 13847]],
	[[10568, 13842], [10532, 13806]],
	[[10525, 13792], [10524, 13743]],
	[[10678, 13668], [10677, 13693]],
	[[10686, 13700], [10735, 13703]],
	[[10740, 13704], [10792, 13707]],
	[[10795, 13707], [10820, 13708]],
	[[10852, 13681], [10854, 13657]],
	[[10854, 13652], [10857, 13604]],
	// anzalias
	[[10266, 14022], [10247, 14004]],
	[[10213, 13982], [10176, 14018]],
	// mendon
	[[10216, 13386], [10216, 13360]],
	[[10225, 13350], [10247, 13352]],
	// ogrewatch
	[[10945, 13899], [10978, 13927]],
	// veloka
	[[11081, 13533], [11086, 13509]],
	[[11047, 13533], [11021, 13527]],
	// valley
	[[11509, 15330], [11490, 15315]],
	[[11487, 15313], [11448, 15282]],
	[[11444, 15279], [11405, 15248]],
	[[11398, 15237], [11391, 15187]],
	[[11390, 15181], [11382, 15132]],
	[[11384, 15102], [11399, 15080]],
	[[11455, 15009], [11506, 15001]],
	[[11544, 15001], [11570, 15001]],
	[[11584, 15006], [11622, 15037]],
	[[11625, 15040], [11643, 15055]],
	[[11646, 15058], [11684, 15091]],
	[[11595, 15124], [11634, 15159]],
	[[11551, 15254], [11512, 15219]],
	// quentin
	[[10928, 15153], [10945, 15172]],
	[[10949, 15176], [10965, 15194]],
	// durios
	[[11273, 14510], [11278, 14536]],
	[[11275, 14550], [11260, 14573]],
	[[11155, 14543], [11151, 14568]],
	// langor
	[[11410, 15439], [11385, 15425]],
	[[11345, 15489], [11396, 15519]],
	// bravost
	[[11684, 14772], [11662, 14789]],
	[[11705, 14846], [11725, 14832]],
	// stonemist
	[[10372, 14731], [10350, 14779]],
	[[10356, 14790], [10403, 14810]],
	[[10421, 14821], [10464, 14847]],
	[[10496, 14869], [10542, 14893]],
	[[10559, 14902], [10605, 14926]],
	[[10620, 14927], [10647, 14919]],
	[[10680, 14904], [10706, 14858]],
	[[10718, 14851], [10769, 14836]],
	[[10788, 14831], [10839, 14817]],
	[[10845, 14807], [10831, 14757]],
	[[10875, 14683], [10926, 14671]],
	[[10931, 14660], [10918, 14611]],
	[[10912, 14593], [10892, 14544]],
	[[10879, 14490], [10874, 14439]],
	[[10869, 14414], [10841, 14369]],
	[[10830, 14354], [10794, 14316]],
	[[10780, 14302], [10743, 14264]],
	[[10729, 14250], [10709, 14232]],
	[[10679, 14216], [10644, 14255]],
	[[10559, 14253], [10522, 14216]],
	[[10510, 14217], [10473, 14254]],
	[[10461, 14269], [10428, 14311]],
	[[10419, 14327], [10390, 14370]],
	[[10383, 14389], [10380, 14441]],
	[[10364, 14467], [10348, 14489]],
	[[10339, 14505], [10318, 14554]],
	[[10311, 14571], [10290, 14619]],
	[[10294, 14631], [10342, 14652]]
	],
	Gate: [
	// valley
	[[11596, 15193], [11582, 15209]],
	[[11614, 15209], [11600, 15224]],
	[[11502, 15208], [11486, 15195]],
	[[11569, 15103], [11584, 15117]],
	[[11410, 15071], [11424, 15052]],
	// quentin
	[[10974, 15220], [10974, 15228]],
	// durios
	[[11237, 14586], [11229, 14588]],
	// langor
	[[11363, 15444], [11368, 15437]],
	// bravost
	[[11671, 14815], [11666, 14808]],
	// overlook
	[[10779, 13604], [10758, 13603]],
	[[10759, 13581], [10780, 13581]],
	[[10682, 13608], [10681, 13629]],
	[[10639, 13777], [10639, 13798]],
	// anzalias
	[[10230, 13987], [10238, 13995]],
	// mendon
	[[10258, 13351], [10268, 13351]],
	// ogrewatch
	[[11045, 13919], [11053, 13911]],
	// veloka
	[[10992, 13500], [10998, 13507]],
	// lowlands
	[[9521, 15210], [9508, 15194]],
	[[9538, 15196], [9526, 15180]],
	[[9635, 15093], [9649, 15108]],
	[[9869, 14886], [9883, 14901]],
	[[9824, 15056], [9834, 15056]],
	[[9727, 14954], [9736, 14960]],
	// aldon
	[[9448, 14893], [9453, 14887]],
	// jerrifer
	[[9872, 15348], [9879, 15352]],
	// wildcreek
	[[9937, 14579], [9943, 14584]],
	// klovan
	[[10249, 15049], [10249, 15057]],
	// stonemist
	[[10832, 14696], [10821, 14714]],
	[[10626, 14761], [10605, 14762]],
	[[10389, 14691], [10382, 14671]],
	[[10482, 14442], [10499, 14429]],
	[[10592, 14283], [10613, 14283]],
	[[10688, 14424], [10706, 14435]]
	],
	Sentry: [[9736,15290],[10197,14912],[10119,14706],[9511,14708],[10363,14081],[10816,14080],[11097,13640],[10496,13540],[11145,14667],[10935,15038],[11226,15447],[11630,14699]],
	Depot: [[9843,15405],[10209,15396],[10301,15063],[9948,14539],[9564,14399],[9388,14884],[9642,14928],[9781,15123],[9600,15206],[10222,14046],[9835,13584],[10291,13381],[11022,13471],[11296,13725],[10989,13906],[10703,13677],[10548,13788],[11202,14555],[11584,14491],[11721,14785],[11411,15484],[11010,15574],[10889,15255],[11595,15165],[11515,15053],[11435,15151],[10403,14784],[10326,14591],[10486,14283],[10754,14307],[10890,14608],[10772,14810],[10484,14528],[10724,14515],[10676,14696],[10571,14643]],
	Siege: [{"id":"catapult","coord":[11005,13670]},{"id":"cannon","coord":[10578,14345]},{"id":"cannon","coord":[10374,14535]},{"id":"cannon","coord":[10822,14480]},{"id":"cannon","coord":[10746,14754]},{"id":"cannon","coord":[10492,14787]},{"id":"catapult","coord":[10883,13651]},{"id":"catapult","coord":[10503,13771]},{"id":"catapult","coord":[10532,13845]},{"id":"catapult","coord":[10474,13927]},{"id":"mortar","coord":[11411,15506]},{"id":"trebuchet","coord":[11152,14495]},{"id":"trebuchet","coord":[10424,13954]},{"id":"catapult","coord":[10015,13999]},{"id":"catapult","coord":[11072,13704]},{"id":"catapult","coord":[11114,13529]},{"id":"ballista","coord":[11119,13987]},{"id":"mortar","coord":[11736,14825]},{"id":"catapult","coord":[11833,14906]},{"id":"trebuchet","coord":[11679,14564]},{"id":"cannon","coord":[11372,15099]},{"id":"catapult","coord":[11114,15188]},{"id":"trebuchet","coord":[9914,15277]},{"id":"catapult","coord":[9923,15250]},{"id":"catapult","coord":[9368,14936]},{"id":"catapult","coord":[9595,14898]},{"id":"catapult","coord":[9857,14451]},{"id":"catapult","coord":[10376,15118]},{"id":"mortar","coord":[10726,14616]},{"id":"catapult","coord":[10757,13731]},{"id":"ballista","coord":[10153,13261]},{"id":"catapult","coord":[10121,13255]},{"id":"catapult","coord":[11359,15521]},{"id":"catapult","coord":[11440,15326]},{"id":"catapult","coord":[11676,15040]},{"id":"catapult","coord":[9894,15139]},{"id":"catapult","coord":[10257,14642]},{"id":"trebuchet","coord":[10634,13848]},{"id":"catapult","coord":[10948,14019]},{"id":"catapult","coord":[10832,14316]},{"id":"catapult","coord":[10569,14939]},{"id":"ballista","coord":[11289,15364]},{"id":"catapult","coord":[9979,15345]},{"id":"catapult","coord":[9787,15367]},{"id":"catapult","coord":[9774,15292]},{"id":"trebuchet","coord":[9615,14444]},{"id":"catapult","coord":[10158,15178]},{"id":"catapult","coord":[10121,14044]},{"id":"ballista","coord":[10361,13962]},{"id":"catapult","coord":[10373,13980]},{"id":"trebuchet","coord":[11075,14154]},{"id":"catapult","coord":[11400,14689]},{"id":"catapult","coord":[11373,14483]},{"id":"catapult","coord":[11210,14490]},{"id":"trebuchet","coord":[10965,13420]},{"id":"catapult","coord":[11341,15165]},{"id":"catapult","coord":[11325,15584]},{"id":"catapult","coord":[11133,15296]},{"id":"catapult","coord":[11422,14973]},{"id":"catapult","coord":[10839,15184]},{"id":"catapult","coord":[10707,14894]},{"id":"trebuchet","coord":[9929,13357]},{"id":"trebuchet","coord":[11143,15177]},{"id":"catapult","coord":[10361,14415]},{"id":"cannon","coord":[10337,14783]},{"id":"mortar","coord":[10492,14624]},{"id":"cannon","coord":[10283,14637]},{"id":"mortar","coord":[10313,14563]},{"id":"cannon","coord":[10358,14450]},{"id":"mortar","coord":[10392,14369]},{"id":"mortar","coord":[10465,14261]},{"id":"cannon","coord":[10523,14203]},{"id":"mortar","coord":[10613,14700]},{"id":"mortar","coord":[10529,14485]},{"id":"mortar","coord":[10674,14477]},{"id":"mortar","coord":[10677,14910]},{"id":"cannon","coord":[10617,14939]},{"id":"mortar","coord":[10520,14880]},{"id":"mortar","coord":[10375,14725]},{"id":"mortar","coord":[10735,14257]},{"id":"cannon","coord":[10686,14198]},{"id":"cannon","coord":[10795,14299]},{"id":"cannon","coord":[10887,14427]},{"id":"mortar","coord":[10915,14600]},{"id":"cannon","coord":[10935,14675]},{"id":"cannon","coord":[10855,14812]},{"id":"mortar","coord":[10779,14834]},{"id":"cannon","coord":[10413,14310]},{"id":"cannon","coord":[9705,15154]},{"id":"cannon","coord":[9642,15055]},{"id":"mortar","coord":[9521,15137]},{"id":"cannon","coord":[9477,15186]},{"id":"cannon","coord":[9522,15243]},{"id":"mortar","coord":[9653,15199]},{"id":"cannon","coord":[9905,15103]},{"id":"cannon","coord":[9922,14873]},{"id":"cannon","coord":[9899,14849]},{"id":"cannon","coord":[9687,14843]},{"id":"mortar","coord":[9711,14878]},{"id":"mortar","coord":[9872,15062]},{"id":"mortar","coord":[9450,14818]},{"id":"cannon","coord":[10961,13503]},{"id":"cannon","coord":[10814,13559]},{"id":"cannon","coord":[10737,13559]},{"id":"cannon","coord":[10671,13586]},{"id":"cannon","coord":[10650,13644]},{"id":"cannon","coord":[10830,13725]},{"id":"cannon","coord":[10743,13785]},{"id":"cannon","coord":[10648,13854]},{"id":"cannon","coord":[11658,14845]},{"id":"cannon","coord":[11583,14990]},{"id":"cannon","coord":[11562,15063]},{"id":"cannon","coord":[11408,15017]},{"id":"cannon","coord":[11448,15194]},{"id":"cannon","coord":[11644,15209]},{"id":"cannon","coord":[11389,15249]},{"id":"cannon","coord":[11329,15445]},{"id":"mortar","coord":[10843,15252]},{"id":"mortar","coord":[9763,15380]},{"id":"mortar","coord":[10855,13652]},{"id":"mortar","coord":[10728,13588]},{"id":"mortar","coord":[10676,13702]},{"id":"mortar","coord":[10797,13707]},{"id":"mortar","coord":[10525,13799]},{"id":"mortar","coord":[10573,13847]},{"id":"mortar","coord":[11514,15335]},{"id":"mortar","coord":[11393,15213]},{"id":"mortar","coord":[11535,14997]},{"id":"mortar","coord":[11694,15096]},{"id":"mortar","coord":[11642,15163]},{"id":"mortar","coord":[11556,15260]},{"id":"mortar","coord":[9895,14665]},{"id":"cannon","coord":[9919,14580]},{"id":"cannon","coord":[9834,15319]},{"id":"mortar","coord":[10122,15082]},{"id":"cannon","coord":[10221,15024]},{"id":"cannon","coord":[11000,15245]},{"id":"cannon","coord":[11214,14608]},{"id":"mortar","coord":[11150,14576]},{"id":"cannon","coord":[11600,15259]},{"id":"cannon","coord":[11446,15303]},{"id":"cannon","coord":[9457,14926]},{"id":"cannon","coord":[10604,13659]},{"id":"cannon","coord":[11090,13918]}]
}
};

/*
 * Objective translations and map addenda.
 */
var GW2T_WVW_METADATA = {
	PlacementAssociation: {
		desertred: "Desert",
		desertblue: "Desert",
		desertgreen: "Desert",
		eternal: "Eternal",
		alpinered: "Alpine",
		alpineblue: "Alpine",
		alpinegreen: "Alpine"
	},
	Offsets: { // The three borderland maps are identical; these X and Y offsets are relative to the green borderlands
		desertred: [3584, -2560],
		desertblue: [7168, -640],
		desertgreen: [0, 0],
		eternal: [0, 0],
		alpinered: [3584, -2560],
		alpineblue: [7168, -640],
		alpinegreen: [0, 0]
	},
	Blueprints: ["Basic", "Superior", "Guild"], // Blueprint grades
	MatchIDs: {
		Americas: ["1-1", "1-2", "1-3", "1-4", "1-5", "1-6", "1-7", "1-8"],
		Europe:   ["2-1", "2-2", "2-3", "2-4", "2-5", "2-6", "2-7", "2-8", "2-9"]
	},
	Alliances: ["red", "blue", "green"], // Corresponds to matches API
	Owners: ["Green", "Blue", "Red"], // Corresponds to the 1st, 2nd, and 3rd place of previous week's matchup
	Opposites: { /* Opposing servers, in matchup order */
		Green: ["Blue", "Red"],
		Blue: ["Green", "Red"],
		Red: ["Green", "Blue"]
	},
	MapType: {
		RedHome: "red",
		BlueHome: "blue",
		GreenHome: "green",
		Center: "center"
	},
	LandEnum: {
		RedHome: "RedHome",
		BlueHome: "BlueHome",
		GreenHome: "GreenHome",
		Center: "Center"
	},
	LandPrefix: {
		RedHome: "1099-",
		BlueHome: "1143-",
		GreenHome: "1102-",
		Center: "38-"
	},
	ObjectiveEnum: {
		Sentry: "Sentry",
		Ruins: "Ruins",
		Camp: "Camp",
		Tower: "Tower",
		Keep: "Keep",
		Castle: "Castle"
	},
	OwnerEnum: {
		Red: "Red",
		Blue: "Blue",
		Green: "Green",
		Neutral: "Neutral"
	},
	SpawnLabels: { /* Label showing the server name, positioned over their spawn in each map */
		Alpine: {
			RedHome: {
				Red: [10505, 9961],
				Blue: [11395, 12169],
				Green: [9567, 12227]
			},
			GreenHome: {
				Red: [7811, 14729],
				Blue: [5983, 14787],
				Green: [6921, 12521]
			},
			BlueHome: {
				Red: [13151, 14147],
				Blue: [14089, 11881],
				Green: [14979, 14089]
			},
			Center: {
				Red: [10563, 13020],
				Blue: [11890, 15720],
				Green: [9082, 15653]
			}
		},
		Desert: {
			RedHome: {
				Red: [10758, 9181],
				Blue: [12112, 11894],
				Green: [9519, 11814]
			},
			GreenHome: {
				Red: [8528, 14454],
				Blue: [5935, 14374],
				Green: [7174, 11741]
			},
			BlueHome: {
				Red: [13103, 13734],
				Blue: [14342, 11101],
				Green: [15696, 13814]
			},
			Center: {
				Red: [10563, 13020],
				Blue: [11890, 15720],
				Green: [9082, 15653]
			}
		}
	},
	Neutral: {
		color: "#dddddd",
		name_en: "Neutral", name_de: "Neutral", name_es: "Neutral", name_fr: "Neutre", name_zh: "中立"
	},
	Red: {
		color: "#cc1f24",
		name_en: "Red", name_de: "Rot", name_es: "rojo", name_fr: "rouge", name_zh: "紅色"
	},
	Blue: {
		color: "#31a7bb",
		name_en: "Blue", name_de: "Blau", name_es: "azul", name_fr: "bleu", name_zh: "藍色"
	},
	Green: {
		color: "#52a518",
		name_en: "Green", name_de: "Grün", name_es: "verde", name_fr: "vert", name_zh: "綠色"
	},
	Center: {
		color: "#ffeeaa",
		name_en: "Eternal Battlegrounds", name_de: "Ewige Schlachtfelder", name_es: "Campos de batalla eternos", name_fr: "Champs de bataille éternels", name_zh: "永恆戰場",
		nick_en: "E.B.G.", nick_de: "E.S.F.", nick_es: "C.B.E.", nick_fr: "C.B.E.", nick_zh: "永恆戰場"
	},
	Sentry: {
		name_en: "Sentry", name_de: "Wachposten", name_es: "Vigía", name_fr: "Sentinelle", name_zh: "哨兵"
	},
	Ruins: {
		name_en: "Ruins", name_de: "Ruine", name_es: "Ruinas", name_fr: "Ruine", name_zh: "廢墟"
	},
	Camp: {
		name_en: "Camp", name_de: "Lager", name_es: "Campamento", name_fr: "Camp", name_zh: "營地"
	},
	Tower: {
		name_en: "Tower", name_de: "Turm", name_es: "Torre", name_fr: "Tour", name_zh: "塔樓"
	},
	Keep: {
		name_en: "Keep", name_de: "Feste", name_es: "Fortaleza", name_fr: "Fort", name_zh: "要塞"
	},
	Castle: {
		name_en: "Castle", name_de: "Schloss", name_es: "Castillo", name_fr: "Château", name_zh: "城堡"
	},
	Garrison: {
		name_en: "Garrison", name_de: "Festung", name_es: "Fuerte", name_fr: "Garnison", name_zh: "要塞"
	},
	Borderlands: {
		name_en: "Borderlands", name_de: "Grenzlande", name_es: "Tierras de", name_fr: "Territoires", name_zh: "邊境之地",
		nick_en: "BL", nick_de: "GL", nick_es: "TF", nick_fr: "TF", nick_zh: "邊境之地"
	},
	North: {
		name_en: "North", name_de: "Nord", name_es: "Norte", name_fr: "Nord", name_zh: "北",
		nick_en: "N.", nick_de: "N.", nick_es: "N.", nick_fr: "N.", nick_zh: "北"
	},
	Northeast: {
		name_en: "Northeast", name_de: "Nordosten", name_es: "Nordeste", name_fr: "Nord-est", name_zh: "東北",
		nick_en: "N.E.", nick_de: "N.O.", nick_es: "N.E.", nick_fr: "N.E.", nick_zh: "東北"
	},
	East: {
		name_en: "East", name_de: "Ost", name_es: "Este", name_fr: "Est", name_zh: "東",
		nick_en: "E.", nick_de: "O.", nick_es: "E.", nick_fr: "E.", nick_zh: "東"
	},
	Southeast: {
		name_en: "Southeast", name_de: "Südosten", name_es: "Sureste", name_fr: "Sud-est", name_zh: "東南",
		nick_en: "S.E.", nick_de: "S.O.", nick_es: "S.E.", nick_fr: "S.E.", nick_zh: "東南"
	},
	South: {
		name_en: "South", name_de: "Süd", name_es: "Sur", name_fr: "Sud", name_zh: "南",
		nick_en: "S.", nick_de: "S.", nick_es: "S.", nick_fr: "S.", nick_zh: "南"
	},
	Southwest: {
		name_en: "Southwest", name_de: "Südwesten", name_es: "Suroeste", name_fr: "Sud-ouest", name_zh: "西南",
		nick_en: "S.W.", nick_de: "S.W.", nick_es: "S.O.", nick_fr: "S.O.", nick_zh: "西南"
	},
	West: {
		name_en: "West", name_de: "West", name_es: "Oeste", name_fr: "Ouest", name_zh: "西",
		nick_en: "W.", nick_de: "W.", nick_es: "O.", nick_fr: "O.", nick_zh: "西"
	},
	Northwest: {
		name_en: "Northwest", name_de: "Nordwesten", name_es: "Noroeste", name_fr: "Nord-ouest", name_zh: "西北",
		nick_en: "N.W.", nick_de: "N.W.", nick_es: "N.O.", nick_fr: "N.O.", nick_zh: "西北"
	},
	Captured: {
		name_en: "Captured by", name_de: "Erobert von", name_es: "Capturado por", name_fr: "Capturé de", name_zh: "抓住的"
	},
	Retaken: {
		name_en: "Retaken by", name_de: "Zurückerobert von", name_es: "Retomada por", name_fr: "Repris de", name_zh: "奪回的"
	},
	Claimed: {
		name_en: "Claimed by", name_de: "Beansprucht von", name_es: "Reclamado por", name_fr: "Revendication de", name_zh: "聲稱的"
	},
	Us: {
		name_en: "us", name_de: "uns", name_es: "nosotros", name_fr: "nous", name_zh: "我們"
	},
	Our: {
		name_en: "our", name_de: "unser", name_es: "nuestro", name_fr: "notre", name_zh: "我們的"
	},
	ObjectiveType: {
		Ruins: {
			Quantity: { /* Number of objectives in a map */
				Borderlands: 5,
				Battlegrounds: 0
			},
			Value: {
				Each: 0
			}
		},
		Camp: {
			Quantity: {
				Borderlands: 6,
				Battlegrounds: 2
			},
			Value: {
				Each: 2
			}
		},
		Tower: {
			Quantity: {
				Borderlands: 4,
				Battlegrounds: 4
			},
			Value: {
				Each: 4
			}
		},
		Keep: {
			Quantity: {
				Borderlands: 3,
				Battlegrounds: 1
			},
			Value: {
				Each: 8
			}
		},
		Castle: {
			Quantity: {
				Borderlands: 0,
				Battlegrounds: 0,
				isUnique: true
			},
			Value: {
				Each: 12
			}
		}
	}
};
