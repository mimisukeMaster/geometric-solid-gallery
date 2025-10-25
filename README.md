# 生成立体造形展 | Geometric Solid Gallery
[<img src="https://img.shields.io/github/stars/mimisukeMaster/geometric-solid-gallery?&logo=github">](https://github.com/mimisukeMaster/geometric-solid-gallery/stargazers)
[<img src="https://img.shields.io/badge/issues-welcome-green">](https://github.com/mimisukeMaster/geometric-solid-gallery/issues)
[<img  src="https://img.shields.io/hexpm/l/plug?color=red&logo=apache">](https://www.apache.org/licenses/)<br>
[<img src="https://img.shields.io/badge/deployed%20to-Vercel-brightgreen?logo=vercel">](https://github.com/mimisukeMaster/geometric-solid-gallery/deployments)
<img src="https://img.shields.io/github/repo-size/mimisukeMaster/geometric-solid-gallery?logo=gitlfs&color=ff69b4">
[<img src="https://img.shields.io/static/v1?label=&message=Open%20in%20Visual%20Studio%20Code&color=007acc&style=flat">](https://github.dev/mimisukeMaster/geometric-solid-gallery)

CG制作ソフト「Blender」のジオメトリノード機能を用いて生成した、数学的な立体造形を鑑賞できるギャラリーサイトです。

This is a gallery site where you can appreciate mathematical and geometric solids generated using the Geometry Nodes feature of the 3D CG software Blender.

## Overview

このサイトは、Blenderのジオメトリノードを用いて動的に生成した立体造形作品を紹介するものです。
作品の持つ構造的な美しさや、背景にある数学的な特徴について、Wikipediaへのリンクと共に解説しています。

各立体作品の形状は、3Dビューワーで三次元的にに確認できるようになっています。また、生成するために実際に組んだジオメトリノードの構成も公開しており、誰でも同じ立体を再現できるようになっています。

## Demo

[https://geometric-solid-gallery.vercel.app/](https://geometric-solid-gallery.vercel.app/)

## Features

- インタラクティブなギャラリー: 作品の画像をクリックで切り替えたり、前後の作品に移動したりできます。また、3Dビューワーでの各立体の視点操作、ノード画像の拡大操作ができます。
- 作品解説: 各立体の特徴や、元となる数式についての簡単な解説を掲載しています。
- 3Dビューワーモード: Three.jsを用いて、立体の360°回転、拡大、縮小が行えます。
- ジオメトリノード表示: 作品の生成に使用したノード構成を画像で確認できます。
- レスポンシブデザイン: デスクトップ、タブレット、モバイルなど、様々なデバイスで閲覧できます。
- 背景アニメーション: Canvas APIを利用した、インタラクティブなハニカム模様の背景アニメーション。

## Gallery Works

現在、以下の5つの作品を展示しています。

1.  ジャイロイド (Gyroid)
2.  メンガーのスポンジ (Menger Sponge)
3.  アンビリック・トーラス (Umbilic Torus)
4.  オロイド (Oloid)
5.  クレブシュ曲面 (Clebsch Surface)

## Technologies Used
- フロントエンド (Frontend): 

    <img src="https://img.shields.io/badge/-HTML-333.svg?logo=html5&style=flat"> <img src="https://img.shields.io/badge/-CSS-ff69b4.svg?logo=html&style=flat"> <img src="https://img.shields.io/badge/Javascript-276DC3.svg?logo=javascript&style=flat">

- フレームワーク・ライブラリ (Frameworks/Libraries):

    <img src="https://img.shields.io/badge/-Tailwind CSS-33339F.svg?logo=Tailwindcss&style=flat"> <img src="https://img.shields.io/badge/-Google Fonts-e0ffff.svg?logo=googlefonts&style=flat"> <img src="https://img.shields.io/badge/-Three.js-fff.svg?logo=three.js&logoColor=black&style=flat">
- 作品制作 (Artwork):

    <img src="https://img.shields.io/badge/-Blender-2b4b9a.svg?logo=Blender&style=flat">

## Setup

リポジトリをクローンした後、ブラウザで `index.html` ファイルを開くだけで閲覧できます。

```bash
git clone https://github.com/mimisukeMaster/geometric-solid-gallery.git
cd geometric-solid-gallery
```

## Author
みみすけ名人 mimisukeMaster

[<img src="https://img.shields.io/badge/-X-X.svg?style=flat-square&logo=X&logoColor=white&color=black">](https://x.com/mimisukeMaster)
[<img src="https://img.shields.io/badge/-ArtStation-artstation.svg?&style=flat-square&logo=artstation&logoColor=blue&color=gray">](https://www.artstation.com/mimisukemaster)

[**ポートフォリオサイトはこちら**](https://mimisukemaster.vercel.app/)

## License
*Geometric Solid Gallery* is under [Apache-2.0 licence](/LICENSE).