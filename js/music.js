var index = 0;
var li = $(".banner ul li")
var music_img = $(".music_on .music_img img")
var text = $(".music_on .music_text")
var prev = $(".music_on .music_btn .music_prev")
var play = $(".music_on .music_btn .music_play")
var next = $(".music_on .music_btn .music_next")
var mp3 = $(".music_on .mp3_audio")
var flag = false; // �Ƿ񲥷�
var hide = true; // �Ƿ�չ��
var src_re = /src=\"([^\'\"]*)\"/i;  // "a\b\c.png" [������˵����ź�˫����]

// �׸��ĵ� ȫ�ֱ���
// let pict_name = ""
let music_name = ""


li.click(function() {
    index = $(this).index();
    music_name = this.getAttribute("title")
    // alert(music_name)
    var text = this.innerHTML; // li �����img html����
    pict_name = text.match(src_re)[1]; // ͼƬ·��
    show()
    
});

function show() {
    chang_bg()  // �ı���
    chang_music_on_text() // �ĸ�������ͼƬ
    change_btn_title() // ��ͣ
    img_rotate() // ͼƬ��ת
    play_mp3() // ���Ÿ���
}

function chang_bg() {
    var text = li[index].innerHTML; // li �����img html����
    pict_name = text.match(src_re)[1]; // ͼƬ·��
    document.body.style.backgroundImage = "url(" +pict_name + ")";
}

function chang_music_on_text() {
    music_img.attr("src", pict_name)
    text.html(music_name)
}

function change_btn_title() {
    play.removeClass("music_play")
    play.addClass("music_pause")
    play.attr("title","��ͣ")
}

function img_rotate() {
    // ֹͣ����ͼƬ��ת
    li.children().removeClass("img_rotate")
    console.log("rotate:"+index)
    li.eq(index).children().addClass("img_rotate")
}

function play_mp3() {
    mp3.attr("src", li.eq(index).attr("datasrc"))
    mp3.get(0).play()
    flag = true
}

prev.click(function() {
    index--;
    if(index < 0) {
        index = li.length -1;
    }
    show()
})

play.click(function() {
    if(flag) {
        mp3.get(0).pause()
        li.eq(index).children().removeClass("img_rotate")
        play.removeClass("music_pause")
        play.addClass("music_play")
        flag = false;
    }else {
        mp3.get(0).play()
        li.eq(index).children().addClass("img_rotate")
        play.removeClass("music_play")
        play.addClass("music_pause")
        flag = true;
    }
})

next.click(function() {
    index++;
    if(index >li.length -1) {
        index = 0
    }
    show()
})

$(".music_hide").click(function() {
    if(hide) { // ԭ�������ص�
        $(this).removeClass("music_appe")
        $(".music_on").animate({"left":"0px"},1000)
        hide = false;
    }else {
        $(this).addClass("music_appe")
        $(".music_on").animate({"left":"-700px"},1000)
        hide = true;
    }
})