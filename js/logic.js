let rightNameElementId = "right-name";
let rightNameText = "Yori Garcia Rosario - Software Engineer";

function updateUi()
{
    scaleToWindowSize();
}

function scaleToWindowSize()
{
    if($(window).width() < 820)
    {
        $('#' + rightNameElementId).text("");
    }

    else
    {
        $('#' + rightNameElementId).text(rightNameText);
    }

    if($(window).width() < 367)
    {
        window.resizeTo($(window).width(), $(window).height());
    }

    console.log($(window).width());
}

$(document).ready(function() 
{
    updateUi();
    window.onresize= scaleToWindowSize;
});