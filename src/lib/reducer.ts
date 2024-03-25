export const genericReducer = (state: any, data: Record<string, unknown>) => {
    return {
        ...state,
        ...data
    };
};
