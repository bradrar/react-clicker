export const COUNT = 'COUNT';

export function updateCount ( count ) {
    return {
        type: COUNT,
        counter: count
    }
}