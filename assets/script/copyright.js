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