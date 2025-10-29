<template>
  <div class="table-container">
    <table class="data-table ">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name  }}</td>
          <td>{{ item.age  }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
 
<script>
export default {
  name: 'NumberedTable',
  data() {
    return {
      tableData: [
        { name: '张三', age: 25 },
        { name: '李四', age: 30 },
        { name: '王五', age: 28 },
        { name: '赵六', age: 35 },
        { name: '钱七', age: 22 }
      ]
    }
  }
}
</script>


 
<style scoped>
@import "@/common/zcm-main-nvue.css"; 
.table-container {
  padding: 20px;
}
 
.data-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e0e0e0;
}
 
.data-table th,
.data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e0e0e0;
}
 
.data-table th {
  background-color: #f5f5f5;
  font-weight: bold;
  color: #333;
}
 
.data-table tr:hover {
  background-color: #f9f9f9;
}
 
.data-table td:first-child {
  font-weight: bold;
  color: #1890ff; 
}
</style>