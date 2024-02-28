'use client'
import React from 'react';

const PostError = ({error}: {error: Error}) => {
    return (
        <div>
            "{error.message}" - error !
        </div>
    );
};

export default PostError;