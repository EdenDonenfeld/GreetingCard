import { useState } from 'react';

export const useList = <T> (value: T[] = []) => {
    const [list, setList] = useState<T[]>(value);

    const set = (newList: T[]) => {
        setList(newList);
    }

    const push = (item: T) => {
        const newList = [...list, item];
        setList(newList);
    }

    const removeAt = (index: number) => {
        if (index < 0 || index >= list.length) {
            return;
        }

        const newList = [...list];
        newList.splice(index, 1);
        setList(newList);
    }

    const filter = (predicate: (item: T) => boolean) => {
        const newList = list.filter(predicate);
        setList(newList);
    }

    const clear = () => {
        setList([]);
    }

    const sort = (comparator?: (a: T, b: T) => number) => {
        const newList = [...list].sort(comparator);
        setList(newList);
    }

    return {
        list,
        set,
        push,
        removeAt,
        filter,
        clear,
        sort
    }

}