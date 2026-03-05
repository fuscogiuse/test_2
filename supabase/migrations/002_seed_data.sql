-- ============================================
-- SEED DATA: Regioni, Città, Settori
-- Eseguire DOPO 001_initial_schema.sql
-- ============================================

-- REGIONI (20 regioni italiane)
INSERT INTO regions (name, slug) VALUES
  ('Lombardia', 'lombardia'),
  ('Veneto', 'veneto'),
  ('Emilia-Romagna', 'emilia-romagna'),
  ('Piemonte', 'piemonte'),
  ('Toscana', 'toscana'),
  ('Lazio', 'lazio'),
  ('Campania', 'campania'),
  ('Puglia', 'puglia'),
  ('Sicilia', 'sicilia'),
  ('Sardegna', 'sardegna'),
  ('Friuli Venezia Giulia', 'friuli-venezia-giulia'),
  ('Trentino-Alto Adige', 'trentino-alto-adige'),
  ('Liguria', 'liguria'),
  ('Marche', 'marche'),
  ('Abruzzo', 'abruzzo'),
  ('Umbria', 'umbria'),
  ('Calabria', 'calabria'),
  ('Basilicata', 'basilicata'),
  ('Molise', 'molise'),
  ('Valle d''Aosta', 'valle-d-aosta');

-- CITTÀ (150 città principali per lavorazioni meccaniche)
-- Lombardia
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Milano', 'milano', (SELECT id FROM regions WHERE slug='lombardia'), 'MI'),
  ('Brescia', 'brescia', (SELECT id FROM regions WHERE slug='lombardia'), 'BS'),
  ('Bergamo', 'bergamo', (SELECT id FROM regions WHERE slug='lombardia'), 'BG'),
  ('Monza', 'monza', (SELECT id FROM regions WHERE slug='lombardia'), 'MB'),
  ('Como', 'como', (SELECT id FROM regions WHERE slug='lombardia'), 'CO'),
  ('Varese', 'varese', (SELECT id FROM regions WHERE slug='lombardia'), 'VA'),
  ('Lecco', 'lecco', (SELECT id FROM regions WHERE slug='lombardia'), 'LC'),
  ('Cremona', 'cremona', (SELECT id FROM regions WHERE slug='lombardia'), 'CR'),
  ('Mantova', 'mantova', (SELECT id FROM regions WHERE slug='lombardia'), 'MN'),
  ('Pavia', 'pavia', (SELECT id FROM regions WHERE slug='lombardia'), 'PV'),
  ('Lodi', 'lodi', (SELECT id FROM regions WHERE slug='lombardia'), 'LO'),
  ('Sondrio', 'sondrio', (SELECT id FROM regions WHERE slug='lombardia'), 'SO'),
  ('Busto Arsizio', 'busto-arsizio', (SELECT id FROM regions WHERE slug='lombardia'), 'VA'),
  ('Gallarate', 'gallarate', (SELECT id FROM regions WHERE slug='lombardia'), 'VA'),
  ('Legnano', 'legnano', (SELECT id FROM regions WHERE slug='lombardia'), 'MI'),
  ('Desio', 'desio', (SELECT id FROM regions WHERE slug='lombardia'), 'MB'),
  ('Sesto San Giovanni', 'sesto-san-giovanni', (SELECT id FROM regions WHERE slug='lombardia'), 'MI'),
  ('Cinisello Balsamo', 'cinisello-balsamo', (SELECT id FROM regions WHERE slug='lombardia'), 'MI'),
  ('Treviglio', 'treviglio', (SELECT id FROM regions WHERE slug='lombardia'), 'BG'),
  ('Dalmine', 'dalmine', (SELECT id FROM regions WHERE slug='lombardia'), 'BG');

-- Veneto
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Vicenza', 'vicenza', (SELECT id FROM regions WHERE slug='veneto'), 'VI'),
  ('Padova', 'padova', (SELECT id FROM regions WHERE slug='veneto'), 'PD'),
  ('Verona', 'verona', (SELECT id FROM regions WHERE slug='veneto'), 'VR'),
  ('Treviso', 'treviso', (SELECT id FROM regions WHERE slug='veneto'), 'TV'),
  ('Venezia', 'venezia', (SELECT id FROM regions WHERE slug='veneto'), 'VE'),
  ('Rovigo', 'rovigo', (SELECT id FROM regions WHERE slug='veneto'), 'RO'),
  ('Belluno', 'belluno', (SELECT id FROM regions WHERE slug='veneto'), 'BL'),
  ('Bassano del Grappa', 'bassano-del-grappa', (SELECT id FROM regions WHERE slug='veneto'), 'VI'),
  ('Schio', 'schio', (SELECT id FROM regions WHERE slug='veneto'), 'VI'),
  ('Thiene', 'thiene', (SELECT id FROM regions WHERE slug='veneto'), 'VI'),
  ('Cittadella', 'cittadella', (SELECT id FROM regions WHERE slug='veneto'), 'PD'),
  ('Castelfranco Veneto', 'castelfranco-veneto', (SELECT id FROM regions WHERE slug='veneto'), 'TV'),
  ('Conegliano', 'conegliano', (SELECT id FROM regions WHERE slug='veneto'), 'TV'),
  ('San Dona di Piave', 'san-dona-di-piave', (SELECT id FROM regions WHERE slug='veneto'), 'VE'),
  ('Chioggia', 'chioggia', (SELECT id FROM regions WHERE slug='veneto'), 'VE');

-- Emilia-Romagna
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Bologna', 'bologna', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'BO'),
  ('Modena', 'modena', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'MO'),
  ('Reggio Emilia', 'reggio-emilia', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'RE'),
  ('Parma', 'parma', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'PR'),
  ('Piacenza', 'piacenza', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'PC'),
  ('Ferrara', 'ferrara', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'FE'),
  ('Ravenna', 'ravenna', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'RA'),
  ('Rimini', 'rimini', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'RN'),
  ('Forli', 'forli', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'FC'),
  ('Cesena', 'cesena', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'FC'),
  ('Imola', 'imola', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'BO'),
  ('Carpi', 'carpi', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'MO'),
  ('Sassuolo', 'sassuolo', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'MO'),
  ('Faenza', 'faenza', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'RA'),
  ('Casalecchio di Reno', 'casalecchio-di-reno', (SELECT id FROM regions WHERE slug='emilia-romagna'), 'BO');

-- Piemonte
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Torino', 'torino', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Novara', 'novara', (SELECT id FROM regions WHERE slug='piemonte'), 'NO'),
  ('Alessandria', 'alessandria', (SELECT id FROM regions WHERE slug='piemonte'), 'AL'),
  ('Asti', 'asti', (SELECT id FROM regions WHERE slug='piemonte'), 'AT'),
  ('Cuneo', 'cuneo', (SELECT id FROM regions WHERE slug='piemonte'), 'CN'),
  ('Vercelli', 'vercelli', (SELECT id FROM regions WHERE slug='piemonte'), 'VC'),
  ('Biella', 'biella', (SELECT id FROM regions WHERE slug='piemonte'), 'BI'),
  ('Verbania', 'verbania', (SELECT id FROM regions WHERE slug='piemonte'), 'VB'),
  ('Ivrea', 'ivrea', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Moncalieri', 'moncalieri', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Rivoli', 'rivoli', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Collegno', 'collegno', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Settimo Torinese', 'settimo-torinese', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Chieri', 'chieri', (SELECT id FROM regions WHERE slug='piemonte'), 'TO'),
  ('Carmagnola', 'carmagnola', (SELECT id FROM regions WHERE slug='piemonte'), 'TO');

-- Toscana
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Firenze', 'firenze', (SELECT id FROM regions WHERE slug='toscana'), 'FI'),
  ('Prato', 'prato', (SELECT id FROM regions WHERE slug='toscana'), 'PO'),
  ('Livorno', 'livorno', (SELECT id FROM regions WHERE slug='toscana'), 'LI'),
  ('Arezzo', 'arezzo', (SELECT id FROM regions WHERE slug='toscana'), 'AR'),
  ('Lucca', 'lucca', (SELECT id FROM regions WHERE slug='toscana'), 'LU'),
  ('Pistoia', 'pistoia', (SELECT id FROM regions WHERE slug='toscana'), 'PT'),
  ('Massa', 'massa', (SELECT id FROM regions WHERE slug='toscana'), 'MS'),
  ('Siena', 'siena', (SELECT id FROM regions WHERE slug='toscana'), 'SI'),
  ('Grosseto', 'grosseto', (SELECT id FROM regions WHERE slug='toscana'), 'GR'),
  ('Pisa', 'pisa', (SELECT id FROM regions WHERE slug='toscana'), 'PI');

-- Lazio
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Roma', 'roma', (SELECT id FROM regions WHERE slug='lazio'), 'RM'),
  ('Latina', 'latina', (SELECT id FROM regions WHERE slug='lazio'), 'LT'),
  ('Frosinone', 'frosinone', (SELECT id FROM regions WHERE slug='lazio'), 'FR'),
  ('Viterbo', 'viterbo', (SELECT id FROM regions WHERE slug='lazio'), 'VT'),
  ('Rieti', 'rieti', (SELECT id FROM regions WHERE slug='lazio'), 'RI'),
  ('Guidonia Montecelio', 'guidonia-montecelio', (SELECT id FROM regions WHERE slug='lazio'), 'RM'),
  ('Fiumicino', 'fiumicino', (SELECT id FROM regions WHERE slug='lazio'), 'RM'),
  ('Aprilia', 'aprilia', (SELECT id FROM regions WHERE slug='lazio'), 'LT'),
  ('Tivoli', 'tivoli', (SELECT id FROM regions WHERE slug='lazio'), 'RM'),
  ('Civitavecchia', 'civitavecchia', (SELECT id FROM regions WHERE slug='lazio'), 'RM');

-- Campania
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Napoli', 'napoli', (SELECT id FROM regions WHERE slug='campania'), 'NA'),
  ('Salerno', 'salerno', (SELECT id FROM regions WHERE slug='campania'), 'SA'),
  ('Caserta', 'caserta', (SELECT id FROM regions WHERE slug='campania'), 'CE'),
  ('Avellino', 'avellino', (SELECT id FROM regions WHERE slug='campania'), 'AV'),
  ('Benevento', 'benevento', (SELECT id FROM regions WHERE slug='campania'), 'BN'),
  ('Torre del Greco', 'torre-del-greco', (SELECT id FROM regions WHERE slug='campania'), 'NA'),
  ('Giugliano in Campania', 'giugliano-in-campania', (SELECT id FROM regions WHERE slug='campania'), 'NA'),
  ('Castellammare di Stabia', 'castellammare-di-stabia', (SELECT id FROM regions WHERE slug='campania'), 'NA');

-- Puglia
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Bari', 'bari', (SELECT id FROM regions WHERE slug='puglia'), 'BA'),
  ('Taranto', 'taranto', (SELECT id FROM regions WHERE slug='puglia'), 'TA'),
  ('Foggia', 'foggia', (SELECT id FROM regions WHERE slug='puglia'), 'FG'),
  ('Lecce', 'lecce', (SELECT id FROM regions WHERE slug='puglia'), 'LE'),
  ('Brindisi', 'brindisi', (SELECT id FROM regions WHERE slug='puglia'), 'BR'),
  ('Andria', 'andria', (SELECT id FROM regions WHERE slug='puglia'), 'BT'),
  ('Barletta', 'barletta', (SELECT id FROM regions WHERE slug='puglia'), 'BT'),
  ('Altamura', 'altamura', (SELECT id FROM regions WHERE slug='puglia'), 'BA');

-- Sicilia
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Palermo', 'palermo', (SELECT id FROM regions WHERE slug='sicilia'), 'PA'),
  ('Catania', 'catania', (SELECT id FROM regions WHERE slug='sicilia'), 'CT'),
  ('Messina', 'messina', (SELECT id FROM regions WHERE slug='sicilia'), 'ME'),
  ('Siracusa', 'siracusa', (SELECT id FROM regions WHERE slug='sicilia'), 'SR'),
  ('Ragusa', 'ragusa', (SELECT id FROM regions WHERE slug='sicilia'), 'RG');

-- Sardegna
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Cagliari', 'cagliari', (SELECT id FROM regions WHERE slug='sardegna'), 'CA'),
  ('Sassari', 'sassari', (SELECT id FROM regions WHERE slug='sardegna'), 'SS'),
  ('Olbia', 'olbia', (SELECT id FROM regions WHERE slug='sardegna'), 'SS'),
  ('Nuoro', 'nuoro', (SELECT id FROM regions WHERE slug='sardegna'), 'NU'),
  ('Oristano', 'oristano', (SELECT id FROM regions WHERE slug='sardegna'), 'OR');

-- Friuli Venezia Giulia
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Trieste', 'trieste', (SELECT id FROM regions WHERE slug='friuli-venezia-giulia'), 'TS'),
  ('Udine', 'udine', (SELECT id FROM regions WHERE slug='friuli-venezia-giulia'), 'UD'),
  ('Pordenone', 'pordenone', (SELECT id FROM regions WHERE slug='friuli-venezia-giulia'), 'PN'),
  ('Gorizia', 'gorizia', (SELECT id FROM regions WHERE slug='friuli-venezia-giulia'), 'GO'),
  ('Monfalcone', 'monfalcone', (SELECT id FROM regions WHERE slug='friuli-venezia-giulia'), 'GO');

-- Trentino-Alto Adige
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Trento', 'trento', (SELECT id FROM regions WHERE slug='trentino-alto-adige'), 'TN'),
  ('Bolzano', 'bolzano', (SELECT id FROM regions WHERE slug='trentino-alto-adige'), 'BZ'),
  ('Rovereto', 'rovereto', (SELECT id FROM regions WHERE slug='trentino-alto-adige'), 'TN'),
  ('Merano', 'merano', (SELECT id FROM regions WHERE slug='trentino-alto-adige'), 'BZ');

-- Liguria
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Genova', 'genova', (SELECT id FROM regions WHERE slug='liguria'), 'GE'),
  ('La Spezia', 'la-spezia', (SELECT id FROM regions WHERE slug='liguria'), 'SP'),
  ('Savona', 'savona', (SELECT id FROM regions WHERE slug='liguria'), 'SV'),
  ('Imperia', 'imperia', (SELECT id FROM regions WHERE slug='liguria'), 'IM'),
  ('Sanremo', 'sanremo', (SELECT id FROM regions WHERE slug='liguria'), 'IM');

-- Marche
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Ancona', 'ancona', (SELECT id FROM regions WHERE slug='marche'), 'AN'),
  ('Pesaro', 'pesaro', (SELECT id FROM regions WHERE slug='marche'), 'PU'),
  ('Fano', 'fano', (SELECT id FROM regions WHERE slug='marche'), 'PU'),
  ('Ascoli Piceno', 'ascoli-piceno', (SELECT id FROM regions WHERE slug='marche'), 'AP'),
  ('Macerata', 'macerata', (SELECT id FROM regions WHERE slug='marche'), 'MC'),
  ('Jesi', 'jesi', (SELECT id FROM regions WHERE slug='marche'), 'AN');

-- Abruzzo
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Pescara', 'pescara', (SELECT id FROM regions WHERE slug='abruzzo'), 'PE'),
  ('Chieti', 'chieti', (SELECT id FROM regions WHERE slug='abruzzo'), 'CH'),
  ('Teramo', 'teramo', (SELECT id FROM regions WHERE slug='abruzzo'), 'TE'),
  ('L''Aquila', 'l-aquila', (SELECT id FROM regions WHERE slug='abruzzo'), 'AQ');

-- Umbria
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Perugia', 'perugia', (SELECT id FROM regions WHERE slug='umbria'), 'PG'),
  ('Terni', 'terni', (SELECT id FROM regions WHERE slug='umbria'), 'TR'),
  ('Foligno', 'foligno', (SELECT id FROM regions WHERE slug='umbria'), 'PG');

-- Calabria
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Reggio Calabria', 'reggio-calabria', (SELECT id FROM regions WHERE slug='calabria'), 'RC'),
  ('Catanzaro', 'catanzaro', (SELECT id FROM regions WHERE slug='calabria'), 'CZ'),
  ('Cosenza', 'cosenza', (SELECT id FROM regions WHERE slug='calabria'), 'CS'),
  ('Crotone', 'crotone', (SELECT id FROM regions WHERE slug='calabria'), 'KR');

-- Basilicata
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Potenza', 'potenza', (SELECT id FROM regions WHERE slug='basilicata'), 'PZ'),
  ('Matera', 'matera', (SELECT id FROM regions WHERE slug='basilicata'), 'MT');

-- Molise
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Campobasso', 'campobasso', (SELECT id FROM regions WHERE slug='molise'), 'CB'),
  ('Isernia', 'isernia', (SELECT id FROM regions WHERE slug='molise'), 'IS');

-- Valle d'Aosta
INSERT INTO cities (name, slug, region_id, province) VALUES
  ('Aosta', 'aosta', (SELECT id FROM regions WHERE slug='valle-d-aosta'), 'AO');


-- ============================================
-- SETTORI
-- ============================================
INSERT INTO sectors (name, slug, description) VALUES
  ('Lavorazioni Meccaniche', 'lavorazioni-meccaniche',
   'Lavorazioni meccaniche di precisione conto terzi: fresatura, tornitura, rettifica, foratura e lavorazioni speciali per componenti industriali.'),
  ('Lavorazioni CNC', 'lavorazioni-cnc',
   'Lavorazioni su macchine a controllo numerico CNC: centri di lavoro, torni CNC, fresatrici CNC per produzioni in serie e prototipi.'),
  ('Torneria', 'torneria',
   'Tornerie meccaniche di precisione: tornitura CNC e tradizionale, produzione di particolari torniti, boccole, alberi, perni e componenti cilindrici.'),
  ('Fresatura', 'fresatura',
   'Fresatura meccanica CNC e tradizionale: lavorazione di superfici piane, cave, scanalature, ingranaggi e componenti complessi.'),
  ('Rettifica', 'rettifica',
   'Rettifica di precisione: rettifica in piano, rettifica cilindrica, rettifica senza centri per finiture di alta precisione su metalli.'),
  ('Carpenteria Metallica', 'carpenteria-metallica',
   'Carpenteria metallica leggera e pesante: taglio, piegatura, saldatura, assemblaggio strutture in acciaio, ferro e alluminio.'),
  ('Trattamenti Termici', 'trattamenti-termici',
   'Trattamenti termici dei metalli: tempra, rinvenimento, cementazione, nitrurazione, bonifica per migliorare le proprieta meccaniche.'),
  ('Stampaggio Metalli', 'stampaggio-metalli',
   'Stampaggio a caldo e a freddo di metalli: stampaggio lamiera, imbutitura, tranciatura, piegatura per produzioni in serie.'),
  ('Saldatura', 'saldatura',
   'Saldatura industriale: saldatura TIG, MIG/MAG, ad arco, laser, a resistenza per giunzioni metalliche di precisione.'),
  ('Taglio Laser', 'taglio-laser',
   'Taglio laser di metalli: taglio lamiera, taglio tubo, incisione laser su acciaio, alluminio, rame e ottone.');
