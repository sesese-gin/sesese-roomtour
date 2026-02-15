/* script.js */

// 図鑑データ（ここはそのまま）
const itemData = {
    'has_pc': { name: 'ノートPC', image: 'game-image/item_pc.jpg', desc: '生協で買ったパソコン。今だにこいつでよかったのかは分からない。' },
    'has_plant':{ name: '観葉植物たち', image: 'game-image/item_plant.jpg', desc: '左からガジュマル、パキラ、名前忘れたやつ。こいつらのおかげで一人は寂しくない。'},
    'has_mouse':{ name: 'マウス', image: 'game-image/item_mouse.jpg', desc: 'トラックボール式のマウス、パチモンのはずなのに壊れなくて新しいのが買えない。'},
    'has_cup':{ name: 'マグカップ', image: 'game-image/item_cup.jpg', desc: 'コーヒーを飲んでたマグカップ、汚いものを見せて申し訳ない。'},
    'has_cd' :{ name: 'ソルファ', image: 'game-image/item_cd.jpg', desc: '大好きなアジカンのソルファ（2016）24時が耳がはちきれるほど聞いている。'},
    'has_manga' :{ name: 'NARUTO', image: 'game-image/item_manga.jpg', desc: 'TUTAYAで借りたNARUTO5巻,螺旋丸が出たぐらいの巻。おもろい。'},
    'has_wax': { name: 'ヘアワックス', image: 'game-image/item_wax.jpg', desc: '適当に購入しているワックス特にこだわりは無い' },
    'has_bag1': {name: '袋', image: 'game-image/item_bag1.jpg',desc: 'たまに使うものを入れる袋。シンプルで使いやすい。'  },
    'has_bag2': {name: 'サブ袋', image: 'game-image/item_bag2.jpg', desc: 'ヘアセットやスキンケア用品を入れてる袋'    },
    'has_mirror': { name: '壁掛けの鏡',image: 'game-image/item_mirror.jpg',desc: 'ガタがきて自立しなくなってしまって立てかけている'},
    'has_kutusita': { name: '靴下たち',image: 'game-image/item_kutusita.jpg',desc: '欲しい時にないのでここに置いてる。他人の目なんて気にしない' },
    'has_poster': {name: 'デクのポスター',image: 'game-image/item_poster.jpg',desc: 'ヒロアカ原画展で買ったポスター。部屋にインパクトを与えてくれる' },
    'has_books': {name: '積み上げられた本', image: 'game-image/item_books.jpg',desc: '乱雑に置かれた本たち、読む本と読まない本が織りなしている作品' },
    'has_TV': { name: 'テレビ',image: 'game-image/item_tv.jpg', desc: 'YouTubeやアニメを見るための専用機。初めてのバイト代で購入した'   },
    'has_okimono': {name: '緑たち', image: 'game-image/item_okimono.jpg',desc: '緑のフィギュアや植物たち。韓国で買った車、メガバンギラス、10円で買ったザクⅠ' },
    'has_miku': { name: '初音ミクのフィギュア',image: 'game-image/item_miku.jpg',desc: 'ガンダムコラボのミク、隣にいるのはポケモンの身代わり人形'},
    'has_temari': { name: '月村手毬', image: 'game-image/item_temari.jpg',desc: '学園アイドルマスターの月村手毬、推しだからといってむやみにグッズを買わないようにしている' },
    'has_sugatami': {name: '大きな姿見', image: 'game-image/item_sugatami.jpg',desc: '二回生後期にやっと買った姿見。本当にベストバイ'},
    'has_sentaku': {name: '洗濯カゴ',image: 'game-image/item_sentaku.jpg',desc: '新生活と同時に買ったが正直ダサいから買い換えたい。けど捨てるには使いやすい' },
    'has_kaban': { name: '通学用カバン', image: 'game-image/item_kaban.jpg', desc: '通学に使うかばん。シンプルイズベスト' },
    'has_amplifier': { name: 'ベースアンプ', image: 'game-image/item_amplifier.jpg', desc: '近所迷惑にならないよう音量は控えめにと考えながら。普通に音を出している' },
    'has_bass': { name: '愛用のベース', image: 'game-image/item_bass.jpg', desc: 'やめたりやったり継続的に練習ができないため一向に上手くならない' },
    'has_closet': { name: 'クローゼット', image: 'game-image/item_closet.jpg', desc: '主にアウターがかかっている。黒ばっかで色味に欠けている' },
    'has_sikisi': { name: 'サイン色紙',image: 'game-image/item_sikisi.jpg',desc: 'ジャンプの抽選で当選した色紙、早く連載して先生'  },
    'has_cds': {name: 'CDコレクション', image: 'game-image/item_cds.jpg', desc: 'サブスク時代にあえて円盤で持っておきたい名盤たち。逆張りの賜物。' },
    'has_kihon': { name: '基本情報の参考書', image: 'game-image/item_kihon.jpg', desc: '分厚い技術書。買う前に一回読んだだけ。折り目はまだない' },
    'has_pikachu': { name: 'ピカチュウ', image: 'game-image/item_pikachu.jpg', desc: '衝動買いしたキモすぎるピカチュウ。部屋を守ってくれている' }
    
};

/* ▼ 1. アイテムを見つけた時の処理（セーブして、詳細を表示） */
function findItem(key) {
    // 1. セーブする
    localStorage.setItem(key, 'true');
    
    // 2. 詳細画面を表示する
    showItemDetail(key);

    // ▼ 3. 【追加！】「これで全部揃った？」と確認する
    checkAllItemsFound();
}

/* ▼ 2. 詳細ポップアップを表示する関数 */
function showItemDetail(key) {
    // 図鑑データを取得
    const item = itemData[key];
    if (!item) return; // データがなければ何もしない

    // 画面の中身を書き換える
    document.getElementById('detail-img').src = item.image;
    document.getElementById('detail-name').innerText = item.name;
    document.getElementById('detail-desc').innerText = item.desc;

    // ポップアップを表示する（hiddenクラスを消す）
    document.getElementById('item-detail-modal').classList.remove('hidden');
}

/* ▼ 3. コレクション画面を開く処理 */
function openCollection() {
    // ★ここを修正！ style.display ではなく classList を使う
    document.getElementById('collection-modal').classList.remove('hidden');

    // 全アイテムのチェックを一気に行う
    checkItemState('has_pc', 'slot-pc');
    checkItemState('has_plant', 'slot-plant');
    checkItemState('has_mouse', 'slot-mouse');
    checkItemState('has_cup', 'slot-cup');
    checkItemState('has_cd', 'slot-cd');
    checkItemState('has_manga', 'slot-manga');
    checkItemState('has_wax', 'slot-wax');
    checkItemState('has_bag1', 'slot-bag1');
    checkItemState('has_bag2', 'slot-bag2');
    checkItemState('has_mirror', 'slot-mirror');
    checkItemState('has_kutusita', 'slot-kutusita');
    checkItemState('has_poster', 'slot-poster');
    checkItemState('has_books', 'slot-books');
    checkItemState('has_TV', 'slot-TV');
    checkItemState('has_okimono', 'slot-okimono');
    checkItemState('has_miku', 'slot-miku');
    checkItemState('has_temari', 'slot-temari');
    checkItemState('has_sugatami', 'slot-sugatami');
    checkItemState('has_sentaku', 'slot-sentaku');
    checkItemState('has_kaban', 'slot-kaban');
    checkItemState('has_amplifier', 'slot-amplifier');
    checkItemState('has_bass', 'slot-bass');
    checkItemState('has_closet', 'slot-closet');
    checkItemState('has_sikisi', 'slot-sikisi');
    checkItemState('has_cds', 'slot-cds');
    checkItemState('has_kihon', 'slot-kihon');
    checkItemState('has_pikachu', 'slot-pikachu');
}

/* ▼ 4. アイテムを持っているか確認して、アイコンを変える関数 */
function checkItemState(key, slotId) {
    const slotElement = document.getElementById(slotId);
    
    // HTMLにそのIDがない場合の安全策
    if (!slotElement) return;

    // もしアイテムを持っていたら...
    if (localStorage.getItem(key) === 'true') {
        // 1. クラスを付け替える
        slotElement.classList.remove('locked');
        slotElement.classList.add('unlocked');
        
        // 2. 画像を「?」から「本物のアイテム画像」に変える
        const img = slotElement.querySelector('img');
        if (img && itemData[key]) {
            img.src = itemData[key].image; 
        }
    }
}

/* ▼ 5. 閉じる・リセット・ロック確認の関数たち */

// 詳細画面を閉じる（hiddenクラスをつける）
function closeDetail() { 
    document.getElementById('item-detail-modal').classList.add('hidden'); 
}

// コレクション画面を閉じる（hiddenクラスをつける）
function closeCollection() { 
    document.getElementById('collection-modal').classList.add('hidden'); 
}

// データリセット
function resetGame() { 
    localStorage.clear(); 
    location.reload(); 
}

// ロックされていなければ詳細を開く
function ifUnlocked(key) {
    if (localStorage.getItem(key) === 'true') {
        showItemDetail(key);
    } else {
        alert("まだ見つけていません！");
    }
}

/* ▼ 全アイテムを集めたかチェックする関数 */
function checkAllItemsFound() {
    // 1. itemDataにある「全アイテムのキー（名前）」をリスト化する
    const allKeys = Object.keys(itemData);
    let foundCount = 0;

    // 2. ひとつずつ「持ってるかな？」と確認する
    allKeys.forEach(key => {
        if (localStorage.getItem(key) === 'true') {
            foundCount++;
        }
    });

    // 3. コンソールに今の状況を表示（F12で見れます）
    console.log("現在: " + foundCount + " / " + allKeys.length);

    // 4. もし「見つけた数」と「全アイテム数」が同じなら…
    if (foundCount === allKeys.length) {
        console.log("コンプリート！おめでとう！");
        
        // HTMLにご褒美画面があるかチェック
        const modal = document.getElementById('complete-modal');
        if (modal) {
            modal.classList.remove('hidden'); // 隠すクラスを外して表示！
        } else {
            alert("エラー：HTMLに 'complete-modal' がありません！");
        }
    }
}

/* ▼ コンプリート画面を閉じる関数 */
function closeComplete() {
    document.getElementById('complete-modal').classList.add('hidden');
}
