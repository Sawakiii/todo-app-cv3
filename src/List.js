import React from "react"

import Item from "./Item"

// コンポーネント関数の引数でデータを受け取れる。(props)
// 引数名は任意
const List = (props) => {
    return (
        // return内は必ずひとつのhtml要素
        <>

            {/* props.todos = ["html", "css", "js"] */}
            {/* map関数を使った後 */}
            {/* props.todos = [<Item todo={"html"}></Item>, <Item todo={"css"}></Item>, <Item></Item>] */}
            {props.todos.map((todo, index)=>{
                return (
                    <Item todo={todo} index={index} todos={props.todos} setTodos={props.setTodos}></Item>
                )
            })}

            {/* <Item todo={props.todos[0]}></Item>
            <Item todo={props.todos[1]}></Item>
            <Item todo={props.todos[2]}></Item> */}
        </>
    )
}

export default List