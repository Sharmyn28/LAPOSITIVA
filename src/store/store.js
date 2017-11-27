import createStore from 'redux-zero'

const initialState = {
   successLogin : false,
   user : {
       id : null, 
       email : null,
       name : null,
       shooppingCard : []
   },
   products: {
    carroceria: [
      {
        articulo: "Puerta trasera derecha",
        img: "https://i.ebayimg.com/images/g/48UAAOSw8GtZWoYW/s-l1600.jpg",
        marca: "Hyundai",
        modelo: "Elantra",
        precio_aseguradora: 800,
        precio_mercado: 1300,
        year: "2011-2016"
      },
      {
        articulo: "Puerta Levadiza Trasera",
        img: "https://i.ebayimg.com/images/g/p-YAAOSwLgtZi13B/s-l1600.jpg",
        marca: "Toyota",
        modelo: "Highlander",
        precio_aseguradora: 1000,
        precio_mercado: 1600,
        year: "2011-2012"
      }
    ],
    interiores: [
      {
        articulo: "Turbo Diesel Intercooler",
        img: "https://i.ebayimg.com/images/g/4RsAAOSwgZ1XsVgM/s-l1600.jpg",
        marca: "Mitsubishi",
        modelo: "Lancer",
        precio_aseguradora: 700,
        precio_mercado: 1200,
        year: "2008-2014"
      },
      {
        articulo: "Asientos",
        img: "https://i.ebayimg.com/images/g/pGwAAOSwA2hZyYGP/s-l1600.jpg",
        marca: "Jeep",
        modelo: "Liverti",
        precio_aseguradora: 1000,
        precio_mercado: 1600,
        year: "2010-2012"
      }
    ],
    interno: [
      {
        articulo: "Faro delantero derecho",
        img: "http://es.seveneader.com/picture/20141022/20141022112345655.JPG",
        marca: "Toyota",
        modelo: "Prado",
        precio_aseguradora: 700,
        precio_mercado: 1120,
        year: "2014-2016"
      },
      {
        articulo: "Espejo + Tapa + Vista lateral",
        img: "https://i.ebayimg.com/images/g/Ju8AAOSwY45URjHU/s-l1600.jpg",
        marca: "Hyundai",
        modelo: "Tucson",
        precio_aseguradora: 550,
        precio_mercado: 920,
        year: "2014-2016"
      },
      {
        articulo: "Rejilla delantera",
        img: "https://http2.mlstatic.com/faro-facia-parrilla-toyota-corolla-2013-2014-D_NQ_NP_262601-MLM20345010320_072015-F.jpg",
        marca: "Toyota",
        modelo: "Corolla",
        precio_aseguradora: 350,
        precio_mercado: 580,
        year: "2007-2013"
      }
    ],
    mecanica: [
      {
        articulo: "Radiador Turbo Diesel Intercooler",
        img: "http://www.4x4brasil.com.br/forum/attachments/vendem-se-pecas-e-acessorios/449694d1391616435-kit-intercooler-completo-nissan-frontier-kit-20-2007.jpg",
        marca: "Nissan",
        modelo: "Navara",
        precio_aseguradora: 3500,
        precio_mercado: 5500,
        year: "2012-2013"
      },
      {
        articulo: "Turbo Diesel Intercooler",
        img: "https://i.ebayimg.com/images/g/F~QAAOSwn-tZNhur/s-l500.jpg",
        marca: "Nissan",
        modelo: "Phatfither",
        precio_aseguradora: 6000,
        precio_mercado: 10000,
        year: "2014-2017"
      }
    ]
       
   },
   selectedSection: 'mecanic',
};

const store = createStore (initialState);
export default store;   