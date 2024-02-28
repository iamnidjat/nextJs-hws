'use client'
import React from 'react';

const InfoErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            Info Error - {error.message}
        </div>
    );
};

export default InfoErrorBoundary;