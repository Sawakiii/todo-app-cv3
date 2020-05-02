// Reactをインポート
import React from "react"

// コンポーネントの関数を定義
const Form = (props) => {

    // 機能はjsで書いていきます。todoの追加機能を定義。
    const handleSubmit = (e) => {
        // 0. submitイベントが発生すると、デフォルトでリロードされてしまうため、それを阻止する。
        e.preventDefault()

        // 1. データ(state)のコピー
        const newTodos = props.todos.slice()

        // 2. 追加するデータ(入力された文字列)をコピーしたデータに追加
        // 入力された文字列を取得する(イベントを使う)
        // formの場合は、e.target.名前(nameで定義した名前).value
        const task = e.target.task.value

        // newTodosに追加する
        newTodos.push(task)

        // 3. コピーしたデータを使ってstateを再定義
        props.setTodos(newTodos)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task"/>
                <button type="submit">追加</button>
            </form>
        </>
    )
}

// コンポーネント関数のエクスポート
export default Form