const SUPABASE_URL = 'https://uyjnvwcpaufoddzoysjf.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5am52d2NwYXVmb2Rkem95c2pmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5MzYzMDAsImV4cCI6MjA5NzUxMjMwMH0.k8sHXyqNnRRGkwAeOwCg-vZQ1fG29oNR_6IFGepZBBY';
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ====== 椋熸潗鏁版嵁 ======
const INGREDIENTS = {
  n1: '浜旇姳鑲?00g銆佸啺绯?0g銆佺敓鎶姐€佽€佹娊銆佹枡閰掋€佸銆佽懕銆佸叓瑙掋€佹鐨€侀鍙?,
  n2: '鎺掗500g銆佺櫧绯?0g銆侀唻銆佺敓鎶姐€佹枡閰掋€佸銆佽挏銆佺暘鑼勯叡',
  n3: '楦¤兏鑲?00g銆佽姳鐢熺背50g銆佸共杈ｆ銆佽姳妞掋€佽懕銆佸銆佽挏銆佺敓鎶姐€侀唻銆佺硸銆佹穩绮?,
  n4: '椴堥奔1鏉?绾?00g)銆佸銆佽懕銆佽捀楸艰眽娌广€佹枡閰?,
  n5: '浜旇姳鑲?00g銆侀潚钂滆嫍銆侀儷鍘胯眴鐡ｉ叡銆佺敎闈㈤叡銆佸銆佽挏銆佹枡閰?,
  n6: '楦＄繀500g銆佸彲涔?缃愩€佺敓鎶姐€佽€佹娊銆佸銆佹枡閰?,
  n7: '鐗涜倝300g銆佸ぇ钁?鏍广€佺敓鎶姐€佹枡閰掋€佹穩绮夈€佸銆佽挏',
  n8: '鍦熻眴2涓€佸共杈ｆ銆侀唻銆佺敓鎶姐€佽懕銆佸銆佽挏銆佽姳妞?,
  n9: '鐣寗3涓€侀浮铔?涓€佽懕銆佺洂銆佺硸銆佹补',
  n10: '瑗垮叞鑺?棰椼€佽挏銆佺洂銆佹补銆佽殱娌?,
  n11: '璞嗚厫1鐩掋€佺尓鑲夋湯100g銆侀儷鍘胯眴鐡ｉ叡銆佽姳妞掔矇銆佽懕銆佸銆佽挏銆佹穩绮?,
  n12: '榛勭摐2鏍广€佽挏銆侀唻銆佺敓鎶姐€佺洂銆佺硸銆侀娌?,
  n13: '鍦熻眴2涓€佽寗瀛?涓€侀潚妞?涓€佽懕銆佸銆佽挏銆佺敓鎶姐€佺硸銆佹穩绮夈€佹补',
  n14: '绱彍銆侀浮铔?涓€佽懕銆佺洂銆侀娌?,
  n15: '鐣寗2涓€侀浮铔?涓€佽懕銆佺洂銆佹补',
  n16: '绫抽キ2纰椼€侀浮铔?涓€佽懕銆佺洂銆佹补銆佺伀鑵胯偁',
  n17: '楗哄瓙鐨€佺尓鑲夐300g銆佺櫧鑿溿€佽懕銆佸銆佺洂銆佺敓鎶姐€侀娌?,
  n18: '闈㈢矇500g銆侀叺姣?g銆佹俯姘淬€佺櫧绯?,
  n19: '闈㈡潯200g銆佽懕銆佺敓鎶姐€侀唻銆佽挏銆佽荆妞掓补',
  d1: '楦¤兏鑲?00g銆佸銆佽懕銆佹枡閰掋€佽姳妞掋€佺敓鎶?,
  d2: '椴堥奔1鏉?绾?00g)銆佸銆佽懕銆佽捀楸艰眽娌广€佹枡閰?,
  d3: '铏句粊300g銆佽挏銆佽懕銆佺洂銆佹枡閰掋€佹﹦姒勬补',
  d4: '鐗涜倝200g銆佸僵妞?涓€佹磱钁便€佺敓鎶姐€佹枡閰掋€佹穩绮夈€侀粦鑳℃',
  d5: '榛勭摐2鏍广€佽挏銆侀唻銆佺敓鎶姐€佺洂銆佺硸銆侀娌?,
  d6: '鐢熻彍2棰椼€佽挏銆佺敓鎶姐€佽殱娌广€佹补',
  d7: '骞叉湪鑰?0g銆佽挏銆侀唻銆佺敓鎶姐€佺洂銆侀娌广€佽荆妞?,
  d8: '瑗垮叞鑺?棰椼€佽挏銆佺洂銆佹补銆佽殱娌?,
  d9: '鐣寗2涓€佽眴鑵?鐩掋€佽懕銆佺洂銆佹补',
  d10: '鍐摐300g銆佹捣甯?00g銆佸銆佺洂銆佽懕',
  d11: '绱彍銆侀浮铔?涓€佽懕銆佺洂銆侀娌?,
  d12: '澶х背200g銆佸皬绫?0g銆佺硻绫?0g銆侀粦绫?0g',
  d13: '鑽為害闈?00g銆侀粍鐡溿€佽眴鑺姐€佺敓鎶姐€侀唻銆佽挏銆佽荆妞掓补',
  d14: '绱柉3涓?绾?00g)',
  d15: '鐜夌背2鏍?,
};

// ====== 鏁欑▼鏁版嵁锛坧rep=澶囪彍, cook=鐑归オ锛?======
const TUTORIALS = {
  // 鏃ュ父妯″紡
  n1: { prep: ['浜旇姳鑲夋竻娲楀共鍑€锛屽喎姘存蹈娉?0鍒嗛挓娉″幓琛€姘?,'浜旇姳鑲夊垏鎴?cm鏂瑰潡锛屽鍒囩墖锛岃懕鍒囨','澶囧ソ鍏2棰?妗傜毊1灏忔+棣欏彾2鐗?], cook: ['灏忕伀鏀惧啺绯栫倰鍑虹惀鐝€鑹茬硸鑹诧紝涓嬭倝鍧楃炕鐐掍笂鑹?,'鍔犲叆鐢熸娊銆佽€佹娊銆佹枡閰掋€佸銆佽懕銆佸叓瑙掋€佹鐨€侀鍙?,'鍔犳病杩囪倝鐨勫紑姘达紝澶х伀鐑у紑杞皬鐏倴40鍒嗛挓','澶х伀鏀舵眮鑷虫堡姹佹祿绋犵孩浜嵆鍙?], video: 'https://search.bilibili.com/all?keyword=绾㈢儳鑲?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n2: { prep: ['鎺掗鏂╂垚4cm灏忔锛屽喎姘存蹈娉?5鍒嗛挓娉″幓琛€姘存播骞?,'濮滃垏鐗囷紝钂滃垏鏈?], cook: ['璋冪硸閱嬫眮锛?鍕烘枡閰?2鍕虹敓鎶?3鍕虹硸+4鍕洪唻','閿呬腑灏戞补锛屾帓楠ㄧ厧鑷充袱闈㈤噾榛?,'鍊掑叆绯栭唻姹佸拰閫傞噺姘达紝灏忕伀鐐?0鍒嗛挓','澶х伀鏀舵眮鑷虫祿绋狅紝鎾掔櫧鑺濋夯鍑洪攨'], video: 'https://search.bilibili.com/all?keyword=绯栭唻鎺掗%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n3: { prep: ['楦¤兏鑲夋竻娲楀共鍑€鍒囧皬涓侊紝鍔犳枡閰?鍕?鐢熸娊1鍕?娣€绮?鍕鸿厡鍒?0鍒嗛挓','骞茶荆妞掑壀灏忔鍘荤苯锛屽ぇ钁卞垏娈碉紝濮滆挏鍒囨湯','鑺辩敓绫冲鐢?], cook: ['璋冪鑺★細鐢熸娊+閱?绯?娣€绮?姘存悈鍖€','灏忕伀鐐歌姳鐢熺背鑷抽噾榛勫鐢?,'搴曟补鐖嗛骞茶荆妞掋€佽姳妞掋€佽懕濮滆挏锛屼笅楦′竵澶х伀婊戠倰','鍔犲叆纰楄姟缈荤倰鍧囧寑锛屾媽鍏ヨ姳鐢熺背鍑洪攨'], video: 'https://search.bilibili.com/all?keyword=瀹繚楦′竵%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n4: { prep: ['椴堥奔鍘婚碁鍘诲唴鑴忓幓槌冩竻娲楀共鍑€锛岄奔韬袱闈㈠悇鍒掍笁鍒€','濮滀竴鍗婂垏鐗囦竴鍗婂垏涓濓紝钁变竴鍗婂垏娈典竴鍗婂垏缁嗕笣娉″喎姘村鐢?], cook: ['鐩樺簳鍨钁憋紝鏀鹃奔锛岄奔韬摵濮滆懕','姘村紑涓婇攨澶х伀钂?鍒嗛挓锛屽叧鐏櫄钂?鍒嗛挓','鍊掓帀钂稿嚭鐨勮叆姘达紝鍘绘帀琛ㄥ眰鐨勫钁?,'閾烘柊鍒囪懕濮滀笣锛屾穻钂搁奔璞夋补锛屾祰婊氱儹娌规縺鍙戦鍛?], video: 'https://search.bilibili.com/all?keyword=娓呰捀椴堥奔%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n5: { prep: ['浜旇姳鑲夋暣鍧楀喎姘翠笅閿呭姞濮滅墖3鐗?鏂欓厭2鍕虹劘姘达紝鐓嚦绛峰瓙鑳芥墡閫忥紙绾?鎴愮啛锛?,'鎹炲嚭鏅惧噳鍚庡垏钖勭墖锛岄潚钂滆嫍鍒囨枩娈碉紝濮滆挏鍒囩墖'], cook: ['涓嶆斁娌逛腑灏忕伀鐓哥倰浜旇姳鑲夎嚦鍑烘补銆佽倝鐗囧嵎鏇?,'鍔犻儷鍘胯眴鐡ｉ叡鐐掑嚭绾㈡补锛屽姞鐢滈潰閰卞钂滅倰棣?,'鏀惧叆闈掕挏鑻楀ぇ鐏炕鐐掕嚦鏂敓'], video: 'https://search.bilibili.com/all?keyword=鍥為攨鑲?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n6: { prep: ['楦＄繀娓呮礂骞插噣锛屼袱闈㈠悇鍒掍袱鍒€渚夸簬鍏ュ懗','鍐锋按涓嬮攨鍔犲鐗?鐗?鏂欓厭2鍕虹劘姘磋嚦娴搏婧㈠嚭锛屾崬鍑烘礂鍑€娌ュ共'], cook: ['鐑攨灏戞补锛岄浮缈呯厧鑷充袱闈㈤噾榛?,'鍊掑叆涓€缃愬彲涔?鐢熸娊+鑰佹娊+濮滅墖','灏忕伀鐐?5鍒嗛挓锛屽ぇ鐏敹姹佽嚦娴撶'], video: 'https://search.bilibili.com/all?keyword=鍙箰楦＄繀%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n7: { prep: ['鐗涜倝娓呮礂骞插噣閫嗙汗鍒囪杽鐗囷紝鍔犵敓鎶?鍕?鏂欓厭1鍕?娣€绮?鍕烘姄鍖€鑵屽埗15鍒嗛挓','澶ц懕鍒囨枩娈碉紝濮滆挏鍒囩墖'], cook: ['鐑攨鍑夋补澶х伀涓嬬墰鑲夋粦鐐掕嚦鍙樿壊鐩涘嚭','閿呬腑浣欐补鐖嗛濮滆挏锛屼笅澶ц懕澶х伀鐖嗙倰','鍊掑洖鐗涜倝鍔犵洂蹇€熺炕鐐掑潎鍖€'], video: 'https://search.bilibili.com/all?keyword=钁辩垎鐗涜倝%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n8: { prep: ['鍦熻眴鍘荤毊鍒囩粏涓濓紝鏀惧叆鍐锋按娣樻礂3閬嶅幓闄ゆ穩绮夋播骞?,'骞茶荆妞掑壀娈靛幓绫斤紝钁卞垏钁辫姳锛屽钂滃垏鏈?], cook: ['姘村紑鐒按10绉掓崬鍑鸿繃鍑?,'鐑攨鍑夋补鐖嗛骞茶荆妞掋€佽姳妞掋€佽挏鏈?,'澶х伀涓嬪湡璞嗕笣蹇€熺炕鐐掞紝娌块攨杈规穻鐧介唻','鍔犵洂銆佸皯璁哥敓鎶斤紝鎾掕懕鑺辩炕鐐掑嚭閿?], video: 'https://search.bilibili.com/all?keyword=閰歌荆鍦熻眴涓?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n9: { prep: ['鐣寗椤堕儴鍒掑崄瀛楋紝鏀惧叆寮€姘寸儷30绉掑幓鐨垏灏忓潡','楦¤泲鎵撴暎鍔犲皯璁哥洂锛岃懕鍒囪懕鑺?], cook: ['鐑攨澶氭补鐐掗浮铔嬭嚦鍑濆浐鐩涘嚭','閿呬腑浣欐补涓伀鐐掔暘鑼勫嚭姹ゆ眮','鍊掑洖楦¤泲鍔犵洂銆佸皯璁哥硸璋冨懗','缈荤倰鍧囧寑鎾掕懕鑺卞嚭閿?], video: 'https://search.bilibili.com/all?keyword=鐣寗鐐掕泲%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n10: { prep: ['瑗垮叞鑺辨幇鎴愬皬鏈碉紝鏀惧叆鐩愭按娴告场10鍒嗛挓鍘婚櫎灏忚櫕娌ュ共','姘寸儳寮€鍔犲皯璁哥洂鍜屾补锛岃タ鍏拌姳鐒按1鍒嗛挓鎹炲嚭杩囧噳娌ュ共','钂滃垏鏈垎鎴愪袱浠藉鐢?], cook: ['鐑攨灏戞补鐖嗛涓€鍗婅挏鏈紝涓嬭タ鍏拌姳澶х伀缈荤倰','鍔犺殱娌圭洂璋冨懗锛屽嚭閿呭墠鎾掑墿浣欒挏鏈?], video: 'https://search.bilibili.com/all?keyword=钂滆搲瑗垮叞鑺?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n11: { prep: ['瀚╄眴鑵愬垏鎴?cm鏂瑰潡锛屾斁鍏ョ洂姘存蹈娉?鍒嗛挓涓嶆槗纰庢播骞?,'鐚倝鏈濂斤紝钁卞钂滃垏鏈?], cook: ['鑲夋湯鐐掕嚦鍙樼櫧鍑烘补','鍔犻儷鍘胯眴鐡ｉ叡鐐掑嚭绾㈡补锛屽姞濮滆挏鏈姳妞掔矇','鍔犳按鐑у紑杞绘斁璞嗚厫锛屽皬鐏叜3鍒嗛挓','娣嬫按娣€绮夊嬀鑺★紝鎾掕懕鑺辫姳妞掔矇鍑洪攨'], video: 'https://search.bilibili.com/all?keyword=楹诲﹩璞嗚厫%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n12: { prep: ['榛勭摐娓呮礂骞插噣锛岀敤鍒€鑳屾媿鎵佸啀鍒囨','钂滄媿纰庢崳鎴愭偿鍔犲皯璁哥洂'], cook: ['璋冩眮锛氱敓鎶?閱?灏戣绯?棣欐补','姹佸拰钂滄偿鍊掑叆榛勭摐涓媽鍖€','闈欑疆鑵?鍒嗛挓鍏ュ懗鍗冲彲'], video: 'https://search.bilibili.com/all?keyword=鎷嶉粍鐡?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n13: { prep: ['鍦熻眴鑼勫瓙闈掓娓呮礂骞插噣','鍦熻眴鑼勫瓙鍒囨粴鍒€鍧楋紝闈掓鍒囪彵褰㈠潡','鑼勫瓙鎾掔洂鑵屽埗10鍒嗛挓鎸ゅ幓姘村垎锛堝噺灏戝惛娌癸級','钁卞钂滃垏鏈?], cook: ['鍒嗗埆鐐稿湡璞嗐€佽寗瀛愯嚦琛ㄩ潰閲戦粍','搴曟补鐖嗛钁卞钂?,'鍊掑叆鎵€鏈夋潗鏂欏拰閰辨眮澶х伀缈荤倰鍑洪攨'], video: 'https://search.bilibili.com/all?keyword=鍦颁笁椴?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n14: { prep: ['绱彍鐢ㄦ俯姘存场寮€娌ュ共','楦¤泲鎵撴暎锛岃懕鍒囪懕鑺?], cook: ['姘寸儳寮€鏀剧传鑿滅叜1鍒嗛挓','鍏冲皬鐏部绛峰瓙娣嬪叆铔嬫恫鎴愯泲鑺?,'鍔犵洂銆侀娌广€佽懕鑺卞嚭閿?], video: 'https://search.bilibili.com/all?keyword=绱彍铔嬭姳姹?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n15: { prep: ['鐣寗椤堕儴鍒掑崄瀛楋紝鏀惧叆寮€姘寸儷30绉掑幓鐨垏灏忓潡','楦¤泲鎵撴暎锛岃懕鍒囪懕鑺?], cook: ['鐑攨灏戞补鐐掔暘鑼勫嚭姹ゆ眮','鍔犳竻姘寸儳寮€鐓?鍒嗛挓','鍏冲皬鐏穻鍏ヨ泲娑叉垚铔嬭姳','鍔犵洂銆佸皯璁哥硸銆佽懕鑺卞嚭閿?], video: 'https://search.bilibili.com/all?keyword=鐣寗铔嬫堡%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n16: { prep: ['闅斿绫抽キ鍙栧嚭鎵撴暎澶囩敤','楦¤泲鎵撴暎锛岃懕鍒囪懕鑺憋紝鐏吙鑲犲垏灏忎竵'], cook: ['鐑攨澶氭补蹇€熺倰鏁ｉ浮铔嬬洓鍑?,'閿呬腑搴曟补澶х伀鐐掔背楗嚦绮掔矑鍒嗘槑','鍊掑洖楦¤泲纰庡姞鐩愮炕鐐掑潎鍖€','鎾掕懕鑺辩炕鐐掑嚭閿?], video: 'https://search.bilibili.com/all?keyword=铔嬬倰楗?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n17: { prep: ['闈㈢矇500g鍔犳俯姘寸害250ml鎻夋垚鍏夋粦闈㈠洟','鐩栦繚椴滆啘閱掗潰30鍒嗛挓','鐧借彍鍓佺鍔犲皯璁哥洂鑵?0鍒嗛挓鎸ゅ幓姘村垎','鐚倝棣呭姞钁卞鏈?鐩?鐢熸娊+棣欐补+灏戣姘达紝椤烘椂閽堟悈鎵撲笂鍔诧紝鎷屽叆鐧借彍棣?], cook: ['闈㈠洟鎼撴潯鍒囧墏鎿€鐨紝鍖呭叆棣呮枡鎹忕揣','姘村紑涓嬮ズ瀛愶紝娴捣鍐嶇叜3鍒嗛挓鐐逛袱娆″噳姘村嚭閿?], video: 'https://search.bilibili.com/all?keyword=楗哄瓙%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n18: { prep: ['娓╂按250ml+閰垫瘝5g+鐧界硸10g鍖栧紑闈欑疆5鍒嗛挓鑷宠捣娉?,'闈㈢矇500g鍔犻叺姣嶆按鎻夋垚鍏夋粦闈㈠洟','鐩栦繚椴滆啘娓╂殩澶勫彂閰佃嚦涓ゅ€嶅ぇ锛堢害1灏忔椂锛?,'鎺掓皵鎻夊寑鍒嗗墏鎻夊渾锛屼簩娆￠啋鍙?5鍒嗛挓'], cook: ['鍐锋按涓婇攨澶х伀钂?5鍒嗛挓锛屽叧鐏剸5鍒嗛挓鍑洪攨'], video: 'https://search.bilibili.com/all?keyword=棣掑ご%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  n19: { prep: ['钁卞垏钁辫姳锛岃挏鎷嶆墎鍒囨湯','澶囧ソ鐑潚鑿溿€佺厧铔嬫垨鑲夋搏绛夋祰澶磋彍'], cook: ['閿呬腑瓒抽噺姘寸儳寮€涓嬮潰鏉?,'璋冪搴曪細鐢熸娊+閱?钂滄湯+杈ｆ娌?钁辫姳','闈㈡潯鐓嚦鏃犵櫧鑺崬鍑鸿繃鍑夋按鏇村姴閬?,'鎹炲叆纰椾腑涓庤皟鏂欐媽鍖€鍔犳祰澶?], video: 'https://search.bilibili.com/all?keyword=闈㈡潯%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  // 鍑忚剛妯″紡
  d1: { prep: ['楦¤兏鑲夋竻娲楀共鍑€锛屾í鍒囧帤鐗囩敤鍒€鑳屾媿鏉?,'鍔犵洂+榛戣儭妞?鏂欓厭鑵屽埗10鍒嗛挓','濮滃垏鐗囷紝钁卞垏娈?], cook: ['姘寸儳寮€鍔犲鐗囪懕娈垫枡閰?,'杞渶灏忕伀鏀惧叆楦¤兏鑲夌叜2-3鍒嗛挓','鎹炲嚭绔嬪嵆鏀惧叆鍐版按娴告场5鍒嗛挓鎵嬫挄鎼厤铇告枡'], video: 'https://search.bilibili.com/all?keyword=姘寸叜楦¤兏鑲?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d2: { prep: ['椴堥奔鍘婚碁鍘诲唴鑴忓幓槌冩竻娲楀共鍑€锛岄奔韬袱闈㈠悇鍒掍笁鍒€','濮滀竴鍗婂垏鐗囦竴鍗婂垏涓濓紝钁变竴鍗婂垏娈典竴鍗婂垏缁嗕笣娉″喎姘村鐢?], cook: ['鐩樺簳鍨钁憋紝鏀鹃奔锛岄奔韬摵濮滆懕','姘村紑涓婇攨澶х伀钂?鍒嗛挓锛屽叧鐏櫄钂?鍒嗛挓','鍊掓帀钂稿嚭鐨勮叆姘达紝鍘绘帀琛ㄥ眰鐨勫钁?,'閾烘柊鍒囪懕濮滀笣锛屾穻钂搁奔璞夋补锛屾祰婊氱儹娌规縺鍙戦鍛?], video: 'https://search.bilibili.com/all?keyword=娓呰捀椴堥奔%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d3: { prep: ['铏句粊鍘昏櫨绾挎竻娲楀共鍑€娌ュ共锛屽姞鏂欓厭+鐩?榛戣儭妞掕厡鍒?0鍒嗛挓','钂滃垏鏈垎鎴愪袱浠斤紝钁卞垏钁辫姳'], cook: ['鐑攨鍠峰皯璁告﹦姒勬补鐖嗛涓€鍗婅挏鏈?,'澶х伀涓嬭櫨浠佸揩閫熸粦鐐掕嚦鍙樿壊鍗锋洸','鍔犲叆鍓╀笅涓€鍗婅挏鏈€佸皯璁哥敓鎶界炕鐐掓拻钁辫姳'], video: 'https://search.bilibili.com/all?keyword=钂滆搲铏句粊%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d4: { prep: ['鐗涜倝娓呮礂骞插噣閫嗙汗鍒囪杽鐗囷紝鍔犵敓鎶?铓濇补+榛戣儭妞?娣€绮夋姄鍖€鑵屽埗15鍒嗛挓','褰╂鍘荤苯鍒囪彵褰㈠潡锛屾磱钁卞垏鍧?], cook: ['鐑攨灏戞补澶х伀涓嬬墰鑲夋粦鐐掕嚦鍙樿壊鐩涘嚭','琛ュ皯璁告补涓嬪僵妞掓磱钁辩倰鑷虫柇鐢?,'鍊掑洖鐗涜倝鍔犵洂澶х伀缈荤倰鍧囧寑'], video: 'https://search.bilibili.com/all?keyword=褰╂鐐掔墰鑲?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d5: { prep: ['榛勭摐娓呮礂骞插噣锛岀敤鍒€鑳屾媿鎵佸啀鍒囨','钂滄媿纰庢崳鎴愭偿鍔犲皯璁哥洂'], cook: ['璋冩眮锛氱敓鎶?閱?灏戣绯?棣欐补','姹佸拰钂滄偿鍊掑叆榛勭摐涓媽鍖€','闈欑疆鑵?鍒嗛挓鍏ュ懗鍗冲彲'], video: 'https://search.bilibili.com/all?keyword=鍑夋媽榛勭摐%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d6: { prep: ['鐢熻彍鎺板紑娓呮礂骞插噣娌ュ共','钂滃垏鏈?], cook: ['姘村紑鍔犵洂鍜屾补锛岀敓鑿滅儷10-20绉掑彉杞崬鍑?,'钂滄湯鐖嗛鍔犵敓鎶借殱娌瑰皯璁告按鐓紑','娣嬫按娣€绮夊嬀钖勮姟娣嬪湪鐢熻彍涓?], video: 'https://search.bilibili.com/all?keyword=鐧界伡鐢熻彍%20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d7: { prep: ['骞叉湪鑰虫斁鍏ュ喎姘存场鍙?-2灏忔椂鑷冲畬鍏ㄨ垝灞曪紝娓呮礂骞插噣鍘昏拏娌ュ共','钂滃垏鏈紝灏忕背杈ｅ垏鍦堬紝棣欒彍鍒囨'], cook: ['姘村紑鐒按3-5鍒嗛挓鎹炲嚭杩囧噳娌ュ共','璋冩眮锛氱敓鎶?閱?灏戣绯?鐩?棣欐补','鏈ㄨ€冲姞钂滄湯灏忕背杈ｉ鑿滄穻鏂欐眮鎷屽寑'], video: 'https://search.bilibili.com/all?keyword=鍑夋媽鏈ㄨ€?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d8: { prep: ['瑗垮叞鑺辨幇鎴愬皬鏈碉紝鏀惧叆鐩愭按娴告场10鍒嗛挓鍘婚櫎灏忚櫕娌ュ共','姘寸儳寮€鍔犲皯璁哥洂鍜屾补锛岃タ鍏拌姳鐒按1鍒嗛挓鎹炲嚭杩囧噳娌ュ共','钂滃垏鏈垎鎴愪袱浠藉鐢?], cook: ['鐑攨灏戞补鐖嗛涓€鍗婅挏鏈紝涓嬭タ鍏拌姳澶х伀缈荤倰','鍔犺殱娌圭洂璋冨懗锛屽嚭閿呭墠鎾掑墿浣欒挏鏈?], video: 'https://search.bilibili.com/all?keyword=钂滆搲瑗垮叞鑺?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d9: { prep: ['鐣寗椤堕儴鍒掑崄瀛楋紝鏀惧叆寮€姘寸儷30绉掑幓鐨垏灏忓潡','瀚╄眴鑵愬垏灏忓潡锛岃懕鍒囪懕鑺?], cook: ['鐑攨鍠峰皯璁告补鐐掔暘鑼勫嚭姹ゆ眮','鍔犳竻姘寸儳寮€','鏀惧叆璞嗚厫鍧楃叜3-5鍒嗛挓','鍔犵洂鐧借儭妞掔矇璋冨懗鎾掕懕鑺?], video: 'https://search.bilibili.com/all?keyword=鐣寗璞嗚厫姹?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d10: { prep: ['娴峰甫缁撴彁鍓嶆斁鍏ュ喎姘存场鍙戞礂鍑€','鍐摐鍘荤毊鍘荤苯鍒囪杽鐗?,'濮滃垏鐗?], cook: ['閿呬腑灏戞补鐖嗛濮滅墖涓嬪啲鐡滅暐鐐?,'鍔犳按鐑у紑鏀炬捣甯︿腑灏忕伀鐐?5鍒嗛挓','鍔犵洂鐧借儭妞掔矇璋冨懗鎾掕懕鑺?], video: 'https://search.bilibili.com/all?keyword=鍐摐娴峰甫姹?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d11: { prep: ['绱彍鐢ㄦ俯姘存场寮€娌ュ共','楦¤泲鎵撴暎锛岃懕鍒囪懕鑺?], cook: ['姘寸儳寮€鏀剧传鑿滅叜1鍒嗛挓','鍏冲皬鐏部绛峰瓙娣嬪叆铔嬫恫鎴愯泲鑺?,'鍔犵洂銆侀娌广€佽懕鑺卞嚭閿?], video: 'https://search.bilibili.com/all?keyword=绱彍铔嬭姳姹?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d12: { prep: ['澶х背绯欑背灏忕背榛戠背鎸?:1:1:0.5閰嶆瘮娣峰悎娣樻礂','鍔犳按娴告场2灏忔椂浠ヤ笂锛堣鏉傜伯鍏呭垎鍚告按锛?], cook: ['鍊掑叆鐢甸キ鐓叉按閲忕暐澶氫簬骞虫椂','鎸夋潅绮キ妯″紡鐓啛','鐒?鍒嗛挓鍚庣敤楗嫼缈绘澗'], video: 'https://search.bilibili.com/all?keyword=鏉傜伯楗?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d13: { prep: ['榛勭摐娓呮礂骞插噣鍒囦笣锛岃眴鑺芥竻娲楀共鍑€娌ュ共','钂滄媿鎵佸垏鏈?], cook: ['姘村紑涓嬭崬楹﹂潰鐓?-8鍒嗛挓鑷虫棤纭姱鎹炲嚭杩囧噳','璞嗚娊鐒按','璋冩眮锛氱敓鎶?閱?钂滄湯+灏戣杈ｆ娌?,'闈㈠姞钄彍璋冩枡姹佹媽鍖€'], video: 'https://search.bilibili.com/all?keyword=鑽為害闈?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d14: { prep: ['绱柉娓呮礂骞插噣淇濈暀琛ㄧ毊'], cook: ['鏀惧叆钂搁攨姘村紑澶х伀钂?0-30鍒嗛挓','绛峰瓙鑳借交鏉炬墡閫忓嵆鍙彇鍑虹◢鍑夊墺鐨鐢?], video: 'https://search.bilibili.com/all?keyword=钂哥传钖?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
  d15: { prep: ['鐜夌背鍓ュ幓澶栧眰鑰佺毊锛屼繚鐣欏唴灞傚鐨拰鐜夌背椤?], cook: ['閿呬腑鍔犳按鏀惧叆鐜夌背','姘村紑鐓?5-20鍒嗛挓','鍙栧嚭鍓ュ幓澶栫毊鍜岄』椤?], video: 'https://search.bilibili.com/all?keyword=鐓帀绫?20瀹跺父鍋氭硶&order=click&duration=0&tids_1=0' },
};

// ====== 钀ュ吇鏁版嵁锛堝噺鑴傛ā寮忥紝姣忎唤浼扮畻鍊硷級 ======
const NUTRITION = {
  d1:  { kcal: 400, protein: 70 },  // 姘寸叜楦¤兏鑲?300g
  d2:  { kcal: 450, protein: 90 },  // 娓呰捀椴堥奔 500g
  d3:  { kcal: 300, protein: 60 },  // 钂滆搲铏句粊 300g
  d4:  { kcal: 350, protein: 40 },  // 褰╂鐐掔墰鑲?200g
  d5:  { kcal: 60,  protein: 3  },  // 鍑夋媽榛勭摐
  d6:  { kcal: 50,  protein: 3  },  // 鐧界伡鐢熻彍
  d7:  { kcal: 120, protein: 5  },  // 鍑夋媽鏈ㄨ€?  d8:  { kcal: 120, protein: 8  },  // 钂滆搲瑗垮叞鑺?  d9:  { kcal: 200, protein: 15 },  // 鐣寗璞嗚厫姹?  d10: { kcal: 80,  protein: 3  },  // 鍐摐娴峰甫姹?  d11: { kcal: 150, protein: 12 },  // 绱彍铔嬭姳姹?  d12: { kcal: 500, protein: 12 },  // 鏉傜伯楗?  d13: { kcal: 380, protein: 14 },  // 鑽為害闈?  d14: { kcal: 400, protein: 7  },  // 钂哥传钖?500g
  d15: { kcal: 280, protein: 8  },  // 鐜夌背 2鏍?};

// ====== 鏃ュ父妯″紡鑿滃崟 ======
const MENU_NORMAL = [
  { id: 'n1',  name: '绾㈢儳鑲?,   gradient: 'linear-gradient(135deg, #8B3A3A, #C0392B)', emoji: '馃崠', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hong-Shao-Rou_%28braised_pork%29.jpg/640px-Hong-Shao-Rou_%28braised_pork%29.jpg', cat: 'meat', health: { diabetes: 'avoid', hypertension: 'avoid' } },
  { id: 'n2',  name: '绯栭唻鎺掗', gradient: 'linear-gradient(135deg, #D4702A, #E67E22)', emoji: '馃Υ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Sweet_and_sour_pork_ribs.jpg/640px-Sweet_and_sour_pork_ribs.jpg', cat: 'meat', health: { diabetes: 'avoid', hypertension: 'limit' } },
  { id: 'n3',  name: '瀹繚楦′竵', gradient: 'linear-gradient(135deg, #D4A017, #F0C040)', emoji: '馃崡', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Kung_Pao_Chicken_-_Chinese_dishes.jpg/640px-Kung_Pao_Chicken_-_Chinese_dishes.jpg', cat: 'meat', health: { diabetes: 'limit', hypertension: 'limit' } },
  { id: 'n4',  name: '娓呰捀椴堥奔', gradient: 'linear-gradient(135deg, #5D8A7F, #7EC8A0)', emoji: '馃悷', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Steamed_fish_with_scallions_and_ginger.jpg/640px-Steamed_fish_with_scallions_and_ginger.jpg', cat: 'meat', health: {} },
  { id: 'n5',  name: '鍥為攨鑲?,   gradient: 'linear-gradient(135deg, #A04030, #D35450)', emoji: '馃ォ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Hui_Guo_Rou_%28Twice_Cooked_Pork%29.jpg/640px-Hui_Guo_Rou_%28Twice_Cooked_Pork%29.jpg', cat: 'meat', health: { diabetes: 'limit', hypertension: 'avoid' } },
  { id: 'n6',  name: '鍙箰楦＄繀', gradient: 'linear-gradient(135deg, #7B4B3A, #A0523C)', emoji: '馃崡', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Cola_Chicken_Wings.jpg/640px-Cola_Chicken_Wings.jpg', cat: 'meat', health: { diabetes: 'avoid' } },
  { id: 'n7',  name: '钁辩垎鐗涜倝', gradient: 'linear-gradient(135deg, #6B3A3A, #8B4513)', emoji: '馃ォ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Scallion_beef_%281%29.jpg/640px-Scallion_beef_%281%29.jpg', cat: 'meat', health: { hypertension: 'limit' } },
  { id: 'n8',  name: '閰歌荆鍦熻眴涓?, gradient: 'linear-gradient(135deg, #D4C08C, #E8D5A3)', emoji: '馃', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/%E9%85%B8%E6%8B%8C%E6%B4%8B%E8%91%B1%E5%9C%9F%E8%B1%86%E4%B8%9D_2014-05-02_%281%29.JPG/640px-%E9%85%B8%E6%8B%8C%E6%B4%8B%E8%91%B1%E5%9C%9F%E8%B1%86%E4%B8%9D_2014-05-02_%281%29.JPG', cat: 'veggie', health: { diabetes: 'limit', hypertension: 'avoid' } },
  { id: 'n9',  name: '鐣寗鐐掕泲',   gradient: 'linear-gradient(135deg, #E8484A, #F4C040)', emoji: '馃崊', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Stir-fried_tomato_and_scrambled_eggs.jpg/640px-Stir-fried_tomato_and_scrambled_eggs.jpg', cat: 'veggie', health: {} },
  { id: 'n10', name: '钂滆搲瑗垮叞鑺?, gradient: 'linear-gradient(135deg, #3A8C5C, #27AE60)', emoji: '馃ウ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Garlic_Broccoli_%281%29.jpg/640px-Garlic_Broccoli_%281%29.jpg', cat: 'veggie', health: {} },
  { id: 'n11', name: '楹诲﹩璞嗚厫',   gradient: 'linear-gradient(135deg, #C0392B, #E06040)', emoji: '馃', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Mapo_tofu_served_in_a_restaurant_in_Niigata%2C_Niigata.jpg/640px-Mapo_tofu_served_in_a_restaurant_in_Niigata%2C_Niigata.jpg', cat: 'veggie', health: { diabetes: 'limit', hypertension: 'avoid' } },
  { id: 'n12', name: '鎷嶉粍鐡?,     gradient: 'linear-gradient(135deg, #6FB574, #90D890)', emoji: '馃', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Smashed_cucumber_salad.jpg/640px-Smashed_cucumber_salad.jpg', cat: 'veggie', health: {} },
  { id: 'n13', name: '鍦颁笁椴?,     gradient: 'linear-gradient(135deg, #7B5EA7, #9B7EC8)', emoji: '馃崋', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Di_san_xian.jpg/640px-Di_san_xian.jpg', cat: 'veggie', health: { diabetes: 'limit', hypertension: 'limit' } },
  { id: 'n14', name: '绱彍铔嬭姳姹?, gradient: 'linear-gradient(135deg, #D4B860, #E8D080)', emoji: '馃嵅', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Egg_drop_soup_%281%29.jpg/640px-Egg_drop_soup_%281%29.jpg', cat: 'soup', health: {} },
  { id: 'n15', name: '鐣寗铔嬫堡',   gradient: 'linear-gradient(135deg, #E87A7A, #F4A0A0)', emoji: '馃崊', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Egg_drop_soup_%281%29.jpg/640px-Egg_drop_soup_%281%29.jpg', cat: 'soup', health: {} },
  { id: 'n16', name: '铔嬬倰楗?,     gradient: 'linear-gradient(135deg, #E8C840, #F0D860)', emoji: '馃崥', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Fried_rice_with_egg_and_scallion.jpg/640px-Fried_rice_with_egg_and_scallion.jpg', cat: 'staple', health: { diabetes: 'avoid' } },
  { id: 'n17', name: '楗哄瓙',       gradient: 'linear-gradient(135deg, #E8DCC8, #F5EDE0)', emoji: '馃', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Jiaozi_%28Dumplings%29.jpg/640px-Jiaozi_%28Dumplings%29.jpg', cat: 'staple', health: { diabetes: 'limit' } },
  { id: 'n18', name: '棣掑ご',       gradient: 'linear-gradient(135deg, #F0E8D8, #F8F0E8)', emoji: '馃珦', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mantou-A.jpg/640px-Mantou-A.jpg', cat: 'staple', health: { diabetes: 'limit' } },
  { id: 'n19', name: '闈㈡潯',       gradient: 'linear-gradient(135deg, #E8D5A0, #F0E0B0)', emoji: '馃崪', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Noodles_from_Lanzhou_hand-pulled_noodle_restaurant.jpg/640px-Noodles_from_Lanzhou_hand-pulled_noodle_restaurant.jpg', cat: 'staple', health: { diabetes: 'avoid' } },
];

// ====== 鍑忚剛妯″紡鑿滃崟 ======
const MENU_DIET = [
  { id: 'd1',  name: '姘寸叜楦¤兏鑲?, gradient: 'linear-gradient(135deg, #D4A080, #E8C8A0)', emoji: '馃崡', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Hong-Shao-Rou_%28braised_pork%29.jpg/640px-Hong-Shao-Rou_%28braised_pork%29.jpg', cat: 'meat', health: {} },
  { id: 'd2',  name: '娓呰捀椴堥奔',   gradient: 'linear-gradient(135deg, #5D8A7F, #7EC8A0)', emoji: '馃悷', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Steamed_fish_with_scallions_and_ginger.jpg/640px-Steamed_fish_with_scallions_and_ginger.jpg', cat: 'meat', health: {} },
  { id: 'd3',  name: '钂滆搲铏句粊',   gradient: 'linear-gradient(135deg, #E8947A, #F4B8A0)', emoji: '馃', img: '', cat: 'meat', health: {} },
  { id: 'd4',  name: '褰╂鐐掔墰鑲?, gradient: 'linear-gradient(135deg, #C04040, #D46060)', emoji: '馃ォ', img: '', cat: 'meat', health: {} },
  { id: 'd5',  name: '鍑夋媽榛勭摐',   gradient: 'linear-gradient(135deg, #6FB574, #90D890)', emoji: '馃', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Smashed_cucumber_salad.jpg/640px-Smashed_cucumber_salad.jpg', cat: 'veggie', health: {} },
  { id: 'd6',  name: '鐧界伡鐢熻彍',   gradient: 'linear-gradient(135deg, #5AAC60, #80D080)', emoji: '馃ガ', img: '', cat: 'veggie', health: {} },
  { id: 'd7',  name: '鍑夋媽鏈ㄨ€?,   gradient: 'linear-gradient(135deg, #5A4A3A, #7A6A5A)', emoji: '馃崉', img: '', cat: 'veggie', health: {} },
  { id: 'd8',  name: '钂滆搲瑗垮叞鑺?, gradient: 'linear-gradient(135deg, #3A8C5C, #27AE60)', emoji: '馃ウ', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Garlic_Broccoli_%281%29.jpg/640px-Garlic_Broccoli_%281%29.jpg', cat: 'veggie', health: {} },
  { id: 'd9',  name: '鐣寗璞嗚厫姹?, gradient: 'linear-gradient(135deg, #E87870, #F4A898)', emoji: '馃崊', img: '', cat: 'soup', health: {} },
  { id: 'd10', name: '鍐摐娴峰甫姹?, gradient: 'linear-gradient(135deg, #88B898, #A8D8B8)', emoji: '馃崍', img: '', cat: 'soup', health: {} },
  { id: 'd11', name: '绱彍铔嬭姳姹?, gradient: 'linear-gradient(135deg, #D4B860, #E8D080)', emoji: '馃嵅', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Egg_drop_soup_%281%29.jpg/640px-Egg_drop_soup_%281%29.jpg', cat: 'soup', health: {} },
  { id: 'd12', name: '鏉傜伯楗?,     gradient: 'linear-gradient(135deg, #B0A080, #D0C0A0)', emoji: '馃崥', img: '', cat: 'staple', health: { diabetes: 'limit' } },
  { id: 'd13', name: '鑽為害闈?,     gradient: 'linear-gradient(135deg, #A09080, #C0B0A0)', emoji: '馃崪', img: '', cat: 'staple', health: {} },
  { id: 'd14', name: '钂哥传钖?,     gradient: 'linear-gradient(135deg, #9B6EB0, #B890D0)', emoji: '馃崰', img: '', cat: 'staple', health: { diabetes: 'limit' } },
  { id: 'd15', name: '鐜夌背',       gradient: 'linear-gradient(135deg, #E8C840, #F0D860)', emoji: '馃尳', img: '', cat: 'staple', health: { diabetes: 'limit' } },
];

// ====== 鍏ㄥ眬鐘舵€?======
let currentRole = 'customer';
let currentMode = 'normal';
let cartNormal = {};
let cartDiet = {};
let cartNotes = {};       // { dishId: note } 鍗曢亾鑿滃娉?let dishNoteEditing = {}; // 鏆傚瓨缂栬緫涓殑澶囨敞
let healthFilters = { diabetes: false, hypertension: false };
let savedHealthFilters = null; // 妯″紡鍒囨崲鏃舵殏瀛樺仴搴锋彁閱掔姸鎬?const STORAGE_KEY = 'family_orders';
const PROFILES_STORAGE_KEY = 'diet_profiles';
let dietProfiles = [];       // [{ id, name, gender, age, height, weight, goal }]
let dietProfile = null;      // 鍏煎鏃у瓧娈碉紝鎸囧悜褰撳墠銆岄€変腑銆嶆垨绗竴涓?profile
let selectedDiners = [];     // 鐢ㄩ浜洪€変腑鐨?profile id 鍒楄〃
let recoHistory = new Set(); // 宸叉帹鑽愯繃鐨勫椁愮粍鍚堥敭
let mealCount = 3;           // 涓€澶╁悆鍑犻】锛?/3/4/5
let currentMealSlot = 0;     // 褰撳墠灞曠ず鍝竴椁愮殑鎺ㄨ崘锛?-based锛岄粯璁ゅ崍椁?0锛?let cartPortions = {};       // { dishId: 's'|'m'|'l' } 浠介噺閫夋嫨
let pendingOrderData = null; // 寰呮彁浜よ鍗曠殑鏆傚瓨鏁版嵁
let dailyMealType = 'lunch';  // 鏃ュ父妯″紡褰撳墠椁愭

// ====== 浜烘暟缂╂斁 ======
function getDinerScale() {
  const n = selectedDiners.length || 1;
  if (n <= 1) return { general: 1.0, staple: 1.0, count: 1 };
  if (n === 2) return { general: 1.8, staple: 2.0, count: 2 };
  return { general: 2.5, staple: 3.0, count: n };
}
function isStapleDish(id) {
  const dish = MENU_DIET.find(d => d.id === id);
  return dish && dish.cat === 'staple';
}

// ====== 椁愭鍒嗛厤鏁版嵁 ======
const MEAL_DISTRIBUTION = {
  2: [{name:'鍗堥', ratio:0.50}, {name:'鏅氶', ratio:0.50}],
  3: [{name:'鍗堥', ratio:0.40}, {name:'鍔犻', ratio:0.20}, {name:'鏅氶', ratio:0.40}],
  4: [{name:'鍗堥', ratio:0.30}, {name:'涓嬪崍鍔犻', ratio:0.15}, {name:'鏅氶', ratio:0.35}, {name:'鏅氬姞椁?, ratio:0.20}],
  5: [{name:'涓婂崍鍔犻', ratio:0.10}, {name:'鍗堥', ratio:0.25}, {name:'涓嬪崍鍔犻', ratio:0.15}, {name:'鏅氶', ratio:0.30}, {name:'鏅氬姞椁?, ratio:0.20}],
};

// 浠介噺鍥犲瓙
const PORTION_FACTORS = { s: 0.7, m: 1.0, l: 1.3 };
const PORTION_LABELS = { s: '灏忎唤', m: '涓唤', l: '澶т唤' };
// 浠介噺鍙鍖栨弿杩帮紙鎸夎彍鍝佺被鍨?脳 浠介噺锛?const PORTION_VIZ = {
  meat:   { s:'鈮?鍗婄洏(绾?40g)',     m:'鈮?1鐩?绾?00g)',   l:'鈮?1鐩樺崐(绾?60g)' },
  veggie: { s:'鈮?灏忕(绾?40g)',     m:'鈮?1纰?绾?00g)',   l:'鈮?澶х(绾?60g)' },
  soup:   { s:'鈮?灏忕(绾?10ml)',    m:'鈮?1纰?绾?00ml)',  l:'鈮?澶х(绾?90ml)' },
  staple: { s:'鈮?鍗婄(绾?40g)',     m:'鈮?1纰?绾?00g)',   l:'鈮?1纰楀崐(绾?60g)' },
};
function getVizText(id, portion) {
  const dish = MENU_DIET.find(d => d.id === id);
  const cat = dish ? dish.cat : 'meat';
  return (PORTION_VIZ[cat] || PORTION_VIZ.meat)[portion] || '';
}

function getPortionMultiplier(portion) { return PORTION_FACTORS[portion] || 1.0; }

function getMealSlots() { return MEAL_DISTRIBUTION[mealCount] || MEAL_DISTRIBUTION[3]; }

function getMealTarget(slotIndex) {
  const target = getAvgDietTarget();
  if (!target) return null;
  const slots = getMealSlots();
  if (slotIndex >= slots.length) return null;
  const ratio = slots[slotIndex].ratio;
  return {
    kcal: Math.round(target.targetKcal * ratio),
    protein: Math.round(target.targetProtein * ratio),
  };
}

// ====== 澶氳鑹叉。妗堢鐞?======
function loadDietProfiles() {
  try {
    dietProfiles = JSON.parse(localStorage.getItem(PROFILES_STORAGE_KEY));
  } catch(e) { dietProfiles = null; }
  if (!dietProfiles || !Array.isArray(dietProfiles) || dietProfiles.length === 0) {
    dietProfiles = [ { id: 'default', name: '鎴?, gender: 'male', age: 25, height: 170, weight: 65, goal: 'cut' } ];
    saveDietProfiles();
  }
  dietProfile = dietProfiles[0];
  syncOldProfile();
}

function syncOldProfile() {
  // 杩佺Щ鏃х増鍗曟。妗堟暟鎹?  try {
    const old = JSON.parse(localStorage.getItem('diet_profile'));
    if (old) { dietProfiles[0] = Object.assign({ id: 'default', name: '鎴? }, old, { id: 'default', name: '鎴? }); saveDietProfiles(); localStorage.removeItem('diet_profile'); }
  } catch(e) {}
}

function saveDietProfiles() {
  localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(dietProfiles));
  dietProfile = dietProfiles.length > 0 ? dietProfiles[0] : null;
}

function renderProfileList() {
  const el = document.getElementById('profileList');
  let html = dietProfiles.map(p => {
    const bmi = calcBMI(p.height, p.weight);
    const goalLabel = { cut: '鍑忚剛', bulk: '澧炶倢', maintain: '缁存寔' }[p.goal];
    return `
      <div class="profile-card">
        <div class="pc-name">${escapeHtml(p.name)}</div>
        <div class="pc-info">BMI ${bmi.toFixed(1)} 路 ${p.weight}kg 路 ${p.height}cm</div>
        <span class="pc-goal ${p.goal}">${goalLabel}</span>
        <div class="pc-bar">
          <button class="pc-bar-btn pc-bar-edit" onclick="editProfile('${p.id}')">缂栬緫</button>
          <button class="pc-bar-btn pc-bar-del" onclick="deleteProfile('${p.id}')">鍒犻櫎</button>
        </div>
      </div>`;
  }).join('');
  html += '<div class="profile-card pc-add" onclick="addProfile()" title="娣诲姞瑙掕壊">+</div>';
  el.innerHTML = html;
}

function openProfileModal(id, title) {
  document.getElementById('pmTitle').textContent = title;
  document.getElementById('pmId').value = id || '';
  if (id) {
    const p = dietProfiles.find(x => x.id === id);
    if (p) {
      document.getElementById('pmName').value = p.name;
      document.getElementById('pmGender').value = p.gender;
      document.getElementById('pmAge').value = p.age;
      document.getElementById('pmHeight').value = p.height;
      document.getElementById('pmWeight').value = p.weight;
      document.getElementById('pmGoal').value = p.goal;
    }
  } else {
    document.getElementById('pmName').value = '';
    document.getElementById('pmGender').value = 'male';
    document.getElementById('pmAge').value = '';
    document.getElementById('pmHeight').value = '';
    document.getElementById('pmWeight').value = '';
    document.getElementById('pmGoal').value = 'cut';
  }
  document.getElementById('profileModal').classList.add('show');
}

function closeProfileModal() {
  document.getElementById('profileModal').classList.remove('show');
}

function addProfile() { openProfileModal(null, '娣诲姞瑙掕壊'); }
function editProfile(id) { openProfileModal(id, '缂栬緫瑙掕壊'); }

function deleteProfile(id) {
  if (dietProfiles.length <= 1) { showToast('鑷冲皯淇濈暀涓€涓鑹?); return; }
  if (!confirm('纭畾鍒犻櫎杩欎釜瑙掕壊鍚楋紵璇ヨ鑹茬殑鐢ㄩ浜鸿褰曞皢琚竻闄ゃ€?)) return;

  // 鏍稿績鎿嶄綔锛氳繃婊?+ 淇濆瓨鍘熷瓙鎵ц
  try {
    dietProfiles = dietProfiles.filter(p => String(p.id) !== String(id));
    if (dietProfiles.length === 0) {
      dietProfiles = [{ id: 'default', name: '鎴?, gender: 'male', age: 25, height: 170, weight: 65, goal: 'cut' }];
    }
    saveDietProfiles();
    showToast('宸插垹闄?);
  } catch(e) {
    showToast('鎿嶄綔澶辫触锛岃閲嶈瘯');
    return;
  }

  // 绗竴浼樺厛绾э細寮哄埗鍒锋柊鏍稿績 UI锛坮equestAnimationFrame 纭繚 DOM 鏇存柊锛?  updateDinerSelect();
  requestAnimationFrame(() => {
    renderProfileList();
    renderDinerSelectBar();
  });

  // 娆¤娓叉煋锛氱嫭绔?try-catch锛屽け璐ヤ笉褰卞搷鏍稿績 UI
  try {
    if (currentMode === 'diet') {
      showDietResult();
      renderRecommendations();
    }
    updateCartBar();
  } catch(e) {}
}

function saveProfileEdit() {
  const name = document.getElementById('pmName').value.trim();
  const gender = document.getElementById('pmGender').value;
  const age = parseInt(document.getElementById('pmAge').value) || 0;
  const height = parseFloat(document.getElementById('pmHeight').value) || 0;
  const weight = parseFloat(document.getElementById('pmWeight').value) || 0;
  const goal = document.getElementById('pmGoal').value;
  const id = document.getElementById('pmId').value;

  if (!name) { showToast('璇峰～鍐欏鍚?); return; }
  if (!age || !height || !weight) { showToast('璇峰～鍐欏畬鏁寸殑韬綋鏁版嵁'); return; }

  const profile = { id: id || ('p_' + Date.now()), name, gender, age, height, weight, goal };
  if (id) {
    const idx = dietProfiles.findIndex(p => p.id === id);
    if (idx >= 0) dietProfiles[idx] = profile;
  } else {
    dietProfiles.push(profile);
  }
  saveDietProfiles();
  closeProfileModal();
  updateDinerSelect();
  renderAll();
}

function showDietResult() {
  if (dietProfiles.length === 0) return;
  // 灞曠ず绗竴涓鑹茬殑璇︾粏璁＄畻缁撴灉
  const p = dietProfiles[0];
  const bmi = calcBMI(p.height, p.weight);
  let bmiLabel;
  if (bmi < 18.5) bmiLabel = '鍋忕槮';
  else if (bmi < 24) bmiLabel = '姝ｅ父';
  else if (bmi < 28) bmiLabel = '瓒呴噸';
  else bmiLabel = '鑲ヨ儢';

  const bmr = Math.round(calcBMR(p.gender, p.weight, p.height, p.age));
  let tdee = Math.round(bmr * 1.2);
  let targetKcal;
  if (p.goal === 'cut') targetKcal = tdee - 500;
  else if (p.goal === 'bulk') targetKcal = tdee + 300;
  else targetKcal = tdee;
  if (targetKcal < 1200) targetKcal = 1200;

  const proteinG = Math.round(p.weight * 2.0);
  const fatG = Math.round(targetKcal * 0.25 / 9);
  const carbG = Math.round((targetKcal - proteinG * 4 - fatG * 9) / 4);

  const resultEl = document.getElementById('dpResult');
  resultEl.style.display = 'block';
  resultEl.innerHTML = `
    <div style="font-size:12px;color:#888;margin-bottom:6px;">浠ャ€?{escapeHtml(p.name)}銆嶇殑韬綋鏁版嵁涓哄弬鑰?/div>
    <div class="dp-val"><span>BMI</span><b>${bmi.toFixed(1)} (${bmiLabel})</b></div>
    <div class="dp-val"><span>鍩虹浠ｈ阿 BMR</span><b>${bmr} kcal</b></div>
    <div class="dp-val"><span>姣忔棩鎺ㄨ崘鎽勫叆</span><b>${targetKcal} kcal</b></div>
    <div class="dp-macros">
      <div class="dp-macro pro"><div class="num">${proteinG}g</div>铔嬬櫧璐?/div>
      <div class="dp-macro carb"><div class="num">${carbG}g</div>纰虫按</div>
      <div class="dp-macro fat"><div class="num">${fatG}g</div>鑴傝偑</div>
    </div>`;
}

// ====== 鐢ㄩ浜洪€夋嫨 ======
function updateDinerSelect() {
  // 娓呯悊鏃犳晥 ID + 棣栨鍒濆鍖?  const validIds = new Set(dietProfiles.filter(p => p.goal !== 'maintain').map(p => p.id));
  selectedDiners = selectedDiners.filter(id => validIds.has(id));
  if (selectedDiners.length === 0) {
    selectedDiners = Array.from(validIds);
  }
}

function toggleDiner(id) {
  const idx = selectedDiners.indexOf(id);
  if (idx >= 0) {
    if (selectedDiners.length <= 1) { showToast('鑷冲皯閫変竴浣嶇敤椁愪汉'); return; }
    selectedDiners.splice(idx, 1);
  } else {
    selectedDiners.push(id);
  }
}

function renderDinerSelectBar() {
  const bar = document.getElementById('dinerSelectBar');
  bar.classList.toggle('show', currentMode === 'diet');
  if (currentMode !== 'diet') return;
  const diners = dietProfiles.filter(p => p.goal !== 'maintain');
  const tags = document.getElementById('dinerSelectTags');
  if (diners.length === 0) {
    tags.innerHTML = '<span class="ds-none">鏆傛棤鍑忚剛/澧炶倢瑙掕壊锛岃鍏堝湪妗ｆ涓坊鍔?/span>';
    return;
  }
  tags.innerHTML = diners.map(p => {
    const sel = selectedDiners.includes(p.id) ? ' selected' : '';
    return `<span class="ds-tag${sel}" onclick="toggleDinerAndRefresh('${p.id}')">${escapeHtml(p.name)}</span>`;
  }).join('');
  const hint = document.getElementById('dinerHint');
  hint.style.display = selectedDiners.length === 0 ? 'block' : 'none';
}

function toggleDinerAndRefresh(id) {
  toggleDiner(id);
  renderDinerSelectBar();
  recoHistory.clear();
  renderRecommendations();
  renderAll();
}

function getAvgDietTarget() {
  // 璁＄畻鎵€閫夌敤椁愪汉鐨勫钩鍧囩洰鏍?  if (selectedDiners.length === 0) return null;
  const profiles = dietProfiles.filter(p => selectedDiners.includes(p.id));
  if (profiles.length === 0) return null;
  let totalKcal = 0, totalProtein = 0;
  profiles.forEach(p => {
    const bmr = Math.round(calcBMR(p.gender, p.weight, p.height, p.age));
    let tdee = Math.round(bmr * 1.2);
    let target;
    if (p.goal === 'cut') target = tdee - 500;
    else if (p.goal === 'bulk') target = tdee + 300;
    else target = tdee;
    if (target < 1200) target = 1200;
    totalKcal += target;
    totalProtein += Math.round(p.weight * 2.0);
  });
  return {
    targetKcal: Math.round(totalKcal / profiles.length),
    targetProtein: Math.round(totalProtein / profiles.length)
  };
}

// ====== 瑙掕壊鍒囨崲 ======
async function switchRole(role) {
  currentRole = role;
  document.getElementById('roleCustomer').classList.toggle('active', role === 'customer');
  document.getElementById('roleCook').classList.toggle('active', role === 'cook');
  document.getElementById('customerArea').style.display = role === 'customer' ? 'block' : 'none';
  document.getElementById('cookArea').style.display = role === 'cook' ? 'block' : 'none';
  if (role === 'cook') await renderCookPage();
}

// ====== 鍋ュ悍鎻愰啋 ======
function switchHealth(filter) {
  if (currentMode === 'diet') return;
  healthFilters[filter] = !healthFilters[filter];
  document.getElementById('healthSugar').classList.toggle('active', healthFilters.diabetes);
  document.getElementById('healthPressure').classList.toggle('active', healthFilters.hypertension);
  renderAll();
}

// ====== 鍑忚剛妗ｆ ======
// ====== 浠婃棩鎺ㄨ崘寮曟搸锛堝垎椁愮増锛?======
// 姝ｉ妯℃澘锛氳崵+绱?涓婚锛?閬撹彍
const MAIN_COMBO_TEMPLATES = [
  ['d1','d5','d12'], ['d1','d6','d13'], ['d1','d7','d14'], ['d1','d8','d15'],
  ['d2','d5','d13'], ['d2','d6','d12'], ['d2','d7','d15'], ['d2','d8','d14'],
  ['d3','d5','d14'], ['d3','d6','d15'], ['d3','d7','d12'], ['d3','d8','d13'],
  ['d4','d5','d15'], ['d4','d6','d14'], ['d4','d7','d13'], ['d4','d8','d12'],
  ['d1','d3','d5','d12'], ['d2','d4','d6','d13'], ['d1','d5','d9','d12'], ['d2','d6','d10','d13'],
  ['d3','d7','d11','d14'], ['d4','d8','d9','d15'], ['d1','d6','d11','d14'], ['d2','d5','d10','d15'],
];
// 杞婚/鏃╅妯℃澘锛?閬撹彍锛屼富椋?姹?铔?绱?const LIGHT_COMBO_TEMPLATES = [
  ['d12','d9'], ['d13','d11'], ['d14','d9'], ['d15','d11'],
  ['d12','d5'], ['d13','d6'], ['d14','d7'], ['d15','d8'],
  ['d12','d11'], ['d13','d9'], ['d14','d11'], ['d15','d9'],
];
// 鍔犻妯℃澘锛?-2閬撹交閲?const SNACK_COMBO_TEMPLATES = [
  ['d5'], ['d6'], ['d9'], ['d11'],
  ['d5','d9'], ['d6','d11'], ['d7','d9'], ['d8','d11'],
  ['d12'], ['d14'], ['d15'],
];

function getComboTemplatesForSlot(slotIndex) {
  const slots = getMealSlots();
  const slot = slots[slotIndex];
  if (!slot) return MAIN_COMBO_TEMPLATES;
  if (slot.light) return LIGHT_COMBO_TEMPLATES;
  if (slot.name.includes('鍔犻')) return SNACK_COMBO_TEMPLATES;
  return MAIN_COMBO_TEMPLATES;
}

function makeComboKey(combo) { return combo.slice().sort().join(','); }

function calcComboStats(combo) {
  let kcal = 0, protein = 0;
  combo.forEach(id => {
    const nu = NUTRITION[id];
    if (nu) { kcal += nu.kcal; protein += nu.protein; }
  });
  return { kcal, protein };
}

function scoreCombo(comboStats, target) {
  if (!target) return 0;
  const kcalDist = Math.abs(comboStats.kcal - target.kcal);
  const kcalScore = Math.max(0, 1 - kcalDist / Math.max(target.kcal, 1));
  const proteinScore = Math.min(1, comboStats.protein / Math.max(target.protein, 0.1));
  return kcalScore * 0.6 + proteinScore * 0.4;
}

function getRecommendation(slotIndex) {
  const mealTarget = getMealTarget(slotIndex);
  const templates = getComboTemplatesForSlot(slotIndex);
  const available = templates.filter(c => !recoHistory.has(makeComboKey(c)));
  const candidates = available.length >= 4 ? available : templates;
  const scale = getDinerScale();

  return candidates
    .map(combo => {
      const stats = calcComboStats(combo);
      let scaledKcal = 0, scaledProtein = 0;
      combo.forEach(id => {
        const nu = NUTRITION[id];
        if (nu) {
          const factor = isStapleDish(id) ? scale.staple : scale.general;
          scaledKcal += Math.round(nu.kcal * factor);
          scaledProtein += Math.round(nu.protein * factor);
        }
      });
      return { combo, key: makeComboKey(combo), kcal: scaledKcal, protein: scaledProtein, score: scoreCombo(stats, mealTarget) };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(r => ({ combo: r.combo, key: r.key, kcal: r.kcal, protein: r.protein }));
}

function renderMealTabs() {
  const slots = getMealSlots();
  const tabs = document.getElementById('mealTabs');
  if (currentMealSlot >= slots.length) currentMealSlot = 0; // 鍥為€€鍒板崍椁?  const target = getAvgDietTarget();
  const totalKcal = target ? target.targetKcal : 2000;
  tabs.innerHTML = slots.map((s, i) => {
    const mealKcal = Math.round(totalKcal * s.ratio);
    const active = i === currentMealSlot ? ' active' : '';
    return `<span class="mt-tab${active}" onclick="switchMealSlot(${i})">${s.name}<br><span class="mt-sub">绾?{mealKcal}kcal</span></span>`;
  }).join('');
}

function renderRecommendations() {
  const section = document.getElementById('recoSection');
  section.classList.toggle('show', currentMode === 'diet');
  if (currentMode !== 'diet') return;
  renderMealTabs();
  const mealTarget = getMealTarget(currentMealSlot);
  const slot = getMealSlots()[currentMealSlot];
  const scale = getDinerScale();
  const dinerLabel = scale.count > 1 ? ` 路 閫傚悎${scale.count}浜篳 : '';
  const recos = getRecommendation(currentMealSlot);
  const menu = MENU_DIET;
  const scroll = document.getElementById('recoScroll');
  if (selectedDiners.length === 0) {
    scroll.innerHTML = '<div style="text-align:center;padding:20px;color:#aaa;font-size:13px;">璇峰厛鍦ㄤ笂鏂归€夋嫨鐢ㄩ浜?/div>';
    return;
  }
  scroll.innerHTML = recos.map(r => {
    const names = r.combo.map(id => {
      const dish = menu.find(d => d.id === id);
      return dish ? (dish.emoji + dish.name) : id;
    }).join(' + ');
    return `
    <div class="reco-card">
      <div class="rc-meal-tag">${slot ? slot.name : '姝ｉ'}${dinerLabel}</div>
      <div class="rc-dishes">${names}</div>
      <div class="rc-stats">绾?<b>${r.kcal}</b> kcal 路 铔嬬櫧璐?<b>${r.protein}</b>g</div>
      <button class="rc-btn" onclick="addComboToCart('${r.key}')">涓€閿姞鍏ヨ喘鐗╄溅</button>
    </div>`;
  }).join('');
  recos.forEach(r => recoHistory.add(r.key));
}

function addComboToCart(key) {
  const allTemplates = [...MAIN_COMBO_TEMPLATES, ...LIGHT_COMBO_TEMPLATES, ...SNACK_COMBO_TEMPLATES];
  const entry = allTemplates.find(t => makeComboKey(t) === key);
  if (!entry) return;
  const scale = getDinerScale();
  entry.forEach(id => {
    if (!cartDiet[id]) cartDiet[id] = 0;
    const factor = isStapleDish(id) ? scale.staple : scale.general;
    cartDiet[id] += Math.max(1, Math.round(factor));
  });
  renderAll();
  updateCartBar();
  openCart();
}

function switchMealSlot(idx) {
  currentMealSlot = idx;
  renderRecommendations();
}

function changeMealCount(val) {
  mealCount = parseInt(val);
  currentMealSlot = 0;
  const slots = getMealSlots();
  if (currentMealSlot >= slots.length) currentMealSlot = Math.min(0, slots.length - 1);
  recoHistory.clear();
  renderMealCountBtns();
  renderRecommendations();
}

function renderMealCountBtns() {
  const counts = [2, 3, 4, 5];
  const btnsHtml = counts.map(c => {
    const active = c === mealCount ? ' active' : '';
    return `<span class="mcb-btn${active}" onclick="changeMealCount(${c})">${c}椤?/span>`;
  }).join('');
  // 鍚屾涓や釜鎸夐挳缁勫鍣?  const c1 = document.getElementById('mealCountBtns1');
  const c2 = document.getElementById('mealCountBtns2');
  if (c1) c1.innerHTML = btnsHtml;
  if (c2) c2.innerHTML = btnsHtml;
}

function refreshRecommend() {
  recoHistory.clear();
  renderRecommendations();
}

// ====== 妗ｆ鍗＄墖浜や簰 ======
function toggleDietProfile() {
  const body = document.getElementById('dpBody');
  const icon = document.getElementById('dpToggleIcon');
  body.classList.toggle('open');
  icon.textContent = body.classList.contains('open') ? '鏀惰捣 鈻? : '灞曞紑 鈻?;
}

function calcBMI(heightCm, weightKg) {
  const m = heightCm / 100;
  return weightKg / (m * m);
}

function calcBMR(gender, weight, height, age) {
  if (gender === 'male') {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
}

// ====== 鑿滃崟鐩稿叧 ======
function getMenu() { return currentMode === 'normal' ? MENU_NORMAL : MENU_DIET; }
function getCart() { return currentMode === 'normal' ? cartNormal : cartDiet; }
function setCart(c) { if (currentMode === 'normal') cartNormal = c; else cartDiet = c; }
function getTotalCount() { return Object.values(getCart()).reduce((a, b) => a + b, 0); }

function switchMode(mode) {
  if (currentMode === mode) return;
  const currentCount = getTotalCount();
  if (currentCount > 0) {
    if (!confirm(`鍒囨崲妯″紡灏嗘竻绌哄綋鍓嶈喘鐗╄溅锛?{currentCount} 閬撹彍锛夛紝纭畾鍒囨崲鍚楋紵`)) return;
  }
  currentMode = mode;
  setCart({});
  cartNotes = {};
  if (mode === 'diet') {
    currentMealSlot = 0;
    recoHistory.clear();
    // 淇濆瓨骞舵竻绌哄仴搴锋彁閱掔姸鎬?    savedHealthFilters = { diabetes: healthFilters.diabetes, hypertension: healthFilters.hypertension };
    healthFilters = { diabetes: false, hypertension: false };
  } else {
    // 鎭㈠鍋ュ悍鎻愰啋鐘舵€?    if (savedHealthFilters) {
      healthFilters = { diabetes: savedHealthFilters.diabetes, hypertension: savedHealthFilters.hypertension };
      savedHealthFilters = null;
    }
  }
  document.getElementById('tabNormal').classList.toggle('active', mode === 'normal');
  document.getElementById('tabDiet').classList.toggle('active', mode === 'diet');
  document.getElementById('modeLabel').textContent = mode === 'normal' ? ' 路 鏃ュ父' : ' 路 鍑忚剛';
  // 鍋ュ悍鎻愰啋鎸夐挳琛屽彧鍦ㄦ棩甯告ā寮忔樉绀?  document.querySelector('.health-bar').style.display = mode === 'normal' ? '' : 'none';
  document.getElementById('healthSugar').classList.toggle('active', healthFilters.diabetes);
  document.getElementById('healthPressure').classList.toggle('active', healthFilters.hypertension);
  document.getElementById('dietProfile').classList.toggle('show', mode === 'diet');
  document.getElementById('recoSection').classList.toggle('show', mode === 'diet');
  updateCartBar();
  updateDinerSelect();
  renderDinerSelectBar();
  renderMealCountBtns();
  renderAll();
}

function setDailyMeal(type) {
  dailyMealType = type;
  document.querySelectorAll('#dailyMealTabs .dmt-tab').forEach(tab => {
    tab.classList.toggle('active', tab.classList.contains(type));
  });
}

function init() {
  loadDietProfiles();
  document.getElementById('dietProfile').classList.toggle('show', currentMode === 'diet');
  document.getElementById('recoSection').classList.toggle('show', currentMode === 'diet');
  document.querySelector('.health-bar').style.display = currentMode === 'normal' ? '' : 'none';
  renderMealCountBtns();
  updateDinerSelect();
  renderDinerSelectBar();
  renderAll();
  updateCartBar();
}

function renderAll() {
  // 鍑忚剛妯″紡涓嬪埛鏂版。妗堝拰鎺ㄨ崘
  if (currentMode === 'diet') {
    renderProfileList();
    showDietResult();
    renderDinerSelectBar();
    renderRecommendations();
  }
  const container = document.getElementById('menuContainer');
  const menu = getMenu();
  const cats = [
    { key: 'meat', label: '鑽よ彍', icon: '馃崠' },
    { key: 'veggie', label: '绱犺彍', icon: '馃ガ' },
    { key: 'soup', label: '姹ゅ搧', icon: '馃嵅' },
    { key: 'staple', label: '涓婚', icon: '馃崥' },
  ];
  let html = '';
  cats.forEach(c => {
    const items = menu.filter(m => m.cat === c.key);
    if (items.length === 0) return;
    html += `<div class="section-title ${c.key}"><span class="icon">${c.icon}</span>${c.label}</div>`;
    html += `<div class="menu-grid">`;
    html += items.map(m => renderMenuItem(m)).join('');
    html += `</div>`;
  });
  container.innerHTML = html;
}

function renderMenuItem(m) {
  const cart = getCart();
  const inCart = cart[m.id];
  let healthTags = '';
  if (m.health) {
    const labels = [
      { key: 'diabetes', css: 'left', short: '绯? },
      { key: 'hypertension', css: 'right', short: '鍘? }
    ];
    for (const l of labels) {
      if (currentMode === 'normal' && healthFilters[l.key]) {
        const tag = m.health[l.key];
        if (tag === 'avoid') {
          healthTags += `<div class="health-badge avoid ${l.css}">蹇屽彛路${l.short}</div>`;
        } else if (tag === 'limit') {
          healthTags += `<div class="health-badge limit ${l.css}">灏戝悆路${l.short}</div>`;
        }
      }
    }
  }
  // 鍑忚剛妯″紡钀ュ吇鏍囩锛堟牴鎹唤閲忓姩鎬佽绠楋級
  let nutriTag = '';
  let portionHtml = '';
  if (currentMode === 'diet') {
    const nu = NUTRITION[m.id];
    const portion = cartPortions[m.id] || 'm';
    const mul = getPortionMultiplier(portion);
    if (nu) {
      const adjKcal = Math.round(nu.kcal * mul);
      const adjProtein = Math.round(nu.protein * mul);
      nutriTag = `<div class="nutri-tag">绾?{adjKcal}kcal | 铔嬬櫧璐?{adjProtein}g</div>`;
    }
    const selClass = (p) => (cartPortions[m.id] || 'm') === p ? ' pt-sel' : '';
    const vizText = getVizText(m.id, portion);
    portionHtml = `
      <div class="portion-ctrl" onclick="event.stopPropagation()">
        <div class="pt-btn${selClass('s')}" onclick="setPortion('${m.id}','s')" title="${getVizText(m.id,'s')}">灏?/div>
        <div class="pt-btn${selClass('m')}" onclick="setPortion('${m.id}','m')" title="${getVizText(m.id,'m')}">涓?/div>
        <div class="pt-btn${selClass('l')}" onclick="setPortion('${m.id}','l')" title="${getVizText(m.id,'l')}">澶?/div>
      </div>
      <div class="pt-viz">${vizText}</div>`;
  }
  return `
    <div class="menu-item ${inCart ? 'in-cart' : ''}" onclick="addToCart('${m.id}')">
      ${inCart ? `<div class="qty-badge">${inCart}</div>` : ''}
      ${nutriTag}
      ${healthTags}
      <div class="img-wrap" style="background:${m.gradient}">
        <div class="emoji-bg">${m.emoji}</div>
        ${m.img ? `<img src="${m.img}" alt="${m.name}" loading="lazy" onerror="this.classList.add('error-img')">` : ''}
      </div>
      <div class="info">
        <div class="name">${m.name}</div>
        ${portionHtml}
      </div>
    </div>`;
}

function addToCart(id) {
  const cart = getCart();
  if (!cart[id]) cart[id] = 0;
  cart[id]++;
  setCart(cart);
  renderAll();
  updateCartBar();
}

function setPortion(id, size) {
  cartPortions[id] = size;
  renderAll();
  // 濡傛灉璐墿杞﹀紑鐫€锛屽埛鏂拌喘鐗╄溅钀ュ吇姹囨€?  const cartModal = document.getElementById('cartModal');
  if (cartModal.classList.contains('show')) openCart();
}

function removeFromCart(id) {
  const cart = getCart();
  if (cart[id] > 1) { cart[id]--; }
  else { delete cart[id]; delete cartNotes[id]; }
  setCart(cart);
  renderAll();
  updateCartBar();
}

function getCartItems() {
  const cart = getCart();
  const menu = getMenu();
  return Object.entries(cart).map(([id, qty]) => {
    const m = menu.find(x => x.id === id);
    return { ...m, qty, note: cartNotes[id] || '' };
  }).filter(x => x);
}

function updateCartBar() {
  document.getElementById('cartCount').textContent = getTotalCount();
}

// ====== 鍗曢亾鑿滃娉?======
function editDishNote(id) {
  const currentNote = cartNotes[id] || '';
  dishNoteEditing[id] = currentNote;
  const item = getMenu().find(m => m.id === id);
  document.getElementById('noteDishName').textContent = item ? item.name : '';
  document.getElementById('noteDishId').value = id;
  document.getElementById('noteDishInput').value = currentNote;
  document.getElementById('noteModal').classList.add('show');
  setTimeout(() => document.getElementById('noteDishInput').focus(), 300);
}

function saveDishNote() {
  const id = document.getElementById('noteDishId').value;
  const note = document.getElementById('noteDishInput').value.trim();
  if (note) { cartNotes[id] = note; } else { delete cartNotes[id]; }
  closeNoteModal();
  openCart(); // 鍒锋柊璐墿杞︽樉绀?}

function closeNoteModal() {
  document.getElementById('noteModal').classList.remove('show');
}

function openCart() {
  const items = getCartItems();
  const content = document.getElementById('cartContent');
  if (items.length === 0) {
    content.innerHTML = '<div class="empty-cart">璐墿杞︾┖绌哄涔燂紝鍘婚€夎彍鍚</div>';
  } else {
    // 鍑忚剛妯″紡鏄剧ず褰撳墠宸查€夌敤椁愪汉锛堝彧璇绘彁绀猴級
    let dinerHint = '';
    if (currentMode === 'diet' && selectedDiners.length > 0) {
      const dinerNames = dietProfiles.filter(p => selectedDiners.includes(p.id)).map(p => p.name).join('銆?);
      dinerHint = `<div style="font-size:12px;color:#888;margin-bottom:8px;">鐢ㄩ浜猴細${escapeHtml(dinerNames)}锛?{selectedDiners.length}浜猴級</div>`;
    }
    content.innerHTML = `
      ${dinerHint}
      <ul class="cart-list">
        ${items.map(i => `
          <li>
            <div class="c-thumb" style="background:${i.gradient}">${i.emoji}
              ${i.img ? `<img src="${i.img}" alt="${i.name}" onerror="this.classList.add('error-img')">` : ''}
            </div>
            <span class="c-name">${i.name}</span>
            ${currentMode === 'diet' && cartPortions[i.id] ? `<span class="cart-portion">${PORTION_LABELS[cartPortions[i.id]]}</span>` : ''}
            <button class="c-note-btn" onclick="editDishNote('${i.id}')" title="鍗曠嫭澶囨敞">鉁?/button>
            <div class="qty-ctrl">
              <button onclick="removeFromCart('${i.id}')">鈭?/button>
              <span class="qty">${i.qty}</span>
              <button onclick="addToCart('${i.id}')">+</button>
            </div>
            ${i.note ? `<div class="c-note">馃摑 ${escapeHtml(i.note)}</div>` : ''}
          </li>`).join('')}
      </ul>
      <div class="cart-summary">
        <div class="row">鍏?<span>${getTotalCount()}</span> 閬撹彍</div>
      </div>
      ${currentMode === 'diet' ? renderCartNutri(items) : ''}`;
  }
  document.getElementById('cartModal').classList.add('show');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function renderCartNutri(items) {
  if (!dietProfile || dietProfiles.length === 0) return '';
  const target = getAvgDietTarget();
  if (!target) return '';
  let totalKcal = 0, totalProtein = 0;
  items.forEach(i => {
    const nu = NUTRITION[i.id];
    const portion = cartPortions[i.id] || 'm';
    const mul = getPortionMultiplier(portion);
    if (nu) { totalKcal += Math.round(nu.kcal * mul * i.qty); totalProtein += Math.round(nu.protein * mul * i.qty); }
  });
  if (totalKcal === 0) return '';
  const pct = Math.min(100, Math.round(totalKcal / target.targetKcal * 100));
  let warn = '';
  if (pct > 90) warn = '<div class="cn-warn">鐑噺鎺ヨ繎姣忔棩涓婇檺锛屽缓璁€傚綋璋冩暣</div>';
  const dinerNames = dietProfiles.filter(p => selectedDiners.includes(p.id)).map(p => p.name).join('銆?);
  return `
    <div class="cart-nutri">
      <div class="cn-row"><span class="cn-label">鐑噺鍚堣</span><span class="cn-val">${totalKcal} kcal</span></div>
      <div class="cn-row"><span class="cn-label">铔嬬櫧璐ㄥ悎璁?/span><span class="cn-val">${totalProtein} g</span></div>
      <div class="cn-row"><span class="cn-label">姣忔棩鐩爣锛?{dinerNames ? '鍧? : ''}锛?/span><span class="cn-val">${target.targetKcal} kcal</span></div>
      <div class="cn-bar-wrap"><div class="cn-bar" style="width:${pct}%"></div></div>
      <div class="cn-row" style="font-size:11px;color:#888;margin-top:2px;"><span>宸查€夊崰鐩爣 ${pct}%</span></div>
      ${warn}
    </div>`;
}

function closeCart() { document.getElementById('cartModal').classList.remove('show'); }

function clearCart() {
  setCart({});
  cartNotes = {};
  renderAll();
  updateCartBar();
  openCart();
}

// ====== 涓嬪崟 ======
async function submitOrder() {
  closeCart();
  const items = getCartItems();
  if (items.length === 0) { showToast('璇峰厛閫夋嫨鑿滃搧'); return; }
  // 鏆傚瓨璁㈠崟鏁版嵁锛屽脊鍑洪娆￠€夋嫨
  pendingOrderData = {
    items: items.map(i => ({ id: i.id, name: i.name, emoji: i.emoji, qty: i.qty, note: i.note || '', cat: i.cat })),
    cart: Object.assign({}, getCart()),
    notes: Object.assign({}, cartNotes),
    portions: Object.assign({}, cartPortions),
  };
  // 鏃ュ父妯″紡鐩存帴浣跨敤褰撳墠椁愭锛屽噺鑴傛ā寮忕洿鎺ョ敤褰撳墠閫変腑鐨勯娆℃爣绛?  if (currentMode === 'normal') {
    confirmMealType(dailyMealType);
  } else {
    const slots = getMealSlots();
    const slot = slots[currentMealSlot] || { name: '姝ｉ' };
    confirmMealType(slot.name);
  }
}

async function confirmMealType(mealType) {
  document.getElementById('mealTypeModal').classList.remove('show');
  if (!pendingOrderData) return;

  const note = document.getElementById('orderNote').value.trim();
  const now = new Date();
  const ts = `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`;
  const modeLabel = currentMode === 'normal' ? '鏃ュ父' : '鍑忚剛';
  const mealLabels = { breakfast: '鏃╅', lunch: '鍗堥', dinner: '鏅氶' };
  const mealLabel = currentMode === 'normal' ? mealLabels[mealType] : mealType;
  const catNames = { meat: '鑽よ彍', veggie: '绱犺彍', soup: '姹ゅ搧', staple: '涓婚' };
  const items = pendingOrderData.items;

  let text = `鐐硅彍鍗?[${modeLabel}] [${mealLabel}]  ${ts}\n`;
  if (currentMode === 'diet') {
    const dinerNames = dietProfiles.filter(p => selectedDiners.includes(p.id)).map(p => p.name).join('銆?);
    if (dinerNames) text += `鐢ㄩ浜猴細${dinerNames}锛?{selectedDiners.length}浜猴級\n`;
  }
  text += `${'鈹€'.repeat(28)}\n`;
  ['meat', 'veggie', 'soup', 'staple'].forEach(cat => {
    const catItems = items.filter(i => i.cat === cat);
    if (catItems.length > 0) {
      text += `銆?{catNames[cat]}銆慭n`;
      catItems.forEach((i, idx) => {
        let line = `  ${idx + 1}. ${i.emoji} ${i.name}  脳${i.qty}`;
        if (i.note) line += `  [${i.note}]`;
        text += line + '\n';
      });
      text += '\n';
    }
  });
  text += `${'鈹€'.repeat(28)}\n`;
  text += `鍚堣锛?{items.reduce((s, i) => s + i.qty, 0)} 閬撹彍\n`;
  if (note) text += `\n澶囨敞锛?{note}`;

  const order = {
    id: Date.now(),
    time: ts,
    mode: currentMode,
    modeLabel: modeLabel,
    mealType: mealType,
    dinerCount: currentMode === 'diet' ? selectedDiners.length : 0,
    items: items,
    globalNote: note,
    text: text,
    done: false,
  };
  await saveOrder(order);
  pendingOrderData = null;

  document.getElementById('orderContent').textContent = text;
  document.getElementById('orderModal').classList.add('show');

  setCart({});
  cartNotes = {};
  renderAll();
  updateCartBar();
  await renderCookPage();
}

async function saveOrder(order) {
  const { error } = await supabase.from('orders').insert(order);
  if (error) console.error('Save error:', error);
}

async function loadOrders() {
  const { data, error } = await supabase.from('orders').select('*').order('id', { ascending: false });
  if (error) { console.error('Load error:', error); return []; }
  return data || [];
}

function closeOrder() { document.getElementById('orderModal').classList.remove('show'); }

function copyOrder() {
  const text = document.getElementById('orderContent').textContent;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => showToast('宸插鍒讹紝鍙矘璐村彂缁欏浜?));
  } else {
    const ta = document.createElement('textarea');
    ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    document.execCommand('copy'); document.body.removeChild(ta);
    showToast('宸插鍒讹紝鍙矘璐村彂缁欏浜?);
  }
}

// ====== 鍋氳彍浜虹晫闈?======
function categorizePrepStep(step) {
  if (/鐒按|鐒竴涓媩椋炴按|姘界儷/.test(step)) return { cat: 'blanch', label: '鐒按' };
  if (/鍘昏叆|鍘昏姘磡娴告场.*琛€姘磡娉?*琛€姘?.test(step)) return { cat: 'deodorize', label: '鍘昏叆/鍘昏姘? };
  if (/瑙ｅ喕|鎻愬墠鎷垮嚭|鍖栧喕/.test(step)) return { cat: 'defrost', label: '瑙ｅ喕' };
  if (/娉″彂|娉¤蒋|娉″紑|鎻愬墠娴告场|鍐锋按娉″彂/.test(step)) return { cat: 'soak', label: '娉″彂' };
  if (/鍘婚|鍓旈|鍓斿幓楠ㄥご/.test(step)) return { cat: 'debone', label: '鍘婚/鍓旈' };
  if (/鍜岄潰|鎻夐潰|鎻夋垚闈㈠洟|鎻?*闈㈠洟/.test(step)) return { cat: 'knead', label: '鍜岄潰/鎻夐潰' };
  if (/鍙戦叺|閱掑彂|鍙戣嚦.*鍊嶅ぇ|鍙戣嚦.*鍊?.test(step)) return { cat: 'ferment', label: '鍙戦叺/閱掑彂' };
  if (/閱掗潰/.test(step)) return { cat: 'ferment', label: '閱掗潰' };
  if (/鑵?.test(step)) return { cat: 'marinate', label: '鑵屽埗' };
  if (/鎷嶆墎|鎷嶇|鎷嶆澗/.test(step)) return { cat: 'smash', label: '鎷嶆墎/鎷嶇' };
  if (/鍘荤毊/.test(step)) return { cat: 'peel', label: '鍘荤毊澶勭悊' };
  if (/鍒囦竵|鍒囨湯|鍓佺|鍒囩|鍒囧皬涓亅鍒囧皬鍧?.test(step)) return { cat: 'dice', label: '鍒囦竵/鍒囨湯/鍓佺' };
  if (/鍒囦笣|鍒囩粏涓?.test(step)) return { cat: 'shred', label: '鍒囦笣' };
  if (/鍒囩墖|鍒囪杽鐗?.test(step)) return { cat: 'slice', label: '鍒囩墖' };
  if (/鍒囨粴鍒€|鑿卞舰鍧?.test(step)) return { cat: 'section', label: '鍒囨/婊氬垁' };
  if (/鍒囨|鍒囨枩娈?.test(step)) return { cat: 'section', label: '鍒囨/婊氬垁' };
  if (/鍒囧潡/.test(step)) return { cat: 'chunk', label: '鍒囧潡' };
  if (/娣樻礂|娲梶娓呮礂|娲楀噣|鍘婚碁|鍘诲唴鑴弢鍘婚硟|娌ュ共/.test(step)) return { cat: 'wash', label: '娓呮礂/娌ュ共' };
  return { cat: 'misc', label: '鍏朵粬澶勭悊' };
}

function extractPrepIngredient(step) {
  const m = step.match(/^([^锛?]+)/);
  return m ? m[1] : step;
}

function generatePrepSummary(order) {
  const groups = {};
  const catOrders = ['defrost','soak','deodorize','knead','ferment','blanch','debone','marinate','smash','peel','chunk','slice','shred','dice','section','wash','misc'];
  const catNames = { defrost: '瑙ｅ喕', soak: '娉″彂', deodorize: '鍘昏叆/鍘昏姘?, knead: '鍜岄潰/鎻夐潰', ferment: '鍙戦叺/閱掑彂', blanch: '鐒按', debone: '鍘婚/鍓旈', marinate: '鑵屽埗', smash: '鎷嶆墎/鎷嶇', peel: '鍘荤毊澶勭悊', chunk: '鍒囧潡', slice: '鍒囩墖', shred: '鍒囦笣', dice: '鍒囦竵/鍒囨湯/鍓佺', section: '鍒囨/婊氬垁', wash: '娓呮礂/娌ュ共', misc: '鍏朵粬澶勭悊' };

  order.items.forEach(item => {
    const t = TUTORIALS[item.id];
    if (!t || !t.prep) return;
    t.prep.forEach(step => {
      const { cat } = categorizePrepStep(step);
      if (!groups[cat]) groups[cat] = [];
      const key = `${item.id}|${step}`;
      if (!groups[cat].find(x => x.key === key)) {
        groups[cat].push({ key, step, dish: `${item.emoji} ${item.name}` });
      }
    });
  });

  if (Object.keys(groups).length === 0) return '';

  let html = '<h4>鏁翠綋澶囪彍娓呭崟锛堜竴娆℃€у叏澶勭悊瀹屽啀寮€鐏級</h4>';
  catOrders.forEach(cat => {
    if (!groups[cat] || groups[cat].length === 0) return;
    html += `<div class="prep-cat"><span class="cat-label ${cat}">${catNames[cat]}</span>`;
    html += `<ul class="prep-steps">`;
    groups[cat].forEach(({ step, dish }) => {
      html += `<li>${escapeHtml(step)}<span class="prep-src">锛?{escapeHtml(dish)}锛?/span></li>`;
    });
    html += `</ul></div>`;
  });
  return html;
}

// 鍚堝苟璁㈠崟鑿滃搧锛堝悓id鍚堝苟qty锛屽娉ㄦ嫾鎺ワ級
function mergeOrderItems(items) {
  const map = {};
  items.forEach(i => {
    if (!map[i.id]) {
      map[i.id] = { ...i, qty: i.qty, notes: i.note ? [i.note] : [] };
    } else {
      map[i.id].qty += i.qty;
      if (i.note) map[i.id].notes.push(i.note);
    }
  });
  return Object.values(map).map(m => {
    const uniqueNotes = [...new Set(m.notes)];
    return { ...m, note: uniqueNotes.join('锛?), notes: undefined };
  });
}

async function renderCookPage() {
  const orders = await loadOrders();
  const pending = orders.filter(o => !o.done);
  const container = document.getElementById('cookContainer');

  if (pending.length === 0) {
    container.innerHTML = '<div class="empty-cart">鏆傛棤寰呭鐞嗚鍗?/div>';
    return;
  }

  const mealLabels = { breakfast: '鏃╅', lunch: '鍗堥', dinner: '鏅氶' };
  const mealEmojis = { breakfast: '馃寘', lunch: '鈽€锔?, dinner: '馃寵' };
  const mealOrder = ['breakfast', 'lunch', 'dinner'];
  const grouped = { breakfast: [], lunch: [], dinner: [] };

  pending.forEach(o => {
    const mt = o.mealType || 'lunch';
    if (grouped[mt]) grouped[mt].push(o);
  });

  let html = '';
  mealOrder.forEach(mt => {
    const ordersInGroup = grouped[mt];
    html += `<div class="cook-meal-section">`;
    html += `<div class="cms-header ${mt}">${mealEmojis[mt]} ${mealLabels[mt]}锛?{ordersInGroup.length}鍗曪級</div>`;
    if (ordersInGroup.length === 0) {
      html += `<div class="cms-empty">鏆傛棤璁㈠崟</div>`;
    } else {
      ordersInGroup.forEach(order => {
        const mergedItems = mergeOrderItems(order.items);
        const totalQty = mergedItems.reduce((s, i) => s + i.qty, 0);
        // 鐢ㄥ悎骞跺悗鐨?items 璁＄畻椋熸潗姹囨€?        const mergedOrder = { ...order, items: mergedItems };
        const prepSummary = generatePrepSummary(mergedOrder);
        html += `
    <div class="order-card">
      <div class="order-hd" onclick="toggleOrderDetail(${order.id})">
        <div>
          <span class="o-meal-tag ${mt}">${mealLabels[mt]}</span>
          <span class="o-badge ${order.mode}">${order.modeLabel}</span>
          ${order.dinerCount ? `<span class="o-diner-count">${order.dinerCount}浜?/span>` : ''}
          <span class="o-count">${mergedItems.length} 绉?路 鍏?{totalQty}閬?/span>
        </div>
        <div class="order-hd-btns">
          <span class="o-time">${order.time}</span>
          <button class="btn-del-order" onclick="event.stopPropagation();deleteOrder(${order.id})">鍒犻櫎璁㈠崟</button>
        </div>
      </div>
      <div class="order-detail" id="orderDetail${order.id}">
        <h4>璁㈠崟姒傝</h4>
        <div class="dish-list">
          ${mergedItems.map(i => {
            const noteStr = i.note ? ` <span class="dn">[${escapeHtml(i.note)}]</span>` : '';
            return `<div class="dish-merged"><span class="dq">脳${i.qty}</span>${i.emoji} ${i.name}${noteStr}<button class="btn-remove-dish" onclick="event.stopPropagation();removeDishFromOrder(${order.id},'${i.id}')">绉婚櫎</button></div>`;
          }).join('')}
        </div>
        ${order.globalNote ? `<div style="margin-top:6px;font-size:13px;color:#888;">鍏ㄥ眬澶囨敞锛?{escapeHtml(order.globalNote)}</div>` : ''}
        ${prepSummary ? `<div class="prep-summary">${prepSummary}</div>` : ''}
        <h4>椋熸潗姹囨€?/h4>
        <div class="ingr-list">${renderMergedIngredients(mergedOrder)}</div>
        <h4>鍚勯亾鑿滄暀绋?/h4>
        ${mergedItems.map((i, di) => {
          const t = TUTORIALS[i.id];
          if (!t) return '';
          const hasCook = t.cook && t.cook.length > 0;
          return `
            <div style="margin-bottom:8px;">
              <button class="tutorial-toggle" onclick="toggleTutorial(${order.id},${di})">${i.emoji} ${i.name} 脳${i.qty}</button>
              <div class="tutorial-area" id="tutorial_${order.id}_${di}">
                ${hasCook ? `<span class="stage-badge cook">鐑?楗?/span><div class="stage-steps"><ol style="margin:0 0 0 18px;">${t.cook.map(s => `<li>${s}</li>`).join('')}</ol></div>` : ''}
                <a href="${t.video}" target="_blank" rel="noopener" class="tutorial-link">B绔欐悳锛?{i.name} 瀹跺父鍋氭硶</a>
              </div>
            </div>`;
        }).join('')}
        <button class="btn-done" onclick="markOrderDone(${order.id})">鏍囪涓哄凡瀹屾垚</button>
      </div>
    </div>`;
      });
    }
    html += `</div>`;
  });
  container.innerHTML = html;
}

function toggleOrderDetail(idx) {
  const el = document.getElementById('orderDetail' + idx);
  if (el) el.classList.toggle('show');
}

function toggleTutorial(orderIdx, dishIdx) {
  const area = document.getElementById('tutorial_' + orderIdx + '_' + dishIdx);
  const btn = area.previousElementSibling;
  area.classList.toggle('show');
  btn.classList.toggle('active');
}

function renderMergedIngredients(order) {
  // 鍚堝苟鍚岀被椋熸潗
  const merge = {};
  order.items.forEach(item => {
    const ingrStr = INGREDIENTS[item.id] || '';
    if (!ingrStr) return;
    const parts = ingrStr.split('銆?);
    parts.forEach(p => {
      const m = p.match(/^(.+?)(\d+)(g|ml|涓獆鏍箌棰梶鏉鐩抾缃恷纰梶鎶妡寮爘鏉?$/);
      if (m) {
        const key = m[1];
        const num = parseFloat(m[2]) * item.qty;
        const unit = m[3];
        merge[key] = merge[key] || { num: 0, unit: unit };
        merge[key].num += num;
      } else {
        // 鏃犳暟閲忕殑璋冩枡绫伙紝绠€鍗曡鏁?        merge[p] = merge[p] || { num: 0, unit: '娆? };
        merge[p].num += item.qty;
      }
    });
  });
  return Object.entries(merge).map(([name, val]) => {
    const showCount = val.num > 1 && val.unit !== '娆?;
    const display = showCount ? `${Math.round(val.num * 10) / 10}${val.unit}` : (val.unit === '娆? ? `脳${val.num}` : `(${val.unit})`);
    return `<span class="ingr-item">${name}${val.unit === '娆? ? '' : ''} <span class="count">${display}</span></span>`;
  }).join('');
}

async function markOrderDone(orderId) {
  if (!confirm('纭畾鏍囪姝よ鍗曚负宸插畬鎴愶紵')) return;
  const { error } = await supabase.from('orders').update({ done: true }).eq('id', orderId);
  if (error) { console.error('Update error:', error); return; }
  await renderCookPage();
  showToast('宸叉爣璁颁负宸插畬鎴?);
}

async function deleteOrder(orderId) {
  if (!confirm('纭畾鍒犻櫎鏁翠釜璁㈠崟锛熸鎿嶄綔涓嶅彲鎭㈠銆?)) return;
  const { error } = await supabase.from('orders').delete().eq('id', orderId);
  if (error) { console.error('Delete error:', error); return; }
  await renderCookPage();
  showToast('璁㈠崟宸插垹闄?);
}

async function removeDishFromOrder(orderId, dishId) {
  const { data: orders, error: loadErr } = await supabase.from('orders').select('*');
  if (loadErr) return;
  const order = orders.find(o => o.id === orderId);
  if (!order) return;
  const idx = order.items.findIndex(i => i.id === dishId);
  if (idx < 0) return;
  if (!confirm('纭畾浠庤鍗曚腑绉婚櫎銆? + order.items[idx].emoji + ' ' + order.items[idx].name + '銆嶏紵')) return;
  order.items.splice(idx, 1);
  if (order.items.length === 0) {
    await supabase.from('orders').delete().eq('id', orderId);
    showToast('鑿滃搧宸插叏閮ㄧЩ闄わ紝璁㈠崟宸插垹闄?);
  } else {
    await supabase.from('orders').update({ items: order.items }).eq('id', orderId);
    showToast('鑿滃搧宸茬Щ闄?);
  }
  await renderCookPage();
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast'; t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2100);
}

init();