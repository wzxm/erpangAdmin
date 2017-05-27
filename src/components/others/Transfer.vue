<template>
    <el-row :gutter="20">
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <el-transfer v-model="value4" :props="{
                key: 'value',
                label: 'desc'
                }" :data="data3">
            </el-transfer>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="12">
            <el-transfer
                filterable
                :filter-method="filterMethod"
                filter-placeholder="请输入城市拼音"
                v-model="value2"
                :data="data2">
            </el-transfer>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        data() {
            const generateData3 = _ => {
                const data = [];
                for (let i = 1; i <= 15; i++) {
                    data.push({
                        value: i,
                        desc: `备选项 ${i}`,
                        disabled: i % 4 === 0
                    });
                }
                return data;
            };
            const generateData2 = _ => {
                const data = [];
                const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
                const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
                cities.forEach((city, index) => {
                data.push({
                    label: city,
                    key: index,
                    pinyin: pinyin[index]
                });
                });
                return data;
            };
            
            return {
                data2: generateData2(),
                value2: [],
                filterMethod(query, item) {
                    return item.pinyin.indexOf(query) > -1;
                },
                data3: generateData3(),
                value4: []
            };
        }
    };

</script>