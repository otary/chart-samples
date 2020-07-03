<template>
    <div id="app-container">
        <div ref="pictorialBar" style="width: 150px; height: 30px;">

        </div>
    </div>
</template>

<script>
    import echarts from 'echarts';

    export default {
        name: "PictorialBarSamples",
        mounted() {
            const bar = echarts.init(this.$refs.pictorialBar);
            bar.setOption({
                grid: {
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0
                },
                tooltip: {
                    trigger: 'item',
                    textStyle: {
                        fontSize: 12
                    },
                    formatter: '整体完成进度:{c0}%'
                },
                xAxis: {
                    max: 100,  // 最大值
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    }
                },
                "yAxis": [{
                    "type": "category",
                    "inverse": false,
                    "axisLine": {
                        "show": true
                    },
                    "axisTick": {
                        "show": false
                    },
                    "axisLabel": {
                        show: false
                    }
                }
                ],
                "series": [{
                    // 实心
                    "type": "pictorialBar",
                    "symbol": 'rect',
                    "symbolRepeat": "fixed",
                    "symbolClip": true,
                    "symbolMargin": '40%',
                    "symbolSize": ['40%', '80%'],
                    "symbolPosition": "start",
                    "symbolBoundingData": 100,
                    "itemStyle": {
                        "normal": {
                            color: '#8fff6c'
                        }
                    },
                    "data": [30],  // 当前值
                    "z": 10
                }, {
                    // 空心
                    "type": "pictorialBar",
                    "itemStyle": {
                        "normal": {
                            opacity: 0.3,
                            color: 'rgba(23,125,217, 0.4)'
                        }
                    },
                    "label": {
                        "normal": {
                            show: true,
                            formatter: function (params) {
                                return params.value + ' %';
                            },
                            position: 'right',
                            offset: [5, 0],
                            // margin: 30,
                            textStyle: {
                                fontSize: 14
                            },
                        }
                    },
                    "animationDuration": 0,
                    "symbolRepeat": "fixed",
                    "symbolMargin": "40%",
                    "symbol": 'rect',
                    "symbolSize": ['40%', '80%'],
                    "symbolBoundingData": 100,
                    "symbolPosition": "start",
                    "data": [30],
                    "z": 5
                }
                ]
            })
        }
    }
</script>

<style scoped>

</style>