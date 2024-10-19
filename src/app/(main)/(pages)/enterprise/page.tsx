import React from "react"

const DashboardPage = () => {
    return (

        <div className="relative min-h-screen bg-black-900 text-white font-sans text-center overflow-hiddenbg-gradient-to-r from-gray-900 to-black">
            <div className="absolute inset-0 pointer-events-none z-10">
                <div className="snowflake left-5"></div>
                <div className="snowflake left-1/4"></div>
                <div className="snowflake left-1/2"></div>
                <div className="snowflake left-3/4"></div>
                <div className="snowflake left-5/6"></div>
            </div>

            <div className="whitespace-nowrap flex items-center text-center z-20">
                <h1 className="text-6xl mx-4 my-4 text-center">FlowForge</h1>
                <img src="fuzzieLogo.png" alt="logo.png" width="30" height="30" />
            </div>

            <main className="flex flex-col items-center gap-16 py-16 z-20">
                <section className="text-center space-y-6 max-w-4xl">
                    <h2 className="text-5xl font-bold animate-fadeIn">Built for the Enterprise</h2>
                    <p className="text-xl text-gray-400">Experience the power and flexibility with our enterprise-grade solutions tailored for businesses of all sizes.</p>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-500 transition duration-300 ease-in-out">
                        Get Started
                    </button>
                </section>

                <section className="flex flex-wrap justify-center gap-10 z-20">
                    <div className="w-64 h-80 bg-gray-800 rounded-xl border border-emerald-300 border-3 overflow-hidden transform hover:scale-105 transition duration-500 shadow-lg">
                        <img src="p1.png" alt="Feature 1" className="w-full h-48 object-cover blur-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Robust Security</h3>
                            <p className="text-gray-400">Top-notch security protocols ensuring data protection.</p>
                        </div>
                    </div>
                    <div className="w-64 h-80 bg-gray-800 rounded-xl border border-emerald-300 border-3 overflow-hidden transform hover:scale-105 transition duration-500 shadow-lg">
                        <img src="p2.png" alt="Feature 2" className="w-full h-48 object-cover blur-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Scalability</h3>
                            <p className="text-gray-400">Easily scale your business as it grows without worrying about limits.</p>
                        </div>
                    </div>
                    <div className="w-64 h-80 bg-gray-800 rounded-xl border border-emerald-300 border-3 overflow-hidden transform hover:scale-105 transition duration-500 shadow-lg">
                        <img src="p3.png" alt="Feature 3" className="w-full h-48 object-cover blur-sm" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold">Custom Solutions</h3>
                            <p className="text-gray-400">Tailored solutions to meet your business-specific needs.</p>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-gray-400 py-8 z-20">
                <div className="text-center">
                    <p>&copy; 2024 Enterprise Inc. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="hover:text-gray-200 transition">Privacy</a>
                        <a href="#" className="hover:text-gray-200 transition">Terms</a>
                    </div>
                </div>
            </footer>
        </div>
    );

}

export default DashboardPage