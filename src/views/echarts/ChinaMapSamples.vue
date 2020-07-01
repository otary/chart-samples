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
                    visualMap: { //颜色轴，可以根据数据点的值大小，展示不同的颜色，或用来展示地图块的不同颜色
                        type: 'piecewise',// 映射组件类型(1、piecewise--分段型;2、continuous--连续型)
                        calculable: true,
                        inRange: {
                            color: ["#3dda8e", "#eac736", "#d94e5d"]  //数据段范围颜色
                        },
                        textStyle: {
                            color: "#fff"
                        },
                        pieces: [  //地图左下角显示可视化
                            {min: 10000, color: '#D1241A'}, // 不指定 max，表示 max 为无限大（Infinity）
                            {min: 1000, max: 9999, color: '#F27152'},
                            {min: 100, max: 999, color: '#F28E52'},
                            {min: 10, max: 99, color: '#F2B252'},
                            {min: 1, max: 9, color: '#A5A5A5'},
                            {value: 0}, // 表示 value 等于 0 的情况
                        ]
                    },
                    geo: { // geo配置方式
                        map: 'china', // 中国地图
                        roam: true, // 是否可以点击鼠标、滚轮缩放
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
                                areaColor: 'red',
                                shadowOffsetX: 0,
                                shadowOffsetY: 0,
                                shadowBlur: 20,
                                borderWidth: 0,
                                borderWidth: 4,
                                borderColor: '#00a2ff',
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        regions: [{ // 对不同地区给予不同的颜色
                            name: '福建',
                            itemStyle: {
                                normal: {
                                    areaColor: '#fbd8f3'
                                }
                            }
                        },{
                            name: '湖北',
                            itemStyle: {
                                normal: {
                                    areaColor: '#73b323'
                                }
                            }
                        }]
                    },
                    series: [{  // 气泡
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'pin',
                        symbolSize: 50,
                        hoverAnimation: true,
                        data: [{
                            value: [113.54909,22.198951]
                        }]
                    }, {  // 圆点
                        name: '点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'circle',
                        symbolSize: 50,
                        hoverAnimation: true,
                        itemStyle: {
                            normal: {
                                color: '#99cbfc'
                            }
                        },
                        data: [{
                            value: [119.767413,33.041544]
                        }]
                    },{  // 点扩散效果
                        name: '点',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        rippleEffect: {
                            scale: 10,
                            brushType: "stroke"
                        },
                        hoverAnimation: true,
                        data: [{
                            value: [116.617345,39.8938430000001]
                        }]
                    }, {  // 图片
                        name: '图片点',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        markPoint: {
                            // symbolOffset: [0, '-60%'],
                            // 此数据源为定位点数据
                            data: [{
                                name: "图片点",
                                value: '',
                                symbol: 'image://https://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1593597287&t=cf74fea4f329a9a082a249010296d82a',
                                symbolSize: 50, // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                                coord: [119.88, 29.93] //必须加坐标
                            },{
                                name: "图片点",
                                value: '',
                                symbol: 'image://https://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1593597287&t=cf74fea4f329a9a082a249010296d82a',
                                symbolSize: 50, // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                                coord: [129.88, 49.93] //必须加坐标
                            }],
                        },
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 9
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: '#F62157', //标志颜色
                                borderWidth: 10,
                                label: {
                                    show: false
                                },
                                borderColor: 'red',
                                borderRadius: 190
                            },
                            emphasis: {
                                borderColor: '#1e90ff',
                                borderWidth: 20,
                                label: {
                                    show: true
                                }
                            }
                        },
                        effect: {
                            show: true,
                            shadowBlur: 0
                        }
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