export default function Create() {
    return (
        <div>
            <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-4xl lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">Create</h1>

                    <div className="mt-6 border-t border-gray-200">
                        <div className="">
                            <label htmlFor="name" className="">
                                Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                autoComplete="name"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
