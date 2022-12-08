<template>
    <div style="z-index: 9999">
        <el-row style="margin-top: 20px; margin-left: 10%;margin-right: 10%">
            <!--<el-col :span="4">
                <div style="margin-top: 10px; margin-left: 5%">
                    <el-dropdown @command = "handleCommand" >
                        <el-button class="logic-button" type="primary">
                            AND
                            <i class="el-icon-arrow-down el-icon--right">
                            </i>
                        </el-button>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="2">OR</el-dropdown-item>
                            <el-dropdown-item command="3">NOT</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </el-col>-->
          <el-col :span="3" >
            <div style="margin-top: 10px; margin-left: 10%" >
              <el-select v-model="value1" placeholder="AND" v-if="this.iftop!==1">
                <el-option
                    v-for="item in options1"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </div>
          </el-col>
          <el-col :span="1">
            <div class="box-word" >

            </div>
          </el-col>
            <el-col :span="13">
                <div style="margin-top: 10px; ">
                    <el-input v-model="input" placeholder="请输入该条目查询内容"></el-input>
                </div>
            </el-col>
            <el-col :span="1">
                <div class="box-word" >
                    in
                </div>
            </el-col>
            <el-col :span="6">
                <div style="margin-top: 10px; margin-left: 10%">
                    <el-select v-model="value" placeholder="请选择搜索条目" >
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                </div>
            </el-col>
            <!--<el-col :span="1">
                <i class="el-icon-delete" style="margin-top: 70%;margin-left: 70%;color:darkgray" ></i>
            </el-col>-->
        </el-row>
    </div>

</template>

<script>
export default {
  name: "filterBar",
  props:['logic','field','content','iftop'],
data() {
  return {
        input:"",
        logicstate:1,
        options: [{
          value: 'title',
          label: 'title'
        }, {
          value: 'abstract',
          label: 'abstract'
        }, {
          value: 'venue',
          label: 'venue'
        }, {
          value: 'publisher',
          label: 'publisher'
        }, {
          value: 'author',
          label: 'author'
        },{
          value: 'institution',
          label: 'institution'
        },
          {
            value: 'concept',
            label: 'concept'
          }],
        options1:[
          {
            value: 'and',
            label: 'AND'
          }, {
            value: 'or',
            label: 'OR'
          }, {
            value: 'not',
            label: 'NOT'
          },
        ],
        value: '',
        value1:'',
    };
  },
  methods: {
    handleClick() {
        alert('button click');
      },
  },
  created() {
     console.log("test props");
     console.log(this.content);
     this.value1 = this.logic;
     this.value = this.field;
     this.input = this.content;
  }
}
</script>

<style scoped>
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .logic-button{
    float: right;
    margin: auto;
    width: 98px;
    height: 42px;
    background: linear-gradient(94.95deg, #437FEC -43.46%, #4CD9ED 128.08%);
    box-shadow: 0px 0px 6px rgba(153, 166, 213, 0.57);
    border-radius: 19px;
    color: #FFFFFF;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    text-align: center;
    justify-content: center;
    align-items: center;
  }
  .box-word {
  margin-top: 20px;
  width: 43px;
  height: 30px;

  font-weight: 700;
  font-size: 17px;
  line-height: 30px;
  color: darkgray;
  text-align: center;
  letter-spacing: 0.01em;
}
</style>
