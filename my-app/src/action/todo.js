// action type(명렁어)
export const COMPLETE_TODO = 'COMPLETE_TODO';

// action creators(액션 메소드)
export function complete({complete, id}) {
    return { type: COMPLETE_TODO, complete, id }
}