
function addItem() {
			
	var name = document.forms.FridgeList.name.value;
	var data = document.forms.FridgeList.data.value;
	if(data>0){
	localStorage.setItem(name, data);
	}
	doShowAll();
	
}
function RemoveItem() {
	var name = document.forms.FridgeList.name.value;
	document.forms.FridgeList.data.value = localStorage.removeItem(name);
	doShowAll();
}

function doShowAll() {
	if (CheckBrowser()) {
		var key = "";
		var list = "<tr><th>Item</th><th>Value</th></tr>\n";
		var i = 0;
		for (i = 0; i <= localStorage.length-1; i++) {
			key = localStorage.key(i);
			list += "<tr><td>" + key + "</td>\n<td>"
					+ localStorage.getItem(key) + "</td></tr>\n";
		}
		if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
			list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
		}
		document.getElementById('list').innerHTML = list;
	} else {
		alert('Cannot save Fridge list as your browser does not support');
	}
}

function CheckBrowser() {
	if ('localStorage' in window && window['localStorage'] !== null) {
		return true;
	} else {
			return false;
	}
}
