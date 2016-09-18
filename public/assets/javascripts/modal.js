document.addEventListener("DOMContentLoaded", function() {

  // Bind events to all modal links
  // Get the links
  var app_modal_links = document.getElementsByClassName("open_modal_link");
  // Iterate through the links
  Array.from(app_modal_links).forEach(function(app_modal_link){
    // Get the associated modal
    var modal_id = app_modal_link.getAttribute("data-modal-id");
    var modal = document.getElementById(modal_id);
    // When the user clicks the link, open the modal
    app_modal_link.onclick = function() { modal.style.display = "block"; };
  });
  // Bind events to all modals
  // Get the modals
  var modals = document.getElementsByClassName("modal");
  // Iterate through the links
  Array.from(modals).forEach(function(modal){
    // When the user clicks on close, close the modal
    var close_modal_link = modal.getElementsByClassName("close")[0];
    close_modal_link.onclick = function() { modal.style.display = "none"; };
    // When the user clicks anywhere outside of the modal, close it
    modal.onclick = function(event) {
      if (this == event.target) { this.style.display = "none" };
    }
  });

});
