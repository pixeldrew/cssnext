import React from 'react';
import { Child as PlatformChild } from '@carnival-abg/platform';

const Child = () => (
    <div><h1>Cunard Child that includes the platform</h1> <PlatformChild message={'I am inside the platform child'}/> </div>
);

export default Child;
