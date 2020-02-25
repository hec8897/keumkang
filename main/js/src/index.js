const PageAddress = {
    Home: 'index.html',
    complexGuide: {
        main: 'complex.html'
    },
    salesGuide: {
        main: 'salesguide.html'
    },
    filedGuide: {
        main: 'filed.html'
    },
    News: {
        main: 'news.html'
    },
    About: {
        main: 'about.html'
    },
    Consult: {
        main: 'consult.html'
    },
    etc: {
        blog: 'https://blog.naver.com/jeongan333'
    }
}

let HeaderFooterNavRender = () => {
    const Header = document.querySelector('header')
    const Nav = document.querySelector('nav')
    const MoNav = document.getElementById('mo_nav')
    const Footer = document.querySelector('footer')

    Header.innerHTML = `<div class="wrap">
                            <h1>
                                <a href="${PageAddress.Home}">
                                    <img src="images/logo.png" alt="">
                                </a>
                            </h1>
                            <ul class='head_ul'>
                                <li><a href='${PageAddress.complexGuide.main}'>단지안내</a></li>
                                <li><a href='${PageAddress.salesGuide.main}'>분양안내</a></li>
                                <li><a href='${PageAddress.filedGuide.main}'>현장 이모저모</a></li>
                                <li><a href='${PageAddress.News.main}'>보도자료</a></li>
                                <li><a href='${PageAddress.About.main}'>회사소개</a></li>
                                <li><a href='${PageAddress.Consult.main}'>상담문의</a></li>
                            </ul>
                            <div class="head_caption">
                                    <img src="images/head_call.png" alt="head">
                            </div>
                            <div class='line'></div>
                            <div class="head_blog">
                                <a href='${PageAddress.etc.blog}' target='blank'>
                                    <img src="images/head_blog.png" alt="blog">
                                </a>
                            </div>
                            <div class="mo" onclick='MoNavFade()' id="nav-icon3">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>`
                       

    MoNavOn = false;
      

    MoNav.innerHTML = `<h4 id='tit_nav1'>단지안내</h4>
                        <ul id='mo_nav1' class="nav_mo none">    
                            <li><a href='${PageAddress.complexGuide.main}?section=1' class="active"><span>-</span> 사업개요</a></li>
                            <li><a href='${PageAddress.complexGuide.main}?section=2'><span>-</span>분양위치도</a></li>
                        </ul>
                        <h4 id='tit_nav2'>분양안내</h4>
                        <ul id='mo_nav2' class="nav_mo none">    
                            <li><a href='${PageAddress.salesGuide.main}?section=1'><span>-</span>배치도</a></li>
                            <li><a href='${PageAddress.salesGuide.main}?section=2'><span>-</span>분양면적도</a></li>
                            <li><a href='${PageAddress.salesGuide.main}?section=3'><span>-</span>입주혜택</a></li>
                        </ul>
                        <h4 id='tit_nav3'>현장 이모조모</h4>
                        <ul id='mo_nav3' class="nav_mo none">    
                            <li><a href='${PageAddress.filedGuide.main}?section=1'><span>-</span>조감도</a></li>
                            <li><a href='${PageAddress.filedGuide.main}?section=2'><span>-</span>현장사진</a></li>
                            <li><a href='${PageAddress.filedGuide.main}?section=3'><span>-</span>드론영상</a></li>
                        </ul>
                        <h4 id='tit_nav4'>보도자료</h4>
                        <ul id='mo_nav4' class="nav_mo none">    
                             <li><a href='${PageAddress.News.main}?section=1'><span>-</span>삼성관련</a></li>
                             <li><a href='${PageAddress.News.main}?section=2'><span>-</span>천안&middot;아산관련</a></li>
                             <li><a href='${PageAddress.News.main}?section=3'><span>-</span>부동산이슈</a></li>
                        </ul>
                        <h4 id='tit_nav5'>회사소개</h4>
                        <ul id='mo_nav5' class="nav_mo none">    
                            <li><a href='${PageAddress.About.main}?section=1'><span>-</span>인사말</a></li>
                            <li><a href='${PageAddress.About.main}?section=2'><span>-</span>미션&middot;비전</a></li>
                            <li><a href='${PageAddress.About.main}?section=3'><span>-</span>오시는길</a></li>
                        </ul>
                        <h4 id='tit_nav6'>상담안내</h4>
                        <ul id='mo_nav6' class="nav_mo none">    
                            <li><a href='${PageAddress.Consult.main}?section=1'><span>-</span>상담 예약</a></li>
                            <li><a href='${PageAddress.Consult.main}?section=2'><span>-</span>입주의향서</a></li>
                        </ul>

                        <div class="icons">
                            <img src="images/head_call.png"class='call' alt="head">
                            <span>|</span>
                            <img src="images/head_blog.png"class='blog' alt="blog">

                        </div>`
        $('#mo_nav').on('scroll touchmove mousewheel', function(event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
        $('#tit_nav1').click(function(){
            $(".nav_mo").slideUp(200)
            $("#mo_nav1").slideToggle(200)
        })
        $('#tit_nav2').click(function(){
            $(".nav_mo").slideUp(200)
            $("#mo_nav2").slideToggle(200)
        })
        $('#tit_nav3').click(function(){
            $(".nav_mo").slideUp(200)
            $("#mo_nav3").slideToggle(200)
        })
        $('#tit_nav4').click(function(){
            $(".nav_mo").slideUp(200)
            $("#mo_nav4").slideToggle(200)
        })
        $('#tit_nav5').click(function(){
            $(".nav_mo").slideUp(200)
            $("#mo_nav5").slideToggle(200)
        })
        $('#tit_nav6').click(function(){
            $(".nav_mo").slideUp(200)
            $("#mo_nav6").slideToggle(200)
        })


    Nav.innerHTML = `<div class="wrap">
                            <div class="blank">
                            </div>
                            <ul class='head_ul'>
                                <li>
                                    <div class="line" id='nav_line1'></div>
                                    <ul>
                                        <li><a href='${PageAddress.complexGuide.main}?section=1'>사업개요</a></li>
                                        <li><a href='${PageAddress.complexGuide.main}?section=2'>분양위치도</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line2'></div>
                                    <ul>
                                        <li><a href='${PageAddress.salesGuide.main}?section=1'>배치도</a></li>
                                        <li><a href='${PageAddress.salesGuide.main}?section=2'>분양면적도</a></li>
                                        <li><a href='${PageAddress.salesGuide.main}?section=3'>입주혜택</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line3'></div>
                                    <ul>
                                        <li><a href='${PageAddress.filedGuide.main}?section=1'>조감도</a></li>
                                        <li><a href='${PageAddress.filedGuide.main}?section=2'>현장사진</a></li>
                                        <li><a href='${PageAddress.filedGuide.main}?section=3'>드론영상</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line4'></div>
                                    <ul>
                                        <li><a href='${PageAddress.News.main}?section=1'>삼성관련</a></li>
                                        <li><a href='${PageAddress.News.main}?section=2'>천안&middot;아산관련</a></li>
                                        <li><a href='${PageAddress.News.main}?section=3'>부동산이슈</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line5'></div>
                                    <ul>
                                        <li><a href='${PageAddress.About.main}?section=1'>인사말</a></li>
                                        <li><a href='${PageAddress.About.main}?section=2'>미션&middot;비전</a></li>
                                        <li><a href='${PageAddress.About.main}?section=3'>오시는길</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line6'></div>
                                    <ul>
                                        <li><a href='${PageAddress.Consult.main}?section=1'>상담 예약</a></li>
                                        <li><a href='${PageAddress.Consult.main}?section=2'>입주의향서</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>`

    Footer.innerHTML = `<div class="wrap">
                                <h2><a href='${PageAddress.Home}'><img src="images/logo.png" alt="foot_logo"></a></h2>
                                <ul>
                                    <li><a href='${PageAddress.complexGuide.main}'>단지안내</a></li>
                                    <li><a href='${PageAddress.salesGuide.main}'>분양안내</a></li>
                                    <li><a href='${PageAddress.filedGuide.main}'>현장 이모저모</a></li>
                                    <li><a href='${PageAddress.News.main}'>보도자료</a></li>
                                    <li><a href='${PageAddress.About.main}'>회사소개</a></li>
                                    <li><a href='${PageAddress.Consult.main}'>상담문의</a></li>
                                </ul>
                                <p>대표:남재호 주소: 충남 아산시 음봉면 동암리349-9(탕정로 489-32)</p>
                                <p>전화번호:041-544-2488 팩스번호:0505-300-9606 이메일:jeongan333@naver.com</p>
                            </div>`

    $(document).ready(function () {
        $('.head_ul li:nth-child(1)').mouseover(function () {
            $('nav').slideDown(300)
            $("nav .line").css({
                'width': "00%"
            })
            $("#nav_line1").delay(100).css({
                'width': "100%"
            })
        })
        $('.head_ul li:nth-child(2)').mouseover(function () {
            $('nav').slideDown(300)
            $("nav .line").css({
                'width': "00%"
            })
            $("#nav_line2").delay(100).css({
                'width': "100%"
            })
        })
        $('.head_ul li:nth-child(3)').mouseover(function () {
            $('nav').slideDown(300)
            $("nav .line").css({
                'width': "00%"
            })
            $("#nav_line3").delay(100).css({
                'width': "100%"
            })
        })
        $('.head_ul li:nth-child(4)').mouseover(function () {
            $('nav').slideDown(300)
            $("nav .line").css({
                'width': "00%"
            })
            $("#nav_line4").delay(100).css({
                'width': "100%"
            })
        })
        $('.head_ul li:nth-child(5)').mouseover(function () {
            $('nav').slideDown(300)
            $("nav .line").css({
                'width': "00%"
            })
            $("#nav_line5").delay(100).css({
                'width': "100%"
            })
        })
        $('.head_ul li:nth-child(6)').mouseover(function () {
            $('nav').slideDown(300)
            $("nav .line").css({
                'width': "00%"
            })
            $("#nav_line6").delay(100).css({
                'width': "100%"
            })
        })
    })

}
function MoNavFade() {
    $('#mo_nav').fadeToggle(100);
    if($('#nav-icon3').attr('class') == 'mo'){
      $('html, body').css({'overflow-y': 'hidden', 'height': '100%'});
    }
    else{
      $('html, body').css({'overflow-y': 'scroll', 'height': 'auto'});
    }
    $('#nav-icon3').toggleClass('open');
  }

  function InsertData(){
    const reqName = document.getElementById('reqname');
    const reqStandard = document.getElementById('reqstandard');
    const reqPhone = document.getElementById('reqphone');
    const reqMemo = document.getElementById('reqmemo')

    let Data = {
        reqName:reqName.value,
        reqStandard:reqStandard.value,
        reqPhone:reqPhone.value,
        reqMemo:reqMemo.value
    }
    const baseURI = 'api/insert_consul.php'

    axios.post(`${baseURI}`, {Data})
    .then((result) => {
        console.log(result)
        if (result.data.phpResult == 'ok') {
            alert('상담신청완료')
        } 
    })
    .catch(err => console.log('Login: ', err));
}