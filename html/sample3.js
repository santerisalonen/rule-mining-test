var loadeddata = {
products : [{"product_id":"abu-dhabi","count":5962},{"product_id":"ajman","count":1000},{"product_id":"alanya","count":9464},{"product_id":"bali","count":3587},{"product_id":"bentota","count":301},{"product_id":"brac","count":4882},{"product_id":"colombo","count":16},{"product_id":"dhermi","count":960},{"product_id":"doha","count":1569},{"product_id":"dubai","count":6915},{"product_id":"durresin-riviera","count":7925},{"product_id":"fujairah","count":5875},{"product_id":"galle","count":22},{"product_id":"goa","count":1017},{"product_id":"habarana","count":13},{"product_id":"hikkaduwa","count":433},{"product_id":"himara","count":462},{"product_id":"kalymnos","count":810},{"product_id":"kanali","count":208},{"product_id":"kanariansaaret","count":50982},{"product_id":"kandy","count":5},{"product_id":"karpathos","count":20878},{"product_id":"khao-lak","count":2209},{"product_id":"koh-lanta","count":719},{"product_id":"korfu","count":6631},{"product_id":"kos","count":13995},{"product_id":"krabi","count":2002},{"product_id":"kreeta","count":83016},{"product_id":"lefkas","count":6185},{"product_id":"leros","count":922},{"product_id":"madeira","count":7806},{"product_id":"makarskan-riviera","count":20812},{"product_id":"mallorca","count":7562},{"product_id":"naxos","count":1724},{"product_id":"negombo","count":428},{"product_id":"nessebar-ja-pomorie","count":2036},{"product_id":"nuwara-eliya","count":1},{"product_id":"parga","count":8993},{"product_id":"paros","count":1739},{"product_id":"phan-thiet","count":1278},{"product_id":"phuket","count":1834},{"product_id":"pserimos","count":247},{"product_id":"ras-al-khaimah","count":6841},{"product_id":"rodos","count":37937},{"product_id":"saigon","count":243},{"product_id":"salalah","count":663},{"product_id":"santorini","count":6628},{"product_id":"saranda","count":9035},{"product_id":"side","count":1319},{"product_id":"sivota","count":2521},{"product_id":"sozopol","count":26},{"product_id":"split-ja-podstrana","count":3307},{"product_id":"starigrad-paklenica","count":202},{"product_id":"sunny-beach","count":5900},{"product_id":"tilos","count":423},{"product_id":"weligama-bay","count":71},{"product_id":"yala","count":4},{"product_id":"zakynthos","count":12011}],
rules : [{"antecedents":["fujairah"],"consequents":["ras-al-khaimah"],"antecedent support":0.0461285677,"consequent support":0.0474673915,"support":0.0204576343,"confidence":0.4434916447,"lift":9.3430801742,"leverage":0.0182680316,"conviction":1.7116231937},{"antecedents":["ras-al-khaimah"],"consequents":["fujairah"],"antecedent support":0.0474673915,"consequent support":0.0461285677,"support":0.0204576343,"confidence":0.430982906,"lift":9.3430801742,"leverage":0.0182680316,"conviction":1.6763493441},{"antecedents":["abu-dhabi"],"consequents":["ras-al-khaimah"],"antecedent support":0.0360569609,"consequent support":0.0474673915,"support":0.0144734974,"confidence":0.4014064698,"lift":8.4564678375,"leverage":0.0127619675,"conviction":1.5912845034},{"antecedents":["ras-al-khaimah"],"consequents":["abu-dhabi"],"antecedent support":0.0474673915,"consequent support":0.0360569609,"support":0.0144734974,"confidence":0.3049145299,"lift":8.4564678375,"leverage":0.0127619675,"conviction":1.3867978553},{"antecedents":["abu-dhabi"],"consequents":["dubai"],"antecedent support":0.0360569609,"consequent support":0.033409741,"support":0.0100310364,"confidence":0.2781997187,"lift":8.3269043917,"leverage":0.0088263826,"conviction":1.3391381025},{"antecedents":["dubai"],"consequents":["abu-dhabi"],"antecedent support":0.033409741,"consequent support":0.0360569609,"support":0.0100310364,"confidence":0.3002428658,"lift":8.3269043917,"leverage":0.0088263826,"conviction":1.3775394234},{"antecedents":["abu-dhabi"],"consequents":["fujairah"],"antecedent support":0.0360569609,"consequent support":0.0461285677,"support":0.0126275433,"confidence":0.3502109705,"lift":7.5920625378,"leverage":0.0109642873,"conviction":1.4679709705},{"antecedents":["fujairah"],"consequents":["abu-dhabi"],"antecedent support":0.0461285677,"consequent support":0.0360569609,"support":0.0126275433,"confidence":0.2737467018,"lift":7.5920625378,"leverage":0.0109642873,"conviction":1.3272821502},{"antecedents":["dubai"],"consequents":["ras-al-khaimah"],"antecedent support":0.033409741,"consequent support":0.0474673915,"support":0.0111974359,"confidence":0.335154827,"lift":7.0607382498,"leverage":0.0096115627,"conviction":1.4327134303},{"antecedents":["ras-al-khaimah"],"consequents":["dubai"],"antecedent support":0.0474673915,"consequent support":0.033409741,"support":0.0111974359,"confidence":0.2358974359,"lift":7.0607382498,"leverage":0.0096115627,"conviction":1.2650006746},{"antecedents":["parga"],"consequents":["lefkas"],"antecedent support":0.0440189058,"consequent support":0.0380449115,"support":0.0107613039,"confidence":0.2444700461,"lift":6.4258277055,"leverage":0.0090866086,"conviction":1.2732189949},{"antecedents":["lefkas"],"consequents":["parga"],"antecedent support":0.0380449115,"consequent support":0.0440189058,"support":0.0107613039,"confidence":0.2828579046,"lift":6.4258277055,"leverage":0.0090866086,"conviction":1.3330427823},{"antecedents":["durresin-riviera"],"consequents":["saranda"],"antecedent support":0.0445970343,"consequent support":0.0362496704,"support":0.0097369008,"confidence":0.21833068,"lift":6.0229700797,"leverage":0.008120273,"conviction":1.2329386673},{"antecedents":["saranda"],"consequents":["durresin-riviera"],"antecedent support":0.0362496704,"consequent support":0.0445970343,"support":0.0097369008,"confidence":0.2686066032,"lift":6.0229700797,"leverage":0.008120273,"conviction":1.3062778116},{"antecedents":["fujairah"],"consequents":["dubai"],"antecedent support":0.0461285677,"consequent support":0.033409741,"support":0.0083473639,"confidence":0.1809586631,"lift":5.4163443942,"leverage":0.0068062204,"conviction":1.1801483216},{"antecedents":["dubai"],"consequents":["fujairah"],"antecedent support":0.033409741,"consequent support":0.0461285677,"support":0.0083473639,"confidence":0.2498482089,"lift":5.4163443942,"leverage":0.0068062204,"conviction":1.2715712255},{"antecedents":["brac"],"consequents":["makarskan-riviera"],"antecedent support":0.0367365154,"consequent support":0.1033937156,"support":0.0198896485,"confidence":0.5414135837,"lift":5.2364264143,"leverage":0.0160913236,"conviction":1.955152295},{"antecedents":["makarskan-riviera"],"consequents":["brac"],"antecedent support":0.1033937156,"consequent support":0.0367365154,"support":0.0198896485,"confidence":0.1923680596,"lift":5.2364264143,"leverage":0.0160913236,"conviction":1.1927010764},{"antecedents":["makarskan-riviera"],"consequents":["split-ja-podstrana"],"antecedent support":0.1033937156,"consequent support":0.022212305,"support":0.0113191472,"confidence":0.1094761624,"lift":4.9286268313,"leverage":0.0090225345,"conviction":1.097991602},{"antecedents":["split-ja-podstrana"],"consequents":["makarskan-riviera"],"antecedent support":0.022212305,"consequent support":0.1033937156,"support":0.0113191472,"confidence":0.5095890411,"lift":4.9286268313,"leverage":0.0090225345,"conviction":1.8282753843},{"antecedents":["lefkas"],"consequents":["zakynthos"],"antecedent support":0.0380449115,"consequent support":0.0600036513,"support":0.010041179,"confidence":0.2639296188,"lift":4.3985593024,"leverage":0.0077583454,"conviction":1.2770468322},{"antecedents":["zakynthos"],"consequents":["lefkas"],"antecedent support":0.0600036513,"consequent support":0.0380449115,"support":0.010041179,"confidence":0.1673427992,"lift":4.3985593024,"leverage":0.0077583454,"conviction":1.1552834559},{"antecedents":["zakynthos"],"consequents":["korfu"],"antecedent support":0.0600036513,"consequent support":0.0343124328,"support":0.0085400734,"confidence":0.1423258959,"lift":4.1479395146,"leverage":0.0064812022,"conviction":1.1259376523},{"antecedents":["korfu"],"consequents":["zakynthos"],"antecedent support":0.0343124328,"consequent support":0.0600036513,"support":0.0085400734,"confidence":0.2488915164,"lift":4.1479395146,"leverage":0.0064812022,"conviction":1.2514788066},{"antecedents":["lefkas"],"consequents":["karpathos"],"antecedent support":0.0380449115,"consequent support":0.0821753859,"support":0.0127086841,"confidence":0.3340442549,"lift":4.0650159546,"leverage":0.0095823288,"conviction":1.3782066162},{"antecedents":["karpathos"],"consequents":["lefkas"],"antecedent support":0.0821753859,"consequent support":0.0380449115,"support":0.0127086841,"confidence":0.1546531721,"lift":4.0650159546,"leverage":0.0095823288,"conviction":1.1379413239},{"antecedents":["zakynthos"],"consequents":["parga"],"antecedent support":0.0600036513,"consequent support":0.0440189058,"support":0.0086719273,"confidence":0.1445233266,"lift":3.2832103364,"leverage":0.0060306322,"conviction":1.1174835316},{"antecedents":["parga"],"consequents":["zakynthos"],"antecedent support":0.0440189058,"consequent support":0.0600036513,"support":0.0086719273,"confidence":0.1970046083,"lift":3.2832103364,"leverage":0.0060306322,"conviction":1.1706123826},{"antecedents":["zakynthos"],"consequents":["kos"],"antecedent support":0.0600036513,"consequent support":0.0729050449,"support":0.0135099499,"confidence":0.2251521298,"lift":3.0882928613,"leverage":0.009135381,"conviction":1.1964864211},{"antecedents":["kos"],"consequents":["zakynthos"],"antecedent support":0.0729050449,"consequent support":0.0600036513,"support":0.0135099499,"confidence":0.1853088481,"lift":3.0882928613,"leverage":0.009135381,"conviction":1.1538069935},{"antecedents":["korfu"],"consequents":["karpathos"],"antecedent support":0.0343124328,"consequent support":0.0821753859,"support":0.0086719273,"confidence":0.2527342595,"lift":3.0755469741,"leverage":0.0058522899,"conviction":1.2282439357},{"antecedents":["karpathos"],"consequents":["korfu"],"antecedent support":0.0821753859,"consequent support":0.0343124328,"support":0.0086719273,"confidence":0.1055294989,"lift":3.0755469741,"leverage":0.0058522899,"conviction":1.0796192451},{"antecedents":["parga"],"consequents":["karpathos"],"antecedent support":0.0440189058,"consequent support":0.0821753859,"support":0.0106395927,"confidence":0.2417050691,"lift":2.9413317187,"leverage":0.0070223221,"conviction":1.2103794668},{"antecedents":["karpathos"],"consequents":["parga"],"antecedent support":0.0821753859,"consequent support":0.0440189058,"support":0.0106395927,"confidence":0.1294742039,"lift":2.9413317187,"leverage":0.0070223221,"conviction":1.0981651531},{"antecedents":["zakynthos"],"consequents":["karpathos"],"antecedent support":0.0600036513,"consequent support":0.0821753859,"support":0.0139663671,"confidence":0.2327586207,"lift":2.8324615463,"leverage":0.0090355439,"conviction":1.1962657891},{"antecedents":["karpathos"],"consequents":["zakynthos"],"antecedent support":0.0821753859,"consequent support":0.0600036513,"support":0.0139663671,"confidence":0.1699580351,"lift":2.8324615463,"leverage":0.0090355439,"conviction":1.1324684635},{"antecedents":["durresin-riviera"],"consequents":["makarskan-riviera"],"antecedent support":0.0445970343,"consequent support":0.1033937156,"support":0.0113597176,"confidence":0.2547191267,"lift":2.4635842236,"leverage":0.0067486645,"conviction":1.2030448069},{"antecedents":["makarskan-riviera"],"consequents":["durresin-riviera"],"antecedent support":0.1033937156,"consequent support":0.0445970343,"support":0.0113597176,"confidence":0.1098685501,"lift":2.4635842236,"leverage":0.0067486645,"conviction":1.0733279515},{"antecedents":["karpathos"],"consequents":["kos"],"antecedent support":0.0821753859,"consequent support":0.0729050449,"support":0.0147067773,"confidence":0.178968156,"lift":2.4548116825,"leverage":0.0087157771,"conviction":1.1291827008},{"antecedents":["kos"],"consequents":["karpathos"],"antecedent support":0.0729050449,"consequent support":0.0821753859,"support":0.0147067773,"confidence":0.2017250974,"lift":2.4548116825,"leverage":0.0087157771,"conviction":1.1497600777},{"antecedents":["kos"],"consequents":["rodos"],"antecedent support":0.0729050449,"consequent support":0.1738848206,"support":0.0276690265,"confidence":0.3795214246,"lift":2.1826023878,"leverage":0.0149919459,"conviction":1.3314161232},{"antecedents":["rodos"],"consequents":["kos"],"antecedent support":0.1738848206,"consequent support":0.0729050449,"support":0.0276690265,"confidence":0.1591227252,"lift":2.1826023878,"leverage":0.0149919459,"conviction":1.1025330126},{"antecedents":["kos"],"consequents":["makarskan-riviera"],"antecedent support":0.0729050449,"consequent support":0.1033937156,"support":0.015254478,"confidence":0.2092376183,"lift":2.0236976392,"leverage":0.0077165545,"conviction":1.1338504525},{"antecedents":["makarskan-riviera"],"consequents":["kos"],"antecedent support":0.1033937156,"consequent support":0.0729050449,"support":0.015254478,"confidence":0.1475377673,"lift":2.0236976392,"leverage":0.0077165545,"conviction":1.087549594},{"antecedents":["makarskan-riviera"],"consequents":["zakynthos"],"antecedent support":0.1033937156,"consequent support":0.0600036513,"support":0.0123435503,"confidence":0.1193839513,"lift":1.9896114433,"leverage":0.0061395499,"conviction":1.0674304086},{"antecedents":["zakynthos"],"consequents":["makarskan-riviera"],"antecedent support":0.0600036513,"consequent support":0.1033937156,"support":0.0123435503,"confidence":0.2057133198,"lift":1.9896114433,"leverage":0.0061395499,"conviction":1.1288194889},{"antecedents":["zakynthos"],"consequents":["rodos"],"antecedent support":0.0600036513,"consequent support":0.1738848206,"support":0.019412946,"confidence":0.3235294118,"lift":1.8605960583,"leverage":0.0089792219,"conviction":1.2212137435},{"antecedents":["rodos"],"consequents":["zakynthos"],"antecedent support":0.1738848206,"consequent support":0.0600036513,"support":0.019412946,"confidence":0.1116425572,"lift":1.8605960583,"leverage":0.0089792219,"conviction":1.0581285227},{"antecedents":["kreeta"],"consequents":["kos"],"antecedent support":0.2698135789,"consequent support":0.0729050449,"support":0.035052843,"confidence":0.129915044,"lift":1.7819760499,"leverage":0.0153820719,"conviction":1.0655223362},{"antecedents":["kos"],"consequents":["kreeta"],"antecedent support":0.0729050449,"consequent support":0.2698135789,"support":0.035052843,"confidence":0.4808013356,"lift":1.7819760499,"leverage":0.0153820719,"conviction":1.4063719171},{"antecedents":["madeira"],"consequents":["kanariansaaret"],"antecedent support":0.0392315962,"consequent support":0.2003367345,"support":0.0134693795,"confidence":0.3433298862,"lift":1.713764014,"leverage":0.0056098496,"conviction":1.2177549256},{"antecedents":["kanariansaaret"],"consequents":["madeira"],"antecedent support":0.2003367345,"consequent support":0.0392315962,"support":0.0134693795,"confidence":0.0672336979,"lift":1.713764014,"leverage":0.0056098496,"conviction":1.0300204902},{"antecedents":["kanariansaaret"],"consequents":["fujairah"],"antecedent support":0.2003367345,"consequent support":0.0461285677,"support":0.0157818934,"confidence":0.0787768327,"lift":1.7077667207,"leverage":0.0065406468,"conviction":1.0354401259},{"antecedents":["fujairah"],"consequents":["kanariansaaret"],"antecedent support":0.0461285677,"consequent support":0.2003367345,"support":0.0157818934,"confidence":0.3421284081,"lift":1.7077667207,"leverage":0.0065406468,"conviction":1.2155309263},{"antecedents":["karpathos"],"consequents":["makarskan-riviera"],"antecedent support":0.0821753859,"consequent support":0.1033937156,"support":0.0143315009,"confidence":0.1744013824,"lift":1.686769658,"leverage":0.0058350824,"conviction":1.0860074923},{"antecedents":["makarskan-riviera"],"consequents":["karpathos"],"antecedent support":0.1033937156,"consequent support":0.0821753859,"support":0.0143315009,"confidence":0.1386109476,"lift":1.686769658,"leverage":0.0058350824,"conviction":1.0655169247},{"antecedents":["mallorca"],"consequents":["rodos"],"antecedent support":0.0398097247,"consequent support":0.1738848206,"support":0.0113597176,"confidence":0.2853503185,"lift":1.6410306404,"leverage":0.0044374108,"conviction":1.1559722208},{"antecedents":["rodos"],"consequents":["mallorca"],"antecedent support":0.1738848206,"consequent support":0.0398097247,"support":0.0113597176,"confidence":0.0653289781,"lift":1.6410306404,"leverage":0.0044374108,"conviction":1.0273029256},{"antecedents":["rodos"],"consequents":["korfu"],"antecedent support":0.1738848206,"consequent support":0.0343124328,"support":0.0096354748,"confidence":0.0554129725,"lift":1.6149531799,"leverage":0.0036690636,"conviction":1.0223383754},{"antecedents":["korfu"],"consequents":["rodos"],"antecedent support":0.0343124328,"consequent support":0.1738848206,"support":0.0096354748,"confidence":0.2808158439,"lift":1.6149531799,"leverage":0.0036690636,"conviction":1.1486837863},{"antecedents":["lefkas"],"consequents":["rodos"],"antecedent support":0.0380449115,"consequent support":0.1738848206,"support":0.010528024,"confidence":0.2767262063,"lift":1.5914339471,"leverage":0.0039125914,"conviction":1.142188735},{"antecedents":["rodos"],"consequents":["lefkas"],"antecedent support":0.1738848206,"consequent support":0.0380449115,"support":0.010528024,"confidence":0.0605459636,"lift":1.5914339471,"leverage":0.0039125914,"conviction":1.0239512007},{"antecedents":["kanariansaaret"],"consequents":["ras-al-khaimah"],"antecedent support":0.2003367345,"consequent support":0.0474673915,"support":0.0142909305,"confidence":0.0713345484,"lift":1.5028116378,"leverage":0.0047814683,"conviction":1.0257004897},{"antecedents":["ras-al-khaimah"],"consequents":["kanariansaaret"],"antecedent support":0.0474673915,"consequent support":0.2003367345,"support":0.0142909305,"confidence":0.3010683761,"lift":1.5028116378,"leverage":0.0047814683,"conviction":1.144122312},{"antecedents":["zakynthos"],"consequents":["kreeta"],"antecedent support":0.0600036513,"consequent support":0.2698135789,"support":0.0238655496,"confidence":0.3977349561,"lift":1.4741102269,"leverage":0.0076757497,"conviction":1.2124004679},{"antecedents":["kreeta"],"consequents":["zakynthos"],"antecedent support":0.2698135789,"consequent support":0.0600036513,"support":0.0238655496,"confidence":0.0884519961,"lift":1.4741102269,"leverage":0.0076757497,"conviction":1.0312088279},{"antecedents":["lefkas"],"consequents":["kreeta"],"antecedent support":0.0380449115,"consequent support":0.2698135789,"support":0.0150110554,"confidence":0.3945614503,"lift":1.4623483809,"leverage":0.0047460217,"conviction":1.2060454714},{"antecedents":["kreeta"],"consequents":["lefkas"],"antecedent support":0.2698135789,"consequent support":0.0380449115,"support":0.0150110554,"confidence":0.0556349147,"lift":1.4623483809,"leverage":0.0047460217,"conviction":1.0186262744},{"antecedents":["karpathos"],"consequents":["kreeta"],"antecedent support":0.0821753859,"consequent support":0.2698135789,"support":0.0321317727,"confidence":0.3910145643,"lift":1.4492026898,"leverage":0.0099597377,"conviction":1.199021156},{"antecedents":["kreeta"],"consequents":["karpathos"],"antecedent support":0.2698135789,"consequent support":0.0821753859,"support":0.0321317727,"confidence":0.1190887903,"lift":1.4492026898,"leverage":0.0099597377,"conviction":1.0419036606},{"antecedents":["karpathos"],"consequents":["rodos"],"antecedent support":0.0821753859,"consequent support":0.1738848206,"support":0.0206604864,"confidence":0.2514194026,"lift":1.4458962075,"leverage":0.0063714342,"conviction":1.1035754631},{"antecedents":["rodos"],"consequents":["karpathos"],"antecedent support":0.1738848206,"consequent support":0.0821753859,"support":0.0206604864,"confidence":0.1188170789,"lift":1.4458962075,"leverage":0.0063714342,"conviction":1.0415823912},{"antecedents":["parga"],"consequents":["rodos"],"antecedent support":0.0440189058,"consequent support":0.1738848206,"support":0.010477311,"confidence":0.2380184332,"lift":1.3688281265,"leverage":0.0028230915,"conviction":1.084166882},{"antecedents":["rodos"],"consequents":["parga"],"antecedent support":0.1738848206,"consequent support":0.0440189058,"support":0.010477311,"confidence":0.0602543164,"lift":1.3688281265,"leverage":0.0028230915,"conviction":1.0172763875},{"antecedents":["rodos"],"consequents":["brac"],"antecedent support":0.1738848206,"consequent support":0.0367365154,"support":0.0087124977,"confidence":0.050104993,"lift":1.3639016234,"leverage":0.0023245753,"conviction":1.0140736371},{"antecedents":["brac"],"consequents":["rodos"],"antecedent support":0.0367365154,"consequent support":0.1738848206,"support":0.0087124977,"confidence":0.2371617891,"lift":1.3639016234,"leverage":0.0023245753,"conviction":1.0829493955},{"antecedents":["kreeta"],"consequents":["korfu"],"antecedent support":0.2698135789,"consequent support":0.0343124328,"support":0.0125768302,"confidence":0.0466130366,"lift":1.3584882447,"leverage":0.0033188699,"conviction":1.0129020055},{"antecedents":["korfu"],"consequents":["kreeta"],"antecedent support":0.0343124328,"consequent support":0.2698135789,"support":0.0125768302,"confidence":0.3665385752,"lift":1.3584882447,"leverage":0.0033188699,"conviction":1.1526927963},{"antecedents":["kreeta"],"consequents":["mallorca"],"antecedent support":0.2698135789,"consequent support":0.0398097247,"support":0.014585066,"confidence":0.054056086,"lift":1.357861336,"leverage":0.0038438617,"conviction":1.0150604714},{"antecedents":["mallorca"],"consequents":["kreeta"],"antecedent support":0.0398097247,"consequent support":0.2698135789,"support":0.014585066,"confidence":0.3663694268,"lift":1.357861336,"leverage":0.0038438617,"conviction":1.1523850835},{"antecedents":["rodos"],"consequents":["kreeta"],"antecedent support":0.1738848206,"consequent support":0.2698135789,"support":0.0629855772,"confidence":0.3622258516,"lift":1.3425041581,"leverage":0.0160690915,"conviction":1.1448981162},{"antecedents":["kreeta"],"consequents":["rodos"],"antecedent support":0.2698135789,"consequent support":0.1738848206,"support":0.0629855772,"confidence":0.2334410947,"lift":1.3425041581,"leverage":0.0160690915,"conviction":1.077693017},{"antecedents":["kreeta"],"consequents":["brac"],"antecedent support":0.2698135789,"consequent support":0.0367365154,"support":0.0129521066,"confidence":0.0480039095,"lift":1.3067082969,"leverage":0.0030400959,"conviction":1.0118355466},{"antecedents":["brac"],"consequents":["kreeta"],"antecedent support":0.0367365154,"consequent support":0.2698135789,"support":0.0129521066,"confidence":0.3525676422,"lift":1.3067082969,"leverage":0.0030400959,"conviction":1.1278188559},{"antecedents":["makarskan-riviera"],"consequents":["rodos"],"antecedent support":0.1033937156,"consequent support":0.1738848206,"support":0.0229730004,"confidence":0.2221895232,"lift":1.2777971217,"leverage":0.0049944027,"conviction":1.0621034354},{"antecedents":["rodos"],"consequents":["makarskan-riviera"],"antecedent support":0.1738848206,"consequent support":0.1033937156,"support":0.0229730004,"confidence":0.1321161923,"lift":1.2777971217,"leverage":0.0049944027,"conviction":1.033094841},{"antecedents":["kreeta"],"consequents":["parga"],"antecedent support":0.2698135789,"consequent support":0.0440189058,"support":0.0151631945,"confidence":0.056198782,"lift":1.2766964786,"leverage":0.003286296,"conviction":1.0129051287},{"antecedents":["parga"],"consequents":["kreeta"],"antecedent support":0.0440189058,"consequent support":0.2698135789,"support":0.0151631945,"confidence":0.3444700461,"lift":1.2766964786,"leverage":0.003286296,"conviction":1.1138871942},{"antecedents":["santorini"],"consequents":["kreeta"],"antecedent support":0.0293628416,"consequent support":0.2698135789,"support":0.0099093251,"confidence":0.3374784111,"lift":1.2507836426,"leverage":0.0019868317,"conviction":1.1021322675},{"antecedents":["kreeta"],"consequents":["santorini"],"antecedent support":0.2698135789,"consequent support":0.0293628416,"support":0.0099093251,"confidence":0.0367265619,"lift":1.2507836426,"leverage":0.0019868317,"conviction":1.0076444757},{"antecedents":["kanariansaaret"],"consequents":["abu-dhabi"],"antecedent support":0.2003367345,"consequent support":0.0360569609,"support":0.0084792178,"confidence":0.0423248279,"lift":1.1738323709,"leverage":0.001255684,"conviction":1.0065448778},{"antecedents":["abu-dhabi"],"consequents":["kanariansaaret"],"antecedent support":0.0360569609,"consequent support":0.2003367345,"support":0.0084792178,"confidence":0.235161744,"lift":1.1738323709,"leverage":0.001255684,"conviction":1.0455325152},{"antecedents":["makarskan-riviera"],"consequents":["kreeta"],"antecedent support":0.1033937156,"consequent support":0.2698135789,"support":0.0320912023,"confidence":0.3103786541,"lift":1.1503448246,"leverage":0.0041941738,"conviction":1.0588222442},{"antecedents":["kreeta"],"consequents":["makarskan-riviera"],"antecedent support":0.2698135789,"consequent support":0.1033937156,"support":0.0320912023,"confidence":0.1189384257,"lift":1.1503448246,"leverage":0.0041941738,"conviction":1.0176431597},{"antecedents":["rodos"],"consequents":["durresin-riviera"],"antecedent support":0.1738848206,"consequent support":0.0445970343,"support":0.0084893604,"confidence":0.0488217452,"lift":1.0947307591,"leverage":0.0007346131,"conviction":1.0044415554},{"antecedents":["durresin-riviera"],"consequents":["rodos"],"antecedent support":0.0445970343,"consequent support":0.1738848206,"support":0.0084893604,"confidence":0.1903570616,"lift":1.0947307591,"leverage":0.0007346131,"conviction":1.0203450685},{"antecedents":["alanya"],"consequents":["rodos"],"antecedent support":0.0491713492,"consequent support":0.1738848206,"support":0.0090066333,"confidence":0.1831683168,"lift":1.0533887675,"leverage":0.000456482,"conviction":1.01136525},{"antecedents":["rodos"],"consequents":["alanya"],"antecedent support":0.1738848206,"consequent support":0.0491713492,"support":0.0090066333,"confidence":0.0517965469,"lift":1.0533887675,"leverage":0.000456482,"conviction":1.0027686017},{"antecedents":["kreeta"],"consequents":["durresin-riviera"],"antecedent support":0.2698135789,"consequent support":0.0445970343,"support":0.0119885591,"confidence":0.0444327494,"lift":0.9963162374,"leverage":-0.0000443263,"conviction":0.9998280761},{"antecedents":["durresin-riviera"],"consequents":["kreeta"],"antecedent support":0.0445970343,"consequent support":0.2698135789,"support":0.0119885591,"confidence":0.2688196498,"lift":0.9963162374,"leverage":-0.0000443263,"conviction":0.9986406512},{"antecedents":["kreeta"],"consequents":["sunny-beach"],"antecedent support":0.2698135789,"consequent support":0.0365742337,"support":0.0094427653,"confidence":0.0349973686,"lift":0.9568859017,"leverage":-0.0004254596,"conviction":0.9983659473},{"antecedents":["sunny-beach"],"consequents":["kreeta"],"antecedent support":0.0365742337,"consequent support":0.2698135789,"support":0.0094427653,"confidence":0.2581808098,"lift":0.9568859017,"leverage":-0.0004254596,"conviction":0.9843185923},{"antecedents":["kreeta"],"consequents":["alanya"],"antecedent support":0.2698135789,"consequent support":0.0491713492,"support":0.0114408585,"confidence":0.0424028269,"lift":0.862348249,"leverage":-0.0018262392,"conviction":0.9929317645},{"antecedents":["alanya"],"consequents":["kreeta"],"antecedent support":0.0491713492,"consequent support":0.2698135789,"support":0.0114408585,"confidence":0.2326732673,"lift":0.862348249,"leverage":-0.0018262392,"conviction":0.9515977875},{"antecedents":["kanariansaaret"],"consequents":["kos"],"antecedent support":0.2003367345,"consequent support":0.0729050449,"support":0.0085096456,"confidence":0.0424767112,"lift":0.5826306157,"leverage":-0.006095913,"conviction":0.9682218343},{"antecedents":["kos"],"consequents":["kanariansaaret"],"antecedent support":0.0729050449,"consequent support":0.2003367345,"support":0.0085096456,"confidence":0.116722315,"lift":0.5826306157,"leverage":-0.006095913,"conviction":0.9053362029},{"antecedents":["rodos"],"consequents":["kanariansaaret"],"antecedent support":0.1738848206,"consequent support":0.2003367345,"support":0.0196157981,"confidence":0.1128091461,"lift":0.5630976583,"leverage":-0.015219719,"conviction":0.9013429996},{"antecedents":["kanariansaaret"],"consequents":["rodos"],"antecedent support":0.2003367345,"consequent support":0.1738848206,"support":0.0196157981,"confidence":0.0979141353,"lift":0.5630976583,"leverage":-0.015219719,"conviction":0.9157833104},{"antecedents":["kanariansaaret"],"consequents":["makarskan-riviera"],"antecedent support":0.2003367345,"consequent support":0.1033937156,"support":0.0113191472,"confidence":0.0565006075,"lift":0.5464607513,"leverage":-0.0093944121,"conviction":0.9502987405},{"antecedents":["makarskan-riviera"],"consequents":["kanariansaaret"],"antecedent support":0.1033937156,"consequent support":0.2003367345,"support":0.0113191472,"confidence":0.1094761624,"lift":0.5464607513,"leverage":-0.0093944121,"conviction":0.8979695229},{"antecedents":["kreeta"],"consequents":["kanariansaaret"],"antecedent support":0.2698135789,"consequent support":0.2003367345,"support":0.0232671359,"confidence":0.0862341177,"lift":0.4304458589,"leverage":-0.0307864354,"conviction":0.8751292656},{"antecedents":["kanariansaaret"],"consequents":["kreeta"],"antecedent support":0.2003367345,"consequent support":0.2698135789,"support":0.0232671359,"confidence":0.1161401377,"lift":0.4304458589,"leverage":-0.0307864354,"conviction":0.8261337031}],
}