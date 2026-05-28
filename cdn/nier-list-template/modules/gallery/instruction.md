# Nier Gallery Module - User Guide

## 1. Introduction
The **Nier Gallery Module** is a standalone, lightweight image viewer built specifically for the Nier UI ecosystem. It supports 3D flip animations, responsive thumbnail strips, keyboard navigation, and native mobile touch-swiping.

**No audio is included by default**, allowing it to be purely visual and avoid conflicts with specific tool workflows.

## 2. Installation
To use this gallery in any of your tools, paste the following lines into your `<head>` tag. Ensure that **jQuery** and **FontAwesome** (for the icons) are already loaded on the page.

```html
<script src="[https://code.jquery.com/jquery-3.7.1.min.js](https://code.jquery.com/jquery-3.7.1.min.js)"></script>
<link rel="stylesheet" href="[https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css)">

<link rel="stylesheet" href="[https://hoanganhdinhngoc.github.io/cdn/nier-list-template/modules/gallery/nier-gallery.css](https://hoanganhdinhngoc.github.io/cdn/nier-list-template/modules/gallery/nier-gallery.css)">
<script src="[https://hoanganhdinhngoc.github.io/cdn/nier-list-template/modules/gallery/nier-gallery.js](https://hoanganhdinhngoc.github.io/cdn/nier-list-template/modules/gallery/nier-gallery.js)"></script>
```

## 3. How to Use
The module uses a "Plug & Play" structure. The DOM elements are injected automatically. You only need to call a simple JavaScript function to trigger the gallery.

Function signature:
```js
openNierGallery(imageArray, startingIndex)
```

**Example 1: Basic Usage (Array of URLs)**
```js
let myImages = [
    "[https://example.com/img1.jpg](https://example.com/img1.jpg)",
    "[https://example.com/img2.png](https://example.com/img2.png)",
    "[https://example.com/img3.webp](https://example.com/img3.webp)"
];

// Open gallery starting at the first image (Index 0)
openNierGallery(myImages, 0);
```
**Example 2: Using an Array of Objects**
If your tool already uses an array of file objects (like the PDF Tool), the gallery is smart enough to extract the URL if the object has a src, dataUrl, or url property.

```js
let uploadedFiles = [
    { name: "file1", dataUrl: "blob:url..." },
    { name: "file2", dataUrl: "blob:url..." }
];

// Open gallery starting at the second image
openNierGallery(uploadedFiles, 1);
```

**Example 3: Closing Gallery Programmatically**
The user can close the gallery by pressing 'ESC' or clicking outside the image. If you need to force close it via code:

```js
closeNierGallery();
```