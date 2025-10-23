document.addEventListener('DOMContentLoaded', () => {

    const portfolio = document.getElementById('portfolio');

    // index.htmlにのみ反映させる処理
    if (portfolio) {
        // 作品データ
        const worksData = [
            {
                title: "ジャイロイド (Gyroid)",
                description: "ジャイロイドは、陰関数 sinxcosy + sinycosz + sinzcosx = 0 を3次元空間に表したものです。曲面によって分けられた空間同士は、どこまでも交わらないという特徴があります。この作品では、曲面に厚みをもたせるため表面周辺のわずかな範囲も含めて描画するようにしています。",
                images: [
                    { src: "images/work1/Gyroid.png", caption: "タイプ１" },
                    { src: "images/work1/Gyroid_glass.png", caption: "タイプ２" },
                    { src: "images/work1/Gyroid_wireframe.png", caption: "ワイヤーフレーム" },
                ],
                link: "https://ja.wikipedia.org/wiki/%E3%82%B8%E3%83%A3%E3%82%A4%E3%83%AD%E3%82%A4%E3%83%89",
                nodeImage: "images/work1/Gyroid_node.png"
            },
            {
                title: "メンガーのスポンジ (Menger Sponge)",
                description: "再帰的に処理を行っていくことで形成される、フラクタル構造をもった立体です。数学的には体積が0に収束し表面積は無限大に発散するという非常に面白い特徴を持っています。この作品では、描画時の処理を考慮して反復回数は5回に留めています。",
                images: [
                    { src: "images/work2/MengerSponge_soft.jpg", caption: "タイプ１" },
                    { src: "images/work2/MengerSponge_hard.jpg", caption: "タイプ２" },
                    { src: "images/work2/MengerSponge_enlarged.jpg", caption :"拡大写真"}
                ],
                link: "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%81%AE%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B8",
                nodeImage: "images/work2/MengerSponge_node.png"
            },
            {
                title: "アンビリック・トーラス (Umbilic Torus)",
                description: "辺と面がそれぞれ1つずつしか存在せず、面を辿っていくと元の場所に戻ってくるという不思議な構造をした立体です。立体の中心を原点に置いたとき、各座標の3成分をそれぞれ2つの媒介変数で表すことができます。有名な「メビウスの輪」に似ていますが、構造（トポロジーにおける向き付け可能性）が異なります。",
                images: [
                    { src: "images/work3/UmbilicTorus_03.jpg", caption: "タイプ１" },
                    { src: "images/work3/UmbilicTorus_04.jpg", caption: "タイプ２" },
                    { src: "images/work3/UmbilicTorus_03_wire.png", caption: "ワイヤーフレーム" },
                ],
                link: "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%83%93%E3%83%AA%E3%83%83%E3%82%AF%E3%83%BB%E3%83%88%E3%83%BC%E3%83%A9%E3%82%B9",
                nodeImage: "images/work3/UmbilicTorus_node.png"
            },
            {
                title: "オロイド (Oloid)",
                description: "2つの円の凸包で形成された立体です。転がるとき全ての面が地面に接するという面白い性質を持っています。重心が上下するので、うねうねと移動するのも見ていて興味深いです。表面積は、合わさっている円と同じ半径を持つ球の表面積に等しくなります。",
                images: [
                    { src: "images/work4/Oloid_01.png", caption: "タイプ１" },
                    { src: "images/work4/Oloid_02.png", caption: "タイプ２" },
                    { src: "images/work4/Oloid_02_wire.png", caption: "ワイヤーフレーム" },
                ],
                link: "https://ja.wikipedia.org/wiki/%E3%82%AA%E3%83%AD%E3%82%A4%E3%83%89",
                nodeImage: "images/work4/Oloid_node.png"
            },
            {
                title: "クレブシュ曲面 (Clebsch Surface)",
                description: "陰関数 x<sup>3</sup> + y<sup>3</sup> + z<sup>3</sup> + 1 - (x + y + z + 1)<sup>3</sup> = 0 で表される曲面です。曲面上に27本の直線が完全に含まれている特徴を持っています。一般に、複素数空間上ではどのような3次曲面にも27本の直線が存在しますが、この曲面はその全てが実数空間上に現れる（視認できる）特別な例として有名です。ジャイロイドと同じく、曲面に厚みを持たせるため生成時に一部加工を施しています。",
                images: [
                    { src: "images/work5/ClebschSurface_02.png", caption: "タイプ１" },
                    { src: "images/work5/ClebschSurface_03.png", caption: "タイプ２" },
                    { src: "images/work5/ClebschSurface_02_wire.png", caption: "ワイヤーフレーム" },
                ],
                link: "https://en.wikipedia.org/wiki/Clebsch_surface",
                nodeImage: "images/work5/ClebschSurface_node.png"
            },
        ];

        // 要素取得
        const mainImage = document.getElementById('main-image');
        const workTitle = document.getElementById('work-title');
        const workDescription = document.getElementById('work-description');
        const thumbnailContainer = document.getElementById('thumbnail-container');
        const imageCaption = document.getElementById('image-caption');
        const workLinkContainer = document.getElementById('work-link-container');
        const paginationDots = document.getElementById('pagination-dots');
        const nodeSection = document.getElementById('node-section');
        const nodeImage = document.getElementById('node-image');
        const prevWorkBtn = document.getElementById('prev-work');
        const nextWorkBtn = document.getElementById('next-work');
        const modal = document.getElementById('modal');
        const modalImage = document.getElementById('modal-image');
        const modalClose = document.getElementById('modal-close');

        let currentWorkIndex = 0;

        // 初期化
        worksData.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('pagination-dot');
            paginationDots.appendChild(dot);
        });

        // 関数定義
        function loadWork(index) {
            if (index < 0 || index >= worksData.length) return;
            currentWorkIndex = index;
            const work = worksData[index];

            Array.from(paginationDots.children).forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === index);
            });

            [mainImage, workTitle, workDescription, imageCaption, workLinkContainer, nodeSection].forEach(el => el.style.opacity = 0);

            setTimeout(() => {
                workTitle.textContent = work.title;
                workDescription.innerHTML = work.description;

                workLinkContainer.innerHTML = '';
                if (work.link) {
                    const linkEl = document.createElement('a');
                    linkEl.href = work.link;
                    linkEl.target = '_blank';
                    linkEl.rel = 'noopener noreferrer';
                    linkEl.className = 'inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors';
                    linkEl.innerHTML = `<span class="text-lg"><u>もっと知る (Wikipedia)</u></span><img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg" alt="Wikipedia Logo" width="30">`;
                    workLinkContainer.appendChild(linkEl);
                }

                if (work.nodeImage) {
                    nodeImage.src = work.nodeImage;
                    nodeSection.style.display = 'block';
                } else {
                    nodeSection.style.display = 'none';
                }

                mainImage.src = work.images[0].src;
                imageCaption.textContent = work.images[0].caption || '';
                mainImage.alt = work.title;

                thumbnailContainer.innerHTML = '';
                work.images.forEach((imageObj, imgIndex) => {
                    const thumb = document.createElement('img');
                    thumb.src = imageObj.src;
                    thumb.classList.add('thumbnail');
                    if (imgIndex === 0) thumb.classList.add('active');
                    thumb.addEventListener('click', () => switchImage(imageObj, thumb));
                    thumbnailContainer.appendChild(thumb);
                });

                [mainImage, workTitle, workDescription, imageCaption, workLinkContainer, nodeSection].forEach(el => el.style.opacity = 1);
            }, 300);
        }

        function switchImage(imageObj, activeThumb) {
            [mainImage, imageCaption].forEach(el => el.style.opacity = 0);
            setTimeout(() => {
                mainImage.src = imageObj.src;
                imageCaption.textContent = imageObj.caption || '';
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                activeThumb.classList.add('active');
                [mainImage, imageCaption].forEach(el => el.style.opacity = 1);
            }, 150);
        }

        function showNextWork() { loadWork((currentWorkIndex + 1) % worksData.length); }
        function showPrevWork() { loadWork((currentWorkIndex - 1 + worksData.length) % worksData.length); }

        // モーダル
        function closeModal() {
            modal.classList.add('hidden');
            modalImage.classList.remove('zoomed');
            modalImage.style.transform = 'scale(1)';
            modalImage.style.transformOrigin = 'center center';
        }

        // イベントリスナー
        nodeImage.addEventListener('click', () => {
            modalImage.src = nodeImage.src;
            modal.classList.remove('hidden');
        });

        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });

        modalImage.addEventListener('dblclick', function(e) {
            if (this.classList.toggle('zoomed')) {
                const rect = this.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                this.style.transformOrigin = `${x}% ${y}%`;
            } else {
                this.style.transformOrigin = 'center center';
            }
        });

        nextWorkBtn.addEventListener('click', showNextWork);
        prevWorkBtn.addEventListener('click', showPrevWork);

        // 初期読み込み
        loadWork(currentWorkIndex);
    }

    // 背景アニメーション
    const canvas = document.getElementById('bg-canvas');
    const ctx = canvas.getContext('2d');
    let hexagons = [];
    let ripples = [];
    let width, height;
    const hexRadius = 20; // ハニカムのサイズ
    const hexWidth = Math.sqrt(3) * hexRadius;
    const hexHeight = 2 * hexRadius;

    function initHoneycomb() {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
        hexagons = [];
        
        const vertSpacing = hexHeight * 3 / 4;
        const numCols = Math.ceil(width / hexWidth) + 2;
        const numRows = Math.ceil(height / vertSpacing) + 2;

        for (let row = -1; row < numRows; row++) {
            for (let col = -1; col < numCols; col++) {
                const x = col * hexWidth + (row % 2) * (hexWidth / 2);
                const y = row * vertSpacing;
                hexagons.push({ x, y });
            }
        }
    }

    function drawHexagon(x, y, color) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + Math.PI / 6;
            const hx = x + hexRadius * Math.cos(angle);
            const hy = y + hexRadius * Math.sin(angle);
            if (i === 0) {
                ctx.moveTo(hx, hy);
            } else {
                ctx.lineTo(hx, hy);
            }
        }
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 1; // 線の太さ
        ctx.stroke();
    }

    function animateHoneycomb() {
        ctx.clearRect(0, 0, width, height);

        hexagons.forEach(hex => {
            let maxBrightness = 0;
            ripples.forEach(ripple => {
                const dist = Math.sqrt(Math.pow(hex.x - ripple.x, 2) + Math.pow(hex.y - ripple.y, 2));
                const waveWidth = 50; // 波の幅
                const brightness = Math.max(0, 1 - Math.abs(dist - ripple.radius) / waveWidth) * ripple.opacity;
                if (brightness > maxBrightness) {
                    maxBrightness = brightness;
                }
            });

            // ベースカラー
            const baseR = 30, baseG = 30, baseB = 30;
            // ハイライトカラー
            const highR = 220, highG = 220, highB = 220;
            
            const r = Math.floor(baseR + (highR - baseR) * maxBrightness);
            const g = Math.floor(baseG + (highG - baseG) * maxBrightness);
            const b = Math.floor(baseB + (highB - baseB) * maxBrightness);

            drawHexagon(hex.x, hex.y, `rgb(${r}, ${g}, ${b})`);
        });

        for (let i = ripples.length - 1; i >= 0; i--) {
            const ripple = ripples[i];
            ripple.radius += 8; // 波の広がる速度
            ripple.opacity -= 0.05; // フェードアウト具合

            if (ripple.opacity <= 0) {
                ripples.splice(i, 1);
            }
        }

        requestAnimationFrame(animateHoneycomb);
    }
    
    // クリックで波を生成
    window.addEventListener('click', (e) => {
        ripples.push({
            x: e.clientX,
            y: e.clientY,
            radius: 0,
            opacity: 1,
        });
    });

    window.addEventListener('resize', initHoneycomb);
    initHoneycomb();
    animateHoneycomb();
});