export default function Page() {
    return (
        <div className="bg-yellow-300 min-h-screen font-bold font-sans px-6 py-8">
            <header className="bg-red-600 text-white rounded-t-2xl px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src="/lolmart.jpg" alt="LOLMART Logo" className="w-10 h-10 rounded-full" />
                    <span className="text-lg">LOLMART</span>
                </div>
                <nav className="space-x-6">
                    <a href="#" className="hover:underline">HOME</a>
                    <a href="#" className="hover:underline">CATEGORY</a>
                    <a href="#" className="hover:underline">ABOUT</a>
                </nav>
                <div className="space-x-3 text-xl">
                    <span>🔍</span>
                    <span>🛒</span>
                    <span>👤</span>
                </div>
            </header>

            <main className="mt-8 space-y-6">
                <section>
                    <h2 className="text-xl mb-2">COMPANY DESCRIPTION:</h2>
                    <p>
                        LOLMART: Your one-stop shop for unique & fun creations!<br />
                        At LOLMART, we believe life should be full of laughter, surprises, and self-expression. That’s why we specialize in selling custom-made unique items, prank tools, quirky accessories, stylish hoodies & apparel, and one-of-a-kind snacks that you won’t find anywhere else!
                    </p>
                    <p className="mt-2">
                        Our mission is to bring fun and creativity into everyday life with products that spark joy, create unforgettable moments, and let you express your unique personality. Whether you’re looking for the perfect prank, a bold fashion statement, or a snack that challenges your taste buds, LOLMART has got you covered!
                    </p>
                </section>

                <section>
                    <h2 className="text-xl mb-2">OFFLINE STORE ADDRESS:</h2>
                    <p>Jl. Seturan RT.III Depok, Sleman Yogyakarta</p>
                </section>

                <section>
                    <h2 className="text-xl mb-2">SOCIAL MEDIA:</h2>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <img src="/whatsapp.jpg" alt="WhatsApp" className="w-5 h-5" />
                            <span><strong>081267672379</strong></span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="/instagram.png" alt="Instagram" className="w-5 h-5" />
                            <span>LOLMARTIDN</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="/tiktok.jpg" alt="TikTok" className="w-5 h-5" />
                            <span>@LOLMARTIDN_</span>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    );
}
