import { useRef } from 'react';

export function useScroll(): [any, (offset?: number) => void] {
    const elRef = useRef<any>(null);

    const scrollTo = (offset = 0) => {
        if (elRef.current) {
            window.scrollTo({
                top: elRef.current.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    };

    return [elRef, scrollTo];
}
