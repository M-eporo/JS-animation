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
height or width + padding + border = box-sizing: border-boxが基準位置
その基準から、ビューポートの端まで、または幅、高さ
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
スクロールバーは含まない
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
要素の一番上から、現在ブラウザに表示されている要素の一番上までのスクロール量
element.scrollTop
element.scrollLeft

**要素のスクロール可能な横方向の幅（ピクセル単位）を取得
値: 要素の内容全体の幅
スクロールバーが表示されているかに関係なくコンテンツ全体の幅を返す
表示されていない部分も含めた幅が取得可能
スクロールバーを含む
基準: コンテンツ全体の幅（padding を含むが、border は含まない）
element.scrollWidth
element.scrollHeight

**要素の親要素の内側の上端から、その要素の外側の上端までの距離をピクセル単位で取得
基準: 最も近いオフセット親要素（position が relative, absolute, fixed のいずれかに設定された親要素）
値: 整数値（ピクセル単位）
用途: 要素の位置を計算したり、動的にスタイルを調整する際に使用する
取得した要素のボーダーの外側から、最も近い位置指定祖先要素である offsetParent のパディング上辺までの距離
子要素のマージンの値 + 位置指定祖先要素のパディングの値
element.offsetTop
element.offsetLeft

**
positionの値が、relative,absolute,fixedのいずれかが設定された間近の位置指定要素
element.offsetParent

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

**wheel event
スクロール量
deltaY
deltaX
deltaZ

**touch eventの種類
touchstart
ユーザーがタッチ面のタッチ点に触れたときに発生
イベントのターゲットは、タッチが発生した場所の要素 (Element) 

touchend
ユーザーがタッチ面からタッチ点を削除したとき (すなわち、指やスタイラスをタッチ面から離したとき) に発生
これはタッチ点がタッチ面の端の外へ移動した場合にも発生する
例えば、ユーザーの指が画面の端よりも外に移動した場合
イベントのターゲットは、タッチ点が要素の外に移動した場合であっても、タッチ点に対応する touchstart イベントを受信したのと同じ要素 (Element) 
タッチ面から削除されたタッチ点所 (複数の場合を含む) は、 changedTouches 属性で示される TouchList でわかる

touchmove
ユーザがタッチ面でタッチ点を動かしたときに発生
イベントのターゲットは、タッチ点が要素の外に移動した場合であっても、タッチ点に対応する touchstart イベントを受信したのと同じ要素 (Element) 
このイベントはタッチ点の範囲、回転角、強さの属性が変化したときにも発生します。

touchcancel
タッチ個所が何らかの方法で取り消されたときに発生
このイベントが発生する理由はいくつか考えられる（正確な理由は端末ごと、およびブラウザーごとに異なる）。

タッチを取り消す、ある種のイベントが発生した。これは、操作中にモーダルなアラートがポップアップした場合に発生するでしょう。
タッチ個所がドキュメントウィンドウから外れて、ブラウザの UI 領域、プラグイン、あるいは他の外部コンテンツに移動した。
スクリーンがサポートする個数より多くのタッチ個所にユーザがタッチすると、TouchList の中でもっとも古い Touch が取り消される。

addEventListener() および preventDefault() の使用
重要なのは多くの場合、タッチイベントとマウスイベントの両方が送られることです (タッチに特化していないコードがユーザーと対話するため)。
タッチイベントを使用する場合は、 preventDefault() を呼び出してマウスイベントが送信されないようにしてください。
Chrome のバージョン 56 以降 (デスクトップ版, Android 版 Chrome, Android WebView) は例外で、 
passive オプションの touchstart および touchmove における既定値は true であり、 preventDefault() の呼び出しは効果がありません。
この動作を変更するためには、passive オプションを false に設定します。そうすると preventDefault() が仕様書通りに動作します。
リスナーを既定で passive と扱うことで、ユーザーがスクロール中にページのレンダリングがブロックされることを防いでいます。

**Touchコンストラクタ
Touch.identifier 読取専用
Touch オブジェクトの一意な識別子を返す。
あるタッチ点（指などによる）は表面を移動している間、同じ識別子を持ち続け、これにより同一のタッチを確実に終始追跡することができる

Touch.screenX 読取専用
画面の左端に対する、タッチ点の X 座標を返す

Touch.screenY 読取専用
画面の上端に対する、タッチ点の Y 座標を返す

Touch.clientX 読取専用
スクロールによるオフセットを含まない、ブラウザーのビューポートの左端に対する、タッチ点の X 座標を返す

Touch.clientY 読取専用
スクロールによるオフセットを含まない、ブラウザーのビューポートの上端に対する、タッチ点の Y 座標を返す

Touch.pageX 読取専用
文書の左端に対する、タッチ点の X 座標を返す
水平スクロールによるオフセットがある場合は、それを含むことが clientX と異なる

Touch.pageY 読取専用
文書の上端に対する、タッチ点の Y 座標を返す
垂直スクロールによるオフセットがある場合は、それを含むことが clientY と異なる

Touch.target 読取専用
タッチ点がタッチ面で最初に触れた位置にある Element を返す
タッチ点が要素の対話エリアの外に移動したり、文書上に存在しなくなっても同様

Touch.radiusX 読取専用
画面に触れた領域にもっとも接近して囲むような、楕円の X 方向の半径を返す
この値は、screenX と同じ尺度のピクセル数で表す

Touch.radiusY 読取専用
画面に触れた領域にもっとも接近して囲むような、楕円の Y 方向の半径を返す
この値は、screenY と同じ尺度のピクセル数で表す

Touch.rotationAngle 読取専用
ユーザがタッチ面に触れた領域をもっとも正確に覆うために、
radiusX および radiusY で表す楕円を時計回りに回転すべき角度（単位は度 (degree)）を返す

Touch.force 読取専用
ユーザがタッチ面に与えた圧力を、0.0 (最小圧力) から 1.0 (最大圧力) の間の float で返す

TouchEvent.altKey 読取専用
タッチイベントが発生したときに alt キーが押下されていたかを示す論理値です。

TouchEvent.changedTouches 読取専用
TouchList で、前回のタッチイベントと今回との間に接触状態が変化したそれぞれの接触点を表すすべての Touch オブジェクトです。

TouchEvent.ctrlKey 読取専用
タッチイベントが発生したときに control キーが押下されていたかを示す論理値です。

TouchEvent.metaKey 読取専用
タッチイベントが発生したときに meta キーが押下されていたかを示す論理値です。

TouchEvent.shiftKey 読取専用
タッチイベントが発生したときに shift キーが押下されていたかを示す論理値です。

TouchEvent.targetTouches読取専用
現在タッチ面に接触している、かつイベントのターゲットと同じ要素でタッチを始めた Touch オブジェクトすべてで構成される TouchList です。

TouchEvent.touches 読取専用
TouchList で、対象や状態の変化にかかわらず、この面における現在のすべての接触点を表すすべての Touch オブジェクトが入ります。


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
