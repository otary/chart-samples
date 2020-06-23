<template>
    <!-- 中国地图 -->
    <div ref="chinaMapChart" id="chinaMapChart">

    </div>
</template>

<script>
    import echarts from 'echarts';
    import 'echarts/map/js/china.js' //引入中国数据地图
    import 'echarts/lib/component/geo'

    export default {
        name: "ChinaMapSamples",
        data() {
            return {
                chinaMapChart: null,

                /* 基础地图配置 */
                defaultMapOptions: {
                    title: {
                        text: '中国地图示例'
                    },
                    backgroundColor: '#ccc',  // 背景颜色
                    tooltip: {  // 鼠标移到图里面的浮动提示框
                        trigger: 'item',
                        formatter: '{b}: {c}'
                    },
                    dataRange: {
                        show: true,
                        min: 0,
                        max: 200,
                        range: [0, 199],
                        text: ['', ''],
                        realtime: false,
                        calculable: false,
                        startAngle: 0,
                       /* color: [],*/
                        orient: 'horizontal',
                        itemWidth: '15',
                        itemHeight: '120',
                        left: 50,
                        bottom: 20,
                        precision: 4 // 数据展示的小数精度
                    },
                    geo: { // 这个是重点配置区
                        map: 'china', // 中国地图
                        roam: true,
                        z: '2',
                        scaleLimit: {  // 缩放配置
                            min: 1.1,
                            max: 5
                        },
                        label: { // 地名文本配置
                            normal: {
                                show: true, // 是否显示对应地名，默认false
                                textStyle: {
                                    color: '#c3e5dc'  // 地名文本颜色
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderColor: 'rgba(0, 0, 0, 0.5)',  // 地图边界颜色
                                areaColor: '#0E4E96' // 地图背景色
                            },
                            emphasis: {  //鼠标滑过地图高亮的相关设置
                                /*areaColor: null,*/
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                borderWidth: 4,
                                borderColor: '#00a2ff',
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                    },
                    series: [{
                        type: 'scatter',
                        coordinateSystem: 'geo' // 对应上方配置
                    }, {
                        name: '', // 浮动框的标题
                        type: 'map',
                        geoIndex: 0,
                        data: []
                    }],
                    visualMap: [{
                        splitList: [
                            {start: 500},
                            {start: 101, end: 499},
                            {start: 0, end: 100},
                        ],
                        seriesIndex: [0],
                        show: false,
                        textStyle: {
                            color: '#fff'
                        },
                        hoverLink: false,
                        color: ['rgb(208,127,134)', 'rgb(28,84,145)', 'rgb(49,117,188)']
                    }],
                }
            }
        },
        mounted() {
            this.chinaMapChart = echarts.init(this.$refs.chinaMapChart);
            this.chinaMapChart.setOption(this.defaultMapOptions);
        }
    }
</script>

<style scoped lang="scss">
    #chinaMapChart {
        width: 100%;
        height: 800px;
    }
</style>