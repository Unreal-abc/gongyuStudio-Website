<template>

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>MusicBox</title>
        <!-- <link href="./assets/css/site.min.css" rel="stylesheet">
        <link href="./assets/css/oneui.css" rel="stylesheet"> -->
    </head>
    <div class="site-header" style="height:100%;box-sizing: border-box;">
        <nav class="nav_jsxs">
        </nav>
        <div class="box-text">
            <h1> MusicBox</h1>
            <h1>Discover New Music Anytime</h1>
            <p>Welcom<br>
            </p>
            <p>Get songs and albums selected according to the artist and music type you are listening to.</p>

            <h1 style="font-size:30px;font-weight: 600;color:aqua;cursor: pointer;"
                onclick="window.location.href = '/music'" target="_blank">Click to enter the Music Box</h1>
            <div id="tagcloud">

                <a title=" " target="_blank"
                    style="left: 314.159px; top: 168.514px; font-size: 13px; opacity: 0.212714; z-index: 0;">Tiktok
                    hot</a><a title="  " target="_blank"
                    style="left: 255.036px; top: 105.601px; font-size: 13px; opacity: 0.20817; z-index: 1;">Popular
                    comments</a><a title=" " target="_blank"
                    style="left: 361.467px; top: 85.939px; font-size: 13px; opacity: 0.230526; z-index: 2;">梁静茹</a><a
                    title=" " target="_blank"
                    style="left: 388.757px; top: 143.131px; font-size: 13px; opacity: 0.283306; z-index: 3;">周杰伦</a><a
                    title=" " target="_blank"
                    style="left: 361.354px; top: 208.15px; font-size: 13px; opacity: 0.334943; z-index: 4;">DJ</a><a
                    title="" target="_blank"
                    style="left: 289.904px; top: 223.94px; font-size: 13px; opacity: 0.360281; z-index: 5;">Apple
                    Music</a><a title=" " target="_blank"
                    style="left: 224.873px; top: 181.109px; font-size: 13px; opacity: 0.358914; z-index: 6;">European
                    and American songs</a><a title=" " target="_blank"
                    style="left: 222.317px; top: 108.234px; font-size: 13px; opacity: 0.349561; z-index: 7;">QQ
                    music</a><a title=" " target="_blank"
                    style="left: 269.964px; top: 46.37px; font-size: 13px; opacity: 0.352826; z-index: 8;">王心凌</a><a
                    class="button" title="一言" target="_blank"
                    style="left: 338.352px; top: 26.0963px; font-size: 13px; opacity: 0.381034; z-index: 9;">林俊杰</a><a
                    title=" " target="_blank"
                    style="left: 372.538px; top: 55.4346px; font-size: 14px; opacity: 0.436471; z-index: 10;">BillBoard</a><a
                    title=" " target="_blank"
                    style="left: 412.239px; top: 119.781px; font-size: 14px; opacity: 0.511771; z-index: 11;">NetEase
                    cloud music</a><a title="" target="_blank"
                    style="left: 418.501px; top: 190.697px; font-size: 14px; opacity: 0.590764; z-index: 12;">Memories
                    of youth</a><a title=" " target="_blank"
                    style="left: 369.91px; top: 238.548px; font-size: 14px; opacity: 0.652961; z-index: 13;">邓紫棋</a><a
                    title=" " target="_blank"
                    style="left: 303.003px; top: 244.028px; font-size: 15px; opacity: 0.683667; z-index: 14;">SING女团</a><a
                    title=" " target="_blank"
                    style="left: 239.826px; top: 204.874px; font-size: 15px; opacity: 0.683665; z-index: 15;">在你的身边</a><a
                    title=" " target="_blank"
                    style="left: 204.808px; top: 136.078px; font-size: 15px; opacity: 0.668999; z-index: 16;">是你</a><a
                    title=" " target="_blank"
                    style="left: 222.711px; top: 63.9526px; font-size: 14px; opacity: 0.661661; z-index: 17;">Cool
                    dog music</a><a title=" " target="_blank"
                    style="left: 272.593px; top: 16.2472px; font-size: 15px; opacity: 0.680555; z-index: 18;">Electroacoustic</a><a
                    title=" " target="_blank"
                    style="left: 332.104px; top: 11.5993px; font-size: 15px; opacity: 0.737317; z-index: 19;">ACG</a><a
                    title=" " target="_blank"
                    style="left: 385.593px; top: 51.9236px; font-size: 15px; opacity: 0.834165; z-index: 20;">小城夏天</a><a
                    title=" " target="_blank"
                    style="left: 438.068px; top: 120.632px; font-size: 16px; opacity: 0.960083; z-index: 21;">LinkinPark</a><a
                    title=" " target="_blank"
                    style="left: 408.695px; top: 188.016px; font-size: 16px; opacity: 1.08688; z-index: 22;">Under
                    the secular aesthetic, the uncompromising queen Jolin Tsai</a><a title=" :" target="_blank"
                    style="left: 332.518px; top: 222.87px; font-size: 16px; opacity: 1.1755; z-index: 23;">BGM</a><a
                    title="" target="_blank"
                    style="left: 271.782px; top: 206.91px; font-size: 16px; opacity: 1.20171; z-index: 24;">Electroacoustic</a><a
                    title=" " target="_blank"
                    style="left: 215.494px; top: 146.329px; font-size: 16px; opacity: 1.18195; z-index: 25;">网易云音乐</a><a
                    title=" " target="_blank"
                    style="left: 245.069px; top: 73.7692px; font-size: 16px; opacity: 1.16717; z-index: 26;">Waka
                    Waka (This Time for Africa)</a><a title=" " target="_blank"
                    style="left: 297.926px; top: 35.1459px; font-size: 16px; opacity: 1.21316; z-index: 27;">The
                    cure</a><a title=" " target="_blank"
                    style="left: 344.119px; top: 60.6813px; font-size: 17px; opacity: 1.35366; z-index: 28;">Music</a><a
                    title=" " target="_blank"
                    style="left: 368.936px; top: 130.265px; font-size: 18px; opacity: 1.56113; z-index: 29;">Memories
                    of youth</a><a title=" " target="_blank"
                    style="left: 327.802px; top: 163.495px; font-size: 18px; opacity: 1.69418; z-index: 30;">喜马拉雅</a><a
                    title=" " target="_blank"
                    style="left: 277.624px; top: 104.061px; font-size: 18px; opacity: 1.67385; z-index: 31;">每日</a>
            </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
import '../assets/css/oneui.css'
// import '../assets/css/site.min.css'
import '../assets/js/a.js'
</script>
<style scoped>
#tagcloud {
    position: relative;
    width: 50%;
    min-width: 270px;
    height: 300px;
    margin: 20px auto 0;
    /* padding-bottom: 100px; */
}

#tagcloud a {
    position: absolute;
    top: 0px;
    left: 0px;
    font-family: Microsoft YaHei;
    color: #FFFFFF;
    font-weight: bold;
    text-decoration: none;
    padding: 3px 6px;
}

#tagcloud a:hover {
    border: 1px solid #eee;
    background: #0323f6;
    color: white;
    border-radius: 5px;
    text-decoration: none;
}

#tagcloud a:hover {
    color: #ffffff;
    letter-spacing: 2px;
}
</style>