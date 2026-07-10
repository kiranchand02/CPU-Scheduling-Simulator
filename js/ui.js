(function ($) {
  $.fn.collapse = function (action) {
    return this.each(function () {
      var $el = $(this);
      if (action === "show") {
        $el.addClass("in");
      } else if (action === "hide") {
        $el.removeClass("in");
      } else if (action === "toggle") {
        $el.toggleClass("in");
      }
    });
  };

  $(document).on("click", '[data-toggle="dropdown"]', function (e) {
    e.preventDefault();
    e.stopPropagation();
    var $parent = $(this).closest(".dropdown");
    var isOpen = $parent.hasClass("open");
    $(".dropdown.open").removeClass("open");
    if (!isOpen) $parent.addClass("open");
  });

  $(document).on("click", function () {
    $(".dropdown.open").removeClass("open");
  });
})(jQuery);
