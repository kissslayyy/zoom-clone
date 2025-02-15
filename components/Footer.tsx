"use client"
import React from 'react'

const Footer = () => {
    return (
        <footer className="mt-auto bg-gray-900 py-4 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <p className="text-sm">
                            © {new Date().getFullYear()} IIST Bihar. All rights reserved.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <a href="https://iistbihar.com" className="hover:text-gray-300">IIST Bihar</a>
                        <a href="https://sparkovationhub.com" className="hover:text-gray-300">Sparkovation Hub</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer