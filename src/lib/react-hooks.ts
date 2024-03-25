import React from 'react';

const useStateFn = (val: any) => {
    return [val, Function];
};

export const useState =
    typeof window === 'undefined' ? useStateFn : React.useState;
