import React from 'react';

const useIsScrolled = () => {
    const [ isScrolled, setIsScrolled ] = React.useState(false);

    const handler = (event?: React.UIEvent<HTMLElement, UIEvent>) => {

        if (!event) {
          return;
        }
    
        const { scrollTop } = event.target as HTMLElement;
    
        const newIsScrolled = scrollTop > 0;
        return newIsScrolled === isScrolled || setIsScrolled(newIsScrolled);
    }

    return {
        isScrolled,
        setIsScrolled: handler,
    }
};

export default useIsScrolled;