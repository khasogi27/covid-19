function setDark(isDark) {
    var darkBtn = document.getElementById('darkBtn')
    var lightBtn = document.getElementById('lightBtn')

    if (isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none"
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
    }

    document.body.classList.toggle("darkmode");
}

//check localstorage
if (localStorage.getItem('preferredTheme') == 'dark') {
    setDark(true)
}

function setDark(isDark) {
    var darkBtn = document.getElementById('darkBtn')
    var lightBtn = document.getElementById('lightBtn')

    if (isDark) {
        lightBtn.style.display = "block"
        darkBtn.style.display = "none"
        //tambahan localstorage
        localStorage.setItem('preferredTheme', 'dark');
    } else {
        lightBtn.style.display = "none"
        darkBtn.style.display = "block"
        //tambahan localstorage
        localStorage.removeItem('preferredTheme');
    }

    document.body.classList.toggle("darkmode");
}



//Copyright
var message = "Copyright © 2020 ALL rights reserved"

function click() {
    if (event.button == 2) {
        alert(message);
        return false;
    }
}

function click(clk) {
    if (document.layers || document.getElementById && !document.all) {
        if (clk.which == 2 || clk.which == 3) {
            alert(message);
            return false;
        }
    }
}
if (document.layers) {
    document.captureEvents(Event.MOUSEDOWN);
    document.onmousedown = click;
} else if (document.all && !document.getElementById) {
    document.onmousedown = click;
}
document.oncontextmenu = new Function("alert(message);return false")