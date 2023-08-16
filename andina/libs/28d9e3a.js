(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{403:function(e,t,n){e.exports={}},415:function(e,t,n){"use strict";n(403)},419:function(e,t,n){"use strict";var o=n(52),l=(n(29),n(1)),r=n(107),c=l.default.extend({name:"MenuBottom",props:{items:{type:Array,default:function(){return[]}},section:{type:String,required:!0},subSection:{type:String,default:""}},methods:{getRoute:function(e){var t=[{key:this.section}];return""!==this.subSection&&t.push({key:this.subSection}),Object(r.a)([].concat(t,Object(o.a)(e)))}}}),d=(n(415),n(9)),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-bottom-index flex flex-col lg:flex-row gap-8 lg:gap-16 pt-8",class:["items-"+e.items.length]},e._l(e.items,(function(t,o){return n("NuxtLink",{key:"prim"+o,staticClass:"flex gap-2",attrs:{to:e.localePath(e.getRoute([t]))}},[n("span",{staticClass:"position font-semibold"},[e._v(e._s(o+1)+".")]),e._v(" "),"sustainable-easy-wash"===t.key?n("img",{attrs:{src:"/assets/michell/images/origins/iniciatives_04.png",alt:""}}):"sustainable-green"===t.key?n("img",{attrs:{src:"/assets/michell/images/origins/iniciatives_05.png",alt:""}}):"upcycle-yarns"===t.key?n("img",{attrs:{src:"/assets/michell/images/origins/iniciatives_06.png",alt:""}}):n("span",{staticClass:"text flex flex-col"},[n("span",{staticClass:"name font-semibold"},[e._v(e._s(e.$t("menu."+t.key+".name")))]),e.$te("menu."+t.key+".subName")?n("span",{staticClass:"sub-name font-medium text-sm"},[e._v(e._s(e.$t("menu."+t.key+".subName")))]):e._e()])])})),1)}),[],!1,null,"0cc2846e",null);t.a=component.exports},423:function(e,t,n){e.exports={}},428:function(e,t,n){"use strict";n(423)},431:function(e,t,n){"use strict";var o=n(1).default.extend({name:"HeroVideoLoop",props:{title:{type:String,default:""},subtitle:{type:String,default:""},src:{type:String,default:""},video:{type:String,default:""},loop:{type:String,default:""},sources:{type:Array,default:function(){return[]}}},data:function(){return{fullScreen:!1}},methods:{play:function(){if(""!==this.video){var element=this.$refs.video;if(element.requestFullscreen?element.requestFullscreen():element.mozRequestFullScreen?element.mozRequestFullScreen():element.webkitRequestFullscreen?element.webkitRequestFullscreen():element.msRequestFullscreen?element.msRequestFullscreen():element.classList.toggle("fullscreen"),element)this.$refs.loop.player.pause(),this.fullScreen=!0,element.play()}},fullScreenChange:function(){var element=this.$refs.video;document.fullScreen||document.mozFullScreen||document.webkitIsFullScreen||element&&(this.fullScreen=!1,this.$refs.loop.player.play(),element.pause())}}}),l=(n(428),n(9)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("video-background",{ref:"loop",staticClass:"hero-video-loop",attrs:{src:e.loop,sources:e.sources}},[n("div",{staticClass:"control",on:{click:e.play}},[e.title?n("h3",{staticClass:"text-4xl text-white font-semibold"},[e._v("\n      "+e._s(e.title)+"\n    ")]):e._e(),e._v(" "),e.subtitle?n("h4",{staticClass:"text-2xl text-white font-semibold"},[e._v("\n      "+e._s(e.subtitle)+"\n    ")]):e._e(),e._v(" "),n("img",{staticClass:"w-9",class:[{"mt-12":""!==e.subtitle||""!==e.title}],attrs:{src:"/assets/michell/images/general/play-outline.svg",alt:""}})]),e._v(" "),n("video",{ref:"video",staticClass:"fullScreen-video-tag",staticStyle:{display:"inline-block"},attrs:{controls:"",controlslist:"nodownload",preload:"metadata"},on:{webkitfullscreenchange:e.fullScreenChange,mozfullscreenchange:e.fullScreenChange,fullscreenchange:e.fullScreenChange}},[n("source",{attrs:{src:e.video,type:"video/mp4"}})])])}),[],!1,null,"6eb9f6f2",null);t.a=component.exports},439:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"alpaca-name":"Nombre científico","alpaca-poblation":"Poblacion","alpaca-habitat":"Hábitad","p1":"Alpaca is a creation from nature and it has been domesticated since the ancient times. The Peruvian Highlands started out as a source of fibre for us but also quickly became the source of our inspiration.","p2":"At Michell, we are the pioneer and leading company in the field of transforming this noble fibre into luxurious yarns, working harmoniously with nature, the environment and with the utmost respect for the local population.","story":{"possible-p1":"It is possible to obtain a fibre which does  not come at the expense of our environment?","alpaca-is":"Alpaca is","answer":"The answer is the <strong>ALPACA</strong> and you can be part of it","sustainable":"Sustainable","renewable":"Renewable","ethical":"Ethical","biodegradable":"Biodegradable","traceable":"Traceable","alpacas-p1":"Alpacas are indigenous to the Peruvian highlands, where they have been domesticated since the time of the pre-lncan cultures.","alpacas-p2":"Alpacas (lama pacos) are members of the South American camelid family which also includes Llamas, Guanacos and Vicuñas, to which they are closely related. Alpacas are indigenous to the Peruvian highlands. There are an estimated 3.5 to 4 million Alpacas in South America, and about 95% of them are found in the Southern regions of Peru.","alpacas-p3":"Alpacas are bred at altitudes ranging from 2,500 to over 4,500 metres above sea level, where they have to withstand temperatures that fluctuate between +30ºC to -20ºC in a single day and survive on a special low-protein diet based on natural grasses found on the moorelands. Alpacas are shorn every 18 months, from November to March, yielding about 2 to 3 kilograms of fibre per animal.","alpaca-types-title":"Alpaca Types","alpaca-types-p1":"There are two Alpaca types: <strong>Huacaya</strong> and <strong>Suri</strong>, which differ from each other in both their appearence and the characteristics of their fibre.","alpaca-huacaya":"Alpaca Huacaya","alpaca-huacaya-p1":"The Huacaya is the predominant species of Alpaca and its fine and voluminous fibre offers the widest variety of natural shades. The Huacaya has a harmonious build which give the impression of strength and grace. This animal constitutes approximately 90% of the Peruvian Alpaca population.","alpaca-huacaya-name":"Vicugna Pacos","alpaca-huacaya-poblation":"4.0 Millones","alpaca-huacaya-habitat":"Peru, Chile y Bolivia","alpaca-suri":"Alpaca Suri","alpaca-suri-p1":"Suri is the less frequent of the Alpaca species. It has a beautiful, long, glossy and silky coat and its fibre in produced in fewer natural shades than the Huacayo, mostly beige and light browns. The Suri has a distinctive appearance due to its long, curly hair and this animal represents approximately 10% of the Peruvian Alpaca population.","alpaca-suri-name":"Vicugna Pacos","alpaca-suri-poblation":"400 000 ","alpaca-suri-habitat":"Peru, Chile y Bolivia","single-p1":"Alpacas have lived at altitudes raging from 2,500 to over 4,500 metres above sea level for thousands of years, withstanding extreme weather conditions which can vary from +30°C to – 20°C in a single day. If this noble fibre did not have certain special properties, the animal would die.","single-p2":"Nature could not have designed a better natural insulating fibre. Alpacas survive on a low protein diet based on natural vegetation typically found on high altitude moorlands. They graze extensively rather than intensively. There is fewer than one Alpaca per acre, and this minimizes the impact of farming on the environment as well as giving grazed pasture time to regenerate. Indigenous people from our Andes Mountains obtain the high quality Alpaca fibre every 12 months during shearing season (November through March) causing no harm to the Alpacas.","fibre-p1":"Alpaca fibre is a natural hair made of protein and, as such, is naturally biodegradable when disposed and blends back into the earth within a relatively short period of time. In contrast, synthetic and other man-made fibres take very long time to degrade and have a negative impact on our environment.","people-fibre-p1":"Once the fibre is collected it is then hand sorted by experienced women, enabling us to obtain <strong>15 natural and undyed shades</strong>, which can also later be dyed.","people-fibre-p2":"Alpaca fibre is a natural hair made of protein and, as such, is naturally biodegradable when disposed and blends back into the earth within a relatively short period of time. In contrast, synthetic and other man-made fibres take very long time to degrade and have a negative impact on our environment.","discover-p1":"Discover Our  Alpaca TOPS Colour Card Collection","hands-p1":"<strong>We care for our relationship with nature and with each other.</strong> We want to let the world know that Alpaca is the natural option, and that not everything has to be made of artificial materials.","hands-p2":"Alpaca not only feels good next to your skin, but it is also prized for its thermal propertries, fineness, silkiness, softness and durability (it has a longer shelf-life than merino wool and any other fibres). We select our suppliers and establish long relationships with each of them. We are starting to cooperate and work closely with major Alpaca breeders so we can guarantee high and reliable quality.","collection-p1":"We have no doubt you will find the Eco, Organic & RAS Alpaca and Blends Yarn Collections as inspiring as we do. Our philosophy is to use products that are natural, <strong class=\'font-semibold\'>sustainable, renewable, biodegradable and ethical.</strong>","collection-discover":"Discover Our Eco, Organic & RAS<br/>A/W 24-25 Yarn Collection"},"camelids":{"p1":"The South American camelids live mainly in the Peruvian Andes and their breeding constitutes an economic activity of great importance for a large sector of the population in the Peruvian highlands who dedicate their time and resources to the breeding and management of Alpacas, Llamas, Guanacos and Vicuñas.","llama-title":"Llama","llama-p1":"The Llama (Lama glama) is the biggest and heaviest of the South American camelids. Its long legs and prominent, curved ears are the features which distinguishes it from the other camelids. The Llama has been domesticated and used as beasts of burden for transport since pre-Incan times and even today the llama forms part of many of the diverse customs and religious rituals of the Andean peoples. There are two species of llama: the ‘Qara’ or “without hair” and the ‘Chaku’ or ”woolly”. The hair of the Llama is coarser and rougher than that of the Alpaca, but if removed, can be just as soft. Almost 65% of all llamas live in the Bolivian highlands.","llama-name":"Vicugna Pacos","llama-poblation":"4.0 Millones","llama-habitat":"Peru, Chile y Bolivia","guanaco-title":"Guanaco","guanaco-p1":"Just like the Vicuña, the Guanaco is a wild camelid that lives in small groups of females, usually dominated by a single male. The fibre of the Guanaco possesses qualities which, to the touch, demonstrate its high quality. Another notable characteristic is the reddish tone of its fibre. The guanaco is the only South American camelid which can adapt easily to different environments. It is able to live at sea level or at high altitudes as much as 4,600 metres above sea level.","guanaco-name":"Guanaco (Lama guanicoe)","guanaco-poblation":"600 000","guanaco-habitat":"Argentina, Chile, Peru y Bolivia","vicuña-title":"Vicuña","vicuña-p1":"The vicuña is the smallest of the South American camelids, with a shoulder height of approximately 90 cm and a weight of around 50 Kgs. There are approximately 180,000 Vicuñas in South America, the majority of which live in Peru, with a smaller number in Bolivia, Chile and Argentina. The Vicuña is covered with an extraordinarily smooth, shiny coat. The annual production of fibre sheared from Vicuña is approximately 200 grs. per animal. Its hair is considered the finest animal fibre in the world and in the 60’s the animal was in danger of extinction. However, thanks to various Peruvian conservation programmes, the vicuña is out of danger.","vicuña-name":"Vicuña (Vicugna)","vicuña-poblation":"250 000","vicuña-habitat":"Peru, Chile, Bolivia y Argentina"},"wool":{"p1":"Peruvian Highland Wool comes from a crossbreed sheep that lives in the Peruvian highlands at over 2,000m above sea level. These crossbreed animals derive from Corridale and Merinos, and the environment in which they live allow them to produce a wool that is dry, crimpy and durable. Its micron ranges from 24.5mic to 28.5mics and it is available in raw white and some undyed colour offered in the Eco line."}},"es":{"alpaca-name":"Nombre científico","alpaca-poblation":"Poblacion","alpaca-habitat":"Hábitad","p1":"La fibra de la Alpaca es una creación de la naturaleza. Las alturas peruanas fueron desde el principio una fuente de producción de fibra para nosotros y ahora son la fuente de nuestra inspiración. Las Alpacas han sido criadas desde tiempos ancestrales.","p2":"En Michell, somos la empresa pionera y líder en el campo de la transformación de esta noble fibra en lujosos hilos, trabajando en armonía con la naturaleza, el medio ambiente y con el máximo respeto a la población local.","story":{"possible-p1":"¿Es posible obtener una fibra que no perjudique nuestro medio ambiente?","alpaca-is":"Alpaca es","answer":"La respuesta es la <strong>ALPACA</strong> y puedes ser parte de ello","sustainable":"Sostenible","renewable":"Renovable","ethical":"Etica","biodegradable":"Biodegradable","traceable":"Traceable","alpacas-p1":"Las alpacas son autóctonas de la sierra peruana, donde han sido domesticadas desde la época de las culturas pre-lncas.","alpacas-p2":"Las alpacas (lama pacos) son miembros de la familia de los camélidos sudamericanos, a la que también pertenecen las llamas, los guanacos y las vicuñas, con las que están estrechamente relacionadas. Se calcula que hay entre 3,5 y 4 millones de alpacas en Sudamérica, y aproximadamente el 95% de ellas se encuentran en las regiones del sur de Perú. ","alpacas-p3":"Las alpacas se crían en altitudes que oscilan entre los 2.500 y los 4.500 metros sobre el nivel del mar, donde tienen que soportar temperaturas que oscilan entre los +30ºC y los -20ºC en un solo día y sobrevivir con una dieta especial baja en proteínas basada en los pastos naturales que se encuentran en los páramos. Las alpacas se esquilan cada 18 meses, de noviembre a marzo, y obtienen entre 2 y 3 kilos de fibra por animal.","alpaca-types-title":"Tipos de alpaca","alpaca-types-p1":"Existen dos tipos de alpacas: Huacaya y Suri, que se diferencian entre sí tanto por su apariencia como por las características de su fibra.","alpaca-huacaya":"Alpaca Huacaya","alpaca-huacaya-p1":"La Huacaya es el tipo de Alpaca predominante. Su fina y voluminosa fibra ofrece la más amplia variedad de tonos naturales. Las Huacayas tienen una contextura armoniosa dando la apariencia de fuerza y gracia. Alrededor del 90% de la población de Alpacas en el Perú son Huacayas.","alpaca-huacaya-name":"Vicugna Pacos","alpaca-huacaya-poblation":"4.0 Millones","alpaca-huacaya-habitat":"Peru, Chile y Bolivia","alpaca-suri":"Alpaca Suri","alpaca-suri-p1":"Suri es el tipo de Alpaca menos predominante. Tiene una fibra brillante larga y sedosa. Su fibra es producida en una menor variedad de tonos naturales: blanco, beige y marrones claros. La contextura del Suri tiene una apariencia distintiva debido a su pelo largo y rizado. Cerca del 10% de la población de Alpacas en el Perú son Suri.","alpaca-suri-name":"Vicugna Pacos","alpaca-suri-poblation":"400 000 ","alpaca-suri-habitat":"Peru, Chile y Bolivia","single-p1":"Las alpacas han vivido durante miles de años en altitudes que van de los 2.500 a los más de 4.500 metros sobre el nivel del mar, soportando condiciones climáticas extremas que pueden variar de +30°C a - 20°C en un solo día. Si esta noble fibra no tuviera ciertas propiedades especiales, el animal moriría.","single-p2":"La naturaleza no podría haber diseñado una fibra natural más aislante. Las alpacas sobreviven con una dieta baja en proteínas, basada en la vegetación natural típica de los páramos de gran altitud. Pastan de forma extensiva y no intensiva. Hay menos de una alpaca por hectárea, y esto minimiza el impacto de la cría en el medio ambiente, además de dar tiempo a que los pastos se regeneren. Los indígenas de nuestra cordillera de los Andes obtienen la fibra de alpaca de alta calidad cada 12 meses durante la temporada de esquila (de noviembre a marzo) sin causar ningún daño a las alpacas.","fibre-p1":"La fibra de alpaca es un pelo natural hecho de proteína y, como tal, es naturalmente biodegradable cuando se desecha y se mezcla de nuevo con la tierra en un período de tiempo relativamente corto. En cambio, las fibras sintéticas y otras fibras artificiales tardan mucho tiempo en degradarse y tienen un impacto negativo en nuestro medio ambiente.","people-fibre-p1":"Una vez recogida la fibra, es clasificada a mano por mujeres experimentadas, lo que nos permite obtener 15 tonos naturales y sin teñir, que también pueden ser teñidos posteriormente.","people-fibre-p2":"La fibra de alpaca es un pelo natural hecho de proteínas y, como tal, es naturalmente biodegradable cuando se desecha y se vuelve a mezclar con la tierra en un periodo de tiempo relativamente corto. En cambio, las fibras sintéticas y otras fibras artificiales tardan mucho tiempo en degradarse y tienen un impacto negativo en nuestro medio ambiente.","discover-p1":"Descubra nuestra colección de cartas <br/> colores de Alpaca TOPS","hands-p1":"Cuidamos nuestra relación con la naturaleza y con los demás. Queremos que el mundo sepa que la alpaca es la opción natural, y que no todo tiene que estar hecho de materiales artificiales.","hands-p2":"La alpaca no sólo se siente bien junto a la piel, sino que también es apreciada por sus propiedades térmicas, su finura, su sedosidad, su suavidad y su durabilidad (tiene una vida útil más larga que la lana de merino y cualquier otra fibra). Seleccionamos a nuestros proveedores y establecemos largas relaciones con cada uno de ellos. Empezamos a cooperar y a trabajar estrechamente con los principales criadores de alpacas para poder garantizar una calidad alta y fiable.","collection-p1":"No tenemos ninguna duda de que las colecciones de hilos Eco, Organic & RAS Alpaca y Blends le resultarán tan inspiradoras como a nosotros. Nuestra filosofía es utilizar productos <strong class=\'font-semibold\'>naturales, sostenibles, renovables, biodegradables y éticos.</strong>","collection-discover":"Descubra nuestra colección ecológica, orgánica y RAS<br/>Colección de hilos A/W 24-25"},"camelids":{"p1":"Los camélidos sudamericanos habitan principalmente en los Andes del Perú; su crianza constituye una actividad económica de gran importancia para un vasto sector de la población alto andina ya que se dedican al manejo de Vicuñas y Guanacos, y a la crianza de Alpacas y Llamas.","llama-title":"Llama","llama-p1":"La llama (Lama glama) es el mayor y más pesado de los camélidos sudamericanos. Sus largas patas y sus orejas prominentes y curvadas son las características que la distinguen de los demás camélidos. La llama ha sido domesticada y utilizada como bestia de carga para el transporte desde la época preincaica y aún hoy forma parte de muchas de las diversas costumbres y rituales religiosos de los pueblos andinos. Existen dos especies de llamas: la \'Qara\' o \\"sin pelo\\" y la \'Chaku\' o \\"lanuda\\". El pelo de la llama es más grueso y áspero que el de la alpaca, pero si se le quita, puede ser igual de suave. Casi el 65% de las llamas viven en el altiplano boliviano.","llama-name":"Lama Glama","llama-poblation":"1.0 Millon (Llama Chaku) 1.5 Millones (Llama Qara)","llama-habitat":"Peru, Chile, Bolivia y Argentina","guanaco-title":"Guanaco","guanaco-p1":"Al igual que la vicuña, el guanaco es un camélido salvaje que vive en pequeños grupos de hembras, generalmente dominados por un solo macho. La fibra del guanaco posee cualidades que, al tacto, demuestran su alta calidad. Otra característica notable es el tono rojizo de su fibra. El guanaco es el único camélido sudamericano que puede adaptarse fácilmente a diferentes entornos. Es capaz de vivir a nivel del mar o en altitudes de hasta 4.600 metros sobre el nivel del mar.","guanaco-name":"Guanaco (Lama guanicoe)","guanaco-poblation":"600 000","guanaco-habitat":"Argentina, Chile, Peru y Bolivia","vicuña-title":"Vicuña","vicuña-p1":"La vicuña es el más pequeño de los camélidos sudamericanos, con una altura de los hombros de aproximadamente 90 cm y un peso de unos 50 kg. Hay aproximadamente 180.000 vicuñas en Sudamérica, la mayoría de las cuales viven en Perú, con un número menor en Bolivia, Chile y Argentina. La vicuña está cubierta de un pelaje extraordinariamente suave y brillante. La producción anual de fibra esquilada de la vicuña es de aproximadamente 200 grs. por animal. Su pelo está considerado como la fibra animal más fina del mundo y en los años 60 el animal estaba en peligro de extinción. Sin embargo, gracias a diversos programas de conservación peruanos, la vicuña está fuera de peligro.","vicuña-name":"Vicuña (Vicugna)","vicuña-poblation":"250 000","vicuña-habitat":"Peru, Chile, Bolivia y Argentina"},"wool":{"p1":"La lana de la sierra peruana procede de un cruce de ovejas que vive en la sierra peruana a más de 2.000 metros de altitud. Estos animales cruzados derivan de Corridale y Merinos, y el entorno en el que viven les permite producir una lana que es seca, ondulada y duradera. Su micraje oscila entre 24,5mic y 28,5mics y está disponible en blanco crudo y algún color sin teñir que se ofrece en la línea Eco."}}}'),delete e.options._Ctor}},518:function(e,t,n){"use strict";var o=n(439),l=n.n(o);t.default=l.a},611:function(e,t,n){"use strict";n.r(t);var o=n(1),menu=n(172),l=n(431),r=n(419),c=o.default.extend({name:"AlpacaStoryIndexPage",components:{HeroVideoLoop:l.a,MenuBottom:r.a},nuxtI18n:{paths:{es:"/la-alpaca"}},data:function(){return{menu:menu.a["alpaca-story"].children}},head:function(){var section="general",e="alpaca-story";return{title:this.$t("pages.".concat(section,".").concat(e,".title")),meta:[{hid:"description",name:"description",content:this.$t("pages.".concat(section,".").concat(e,".description"))},{hid:"og:description",name:"og:description",content:this.$t("pages.".concat(section,".").concat(e,".description"))},{hid:"og:title",name:"og:title",content:this.$t("pages.".concat(section,".").concat(e,".title"))}]}}}),d=n(9),m=n(518),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"alpaca-story page-index"},[n("HeroVideoLoop",{staticClass:"video",attrs:{title:e.$t("menu.the-alpaca-story.name"),subtitle:e.$t("menu.the-alpaca-story.subName"),loop:"https://www.michell.com.pe/assets/video/Alpaca-Story/Alpaca-Story-Loop.mp4",video:"https://www.michell.com.pe/assets/video/Alpaca-Story/Alpaca-Story-video-Largo.mp4"}}),e._v(" "),n("div",{staticClass:"content flex"},[e._m(0),e._v(" "),n("div",{staticClass:"info p-9 lg:pr-0 lg:py-9 lg:pr-9 flex flex-col flex-grow justify-between"},[n("div",{staticClass:"text-1 text-sm"},[n("h4",{staticClass:"text-2xl font-semibold mb-6"},[e._v("\n          "+e._s(e.$t("menu.the-alpaca-story.name"))+"\n        ")]),e._v(" "),n("p",[e._v("\n          "+e._s(e.$t("p1"))+"\n        ")]),e._v(" "),n("p",[e._v(e._s(e.$t("p2")))])]),e._v(" "),n("MenuBottom",{attrs:{items:e.menu,section:"alpaca-story"}})],1)])],1)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"logo-90 flex pt-9 items-start justify-end pr-10 flex-none"},[t("img",{staticClass:"w-32",attrs:{src:"/assets/michell/images/general/Capa_x0020_2.svg",alt:""}})])}],!1,null,"3fbcd416",null);"function"==typeof m.default&&Object(m.default)(component);t.default=component.exports}}]);