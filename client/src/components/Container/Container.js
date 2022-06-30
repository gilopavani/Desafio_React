import React from 'react'

import './Container.css'

const Container = ({ children }) => (
    <main className="bg-light">
        {children}
    </main>
)

export default Container
