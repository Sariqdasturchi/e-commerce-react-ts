import { IoSend } from "react-icons/io5";
import qrCode from "../../assets/qrcode.png"; // misol uchun
// agar googleplay.png import qilishni xohlasang, shunday qil:
import googlePlay from "../../assets/googleplay.png";
import apple from '../../assets/apple.png'

export default function Footer() {
    return (
        <section className="w-full min-h-[440px] flex flex-col justify-center items-center bg-[#000] mt-20 text-white">
            <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-10">
                {/* Exclusive */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <h1 className="text-xl font-semibold">Exclusive</h1>
                    <h3 className="text-lg font-normal">Subscribe</h3>
                    <p className="text-xs">Get 10% off your first order</p>
                    <div className="flex w-full border border-gray-100 rounded-lg overflow-hidden">
                        <input
                            type="email"
                            className="flex-1 px-3 py-2 text-sm text-gray-200 bg-transparent focus:outline-none"
                            placeholder="Your email"
                        />
                        <button
                            className="px-3 text-white"
                            aria-label="Subscribe to newsletter"
                        >
                            <IoSend className="cursor-pointer" />
                        </button>
                    </div>
                </div>

                {/* Support */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl">Support</h3>
                    <p className="text-xs">
                        111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                    </p>
                    <p className="text-xs">exclusive@gmail.com</p>
                    <p className="text-xs">+88015-88888-9999</p>
                </div>

                {/* Account */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl">Account</h3>
                    <ul className="flex flex-col justify-center items-start gap-4 text-xs">
                        <li>
                            <a href="/" aria-label="Go to Cart page">
                                Cart
                            </a>
                        </li>
                        <li>
                            <a href="/" aria-label="Go to Wishlist page">
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="/" aria-label="Go to Shop page">
                                Shop
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Quick Link */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl">Quick Link</h3>
                    <ul className="flex flex-col justify-center items-start gap-4 text-xs">
                        <li>
                            <a href="/">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="/">Terms Of Use</a>
                        </li>
                        <li>
                            <a href="/">FAQ</a>
                        </li>
                        <li>
                            <a href="/">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Download App */}
                <div className="flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl">Download App</h3>
                    <p className="text-xs text-gray-400">
                        Save $3 with App New User Only
                    </p>
                    <div className="flex items-center gap-4">
                        <img
                            src={qrCode}
                            alt="QR code for app download"
                            className="w-20 h-20"
                        />
                        <div className="flex flex-col gap-2">
                            <button className="w-[190px] h-[56px] flex items-center gap-2 border border-gray-300 rounded-lg px-3 cursor-pointer">
                                <img
                                    src={googlePlay}
                                    alt="Google Play logo"
                                    className="w-[34px] h-[34px]"
                                />
                                <div className="flex flex-col items-start leading-tight">
                                    <p className="text-[10px] text-gray-400">GET IT ON</p>
                                    <h3 className="text-sm font-semibold">Google Play</h3>
                                </div>
                            </button>
                            <button className="w-[190px] h-[56px] flex items-center gap-2 border border-gray-300 rounded-lg px-3 cursor-pointer">
                                <img
                                    src={apple}
                                    alt="Google Play logo"
                                    className="w-[34px] h-[34px]"
                                />
                                <div className="flex flex-col items-start leading-tight">
                                    <p className="text-[10px] text-gray-400">Download on the</p>
                                    <h3 className="text-sm font-semibold">App Store</h3>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Line */}
            <div className="w-full border-t border-gray-700 py-4 text-center text-xs text-gray-400">
                © 2025 Exclusive. All rights reserved.
            </div>
        </section>
    );
}
