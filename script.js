document.addEventListener('DOMContentLoaded', () => {

    const portfolio = document.getElementById('portfolio');
    let modal, viewerModal;

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
                nodeImage: "images/work1/Gyroid_node.png",
                model: "models/work1/Gyroid.glb"
            },
            {
                title: "メンガーのスポンジ (Menger Sponge)",
                description: "再帰的に処理を行っていくことで形成される、フラクタル構造をもった立体です。数学的には体積が0に収束し表面積は無限大に発散するという非常に面白い特徴を持っています。この作品では、描画時の処理を考慮して反復回数は5回に留めています。<br>申し訳ありませんが、描画の負荷が重く「3Dで見る」は使用できません。",
                images: [
                    { src: "images/work2/MengerSponge_soft.jpg", caption: "タイプ１" },
                    { src: "images/work2/MengerSponge_hard.jpg", caption: "タイプ２" },
                    { src: "images/work2/MengerSponge_enlarged.jpg", caption :"拡大写真"}
                ],
                link: "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%B3%E3%82%AC%E3%83%BC%E3%81%AE%E3%82%B9%E3%83%9D%E3%83%B3%E3%82%B8",
                nodeImage: "images/work2/MengerSponge_node.png",
                model: null
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
                nodeImage: "images/work3/UmbilicTorus_node.png",
                model: "models/work3/UmbilicTorus.glb"
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
                nodeImage: "images/work4/Oloid_node.png",
                model: "models/work4/Oloid.glb"
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
                nodeImage: "images/work5/ClebschSurface_node.png",
                model: "models/work5/ClebschSurface.glb"
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
        const modalImage = document.getElementById('modal-image');
        const modalClose = document.getElementById('modal-close');
        const view3DButton = document.getElementById('view-3d-button');
        const work3DButtonContainer = document.getElementById('work-3d-button-container');
        const viewerCanvas = document.getElementById('viewer-canvas');
        const viewerClose = document.getElementById('viewer-close');
        const viewerLoader = document.getElementById('viewer-loader');
        modal = document.getElementById('modal');
        viewerModal = document.getElementById('viewer-modal');

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

            [mainImage, workTitle, workDescription, imageCaption, workLinkContainer, nodeSection, work3DButtonContainer].forEach(el => el.style.opacity = 0);

            setTimeout(() => {
                workTitle.textContent = work.title;
                workDescription.innerHTML = work.description;

                if (work.model != null) {
                    view3DButton.onclick = () => openViewerModal(work.model);
                    work3DButtonContainer.style.display = 'block';
                }
                else work3DButtonContainer.style.display = 'none';

                workLinkContainer.innerHTML = '';
                const linkEl = document.createElement('a');
                linkEl.href = work.link;
                linkEl.target = '_blank';
                linkEl.rel = 'noopener noreferrer';
                linkEl.className = 'inline-flex items-center gap-2 text-gray-300 hover:text-white transition-colors';
                linkEl.innerHTML = `<span class="text-lg"><u>もっと知る (Wikipedia)</u></span><img src="https://upload.wikimedia.org/wikipedia/commons/8/80/Wikipedia-logo-v2.svg" alt="Wikipedia Logo" width="30">`;
                workLinkContainer.appendChild(linkEl);

                nodeImage.src = work.nodeImage;
                nodeSection.style.display = 'block';

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

                [mainImage, workTitle, workDescription, imageCaption, workLinkContainer, nodeSection, work3DButtonContainer].forEach(el => el.style.opacity = 1);
                work3DButtonContainer.style.opacity = 1;
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

        function showNextWork() {
            loadWork((currentWorkIndex + 1) % worksData.length); 
        }

        function showPrevWork() { 
            loadWork((currentWorkIndex - 1 + worksData.length) % worksData.length); 
        }

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

        modal.addEventListener('click', (e) => { 
            if (e.target === modal) closeModal(); 
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); 
        });

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

        // Three.jsを用いた3Dビューワー設定の準備
        let scene, camera, renderer, modelGroup, controls;

        // 初期設定
        function initThree() {
            // 読込
            scene = new THREE.Scene();

            // カメラ設定
            camera = new THREE.PerspectiveCamera(
                50, viewerCanvas.clientWidth / viewerCanvas.clientHeight, 0.1, 1000);
            camera.position.z = 10;

            // レンダラー設定
            renderer = new THREE.WebGLRenderer({ canvas: viewerCanvas, antialias: true, alpha: true });
            renderer.setSize(viewerCanvas.clientWidth, viewerCanvas.clientHeight);
            renderer.setPixelRatio(window.devicePixelRatio);

            // ライト設定
            const hemisphereLight = new THREE.HemisphereLight( 0xffffff, 0xbbbbbb, 0.9 );
            scene.add(hemisphereLight);
            const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
            directionalLight.position.set(10, 10, 7.5);
            scene.add(directionalLight);

            // モデルを保持するグループ
            modelGroup = new THREE.Group();
            scene.add(modelGroup);

            // 視点操作のための変数
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true; // 滑らかに動くようにする
            controls.dampingFactor = 0.05;
        }

        // モデル読込
        function loadModel(modelPath) {
            viewerLoader.style.display = 'block';

            // 既存のモデルをクリア
            while(modelGroup.children.length > 0){ 
                modelGroup.remove(modelGroup.children[0]); 
            }

            // マテリアル設定
            const overrideMaterial = new THREE.MeshStandardMaterial({
                color: 0xcccccc,
                roughness: 0.5,
                metalness: 0.2,
                alpha: 1,
                doubleSided: true,
            });

            const loader = new THREE.GLTFLoader();
            loader.load(modelPath, (gltf) => {
                const model = gltf.scene;

                // モデルにマテリアル適用
                model.traverse((child) => {
                    if (child.isMesh) {
                        child.material = overrideMaterial;
                    }
                });

                // モデルを中央に配置しサイズを調整
                const box = new THREE.Box3().setFromObject(model);
                const center = box.getCenter(new THREE.Vector3());
                const size = box.getSize(new THREE.Vector3());
                const maxDim = Math.max(size.x, size.y, size.z);
                const scale = 5 / maxDim;

                model.position.sub(center.multiplyScalar(scale));
                model.scale.set(scale, scale, scale);

                modelGroup.add(model);
                viewerLoader.style.display = 'none';
            }, undefined, (error) => {
                console.error(error);
                viewerLoader.textContent = 'モデルの読み込みに失敗しました。';
            });
        }

        // 3Dビューワーの視点操作
        function animateViewer() {

            // モーダル非表示時は停止
            if (viewerModal.classList.contains('hidden')) return; 

            requestAnimationFrame(animateViewer);

            // OrbitControlsを更新
            controls.update();

            renderer.render(scene, camera);
        }

        // 3Dビューワーのモーダルを開く
        function openViewerModal(modelPath) {
            viewerModal.classList.remove('hidden');
            if (!renderer) {
                initThree();
            }
            // レンダラーのサイズを更新
            renderer.setSize(viewerCanvas.clientWidth, viewerCanvas.clientHeight);
            camera.aspect = viewerCanvas.clientWidth / viewerCanvas.clientHeight;
            camera.updateProjectionMatrix();
            
            controls.reset(); // カメラ位置をリセット
            modelGroup.rotation.set(0, 0, 0); // モデルの回転をリセット
            
            loadModel(modelPath);
            animateViewer();
        }

        // 3Dビューワーのモーダルを閉じる
        function closeViewerModal() {
            viewerModal.classList.add('hidden');
            viewerLoader.textContent = '読み込み中...';
        }

        viewerClose.addEventListener('click', closeViewerModal);
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
        const isModalOpen = modal && !modal.classList.contains('hidden');
        const isViewerModalOpen = viewerModal && !viewerModal.classList.contains('hidden');
        if (isModalOpen || isViewerModalOpen) return;

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