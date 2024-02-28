'use client';
import React from 'react';

const MediaErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            Media Error - {error.message}
        </div>
    );
};

export default MediaErrorBoundary;