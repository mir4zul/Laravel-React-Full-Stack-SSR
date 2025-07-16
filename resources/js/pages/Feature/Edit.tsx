import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Feature } from '@/types';

type FeatureFormData = {
    name: string;
    description: string;
};

export default function Edit({ feature, onClose }: { feature: Feature; onClose: () => void }) {
    const { data, setData, put, processing, errors, reset } = useForm<FeatureFormData>({
        name: feature.name,
        description: feature.description,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        put(route('features.update', feature.id), {
            onFinish: () => reset('name', 'description'),
        });
        onClose();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent default form submission
            submit(e as unknown as React.FormEvent); // Call submit function
        }
    };

    return (
        <form onKeyDown={handleKeyDown} className="mx-auto flex max-w-xl flex-col gap-6 rounded p-6 shadow" onSubmit={submit}>
            <h1 className="text-center text-2xl font-semibold">Edit Feature</h1>
            <div className="grid gap-6">
                {/* Feature Name */}
                <div className="grid gap-2">
                    <Label htmlFor="name">Feature Title</Label>
                    <Input
                        id="name"
                        className="focus:ring--500 rounded border border-gray-500 px-3 py-2 focus:border-gray-500 focus:ring-1 focus:outline-none"
                        type="text"
                        autoFocus
                        tabIndex={1}
                        autoComplete="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                    />
                    <InputError message={errors.name} />
                </div>

                {/* Feature Description */}
                <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <textarea
                        id="description"
                        tabIndex={2}
                        autoComplete="description"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        className="min-h-[120px] rounded border border-gray-500 px-3 py-2 text-sm focus:border-gray-500 focus:ring-1 focus:ring-gray-500 focus:outline-none"
                    />
                    <InputError message={errors.description} />
                </div>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="w-full cursor-pointer rounded bg-accent px-4 py-2 text-white transition hover:bg-accent/80"
                disabled={processing}
            >
                {processing ? 'Submitting...' : 'Submit'}
            </button>

            {/* Optional Success Message (Uncomment if using flash messages) */}
            {/* {status && <div className="mt-4 text-center text-sm font-medium text-green-600">{status}</div>} */}
        </form>
    );
}
