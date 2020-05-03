const TIPOS = {
	"Entrantes": 0,
	"Sopa": 1,
	"TallarinesArroz": 2,
	"Verduras": 3,
	"Pollo": 4,
	"Ternera": 5,
	"Gambas": 6,
	"CerdoPato": 7,
	"Especiales": 8,
	"DianXin": 9,
	"Japonesa": 10,
	"Menús": 11,
};

const items = [];
items.push({
	id: "1",
	tipo: TIPOS.Entrantes,
	desc: "Ensalada con cangrejo",
	price: 3.25
});
items.push({
	id: "2",
	tipo: TIPOS.Entrantes,
	desc: "Ensalda china",
	price: 2.85
});
items.push({
	id: "3",
	tipo: TIPOS.Entrantes,
	desc: "Ensalada con gambas",
	price: 3.65
});
items.push({
	id: "4",
	tipo: TIPOS.Entrantes,
	desc: "Ensalada de la casa",
	price: 5.50
});
items.push({
	id: "4A",
	tipo: TIPOS.Entrantes,
	desc: "Ensalada con pollo",
	price: 4.85
});
items.push({
	id: "5",
	tipo: TIPOS.Entrantes,
	desc: "Ensalada de algas japonés",
	price: 3.50
});
items.push({
	id: "6",
	tipo: TIPOS.Entrantes,
	desc: "Rollito de primavera",
	price: 1.30
});
items.push({
	id: "7",
	tipo: TIPOS.Entrantes,
	desc: "MIni rollito de primavera (2 und.)",
	price: 1.80
});
items.push({
	id: "8A",
	tipo: TIPOS.Entrantes,
	desc: "Wan-Tun frito con queso (6 und.)",
	price: 2.90
});
items.push({
	id: "9",
	tipo: TIPOS.Entrantes,
	desc: "Patatas firtas",
	price: 2.25
});
items.push({
	id: "9A",
	tipo: TIPOS.Entrantes,
	desc: "Patatas firtas con croquetas",
	price: 2.90
});
items.push({
	id: "9B",
	tipo: TIPOS.Entrantes,
	desc: "Patatas firtas con pollo rebozado",
	price: 4.50
});
items.push({
	id: "10",
	tipo: TIPOS.Entrantes,
	desc: "Pan chino",
	price: 1.30
});
items.push({
	id: "10A",
	tipo: TIPOS.Entrantes,
	desc: "Pan de gambas",
	price: 1.75
});
items.push({
	id: "11",
	tipo: TIPOS.Sopa,
	desc: "Sopa de la casa",
	price: 2.65
});
items.push({
	id: "12",
	tipo: TIPOS.Sopa,
	desc: "Sopa de aleta de tiburón",
	price: 2.75
});
items.push({
	id: "13",
	tipo: TIPOS.Sopa,
	desc: "Sopa agripicante",
	price: 2.60
});
items.push({
	id: "14",
	tipo: TIPOS.Sopa,
	desc: "Sopa de maíz con pollo",
	price: 2.75
});
items.push({
	id: "15",
	tipo: TIPOS.Sopa,
	desc: "Sopa de pollo con champiñón",
	price: 2.60
});
items.push({
	id: "16",
	tipo: TIPOS.Sopa,
	desc: "Sopa de huevo de pollo",
	price: 2.50
});
items.push({
	id: "17",
	tipo: TIPOS.Sopa,
	desc: "Sopa de fideos",
	price: 2.90
});
items.push({
	id: "17A",
	tipo: TIPOS.Sopa,
	desc: "Sopa de huevo con tomate",
	price: 2.50
});
items.push({
	id: "18",
	tipo: TIPOS.TallarinesArroz,
	desc: "Arroz con tres delicias",
	price: 3.20
});
items.push({
	id: "19",
	tipo: TIPOS.TallarinesArroz,
	desc: "Arroz frito con gambas",
	price: 3.90
});
items.push({
	id: "20",
	tipo: TIPOS.TallarinesArroz,
	desc: "Arroz frito con curry",
	price: 3.70
});
items.push({
	id: "22",
	tipo: TIPOS.TallarinesArroz,
	desc: "Arroz frito de la casa",
	price: 4.55
});
items.push({
	id: "23",
	tipo: TIPOS.TallarinesArroz,
	desc: "Arroz blanco",
	price: 1.50
});
items.push({
	id: "24",
	tipo: TIPOS.TallarinesArroz,
	desc: "Arroz con soja japonés",
	price: 3.50
});
items.push({
	id: "26",
	tipo: TIPOS.TallarinesArroz,
	desc: "Tallarines con tres delicias",
	price: 3.75
});
items.push({
	id: "27",
	tipo: TIPOS.TallarinesArroz,
	desc: "Tallarines con gambas",
	price: 3.90
});
items.push({
	id: "28",
	tipo: TIPOS.TallarinesArroz,
	desc: "Tallarines chinos a la plancha",
	price: 4.80
});
items.push({
	id: "29",
	tipo: TIPOS.TallarinesArroz,
	desc: "Tallarines con verduras",
	price: 3.50
});
items.push({
	id: "30",
	tipo: TIPOS.TallarinesArroz,
	desc: "Fideos con tres delicias",
	price: 4.50
});
items.push({
	id: "30A",
	tipo: TIPOS.TallarinesArroz,
	desc: "Fideos con gambas",
	price: 4.90
});
items.push({
	id: "31",
	tipo: TIPOS.TallarinesArroz,
	desc: "Fideos de la casa",
	price: 5.10
});
items.push({
	id: "31A",
	tipo: TIPOS.TallarinesArroz,
	desc: "Fideos estilo Singapur",
	price: 4.75
});
items.push({
	id: "32",
	tipo: TIPOS.Verduras,
	desc: "Bambú y setas chinas salteadas",
	price: 4.30
});
items.push({
	id: "33",
	tipo: TIPOS.Verduras,
	desc: "Verdura variada salteada",
	price: 3.50
});
items.push({
	id: "37",
	tipo: TIPOS.Pollo,
	desc: "Pollo con verdura",
	price: 4.50
});
items.push({
	id: "37A",
	tipo: TIPOS.Pollo,
	desc: "Pollo con salsa de ostras",
	price: 4.60
});
items.push({
	id: "38",
	tipo: TIPOS.Pollo,
	desc: "Pollo con curry",
	price: 4.60
});
items.push({
	id: "39",
	tipo: TIPOS.Pollo,
	desc: "Pollo con champiñón",
	price: 4.65
});
items.push({
	id: "40",
	tipo: TIPOS.Pollo,
	desc: "Pollo con bambu y setas chinas",
	price: 4.75
});
items.push({
	id: "41",
	tipo: TIPOS.Pollo,
	desc: "Pollo con salsa picante",
	price: 4.60
});
items.push({
	id: "42",
	tipo: TIPOS.Pollo,
	desc: "Pollo con almendras",
	price: .60
});
items.push({
	id: "42A",
	tipo: TIPOS.Pollo,
	desc: "Pollo crujiente con almendras",
	price: 5.50
});
items.push({
	id: "43",
	tipo: TIPOS.Pollo,
	desc: "Pollo con piña",
	price: 5.50
});
items.push({
	id: "44",
	tipo: TIPOS.Pollo,
	desc: "Pollo agridulce",
	price: 4.50
});
items.push({
	id: "44A",
	tipo: TIPOS.Pollo,
	desc: "Pollo agripicante",
	price: 4.75
});
items.push({
	id: "45",
	tipo: TIPOS.Pollo,
	desc: "Pollo con limón",
	price: 4.65
});
items.push({
	id: "46",
	tipo: TIPOS.Pollo,
	desc: "Bolitas de pollo fritas",
	price: 4.30
});
items.push({
	id: "47",
	tipo: TIPOS.Pollo,
	desc: "Pollo con patatas fritas",
	price: 4.65
});
items.push({
	id: "48",
	tipo: TIPOS.Pollo,
	desc: "Pollo fino frito",
	price: 5.50
});
items.push({
	id: "49",
	tipo: TIPOS.Pollo,
	desc: "Pollo con salsa Gon-Bao (picante)",
	price: 4.5
});
items.push({
	id: "50",
	tipo: TIPOS.Ternera,
	desc: "Ternera con verduras variadas",
	price: 4.50
});
items.push({
	id: "50A",
	tipo: TIPOS.Ternera,
	desc: "Ternera con zanahoria (picante)",
	price: 4.75
});
items.push({
	id: "51",
	tipo: TIPOS.Ternera,
	desc: "Ternera con curry",
	price: 4.75
});
items.push({
	id: "52",
	tipo: TIPOS.Ternera,
	desc: "Ternera con champiñón",
	price: 4.80
});
items.push({
	id: "53",
	tipo: TIPOS.Ternera,
	desc: "Ternera con bambú y setas chinas",
	price: 4.95
});
items.push({
	id: "54",
	tipo: TIPOS.Ternera,
	desc: "Ternera con salsa picante",
	price: 4.75
});
items.push({
	id: "55",
	tipo: TIPOS.Ternera,
	desc: "Ternera con cebolla",
	price: 4.50
});
items.push({
	id: "56",
	tipo: TIPOS.Ternera,
	desc: "Ternera con salsa de ostras",
	price: 4.75
});
items.push({
	id: "57",
	tipo: TIPOS.Ternera,
	desc: "Ternera con pimientos verdes",
	price: 4.65
});
items.push({
	id: "58",
	tipo: TIPOS.Ternera,
	desc: "Ternera con patatas fritas",
	price: 4.95
});
items.push({
	id: "59",
	tipo: TIPOS.Ternera,
	desc: "Ternera con salsa Gon-Bao (picante)",
	price: 4.95
});
items.push({
	id: "59A",
	tipo: TIPOS.Ternera,
	desc: "Ternera con salsa de curry japonés",
	price: 4.95
});
items.push({
	id: "60",
	tipo: TIPOS.Gambas,
	desc: "Gambas con verdura veriada",
	price: 6.50
});
items.push({
	id: "61",
	tipo: TIPOS.Gambas,
	desc: "Gambas con curry",
	price: 6.65
});
items.push({
	id: "62",
	tipo: TIPOS.Gambas,
	desc: "Gambas con champiñones",
	price: 6.95
});
items.push({
	id: "63",
	tipo: TIPOS.Gambas,
	desc: "Gambas con bambú y setas chinas",
	price: 6.95
});
items.push({
	id: "64",
	tipo: TIPOS.Gambas,
	desc: "Gambas con salsa de otras",
	price: 6.65
});
items.push({
	id: "64A",
	tipo: TIPOS.Gambas,
	desc: "Gambas con salsa picante",
	price: 6.65
});
items.push({
	id: "65",
	tipo: TIPOS.Gambas,
	desc: "Gambas con almendras",
	price: 6.90
});
items.push({
	id: "66",
	tipo: TIPOS.Gambas,
	desc: "Langostinos fritos",
	price: 6.85
});
items.push({
	id: "68",
	tipo: TIPOS.Gambas,
	desc: "Calamares con salsa picante",
	price: 5.80
});
items.push({
	id: "70",
	tipo: TIPOS.CerdoPato,
	desc: "Cerdo agridulce",
	price: 4.50
});
items.push({
	id: "70A",
	tipo: TIPOS.CerdoPato,
	desc: "Cerdo con verduras",
	price: 4.50
});
items.push({
	id: "71",
	tipo: TIPOS.CerdoPato,
	desc: "Cerdo con salsa Gon-Bao (picante)",
	price: 4.95
});
items.push({
	id: "71A",
	tipo: TIPOS.CerdoPato,
	desc: "Cerdo con salsa picante",
	price: 4.50
});
items.push({
	id: "72",
	tipo: TIPOS.CerdoPato,
	desc: "Costillas de cerdo fritas de la casa",
	price: 6.80
});
items.push({
	id: "73",
	tipo: TIPOS.CerdoPato,
	desc: "Coastillas con salsa especial",
	price: 5.80
});
items.push({
	id: "74",
	tipo: TIPOS.CerdoPato,
	desc: "Pato Pekín",
	price: 10.95
});
items.push({
	id: "75",
	tipo: TIPOS.CerdoPato,
	desc: "Pato frito",
	price: 8.50
});
items.push({
	id: "76",
	tipo: TIPOS.CerdoPato,
	desc: "Pato con bambú y setas chinas",
	price: 7.80
});
items.push({
	id: "77",
	tipo: TIPOS.CerdoPato,
	desc: "Pato con piña",
	price: 7.80
});
items.push({
	id: "78",
	tipo: TIPOS.CerdoPato,
	desc: "Pato con naranja",
	price: 7.80
});
items.push({
	id: "80",
	tipo: TIPOS.Especiales,
	desc: "Ku-Bak con gambas",
	price: 6.30
});
items.push({
	id: "81",
	tipo: TIPOS.Especiales,
	desc: "Ku-Bak con tres delicias",
	price: 5.95
});
items.push({
	id: "82",
	tipo: TIPOS.Especiales,
	desc: "Ternera Tailandés",
	price: 5.50
});
items.push({
	id: "83",
	tipo: TIPOS.Especiales,
	desc: "Ensalada Tailandés",
	prce: 4.50
});
items.push({
	id: "84",
	tipo: TIPOS.Especiales,
	desc: "Pato Tailandés",
	price: 8.50
});
items.push({
	id: "85",
	tipo: TIPOS.Especiales,
	desc: "Familia feliz",
	price: 6.80
});
items.push({
	id: "87",
	tipo: TIPOS.Especiales,
	desc: "Pollo friito especial (TSAO)",
	price: 5.95
});
items.push({
	id: "87A",
	tipo: TIPOS.Especiales,
	desc: "Pollo frito estilo Hong Kong con sésamo",
	price: 5.95
});
items.push({
	id: "88",
	tipo: TIPOS.Especiales,
	desc: "Arroz frito Tailandés",
	price: 3.80
});
items.push({
	id: "89",
	tipo: TIPOS.Especiales,
	desc: "Arroz con marisco y curry estilo Tailandés",
	price: 4.80
});
items.push({
	id: "90",
	tipo: TIPOS.Especiales,
	desc: "Pollo frito con salsa japonés",
	price: 4.95
});
items.push({
	id: "002",
	tipo: TIPOS.DianXin,
	desc: "Empanadillas chinas de cerdo a la plancha (8 und.)",
	price: 4.95
});
items.push({
	id: "004",
	tipo: TIPOS.DianXin,
	desc: "Xiao Jiao (Relleno de gambas,zanahoria,bambú,etc) (4 unid.)",
	price: 3.95
});
items.push({
	id: "005",
	tipo: TIPOS.DianXin,
	desc: "Empanadillas chinas con pollo a la plancha (8 unid.) ",
	price: 4.95
});
items.push({
	id: "007",
	tipo: TIPOS.DianXin,
	desc: "Empanadillas chinas con cerdo al vapor (8 unid.)",
	price: 4.95
});
items.push({
	id: "008",
	tipo: TIPOS.DianXin,
	desc: "Xiao Lon Bao de verdo al vapor (6 unid.)",
	price: 3.95
});
items.push({
	id: "010",
	tipo: TIPOS.DianXin,
	desc: "Samosa (Relleno de pollo,curry, verduras, etc ) (6 und.)",
	price: 2.90
});
items.push({
	id: "012",
	tipo: TIPOS.DianXin,
	desc: "Empanadilla chinas con pollo al vapor (8 unid.)",
	price: 4.95
});
items.push({
	id: "017",
	tipo: TIPOS.DianXin,
	desc: "Xiao Lon Bao con pollo al vapor (6 unid.)",
	price: 3.95
});
items.push({
	id: "019",
	tipo: TIPOS.DianXin,
	desc: "Si Ci Jiao (4 unid.)",
	price: 3.95
});
items.push({
	id: "020",
	tipo: TIPOS.DianXin,
	desc: "Sao Mai (4 unid.)",
	price: 3.95
});
items.push({
	id: "001",
	tipo: TIPOS.DianXin,
	desc: "Entremeses para 2 personas ( Si Ci Jiao (2) Xiao Lon Bao (2) Sao Mai (2) Xiao Jiao (2))",
	price: 7.50
});
items.push({
	id: "009",
	tipo: TIPOS.DianXin,
	desc: "Entremeses para 3 personas ( Si Ci Jiao (3) Xiao Lon Bao (3) Sao Mai (3) Xiao Jiao (3))",
	price0: 10.50
});
items.push({
	id: "96",
	tipo: TIPOS.Japonesa,
	desc: "Tallarines japoneses",
	price: 5.50
});
items.push({
	id: "98",
	tipo: TIPOS.Japonesa,
	desc: "Sashimi de salmón (9 unid.)",
	price: 5.95
});
items.push({
	id: "99",
	tipo: TIPOS.Japonesa,
	desc: "Sashimi de atún (9 unid.)",
	price: 5.95
});
items.push({
	id: "102",
	tipo: TIPOS.Japonesa,
	desc: "Sashimi de gambas (9 unid.)",
	price: 5.95
});
items.push({
	id: "103",
	tipo: TIPOS.Japonesa,
	desc: "Variado de sashimi (16 unid.)",
	price: 10.95
});
items.push({
	id: "104",
	tipo: TIPOS.Japonesa,
	desc: "Maki de salmón (8 unid)",
	price: 4.85
});
items.push({
	id: "104A",
	tipo: TIPOS.Japonesa,
	desc: "Maki con pollo (8 unid)",
	price: 4.85
});
items.push({
	id: "105",
	tipo: TIPOS.Japonesa,
	desc: "Maki de atún (8 unid)",
	price: 4.95
});
items.push({
	id: "106",
	tipo: TIPOS.Japonesa,
	desc: "Maki de almendras (8 unid)",
	price: 4.85
});
items.push({
	id: "108",
	tipo: TIPOS.Japonesa,
	desc: "Maki de gambas (8 unid)",
	price: 4.85
});
items.push({
	id: "109",
	tipo: TIPOS.Japonesa,
	desc: "Maki de aguacate (8 unid)",
	price: 3.95
});
items.push({
	id: "110",
	tipo: TIPOS.Japonesa,
	desc: "Maki de pepino (8 unid)",
	price: 3.95
});
items.push({
	id: "112",
	tipo: TIPOS.Japonesa,
	desc: "Maki de cangrejo (8 unid)",
	price: 4.55
});
items.push({
	id: "113",
	tipo: TIPOS.Japonesa,
	desc: "Variado de Maki (sushi 6 / maki 8)",
	price: 9.95
});
items.push({
	id: "113A",
	tipo: TIPOS.Japonesa,
	desc: "Sushi de salmón (6 unid)",
	price: 5.85
});
items.push({
	id: "115",
	tipo: TIPOS.Japonesa,
	desc: "Sushi de atún (6 unid)",
	price: 5.95
});
items.push({
	id: "118",
	tipo: TIPOS.Japonesa,
	desc: "Sushi de gambas (6 unid)",
	price: 5.85
});
items.push({
	id: "119",
	tipo: TIPOS.Japonesa,
	desc: "Sushi Variado (12 unid)",
	price: 10.95
});
items.push({
	id: "120",
	tipo: TIPOS.Japonesa,
	desc: "Temaki salmón (2 unid)",
	price: 4.55
});
items.push({
	id: "121",
	tipo: TIPOS.Japonesa,
	desc: "Temaki atún (2 unid)",
	price: 4.95
});
items.push({
	id: "122",
	tipo: TIPOS.Japonesa,
	desc: "Temaki verdura (2 unid)",
	price: 3.95
});
items.push({
	id: "124",
	tipo: TIPOS.Japonesa,
	desc: "Ku-Bak agridulce",
	price: 5.95
});
items.push({
	id: "126",
	tipo: TIPOS.Japonesa,
	desc: "Pollo son salsa curry japonés",
	price: 4.95
});
items.push({
	id: "127",
	tipo: TIPOS.Japonesa,
	desc: "Arroz con pollo curry japonés",
	price: 3.95
});

export {
	TIPOS,
	items
};