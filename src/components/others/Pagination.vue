<template>
    <div>
        <v-pageTitle vtitle="Carousel"></v-pageTitle>

        <div class="block">
            <span class="demonstration">页数较少时的效果</span>
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
        </div>

        <br><br>
        <hr>
        <br>

        <div class="block">
            <span class="demonstration">大于 7 页时的效果</span>
            <el-pagination
                layout="prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>
        
        <br><br>
        <hr>
        <br>

        <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
        </el-pagination>

        <br><br>
        <hr>
        <br>

        <div class="block">
            <span class="demonstration">显示总数</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage1"
                :page-size="100"
                layout="total, prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>

        <br><br>
        <hr>
        <br>

        <div class="block">
            <span class="demonstration">调整每页显示条数</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage2"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="sizes, prev, pager, next"
                :total="1000">
            </el-pagination>
        </div>

        <br><br>
        <hr>
        <br>

        <div class="block">
            <span class="demonstration">直接前往</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="currentPage3"
                :page-size="100"
                layout="prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </div>

        <br><br>
        <hr>
        <br>

        <div class="block">
            <span class="demonstration">完整功能</span>
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
            </el-pagination>
        </div>

        <br><br>
        <hr>
        <br>

        <h4>Attributes</h4>
        <el-table
        :data="AttributesData"
        style="width: 70%">
            <el-table-column
                prop="event"
                label="参数"
                width="180">
            </el-table-column>
            <el-table-column
                prop="info"
                label="说明"
                width="180">
            </el-table-column>
            <el-table-column
                prop="type"
                label="类型">
            </el-table-column>
            <el-table-column
                prop="value"
                label="可选值">
            </el-table-column>
            <el-table-column
                prop="default"
                label="默认值">
            </el-table-column>
        </el-table>

        <br><br>
        <hr>
        <br>

        <h4>Events</h4>
        <el-table
        :data="tableData"
        style="width: 35%">
            <el-table-column
                prop="event"
                label="事件名称"
                width="180">
            </el-table-column>
            <el-table-column
                prop="info"
                label="说明"
                width="180">
            </el-table-column>
            <el-table-column
                prop="callback"
                label="回调参数">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';

    export default {
        components: {
            vPageTitle
        },
        data() {
            return {
                currentPage1: 5,
                currentPage2: 5,
                currentPage3: 5,
                currentPage4: 4,
                AttributesData: [{
                    event: 'small',
                    info: '是否使用小型分页样式',
                    type: 'Boolean',
                    value: '—',
                    default: 'false'
                }, {
                    event: 'page-size',
                    info: '每页显示条目个数',
                    type: 'Number',
                    value: '—',
                    default: '10'
                }, {
                    event: 'total',
                    info: '总条目数',
                    type: 'Number',
                    value: '—',
                    default: '—'
                }, {
                    event: 'page-count',
                    info: '总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性',
                    type: 'Number',
                    value: '—',
                    default: '—'
                }, {
                    event: 'current-page',
                    info: '当前页数，支持 .sync 修饰符',
                    type: 'Number',
                    value: '—',
                    default: '1'
                }, {
                    event: 'layout',
                    info: '组件布局，子组件名用逗号分隔',
                    type: 'String',
                    value: 'sizes, prev, pager, next, jumper, ->, total, slot',
                    default: "'prev, pager, next, jumper, ->, total'"
                }, {
                    event: 'page-sizes',
                    info: '每页显示个数选择器的选项设置',
                    type: 'Number[]',
                    value: '—',
                    default: '[10, 20, 30, 40, 50, 100]'
                }],
                tableData: [{
                    event: 'size-change',
                    info: 'pageSize 改变时会触发',
                    callback: '每页条数size'
                }, {
                    event: 'current-change',
                    info: 'currentPage 改变时会触发',
                    callback: '当前页currentPage'
                }]
            }
        },
        methods: {
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }

</script>

<style scoped>
    .item {
        margin-top: 10px;
        margin-right: 40px;
    }
</style>