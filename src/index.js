import './sass/styles.scss';
import $ from 'jquery';

console.log("hey!");
$(document).ready(function(){
  $(".h1").click(function(){
    alert("yep");
  });
})
