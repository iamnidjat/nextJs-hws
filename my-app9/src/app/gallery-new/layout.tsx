import React from 'react';

const GalleryLayout = ({children, media}: {children:React.ReactNode, media: React.ReactNode}) => {
    return (
        <div>
            <div>{media}</div>
            <div>{children}</div>
        </div>
    );
};

export default GalleryLayout;