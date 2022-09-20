<template>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>MusicBox</title>
    </head>
    <div class="site-header" style="height:100%;box-sizing: border-box;">
        <nav class="nav_jsxs">
        </nav>
        <div class="box-text">
            <h1>攻玉工作室官方网站</h1>
            <h1 style="font-size:30px;font-weight: 600;color:aqua;cursor: pointer;"
                onclick="window.location.href = '/music'" target="_blank">点击进入</h1>
            <RotationEffectsComponent :Data="['666','琦琦']" :CycleTimes="50" ></RotationEffectsComponent>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {

    name: 'HelloWorld',
    props: {
        msg: String
    },
    components:{
        RotationEffectsComponent
    }
}
import '../assets/css/oneui.css'
import RotationEffectsComponent from "../components/RotationEffectsComponent.vue"
</script>
