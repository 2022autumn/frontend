<template>
    <div class="container-box">
        <topbar1></topbar1>
        <div style="width: 100% ;height: 8vh"></div>
        <div class="grid">
            <div></div>
            <div style="text-align: center">
                <div class="title-personal">
                    <div data-text="个人中心" class="title" />
                </div>
                <div class="left">
                    <div @click="activeIndex = 1" style="display:flex;justify-content:center;align-items:center;cursor: pointer;">
                        <span class="circular" :class="{actived:activeIndex == 1}"></span>
                        <div class="text1">账号信息</div>
                    </div>
                    <div @click="activeIndex = 2" style="display:flex;justify-content:center;align-items:center;margin-top:28px;cursor: pointer;">
                        <span :class="{actived:activeIndex == 2}" class="circular"></span>
                        <div class="text1">账号安全</div>
                    </div>
                    <div @click="activeIndex = 3" style="display:flex;justify-content:center;align-items:center;margin-top:28px;cursor: pointer;">
                        <span :class="{actived:activeIndex == 3}" class="circular"></span>
                        <div class="text1">收藏夹</div>
                    </div>
                    <div @click="activeIndex = 4" style="display:flex;justify-content:center;align-items:center;margin-top:28px;cursor: pointer;">
                        <span :class="{actived:activeIndex == 4}" class="circular"></span>
                        <div class="text1">个性化设置</div>
                    </div>
                    <div @click="activeIndex = 5" style="display:flex;justify-content:center;align-items:center;margin-top:28px;cursor: pointer;">
                        <span :class="{actived:activeIndex == 5}" class="circular last"></span>
                        <div class="text1">管理员界面</div>
                    </div>
                </div>
            </div>
            <div>
                <div v-show="activeIndex == 1" class="center">
                    <div style="display:flex;align-items:center">
                        <img src="../assets/Vector.png" alt="">
                        <span class="info-title">账户信息</span>
                    </div>
                    <div>
                        <div class="content grid1">
                          <img :src="this.photourl" alt="" v-if="this.ifedit===0" style="width: 10vw;height: 25vh;margin-left: -10vw">
                          <el-upload
                              v-if="this.ifedit===1"
                              :http-request="upload_img"
                              class="avatar-uploader"
                              action="123"
                              :show-file-list="false"
                              :on-success="handleAvatarSuccess"
                              :before-upload="beforeAvatarUpload"
                              style="margin-left: -6vw;margin-top: 3vh"
                          >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar">
                            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                          </el-upload>
                            <div v-if="this.ifedit===0">
                                <div class="info-text">用户名:张博皓</div>
                                <div class="info-text">个性签名:{{this.gexingqianming}}</div>
                                <div class="info-text">真实姓名:{{this.realname}}</div>
                                <div class="info-text">联系电话:{{this.phone}}</div>
                                <div class="info-text">Email:{{this.email}}</div>
                                <div class="info-text">研究领域:{{this.field}}</div>
                                <!--<div class="info-text">我的兴趣词：</div>-->
                            </div>
                          <div v-if="this.ifedit===1">
                            <div>
                            <div class="info-text" style="display: inline-block">用户名:</div>
                                <el-input
                                    type="text"
                                    placeholder="请输入用户名"
                                    v-model="name"
                                    maxlength="15"
                                    show-word-limit
                                    style="width: 15vw"
                                >
                                </el-input>
                            </div>
                            <div>
                            <div class="info-text" style="display: inline-block">个性签名:</div>
                              <el-input
                                  type="text"
                                  placeholder="请输入个性签名"
                                  v-model="gexingqianming"
                                  maxlength="15"
                                  show-word-limit
                                  style="width: 15vw"
                              >
                              </el-input>
                            </div>
                            <div>
                            <div class="info-text" style="display: inline-block">真实姓名:</div>
                              <el-input
                                  type="text"
                                  placeholder="请输入真实姓名"
                                  v-model="realname"
                                  maxlength="15"
                                  show-word-limit
                                  style="width: 15vw"
                              >
                              </el-input>
                            </div>
                            <div>
                            <div class="info-text" style="display: inline-block">联系电话:</div>
                              <el-input
                                  type="text"
                                  placeholder="请输入联系电话"
                                  v-model="phone"
                                  maxlength="15"
                                  show-word-limit
                                  style="width: 15vw"
                              >
                              </el-input>
                            </div>
                            <div>
                            <div class="info-text">Email:</div>
                              <el-input
                                  type="text"
                                  placeholder="请输入email"
                                  v-model="email"
                                  maxlength="30"
                                  show-word-limit
                                  style="width: 15vw"
                              >
                              </el-input>
                            </div>
                            <div>
                            <div class="info-text">研究领域:</div>
                              <el-input
                                  type="text"
                                  placeholder="请输入研究领域"
                                  v-model="field"
                                  maxlength="15"
                                  show-word-limit
                                  style="width: 15vw"
                              >
                              </el-input>
                            </div>
                            <!--<div class="info-text">我的兴趣词:</div>-->
                          </div>
                        </div>
                        <div style="text-align: center;margin-top: 6vh" v-if="this.ifedit===0">
                            <el-button icon="el-icon-edit" class="btn" size="medium " @click="inedit">编辑信息</el-button>
                        </div>
                      <div style="text-align: center;margin-top: 6vh" v-if="this.ifedit===1">
                        <el-button   class="btn" size="medium " @click="outedit">确认</el-button>
                      </div>
                    </div>
                </div>
                <div v-show="activeIndex == 2" class="center">
                    <div style="display:flex;align-items:center">
                        <img src="../assets/1a.png" alt="">
                        <span class="info-title">账号安全</span>
                    </div>
                    <div>
                        <div class="content2">
                            <div style="width: 100%">
                                <div class="change-password">修改密码</div>
                                <el-form size="small" label-position="left" label-width="120px">
                                    <el-form-item label="用户名：">
                                        <span class="admin">admin</span>
                                    </el-form-item>
                                    <el-form-item label="原密码：">
                                        <el-input
                                            type="text"
                                            placeholder="请输入原密码"
                                            v-model="oldpass"

                                        ></el-input>
                                    </el-form-item>
                                    <el-form-item label="新密码：">
                                        <el-input style="width: 100%"
                                                  type="text"
                                                  placeholder="请输入新密码"
                                                  v-model="newpass"
                                        ></el-input>
                                    </el-form-item>
                                    <!--<el-form-item label="确认新密码：">
                                        <el-input style="width: 100%"></el-input>
                                    </el-form-item>-->
                                </el-form>
                            </div>
                        </div>
                        <div style="text-align: center;margin-top: 6vh">
                            <el-button class="btn" size="medium " @click="resetpass">确定</el-button>
                        </div>
                    </div>
                </div>
                <div v-show="activeIndex == 3" class="center">
                    <div style="display:flex;align-items:center;justify-content:space-between">
                        <div style="display:flex;align-items:center">
                            <img src="../assets/Star.png" alt="">
                            <span class="info-title">收藏夹</span>
                        </div>
                        <el-button v-if="show1" icon="el-icon-plus" class="btn">新建</el-button>
                        <el-button v-else icon="el-icon-back" @click="show1 = !show1" class="btn">返回</el-button>
                    </div>
                    <div v-if="show1">
                        <div class="content2">
                            <div style="width: 100%">
                                <div v-for="item in 4" :key="item" class="item-3">
                                    <img src="../assets/image 1.png" alt="">
                                    <div>
                                        <div @click="show1 = !show1" class="aaa">收藏夹{{item}}</div>
                                        <div>
                                            <el-button size="mini" class="btn2">编辑</el-button>
                                            <el-button size="mini" class="btn2">删除</el-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div style="width: 100%">
                            <div v-for="item in 3" :key="item" class="item-4">
                                <div style="display: flex;align-items:center">
                                    <div class="text5">期刊</div>
                                    <div class="text6">疫情冲击下的2020年中国经济形势与政策选择</div>
                                </div>
                                <div style="display: flex;align-items:center;margin-top: 8px">
                                    <div class="text7" style="margin-right: 40px">作者</div>
                                    <div class="text7" style="margin: 0 40px">所属机构名称</div>
                                    <div class="text7" style="margin-left: 0 40px">发表时间</div>
                                </div>
                                <div style="display: flex;align-items:center;justify-content:space-between;margin-top: 8px">
                                    <div class="text8">标签/关键词</div>
                                    <div class="text8">标签/关键词</div>
                                    <div class="text8">标签/关键词</div>
                                    <div class="text9">“</div>
                                    <div class="text9">0次被引用</div>
                                    <div style="display: flex;align-items:center;" class="text9">
                                        <img src="../assets/Vector (1).png" alt="">
                                        0次收藏</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="activeIndex == 4" class="center">
                    <div style="display:flex;align-items:center;justify-content:space-between">
                        <div style="display:flex;align-items:center">
                            <img src="../assets/Star.png" alt="">
                            <span class="info-title">个性化设置</span>
                        </div>
                    </div>
                </div>
                <div v-show="activeIndex == 5" class="center">
                    <div style="display:flex;align-items:center;justify-content:space-between">
                        <div style="display:flex;align-items:center">
                            <img src="../assets/Rectangle 2619.png" alt="">
                            <span class="info-title">申请处理</span>
                        </div>
                    </div>
                    <div style="width: 80%;margin:0 10%">
                        <div v-for="item in 5" :key="item">
                            <div class="item-5">
                                <div style="flex: 1;display:flex;align-items: center">
                                    <img src="../assets/Avatar (1).png" alt="" />
                                    <span class="text-9">用户admin申请门户：XXXX</span>
                                </div>
                                <div style="flex: 1;display:flex;align-items: center;justify-content: flex-end">
                                    <el-button size="mini" icon="el-icon-menu" class="btn2">详情</el-button>
                                    <el-button size="mini" icon="el-icon-circle-check" class="btn2">同意</el-button>
                                    <el-button size="mini" icon="el-icon-circle-close" class="btn2">拒绝</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>

    </div>
</template>

<script>
import topbar1 from "@/components/topbar1";
export default{
    components:{topbar1},
    data(){
        return {
            activeIndex: 1,
            show1:true,
            ifedit:0,
          imageUrl: '',
          name:'',
          gexingqianming:'',
          realname:'',
          phone:'',
          email:'',
          field:'',
          userid:8,
          photourl:'',
          oldpass:'',
          newpass:'',
        }
    },
    methods:{
      resetpass(){
        this.$axios({//注意是this.$axios
          method:'post',
          url:'/user/pwd',
          data:{//post请求这里是data
            user_id:this.userid.toString(),
            password_old:this.oldpass,
            password_new:this.newpass,
          }
        }).then(
            res =>{
              console.log(res.data.status)
              if(res.data.status===200){
                this.$message({
                  type:"success",
                  message: "密码修改成功",
                  customClass:'messageIndex'
                })
              }
            }
        )
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
        console.log("上传成功!");
        //console.log(this.imageUrl);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      upload_img(file){
        const formData = new FormData();
        formData.append('Headshot', file.file);
        formData.append('user_id',this.userid);
        const config = {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
        }
        this.$axios.post('/user/headshot',formData,config).then(res =>{
          console.log(res.data)
          this.photourl = res.data.data.head_shot
           this.$message({
             type:"success",
             message: res.data.msg,
             customClass:'messageIndex'
           })
        })
      },
      inedit(){
        this.ifedit=1;
      },
      outedit(){
        this.$axios({//注意是this.$axios
          method:'post',
          url:'/user/mod',
          data:{//post请求这里是data
             email:this.email,
             fields:this.field,
             name:this.realname,
             phone:this.phone,
             user_id:this.userid.toString(),
             user_info:this.gexingqianming
          }
        }).then(
            res =>{
                console.log(res.data)
            }
        )
        this.ifedit=0;
        //this.get_data();
      },
      get_data(){
        this.$axios({//注意是this.$axios
          method:'get',
          url:'/user/info',
          params:{//get请求这里是params
            user_id:this.userid.toString()
          }
        }).then(
            response =>{
              console.log("得到个人信息")
              console.log(response.data);
              this.email=response.data.data.email;
              this.field = response.data.data.fields;
              this.realname = response.data.data.name;
              this.phone = response.data.data.phone;
              this.gexingqianming = response.data.data.user_info;
              this.photourl = response.data.data.head_shot
            }
        )
      }
    },
    created(){
       this.get_data();
    }
}
</script>

<style >
.container-box{
    background-image: url(../assets/base.png);
    background-size: 100%;
    position: relative;
    height: 100vh;
}
.title-personal{
    padding: 20px;
    height: 90px;
    border-radius: 16px;
    text-align: center;
    background: #ffffff;
}
.grid{
    display: grid;
    grid-template-columns: 2fr 2fr 6fr 2fr;
    justify-content: end;
}

.title {
	position: relative;
    padding: 10px;
    height: 70px;
    border-radius: 16px;
    border: 1px solid #cccccc;
}
.left{
    display: inline-block;
    margin-top: 20px;
    width: 80%;
    padding: 50px 20px;
    background-color: #ffffff;
    border-radius: 16px;
    border: 1px solid #cccccc;
}
.title::after {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 50px;
		content: attr(data-text);
		position: absolute;
		top: 10px;
		left: 0;
        width: 100%;
        text-align: center;
		z-index: 10;
		color: #32d1d3;
		-webkit-mask: linear-gradient(88.02deg, #130CB7 22.13%, rgba(56, 85, 222, 0.930753) 43.18%, rgba(46, 106, 204, 0.869375) 61.83%, rgba(82, 229, 231, 0.7) 79.36%);
		white-space: nowrap;
	}

    .circular{
        display: inline-block;
        width: 40px;
        height: 40px;
        border: 1px solid #aaaaaa;
        border-radius: 50%;
        margin-right: 10px;
        position: relative;
    }
    .circular::after{
        content: '';
        height: 20px;
        width: 2px;
        background:#130CB7;
        position: absolute;
        bottom: -24px;
        left: 19px;
    }
    .circular.last::after{
        display: none;
    }
    .center{
        padding: 30px;
        border: 1px solid #cccccc;
        margin-top: 80px;
        height: 70vh;
        border-radius: 16px ;
        background-color: #ffffff;
        overflow: auto;
    }
    .info-title{
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
    }
    .content{
        width: 50%;
        margin: 20px 40% 0 20%;
    }
    .content2{
        width: 60%;
        margin: 20px 20% 0 20%;
    }
    .grid1{
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: center;
    }
    .info-text{
        margin-top: 15px;
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.02em;
    }
    .btn{
        padding: 15px 30px;
        background: linear-gradient(90.39deg, #246EF3 -28.26%, #3BBDE7 100.2%, #2EDDF4 123.43%);
        border-radius: 6px;
        color: #ffffff;
        font-size: 20px;
    }
    .actived{
        background: linear-gradient(80.67deg, #246EF3 25.61%, #3BBDE7 93.82%, #2EDDF4 106.16%);
    }
    ::v-deep .el-input__inner{
        background-color: #ffffff;
    }
    ::v-deep .el-form-item__label,.admin{
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        letter-spacing: 0.02em;
    }
    .change-password{
        margin: 60px auto;
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 27px;
        letter-spacing: 0.02em;
        text-align: center;
    }

    .item-3{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #ccc;
    }
    .btn2{
        color: #ffffff;
        background: linear-gradient(90.39deg, #246EF3 -28.26%, #3BBDE7 100.2%, #2EDDF4 123.43%);
        border-radius: 6px;
    }
    .aaa{
        margin-bottom: 8px;
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
        line-height: 20px;
        letter-spacing: 0.02em;
    }
    .text5{
        background: #217BF4;
        box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
        border-radius: 8px;
        color: #ffffff;
        padding: 1px;
        margin-right: 8px;
    }
    .text6{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        /* or 162% */


        color: #2F2C4A;
    }

    .item-4{
        background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
        border-radius: 11px;
        box-shadow: 10px 10px 28px -7px #aaaaaa;
        margin: 10px;
        padding: 10px;
    }

    .text7{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;
    }
    .text8{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 700;
        font-size: 11px;
        line-height: 16px;
        /* or 145% */

        text-align: center;
        letter-spacing: 0.01em;
    }
    .text9{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 13px;
        line-height: 14px;

        color: rgba(96, 96, 96, 0.69);
    }
    .text1{
        font-family: 'Nunito Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: 0.02em;
        display: inline-block;
        width: 100px;
    }
    .item-5{
        display: flex;
        height: 80px;
    }
    .text-9{
        margin-left:40px ;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        /* or 162% */


        color: #2F2C4A;
    }
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.messageIndex{
  z-index:9999 !important;
}
</style>
