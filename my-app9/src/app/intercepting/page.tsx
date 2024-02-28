import Link from 'next/link';
import React from 'react';

const MainIntercepting = () => {
    return (
        <div>
            Main Intercepting!
            <div>
                <Link href='/intercepting/first'>Go to FirstIntercepting</Link>
            </div>
        </div>
    );
};

export default MainIntercepting;