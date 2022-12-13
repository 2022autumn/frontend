<template>
  <div>
    <!--width,height 画布的宽度，高度。 可以是百分比或像素，一般在dom元素上设置 -->
    <div id="network_id" class="network" style="position: absolute;top:140vh;width: 100vw;height: 70vh"></div>
  </div>
</template>

<script>
import Vis from "vis";
export default {
  name: "testnet",
  data() {
    return {
      author_id: "",
      dialogVisible: false,
      nodes: [],
      edges: [],
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
        this.edgesArray.forEach(item => {
          item.id = item.from + "-" + item.to;
          item.label = item.weight.toString();
        })
        console.log("this.nodesArray", this.nodesArray);
        console.log("this.edgesArray", this.edgesArray);
        this.resetAllNodesStabilize();
        // 点击事件
        this.network.on("click", params => {
          console.log("点击", params.edges[0]);
          this.dialogVisible = true;
          // 遍历edgesArray
          this.edgesArray.forEach(item => {
            if (item.id === params.edges[0]) {
              console.log("点击的边", item);
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
    }
  },
  mounted() {
    this.author_id = window.localStorage.getItem('SID');
    this.init();
    this.getAuthorRelationNet();
  }
}
</script>

<style scoped>

</style>
