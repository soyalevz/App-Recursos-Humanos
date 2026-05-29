const SUPABASE_URL='https://ylovgegfzzkeuylzmask.supabase.co';
const SUPABASE_KEY='sb_publishable_IemyK1It7OEr4v83BVnFyg_HumE8nLa';
const TABLE='workers';
const BASE_WORKERS=[{"id":1,"nombre":"PABLO FARIAS PARRA","rut":"11872367-8","cargo":"OPERADOR DE EXCAVADORA","cc":"MOLLER - LOS LITRES","tipo":"plazo_fijo","horario":"art22","inicio":"2025-11-26","liquido":1020162,"correo":"pabocfa@gmail.com","telefono":"56951509103","contrato_por":"","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":2,"nombre":"JUAN HIDALGO CASTRO","rut":"10735530-8","cargo":"OPERADOR DE EXCAVADORA","cc":"MOLLER - LOS LITRES","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1200000,"correo":"juanluishidalgocastro@gmail.com","telefono":"56953718810","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":3,"nombre":"ELIAS GATICA GUAJARDO","rut":"14177066-7","cargo":"CONDUCTOR DE CAMIÓN ALJIBE","cc":"MOLLER - LOS LITRES","tipo":"plazo_fijo","horario":"art22","inicio":"2026-03-02","liquido":539000,"correo":"","telefono":"","contrato_por":"+1 MES","venc1":"2026-06-02","venc2":"","venc3":"","notas":"","estado":null},{"id":4,"nombre":"SEBASTIAN DIAZ VERDUGO","rut":"19318606-8","cargo":"OPERADOR DE EXCAVADORA","cc":"CASA RESERVA","tipo":"plazo_fijo","horario":"art22","inicio":"2026-05-01","liquido":1400000,"correo":"sjdv.sebastian.operador@gmail.com","telefono":"","contrato_por":"+1 MES","venc1":"2026-06-01","venc2":"","venc3":"","notas":"","estado":null},{"id":6,"nombre":"MERCEDES GUILLOU REYES","rut":"20898228-1","cargo":"TOPOGRAFA","cc":"CONCRETA - EL MARISCAL 3","tipo":"indefinido","horario":"art22","inicio":"2024-03-11","liquido":1005110,"correo":"mercedes.guillou21@gmail.com","telefono":"56967503264","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":7,"nombre":"GIOVANNY PADILLA VALLEJOS","rut":"20998882-8","cargo":"AYUDANTE DE TOPOGRAFO","cc":"CONCRETA - EL MARISCAL 3","tipo":"plazo_fijo","horario":"art22","inicio":"2024-09-09","liquido":595855,"correo":"giovannypadilla2021@gmail.com","telefono":"56947496217","contrato_por":"Obra desde 09-09-2023","venc1":"","venc2":"","venc3":"","notas":"*Obra Santa Sofia/Obra El Mariscal","estado":null},{"id":8,"nombre":"VICTOR MONTECINOS SALINAS","rut":"16264945-0","cargo":"JORNAL","cc":"CONCRETA - EL MARISCAL 3","tipo":"plazo_fijo","horario":"art22","inicio":"2025-02-05","liquido":600000,"correo":"montecinos48@hotmail.com","telefono":"56987454209","contrato_por":"Obra desde 05-02-2023","venc1":"","venc2":"","venc3":"","notas":"*Obra El Mariscal","estado":null},{"id":9,"nombre":"ALFREDO CAYUMAN CAYUPI","rut":"14077275-5","cargo":"OPERADOR DE EXCAVADORA","cc":"CONCRETA - EL MARISCAL 3","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1037716,"correo":"alfredocayuman@gmail.com","telefono":"56984578017","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":10,"nombre":"JORGE CONTRERAS CASTRO","rut":"16738869-8","cargo":"MAESTRO CANCHERO","cc":"CONCRETA - EL MARISCAL 3","tipo":"indefinido","horario":"art22","inicio":"2025-06-01","liquido":686695,"correo":"jorgecontreras87castro@gmail.com","telefono":"56937455574","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"*Obra La Platina B","estado":null},{"id":11,"nombre":"VICTOR AZAÑEDO PORTILLA","rut":"27133670-5","cargo":"CANCHERO","cc":"CONCRETA - EL MARISCAL 3","tipo":"indefinido","horario":"art22","inicio":"2024-04-15","liquido":700000,"correo":"victorazanedo@gmail.com","telefono":"56957337072","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":12,"nombre":"JUAN SAAVEDRA CONTRERAS","rut":"17277635-3","cargo":"TOPOGRAFO","cc":"CONCRETA - LA PLATINA C","tipo":"plazo_fijo","horario":"art22","inicio":"2023-01-23","liquido":1046531,"correo":"juansaavedracontreras@gmail.com","telefono":"56961274919","contrato_por":"Obra desde 23-01-2023","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":13,"nombre":"JEREMI CAMPOS TORRES","rut":"22657006-3","cargo":"AYUDANTE DE MAESTRO CANCHERO","cc":"CONCRETA - LA PLATINA C","tipo":"plazo_fijo","horario":"art22","inicio":"2026-05-12","liquido":650000,"correo":"jeremitorres2007@gmail.com","telefono":"","contrato_por":"+1 MES","venc1":"2026-06-12","venc2":"","venc3":"","notas":"","estado":null},{"id":14,"nombre":"FERNANDA SALFATE SECO","rut":"19485677-6","cargo":"ADMINISTRATIVO","cc":"OFICINA CENTRAL","tipo":"indefinido","horario":"art22","inicio":"2024-05-16","liquido":664208,"correo":"fersalfate23@gmail.com","telefono":"56950924143","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":15,"nombre":"CRISTIAN LOPEZ REYES","rut":"8284122-9","cargo":"PARCELA - COMBUSTIBLE","cc":"OFICINA CENTRAL","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":623177,"correo":"olguitacarreno55@gmail.com","telefono":"56973796067","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":16,"nombre":"JOSE VELASQUEZ SANCHEZ","rut":"26099794-7","cargo":"ASISTENTE ADMINISTRATIVO","cc":"OFICINA CENTRAL","tipo":"indefinido","horario":"art22","inicio":"2025-05-12","liquido":700000,"correo":"alevzdeveloper@gmail.com","telefono":"5692220224","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":17,"nombre":"RODRIGO BARRA BARRA","rut":"13960406-7","cargo":"ESTUDIO DE PROPUESTAS","cc":"OFICINA CENTRAL","tipo":"indefinido","horario":"art22","inicio":"2023-12-01","liquido":1799523,"correo":"rodrigobarra@empresasalfate.cl","telefono":"56945046718","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":18,"nombre":"BERNARDITA MUÑOZ GAJARDO","rut":"12020767-9","cargo":"ADMINISTRATIVO","cc":"OFICINA CENTRAL","tipo":"indefinido","horario":"art22","inicio":"2026-01-05","liquido":1000000,"correo":"munozgajardob@gmail.com","telefono":"56994459143","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":19,"nombre":"CRISTIAN SALFATE SECO","rut":"15901563-7","cargo":"JEFE TALLER","cc":"TALLER","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":2011735,"correo":"crisalfate@gmail.com","telefono":"56978874000","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":20,"nombre":"MANUEL CARREÑO SAAVEDRA","rut":"9221152-5","cargo":"TALLER","cc":"TALLER","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":686680,"correo":"mauelcarrenosaavedra@gmail.com","telefono":"56990584217","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":21,"nombre":"JUAN PABLO AGUILAR ROBLES","rut":"14148375-7","cargo":"TRANSPORTE DE COMBUSTIBLE","cc":"TALLER","tipo":"indefinido","horario":"art22","inicio":"2025-08-18","liquido":800001,"correo":"juanpablo.aguilar.robles81@gmail.com","telefono":"56992662875","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":22,"nombre":"MARIO IBARRA NAVARRO","rut":"11602350-4","cargo":"MECANICO","cc":"TALLER","tipo":"indefinido","horario":"art22","inicio":"2025-10-27","liquido":1200150,"correo":"ibarranavarromario@gmail.com","telefono":"56939546106","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":23,"nombre":"MIGUEL CARRASCO CASTRO","rut":"16787087-2","cargo":"AYUDANTE DE TALLER","cc":"TALLER","tipo":"indefinido","horario":"art22","inicio":"2026-02-02","liquido":800000,"correo":"miguelangelcarrasco87@gmail.com","telefono":"56964904032","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":24,"nombre":"FREDDY ASTUDILLO BERRIOS","rut":"12364075-6","cargo":"OPERADOR DE EXCAVADORA","cc":"POZO - HUYACANES","tipo":"indefinido","horario":"art22","inicio":"2024-08-19","liquido":639222,"correo":"fdyastudillo@gmail.com","telefono":"56973867612","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":25,"nombre":"LEE PEREZ GONZALEZ","rut":"23874465-2","cargo":"OPERADOR DE RETROEXCAVADORA","cc":"CYPCO - PUENTE ALTO","tipo":"indefinido","horario":"art22","inicio":"2025-05-20","liquido":872328,"correo":"davced.ff@gmail.com","telefono":"56954993940","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":26,"nombre":"PABLO VELASQUEZ VELASQUEZ","rut":"18877270-6","cargo":"OPERADOR DE RETROEXCAVADORA","cc":"OBRA EBCO - CAMINO DEL CHIN","tipo":"indefinido","horario":"art22","inicio":"2025-04-15","liquido":949552,"correo":"velasquezpablo1995@gmail.com","telefono":"56964674399","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":27,"nombre":"RICHARD RIVERA SEPULVEDA","rut":"13261682-5","cargo":"OPERADOR DE EXCAVADORA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2021-08-05","liquido":1014601,"correo":"r.rivera.exc@gmail.com","telefono":"56990012714","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":29,"nombre":"RAMON BARRERA POLY","rut":"9973754-9","cargo":"OPERADOR DE EXCAVADORA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2019-05-23","liquido":1200334,"correo":"rabaply@gmail.com","telefono":"56977361327","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":30,"nombre":"JIMMY DELGADO TELLO","rut":"27158218-8","cargo":"OPERADOR DE EXCAVADORA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2024-12-16","liquido":1200904,"correo":"mirko069delgado@gmail.com","telefono":"56995276320","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":31,"nombre":"JOSE RIVERA CUEVAS","rut":"6944228-5","cargo":"OPERADOR DE EXCAVADORA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1135388,"correo":"don.jose.rivera71@gmail.com","telefono":"56977201324","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":32,"nombre":"FELIX ALARCÓN HUENULAO","rut":"10508223-1","cargo":"OPERADOR DE MOTONIVELADORA","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"art22","inicio":"2024-08-14","liquido":1600000,"correo":"felixmartinalarcon24@gmail.com","telefono":"56966778960","contrato_por":"Obra desde 14-08-2024","venc1":"","venc2":"","venc3":"","notas":"*Obra La Platina A","estado":null},{"id":33,"nombre":"JOSE RETAMAL GONZALEZ","rut":"8571920-3","cargo":"OPERADOR DE MAQUINARIA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2025-12-16","liquido":1000000,"correo":"joseguillermoretamal@gmail.com","telefono":"968704949","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":34,"nombre":"ENRIQUE GATICA PEÑALOZA","rut":"8784558-3","cargo":"OPERADOR CARGADOR FRONTAL","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2023-01-25","liquido":1000000,"correo":"gaticaenrique1960@gmail.com","telefono":"56975329298","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":35,"nombre":"CRISTOBAL NAVARRO MUÑOZ","rut":"18661685-5","cargo":"OPERADOR DE RODILLO","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2019-09-03","liquido":800000,"correo":"cristo.1993@gmail.com","telefono":"56932537653","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":36,"nombre":"MIGUEL LARA MIRANDA","rut":"10618069-5","cargo":"OPERADOR DE RODILLO","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-23","liquido":800000,"correo":"Miguelaramiranda@hotmail.com","telefono":"998525220","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":37,"nombre":"AUDEN OPAZO MARTINEZ","rut":"11373179-6","cargo":"OPERADOR DE RETROEXCAVADORA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"normal","inicio":"2025-11-24","liquido":950000,"correo":"audenopazomartinez@gmail.com","telefono":"994747666","contrato_por":"INDEFINIDO","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":38,"nombre":"CARLOS VILLARROEL ORELLANA","rut":"16642269-8","cargo":"OPERADOR DE RETROEXCAVADORA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"normal","inicio":"2025-11-24","liquido":950000,"correo":"cmvillarroelo.87@gmail.com","telefono":"56999008894","contrato_por":"INDEFINIDO","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":39,"nombre":"RODRIGO GONZALEZ AVENDAÑO","rut":"13081623-1","cargo":"CONDUCTOR CAMION ALJIBE","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":800000,"correo":"venda@gmail.com","telefono":"923869376","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":40,"nombre":"HERNAN ULLOA VALENZUELA","rut":"10629543-3","cargo":"ADMINISTRADOR DE OBRAS","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"art22","inicio":"2025-10-20","liquido":4500000,"correo":"hulloaval@gmail.com","telefono":"56978080243","contrato_por":"OBRA DESDE 20-10-25","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":41,"nombre":"PATRICIA PASTRIAN PEREZ","rut":"17566697-4","cargo":"PREVENCIONISTA DE RIESGOS","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"art22","inicio":"2025-10-13","liquido":1500150,"correo":"patricia.pastrian@gmail.com","telefono":"56933141344","contrato_por":"OBRA DESDE 13-10-25","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":42,"nombre":"VIVIANA NUÑEZ SOTO","rut":"17608723-4","cargo":"PREVENCIONISTA DE RIESGOS","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-04-01","liquido":1250000,"correo":"prev.vnunez@gmail.com","telefono":"937623710","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":43,"nombre":"RONNIE BUSTAMANTE FALETTO","rut":"12121093-2","cargo":"JEFE DE TERRENO","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"normal","inicio":"2026-02-11","liquido":3300000,"correo":"r.faletto@yahoo.es","telefono":"935854293","contrato_por":"INDEFINIDO","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":44,"nombre":"DANIEL PACHECO PACHECO","rut":"17590441-7","cargo":"SUPERVISOR DE TERRENO Y GEOMENSOR","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-13","liquido":2000000,"correo":"geomensura.pacheco@gmail.com","telefono":"977203205","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":45,"nombre":"CARLOS BELTRAN VALENZUELA","rut":"11758776-2","cargo":"SUPERVISOR","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":1000000,"correo":"cmbeltran.v@gmail.com","telefono":"974325909","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":46,"nombre":"RICARDO GUZMAN MORALES","rut":"12955252-2","cargo":"SUPERVISOR","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"normal","inicio":"2025-12-02","liquido":1300000,"correo":"rguzman.m@hotmail.com","telefono":"926383529","contrato_por":"INDEFINIDO","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":47,"nombre":"CHRISTIAN VALENZUELA FUICA","rut":"8900224-9","cargo":"OFICINA TECNICA","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"normal","inicio":"2026-02-10","liquido":2500000,"correo":"cvalenf@gmail.com","telefono":"942789485","contrato_por":"INDEFINIDO","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":48,"nombre":"JAIME PARRA GALLARDO","rut":"12056435-8","cargo":"TOPOGRAFO","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":2200000,"correo":"jparragallardo@gmail.com","telefono":"993239018","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":49,"nombre":"MANUEL BOSQUEZ MACIEL","rut":"11526047-2","cargo":"BODEGUERO Y ADQUISICIONES","cc":"CONTRATO BESALCO - EFE","tipo":"indefinido","horario":"art22","inicio":"2025-10-20","liquido":900000,"correo":"bosquezmaciel@gmail.com","telefono":"","contrato_por":"INDEFINIDO","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":50,"nombre":"JUAN VERA BASTÍAS","rut":"16342840-7","cargo":"MAESTRO PRIMERA","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"art22","inicio":"2026-03-16","liquido":850000,"correo":"verabastiasjuan17@gmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"2026-05-31","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":51,"nombre":"ALEX FLORES CRUCES","rut":"13557192-K","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":650000,"correo":"soyalexflores059@gmail.com","telefono":"951984569","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":52,"nombre":"BRYRON PEDREROS MUTIS","rut":"19833069-8","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":650000,"correo":"byronpedredors21@gmail.com","telefono":"944907140","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":53,"nombre":"CHRISTOPHER NAVARRETE HANS","rut":"19602496-4","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":650000,"correo":"christopherhansn@gmail.com","telefono":"997352118","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":54,"nombre":"DIEGO OCAYO GALLARDO","rut":"19994205-0","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-04-01","liquido":650000,"correo":"diegoocayogallardo74@gmail.com","telefono":"983076407","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":55,"nombre":"DIEGO VILLEGA MEJIA","rut":"21603182-2","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":650000,"correo":"dvillegasmejias@gmail.com","telefono":"961530225","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":56,"nombre":"FRANCISCO JEREZ BOSQUEZ","rut":"19833233-K","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-05-03","liquido":650000,"correo":"franciscojerez1998@gmail.com","telefono":"","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":57,"nombre":"JONATHAN MALLEA FLORES","rut":"21116828-5","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-01","liquido":650000,"correo":"jonielfranchesco@gmail.com","telefono":"941487914","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":58,"nombre":"LUIS MARTINEZ REMEDY","rut":"11395104-4","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-06","liquido":650000,"correo":"martinezluis654123@gmail.com","telefono":"999462027","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":59,"nombre":"LUIS CASTILLO RODRIGUEZ","rut":"20141094-0","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-03-13","liquido":650000,"correo":"luiscastillor1399@gmail.com","telefono":"934616149","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":60,"nombre":"MAXIMO RIVERA AVILA","rut":"21918271-6","cargo":"JORNAL","cc":"CONTRATO BESALCO - EFE","tipo":"obra_faena","horario":"normal","inicio":"2026-02-09","liquido":650000,"correo":"riveraavilamaximo853@gmail.com","telefono":"933429550","contrato_por":"OBRA FAENA","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":61,"nombre":"JORGE LANDAETA BENDEZÚ","rut":"16210932-4","cargo":"CONDUCTOR CAMION ALJIBE","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"normal","inicio":"2026-04-22","liquido":600000,"correo":"landaeta.bendezu@gmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"2026-06-23","venc2":"","venc3":"","notas":"","estado":null},{"id":62,"nombre":"JOAQUIN PIZARRO MORALES","rut":"13336665-2","cargo":"SUPERVISOR","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"normal","inicio":"2026-05-25","liquido":1300000,"correo":"joaquinpizarro78@gmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"2026-06-25","venc2":"","venc3":"","notas":"","estado":null},{"id":63,"nombre":"DAVID RAMIREZ FARIAS","rut":"20114173-7","cargo":"JORNAL DESROZADOR","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"normal","inicio":"2026-05-27","liquido":650000,"correo":"davidramirez.f99@gmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"2026-06-27","venc2":"","venc3":"","notas":"","estado":null},{"id":64,"nombre":"MAGLIO LEIVA SOTO","rut":"18341771-1","cargo":"JORNAL DESROZADOR","cc":"CONTRATO BESALCO - EFE","tipo":"plazo_fijo","horario":"normal","inicio":"2026-05-27","liquido":650000,"correo":"leivamaglio93@gmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"2026-06-27","venc2":"","venc3":"","notas":"","estado":null},{"id":65,"nombre":"ALEJANDRO SALFATE SECO","rut":"18049108-2","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2023-02-01","liquido":1690703,"correo":"alesalfate27@gmail.com","telefono":"5696382140","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":66,"nombre":"ANDRES JELDRES FUENTES","rut":"11884071-2","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1047383,"correo":"andresjeldres76@gmail.com","telefono":"56997778245","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null},{"id":67,"nombre":"ALBERTO CORTES RIVERA","rut":"26422360-1","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-01-05","liquido":900000,"correo":"cortesalberto1901@gmail.com","telefono":"56961287280","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":68,"nombre":"CRISTIAN OLMOS CESPEDES","rut":"15917442-5","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-11-03","liquido":784795,"correo":"c.olmos.cespedes3131@gmail.com","telefono":"56967068985","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":69,"nombre":"CLAUDIO MORALES MORALES","rut":"17736732-K","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"plazo_fijo","horario":"art22","inicio":"2026-03-03","liquido":800000,"correo":"claudiomorales0108@hotmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"","venc2":"2026-06-03","venc3":"","notas":"","estado":null},{"id":70,"nombre":"EDUARDO BARRAZA MONTENEGRO","rut":"9604604-9","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":687035,"correo":"edu.barraza148@gmail.com","telefono":"5694462433","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":71,"nombre":"EDUARDO GOMEZ ARAYA","rut":"10817906-6","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1041498,"correo":"edogomezaraya94@gmail.com","telefono":"56996622600","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":72,"nombre":"FABIAN GONZALEZ VIDAL","rut":"19882218-3","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-08-04","liquido":900000,"correo":"gonzalez.fabian824@gmail.com","telefono":"56992644169","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":73,"nombre":"FELIPE VELASQUEZ VILLARROEL","rut":"17941464-3","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2026-01-05","liquido":900000,"correo":"felipevv@hotmail.com","telefono":"56997145639","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":74,"nombre":"JONATHAN DE LA CALLE","rut":"13832480-K","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1108068,"correo":"jonathandelacalle2020@gmail.com","telefono":"56965159718","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":75,"nombre":"JUAN BUENO MARQUEZ","rut":"15386071-8","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-03-17","liquido":784698,"correo":"buenojuan023@gmail.com","telefono":"56922525950","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":76,"nombre":"JUAN HINTUYA QUEZADA","rut":"13279681-5","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-11-05","liquido":946242,"correo":"juanito.hintuya@gmail.com","telefono":"56991086725","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":77,"nombre":"JUAN PEREZ CONCHA","rut":"16429309-2","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2024-04-22","liquido":922423,"correo":"jcperezconcha@gmail.com","telefono":"56982864099","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":78,"nombre":"JOAQUIN SILVA AGUILERA","rut":"20676985-8","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-11-03","liquido":900000,"correo":"joaquinsilva602@grnail.com","telefono":"56929853697","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":79,"nombre":"JOSÉ ESPINOZA PUMA","rut":"20825641-6","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-12-04","liquido":900000,"correo":"espinozapuma@gmail.com","telefono":"56959489589","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":80,"nombre":"JOSE RIVERA RODRIGUEZ","rut":"12272427-1","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-11-01","liquido":894086,"correo":"joseantoniorivera1403@gmail.com","telefono":"56998365667","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":81,"nombre":"LUIS GOMEZ HERNANDEZ","rut":"17623274-9","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2024-09-09","liquido":875590,"correo":"Lilyko90@gmail.com","telefono":"56966738625","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":82,"nombre":"LUIS ZAMORANO OROZCO","rut":"18153335-8","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":1016979,"correo":"luismarcialzamoranoorozco@gmail.com","telefono":"56979218128","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":83,"nombre":"MANUEL MORENO POZO","rut":"12656408-2","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2026-12-01","liquido":900000,"correo":"manuelmp.1974@gmail.com","telefono":"56978871521","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":84,"nombre":"MANUEL SANCHEZ ARANQUE","rut":"26498223-5","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2025-12-04","liquido":900000,"correo":"manusancharq1987@gmail.com","telefono":"56954628983","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":85,"nombre":"OSCAR ORELLANA WENZEL","rut":"17098925-2","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":957021,"correo":"oscar_javier@live.cl","telefono":"56977704028","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":86,"nombre":"PEDRO RODRIGUEZ MOYA","rut":"5310222-0","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2018-02-01","liquido":705593,"correo":"ro.rodriguezp@gmail.com","telefono":"56995338544","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":87,"nombre":"ROBERTO SALINAS PLAZA","rut":"18468657-0","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"indefinido","horario":"art22","inicio":"2024-12-02","liquido":993413,"correo":"roberto19252@gmail.com","telefono":"56938995883","contrato_por":"Indefinido","venc1":"","venc2":"","venc3":"","notas":"","estado":null},{"id":88,"nombre":"RAUL CABELLO VALDEBENITO","rut":"12353271-6","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"plazo_fijo","horario":"art22","inicio":"2026-03-09","liquido":1000000,"correo":"raulcabello1732@gmail.com","telefono":"","contrato_por":"1 Mes +","venc1":"","venc2":"2026-06-09","venc3":"","notas":"","estado":null},{"id":89,"nombre":"JUAN BLEST GUZMAN","rut":"20002575-K","cargo":"CONDUCTOR CAMION TOLVA","cc":"VARIAS OBRAS","tipo":"plazo_fijo","horario":"art22","inicio":"2026-01-29","liquido":800000,"correo":"blestjuan5@gmail.com","telefono":"","contrato_por":"3 MESES","venc1":"2026-08-29","venc2":"","venc3":"","notas":"*Obra Drogados Besalco Obras Ferroviarias SA.","estado":null}];

const CC_CFG={
  'TALLER':{icon:'ti-tool',bg:'#DBEAFE',tx:'#1D4ED8'},
  'OFICINA CENTRAL':{icon:'ti-building',bg:'#F3E8FF',tx:'#6B21A8'},
  'VARIAS OBRAS':{icon:'ti-truck',bg:'#FEF9C3',tx:'#854D0E'},
  'CONTRATO BESALCO - EFE':{icon:'ti-train',bg:'#DCFCE7',tx:'#166534'},
  'MOLLER - LOS LITRES':{icon:'ti-bulldozer',bg:'#FEF3C7',tx:'#92400E'},
  'CASA RESERVA':{icon:'ti-home',bg:'#E0F2FE',tx:'#0369A1'},
  'CONCRETA - EL MARISCAL 3':{icon:'ti-building-arch',bg:'#FEE2E2',tx:'#991B1B'},
  'CONCRETA - LA PLATINA C':{icon:'ti-building-arch',bg:'#FECDD3',tx:'#9F1239'},
  'POZO - HUYACANES':{icon:'ti-droplet',bg:'#E0F2FE',tx:'#075985'},
  'CYPCO - PUENTE ALTO':{icon:'ti-road',bg:'#FEF9C3',tx:'#713F12'},
  'OBRA EBCO - CAMINO DEL CHIN':{icon:'ti-hammer',bg:'#F3E8FF',tx:'#581C87'}
};
const KNOWN_CCS=Object.keys(CC_CFG);
function ccCfg(cc){return CC_CFG[cc]||{icon:'ti-map-pin',bg:'#F1F5F9',tx:'#475569'};}

let workers=[],nextId=200,editingId=null,currentTab='trabajadores';

// API
async function sbGet(){
  const r=await fetch(SUPABASE_URL+'/rest/v1/'+TABLE+'?order=nombre',
    {headers:{'apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY}});
  if(!r.ok)throw new Error('GET '+r.status+' '+await r.text());
  return r.json();
}
async function sbPost(body){
  const r=await fetch(SUPABASE_URL+'/rest/v1/'+TABLE,{
    method:'POST',
    headers:{'apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY,
             'Content-Type':'application/json','Prefer':'return=minimal'},
    body:JSON.stringify(body)
  });
  if(!r.ok)throw new Error('POST '+r.status+' '+await r.text());
}
async function sbPatch(id,data){
  const r=await fetch(SUPABASE_URL+'/rest/v1/'+TABLE+'?id=eq.'+id,{
    method:'PATCH',
    headers:{'apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY,
             'Content-Type':'application/json','Prefer':'return=minimal'},
    body:JSON.stringify(data)
  });
  if(!r.ok)throw new Error('PATCH '+r.status);
}
async function sbDel(id){
  const r=await fetch(SUPABASE_URL+'/rest/v1/'+TABLE+'?id=eq.'+id,{
    method:'DELETE',
    headers:{'apikey':SUPABASE_KEY,'Authorization':'Bearer '+SUPABASE_KEY}
  });
  if(!r.ok)throw new Error('DELETE '+r.status);
}

// Fechas
function dl(fin){if(!fin)return null;return Math.ceil((new Date(fin+'T00:00:00')-new Date())/864e5);}
function add3m(d){const x=new Date(d+'T00:00:00');x.setMonth(x.getMonth()+3);return x.toISOString().slice(0,10);}
function add1m(d){const x=new Date(d+'T00:00:00');x.setMonth(x.getMonth()+1);return x.toISOString().slice(0,10);}
function today(){return new Date().toISOString().slice(0,10);}
function age(d){return Math.floor((new Date()-new Date(d+'T00:00:00'))/864e5);}
function diff(a,b){return Math.ceil((new Date(b+'T00:00:00')-new Date(a+'T00:00:00'))/864e5);}
function fmt(d){if(!d)return '—';const[y,m,dd]=d.split('-');return dd+'/'+m+'/'+y;}
function liq(s){return '$'+Number(s).toLocaleString('es-CL');}

// Alertas
function alerts(w){
  const out=[],e=w.estado||null;
  if(w.tipo!=='plazo_fijo'||e==='convertido_indefinido')return out;
  const a=age(w.inicio),t3=add3m(w.inicio),d3=diff(today(),t3);
  if(e!=='prorrogado'){
    if(a>=90)out.push({tipo:'indef_ok',lvl:'purple',msg:'Cumplio 3 meses el '+fmt(t3)+' — convertir o prorrogar'});
    else if(d3<=15&&d3>0)out.push({tipo:'indef_prox',lvl:'blue',msg:'Cumple 3 meses el '+fmt(t3)+' — faltan '+d3+' dias'});
  }
  if(e==='prorrogado'&&w.fin){
    const d=dl(w.fin);
    if(d<0)out.push({tipo:'prorr_venc',lvl:'danger',msg:'Prorroga vencida hace '+Math.abs(d)+' dias'});
    else if(d<=15)out.push({tipo:'prorr_prox',lvl:'warn',msg:'Prorroga vence en '+d+' dias ('+fmt(w.fin)+')'});
  }
  if(e!=='prorrogado'){
    const ref=w.venc1||w.venc2||w.fin;
    if(ref){const d=dl(ref);
      if(d<0)out.push({tipo:'vencido',lvl:'danger',msg:'Contrato vencido hace '+Math.abs(d)+' dias'});
      else if(d<=15)out.push({tipo:'vence',lvl:'warn',msg:'Vence en '+d+' dias — '+fmt(ref)});
    }
  }
  return out;
}
function hasAlert(w){return alerts(w).length>0;}
function totalAl(){return workers.filter(hasAlert).length;}

function badge(w){
  const e=w.estado||null;
  if(e==='prorrogado')return '<span class="badge b-prorrog">Prorrogado</span>';
  if(e==='convertido_indefinido')return '<span class="badge b-convert">Convertido</span>';
  if(w.tipo==='indefinido')return '<span class="badge b-indef">Indefinido</span>';
  if(w.tipo==='obra_faena')return '<span class="badge b-faena">Obra/Faena</span>';
  return '<span class="badge b-fijo">Plazo fijo</span>';
}
function ini(n){return n.split(' ').map(x=>x[0]).filter(Boolean).slice(0,2).join('').toUpperCase();}

// Accion desde botones data-*
function doEstado(btn){
  const id=Number(btn.dataset.id),estado=btn.dataset.estado;
  accion(id,estado);
}
async function accion(id,estado){
  const i=workers.findIndex(x=>x.id===id);if(i<0)return;
  const upd={estado};
  workers[i].estado=estado;
  if(estado==='prorrogado'){
    workers[i].fin=add1m(workers[i].fin||workers[i].inicio);
    upd.fin=workers[i].fin;
    toast('Prorroga registrada hasta '+fmt(workers[i].fin));
  }
  if(estado==='convertido_indefinido'){
    workers[i].tipo='indefinido';workers[i].fin=null;
    upd.tipo='indefinido';upd.fin=null;
    toast(workers[i].nombre+' convertido a indefinido');
  }
  try{await sbPatch(id,upd);}catch(e){console.error(e);}
  closeDetail();render();
}

// Filtros
function filtered(){
  const q=(document.getElementById('buscar')||{}).value||'';
  const cc=(document.getElementById('filtro-cc')||{}).value||'';
  const tp=(document.getElementById('filtro-tipo')||{}).value||'';
  const al=(document.getElementById('filtro-alerta')||{}).value||'';
  return workers.filter(w=>{
    if(q){const s=q.toLowerCase();if(!w.nombre.toLowerCase().includes(s)&&!w.rut.includes(s))return false;}
    if(cc&&w.cc!==cc)return false;
    if(tp&&w.tipo!==tp)return false;
    if(al==='alerta'&&!hasAlert(w))return false;
    if(al==='ok'&&hasAlert(w))return false;
    return true;
  });
}
function fillCC(){
  const s=document.getElementById('filtro-cc');if(!s)return;
  const cur=s.value,ccs=[...new Set(workers.map(w=>w.cc))].sort();
  s.innerHTML='<option value="">Todas las obras</option>'+ccs.map(c=>'<option value="'+c+'">'+c+'</option>').join('');
  if(cur)s.value=cur;
}

// Tabs
function setTab(tab){
  currentTab=tab;
  document.querySelectorAll('.nav-tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===tab));
  document.getElementById('filters-bar').style.display=tab==='trabajadores'?'':'none';
  const mc=document.getElementById('main-content');
  if(tab!=='trabajadores'){
    const h=document.querySelector('.header').offsetHeight+document.querySelector('.nav-tabs').offsetHeight+8;
    mc.style.marginTop=h+'px';
  }else mc.style.marginTop='';
  render();
}

function render(){
  fillCC();
  const n=totalAl(),b=document.getElementById('nav-badge');
  if(b){b.textContent=n;b.style.display=n>0?'':'none';}
  const f=filtered();
  if(currentTab==='trabajadores')renderT(f);
  else if(currentTab==='alertas')renderA();
  else renderR();
}

// Trabajadores
function renderT(f){
  const mc=document.getElementById('main-content');
  const byCC={};f.forEach(w=>{(byCC[w.cc]=byCC[w.cc]||[]).push(w);});
  const ccs=Object.keys(byCC).sort();
  if(!ccs.length){mc.innerHTML='<div class="empty"><i class="ti ti-users"></i>Sin trabajadores</div>';return;}
  let h='';
  ccs.forEach(function(cc){
    const g=byCC[cc],al=g.filter(hasAlert).length,c=ccCfg(cc);
    h+='<div class="group-label"><span><span class="group-icon" style="background:'+c.bg+';color:'+c.tx+'"><i class="ti '+c.icon+'"></i></span>'+cc+' <span style="font-weight:400;color:var(--txt2)">('+g.length+')</span></span>'+(al?'<span class="badge b-danger">'+al+'</span>':'')+'</div>';
    g.forEach(function(w){
      const al2=alerts(w),top=al2[0]||null;
      let ac='',acCls='';
      if(top){
        if(top.tipo==='indef_ok'){ac='Convertir/Prorrogar';acCls='purple';}
        else if(top.tipo==='indef_prox'){ac='3M en '+diff(today(),add3m(w.inicio))+'d';acCls='blue';}
        else if(top.tipo==='prorr_prox'){ac='Prorroga vence '+dl(w.fin)+'d';acCls='warn';}
        else if(top.tipo==='prorr_venc'){ac='Prorroga vencida';acCls='danger';}
        else if(top.tipo==='vence'){ac='Vence en '+dl(w.venc1||w.venc2||w.fin)+'d';acCls='warn';}
        else if(top.tipo==='vencido'){ac='Vencido';acCls='danger';}
      }
      h+='<div class="worker-card" onclick="openDetail('+w.id+')">';
      h+='<div class="wc-row1"><div><div class="wc-name">'+w.nombre+'</div><div class="wc-rut">'+w.rut+'</div><div class="wc-cargo">'+(w.cargo||'')+'</div></div>';
      h+='<div class="wc-right"><div class="wc-liquido">'+liq(w.liquido)+'</div>'+badge(w)+'</div></div>';
      h+='<div class="wc-row2"><div class="wc-info"><span class="badge" style="background:var(--bg3);color:var(--txt2)">'+(w.horario==='art22'?'Art.22':'Jornada')+'</span><span style="font-size:10px;color:var(--txt2)">'+fmt(w.inicio)+'</span></div>'+(ac?'<span class="wc-accion '+acCls+'">'+ac+'</span>':'')+'</div>';
      h+='</div>';
    });
  });
  h+='<div style="text-align:center;padding:16px 0 8px"><button class="add-btn" onclick="openForm()"><i class="ti ti-plus"></i> Agregar trabajador</button></div>';
  mc.innerHTML=h;
}

// Alertas
function renderA(){
  const mc=document.getElementById('main-content');
  const all=[];workers.forEach(function(w){alerts(w).forEach(function(a){all.push({w:w,a:a});});});
  if(!all.length){mc.innerHTML='<div class="sec-title"><i class="ti ti-bell" style="color:var(--danger)"></i> Alertas</div><div class="empty"><i class="ti ti-circle-check" style="color:var(--ok)"></i>Sin alertas</div>';return;}
  const grupos=[
    {key:'indef_ok',  label:'Conversion a indefinido requerida', color:'var(--purple)'},
    {key:'indef_prox',label:'Proximos a cumplir 3 meses',        color:'var(--teal)'},
    {key:'prorr_venc',label:'Prorroga vencida — urgente',        color:'var(--danger)'},
    {key:'prorr_prox',label:'Prorroga vence pronto',             color:'var(--warn)'},
    {key:'vencido',   label:'Contratos vencidos',                color:'var(--danger)'},
    {key:'vence',     label:'Contratos vencen en 15 dias',       color:'var(--warn)'},
  ];
  const icons={danger:'alert-octagon',warn:'alert-triangle',purple:'arrows-exchange',blue:'info-circle'};
  let h='<div class="sec-title"><i class="ti ti-bell" style="color:var(--danger)"></i> Alertas ('+all.length+')</div>';
  grupos.forEach(function(g){
    const items=all.filter(function(x){return x.a.tipo===g.key;});
    if(!items.length)return;
    h+='<div class="group-label" style="color:'+g.color+'">'+g.label+' ('+items.length+')</div>';
    items.forEach(function(item){
      const w=item.w,a=item.a,id=w.id;
      const icon=icons[a.lvl]||'alert-triangle';
      let btns='';
      if(a.tipo==='indef_ok'||a.tipo==='indef_prox'){
        btns='<button class="action-btn purple" data-id="'+id+'" data-estado="prorrogado" onclick="doEstado(this)">Prorrogar 1 mes</button>';
        btns+='<button class="action-btn ok" data-id="'+id+'" data-estado="convertido_indefinido" onclick="doEstado(this)">Convertir a indefinido</button>';
      }
      if(a.tipo==='prorr_prox'||a.tipo==='prorr_venc'){
        btns='<button class="action-btn ok" data-id="'+id+'" data-estado="convertido_indefinido" onclick="doEstado(this)">Convertir a indefinido</button>';
      }
      h+='<div class="alert-box '+a.lvl+'">';
      h+='<div class="alert-icon"><i class="ti ti-'+icon+'"></i></div>';
      h+='<div style="flex:1"><div class="alert-name">'+w.nombre+' <span style="font-weight:400;font-size:11px">'+w.rut+'</span></div>';
      h+='<div class="alert-det">'+w.cc+' · '+(w.cargo||'')+' · '+liq(w.liquido)+'</div>';
      h+='<div class="alert-msg">'+a.msg+'</div>';
      if(btns)h+='<div class="alert-actions">'+btns+'</div>';
      h+='</div></div>';
    });
  });
  mc.innerHTML=h;
}

// Resumen
function renderR(){
  const mc=document.getElementById('main-content');
  const al=totalAl(),pr=workers.filter(w=>w.estado==='prorrogado').length,cv=workers.filter(w=>w.estado==='convertido_indefinido').length;
  const byCC={};workers.forEach(w=>{byCC[w.cc]=(byCC[w.cc]||0)+1;});
  let h='<div class="sec-title"><i class="ti ti-chart-bar" style="color:var(--blue)"></i> Resumen</div>';
  h+='<div class="stat-grid">';
  h+='<div class="stat-card"><div class="stat-num">'+workers.length+'</div><div class="stat-label">Total</div></div>';
  h+='<div class="stat-card"><div class="stat-num" style="color:var(--warn)">'+al+'</div><div class="stat-label">Con alertas</div></div>';
  h+='<div class="stat-card"><div class="stat-num" style="color:var(--teal)">'+pr+'</div><div class="stat-label">Prorrogados</div></div>';
  h+='<div class="stat-card"><div class="stat-num" style="color:var(--ok)">'+cv+'</div><div class="stat-label">Convertidos</div></div>';
  h+='</div><div class="sec-title" style="margin-bottom:8px"><i class="ti ti-building"></i> Por obra</div>';
  Object.keys(byCC).sort().forEach(function(cc){
    const fa=workers.filter(w=>w.cc===cc&&hasAlert(w)).length,c=ccCfg(cc);
    h+='<div class="cc-row"><div class="cc-ico" style="background:'+c.bg+';color:'+c.tx+'"><i class="ti '+c.icon+'"></i></div>';
    h+='<span class="cc-name">'+cc+'</span><span class="cc-cnt">'+byCC[cc]+' pers.</span>';
    h+=(fa?'<span class="cc-alert">'+fa+' alerta'+(fa!==1?'s':'')+'</span>':'')+'</div>';
  });
  mc.innerHTML=h;
}

// Detalle
function openDetail(id){
  const w=workers.find(x=>x.id===id);if(!w)return;
  const al=alerts(w);
  let ah=al.map(function(a){return '<div class="alert-box '+a.lvl+'" style="margin:8px 16px 0"><div class="alert-icon"><i class="ti ti-alert-triangle"></i></div><div><div class="alert-msg">'+a.msg+'</div></div></div>';}).join('');
  const rows=[['Cargo',w.cargo||'—'],['Obra',w.cc],['Tipo',w.tipo==='indefinido'?'Indefinido':w.tipo==='obra_faena'?'Obra/Faena':'Plazo fijo'],['Horario',w.horario==='art22'?'Art. 22':'Jornada ordinaria'],['Ingreso',fmt(w.inicio)],['Liquido',liq(w.liquido)],['Venc.1',fmt(w.venc1)||'—'],['Venc.2',fmt(w.venc2)||'—'],['Correo',w.correo||'—'],['Telefono',w.telefono||'—'],['Notas',w.notas||'—']];
  document.getElementById('detail-content').innerHTML=
    '<div class="detail-hero"><div class="detail-avatar">'+ini(w.nombre)+'</div><div class="detail-hero-info"><div class="name">'+w.nombre+'</div><div class="sub">'+w.rut+'</div><div style="margin-top:4px">'+badge(w)+'</div></div></div>'+ah+
    rows.map(function(r){return '<div class="detail-row"><span class="detail-label">'+r[0]+'</span><span class="detail-val">'+r[1]+'</span></div>';}).join('');
  document.getElementById('detail-actions').innerHTML=
    '<button class="btn" onclick="closeDetail()">Cerrar</button>'+
    '<button class="btn primary" onclick="closeDetail();openForm('+id+')"><i class="ti ti-edit"></i> Editar</button>'+
    '<button class="btn danger-btn" onclick="closeDetail();delWorker('+id+')"><i class="ti ti-trash"></i></button>';
  document.getElementById('detail-overlay').classList.add('open');
}
function closeDetail(){document.getElementById('detail-overlay').classList.remove('open');}

// Formulario
function openForm(id){
  editingId=id||null;const f=id?workers.find(x=>x.id===id):null;
  document.getElementById('modal-title').textContent=id?'Editar trabajador':'Agregar trabajador';
  ['nombre','rut','cargo','inicio','correo','telefono','notas'].forEach(function(k){
    document.getElementById('f-'+k).value=f?f[k]:'';
  });
  document.getElementById('f-tipo').value=f?f.tipo:'plazo_fijo';
  document.getElementById('f-fin').value=f&&f.fin?f.fin:'';
  document.getElementById('f-liquido').value=f?f.liquido:'';
  document.getElementById('f-horario').value=f?f.horario:'art22';
  const cs=document.getElementById('f-cc');
  if(f&&!KNOWN_CCS.includes(f.cc)){cs.value='otro';document.getElementById('grp-cc-manual').style.display='';document.getElementById('f-cc-manual').value=f.cc;}
  else{cs.value=f?f.cc:'TALLER';document.getElementById('grp-cc-manual').style.display='none';}
  toggleFin();
  document.getElementById('modal-overlay').classList.add('open');
}
function closeForm(){document.getElementById('modal-overlay').classList.remove('open');}
function toggleFin(){document.getElementById('grp-fin').style.display=['indefinido','obra_faena'].includes(document.getElementById('f-tipo').value)?'none':'';}
function toggleCCManual(){document.getElementById('grp-cc-manual').style.display=document.getElementById('f-cc').value==='otro'?'':'none';}

async function saveWorker(){
  const get=id=>document.getElementById(id).value.trim();
  const nombre=get('f-nombre').toUpperCase(),rut=get('f-rut'),cargo=get('f-cargo').toUpperCase();
  const tipo=get('f-tipo'),inicio=get('f-inicio'),liquido=get('f-liquido');
  const fin=['indefinido','obra_faena'].includes(tipo)?null:get('f-fin');
  const horario=get('f-horario'),correo=get('f-correo'),telefono=get('f-telefono'),notas=get('f-notas');
  let cc=document.getElementById('f-cc').value;
  if(cc==='otro')cc=get('f-cc-manual').toUpperCase();
  if(!nombre||!rut||!inicio||!liquido||!cc){alert('Completa los campos obligatorios.');return;}
  if(tipo==='plazo_fijo'&&!fin){alert('Ingresa la fecha de fin.');return;}
  const btn=document.getElementById('btn-guardar');btn.disabled=true;
  const data={nombre,rut,cargo,tipo,inicio,fin:fin||null,liquido:Number(liquido),horario,correo,telefono,notas,cc,venc1:'',venc2:'',venc3:'',contrato_por:''};
  try{
    if(editingId){
      const i=workers.findIndex(x=>x.id===editingId);
      workers[i]={...workers[i],...data};
      await sbPatch(editingId,data);toast('Actualizado');
    }else{
      const nw={id:nextId++,...data,estado:null};
      workers.push(nw);await sbPost(nw);toast('Agregado');
    }
    closeForm();render();
  }catch(e){console.error(e);toast('Error al guardar','err');}
  finally{btn.disabled=false;}
}

async function delWorker(id){
  const w=workers.find(x=>x.id===id);
  if(!w||!confirm('Eliminar a '+w.nombre+'?'))return;
  workers=workers.filter(x=>x.id!==id);render();
  try{await sbDel(id);toast('Eliminado');}catch(e){console.error(e);}
}

function toast(msg,type){
  let t=document.querySelector('.toast');
  if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t);}
  t.textContent=msg;t.style.background=type==='err'?'#DC2626':'#0F172A';
  t.classList.add('show');setTimeout(()=>t.classList.remove('show'),3000);
}

// Init
async function init(){
  const ls=document.getElementById('loading-screen'),mc=document.getElementById('main-content');
  try{
    let data=await sbGet();
    if(!data||data.length===0){
      toast('Primera vez: subiendo datos...');
      await sbPost(BASE_WORKERS);
      data=BASE_WORKERS;
      toast('87 trabajadores cargados');
    }
    workers=data;
    nextId=Math.max(...workers.map(w=>Number(w.id)),100)+1;
  }catch(e){
    console.error('Supabase error:',e);
    toast('Sin conexion — datos locales','err');
    const local=localStorage.getItem('salfate_bk');
    workers=local?JSON.parse(local):BASE_WORKERS.map(w=>({...w}));
    nextId=Math.max(...workers.map(w=>Number(w.id)),100)+1;
  }
  localStorage.setItem('salfate_bk',JSON.stringify(workers));
  ls.style.display='none';mc.style.display='';
  setTab('trabajadores');
}

document.getElementById('modal-overlay').addEventListener('click',function(e){if(e.target===this)closeForm();});
document.getElementById('detail-overlay').addEventListener('click',function(e){if(e.target===this)closeDetail();});
init();