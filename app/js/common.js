function askQuestion(t, e) { document.getElementById(t).value == e && NUM++ }

function playPuzzle() { NUM = 0, 
	askQuestion("kontr1", "гиперссылка"), 
	askQuestion("kontr2", "body"), 
	askQuestion("kontr3", "заголовок"), 
	askQuestion("kontr4", "td"), 
	askQuestion("kontr5", "tr"), 
	askQuestion("kontr6", "ol"), 
	askQuestion("kontr7", "form"), 
	askQuestion("kontr8", "i"), 
	askQuestion("kontr9", "b"), 
	askQuestion("kontr10", "тег"), 
	alert("Количество правильных ответов: " + NUM) }


$(function() { $(".js-faq-title").on("click", function(t) { t.preventDefault();
        var e = $(this),
            n = e.attr("href");
        e.hasClass("menu__item--active") || ("#question-1" != n && ($(".js-faq-content").slideUp(), $(".js-faq-title").removeClass("menu__item--active")), $(".js-faq-content").slideUp(), $(".js-faq-title").removeClass("menu__item--active")), e.toggleClass("active"), $(n).slideToggle() }), $(".arrow").click(function() {
        return $("html, body").animate({ scrollTop: $("header").height() - 20 }, "slow"), !1 }), $(".js-menu-title").on("click", function(t) { t.preventDefault();
        var e = $(this),
            n = e.attr("href");
        e.hasClass("menu__item--active") || ("#question-1" != n && ($(".js-menu-content").slideUp(), $(".js-menu-title").removeClass("menu__item--active")), $(".js-menu-content").slideUp(), $(".js-menu-title").removeClass("menu__item--active")), e.toggleClass("menu__item--active"), $(n).slideToggle() }), $("body").append("<button class='btn_up'/>"), $(".btn_up").on("click", function() { $("html, body").animate({ scrollTop: 0 }, 1e3) }), $(window).scroll(function() { $(this).scrollTop() > 200 ? $(".btn_up").addClass("active") : $(".btn_up").removeClass("active") }) });
var num;
