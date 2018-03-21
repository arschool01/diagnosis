/****************
 * 診断結果ページで使うJavaScript
 ****************/

/**
 * 診断結果ページで最初に呼ばれる処理
 */
let kaisi = () => {
	//今までの回答から、診断結果を取得
	let kekka = ars.toruKekka();

	// 診断結果を表示する
	miseruKekka(kekka);
};


/**
 * 診断結果を表示する処理
 * @param kekka 診断結果
 */

let miseruKekka = (kekka) => {
	// 診断結果の見出し
	let midasi = '';

	// 診断結果の画像
	let gazo = '';

	// 診断結果の説明文
	let setumei = '';

	//結果が1だった場合
	if(kekka == 1){
		midasi = '「やりたくないよ〜　疲れたよ〜」';
		gazo = 'img/a.jpg';
		setumei = 'あなたはとても宿題など勉強をやりたくなく、遊びたい気持ちでしょう。宿題をやっている合間に糖分をとったりするといいでしょう。';
	}
	//結果が2だった場合
	else if(kekka == 2){
		midasi = '安らかな気持ち';
		gazo = 'img/b.jpg';
		setumei = '今は本を読むといいでしょう。暴れず座りながら、寝ながらできる遊びがいいでしょう。';
	}
	//結果が3だった場合
	else if(kekka == 3){
		midasi = '将来のことを考えよう';
		gazo = 'img/c.jpg';
		setumei = 'あとでなにをするか。明日何をするか。をかんがえてみよう！';
	}
	//結果が4だった場合	
	else if(kekka == 4){
		midasi = 'なんの夢を見たいか考えてみよう！';
		gazo = 'img/d.jpg';
		setumei = 'なんのゆめをみたいか、考えていい眠りにつこう！寝坊しないようにね！';
	}

	//結果を画面に表示する

	// 診断結果の見出しを表示
	ars.miseruMidasi(midasi);

	// 診断結果の画像を表示
	ars.miseruGazo(gazo);

	// 診断結果の詳細を表示
	ars.miseruSetumei(setumei);

};