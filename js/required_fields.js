$( document ).ready(function() {
    $(".rf").submit(function(e) {
        console.log('true');
        var form = $(this);
        $.ajax({
               type: "POST",
               url: url,
               data: form.serialize(),
               success: function(data){
                   alert(data);
               }
             });
        e.preventDefault();
    });
});

// (function($) {
// 
//     $(function() {
// 
//         $('.form form button').click(function() {
//             $('.wrapper-position .rfield[type="checkbox"]').each(function() {
//                 var checkElem = $(".wrapper-position .rfield:checked").length;
//                 console.log(checkElem);
//                 if (checkElem == 0) {
//                     console.log('Не выбрано нихуя');
//                 } else{
//                     console.log('Выбрано что то');
//                 }
//             });
//         });
// 
//         $('.rf').each(function() {
//             var form = $(this),
//                 btn = form.find('.btn_submit');
// 
//             form.find('.rfield').addClass('empty_field');
// 
//             // Функция проверки полей формы
//             function checkInput() {
// 
//                 form.find('.rfield').each(function() {
//                     if ($(this).is(':checkbox')) {
//                         var checkBox = $(this);
//                         if (checkBox.is(':checked')) {
//                             checkBox.removeClass('empty_field')
//                         } else {
//                             checkBox.addClass('empty_field')
//                         }
//                     } else if ($(this).val() != '') {
//                         $(this).removeClass('empty_field');
//                     } else {
//                         $(this).addClass('empty_field');
//                     }
// 
//                 });
// 
//             }
// 
//             // Функция подсветки незаполненных полей
//             function lightEmpty() {
//                 form.find('.empty_field').css({
//                     'box-shadow': '0 0 0px 2px red'
//                 });
//                 form.find('.empty_field + span').css({
//                     'color': 'red'
//                 });
//                 setTimeout(function() {
//                     form.find('.empty_field').removeAttr('style');
//                     form.find('.empty_field + span').removeAttr('style');
//                 }, 3000);
//             }
// 
//             setInterval(function() {
//                 checkInput();
//                 var sizeEmpty = form.find('.empty_field').length;
//                 if (sizeEmpty > 0) {
//                     if (btn.hasClass('disabled')) {
//                         return false
//                     } else {
//                         btn.addClass('disabled')
//                     }
//                 } else {
//                     btn.removeClass('disabled')
//                 }
//             }, 500);
// 
//             btn.click(function() {
//                 if ($(this).hasClass('disabled')) {
//                     lightEmpty();
//                     return false
//                 } else {
//                     $(this).addClass('checked')
//                     form.submit();
//                 }
//             });
// 
//         });
// 
//     });
// 
// })(jQuery);

//Phone mask

$(function() {
    $(".masked-input").mask("7(999) 999-9999");
    $(".masked-input").focus(function() {
        $('.masked-input').focus()
    });
});
