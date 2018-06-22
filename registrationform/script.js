$(document).ready(function() {
  $('#logInBtn').click(function() {
    $('.user__forms_container').addClass('active__right');
    $('.user__forms_container').removeClass('active__left');
    $('.form__sign').addClass('form__sign_active');
    $('.form__log').addClass('form__log_active');
  });
  $('#signInBtn').click(function() {
    $('.user__forms_container').addClass('active__left');
    $('.user__forms_container').removeClass('active__right');
    $('.form__sign').removeClass('form__sign_active');
    $('.form__log').removeClass('form__log_active');
  });
})