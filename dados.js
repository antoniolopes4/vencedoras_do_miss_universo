let misses = [
    {
        name: "Armi Kuusela",
        year: "1952",
        country: "Finlândia",
        description: "Armi Helena Kuusela é uma rainha da beleza finlandesa que foi vencedora do concurso Miss Universo 1952, realizado em Long Beach, Estados Unidos, mas renunciou ao título nove meses depois de vencer para se casar com um empresário filipino que havia conhecido ao visitar o país asiático.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/I%C3%AAda_Maria_Vargas_at_1963_National_Governor%27s_Conference.jpg/330px-I%C3%AAda_Maria_Vargas_at_1963_National_Governor%27s_Conference.jpg",
        link: "https://pt.wikipedia.org/wiki/Armi_Kuusela"
    },
    {
        name: "Ieda Maria Vargas",
        year: "1963",
        country: "Brasil",
        description: "Ieda Maria Vargas Athanásio (nascida Ieda Maria Vargas; Porto Alegre, 31 de dezembro de 1944) é uma rainha da beleza brasileira, Miss Brasil e Miss Universo 1963. Foi a primeira brasileira a conquistar o título, aos 18 anos, em 20 de julho daquele ano, em Miami Beach, Estados Unidos.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Ieda_Maria_Vargas%2C_Miss_Universe%2C_breakfast_in_bed_%28cropped%29.jpg/652px-Ieda_Maria_Vargas%2C_Miss_Universe%2C_breakfast_in_bed_%28cropped%29.jpg",
        link: "https://pt.wikipedia.org/wiki/Ieda_Maria_Vargas"
    },
    {
        name: "Martha Vasconcellos",
        country: "Brasil",
        description: "Martha Maria Cordeiro Vasconcellos (Salvador, 18 de junho de 1948) é uma rainha da beleza brasileira, Miss Brasil e Miss Universo 1968. Ex-professora e formada em Psicologia, foi a segunda e última brasileira a conquistar a coroa de Miss Universo, em Miami Beach, Estados Unidos, em 13 de julho de 1968, vencendo 64 candidatas de todo o mundo.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvGkslEXRJyL69LwpvRa1RQ3682wL_fUpqDA&s",
        link: "https://pt.wikipedia.org/wiki/Martha_Vasconcellos"
    },
    {
        name: "Amparo Muñoz",
        year: "1974",
        country: "Espanha",
        description: "Amparo Muñoz Quesada (Vélez-Málaga, 20 de junho de 1954 – Málaga, 27 de fevereiro de 2011) foi uma modelo, atriz e rainha da beleza espanhola, coroada como Miss Universo 1974. Foi também a única vencedora da Espanha e a única a ter renunciado ao cargo na história do Miss Universo.",
        image: "https://upload.wikimedia.org/wikipedia/pt/4/45/AMunoz.jpg?20150212055020",
        link: "https://pt.wikipedia.org/wiki/Amparo_Mu%C3%B1oz"
    },
    {
        name: "Margaret Gardiner",
        year: "1978",
        country: "África do Sul",
        description: "Margaret Gardiner (Cidade do Cabo, 21 de agosto de 1959) é uma rainha da beleza sul-africana, coroada Miss Universo 1978 no evento realizado em Acapulco, México, em 24 de julho daquele ano. Foi a primeira africana a vencer o concurso.",
        image: "https://upload.wikimedia.org/wikipedia/pt/b/be/Mg350h.jpg?20110720223232",
        link: "https://pt.wikipedia.org/wiki/Margaret_Gardiner"
    },
    {
        name: "Irene Sáez",
        year: "1981",
        country: "Venezuela",
        description: "Irene Lailin Sáez Conde (Caracas, 13 de dezembro de 1961) é uma rainha da beleza e ex-política venezuelana, coroada como Miss Venezuela e Miss Universo 1981, a segunda representante de seu país a conseguir este feito.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Irene_S%C3%A1ez_portrait_in_1997_%28cropped%29.jpg/792px-Irene_S%C3%A1ez_portrait_in_1997_%28cropped%29.jpg",
        link: "https://pt.wikipedia.org/wiki/Irene_S%C3%A1ez"
    },
    {
        name: "Angela Visser",
        year: "1989",
        country: "Países Baixos",
        description: "Angela Visser (Nieuwerkerk aan den IJssel, 18 de outubro de 1966) é uma rainha da beleza da Holanda, coroada como Miss Universo 1989 no concurso realizado na cidade de Cancún, México.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Angela_Visser_1989cropped.jpg/330px-Angela_Visser_1989cropped.jpg",
        link: "https://pt.wikipedia.org/wiki/Angela_Visser"
    },
    {
        name: "Brook Mahealani Lee",
        year: "1997",
        country: "Estados Unidos",
        description: "Brook Antoinette Mahealani Lee (Pearl City, Havaí, 6 de janeiro de1971) é uma rainha da beleza e apresentadora de televisão norte-americana , eleita Miss EUA e Miss Universo 1997.",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/BrookLee.JPG",
        link: "https://pt.wikipedia.org/wiki/Brook_Mahealani_Lee"
    },
    {
        name: "Mpule Kwelagobe",
        year: "1999",
        country: "Botswana",
        description: "Mpule Keneilwe Kwelagobe (Gaborone, 4 de novembro de 1979) é uma modelo e ativista de Botswana que foi eleita Miss Universo 1999. Foi a primeira africana negra coroada com este título, já que as duas anteriores, Margaret Gardiner, da África do Sul, e Michelle McLean, da Namíbia, são brancas.",
        image: "https://m.media-amazon.com/images/M/MV5BZjZjZjI4YjUtNDFlMy00OTNhLTk1MTQtNDQyNDNkZTE2NTJmXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
        link: "https://pt.wikipedia.org/wiki/Mpule_Kwelagobe"
    },
    {
        name: "Lara Dutta",
        year: "2000",
        country: "Índia",
        description: "Lara Dutta Bhupathi (Ghazibad, 16 de abril de 1978) é uma atriz e rainha da beleza indiana, Miss Universo 2000, eleita na edição realizada na cidade de Nicósia, em Chipre. Após seu reinado, tonou-se uma das mais famosas atrizes de cinema e personalidade da indústria cinematográfica indiana baseada em Bollywood.",
        image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/LaraDutta_cropped.jpg",
        link: "https://pt.wikipedia.org/wiki/Lara_Dutta",
    },
    {
        name: "Natalie Glebova",
        year: "2005",
        country: "Canadá",
        description: "Natalie Glebova (Tuapse, 11 de novembro de 1981) é uma modelo e rainha da beleza canadense, nascida na União Soviética . Foi coroada Miss Universo 2005, no concurso realizado em Bangkok, Tailândia, em 31 de maio daquele ano.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Natalie_Glebova_-_MU2005.jpg/330px-Natalie_Glebova_-_MU2005.jpg",
        link: "https://pt.wikipedia.org/wiki/Zuleyka_Rivera_Mendoza"
    },
    {
        name: "Riyo Mori",
        year: "2007",
        country: "Japão",
        description: "Riyo Mori (Mori Riyo) (Shizuoka, 24 de dezembro de 1986) é uma rainha da beleza japonesa coroada como Miss Universo 2007, desbancando assim, a brasileira Natália Guimarães, que terminou em segundo lugar. É a segunda representante do Japão a vencer o evento; a primeira foi Akiko Kojima em 1959.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Riyo_Mori_in_2016.jpg/150px-Riyo_Mori_in_2016.jpg",
        link: "https://pt.wikipedia.org/wiki/Riyo_Mori"
    },
    {
        name: "Leila Lopes",
        year: "2011",
        country: "Angola",
        description: "Leila Luliana da Costa Vieira Lopes Umenyiora (Benguela, 26 de fevereiro de 1986) é uma rainha de beleza angolana, eleita e coroada como Miss Angola 2011 em Luanda, no dia 18 de dezembro de 2010. A 12 de setembro de 2011, foi coroada Miss Universo 2011 na cidade de São Paulo, Brasil.",
        image: "https://www.ospaparazzi.com/imagem/201109/13111644.jpg",
        link: "https://pt.wikipedia.org/wiki/Leila_Lopes_(Miss_Angola)"
    },
    {
        name: "Catriona Gray",
        year: "2017",
        country: "Filipinas",
        description: "Catriona Elisa Magnayon Gray (Cairns, 6 de janeiro de 1994) é uma atriz, modelo, personalidade da televisão, escritora, estilista e maquiadora filipino-australiana. Catriona Gray representou as Filipinas no Miss Universo 2018, onde foi vencedora do concurso e coroada Miss Universo 2018.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Catriona_Gray_in_New_York%2C_February_2019.jpg/150px-Catriona_Gray_in_New_York%2C_February_2019.jpg",
        link: "https://pt.wikipedia.org/wiki/Catriona_Gray"
    },
    {
        name: "Andrea Meza",
        year: "2020",
        country: "México",
        description: "Zozibini Tunzi (Tsolo, 18 de setembro de 1993) é uma rainha de beleza e modelo sul-africana que foi coroada Miss Universo 2019. Ela foi anteriormente coroada Miss África do Sul 2019. Foi a terceira de seu país a vencer o Miss Universo, as anteriores foram Margaret Gardiner (1978) e Demi-Leigh Nel-Peters (2017).",
        image: "https://img.iol.pt/image/id/5dee06430cf2853f07406f71/1024.jpg",
        link: "https://pt.wikipedia.org/wiki/Zozibini_Tunzi"
    },
    {
        name: "Sheynnis Palacios",
        year: "2023",
        country: "Nicarágua",
        description: "Sheynnis Palacios (Manágua, 30 de maio de 2000) é uma modelo da nicaraguense que venceu o Miss Universo 2023. Ela se tornou a primeira vencedora do Miss Universo da Nicarágua e a primeira a vencer um dos Quatro Grandes concursos de beleza internacionais.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Sheynnis_Palacios_%282024-02-27%29_01.JPG/345px-Sheynnis_Palacios_%282024-02-27%29_01.JPG",
        link: "https://pt.wikipedia.org/wiki/Sheynnis_Palacios"
    }
];