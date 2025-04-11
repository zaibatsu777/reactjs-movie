import React from 'react';
import HashLoader from 'react-spinners/HashLoader';

const Spinner = () => {
    return (
        <HashLoader
            color="#266280"
            loading={true}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    );
};

export default Spinner;
