const link = document.querySelectorAll("button");
link.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    const target = document.querySelector(e.target.dataset.link);
    const pos = target.getBoundingClientRect().top;
    //window.scrollTo({top: pos, behavior: "smooth"});
    //window.scrollBy({top: target.getBoundingClientRect().top, behavior: "smooth"});
    //target.scrollIntoView({behavior: "smooth", block: "start"});
  });
});
/*

**要素の位置とサイズに関する情報を取得するためのメソッド
要素のビューポート（画面）内での位置と寸法を表すオブジェクトを返す
element.getBoundingClientRect
戻り値
    x	要素の左端がビューポートの左端からどれだけ離れているか（同じ値: left）
    y	要素の上端がビューポートの上端からどれだけ離れているか（同じ値: top）
    width	要素の幅（border を含む）
    height	要素の高さ（border を含む）
    top	　　要素の上端がビューポートの上端からどれだけ離れているか
    right	要素の右端がビューポートの左端からどれだけ離れているか
    bottom	要素の下端がビューポートの上端からどれだけ離れているか
    left	要素の左端がビューポートの左端からどれだけ離れているか

**ページ全体のスクロール位置(Y軸方向)を取得
基準: ページの上端（スクロールされていないときは 0）
別名: window.scrollY（ほぼ同じ値を返します）
使用場面: 現在のスクロール位置を取得する場合
window.pageYOffset
window.pageXOffset
window.scrollY
window.scrollX

**要素の高さ（ピクセル単位）を表す
内容を含む高さ（paddingを含むが、borderとmarginは含まない）
要素のスクロール可能な部分ではなく、表示されている部分の高さを取得
element.clientHeight
element.clientWidth

**要素の見た目の高さ（ピクセル単位）を取得するプロパティ
内容:
	•要素のコンテンツの高さ
	•要素の padding
	•要素の border
含まれない: margin
要素の全体的な高さを取得するのに便利で
スクロールの有無や他のスタイル設定に関わらず、見た目通りの高さを返す
element.offsetHeight
element.offsetWidth

**パディングトップから、ボーダートップ
**ボーダーの幅
**要素のコンテンツ領域の上端から要素全体の上端までの距離（ピクセル単位）を取得するプロパティ
要素上端の「ボーダーの幅」を指し、paddingやmarginは含まない
element.clientTop
element.clientLeft

**要素のスクロール量（縦方向のスクロール位置）を取得または設定するプロパティ
値: 要素のスクロール量（ピクセル単位）
スクロール位置を取得する場合は scrollTop を読み取る
スクロール位置を指定する場合は scrollTop に値を代入
基準: 要素のスクロールコンテンツの上端。
element.scrollTop
element.scrollLeft

**要素のスクロール可能な横方向の幅（ピクセル単位）を取得
値: 要素の内容全体の幅
スクロールバーが表示されているかに関係なくコンテンツ全体の幅を返す
表示されていない部分も含めた幅が取得可能
基準: コンテンツ全体の幅（padding を含むが、border は含まない）
element.scrollWidth
element.scrollHeight

**要素の親要素の内側の上端から、その要素の外側の上端までの距離をピクセル単位で取得
基準: 最も近いオフセット親要素（position が relative, absolute, fixed のいずれかに設定された親要素）
値: 整数値（ピクセル単位）
用途: 要素の位置を計算したり、動的にスタイルを調整する際に使用する
element.offsetTop
element.offsetLeft

**ポインターイベント
**イベント発生時の要素の左上を基準に、Y軸方向のオフセット位置（ピクセル）を取得する
event.offsetY
event.offsetX

**イベント（例えばマウスやタッチイベント）が発生した際のビューポート（画面）上のY座標をピクセル単位で表す
基準: ブラウザのビューポートの上端
使用可能なイベント: マウスやタッチイベント（click, mousemove, touchstart など）
event.clientY
event.clientX

**イベントオブジェクト内のプロパティ
イベントが発生した位置のドキュメント全体を基準とした Y 座標を取得
基準: ドキュメントの上端（ページ全体のスクロール位置を含む）
使用場面: マウスやタッチイベント（click, mousemove, touchstart など）で、ページ全体の中でのイベントのY座標を取得
event.pageY
event.pageX

**イベントが発生した位置のスクリーン全体（ディスプレイ全体）の Y 座標を取得
基準: スクリーンの上端
用途: イベントが発生した位置を、ブラウザのビューポートを超えて、ディスプレイ全体での位置として取得したい場合
event.screenY
event.screenX

**イベントが発生した要素の最初のレイヤーを基準とした Y 座標を取得するプロパティ
基準: レイヤーの左上（通常は、最初のイベントターゲット要素の左上）
値: 数値（ピクセル単位）
用途: イベントが発生した位置を特定する場合や、イベントの位置に基づいて何かを操作する場合に使う
注意
	•標準ではないプロパティ: layerY は標準仕様ではなく、互換性の問題がある可能性がある
	•現代のブラウザでは、代わりに offsetY や clientY の使用が推奨
layerY
layerX
*/
