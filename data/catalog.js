/*
 * This file is used by http://gw2timer.com/catalog
 * Catalog of gizmos and consumables inventory items.
 */

/*
 * Category translations.
 */
var GW2T_CATALOG_HEADERS = {
	Key: {name_en: "Keys", name_de: "Schlüssel", name_es: "Llaves", name_fr: "Clés"},
	Token: {name_en: "Tokens", name_de: "Marken", name_es: "Fichas", name_fr: "Jetons"},
	Dungeon: {name_en: "Dungeon", name_de: "Verlies", name_es: "Mazmorra", name_fr: "Donjon"},
	Festival: {name_en: "Festival", name_de: "Festival", name_es: "Festival", name_fr: "Festival"},
	Gathering: {name_en: "Gathering Tools", name_de: "Sammelwerkzeug", name_es: "Herramienta de recolección", name_fr: "Outil de récolte"},
	Contract: {name_en: "Permanent Contracts", name_de: "Vertrag permanenten", name_es: "Contrato permanente", name_fr: "Contrat permanent"},
	Converter: {name_en: "Converters", name_de: "Konverter", name_es: "Conversores", name_fr: "Convertisseurs"},
	Blueprint: {name_en: "Siege Blueprints", name_de: "Belagerungswaffe Blaupausen", name_es: "Planos arma de asedio", name_fr: "Plans arme de siège"},
	Toy: {name_en: "Toys and Stations", name_de: "Spielzeuge und Stationen", name_es: "Juguetes y Talleres", name_fr: "Jouets et Ateliers"},
	Music: {name_en: "Musical Instruments", name_de: "Musikinstrumente", name_es: "Instrumentos musicales", name_fr: "Instruments de musique"},
	Gem: {name_en: "Gem Store Items", name_de: "Edelsteinshop Gegenstandes", name_es: "Objetos tienda de gemas", name_fr: "Objets boutique aux gemmes"},
	TonicEndless: {name_en: "Endless Tonics", name_de: "Endloser Trank", name_es: "Tónicos inagotables", name_fr: "Toniques inépuisables"},
	TonicConsumable: {name_en: "Consumable Tonics", name_de: "Verbrauchsgegenstand Trank", name_es: "Tónicos consumibles", name_fr: "Toniques consommables", iscollapsed: true},
	Bundle: {name_en: "Bundles", name_de: "Umgebungswaffen", name_es: "Arma ambiental", name_fr: "Arme environnementale", iscollapsed: true},
	Consumable: {name_en: "Consumables", name_de: "Verbrauchsgegenstand", name_es: "Consumibles", name_fr: "Consommables", iscollapsed: true},
	Aura: {name_en: "Cosmetic Auras", name_de: "Kosmetik-Auren", name_es: "Auras cosméticos", name_fr: "Auras cosmétiques", iscollapsed: true},
	Legendary: {name_en: "Legendary Equipment", name_de: "Legendäre Ausrüstung", name_es: "Equipamientos legendarias", name_fr: "Équipements légendaires", iscollapsed: true}
};

/*
 * Catalog of common items.
 * u: Item ID of the container (tradeable) that unlocks the actual item (bound)
 * i: Item ID associated with that item
 * n: Name of item
 * p: Payment type to acquire the item, negative values are not added to the bank tabs' tally
 */
var GW2T_CATALOG_DATA = {
Key: [
	{i: 70827, n: "Pact Crowbar", p: {coin: 0}},
	{i: 71416, n: "Exalted Key", p: {map_ab: 8}},
	{i: 70892, n: "Vial of Chak Acid", p: {map_td: 8}},
	{i: 72210, n: "Machete", p: {token: 15}},
	{i: 66624, n: "Zephyrite Lockpick", p: {coin: 0}},
	{i: 67826, n: "Silverwastes Shovel", p: {coin: 0}},
	{i: 67777, n: "Bandit Skeleton Key", p: {coin: 0}},
	{i: 67981, n: "Essence of Nightmares", p: {coin: 0}},
	{i: 67979, n: "Key of Greater Nightmares", p: {coin: 0}},
	{i: 36708, n: "Black Lion Chest Key", p: {gem: 125}},
	{i: 19980, n: "Black Lion Chest Key", p: {gem: 125}},
	{i: 20316, n: "Black Lion Chest"},
	{i: 43992, n: "Black Lion Claim Ticket", p: {gem: 0}},
	{i: 43998, n: "Black Lion Claim Ticket Scrap", p: {gem: 0}},
	{i: 78474, n: "Black Lion Miniature Claim Ticket", p: {gem: 0}}
],
Token: [
	{i: 19721, n: "Glob of Ectoplasm"},
	{i: 19976, n: "Mystic Coin"},
	{i: 44941, n: "Watchwork Sprocket"},
	{i: 48884, n: "Pristine Toxic Spore Sample"},
	{i: 66608, n: "Pile of Silky Sand", p: {coin: 0}},
	{i: 72500, n: "Pact Scout's Mapping Materials", p: {karma: 5250}},
	{i: 46682, n: "Crystalline Ore", p: {coin: 0}},
	{i: 46731, n: "Pile of Bloodstone Dust", p: {coin: 0}},
	{i: 46733, n: "Dragonite Ore", p: {coin: 0}},
	{i: 46735, n: "Empyreal Fragment", p: {coin: 0}},
	{i: 24502, n: "Silver Doubloon"},
	{i: 20799, n: "Mystic Crystal", p: {spirit: 0.6}},
	{i: 20796, n: "Philosopher's Stone", p: {spirit: 0.1}},
	{i: 19925, n: "Obsidian Shard", p: {karma: 2100}},
	{i: 19677, n: "Gift of Exploration", p: {achievement: 0}},
	{i: 66766, n: "Unidentified Fossilized Insect", p: {coin: 0}},
	{i: 72205, n: "Chak Egg", p: {coin: 0}},
	{i: 74356, n: "Reclaimed Metal Plate", p: {coin: 0}},
	{i: 50025, n: "Blade Shard", p: {coin: 0}},
	{i: 20323, n: "Unidentified Dye"},
	{i: 67280, n: "Teleport to Friend", p: {gem: 0}},
	{i: 43766, n: "Tome of Knowledge", p: {achievement: 0}},
	{i: 68109, n: "Writ of Experience", p: {achievement: 0}},
	{i: 36507, n: "Custom Arena Time Token", p: {coin: 20000}},
	{i: 68110, n: "Potion of PvP Reward", p: {pvp: true}}
],
Dungeon: [
	{i: 78252, n: "Chest of Dungeoneering", p: {achievement: 0}},
	{i: 70438, n: "Fractal Encryption Key", p: {coin: 3000}},
	{i: 75919, n: "Fractal Encryption"},
	{i: 73834, n: "Fractal Research Page", p: {coin: 0}},
	{i: 72936, n: "Golden Fractal Relic", p: {coin: 0}},
	{i: 49424, n: "+1 Agony Infusion"}
],
Festival: [
	{i: 39752, n: "Bauble", p: {coin: 0}},
	{i: 41886, n: "Bauble Bubble", p: {coin: 0}},
	{i: 41824, n: "Continue Coin", p: {coin: 0}},
	{i: 46499, n: "Infinite Continue Coin", p: {gem: 600}},
	{i: 73693, n: "Mad King's Chest Key Fragment", p: {coin: 0}},
	{i: 36041, n: "Piece of Candy Corn"},
	{i: 47909, n: "Candy Corn Cob"},
	{i: 38449, n: "Ugly Wool Hat"},
	{i: 38448, n: "Ugly Wool Sock"},
	{i: 38450, n: "Ugly Wool Sweater"},
	{i: 43319, n: "Piece of Zhaitaffy"},
	{i: 43320, n: "Jorbreaker"},
	{i: 44640, n: "Queen's Gauntlet Entrance Ticket", p: {coin: 0}}
],
Gathering: [
	{i: 67032, n: "Fused Molten Sickle", p: {gem: 1000}},
	{i: 67030, n: "Fused Molten Logging Axe", p: {gem: 1000}},
	{i: 48933, n: "Molten Alliance Mining Pick", p: {gem: 1000}},
	{i: 67029, n: "Tireless Logging Minion", p: {gem: 1000}},
	{i: 67063, n: "Tireless Harvesting Minion", p: {gem: 1000}},
	{i: 48932, n: "Bone Pick", p: {gem: 1000}},
	{i: 67395, n: "Reap-r-Tron", p: {gem: 1000}},
	{i: 67394, n: "Log-r-Tron", p: {gem: 1000}},
	{i: 67396, n: "Mine-r-Tron", p: {gem: 1000}},
	{i: 49308, n: "Thresher-Sickle 5000", p: {gem: 1000}},
	{i: 48931, n: "Chop-It-All Logging Axe", p: {gem: 1000}},
	{i: 47897, n: "Watchwork Mining Pick", p: {gem: 1000}},
	{i: 69478, n: "Mad Scientist's Harvesting Tool", p: {gem: 1000}},
	{i: 68799, n: "Mad Scientist's Logging Tool", p: {gem: 1000}},
	{i: 68905, n: "Mad Scientist's Mining Tool", p: {gem: 1000}},
	{i: 70044, n: "Butterfly Harvesting Flute", p: {gem: 1000}},
	{i: 69921, n: "Swarm Logging Flute", p: {gem: 1000}},
	{i: 69958, n: "Firefly Mining Flute", p: {gem: 1000}},
	{i: 48930, n: "Consortium Harvesting Sickle", p: {gem: 1000}},
	{i: 48934, n: "Jack-in-the-Box Scythe", p: {gem: 1000}},
	{i: 48955, n: "Dreamcleaver Logging Axe", p: {gem: 1000}},
	{i: 48825, n: "Frost Wasp Logging Tool", p: {gem: 1000}},
	{i: 78731, n: "Cosmic Mining Tool", p: {gem: 1000}}
],
Contract: [
	{i: 67027, n: "Silver-Fed Salvage-o-Matic", p: {gem: 500}},
	{i: 44602, n: "Copper-Fed Salvage-o-Matic", p: {gem: 800}},
	{i: 19986, n: "Black Lion Salvage Kit", p: {gem: 300}},
	{i: 23045, n: "Mystic Salvage Kit", p: {gem: -135}},
	{i: 20349, n: "Upgrade Extractor", p: {gem: 200}},
	{u: 35986, i: 35976, n: "Personal Trader Express"},
	{u: 35985, i: 35977, n: "Personal Merchant Express"},
	{u: 35984, i: 35978, n: "Permanent Bank Access Express"},
	{u: 38507, i: 38506, n: "Permanent Self-Style Hair Kit"},
	{u: 78455, i: 78217, n: "Endless Repair Canister"},
	{i: 35728, n: "Mystic Forge Conduit"},
	{u: 70010, i: 70013, n: "Mystic Forge Conduit"},
	{i: 66927, n: "Home Portal Stone", p: {gem: 900}},
	{i: 20030, n: "Hall of Monuments Portal Stone", p: {coin: 0}},
	{i: 49149, n: "Royal Terrace Pass", p: {gem: 1000}},
	{i: 50104, n: "Captain's Airship Pass", p: {gem: 1000}},
	{i: 76293, n: "Rata Sum Portal Scroll", p: {craft: true}},
	{i: 70968, n: "The Grove Portal Scroll", p: {craft: true}},
	{i: 71577, n: "Divinity's Reach Portal Scroll", p: {craft: true}},
	{i: 76065, n: "Ebonhawke Portal Scroll", p: {craft: true}},
	{i: 76630, n: "Black Citadel Portal Scroll", p: {craft: true}},
	{i: 76827, n: "Hoelbrak Portal Scroll", p: {craft: true}},
	{i: 73024, n: "Lion's Arch Portal Scroll", p: {craft: true}},
	{i: 78177, n: "Permanent Portable Provisioner", p: {coin: 10000}}
],
Converter: [
	{i: 66999, n: "Mawdrey II", p: {craft: true}},
	{i: 68369, n: "Star of Gratitude", p: {achievement: 0}},
	{i: 69887, n: "Princess", p: {achievement: 0}},
	{i: 77093, n: "Herta", p: {achievement: 0}},
	{i: 49501, n: "Tarrktun Personal Delivery Portal", p: {coin: 100000000}},
	{i: 67270, n: "Karmic Converter", p: {achievement: 0}},
	{i: 72606, n: "Fractal Reliquary", p: {achievement: 0}},
	{i: 73718, n: "Ley-Energy Matter Converter", p: {achievement: 0}},
	{i: 67393, n: "Candy Corn Gobbler", p: {gem: 300}}
],
Blueprint: [
	{i: 74677, n: "Guild Flame Ram Blueprint"},
	{i: 76483, n: "Guild Shield Generator Blueprint"},
	{i: 39715, n: "Guild Arrow Cart Blueprints"},
	{i: 39717, n: "Guild Trebuchet Blueprints"},
	{i: 42003, n: "Guild Ballista Blueprints"},
	{i: 42004, n: "Guild Catapult Blueprints"},
	{i: 74323, n: "Guild Siege Golem Blueprints"},
	{i: 21119, n: "Guild Catapult Blueprints"},
	{i: 21161, n: "Flame Ram Blueprints"},
	{i: 75311, n: "Shield Generator Blueprint"},
	{i: 21156, n: "Arrow Cart Blueprints"},
	{i: 21157, n: "Ballista Blueprints"},
	{i: 21158, n: "Catapult Blueprints"},
	{i: 21160, n: "Trebuchet Blueprints"},
	{i: 21159, n: "Alpha Siege Golem Blueprints"},
	{i: 21259, n: "Omega Siege Golem Blueprints"},
	{i: 21263, n: "Superior Flame Ram Blueprints"},
	{i: 74592, n: "Superior Shield Generator Blueprint"},
	{i: 21260, n: "Superior Arrow Cart Blueprints"},
	{i: 21261, n: "Superior Ballista Blueprints"},
	{i: 21262, n: "Superior Catapult Blueprints"},
	{i: 21264, n: "Superior Trebuchet Blueprints"},
	{i: 42834, n: "Supply Removal Trap", p: {badge: 15}},
	{i: 41291, n: "Stealth Disruptor Trap", p: {badge: 15}},
	{i: 67348, n: "Siege Disabler", p: {badge: 15}}
],
Toy: [
	{i: 20312, n: "How to Dance, Volume 1", p: {gem: 400}},
	{i: 36172, n: "Bobblehead Laboratory", p: {gem: 400}},
	{i: 43881, n: "Bottomless Belcher's Bluff Kit", p: {coin: 1000000}},
	{i: 43901, n: "Zephyr Sanctum Model", p: {laurel: 25}},
	{i: 66342, n: "Water Fight Balloon Bucket", p: {gem: 500}},
	{i: 67881, n: "Aviator's Memory Box", p: {gem: 400}},
	{i: 20000, n: "Box o' Fun", p: {gem: -64}},
	{i: 41911, n: "Super Adventure Box o' Fun", p: {bubble: 3}},
	{i: 49931, n: "Riding Broom", p: {gem: 250}},
	{i: 49932, n: "Enchanted Broom", p: {gem: 0}},
	{i: 49948, n: "Sonic Tunneling Tool", p: {gem: 250}},
	{i: 67356, n: "Magic Carpet", p: {gem: 250}},
	{i: 78771, n: "Electromagnetic Ascender", p: {gem: 250}},
	{i: 49933, n: "Bouquet of Roses", p: {gem: 250}},
	{i: 43528, n: "Box of Chocolates", p: {gem: 250}},
	{i: 49930, n: "Boxing Gloves", p: {gem: 0}},
	{i: 49939, n: "Frying Pan", p: {gem: 0}},
	{i: 64734, n: "Fancy Winter Crystal Scepter", p: {gem: 0}},
	{i: 49940, n: "Executioner Axe Toy", p: {gem: 0}},
	{i: 49941, n: "Bloody Prince's Staff Toy", p: {gem: 0}},
	{i: 49942, n: "Pirate Sword", p: {gem: 0}},
	{i: 49943, n: "Scepter of Thorn", p: {gem: 0}},
	{i: 42967, n: "Lightning Kite", p: {gem: 500}},
	{i: 43076, n: "Wind Kite", p: {gem: 500}},
	{i: 43487, n: "Sun Kite", p: {gem: 500}},
	{i: 43930, n: "Guild Kite", p: {gem: 500}},
	{u: 66893, i: 66897, n: "Prosperity Mine Kite"},
	{u: 66895, i: 66898, n: "Crystal Shard Kite"},
	{u: 66896, i: 66900, n: "Ventari Follower Kite"},
	{i: 44638, n: "Hot Air Balloon Souvenir", p: {laurel: 25}},
	{i: 67835, n: "Pact Airship Balloon", p: {gem: 500}},
	{i: 68614, n: "Red Lantern", p: {gem: 250}},
	{i: 68650, n: "Ram Balloon", p: {gem: 250}},
	{i: 44637, n: "Flames of Kryta", p: {achievement: 0}},
	{i: 66961, n: "Birthday Blaster", p: {starting: true}}
],
Music: [
	{i: 38128, n: "Choir Bell"},
	{i: 38129, n: "Unbreakable Choir Bell"},
	{u: 68362, i: 68361, n: "Magnanimous Choir Bell"},
	{i: 42888, n: "Marriner's Horn", p: {gem: 800}},
	{i: 42973, n: "Flute", p: {gem: 800}},
	{i: 36174, n: "Musical Bass Guitar", p: {gem: 800}},
	{i: 43526, n: "Musical Frame Drum", p: {gem: 800}},
	{i: 44883, n: "Musical Harp", p: {gem: 800}},
	{i: 66323, n: "Musical Lute", p: {gem: 800}},
	{i: 67391, n: "Haunted Gramophone", p: {gem: 600}},
	{i: 46500, n: "World 1 Super Boom Box", p: {bubble: 35}},
	{i: 46504, n: "World 2 Super Boom Box", p: {bubble: 35}},
	{i: 76072, n: "Nuhoch Warbler", p: {starting: true}}
],
Gem: [
	{i: 35991, n: "Total Makeover Kit", p: {gem: 280}},
	{i: 35987, n: "Self-Style Hair Kit", p: {gem: 200}},
	{i: 35989, n: "Name Change Contract", p: {gem: 800}},
	{i: 19992, n: "Instant Repair Canister", p: {gem: -30}},
	{i: 19983, n: "Mystic Forge Stone", p: {gem: -45}},
	{i: 19996, n: "Revive Orb", p: {gem: -180}},
	{i: 19984, n: "Bank Access Express", p: {gem: -25}},
	{i: 20018, n: "Merchant Express", p: {gem: -25}},
	{i: 20017, n: "Trading Post Express", p: {gem: -25}},
	{i: 42877, n: "Metabolic Primer", p: {gem: 105}},
	{i: 8469, n: "Utility Primer", p: {gem: 105}},
	{i: 42976, n: "Boost Enchantment Powder", p: {coin: 1000}},
	{i: 20005, n: "Heroic Booster", p: {gem: -105}},
	{i: 20002, n: "Experience Booster", p: {gem: -80}},
	{i: 20003, n: "Item Booster", p: {gem: -80}},
	{i: 67836, n: "Celebration Booster", p: {achievement: 0}},
	{i: 45003, n: "Birthday Booster", p: {achievement: 0}}
],
TonicEndless: [
	{i: 72709, n: "Mystic Chromatic Ooze", p: {craft: true}},
	{i: 50014, n: "Selfless Potion", p: {achievement: 0}},
	{i: 50048, n: "Thoughtless Potion", p: {achievement: 0}},
	{i: 43956, n: "Ellen Kiel Representation Button"},
	{i: 43957, n: "Evon Gnashblade Representation Button"},
	{u: 77637, i: 77568, n: "Enchanted Snowball"},
	{i: 35747, n: "Cold Potion"},
	{i: 35748, n: "Hard Potion"},
	{i: 35749, n: "Charged Potion"},
	{i: 35750, n: "Warm Potion"},
	{u: 49145, i: 20319, n: "Endless Mystery Tonic (beast)"},
	{u: 49146, i: 20320, n: "Endless Mystery Tonic (furniture)"},
	{u: 49147, i: 20321, n: "Endless Mystery Tonic (forest)"},
	{i: 36106, n: "Endless Halloween Tonic"},
	{i: 36176, n: "Endless Riding Clothes Tonic"},
	{i: 36179, n: "Endless Common Clothing Tonic"},
	{i: 36180, n: "Endless Khaki Clothing Tonic"},
	{i: 36183, n: "Endless Designer Hoodie Clothing Tonic"},
	{i: 36184, n: "Endless Leather Hoodie Clothing Tonic"},
	{i: 36185, n: "Endless Silk Brocade Clothing Tonic"},
	{i: 36186, n: "Endless Layered Vest Clothing Tonic"},
	{i: 36187, n: "Endless Casual Clothing Tonic"},
	{i: 36188, n: "Endless Striped Silk Clothing Tonic"},
	{i: 36189, n: "Endless Cherry Blossom Clothing Tonic"},
	{i: 36190, n: "Endless Country Lace Clothing Tonic"},
	{i: 36191, n: "Endless Ornate Clothing Tonic"},
	{i: 36192, n: "Endless Dragon Emblem Clothing Tonic", p: {gem: 0}},
	{i: 36200, n: "Endless Casual Hoodie Clothing Tonic"},
	{i: 36727, n: "Endless Karka Tonic"},
	{i: 38115, n: "Endless Toymaker's Tonic"},
	{i: 38116, n: "Endless Toy Ventari Tonic", p: {craft: true}},
	{i: 38117, n: "Endless Plush Griffon Tonic", p: {craft: true}},
	{i: 38118, n: "Endless Toy Golem Tonic", p: {craft: true}},
	{i: 38119, n: "Endless Toy Soldier Tonic", p: {craft: true}},
	{i: 38120, n: "Endless Princess Doll Tonic", p: {craft: true}},
	{i: 38121, n: "Endless Gift Dolyak Tonic"},
	{i: 39101, n: "Endless Mystery Cat Tonic", p: {laurel: 100}},
	{i: 39711, n: "Endless Guild Banner Tonic", p: {commendation: 20}},
	{i: 50040, n: "Endless Mystery Quaggan Tonic"},
	{i: 50042, n: "Endless Blue Quaggan Tonic"},
	{i: 50043, n: "Endless Pink Quaggan Tonic"},
	{i: 50046, n: "Endless Black Quaggan Tonic"},
	{i: 50047, n: "Endless Green Quaggan Tonic"},
	{i: 49277, n: "Endless Fractal Tonic", p: {coin: 0}},
	{i: 66214, n: "Endless Dolyak Calf Tonic", p: {laurel: 25}},
	{u: 66926, i: 66768, n: "Endless Monkey King Tonic"},
	{u: 67386, i: 67362, n: "Endless Bottle of Batwing Brew"},
	{i: 67784, n: "Endless Dust Mite Tonic", p: {map_sw: 800}},
	{u: 67783, i: 67805, n: "Endless Arid Devourer Tonic"},
	{i: 68046, n: "Endless Skritt Burglar Tonic", p: {achievement: 0}},
	{i: 68058, n: "Endless Mordrem Husk Tonic", p: {map_sw: 800}},
	{u: 68065, i: 68064, n: "Endless Mordrem Thrasher Tonic"},
	{i: 68368, n: "Endless Gift Box Tonic", p: {achievement: 0}},
	{i: 68520, n: "Endless Mordrem Troll Tonic", p: {map_sw: 800}},
	{u: 68512, i: 68530, n: "Endless Mordrem Teragriff Tonic"},
	{i: 69651, n: "Endless Interface Crafter Golem Tonic", p: {achievement: 0}},
	{i: 73577, n: "Endless Beetle Tonic", p: {map_vb: 1000}},
	{i: 74186, n: "Endless Spotted Beetle Tonic", p: {map_ds: 250}},
	{u: 73150, i: 70619, n: "Endless Exalted Bastion Tonic"},
	{i: 76174, n: "Endless Exalted Caster Tonic", p: {map_ab: 1000}},
	{u: 75214, i: 75636, n: "Endless Mushroom Tonic"},
	{u: 72072, i: 73310, n: "Endless Mushroom Queen Tonic"},
	{u: 73677, i: 71739, n: "Endless Mushroom King Tonic"},
	{i: 71680, n: "Endless Mushroom Emperor Tonic", p: {craft: true}},
	{u: 75615, i: 71683, n: "Endless Chak Slinger Tonic"},
	{u: 73663, i: 72894, n: "Endless Chak Drone Tonic"},
	{u: 72203, i: 74594, n: "Endless Chak Zapper Tonic"},
	{i: 77101, n: "Endless Nuhoch Tonic", p: {map_td: 1000}},
	{u: 73194, i: 77167, n: "Endless Nuhoch Crusher Tonic"},
	{i: 42403, n: "Infinite Molten Berserker Tonic"},
	{i: 43352, n: "Infinite Aetherized Tonic"},
	{i: 44720, n: "Infinite Watchknight Tonic", p: {laurel: 25}},
	{i: 49133, n: "Infinite Toxic Krait Tonic", p: {craft: true}},
	{i: 77983, n: "Infinite Slubling Tonic"}
],
TonicConsumable: [
	{i: 8639, n: "Ghost Owl Feather", p: {karma: 147}},
	{i: 8671, n: "Dolyak Tincture", p: {coin: 128}},
	{i: 8725, n: "Golem Transformation Tincture", p: {coin: 128}},
	{i: 8748, n: "Matlal Enchanted Pig Truffle", p: {karma: 168}},
	{i: 8750, n: "Plant Dog Transformation", p: {karma: 329}},
	{i: 8755, n: "Essence of Jellyfish", p: {coin: 208}},
	{i: 8640, n: "Grawl Snowman Potion"},
	{i: 8644, n: "Potion of Jackalope Transformation", p: {coin: 120}},
	{i: 8656, n: "Potion of Ettin Essence", p: {karma: 245}},
	{i: 8691, n: "Bovine Potion", p: {coin: 200}},
	{i: 8700, n: "Potion of Ascalonian Mages"},
	{i: 8776, n: "Potion of Hylek Transformation", p: {karma: 140}},
	{i: 8786, n: "Hylek Green Hue Potion", p: {karma: 84}},
	{i: 8787, n: "Hylek Yellow Hue Potion", p: {karma: 91}},
	{i: 8788, n: "Hylek Blue Hue Potion", p: {karma: 91}},
	{i: 8789, n: "Hylek Orange Hue Potion", p: {karma: 91}},
	{i: 8790, n: "Hylek Red Hue Potion", p: {coin: 104}},
	{i: 35743, n: "Warm Potion"},
	{i: 35744, n: "Cold Potion"},
	{i: 35745, n: "Hard Potion"},
	{i: 35746, n: "Charged Potion"},
	{i: 36725, n: "Potion of Young Karka Transformation", p: {karma: 105}},
	{i: 8670, n: "Murellow Tonic", p: {coin: 88}},
	{i: 8699, n: "Ogre Pet Tonic", p: {coin: 400}},
	{i: 8706, n: "Ogre Pet Tonic", p: {coin: 392}},
	{i: 8717, n: "Growth Tonic", p: {coin: 304}},
	{i: 8718, n: "Hazmat Suit Transformation Tonic", p: {coin: 320}},
	{i: 8729, n: "Quaggan Tonic", p: {coin: 128}},
	{i: 8896, n: "Ghostly Tonic"},
	{i: 8897, n: "Knavish Tonic"},
	{i: 8899, n: "Overgrown Tonic"},
	{i: 8898, n: "Tonic of the Moletariate"},
	{i: 8900, n: "Fiery Tonic"},
	{i: 8902, n: "Ursan Tonic"},
	{i: 8903, n: "Sinister Automatonic"},
	{i: 8901, n: "Phantasmal Tonic"},
	{i: 20314, n: "Mystery Tonic (furniture)", p: {craft: true}},
	{i: 20315, n: "Mystery Tonic (forest)", p: {craft: true}},
	{i: 20318, n: "Mystery Tonic (beast)", p: {craft: true}},
	{i: 20322, n: "Snow Owl Tonic", p: {craft: true}},
	{i: 20327, n: "Eagle Tonic", p: {craft: true}},
	{i: 20328, n: "Owl Tonic", p: {craft: true}},
	{i: 20329, n: "Golemite Tonic", p: {gem: 0}},
	{i: 20330, n: "Jackalope Tonic", p: {craft: true}},
	{i: 20331, n: "Leopard Tonic", p: {craft: true}},
	{i: 20332, n: "Minotaur Tonic", p: {craft: true}},
	{i: 20333, n: "Blue Moa Tonic", p: {craft: true}},
	{i: 20334, n: "Pink Moa Tonic", p: {craft: true}},
	{i: 20335, n: "Pig Tonic", p: {craft: true}},
	{i: 20336, n: "Plant Wolf Tonic", p: {craft: true}},
	{i: 20337, n: "Wolf Tonic", p: {craft: true}},
	{i: 20338, n: "Ice Elemental Tonic", p: {gem: 0}},
	{i: 20339, n: "Skritt Tonic", p: {craft: true}},
	{i: 20340, n: "Imp Tonic", p: {craft: true}},
	{i: 20341, n: "Eagle Raptor Tonic", p: {craft: true}},
	{i: 20343, n: "Krait Tonic", p: {craft: true}},
	{i: 20344, n: "Ram Tonic", p: {craft: true}},
	{i: 20346, n: "Stag Tonic", p: {craft: true}},
	{i: 20347, n: "Boar Tonic", p: {craft: true}},
	{i: 20348, n: "Devourer Tonic", p: {craft: true}},
	{i: 20350, n: "Ooze Tonic", p: {craft: true}},
	{i: 20351, n: "Skale Tonic", p: {craft: true}},
	{i: 20352, n: "Spider Tonic", p: {craft: true}},
	{i: 20353, n: "Floater Tonic", p: {craft: true}},
	{i: 20354, n: "Steam Ogre Tonic", p: {craft: true}},
	{i: 36097, n: "Multicolored Ooze Tonic"},
	{i: 36104, n: "Halloween Tonic"},
	{i: 36107, n: "Concentrating Halloween Tonic"},
	{i: 36108, n: "Plastic Spider Tonic"},
	{i: 36109, n: "Candy Corn Tonic"},
	{i: 36114, n: "Mummy Tonic"},
	{i: 36115, n: "Ruminant Tonic"},
	{i: 36380, n: "Spooky Ghost Tonic", p: {achievement: 0}},
	{i: 36381, n: "Spooky Zombie Tonic", p: {achievement: 0}},
	{i: 36382, n: "Spooky Skeleton Tonic", p: {achievement: 0}},
	{i: 36447, n: "Triple-Luck Tonic", p: {coin: 8}},
	{i: 36726, n: "Karka Tonic", p: {coin: 0}},
	{i: 38061, n: "Snowman Tonic"},
	{i: 38062, n: "Festive Golem Tonic"},
	{i: 38063, n: "Reindeer Tonic"},
	{i: 38122, n: "Toy Ventari Tonic"},
	{i: 38123, n: "Toy Soldier Tonic"},
	{i: 38124, n: "Princess Doll Tonic"},
	{i: 38125, n: "Gift Dolyak Tonic"},
	{i: 38126, n: "Toy Golem Tonic"},
	{i: 38127, n: "Plush Griffon Tonic"},
	{i: 39696, n: "Guild Banner Tonic", p: {commendation: 1}},
	{i: 43351, n: "Aetherized Tonic"},
	{i: 50038, n: "Blue Quaggan Tonic"},
	{i: 50039, n: "Pink Quaggan Tonic"},
	{i: 50044, n: "Green Quaggan Tonic"},
	{i: 50045, n: "Black Quaggan Tonic"},
	{i: 67379, n: "Bottle of Batwing Brew"}
],
Bundle: [
	{i: 24, n: "Sealed Package of Snowballs"},
	{i: 8643, n: "Snowballs (Children)", p: {coin: 40}},
	{i: 8646, n: "Jafri's Package of Snowballs", p: {coin: 200}},
	{i: 8777, n: "Snowballs", p: {coin: 40}},
	{i: 7693, n: "Mine Kit (consumable)", p: {coin: 24}},
	{i: 8653, n: "Mine (Whispers Agent)", p: {coin: 32}},
	{i: 8684, n: "Charr Mine", p: {karma: 42}},
	{i: 8715, n: "Mine (consumable)", p: {coin: 80}},
	{i: 8647, n: "Smoke Bomb (environmental weapon)", p: {coin: 34}},
	{i: 8650, n: "Ghost Bomb", p: {coin: 32}},
	{i: 8685, n: "Fire Bomb (Consumable)", p: {karma: 35}},
	{i: 8745, n: "Bandit's Improvised Bomb", p: {coin: 16}},
	{i: 8763, n: "Bomb (consumable)", p: {coin: 40}},
	{i: 8795, n: "Seaweed Bomb", p: {coin: 104}},
	{i: 8695, n: "Explosive Charge", p: {coin: 16}},
	{i: 8739, n: "Miner's Explosive Charge", p: {karma: 35}},
	{i: 8791, n: "Vigil Clearing Device", p: {coin: 40}},
	{i: 8464, n: "Golem in a Box", p: {coin: 160}},
	{i: 8778, n: "Mini Golem Bomb (consumable)", p: {coin: 40}},
	{i: 8663, n: "Wood Plank (80 copper)", p: {coin: 80}},
	{i: 8672, n: "Wood Plank (Quartermaster Thraeingr)", p: {coin: 180}},
	{i: 8677, n: "Plank (consumable)", p: {coin: 56}},
	{i: 8692, n: "Plank (level 10 consumable)", p: {coin: 72}},
	{i: 8693, n: "Plank (Farrin Quickpaw)", p: {coin: 72}},
	{i: 8721, n: "Plank (Tactician Megill)", p: {coin: 128}},
	{i: 8744, n: "Wood Plank", p: {coin: 24}},
	{i: 8759, n: "Wooden Plank (consumable)", p: {coin: 32}},
	{i: 8768, n: "Plank (Supplier Mikal)", p: {coin: 40}},
	{i: 8769, n: "Plank (Supplier Mikal)", p: {coin: 40}},
	{i: 8474, n: "Sentinel Rifle", p: {coin: 8}},
	{i: 8669, n: "Sonic Rifle", p: {coin: 88}},
	{i: 8674, n: "Dredge Rifle", p: {coin: 128}},
	{i: 8728, n: "Experimental Laser Weapon Variant VL-992", p: {coin: 128}},
	{i: 8735, n: "Bombardment Target Marker", p: {coin: 128}},
	{i: 8756, n: "Frost Gun", p: {coin: 40}},
	{i: 8678, n: "Rock (level 22)", p: {coin: 56}},
	{i: 8749, n: "Rock", p: {coin: 40}},
	{i: 8659, n: "Boulder (40 copper)", p: {coin: 40}},
	{i: 8665, n: "Boulder (consumable)", p: {coin: 80}},
	{i: 8741, n: "Dam Debris", p: {karma: 14}},
	{i: 8661, n: "Ettin Gunk", p: {coin: 120}},
	{i: 8675, n: "Ball of Gunk", p: {coin: 56}},
	{i: 8766, n: "Gunk (consumable)", p: {coin: 40}},
	{i: 8660, n: "Peg Leg (Blasi)", p: {coin: 72}},
	{i: 8753, n: "Wooden Leg", p: {coin: 40}},
	{i: 8758, n: "Pirate's Peg Leg", p: {coin: 32}},
	{i: 8680, n: "Gear (consumable)", p: {coin: 56}},
	{i: 8712, n: "Shiny Stolen Gear", p: {coin: 88}},
	{i: 8765, n: "Gear (Forager Hitkiti)", p: {coin: 40}},
	{i: 8803, n: "Gear (Qabb)", p: {coin: 24}},
	{i: 8648, n: "Molachev Cocktail", p: {coin: 16}},
	{i: 8757, n: "Molachev Cocktail (level 52)", p: {coin: 96}},
	{i: 8636, n: "Medical Pack", p: {karma: 77}},
	{i: 8681, n: "MedKit", p: {coin: 56}},
	{i: 8697, n: "Medical Kit", p: {coin: 16}},
	{i: 8736, n: "Pact Med Kit", p: {coin: 128}},
	{i: 8772, n: "Medical Kit", p: {coin: 16}},
	{i: 8687, n: "Flaming Effigy Piece", p: {karma: 21}},
	{i: 8705, n: "Effigy Fragment", p: {coin: 104}},
	{i: 8658, n: "Cannonball (Vahlindria)", p: {coin: 72}},
	{i: 8720, n: "Cannonball", p: {coin: 128}},
	{i: 8724, n: "Cannonball (Tactician Megill)", p: {coin: 128}},
	{i: 8727, n: "Cannonball", p: {coin: 128}},
	{i: 8760, n: "Cannonball (consumable)", p: {coin: 32}},
	{i: 8676, n: "Underwater Net", p: {coin: 40}},
	{i: 8723, n: "Net", p: {coin: 128}},
	{i: 8701, n: "Charrzooka (consumable)", p: {coin: 104}},
	{i: 8707, n: "Charrzooka", p: {coin: 104}},
	{i: 8713, n: "Charrzooka (Crusader Boomshaker)", p: {coin: 88}},
	{i: 8734, n: "Flame Thrower", p: {coin: 128}},
	{i: 8792, n: "Jezza's Flamethrower", p: {coin: 96}},
	{i: 8690, n: "Fireworks", p: {coin: 72}},
	{i: 8747, n: "Fireworks", p: {coin: 32}},
	{i: 8754, n: "Fireworks", p: {coin: 32}},
	{i: 8761, n: "Drake Egg", p: {coin: 32}},
	{i: 8767, n: "Drake Egg (Forager Hitkiti)", p: {coin: 40}},
	{i: 36032, n: "Rotten Egg", p: {coin: 0}},
	{i: 8654, n: "Pot of Hylek Poison", p: {coin: 32}},
	{i: 8779, n: "Hylek Poison Pot (Tlalli)", p: {coin: 16}},
	{i: 8782, n: "Pot Of Hylek Poison", p: {coin: 16}},
	{i: 8793, n: "Hylek Poison Pot", p: {coin: 104}},
	{i: 8783, n: "Termite Shovel", p: {coin: 16}},
	{i: 8802, n: "Shovel", p: {coin: 40}},
	{i: 8794, n: "Hylek Blowgun", p: {coin: 96}},
	{i: 8800, n: "Hylek Blowgun (Lonatl Grounds)", p: {coin: 40}},
	{i: 8652, n: "Ettin Club", p: {coin: 32}},
	{i: 8662, n: "Rusty Scrap (consumable)", p: {coin: 80}},
	{i: 8664, n: "Metal Rod", p: {coin: 80}},
	{i: 8667, n: "Stout Ale Keg", p: {coin: 80}},
	{i: 8668, n: "Jotun Greatsword (consumable)", p: {coin: 80}},
	{i: 8679, n: "Bottle", p: {coin: 56}},
	{i: 8682, n: "Cattle Prod (consumable)", p: {karma: 35}},
	{i: 8709, n: "Grawl Ritual Totem", p: {coin: 80}},
	{i: 8710, n: "Fighting Pit Training Sword", p: {coin: 80}},
	{i: 8751, n: "Toy Wooden Sword", p: {coin: 40}},
	{i: 8714, n: "Ascalon Tome", p: {coin: 80}},
	{i: 8722, n: "Orrian Driftwood", p: {coin: 128}},
	{i: 8732, n: "Power Matrix", p: {coin: 128}},
	{i: 8743, n: "Bone (consumable)", p: {karma: 35}},
	{i: 8770, n: "Seraph Banner", p: {coin: 40}},
	{i: 8773, n: "Inquest Golem Arm", p: {karma: 14}},
	{i: 8780, n: "Spiky Fruit", p: {coin: 16}},
	{i: 36031, n: "Toilet Paper", p: {coin: 0}}
],
Consumable: [
	{i: 8655, n: "Experimental Teleportation Gun", p: {coin: 32}},
	{i: 8733, n: "Experimental Rifle", p: {coin: 128}},
	{i: 8698, n: "Ogre Pet Whistle", p: {coin: 104}},
	{i: 8702, n: "Fire Elemental Powder", p: {coin: 104}},
	{i: 8703, n: "Deployable Thumper Turret", p: {coin: 104}},
	{i: 8704, n: "Deployable Mortar Kit", p: {coin: 104}},
	{i: 8752, n: "Healing Seed Pod", p: {coin: 40}},
	{i: 8781, n: "Mortar Seed Turret", p: {coin: 16}},
	{i: 8796, n: "Turret Seed", p: {coin: 104}},
	{i: 8711, n: "Jar of Harpy Pheromones", p: {coin: 88}},
	{i: 8746, n: "Jar of Bees", p: {coin: 24}},
	{i: 67377, n: "Vial of Maize Balm"},
	{i: 8686, n: "Ash Legion Spy Kit", p: {karma: 28}},
	{i: 8730, n: "Spy Kit", p: {coin: 128}},
	{i: 8764, n: "Harpy Feathers", p: {coin: 40}},
	{i: 8801, n: "Order of Whispers Spy Kit", p: {coin: 16}},
	{i: 38051, n: "Winter Warband Festive Mortar"},
	{i: 43882, n: "Belcher's Bluff Kit", p: {coin: 400}},
	{i: 44642, n: "Watchwork Portal Device", p: {craft: true}},
	{i: 45027, n: "Twisted Watchwork Portal Device"}
],
Aura: [
	{i: 68440, n: "Preserved Queen Bee"},
	{i: 77594, n: "Preserved Queen Bee"},
	{i: 72021, n: "Chak Egg Sac"},
	{i: 76063, n: "Vial of Liquid Aurillium"},
	{i: 77274, n: "Ghostly Infusion"},
	{i: 77303, n: "Ghostly Infusion"},
	{i: 77310, n: "Ghostly Infusion"},
	{i: 77316, n: "Ghostly Infusion"},
	{i: 77366, n: "Ghostly Infusion"},
	{i: 77394, n: "Ghostly Infusion"},
	{i: 67375, n: "Poly-luminescent Undulating Refractor (Black)"},
	{i: 67370, n: "Poly-luminescent Undulating Refractor (Green)"},
	{i: 67372, n: "Poly-luminescent Undulating Refractor (Orange)"},
	{i: 78012, n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: 78052, n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: 78054, n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: 78079, n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: 78086, n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: 78090, n: "Moto's Unstable Bauble Infusion: Blue", p: {achievement: 0}},
	{i: 78016, n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: 78028, n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: 78030, n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: 78031, n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: 78057, n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}},
	{i: 78097, n: "Moto's Unstable Bauble Infusion: Red", p: {achievement: 0}}
],
Legendary: [
	{i: 30684, n: "Frostfang"},
	{i: 30692, n: "The Moot"},
	{i: 30699, n: "Bolt"},
	{i: 30687, n: "Incinerator"},
	{i: 30693, n: "Quip"},
	{i: 30695, n: "Meteorlogicus"},
	{i: 30688, n: "The Minstrel"},
	{i: 30696, n: "The Flameseeker Prophecies"},
	{i: 30700, n: "Rodgort"},
	{i: 30702, n: "Howler"},
	{i: 30703, n: "Sunrise"},
	{i: 30704, n: "Twilight"},
	{i: 30689, n: "Eternity"},
	{i: 30690, n: "The Juggernaut"},
	{i: 30685, n: "Kudzu"},
	{i: 30686, n: "The Dreamer"},
	{i: 30694, n: "The Predator"},
	{i: 30698, n: "The Bifrost"},
	{i: 30691, n: "Kamohoali'i Kotaki"},
	{i: 30697, n: "Frenzy"},
	{i: 30701, n: "Kraitkin"},
	{i: 76158, n: "Astralaria", p: {craft: true}},
	{i: 72713, n: "HOPE", p: {craft: true}},
	{i: 78556, n: "Chuka and Champawat", p: {craft: true}},
	{i: 71383, n: "Nevermore", p: {craft: true}},
	{i: 77474, n: "The Ascension", p: {craft: true}},
	{i: 74155, n: "Ad Infinitum", p: {craft: true}}
]
};
