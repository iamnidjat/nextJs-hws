'use client';
import React from 'react';

const WidgetsErrorBoundary = ({error}: {error: Error}) => {
    return (
        <div>
            Widgets Error - {error.message}
        </div>
    );
};

export default WidgetsErrorBoundary;