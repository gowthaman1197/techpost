import React from 'react'

function footer() {
    const getDate = new Date();
    const getYear = getDate.getFullYear();
    return (
        <footer className="mt-3">
            <p className="text-center mb-0">Copyright {getYear} by techpost.com</p>
        </footer>
    )
}

export default footer
