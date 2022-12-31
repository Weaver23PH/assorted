$(document).ready(function () {   
  

      (function randomize() {
        var random = Math.floor(Math.random() * 1000)
        var $element = $("div.boxItem")
        $element.eq(random % $element.length).addClass("on")
        
        cleanUp()
        activate()
        setTimeout(randomize, 3000)
      })()
      

function cleanUp() {
    $($("div.boxItem:not(.on)")).each(function () {
        $(this).attr('class', 'boxItem')
    })
}

function activate() {
    $($("div.boxItem.on")).each(function () {
        var index = $(this).index()
        $(this).attr('class', 'boxItem redBox')
        $(this).prev().attr('class', 'boxItem pinkBox')
        $(this).next().attr('class', 'boxItem pinkBox')
        $(this).prev().prev().attr('class', 'boxItem tanBox')
        $(this).next().next().attr('class', 'boxItem tanBox')
        $(this).parent().prev().children().eq(index).attr('class', 'boxItem pinkBox')
        $(this).parent().next().children().eq(index).attr('class', 'boxItem pinkBox')
        $(this).parent().prev().children().eq(index).prev().attr('class', 'boxItem tanBox')
        $(this).parent().next().children().eq(index).next().attr('class', 'boxItem tanBox')
        $(this).parent().prev().children().eq(index).next().attr('class', 'boxItem tanBox')
        $(this).parent().next().children().eq(index).prev().attr('class', 'boxItem tanBox')
        $(this).parent().next().next().children().eq(index).attr('class', 'boxItem tanBox')
        $(this).parent().prev().prev().children().eq(index).attr('class', 'boxItem tanBox')
        $(this).removeClass('on')
    })
}
})
