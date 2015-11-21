/*
 * This file is used by http://gw2timer.com/collectible
 * Collectible items map data. Needle properties:
 * n: number
 * c: coordinates
 * i: image URL (optional)
 * t: tooltip text (optional)
 * l: label text (optional, used instead of number over the map marker)
 * e: extreme enum (optional, whether it is the start (0), substart (1), subfinish (2), or finish (3) point)
 */

var GW2T_COLLECTIBLE_DATA = {
// Must have same name as a Checklist object
BuriedChests: {
	name_en: "Dry Top Buried Locked Chest",
	name_de: "Trockenkuppe Vergrabene Truhen",
	name_es: "Cima Seca Cofres Enterrados",
	name_fr: "Cimesèche Coffres Enterrés",
	color: "cornsilk",
	view: "dry",
	wiki: "http://wiki.guildwars2.com/wiki/Buried_Locked_Chest",
	credit: "http://www.mattsta.ninja/dry-top/",
	needles: [
	{n: 1, c: [5197, 16321], i: "http://i.imgur.com/7pbSOkM.png"},
	{n: 2, c: [5267, 16289], i: "http://i.imgur.com/NvmBoaw.png"},
	{n: 3, c: [5276, 16256], i: "http://i.imgur.com/Xdf8z7Q.png"},
	{n: 4, c: [5310, 16186], i: "http://i.imgur.com/Bw6OTEN.png"},
	{n: 5, c: [5396, 16252], i: "http://i.imgur.com/tOMC85i.png"},
	{n: 6, c: [5485, 16222], i: "http://i.imgur.com/lkcIL2O.png"},
	{n: 7, c: [5568, 16118], i: "http://i.imgur.com/iGjtfrZ.png"},
	{n: 8, c: [5471, 16287], t: "In the quicksand."},
	{n: 9, c: [5512, 16299], i: "http://i.imgur.com/otHDoYQ.png"},
	{n: 10, c: [5532, 16381], i: "http://i.imgur.com/qrU1XSr.png"},
	{n: 11, c: [5468, 16455], i: "http://i.imgur.com/RDkCnH8.png"},
	{n: 12, c: [5377, 16514], i: "http://i.imgur.com/FmIfYPt.png"},
	{n: 13, c: [5406, 16592], i: "http://i.imgur.com/jxMmbT8.png"},
	{n: 14, c: [5331, 16559], i: "http://i.imgur.com/ZmFmNNC.png"},
	{n: 15, c: [5289, 16626], i: "http://i.imgur.com/hDvd7TO.png"},
	{n: 16, c: [5254, 16598], i: "http://i.imgur.com/0rzLZvl.png"},
	{n: 17, c: [5333, 16637], i: "http://i.imgur.com/x6OI6e9.png"},
	{n: 18, c: [5304, 16643], i: "http://i.imgur.com/sh6ugkM.png"},
	{n: 19, c: [5225, 16698], i: "http://i.imgur.com/9RjKjjE.png"},
	{n: 20, c: [5281, 16762], i: "http://i.imgur.com/VzoTuEr.png"},
	{n: 21, c: [5257, 16821], i: "http://i.imgur.com/QRK0w6C.png"},
	{n: 22, c: [5388, 16761], i: "http://i.imgur.com/uhrpfom.png"},
	{n: 23, c: [5345, 16711], i: "http://i.imgur.com/vCiCRf9.png"},
	{n: 24, c: [5468, 16721], i: "http://i.imgur.com/LLsEubL.png"},
	{n: 25, c: [5506, 16720], t: "Behind the pulsing vine below the entrance waypoint."},
	{n: 26, c: [5463, 16654], i: "http://i.imgur.com/NcgixZq.png"},
	{n: 27, c: [5368, 16625], i: "http://i.imgur.com/8cbVhYB.png"},
	{n: 28, c: [5407, 16561], i: "http://i.imgur.com/YqDBBmg.png"},
	{n: 29, c: [5396, 16516], i: "http://i.imgur.com/4t18k1J.png"},
	{n: 30, c: [5521, 16528], i: "http://i.imgur.com/XnAXqLR.png"},
	{n: 31, c: [5558, 16564], i: "http://i.imgur.com/ZTiy9vC.png"},
	{n: 32, c: [5535, 16594], i: "http://i.imgur.com/1uNpwbe.png"},
	{n: 33, c: [5418, 16535], i: "http://i.imgur.com/7orCJrj.png"},
	{n: 34, c: [5385, 16604], i: "http://i.imgur.com/CYIVXAu.png"},
	{n: 35, c: [5249, 16508], i: "http://i.imgur.com/h33KOBP.png"},
	{n: 36, c: [5238, 16418], i: "http://i.imgur.com/RFcrFJV.png"},
	{n: 37, c: [5136, 16392], i: "http://i.imgur.com/Lt1Qbg1.png"},
	{n: 38, c: [5141, 16560], i: "http://i.imgur.com/ngqmZhC.png"},
	{n: 39, c: [5162, 16621], i: "http://i.imgur.com/dDgNvX8.png"},
	{n: 40, c: [5168, 16678], i: "http://i.imgur.com/p0UhkQh.png"},
	{n: 41, c: [5078, 16497], i: "http://i.imgur.com/msWUvMm.png"},
	{n: 42, c: [5093, 16488], i: "http://i.imgur.com/hxwOtdN.png"},
	{n: 43, c: [5030, 16521], i: "http://i.imgur.com/qnN4Ffb.png"},
	{n: 44, c: [5121, 16716], i: "http://i.imgur.com/1xvQMyu.png"},
	{n: 45, c: [5131, 16757], t: "Top of the ledges."},
	{n: 46, c: [5088, 16752], i: "http://i.imgur.com/tfNh0tH.png"},
	{n: 47, c: [4923, 16698], i: "http://i.imgur.com/Q78XIcl.png"},
	{n: 48, c: [4889, 16656], t: "Inside the frog cave."},
	{n: 49, c: [4881, 16616], i: "http://i.imgur.com/1ly4eqA.png"},
	{n: 50, c: [4976, 16649], i: "http://i.imgur.com/7AgAITy.png"},
	{n: 51, c: [4897, 16538], i: "http://i.imgur.com/D75YWKI.png"},
	{n: 52, c: [4931, 16464], t: "Right of the entrance of Cornered instance but on a ledge above. You need jump crystal from across the other side to get there."},
	{n: 53, c: [4952, 16461], i: "http://i.imgur.com/6qBQq4n.png"},
	{n: 54, c: [5088, 16354], i: "http://i.imgur.com/3yebdfp.png"},
	{n: 55, c: [5147, 16307], t: "Overlooking the quicksand."},
	{n: 56, c: [4994, 16345], i: "http://i.imgur.com/xo2swdc.png"},
	{n: 57, c: [5011, 16361], t: "Inside Explorer's cave at the back."},
	{n: 58, c: [5078, 16319], i: "http://i.imgur.com/puG7aEE.png"},
	{n: 59, c: [5118, 16239], t: "Back of Centaur village"},
	{n: 60, c: [5122, 16220], t: "Eastern end of the Restoration Refuge."},
	{n: 61, c: [4992, 16280], t: "Near entrance to Centaur village."},
	{n: 62, c: [4938, 16257], t: "Near entrance to Centaur village."},
	{n: 63, c: [4750, 16358], i: "http://i.imgur.com/gv6QG81.png"},
	{n: 64, c: [4790, 16351], i: "http://i.imgur.com/KJbXPAu.png"},
	{n: 65, c: [4772, 16173], i: "http://i.imgur.com/DEQPh79.png"},
	{n: 66, c: [4812, 16139], i: "http://i.imgur.com/IzK7qZM.png"},
	{n: 67, c: [4882, 15962], t: "Top of some ledges near the start of the canyon."},
	{n: 68, c: [5184, 16047], i: "http://i.imgur.com/eNuJ3IH.png"},
	{n: 69, c: [5173, 15921], i: "http://i.imgur.com/1afdXXg.png"},
	{n: 70, c: [5002, 15877], i: "http://i.imgur.com/TOuE9B9.png"},
	{n: 71, c: [4874, 15781], i: "http://i.imgur.com/O3PTbZA.png"},
	{n: 72, c: [4782, 15987], i: "http://i.imgur.com/pWNi0X1.png"},
	{n: 73, c: [4689, 16000], i: "http://i.imgur.com/VYmTrbn.png"},
	{n: 74, c: [4681, 15860], i: "http://i.imgur.com/L28U7ho.png"},
	{n: 75, c: [4678, 15785], i: "http://i.imgur.com/30wdUDG.png"},
	{n: 76, c: [4454, 15972], i: "http://i.imgur.com/pO8oTya.png"},
	{n: 77, c: [4408, 15889], i: "http://i.imgur.com/x6JSg4r.png"},
	{n: 78, c: [4406, 15820], i: "http://i.imgur.com/iXf51Gf.png"},
	{n: 79, c: [4374, 15764], t: "Up near skill point."},
	{n: 80, c: [4202, 16012], t: "Top of this rock in Oasis. Use jump crystal hidden in grass behind the rock to get up there."},
	{n: 81, c: [4008, 16090], i: "http://i.imgur.com/QR1tHUF.png"},
	{n: 82, c: [3918, 16134], t: "Top of this rock ledge, jump to get there."},
	{n: 83, c: [3939, 16198], i: "http://i.imgur.com/8FcA6ev.png"},
	{n: 84, c: [4219, 16176], i: "http://i.imgur.com/qaR0vb3.png"},
	{n: 85, c: [4143, 16113], i: "http://i.imgur.com/HUNpmn9.png"},
	{n: 86, c: [4571, 16172], i: "http://i.imgur.com/0h4Gr81.png"},
	{n: 87, c: [4658, 16371], t: "Near the crash site #2."},
	{n: 88, c: [4556, 16333], i: "http://i.imgur.com/FrV27hs.png"},
	{n: 89, c: [4538, 16392], i: "http://i.imgur.com/3y9rJFY.png"},
	{n: 90, c: [4430, 16409], i: "http://i.imgur.com/RJRJI5n.png"},
	{n: 91, c: [4412, 16350], i: "http://i.imgur.com/CJ8Imz0.png"},
	{n: 92, c: [4319, 16416], i: "http://i.imgur.com/9Js0NCw.png"},
	{n: 93, c: [4461, 16607], i: "http://i.imgur.com/NU3KvWr.png"},
	{n: 94, c: [4643, 16583], i: "http://i.imgur.com/R1bpzSr.png"},
	{n: 95, c: [4466, 16762], i: "http://i.imgur.com/OJdXUco.png"},
	{n: 96, c: [4532, 16805], i: "http://i.imgur.com/omxcCnS.png"},
	{n: 97, c: [4039, 16301], t: "On corner of wall."},
	{n: 98, c: [4054, 16416], t: "In pile of rocks by cliff wall."},
	{n: 99, c: [4295, 16429], t: "Corner of rock slabs and upper cliff."},
	{n: 100, c: [4329, 16619], t: "In pile of rocks by bamboo."},
	{n: 101, c: [4202, 16803], t: "Top of wall ledges."},
	{n: 102, c: [4112, 16726], t: "On layered ledges same level as south Vista."},
	{n: 103, c: [4165, 16635], t: "Inside cave on wall ledge, use jump crystal nearby."},
	{n: 104, c: [3991, 16813], t: "Second topmost ledge accessible by jump crystal above Vista."},
	{n: 105, c: [3944, 16756], t: "Inside cave under tree near Inquest tents."},
	{n: 106, c: [3943, 16626], t: "On wall ledge, use two jump crystals from south."}
	]
},
BanditChests: {
	name_en: "Silverwastes Lost Bandit Chest",
	name_de: "Silberwüste Banditen-Truhe",
	name_es: "Páramos Argentos Cofre de Bandido",
	name_fr: "Sauvages d'Argent Coffres de Bandit",
	color: "wheat",
	view: "silverwastes",
	wiki: "http://wiki.guildwars2.com/wiki/Lost_Bandit_Chest",
	credit: "http://www.palingenesis.webspace.virginmedia.com/Tim/GW2/Manual/Manual.html",
	needles: [
	{n: 1, c: [5806, 15562]},
	{n: 2, c: [5783, 15613]},
	{n: 3, c: [5724, 15558]},
	{n: 4, c: [5499, 15419]},
	{n: 5, c: [5498, 15487]},
	{n: 6, c: [5525, 15554]},
	{n: 7, c: [5567, 15627]},
	{n: 8, c: [5408, 15468]},
	{n: 9, c: [5352, 15532]},
	{n: 10, c: [5319, 15617]},
	{n: 11, c: [5231, 15631]},
	{n: 12, c: [5155, 15646]},
	{n: 13, c: [5058, 15653]},
	{n: 14, c: [4987, 15585]},
	{n: 15, c: [4965, 15533]},
	{n: 16, c: [5055, 15522]},
	{n: 17, c: [5031, 15481]},
	{n: 18, c: [5108, 15407]},
	{n: 19, c: [5194, 15404]},
	{n: 20, c: [5148, 15313]},
	{n: 21, c: [5027, 15360]},
	{n: 22, c: [4990, 15416]},
	{n: 23, c: [4949, 15349]},
	{n: 24, c: [4962, 15268]},
	{n: 25, c: [4873, 15330]},
	{n: 26, c: [4796, 15272]},
	{n: 27, c: [4714, 15223]},
	{n: 28, c: [4738, 15286]},
	{n: 29, c: [4767, 15344]},
	{n: 30, c: [4830, 15416]},
	{n: 31, c: [4913, 15454]},
	{n: 32, c: [4855, 15529]},
	{n: 33, c: [4782, 15508]},
	{n: 34, c: [4720, 15543]},
	{n: 35, c: [4769, 15431]},
	{n: 36, c: [4689, 15460]},
	{n: 37, c: [4577, 15324]},
	{n: 38, c: [4548, 15337]},
	{n: 39, c: [4392, 15319]},
	{n: 40, c: [4325, 15309]},
	{n: 41, c: [4278, 15284]},
	{n: 42, c: [4346, 15263]},
	{n: 43, c: [4502, 15285]},
	{n: 44, c: [4477, 15248]},
	{n: 45, c: [4492, 15209]},
	{n: 46, c: [4450, 15155]},
	{n: 47, c: [4482, 15131]},
	{n: 48, c: [4588, 15187]},
	{n: 49, c: [4552, 15080]},
	{n: 50, c: [4543, 14998]},
	{n: 51, c: [4480, 15060]},
	{n: 52, c: [4439, 15096]},
	{n: 53, c: [4300, 15044]},
	{n: 54, c: [4238, 15046]},
	{n: 55, c: [4157, 15157]},
	{n: 56, c: [4074, 15043]},
	{n: 57, c: [4085, 15034]},
	{n: 58, c: [4112, 14986]},
	{n: 59, c: [4114, 14976]},
	{n: 60, c: [4246, 14897]},
	{n: 61, c: [4339, 14901]},
	{n: 62, c: [4402, 14819]},
	{n: 63, c: [4461, 14876]},
	{n: 64, c: [4499, 14917]},
	{n: 65, c: [4509, 14887]},
	{n: 66, c: [4524, 14828]},
	{n: 67, c: [4578, 14914]},
	{n: 68, c: [4652, 14825]},
	{n: 69, c: [4700, 14755]},
	{n: 70, c: [4730, 14664]},
	{n: 71, c: [4525, 14591]},
	{n: 72, c: [4426, 14492]},
	{n: 73, c: [4412, 14614]},
	{n: 74, c: [4258, 14623]},
	{n: 75, c: [4220, 14702]},
	{n: 76, c: [4273, 14732]},
	{n: 77, c: [4790, 14624]},
	{n: 78, c: [4822, 14646]},
	{n: 79, c: [4761, 14687]},
	{n: 80, c: [4736, 14816]},
	{n: 81, c: [4674, 14902]},
	{n: 82, c: [4761, 14908]},
	{n: 83, c: [4815, 14882]},
	{n: 84, c: [4863, 14809]},
	{n: 85, c: [4899, 14759]},
	{n: 86, c: [4884, 14716]},
	{n: 87, c: [4955, 14800]},
	{n: 88, c: [4906, 14890]},
	{n: 89, c: [4969, 14944]},
	{n: 90, c: [4972, 14876]},
	{n: 91, c: [5021, 14818]},
	{n: 92, c: [5062, 14868]},
	{n: 93, c: [5115, 14767]},
	{n: 94, c: [5207, 14756]},
	{n: 95, c: [5223, 14826]},
	{n: 96, c: [5118, 14942]},
	{n: 97, c: [5090, 14979]},
	{n: 98, c: [5180, 15088]},
	{n: 99, c: [5185, 15107]},
	{n: 100, c: [5191, 14928]},
	{n: 101, c: [5257, 14870]},
	{n: 102, c: [5308, 14914]},
	{n: 103, c: [5344, 14931]},
	{n: 104, c: [5339, 14857]},
	{n: 105, c: [5428, 14911]},
	{n: 106, c: [5453, 14841]},
	{n: 107, c: [5518, 14868]},
	{n: 108, c: [5673, 14917]},
	{n: 109, c: [5849, 14932]},
	{n: 110, c: [5797, 15008]},
	{n: 111, c: [5644, 14958]},
	{n: 112, c: [5399, 15015]},
	{n: 113, c: [5344, 15090]},
	{n: 114, c: [5393, 15101]},
	{n: 115, c: [5507, 15026]},
	{n: 116, c: [5499, 15090]},
	{n: 117, c: [5517, 15113]},
	{n: 118, c: [5546, 15154]},
	{n: 119, c: [5693, 15200]},
	{n: 120, c: [5761, 15155]}
	]
},
MatrixCubeKey: {
	name_en: "Matrix Cube Key",
	name_de: "Matrixwürfel-Schlüssel",
	name_es: "Llave de cubo matricial",
	name_fr: "Clé matricielle cubique",
	color: "greenyellow",
	view: "[7588, 17619]",
	wiki: "http://wiki.guildwars2.com/wiki/Matrix_Cube_Key",
	credit: "http://www.palingenesis.webspace.virginmedia.com/Tim/GW2/Manual/Manual.html",
	needles: [
	{n: 1, c: [7723, 17561]},
	{n: 2, c: [7688, 17509]},
	{n: 3, c: [7718, 17491]},
	{n: 4, c: [7634, 17496]},
	{n: 5, c: [7664, 17466]},
	{n: 6, c: [7633, 17439]},
	{n: 7, c: [7593, 17428]},
	{n: 8, c: [7623, 17417]},
	{n: 9, c: [7670, 17384]},
	{n: 10, c: [7645, 17322]},
	{n: 11, c: [7502, 17638]},
	{n: 12, c: [7467, 17654]},
	{n: 13, c: [7485, 17703]},
	{n: 14, c: [7476, 17770]},
	{n: 15, c: [7645, 17754]},
	{n: 16, c: [7660, 17783]},
	{n: 17, c: [7730, 17767]},
	{n: 18, c: [7755, 17733]},
	{n: 19, c: [7749, 17688]}
	]
},
LionsArchExterminator: {
	name_en: "Lion's Arch Exterminator",
	name_de: "Löwenstein-Vernichterin",
	name_es: "Exterminadora de Arco del León",
	name_fr: "Exterminatrice de l'Arche du Lion",
	color: "darkorange",
	view: "lion",
	wiki: "http://wiki.guildwars2.com/wiki/Lion%27s_Arch_Exterminator",
	credit: "http://dulfy.net/2015/06/23/gw2-lions-arch-exterminator-achievement-guide/",
	needles: [
	{n: 1, c: [15904, 14496], i: "http://i.imgur.com/q9llZz0.png"},
	{n: 2, c: [15912, 14485], i: "http://i.imgur.com/9b2hLVo.png"},
	{n: 3, c: [15917, 14474], i: "http://i.imgur.com/9zQJpRJ.png"},
	{n: 4, c: [15855, 14539], i: "http://i.imgur.com/1we5DLa.png"},
	{n: 5, c: [15718, 14491], i: "http://i.imgur.com/Hvqogpn.png"},
	{n: 6, c: [15804, 14527], i: "http://i.imgur.com/fJjLRBE.png"},
	{n: 7, c: [15629, 14521], i: "http://i.imgur.com/QYFYQ2k.png"},
	{n: 8, c: [15689, 14617], i: "http://i.imgur.com/5713aHs.png"},
	{n: 9, c: [15691, 14724], i: "http://i.imgur.com/bYXiYH8.png"},
	{n: 10, c: [15805, 15000], i: "http://i.imgur.com/pLhyueb.png"},
	{n: 11, c: [15799, 14849], i: "http://i.imgur.com/MBs6T0G.png"},
	{n: 12, c: [15906, 14728], i: "http://i.imgur.com/nlV7yJB.png"},
	{n: 13, c: [15814, 14544], i: "http://i.imgur.com/7qPd9WX.png"},
	{n: 14, c: [15460, 15100], i: "http://i.imgur.com/YbBIFw6.png"},
	{n: 15, c: [15498, 15177], i: "http://i.imgur.com/GBI86rk.png"},
	{n: 16, c: [15376, 15224], i: "http://i.imgur.com/BLb9OzR.png"},
	{n: 17, c: [15562, 15369], i: "http://i.imgur.com/uImCgmH.png"},
	{n: 18, c: [15510, 15335], i: "http://i.imgur.com/xfnqMeZ.png"},
	{n: 19, c: [15513, 15385], i: "http://i.imgur.com/Nf1OpnV.png"},
	{n: 20, c: [15516, 15427], i: "http://i.imgur.com/c8XUKAr.png"},
	{n: 21, c: [16368, 14561], i: "http://i.imgur.com/qKkArCe.png"},
	{n: 22, c: [16543, 14603], i: "http://i.imgur.com/AqMD3XO.png"},
	{n: 23, c: [16774, 14762], i: "http://i.imgur.com/vIBC9YC.png"},
	{n: 24, c: [16895, 14881], i: "http://i.imgur.com/poqDI0e.png"},
	{n: 25, c: [16955, 14642], i: "http://i.imgur.com/haxXSrz.png"},
	{n: 26, c: [16808, 14511], i: "http://i.imgur.com/cVT1ntd.png"},
	{n: 27, c: [16988, 14553], i: "http://i.imgur.com/5AWlPzP.png"},
	{n: 28, c: [17010, 14419], i: "http://i.imgur.com/JmPvSB9.png"},
	{n: 29, c: [16945, 14399], i: "http://i.imgur.com/Ebchzam.png"},
	{n: 30, c: [17100, 14713], i: "http://i.imgur.com/dmcAlGY.png"},
	{n: 31, c: [17080, 14798], i: "http://i.imgur.com/roiLGmV.png"},
	{n: 32, c: [17346, 14475], i: "http://i.imgur.com/DtIuXxj.png"},
	{n: 33, c: [17470, 14691], i: "http://i.imgur.com/e34qVRi.png"},
	{n: 34, c: [17523, 14658], i: "http://i.imgur.com/oVWhxZp.png"},
	{n: 35, c: [17009, 15238], i: "http://i.imgur.com/gyV2lP0.png"},
	{n: 36, c: [16995, 15115], i: "http://i.imgur.com/kTCgycG.png"},
	{n: 37, c: [16281, 15157], i: "http://i.imgur.com/YAaQaTh.png"},
	{n: 38, c: [16153, 15688], i: "http://i.imgur.com/XmbHQ78.png"},
	{n: 39, c: [16140, 15695], i: "http://i.imgur.com/wzw1mAs.png"},
	{n: 40, c: [15849, 15726], i: "http://i.imgur.com/7TCwhHj.png"},
	{n: 41, c: [15874, 15740], i: "http://i.imgur.com/c1TL2Lp.png"},
	{n: 42, c: [17135, 15632], i: "http://i.imgur.com/r6HS422.png"},
	{n: 43, c: [17116, 15624], i: "http://i.imgur.com/PhwNuBo.png"},
	{n: 44, c: [17147, 15560], i: "http://i.imgur.com/OpEpnx3.png"},
	{n: 45, c: [17480, 15820], i: "http://i.imgur.com/CZL3eIr.png"},
	{n: 46, c: [17552, 15752], i: "http://i.imgur.com/ITbNokO.png"},
	{n: 47, c: [17506, 15692], i: "http://i.imgur.com/9CzfQxh.png"},
	{n: 48, c: [17563, 15644], i: "http://i.imgur.com/fQOCV51.png"},
	{n: 49, c: [17378, 15673], i: "http://i.imgur.com/gwd9fGM.png"},
	{n: 50, c: [17244, 15724], i: "http://i.imgur.com/NDFznQl.png"}
	]
},
CoinUplands: {
	name_en: "Coin Collector: Uplands",
	name_de: "Münzensammlerin: Hochland",
	name_es: "Monedas: Altiplanos",
	name_fr: "Pièces: Hauteurs",
	color: "orange",
	view: "dry",
	wiki: "http://wiki.guildwars2.com/wiki/Lost_coin",
	credit: "http://www.guildnews.de/guides/die-verschlingung-der-grosse-guide/730/3/die-muenzen-aus-dem-hochland/",
	needles: [
	{n: 1, c: [5223, 16175]},
	{n: 2, c: [5034, 16359]},
	{n: 3, c: [4917, 16389]},
	{n: 4, c: [4789, 16355]},
	{n: 5, c: [4759, 16182]},
	{n: 6, c: [5119, 16201]},
	{n: 7, c: [5164, 16073]},
	{n: 8, c: [4874, 16002]},
	{n: 9, c: [4924, 15825]},
	{n: 10, c: [4940, 15784]},
	{n: 11, c: [4789, 15800]},
	{n: 12, c: [4722, 15780]},
	{n: 13, c: [4622, 15948]},
	{n: 14, c: [4562, 15798]},
	{n: 15, c: [4384, 15773]},
	{n: 16, c: [4026, 15878]},
	{n: 17, c: [3950, 15886]},
	{n: 18, c: [3943, 16136]},
	{n: 19, c: [4105, 16246]},
	{n: 20, c: [4217, 16113]},
	{n: 21, c: [4169, 16253]},
	{n: 22, c: [4407, 16166]},
	{n: 23, c: [4660, 16140]},
	{n: 24, c: [4432, 16350]},
	{n: 25, c: [4497, 16423]},
	{n: 26, c: [4546, 16383]},
	{n: 27, c: [4664, 16375]},
	{n: 28, c: [4508, 16747]},
	{n: 29, c: [4566, 16733]},
	{n: 30, c: [4464, 16790]}
	]
},
CoinChallenger: {
	name_en: "Coin Collector: Challenger Cliffs",
	name_de: "Münzensammlerin: Herausfordererklippen",
	name_es: "Monedas: Acantilados del Desafío",
	name_fr: "Pièces: Falaises du combattant",
	color: "tomato",
	view: "dry",
	wiki: "http://wiki.guildwars2.com/wiki/Lost_coin",
	credit: "http://www.mattsta.ninja/dry-top/",
	needles: [
	{n: 1, c: [4384, 16528]},
	{n: 2, c: [4235, 16167]},
	{n: 3, c: [3986, 16123]},
	{n: 4, c: [4361, 16822]},
	{n: 5, c: [4375, 16756]},
	{n: 6, c: [3983, 16835]},
	{n: 7, c: [4036, 16781]},
	{n: 8, c: [3911, 16805]},
	{n: 9, c: [4102, 16534]},
	{n: 10, c: [4256, 16487]},
	{n: 11, c: [4070, 16480]},
	{n: 12, c: [3908, 16594]}
	]
},
LostBadges: {
	name_en: "Lost Badges",
	name_de: "Verlorene Abzeichen",
	name_es: "Insignias perdidas",
	name_fr: "Insigne perdu",
	color: "silver",
	view: "silverwastes",
	wiki: "http://wiki.guildwars2.com/wiki/Lost_Badge",
	credit: "http://dulfy.net/2014/11/04/gw2-lost-badge-silverwastes-achievement-guide/",
	needles: [
	{n: 1, c: [5671, 15408]},
	{n: 2, c: [5798, 15625]},
	{n: 3, c: [5778, 15145]},
	{n: 4, c: [5525, 15636]},
	{n: 5, c: [5276, 15582]},
	{n: 6, c: [5086, 15506]},
	{n: 7, c: [4956, 15459]},
	{n: 8, c: [4722, 15309]},
	{n: 9, c: [4891, 15313]},
	{n: 10, c: [4858, 15560]},
	{n: 11, c: [4576, 15468]},
	{n: 12, c: [4587, 15326]},
	{n: 13, c: [4436, 15144]},
	{n: 14, c: [4672, 15254]},
	{n: 15, c: [4588, 15247]},
	{n: 16, c: [4705, 14927]},
	{n: 17, c: [4334, 14816]},
	{n: 18, c: [4474, 14683]},
	{n: 19, c: [4408, 14491]},
	{n: 20, c: [4798, 14584]},
	{n: 21, c: [4840, 14730]},
	{n: 22, c: [4974, 14784]},
	{n: 23, c: [5145, 14897]},
	{n: 24, c: [5247, 14972]},
	{n: 25, c: [5801, 15011]},
	{n: 26, c: [5821, 15033]},
	{n: 27, c: [5742, 15013]},
	{n: 28, c: [5537, 15053]},
	{n: 29, c: [5508, 15191]},
	{n: 30, c: [5062, 15297]}
	]
},
GoldenLostBadges: {
	name_en: "Golden Lost Badges",
	name_de: "Goldenen Verlorenen Abzeichen",
	name_es: "Insignias de oro perdidas",
	name_fr: "Insignes dorés perdus",
	color: "gold",
	view: "silverwastes",
	wiki: "http://wiki.guildwars2.com/wiki/Golden_Lost_Badge",
	credit: "http://dulfy.net/2014/12/04/gw2-go-for-the-gold-golden-badges-achievement-guide/",
	needles: [
	{n: 1, c: [5308, 14809]},
	{n: 2, c: [5312, 14696]},
	{n: 3, c: [5203, 14732]},
	{n: 4, c: [5280, 15022]},
	{n: 5, c: [5557, 14923]},
	{n: 6, c: [5508, 14895]},
	{n: 7, c: [5266, 14962]},
	{n: 8, c: [5297, 15253]},
	{n: 9, c: [5475, 15125]},
	{n: 10, c: [5441, 15467]},
	{n: 11, c: [5363, 15653]},
	{n: 12, c: [5670, 15547]},
	{n: 13, c: [5588, 15378]},
	{n: 14, c: [5256, 15231]},
	{n: 15, c: [4785, 15081]},
	{n: 16, c: [4654, 15056]},
	{n: 17, c: [4824, 14975]},
	{n: 18, c: [4980, 15086]},
	{n: 19, c: [4852, 14900]},
	{n: 20, c: [4582, 15100]},
	{n: 21, c: [4413, 15008]},
	{n: 22, c: [4140, 15177]},
	{n: 23, c: [3973, 15317]},
	{n: 24, c: [3913, 15360]},
	{n: 25, c: [4040, 15556]},
	{n: 26, c: [4068, 15414]},
	{n: 27, c: [5215, 14538]},
	{n: 28, c: [5220, 14307]},
	{n: 29, c: [4825, 14215]},
	{n: 30, c: [5533, 14701]}
	]
},
DiveMaster: {
	name_en: "Dive Master",
	name_de: "Tauchmeisterin",
	name_es: "Maestra Submarinista",
	name_fr: "Maître de la plongée",
	color: "cyan",
	view: "default",
	wiki: "http://wiki.guildwars2.com/wiki/Diving_Goggles",
	credit: "http://dulfy.net/2012/11/05/gw2-dive-master-achievement-guide/",
	needles: [
	{n: 1, c: [5883, 21497], l: 18},
	{n: 2, c: [10457, 21153], l: 19},
	{n: 3, c: [10990, 17783], l: 20},
	{n: 4, c: [8167, 19743], l: 22},
	{n: 5, c: [8730, 17361], l: 21},
	{n: 6, c: [7811, 15779], l: 23},
	{n: 7, c: [8400, 15603], l: 24},
	{n: 8, c: [13146, 15900], l: 2},
	{n: 9, c: [14990, 14190], l: 5},
	{n: 10, c: [15695, 13046], l: 3},
	{n: 11, c: [16469, 12439], l: 4},
	{n: 12, c: [16062, 12060], l: 6},
	{n: 13, c: [14375, 9834], l: 7},
	{n: 14, c: [22068, 9102], l: 33},
	{n: 15, c: [22900, 13658], l: 27},
	{n: 16, c: [23132, 14749], l: 28},
	{n: 17, c: [25996, 10811], l: 17},
	{n: 18, c: [28380, 12791], l: 16},
	{n: 19, c: [27340, 13094], l: 15},
	{n: 20, c: [26793, 13105], l: 11},
	{n: 21, c: [25549, 11860], l: 12},
	{n: 22, c: [26569, 15226], l: 9},
	{n: 23, c: [28131, 15222], l: 10},
	{n: 24, c: [29308, 16619], l: 13},
	{n: 25, c: [30140, 17677], l: 14},
	{n: 26, c: [15869, 15719], l: 1},
	{n: 27, c: [16963, 16684], l: 8},
	{n: 28, c: [18151, 16810], l: 30},
	{n: 29, c: [17861, 17772], l: 29},
	{n: 30, c: [19818, 18380], l: 31},
	{n: 31, c: [20517, 20715], l: 32},
	{n: 32, c: [21477, 21556], l: 25},
	{n: 33, c: [21420, 21843], l: 26},
	{n: 34, c: [16938, 23647], l: 34},
	{n: 35, c: [16402, 24431], l: 35},
	{n: 36, c: [11759, 23978], l: 36},
	{n: 37, c: [11304, 26657], l: 38},
	{n: 38, c: [11107, 28694], l: 37}
	]
},
SpeedyReader: {
	name_en: "Speedy Reader",
	name_de: "Leseratte",
	name_es: "Lectura rápida",
	name_fr: "Lecture avide",
	color: "tan",
	view: "[29237, 18813]",
	wiki: "http://wiki.guildwars2.com/wiki/Speedy_Reader",
	credit: "http://dulfy.net/2013/07/10/gw2-speedy-reader-the-founding-of-ebonhawke-achievement-guide/",
	needles: [
	{n: 1, c: [29068, 18485], l: "XV", t: "Outdoor"},
	{n: 2, c: [29443, 18537], l: "VIII", t: "Outdoor"},
	{n: 3, c: [29598, 18668], l: "X", t: "Outdoor"},
	{n: 4, c: [29620, 18704], l: "XVIII", t: "Outdoor"},
	{n: 5, c: [29506, 18974], l: "I", t: "Floor 1"},
	{n: 6, c: [29490, 18962], l: "II", t: "Floor 2"},
	{n: 7, c: [29518, 18933], l: "III", t: "Floor 2"},
	{n: 8, c: [29509, 18921], l: "IV", t: "Floor 3"},
	{n: 9, c: [29517, 18988], l: "V", t: "Floor 3"},
	{n: 10, c: [29400, 19144], l: "XIV", t: "Floor 1"},
	{n: 11, c: [29296, 19123], l: "XIII", t: "Outdoor"},
	{n: 12, c: [29285, 19079], l: "XVI", t: "On tower"},
	{n: 13, c: [29232, 19108], l: "XX", t: "Floor 2 jump across tower"},
	{n: 14, c: [29074, 19061], l: "XI", t: "Outdoor"},
	{n: 15, c: [28870, 18977], l: "VI", t: "Floor 1"},
	{n: 16, c: [28810, 18955], l: "VII", t: "Floor 1"},
	{n: 17, c: [29095, 18835], l: "IX", t: "Outdoor"},
	{n: 18, c: [29201, 18635], l: "XVII", t: "Outdoor"},
	{n: 19, c: [29380, 18670], l: "XII", t: "Outdoor"},
	{n: 20, c: [29277, 18961], l: "XIX", t: "On balcony"}
	]
},
CleaningUp: {
	name_en: "Cleaning Up the Neighborhood",
	name_de: "In der Nachbarschaft aufräumen",
	name_es: "Limpieza de vecindario",
	name_fr: "Nettoyage de printemps",
	color: "bisque",
	view: "[29392, 18760]",
	wiki: "http://wiki.guildwars2.com/wiki/Cleaning_Up_the_Neighborhood",
	credit: "http://dulfy.net/2013/07/10/gw2-cleaning-up-the-neighborhood-separatist-propaganda-achievement-guide/",
	needles: [
	{n: 1, c: [29453, 18550]},
	{n: 2, c: [29507, 18527]},
	{n: 3, c: [29542, 18562]},
	{n: 4, c: [29502, 18611]},
	{n: 5, c: [29520, 18665]},
	{n: 6, c: [29585, 18600]},
	{n: 7, c: [29598, 18630]},
	{n: 8, c: [29617, 18701]},
	{n: 9, c: [29602, 18792]},
	{n: 10, c: [29535, 18777]},
	{n: 11, c: [29541, 18796]},
	{n: 12, c: [29569, 18936]},
	{n: 13, c: [29482, 18924]},
	{n: 14, c: [29449, 18850]},
	{n: 15, c: [29478, 18771]},
	{n: 16, c: [29479, 18725]},
	{n: 17, c: [29445, 18787]},
	{n: 18, c: [29426, 18794]},
	{n: 19, c: [29386, 18851]},
	{n: 20, c: [29384, 18881]},
	{n: 21, c: [29363, 18974]},
	{n: 22, c: [29270, 18912]},
	{n: 23, c: [29247, 18951]},
	{n: 24, c: [29192, 18943]},
	{n: 25, c: [29175, 18938]},
	{n: 26, c: [29164, 18931]},
	{n: 27, c: [29101, 18874]},
	{n: 28, c: [29157, 18703]},
	{n: 29, c: [29173, 18652]},
	{n: 30, c: [29208, 18628]},
	{n: 31, c: [29287, 18579]},
	{n: 32, c: [29370, 18599]},
	{n: 33, c: [29323, 18673]},
	{n: 34, c: [29310, 18708]},
	{n: 35, c: [29224, 18729]},
	{n: 36, c: [29210, 18769]},
	{n: 37, c: [29264, 18735]},
	{n: 38, c: [29279, 18786]},
	{n: 39, c: [29280, 18858]},
	{n: 40, c: [29145, 18848]},
	{n: 41, c: [29146, 18821]}
	]
},
HistoryBuff: {
	name_en: "History Buff",
	name_de: "Geschichtsfreundin",
	name_es: "Rata de biblioteca",
	name_fr: "Férue d'histoire",
	color: "khaki",
	view: "lion",
	wiki: "http://wiki.guildwars2.com/wiki/Marriner_Plaque",
	credit: "http://dulfy.net/2013/06/23/gw2-history-buff-marriner-plaques-achievement-guide/",
	needles: [
	{n: 1, c: [15452, 14883]},
	{n: 2, c: [15845, 15117]},
	{n: 3, c: [16123, 15076]},
	{n: 4, c: [15873, 14806]},
	{n: 5, c: [16119, 14806]},
	{n: 6, c: [16974, 15195]},
	{n: 7, c: [16605, 15182]},
	{n: 8, c: [16296, 15428]},
	{n: 9, c: [16218, 15436]},
	{n: 10, c: [16030, 15493]},
	{n: 11, c: [16006, 15653]},
	{n: 12, c: [10660, 24221]}
	]
},
HeroChallenge: {
	name_en: "Hero Challenge",
	name_de: "Heldenherausforderung",
	name_es: "Desafío de héroe",
	name_fr: "Défi de héros",
	color: "yellow",
	view: "default",
	wiki: "http://wiki.guildwars2.com/wiki/Hero_challenge",
	credit: "http://wiki.guildwars2.com/wiki/Hero_challenge",
	needles: [
	{n: 1, c: [5497, 14955], e: 0}, // silverwastes
	{n: 2, c: [5558, 14837]},
	{n: 3, c: [5029, 14256]},
	{n: 4, c: [4138, 14613]},
	{n: 5, c: [4584, 15152]},
	{n: 6, c: [4186, 15093], e: 2},
	{n: 7, c: [5383, 16437], e: 1}, // dry
	{n: 8, c: [4764, 16411]},
	{n: 9, c: [4386, 15774]},
	{n: 10, c: [4345, 16436]},
	{n: 11, c: [4858, 17037], e: 2},
	{n: 12, c: [7470, 16574], e: 1}, // brisban
	{n: 13, c: [6820, 17054]},
	{n: 14, c: [6253, 16488]},
	{n: 15, c: [6450, 16385]},
	{n: 16, c: [7490, 14810]},
	{n: 17, c: [7990, 15632]},
	{n: 18, c: [8192, 15887]},
	{n: 19, c: [8536, 15556], e: 2},
	{n: 20, c: [8459, 19856], e: 1}, // metrica
	{n: 21, c: [7264, 19378]},
	{n: 22, c: [9184, 19078]},
	{n: 23, c: [8740, 18596]},
	{n: 24, c: [8238, 18774]},
	{n: 25, c: [9024, 18148]},
	{n: 26, c: [8946, 17406]},
	{n: 27, c: [7698, 17375], e: 2},
	{n: 28, c: [9440, 19338], e: 1}, // caledon
	{n: 29, c: [11019, 19348]},
	{n: 30, c: [11216, 18736]},
	{n: 31, c: [10467, 18597]},
	{n: 32, c: [11148, 17799]},
	{n: 33, c: [11030, 16550]},
	{n: 34, c: [9632, 16476], e: 2},
	{n: 35, c: [13284, 14179], e: 1}, // kessex
	{n: 36, c: [13353, 14588]},
	{n: 37, c: [13362, 15765]},
	{n: 38, c: [11132, 15517]},
	{n: 39, c: [9754, 15657], e: 2},
	{n: 40, c: [11704, 12638], e: 1},// queensdale
	{n: 41, c: [11413, 12662]},
	{n: 42, c: [10426, 13091]},
	{n: 43, c: [9950, 13126]},
	{n: 44, c: [12368, 13480]},
	{n: 45, c: [13110, 13769]},
	{n: 46, c: [13318, 11968], e: 2},
	{n: 47, c: [13667, 12353], e: 1}, // gendarran
	{n: 48, c: [13566, 13987]},
	{n: 49, c: [14369, 13570]},
	{n: 50, c: [15402, 13366]},
	{n: 51, c: [15915, 13259]},
	{n: 52, c: [16537, 12573]},
	{n: 53, c: [17539, 13871], e: 2},
	{n: 54, c: [14195, 12143], e: 1}, // harathi
	{n: 55, c: [16413, 11838]},
	{n: 56, c: [16102, 11646]},
	{n: 57, c: [16528, 9940]},
	{n: 58, c: [14529, 9971]},
	{n: 59, c: [13636, 10063], e: 2},
	{n: 60, c: [20771, 11348], e: 1}, // snowden
	{n: 61, c: [18922, 11446]},
	{n: 62, c: [18235, 11459]},
	{n: 63, c: [17959, 11909]},
	{n: 64, c: [17838, 13008]},
	{n: 65, c: [21532, 13122], e: 2},
	{n: 66, c: [18219, 13383], e: 1}, // lornar
	{n: 67, c: [19299, 13408]},
	{n: 68, c: [19312, 13851]},
	{n: 69, c: [17996, 14413]},
	{n: 70, c: [17747, 14678]},
	{n: 71, c: [18889, 15631]},
	{n: 72, c: [19319, 15845]},
	{n: 73, c: [18032, 16466]},
	{n: 74, c: [18352, 16809], e: 2},
	{n: 75, c: [16749, 16462], e: 1}, // bloodtide
	{n: 76, c: [16317, 16528]},
	{n: 77, c: [16113, 17120]},
	{n: 78, c: [17494, 17810]},
	{n: 79, c: [16277, 18598]},
	{n: 80, c: [15741, 18629], e: 2},
	{n: 81, c: [15438, 19611], e: 1}, // sparkfly
	{n: 82, c: [16878, 19121]},
	{n: 83, c: [17169, 19904]},
	{n: 84, c: [16170, 20573]},
	{n: 85, c: [16373, 20804]},
	{n: 86, c: [16287, 21597], e: 2},
	{n: 87, c: [18075, 23482], e: 1}, // maelstrom
	{n: 88, c: [18999, 22923]},
	{n: 89, c: [20152, 23311]},
	{n: 90, c: [20867, 23665]},
	{n: 91, c: [20876, 22836]},
	{n: 92, c: [20585, 22468]},
	{n: 93, c: [20962, 21505], e: 2},
	{n: 94, c: [21020, 19528], e: 1}, // timberline
	{n: 95, c: [20867, 20094]},
	{n: 96, c: [20423, 21304]},
	{n: 97, c: [18989, 20617]},
	{n: 98, c: [19101, 20072], e: 2},
	{n: 99, c: [20669, 15884], e: 1}, // dredgehaunt
	{n: 100, c: [21599, 15952]},
	{n: 101, c: [21287, 16398]},
	{n: 102, c: [20382, 16614]},
	{n: 103, c: [19573, 17263]},
	{n: 104, c: [21659, 18082], e: 2},
	{n: 105, c: [22525, 14410], e: 1}, // wayfarer
	{n: 106, c: [23412, 14963]},
	{n: 107, c: [23402, 13748]},
	{n: 108, c: [22011, 13344]},
	{n: 109, c: [22959, 12422]},
	{n: 110, c: [23353, 12654]},
	{n: 111, c: [23308, 11526]},
	{n: 112, c: [22530, 11613], e: 2},
	{n: 113, c: [23720, 12071], e: 1}, // diessa
	{n: 114, c: [24538, 11469]},
	{n: 115, c: [25561, 11389]},
	{n: 116, c: [26090, 11611]},
	{n: 117, c: [25094, 12259]},
	{n: 118, c: [25105, 12551]},
	{n: 119, c: [25632, 12638]},
	{n: 120, c: [25946, 13348], e: 2},
	{n: 121, c: [25325, 13744], e: 1}, // plains
	{n: 122, c: [26506, 15594]},
	{n: 123, c: [26920, 14910]},
	{n: 124, c: [27193, 14819]},
	{n: 125, c: [28430, 14038]},
	{n: 126, c: [28657, 13650], e: 2},
	{n: 127, c: [29040, 19016], e: 1}, // fields
	{n: 128, c: [29577, 19218]},
	{n: 129, c: [30743, 18728]},
	{n: 130, c: [31574, 16759]},
	{n: 131, c: [28822, 16405], e: 2},
	{n: 132, c: [29817, 14280], e: 1}, // blazeridge
	{n: 133, c: [30401, 14616]},
	{n: 134, c: [31134, 13453]},
	{n: 135, c: [29461, 13488]},
	{n: 136, c: [29507, 12348], e: 2},
	{n: 137, c: [28168, 13215], e: 1}, // marches
	{n: 138, c: [28231, 11921]},
	{n: 139, c: [28429, 11436]},
	{n: 140, c: [27640, 11505]},
	{n: 141, c: [27666, 10757]},
	{n: 142, c: [29107, 10970], e: 2},
	{n: 143, c: [26498, 10358], e: 1}, // fireheart
	{n: 144, c: [26475, 9746]},
	{n: 145, c: [25772, 9711]},
	{n: 146, c: [25859, 9271]},
	{n: 147, c: [25765, 8614]},
	{n: 148, c: [25141, 10077]},
	{n: 149, c: [24115, 10015], e: 2},
	{n: 150, c: [23140, 10295], e: 1}, // frostgorge
	{n: 151, c: [22752, 9380]},
	{n: 152, c: [22441, 8654]},
	{n: 153, c: [21078, 8444]},
	{n: 154, c: [21478, 9872]},
	{n: 155, c: [21446, 10151]},
	{n: 156, c: [21090, 11102], e: 2},
	{n: 157, c: [17303, 23676], e: 1}, // straits
	{n: 158, c: [16610, 23931]},
	{n: 159, c: [16436, 24295]},
	{n: 160, c: [16021, 23089]},
	{n: 161, c: [15873, 23208]},
	{n: 162, c: [14612, 23329]},
	{n: 163, c: [14784, 23908]},
	{n: 164, c: [15261, 23952]},
	{n: 165, c: [15499, 24227]},
	{n: 166, c: [14984, 24258]},
	{n: 167, c: [15105, 24707]},
	{n: 168, c: [14795, 24857], e: 2},
	{n: 169, c: [13965, 23796], e: 1}, // malchor
	{n: 170, c: [13532, 23959]},
	{n: 171, c: [12979, 23892]},
	{n: 172, c: [12462, 24035]},
	{n: 173, c: [13142, 23928]},
	{n: 174, c: [12661, 23563]},
	{n: 175, c: [13297, 24835]},
	{n: 176, c: [12827, 24854]},
	{n: 177, c: [12230, 24879]},
	{n: 178, c: [11817, 24733]},
	{n: 179, c: [11388, 24857]},
	{n: 180, c: [10947, 24927]},
	{n: 181, c: [12020, 24198]},
	{n: 182, c: [11852, 24126]},
	{n: 183, c: [11704, 23992], e: 2},
	{n: 184, c: [11260, 25832], e: 1}, // cursed
	{n: 185, c: [10816, 25569]},
	{n: 186, c: [10373, 25692]},
	{n: 187, c: [11100, 26295]},
	{n: 188, c: [11314, 26710]},
	{n: 189, c: [11918, 26883]},
	{n: 190, c: [11010, 27142]},
	{n: 191, c: [11110, 27395]},
	{n: 192, c: [11622, 27374]},
	{n: 193, c: [10942, 28060]},
	{n: 194, c: [11384, 28393]},
	{n: 195, c: [11699, 28916]},
	{n: 196, c: [11255, 29061]},
	{n: 197, c: [10372, 28676]},
	{n: 198, c: [10533, 27937]},
	{n: 199, c: [10443, 27730]},
	{n: 200, c: [10358, 27184], e: 2},
	{n: 201, c: [3152, 15421], e: 1}, // verdant
	{n: 202, c: [3188, 16059]},
	{n: 203, c: [3035, 14857]},
	{n: 204, c: [2764, 15130]},
	{n: 205, c: [2051, 15576]},
	{n: 206, c: [1642, 15738]},
	{n: 207, c: [1026, 15935]},
	{n: 208, c: [1076, 15582]},
	{n: 209, c: [1522, 15551]},
	{n: 210, c: [1191, 15050]},
	{n: 211, c: [2510, 15002], e: 2},
	{n: 212, c: [874, 16608], e: 1}, // auric
	{n: 213, c: [840, 16830]},
	{n: 214, c: [1769, 16897]},
	{n: 215, c: [2094, 16264]},
	{n: 216, c: [2436, 17127]},
	{n: 217, c: [2481, 18165]},
	{n: 218, c: [1983, 18889]},
	{n: 219, c: [1011, 18801]},
	{n: 220, c: [605, 18049]},
	{n: 221, c: [1408, 17682]},
	{n: 222, c: [1735, 17334], e: 2},
	{n: 223, c: [3058, 18639], e: 1}, // tangled
	{n: 224, c: [3280, 17920]},
	{n: 225, c: [3862, 17981]},
	{n: 226, c: [4526, 18340]},
	{n: 227, c: [4902, 17822]},
	{n: 228, c: [4725, 18698]},
	{n: 229, c: [3352, 18797]},
	{n: 230, c: [3209, 18988]},
	{n: 231, c: [3285, 19070]},
	{n: 232, c: [3437, 19395]},
	{n: 233, c: [2867, 19286], e: 2},
	{n: 234, c: [3771, 20742], e: 1}, // dragon
	{n: 235, c: [3219, 21015]},
	{n: 236, c: [3309, 21716]},
	{n: 237, c: [2967, 21428]},
	{n: 238, c: [2529, 20338]},
	{n: 239, c: [2235, 20838]},
	{n: 240, c: [1386, 21468], e: 3}
	]
}
};