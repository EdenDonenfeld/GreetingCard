import { useState, useCallback, useEffect } from "react";

export const useCopyToClipboard = () => {
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (isCopied) {
            const id = setTimeout(() => {
                setIsCopied(false);
            }, 2500); 
            return () => clearTimeout(id);
        }
    }, [isCopied]);

    const copy = async (text: string): Promise<void> => {
        setIsCopied(true);
        return await navigator.clipboard.writeText(text);
    };

    return [isCopied, copy] as const;
}