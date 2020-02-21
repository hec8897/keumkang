const PageAddress = {
    Home:'index.html',
    complexGuide:{main:'complex.html'},
    salesGuide:{main:'salesguide.html'},
    filedGuide:{main:'filed.html'},
    etc:{blog:'https://blog.naver.com/jeongan333'}
}

let HeaderFooterNavRender = () => {
    const Header = document.querySelector('header')
    const Nav = document.querySelector('nav')
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
                                <li><a href=''>보도자료</a></li>
                                <li><a href=''>회사소개</a></li>
                                <li><a href=''>상담문의</a></li>
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
                            <div class="mo">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>`

    Nav.innerHTML = `<div class="wrap">
                            <div class="blank">
                            </div>
                            <ul class='head_ul'>
                                <li>
                                    <div class="line" id='nav_line1'></div>
                                    <ul>
                                        <li><a href=''>사업개요</a></li>
                                        <li><a href=''>분양위치도</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line2'></div>
                                    <ul>
                                        <li><a href=''>배치도</a></li>
                                        <li><a href=''>분양면적도</a></li>
                                        <li><a href=''>입주혜택</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line3'></div>
                                    <ul>
                                        <li><a href=''>조감도</a></li>
                                        <li><a href=''>현장사진</a></li>
                                        <li><a href=''>드론영상</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line4'></div>
                                    <ul>
                                        <li><a href=''>삼성관련</a></li>
                                        <li><a href=''>천안&middot;아산관련</a></li>
                                        <li><a href=''>부동산이슈</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line5'></div>
                                    <ul>
                                        <li><a href=''>인사말</a></li>
                                        <li><a href=''>미션&middot;비전</a></li>
                                        <li><a href=''>오시는길</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <div class="line" id='nav_line6'></div>
                                    <ul>
                                        <li><a href=''>상담 예약</a></li>
                                        <li><a href=''>입주의향서</a></li>
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
                                    <li><a href=''>보도자료</a></li>
                                    <li><a href=''>회사소개</a></li>
                                    <li><a href=''>상담문의</a></li>
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


const SettingLink = () =>{
    
}