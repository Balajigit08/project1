"use client";
export default function Footer() {
    return (
        <footer className="bg-[#152266] text-white">
            {/* Main Footer Content */}
            <div className="container mx-auto px-10 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-white">Japan Travel</h3>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            Discover the beauty, culture, and culinary wonders of Japan. Your gateway to an unforgettable Japanese adventure.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <a href="#" className="bg-[#8a8cc1] hover:bg-[#444565] p-3 rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                            <a href="#" className="bg-[#8a8cc1] hover:bg-[#444565] p-3 rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            <a href="#" className="bg-[#8a8cc1] hover:bg-[#444565] p-3 rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Experiences</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Destinations</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Foods</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Blog</a></li>
                        </ul>
                    </div>

                    {/* Explore */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Explore</h4>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Tokyo</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Kyoto</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Osaka</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Hokkaido</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-[#8a8cc1] transition-colors duration-300">Mount Fuji</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-xl font-bold mb-4">Feedback</h4>
                        <p className="text-gray-300 mb-4">Get the latest Japan adventures and hidden gems delivered to your inbox!  </p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-3 rounded-lg bg-[#444565] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#8a8cc1]"
                            />
                            <button className="bg-white hover:bg-[#152266] text-[#152266] hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 border border-[#152266] hover:border-white">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-[#0d1642] py-6">
                <div className="container mx-auto px-10 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">© 2024 Japan Travel. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-[#8a8cc1] text-sm transition-colors duration-300">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-[#8a8cc1] text-sm transition-colors duration-300">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-[#8a8cc1] text-sm transition-colors duration-300">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}