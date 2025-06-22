import { useCallback, useState } from 'react';

export const useToggle = (initialValue: boolean) => {
    const [isToggled, setIsToggled] = useState<boolean>(initialValue);
    
    const toggle = useCallback(() => {
        setIsToggled(prev => !prev);
    }, []);
    // It's important to use useCallback to prevent unnecessary re-renders.

    return {
        isToggled,
        toggle,
    };
}