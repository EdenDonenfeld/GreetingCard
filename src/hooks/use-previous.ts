import { useRef, useEffect } from 'react';

export const usePrevious = <T>(value: T): T | undefined => {
    const ref = useRef<T | undefined>(undefined);

    const previous = ref.current;
    
    useEffect(() => {
        ref.current = value;
    }, [value]);
    
    return previous;
}
