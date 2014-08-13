# page-visibility

Discover if a document is visible or not.

When available we use the [Page Visibilty API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API). For older browsers we assume that a page is visible if the mouse is moved within a short timeframe.

The primary use case it to get knowledge about if a page is visible when the page just have been loade. To get visibility information after the page has been loaded, [window.onfocus](https://developer.mozilla.org/en-US/docs/Web/API/Window.onfocus) or [window.onblur](https://developer.mozilla.org/en-US/docs/Web/API/Window.onblur) can be used instead.

[![NPM](https://nodei.co/npm/page-visibility.png?downloads&stars)](https://nodei.co/npm/page-visibility/)

[![NPM](https://nodei.co/npm-dl/page-visibility.png)](https://nodei.co/npm/page-visibility/)

## Installation

```
npm install page-visibility
```

## Usage

```js
require('page-visibility')(function (visible) {
  console.log('the page is now ', visible)
})
```

## Licence

Copyright (c) 2014 Mic Network, Inc

This software is released under the MIT license:

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
