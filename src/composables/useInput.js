import { reactive } from 'vue';

export const useInput = (defaultValue = '') => {
    // Data
    const data = reactive({
        value: defaultValue,
        error: false,
        errorMessage: null
    });
    
    // Functions
    const setError = (err = false, msg = null) => {
        data.error = err;
        data.errorMessage = msg;
    };

    return {
        data,
        setError,
    };
};