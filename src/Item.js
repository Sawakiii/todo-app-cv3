import React from "react"

const Item = (props) => {
    // 完了かどうかを保存するデータを作成
    const [isDone, setIsDone] = React.useState(false)
    // 編集中かどうかを保存するデータ(例isEdit)を作成。編集していない場合はfalse, 編集中はtrue
    const [isEdit, setIsEdit] = React.useState(false)

    // todoの削除機能 -> todos(配列)の要素を削除する
    const handleDelete = () => {
        // ボタンが押される(自動で行われる)
        // todosをコピーする。
        const newTodos = props.todos.slice()

        // todosの中で、該当する要素(todo)を削除する。ここが一番難しいです。
        // todosの中から該当する要素を特定する。-> 削除する要素のインデックス番号を求める。

        // 親コンポーネント(List.js)を使うやり方 -> props.indexで該当するインデックス番号が分かる
        // 文字の一致を調べるやり方

        // todosの中から該当する要素を削除する。.splice(削除する要素のインデックス番号, 削除する個数)を使う。
        newTodos.splice(props.index, 1)


        // todosを更新する。setTodosを使う。
        props.setTodos(newTodos)
    }

    // 編集機能
    // 編集ボタンが押される
    // -> html要素が変わる(pタグがinputタグになる、ボタンが編集完了ボタンのみになる=formになる)
    // (ここまでに関しては、先ほどのisDoneを参考にしてみてください。)

    // -> 編集完了ボタンを押すとhtml要素が元に戻り、inputに書いた内容が反映される。この処理は以下の関数内に記述。
    const handleEdit = () => {

    }

    return (
        <>  
            {
                // isEditがfalseなら、今までのhtmlで、isEditがtrueならformのhtml
                isEdit ? 
                // isEditがtrueの場合
                <form onSubmit={handleEdit}>
                    <input type="text"/>
                    <button type="submit" onClick={()=>{setIsEdit(!isEdit)}}>編集完了</button>
                </form>
                :
                // isEditがfalseの場合
                <>
                {
                    isDone ? <p style={{textDecoration: "line-through"}}>{props.todo}</p> : <p>{props.todo}</p>
                }
                <button onClick={()=>{
                    // isDoneがtrueならfalseにして、falseならtrueにする。
                    setIsDone(!isDone)
                }}>{ isDone ? "戻す" : "完了" }</button>
                <button onClick={handleDelete}>削除</button>
                <button onClick={()=>{setIsEdit(!isEdit)}}>編集</button>
                </>
            }
        </>
    )
}

export default Item