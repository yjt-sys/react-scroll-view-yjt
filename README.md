此处为react-scroll-view-yjt的说明
github地址:https://github.com/yjt-sys/react-scroll-view-yjt
1.使用方式,直接将要进行滚动的数据放入组件内即可

```
function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: '张三',
      age: 18
    },
    {
      id: 2,
      name: '李四',
      age: 20
    },
    {
      id: 3,
      name: '王五',
      age: 22
    },
    {
      id: 4,
      name: '赵六',
      age: 24
    },
    {
      id: 5,
      name: '钱七',
      age: 26
    },
    {
      id: 6,
      name: '孙八',
      age: 28
    },
    {
      id: 7,
      name: '周九',
      age: 30
    },
    {
      id: 8,
      name: '吴十',
      age: 32
    },
    {
      id: 9,
      name: '郑十一',
      age: 34
    },
  ])
  return (
    <div className="App">
      <ScrollView style={{width:"1000px",marginLeft:"200px"}} leftIcon={<div>zuo</div>} rightIcon={<div>you</div>}>
          {
            data.map((item, index) => {
              return <div className='item'>

              </div>
            })
          }
      </ScrollView>
    </div>
  );
}
```

2.react-scroll-view-yjt是基于flex布局进行编写的,所以写入数据后可能会导致宽度收缩,请自行在子元素样式中更改
例如

```css
.item{
  width: 300px;
  height: 80px;
  background-color: aquamarine;
  flex: 0 0 auto;
  border: 1px solid red;
}
```

3.组件提供三个参数,style,leftIcon,rightIcon
style:组件样式
leftIcon:组件左侧图标
rightIcon:组件右侧图标
