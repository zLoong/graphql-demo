<template>
  <div>
        <div>
      <div class="input">
        Mutation
        <div>
          <label for="name">姓名:</label>
          <input type="text" id="name" v-model="stuName" />
        </div>
        <div>
          <label for="age">年龄:</label>
          <input type="number" id="age" v-model="age" />
        </div>
        <div class="slt">
          <span>
            <label for="sex">性别:</label>
            <select id="sex" name="sex" v-model="sex">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </span>
          <span>
            <label for="cls">班级:</label>
            <select id="cls" v-model="cls">
              <option :value="item.id" v-for="item in classes" :key="item.id">
                {{ item.description }}
              </option>
            </select>
          </span>
        </div>

        <input
          type="button"
          value="创建"
          @click="
            createStudent();
            reset();
          "
        />
      </div>
    </div>
    <hr>
    Query
    <table class="stu">
      <thead>
        <tr>
          <th>ID</th>
          <th>姓名</th>
          <th>班级</th>
        </tr>
      </thead>
      <tbody>
        <transition-group name="stuList">
          <tr v-for="item in students" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.class }}</td>
          </tr>
        </transition-group>
      </tbody>
    </table>
    <div></div>
  </div>
</template>

<script>
import { clintQuery, clintMutation } from "../script/graphql";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      students: [],
      stuName: "",
      age: 0,
      sex: "男",
      cls: "",
      classes: [],
    };
  },
  components: [],
  methods: {
    getStudents: function () {
      // 不要使用箭头函数 否则无法获取this
      let that = this; // 由于在异步中 this 重置，所以提前将this赋值给that 以便后面获取到数据
      // 调用封装好的graphql 客户端发送请求
      clintQuery(`
        query {
          students {
            id
            name
            sex
            class {
              description
            }
          }
        }
      `).then(function (rst) {
        let students = [];
        for (let i = 0; i < rst.data.students.length; i++) {
          students.push({
            id: rst.data.students[i].id,
            name: rst.data.students[i].name,
            sex: rst.data.students[i].sex,
            class: rst.data.students[i].class.description,
          });
        }
        that.students = students;
      });
    },
    getClasses: function () {
      let that = this;
      clintQuery(`
        query {
          classes {
            id
            description
          }
        }
      `).then(function (rst) {
        that.classes = rst.data.classes;
      });
    },
    createStudent: function () {
      let that = this;
      // 第一个参数是执行的graphql查询字符串，第二个参数是传参
      clintMutation(
        `
        mutation createStudent($name:String,$age:Int,$sex:String,$classID:Int) {
          createStudent(s:{name:$name,age:$age,classID:$classID,sex:$sex})
        }
      `,
        {
          name: that.stuName,
          age: that.age,
          sex: that.sex,
          classID: Number(that.cls),
        }
      ).then(() => {
        console.log('mutation ok');
        return that.getStudents();
      });
    },
    reset: function () {
      this.stuName = "";
      this.age = 0;
      this.cls = "";
      this.sex = "";
    },
  },
  mounted() {
    this.getStudents();
    this.getClasses();
  },
  watch: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.stu {
  width: 400px;
  margin: 0 auto;
}
.stu tbody{
  width:100%;
  height: 300px;
  overflow: auto;
}
.stu tbody tr {
  height: 20px;
}
.stu thead {
  background-color: #b6b6b6;
}
.stu th {
  width: 100px;
}

tbody tr:nth-child(2n-1) {
  background-color: rgba(133, 158, 133,.6);
}

.input {
  width: 400px;
  margin: 0 auto;
}

.input .slt {
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 56%;
}

.stuList-item{
  /* opacity: 1; */
  transition: all 0.8s ease;
}

.stuList-enter-active,
.stuList-leave-active {
  transition: all 0.5s ease;
}

.stuList-enter_from,
.stuList-leave-to{
  opacity: 0;
  transform: translateY(10px);
}

</style>

