<template>
    <div id="tagcloud">
        <a title=" " target="_blank"
            style="left: 314.159px; top: 168.514px; font-size: 13px; opacity: 0.212714; z-index: 0;"
            v-for="item of this.Array_" v-bind:key="item">{{item}}</a>

    </div>
</template>
<script>
export default {
    data() {
        // eslint-disable-next-line
        return {
            Array_: []
        }
    },
    name: 'RotationEffectsComponent',
    props: {
        Data: Array,
        CycleTimes: Number,
    },
    mounted() {
        this.updata_()
    },
    methods: {
        updata_: function () {
            for (let i = 0; i < Number(this.CycleTimes); i++) {
                for(let j = 0; j <this.Data.length ; j++){
                    this.Array_.push(this.Data[j]);
                }
            }
        }
    }
}
import '../assets/css/oneui.css'
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