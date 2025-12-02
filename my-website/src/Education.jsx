export default function Education(){
    return (
        <section id="education" className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-12">Education</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Cheminement en technologie Degree */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                        <div className="flex justify-center mb-2">
                            <img 
                                    src="/Logo_ETS_TypoGrise_D_FR.png" 
                                    alt="ETS Logo" 
                                    className="w-24 object-contain"
                                />
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-2">Academic path in technology</h3>
                                <p className="text-lg text-gray-700 font-semibold mb-1">École de Technologie Supérieure (ÉTS)</p>
                                <p className="text-gray-600 mb-2">Montreal, Quebec</p>
                                <p className="text-gray-500">2023</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-700"> ETS preparatory year • Specialized in computer science </p>
                        </div>
                    </div>
                    {/* Bachelor's Degree */}
                    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
                        <div className="flex justify-center mb-2">
                            <img 
                                    src="/Logo_ETS_TypoGrise_D_FR.png" 
                                    alt="ETS Logo" 
                                    className="w-24 object-contain"
                                />
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold mb-2">Bachelor of Software Engineering</h3>
                                <p className="text-lg text-gray-700 font-semibold mb-1">École de Technologie Supérieure (ÉTS)</p>
                                <p className="text-gray-600 mb-2">Montreal, Quebec</p>
                                <p className="text-gray-500">2023 - 2027 (Expected)</p>
                            </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-200">
                            <p className="text-gray-700">COOP Program • Software Engineering</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}