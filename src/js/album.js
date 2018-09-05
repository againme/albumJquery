var gj = {};
gj.album = {};
gj.album.url = 'https://rallycoding.herokuapp.com/api/music_albums';

$(document).ready(function () {
    $("button").click(function () {
        $.ajax(
            {
                url: gj.album.url
                , async: false
                , success: function (result) {
                    gj.album.data = result;
                    $("#ResultData").html(JSON.stringify(gj.album.data));
                }
            });
    });
});