import { reactive } from 'vue';

export const useInput = (defaultValue = '') => {
    // Data
    const data = reactive({
        value: defaultValue,
        error: false,
        errorMessage: null
    });
    
    // Functions
    const clearError = () => {
        data.error = false;
        data.errorMessage = null;
    };

    const setError = (err, msg) => {
        data.error = err;
        data.errorMessage = msg;
    };

    return {
        data,
        setError,
        clearError,
    };
};