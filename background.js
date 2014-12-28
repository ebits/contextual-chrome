$(document).ready(function(){
    $("body").append('<input type="text" id="url" />');
});

// takes obj from onclick

var copyToClipboard = function(text) {
    console.log(text);
    var input_text = '"' + text.selectionText + '"' + ' - ' + text.pageUrl;
    var input = $("#url");
    input.val(input_text);
    input.select();
    document.execCommand('copy', false, null);
    input.val('')
};

chrome.contextMenus.create({
    "title": "Citer",
    "contexts": ["all"],
    "onclick": function(info, tab){
        copyToClipboard(info);
    }
});
