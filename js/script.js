function openTabs(evt, tabsName) {

    var i, tabcontent, tablinks, get;

    tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.visibility = "inherit";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
     get = document.getElementById(tabsName);
    if (get.style.display == "block") {
      get.style.display = 'none';
       } else {
  		get.style.display = 'block';
              }
  evt.currentTarget.className += " active";
}
