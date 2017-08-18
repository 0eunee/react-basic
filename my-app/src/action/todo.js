// action type(명렁어)
export const COMPLETE_TODO = 'COMPLETE_TODO';

// action creators(액션 메소드)
export function complete({complete, id}) {
    return { type: COMPLETE_TODO, complete, id }
}

// 비동기 작업을 하는 코드
export function addTodo2(text) {
    return (dispatch) => {
        return fetch("api/add.json").then(
            res => res.json().then(data => dispatch(addTodo(data.status)))
        );
    };
}