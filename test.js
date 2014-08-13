var test = require('tape')
  , getVisibility = require('./page-visibility')

test('when window is visible', function (t) {
  getVisibility(function (visible) {
    t.equal(visible, true, 'visible should be true')
    t.end()
  })

  // manually dispatch a mousemove event to support older browsers
  // can not use new MouseEvent cause phantomjs don't support it
  var event = document.createEvent('MouseEvent')
  event.initMouseEvent('mousemove', false, false, null)

  document.dispatchEvent(event)
})

// only test this when we're running an older browser that don't support the HTML5 api
if (document.webkitHidden === undefined && document.mozHidden === undefined && document.webkitHidden === undefined)
  test('when window is not visible', function (t) {
    getVisibility(function (visible) {
      t.equal(visible, false, 'visible should be false')
      t.end()
    })
  })