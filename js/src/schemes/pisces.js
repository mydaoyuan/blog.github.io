$(document).ready(function () {
  var sidebarTop = $('.header-inner').height() + 10;

  var color = ['#7dbe9d' , '#b5caa0' , '#dc9fb4;' ,'#d0104c']

  $('#sidebar').css({ 'margin-top': sidebarTop }).show();

  document.getElementById('main').setAttribute('style','background-color:#fcfaf2')
});
