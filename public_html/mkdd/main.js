var mk = {}
    
    mk.tabLinks = []
    mk.contentDivs = []

    mk.validate = function() {
      if (document.upload_form.email.value == "" || document.upload_form.name.value == "") {
	  window.alert("You need to complete the form before submitting.");
	  return false;
      } else {
	  window.alert("Thanks for entering the tournament. See you then!");
	  return true;
      }
    }

    mk.lendValidate = function() {
      if (document.lend_form.email.value == "" || document.lend_form.name.value == ""
	  || document.lend_form.equip.value == "") {
	  window.alert("You need to complete the form before submitting.");
	  return false;
      } else {
	  window.alert("Thank you so much for lending equipment. See you before the tournament!");
	  return true;
      }
    }

    mk.getHash = function(url) {
	var hashPos = url.lastIndexOf('#');
	return url.substring(hashPos + 1);
    }

    mk.showTab = function () {
	var selectedId = mk.getHash(this.getAttribute('href'));

	// Highlight the selected tab, and dim all others.
	// Also show the selected content div, and hide all others.
	for (var id in mk.contentDivs) {
	    if (id == selectedId) {
		mk.tabLinks[id].className = 'selected';
		mk.contentDivs[id].className = 'mkdd-tab';
	    } else {
		mk.tabLinks[id].className = '';
		mk.contentDivs[id].className = 'mkdd-tab-hidden';
	    }
	}

	// Stop the browser following the link
	return false;
    }

    mk.getFirstChildWithTagName = function(element, tagName) {
	for (var i = 0; element.childNodes[i]; i++ ) {
	    if (element.childNodes[i].nodeName == tagName) return element.childNodes[i];
	}
    }

    mk.init = function() {
	var percentage = window.screen.width / 24;
	document.body.style.fontSize = percentage.toString() + '%';
	// Grab the tab links and content divs from the page
	var tabListItems = document.getElementById('tabs').childNodes;
	for (var i = 0; tabListItems[i]; i++) {
	    if (tabListItems[i].nodeName == 'LI') {
		var tabLink = mk.getFirstChildWithTagName(tabListItems[i], 'A');
		var link = tabLink.getAttribute('href');
		if (link.lastIndexOf('#') > -1) {
		    var id = mk.getHash(tabLink.getAttribute('href'));
		    mk.tabLinks[id] = tabLink;
		    mk.contentDivs[id] = document.getElementById(id);
		}
	    }
	}

	// Assign onclick events to the tab links, and
	// highlight the first tab
	var i = 0;
	for (var id in mk.tabLinks) {
	    mk.tabLinks[id].onclick = mk.showTab;
	    mk.tabLinks[id].onfocus = function() { this.blur() };
	    if (i == 0) mk.tabLinks[id].className = 'selected';
	    i++;
	}

	// Hide all content divs except the first
	var i = 0;
	for (var id in mk.contentDivs) {
	    if (i != 0) mk.contentDivs[id].className = 'mkdd-tab-hidden';
	    i++;
	}
    };

