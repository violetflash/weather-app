import { useEffect } from 'react';

const useTitle = ({ name }) => {
    useEffect(() => {
        document.title = name ? name : 'Прогноз погоды';
    }, [name])
};

export default useTitle;
