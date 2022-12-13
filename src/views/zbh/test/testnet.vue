<template>
  <div>
    <!--width,height 画布的宽度，高度。 可以是百分比或像素，一般在dom元素上设置 -->
    <div id="network_id" class="network" style="position: absolute;top:140vh;width: 100vw;height: 70vh"></div>
    <!-- 添加一个dialog, 里面装一个列表 -->
    <el-card class="box-card" shadow="hover" style="position:absolute;top:140vh;width:60vw;height: 70vh;margin-left:20vw"
      v-if="CardVisible">
      <div slot="header" class="clearfix">
        <span><b>{{ author_name }}</b> 与 <b>{{ co_author_name }}</b> 的合作作品</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="() => { CardVisible = false }">退出</el-button>
      </div>
      <div class="line2">
        <div class="single-line2" v-for="(item, index) in works" :key="index">
          <div class="title-line2">
              <div class="content2" @click="jdetail(item.id)">{{ item.title }}</div>
          </div>
          <!-- <div class="middle-line2">
            <div class="author2" v-if="item.authorships">
              <div v-if="item.authorships[0]" class="author-first">
                <div v-if="item.authorships[0].author.display_name">
                  <div v-if="item.authorships.length > 1">
                    <span>作者:</span>
                    <span @click="jscholar(item.authorships[0].author.id)" class="author1">
                      {{ item.authorships[0].author.display_name }};
                    </span>
                    <span @click="jscholar(item.authorships[1].author.id)" class="author1">
                      {{ item.authorships[1].author.display_name }}
                    </span>
                  </div>
                  <div v-else @click="jscholar(item.authorships[0].author.id)">
                    作者:{{ item.authorships[0].author.display_name }}
                  </div>
                </div>
              </div>

            </div>
            <div class="company2" v-if="item.host_venue">机构:{{ item.host_venue.display_name }}</div>
            <div class="time2">发表时间:{{ item.publication_date }}</div>
          </div>
          <div class="bottom-line2">
            <div class="key-box2">
              <div class="key2" v-for="(item, index) in item.concepts" :key="index">
                <div class="single-key2">
                  {{ item.display_name }}
                </div>
              </div>
              <div class="another2">
                <div class="quote2">
                  <img src="../../../assets/quotes-left.png" class="quote-img">
                  <div class="quote-title2">{{ item.cited_by_count }}次被引</div>
                </div>
                <div src="collect2">
                  <img src="../../../assets/collect.png" class="col-img2">
                  <div class="collect-title2">{{ item.star_num }}次收藏</div>
                </div>
              </div>
            </div>

            <div class=""></div>
          </div> -->
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Vis from "vis";
export default {
  name: "testnet",
  data() {
    return {
      author_name: "",
      co_author_name: "",
      author_id: "",
      CardVisible: false,
      nodes: [],
      edges: [],
      works: [],
      // network:null,
      container: null,
      nodesArray: [
        {
          "full": "Nicholas Cameron",
          "id": "A2114233763",
          "label": "Ni"
        },
        {
          "full": "Sophia Drossopoulou",
          "id": "A152419205",
          "label": "So"
        },
        {
          "full": "James Noble",
          "id": "A2103426042",
          "label": "Ja"
        },
        {
          "full": "Paley Li",
          "id": "A2159570553",
          "label": "Pa"
        },
        {
          "full": "Alexander J. Summers",
          "id": "A2122918521",
          "label": "Al"
        },
        {
          "full": "Tobias Wrigstad",
          "id": "A2792100077",
          "label": "To"
        },
        {
          "full": "Frank Schmager",
          "id": "A1981913168",
          "label": "Fr"
        },
        {
          "full": "Erik Ernst",
          "id": "A2108976767",
          "label": "E"
        },
        {
          "full": "Mariangiola Dezani-Ciancaglini",
          "id": "A194585239",
          "label": "Ma"
        },
        {
          "full": "Matthew J. Smith",
          "id": "A2489948046",
          "label": "Ma"
        },
        {
          "full": "Ferruccio Damiani",
          "id": "A2113991381",
          "label": "Fe"
        }
      ],
      //   关系线数组
      edgesArray: [
        {
          "from": "A2114233763",
          "to": "A152419205",
          "weight": 8,
          "width": 8,
          "works": [
            {
              "id": "W2295118110",
              "title": "Multiple ownership"
            },
            {
              "id": "W1558128491",
              "title": "A Model for Java with Wildcards"
            },
            {
              "id": "W1489834477",
              "title": "Existential Quantification for Variant Ownership"
            },
            {
              "id": "W2157627245",
              "title": "On subtyping, wildcards, and existential types"
            },
            {
              "id": "W1972792083",
              "title": "Towards a semantic model for Java wildcards"
            },
            {
              "id": "W1561839097",
              "title": "A State Abstraction for Coordination in Java-like Languages"
            },
            {
              "id": "W92503261",
              "title": "Understanding Ownership Types with Dependent Types"
            },
            {
              "id": "W6177290",
              "title": "Variant Ownership with Existential Types"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2103426042",
          "weight": 8,
          "width": 8,
          "works": [
            {
              "id": "W2295118110",
              "title": "Multiple ownership"
            },
            {
              "id": "W2296246574",
              "title": "Tribal ownership"
            },
            {
              "id": "W2050346936",
              "title": "GoHotDraw"
            },
            {
              "id": "W2156373721",
              "title": "Cloning in ownership"
            },
            {
              "id": "W1851276171",
              "title": "Encoding Ownership Types in Java"
            },
            {
              "id": "W1975789449",
              "title": "OGJ gone wild"
            },
            {
              "id": "W92503261",
              "title": "Understanding Ownership Types with Dependent Types"
            },
            {
              "id": "W2317483806",
              "title": "Mojojojo — More Ownership for Multiple Owners"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2159570553",
          "weight": 2,
          "width": 2,
          "works": [
            {
              "id": "W2156373721",
              "title": "Cloning in ownership"
            },
            {
              "id": "W2317483806",
              "title": "Mojojojo — More Ownership for Multiple Owners"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2122918521",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W1972792083",
              "title": "Towards a semantic model for Java wildcards"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2792100077",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W2296246574",
              "title": "Tribal ownership"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A1981913168",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W2050346936",
              "title": "GoHotDraw"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2108976767",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W1558128491",
              "title": "A Model for Java with Wildcards"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A194585239",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W1972792083",
              "title": "Towards a semantic model for Java wildcards"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2489948046",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W2295118110",
              "title": "Multiple ownership"
            }
          ]
        },
        {
          "from": "A2114233763",
          "to": "A2113991381",
          "weight": 1,
          "width": 1,
          "works": [
            {
              "id": "W1561839097",
              "title": "A State Abstraction for Coordination in Java-like Languages"
            }
          ]
        }
      ],
      options: {},
      data: {}
    };
  },
  methods: {
    init() {
      let _this = this;
      //1.创建一个nodes数组
      _this.nodes = new Vis.DataSet();
      //2.创建一个edges数组
      _this.edges = new Vis.DataSet();
      _this.container = document.getElementById("network_id");
      _this.data = {
        nodes: _this.nodes,
        edges: _this.edges
      };
      _this.options = {
        autoResize: true, //网络将自动检测其容器的大小调整，并相应地重绘自身
        locale: "cn", //语言设置：工具栏显示中文
        //设置语言
        locales: {
          cn: {
            //工具栏中文翻译
            edit: "编辑",
            del: "删除当前节点或关系",
            back: "返回",
            addNode: "添加节点",
            addEdge: "添加连线",
            editNode: "编辑节点",
            editEdge: "编辑连线",
            addDescription: "点击空白处可添加节点",
            edgeDescription: "点击某个节点拖拽连线可连接另一个节点",
            editEdgeDescription: "可拖拽连线改变关系",
            createEdgeError: "无法将边连接到集群",
            deleteClusterError: "无法删除集群.",
            editClusterError: "无法编辑群集'"
          }
        },

        // 设置节点样式
        nodes: {
          shape: "circle",
          size: 50,
          font: {
            //字体配置
            size: 32
          },
          color: {
            // border: "#2B7CE9", //节点边框颜色
            background: "#97C2FC", //节点背景颜色
            highlight: {
              //节点选中时状态颜色
              border: "#2B7CE9",
              background: "#D2E5FF"
            },
            hover: {
              //节点鼠标滑过时状态颜色
              border: "#2B7CE9",
              background: "#D2E5FF"
            }
          },
          borderWidth: 0, //节点边框宽度，单位为px
          borderWidthSelected: 2 //节点被选中时边框的宽度，单位为px
        },
        // 边线配置
        edges: {
          width: 1,
          // 设置label的字体大小
          font: {
            size: 35
          },
          labelHighlightBold: true,
          length: 260,
          color: {
            color: "#848484",
            highlight: "#848484",
            hover: "#848484",
            inherit: "from",
            opacity: 1.0
          },
          shadow: true,
          smooth: {
            //设置两个节点之前的连线的状态
            enabled: true //默认是true，设置为false之后，两个节点之前的连线始终为直线，不会出现贝塞尔曲线
          },
          arrows: { to: true } //箭头指向to
        },
        //计算节点之前斥力，进行自动排列的属性
        physics: {
          enabled: true, //默认是true，设置为false后，节点将不会自动改变，拖动谁谁动。不影响其他的节点
          barnesHut: {
            gravitationalConstant: -4000,
            centralGravity: 0.3,
            springLength: 120,
            springConstant: 0.04,
            damping: 0.09,
            avoidOverlap: 0
          }
        },
        //用于所有用户与网络的交互。处理鼠标和触摸事件以及导航按钮和弹出窗口
        interaction: {
          dragNodes: true, //是否能拖动节点
          dragView: true, //是否能拖动画布
          hover: true, //鼠标移过后加粗该节点和连接线
          multiselect: true, //按 ctrl 多选
          selectable: true, //是否可以点击选择
          selectConnectedEdges: true, //选择节点后是否显示连接线
          hoverConnectedEdges: true, //鼠标滑动节点后是否显示连接线
          zoomView: false //是否能缩放画布
        },
        //操作模块:包括 添加、删除、获取选中点、设置选中点、拖拽系列、点击等等
        manipulation: {
          enabled: false, //该属性表示可以编辑，出现编辑操作按钮
          addNode: true,
          addEdge: true,
          // editNode: undefined,
          editEdge: true,
          deleteNode: true,
          deleteEdge: true
        }
      };
      // _this.network = new Vis.Network(
      //   _this.container,
      //   _this.data,
      //   _this.options
      // );
    },
    // 同步函数
    async getAuthorRelationNet() {
      console.log("getAuthorRelationNet");
      this.$axios({
        method: 'get',
        url: '/es/getAuthorRelationNet',
        params: {
          author_id: this.author_id
        }
      }).then(res => {
        console.log("getAuthorRelationNet res", res);
        this.nodesArray = res.data.res.Vertex_set;
        // 为nodesArray中的每个节点添加label属性
        this.nodesArray.forEach(item => {
          item.color = {
            border: "#2B7CE9",
            background: "#D2E5FF"
          };
          item.title = item.full
        });
        this.edgesArray = res.data.res.Edge_set;
        var max = 0;
        this.edgesArray.forEach(item => {
          item.id = item.from + "-" + item.to;
          item.label = item.weight.toString();
          if (item.weight > max) {
            max = item.weight;
          }
        })
        // 计算边的宽度
        this.edgesArray.forEach(item => {
          item.width = item.weight / max * 15;
        })
        console.log("this.nodesArray", this.nodesArray);
        console.log("this.edgesArray", this.edgesArray);
        this.resetAllNodesStabilize();
        // 点击事件
        this.network.on("click", params => {
          console.log("点击", params.edges[0]);

          // 遍历edgesArray
          this.edgesArray.forEach(item => {
            if (item.id === params.edges[0]) {
              this.CardVisible = true;
              console.log("点击的边", item);
              this.works = item.works;
              // 计算author_name 和 co_author_name
              this.nodesArray.forEach(element => {
                if (element.id === item.from) {
                  this.author_name = element.full;
                }
                if (element.id === item.to) {
                  this.co_author_name = element.full;
                }
              });
            }
          });
          this.nodesArray.forEach(item => {
            if (item.id === params.nodes[0]) {
              console.log("点击的点", item);
            }
          });
        });
        // this.resetAllNodesStabilize();
      }).catch(err => {
        console.log("getAuthorRelationNet error");
        console.log(err);
      })
    },
    resetAllNodes() {
      let _this = this;
      _this.nodes.clear();
      _this.edges.clear();
      _this.nodes.add(_this.nodesArray);
      _this.edges.add(_this.edgesArray);
      _this.data = {
        nodes: _this.nodes,
        edges: _this.edges
      };
      //   network是一种用于将包含点和线的网络和网络之间的可视化展示
      _this.network = new Vis.Network(
        _this.container,
        _this.data,
        _this.options
      );
    },
    resetAllNodesStabilize() {
      let _this = this;
      _this.resetAllNodes();
      _this.network.stabilize();
    },
    jdetail(id) {
      console.log("文章id为:");
      console.log(id);
      window.localStorage.setItem('WID', id);
      window.open('/paper_details');
    },
    jscholar(id) {
      // window.localStorage.setItem('SID',this.author_id);
      console.log(id)
      window.localStorage.setItem('SID', id);
      window.open('/scholar_page');
    },
  },
  mounted() {
    this.author_id = window.localStorage.getItem('SID');
    this.init();
    this.getAuthorRelationNet();
  }
}
</script>

<style scoped>
.line2 {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 2vh;
  height: 600px;
  width: 99.3%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.single-line2 {
  display: flex;
  position: relative;
  left: 4px;
  margin-top: 1vh;
  height: 4vh;
  /* 宽度和card保持一致 */
  width: 56vw;
  flex-shrink: 0;
  background: linear-gradient(250.39deg, #FFFFFF 10.13%, #FFFFFF 94%);
  border-radius: 11px;
  filter: drop-shadow(0px 3px 5px rgba(0, 0, 0, 0.25));
}

.type2 {
  position: absolute;
  width: auto;
  height: 3.3vh;
  top: 2vh;
  padding-left: 4px;
  padding-right: 4px;
  left: 2.2vw;
  background: #217BF4;
  box-shadow: 0px 7px 22px -6px rgba(0, 72, 168, 0.34);
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 26px;
  /* or 217% */
  text-align: center;

  color: #FFFFFF;
}

.content2 {
  position: relative;
  width: 54vw;
  height: 3.18vh;
  left: 2vw;
  top: 0vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */
  cursor: pointer;

  color: #2F2C4A;
}

.middle-line2 {
  position: absolute;
  top: 7vh;
  width: 100%;
}

.author2 {
  position: relative;
  display: flex;
  width: 3vw;
  height: 3vh;
  left: 2.2vw;
  cursor: pointer;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  /* or 108% */

  text-align: center;
  color: rgba(96, 96, 96, 0.69);

  z-index: 99;
}

.author-first {
  width: auto;
  white-space: nowrap;
  padding-right: 2px;
  padding-left: 0px;
}

.author-second {
  width: auto;
  white-space: nowrap;
  padding-right: 2px;
}

.author1 {}

.author1:hover {
  text-decoration: underline;
  color: #53a2e3;
}

.company2 {
  position: relative;
  width: auto;
  padding-right: 5px;
  height: 5vh;
  left: 1vw;
  top: -25px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  white-space: nowrap;
  /* or 108% */

  text-align: center;

  color: rgba(96, 96, 96, 0.69);

}

.time2 {
  position: relative;
  width: auto;
  top: -67px;
  height: 5vh;
  left: 13vw;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
  /* or 108% */

  text-align: center;
  white-space: nowrap;
  color: rgba(96, 96, 96, 0.69);
}

.bottom-line2 {
  position: absolute;
  top: 10.2vh;
}

.key-box2 {
  display: flex;
  position: relative;
  flex-direction: row;
  width: 70vw;
  left: 0.5vw;
  padding-top: 6px;
}

.key2 {
  display: flex;
  position: relative;
  flex-wrap: wrap;
}

.single-key2 {
  width: auto;
  height: 3.4vh;
  margin-left: 1vw;
  background: #f6f9fe;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 14px;


  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 26px;
  /* or 145% */
  text-align: center;
  letter-spacing: 0.01em;
  color: #2F2C4A;
  ;

}

.another2 {
  position: absolute;
  left: 32vw;
  top: 1vh;
}

.quote2 {
  margin-left: 36px;
}

.quote-img {
  width: 23px;
  height: 23px;
}

.quote-title2 {
  position: absolute;
  width: 8vw;
  height: 15vh;
  top: 0.7vh;
  left: 1.8vw;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 520;
  font-size: 14.5px;
  line-height: 14px;
  /* or 108% */

  text-align: center;

  color: rgba(96, 96, 96, 0.69);
}

.col-img2 {
  position: absolute;
  top: 0vh;
  left: 11vw;
  width: 25px;
  height: 25px;
}

.collect-title2 {
  position: absolute;
  width: 8vw;
  height: 15vh;
  left: 11vw;
  top: 0.7vh;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 520;
  font-size: 14.5px;
  line-height: 14px;
  /* or 108% */

  text-align: center;

  color: rgba(96, 96, 96, 0.69);
}
</style>
