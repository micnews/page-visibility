var addEventListener = require('add-event-listener')
  , removeEventListener = require('add-event-listener').removeEventListener

  , isBoolean = function (val) { return typeof(val) === 'boolean' }

  , polyfill = function (_callback) {
      var called = false
        , callback = function (visible) {
            if (called) return
            called = true
            removeEventListener(document, 'mousemove', onmousemove)
            _callback(visible)
          }
        , onmousemove = function () {
          callback(true)
        }

      addEventListener(document, 'mousemove', onmousemove)

      setTimeout(function () {
        callback(false)
      }, 500)
    }

module.exports = function (callback) {

  var hidden = isBoolean(document.hidden) ?
    document.hidden :
    isBoolean(document.webkitHidden) ?
    document.webkitHidden : document.mozHidden

  // if we have access to html5-visibility api use that
  if (typeof(hidden) === 'boolean') {
    return process.nextTick(function () { callback(!hidden) })
  } else {
    // otherwise use a polyfill (based on moving the mouse)
    polyfill(callback)
  }
}