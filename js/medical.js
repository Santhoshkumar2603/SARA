$(document).ready(function(){
    const listgrp=document.getElementById("lstgrp");
    
    var testlabs = (function() {
        var json = null;
        $.ajax({
          'async': false,
          'global': false,
          'url': "json/medical.json",
          'dataType': "json",
          'success': function(data) {
            json = data;
          }
        }); 
        return json;
      })();

    tollnums =  testlabs.data;
    tollnums.forEach(element => { 
    listgrp.innerHTML+=
    `<div class="list-group-item list-group-item-action flex-column align-items-start " style="padding-bottom: 20px;">
    <div class="d-flex w-100 justify-content-between">
      <h5><b>${element.name}</b></h5>
    </div>
    <br>
    <p class="mb-1"><i class="fas fa-phone fa-flip-horizontal" style="margin-right: 15px;"> </i>   ${element.location}</p>
    <p class="mb-1"><i class="fas fa-globe" style="margin-right: 15px;"> </i> ${element.type}</p>
    </div>`;
    });   
});