$.fn.cardify = function() {
    $(this).wrap("<figure class='parent' style='position: relative; text-align: center;'></figure>");
    $("figure").append("<figcaption style='position: absolute; font-size: 40px; top: 0; width: 100%; vertical-align: middle;'></figcaption>");
    $(this).mouseover(function() {
        $(this).siblings("figcaption").text($(this).attr("alt"))
        $(this).siblings("figcaption").css("margin", this.clientHeight / 2 + "px 0")
        $(this).css("filter","blur(5px)")
    });
    $(this).mouseleave(function() {
        $(this).siblings("figcaption").text("");
        $(this).css("filter","blur(0px)")
    });
}

$("img").cardify()