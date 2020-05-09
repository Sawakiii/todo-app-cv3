// Reactをインポート
import React from "react"

// 他のコンポーネントをインポート
import Form from "./Form"
import List from "./List"

// コンポーネント関数を作成する
const App = () => {

  // Reactでデータを扱う時は、stateとpropsを使う。
  // stateは、コンポーネントが持つデータ。
  // propsは、親コンポーネントから渡されたデータ。

  // まずは、データの定義を行う。
  // const [データ名, データの再定義する関数名] = React.useState(データの初期値)
  const [todos, setTodos] = React.useState([
    "htmlを書く",
    "cssを書く",
    "jsを書く"
  ])

  return (
    <>
      <Form todos={todos} setTodos={setTodos}></Form>

      {/* 他のコンポーネントにデータを渡す時は、以下のように記述します */}
      {/* <コンポーネント名 子コンポーネントで使う名前={親コンポーネントでの名前}></コンポーネント名> */}
      <List todos={todos} setTodos={setTodos}></List>
    </>
  )
}

// コンポーネント関数をエクスポート
export default App

