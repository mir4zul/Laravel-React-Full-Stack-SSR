import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

import InputError from '@/components/input-error';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Feature } from '@/types';

export default function Create() {
    const { data, setData, post, processing, errors, reset } = useForm<Required<Feature>>({
        name: '',
        description: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(route('feature.store'), {
            onFinish: () => reset('name', 'description'),
        });
    };

    return (
        <>
            <form className="flex flex-col gap-6" onSubmit={submit}>
                <h1 className="text-center text-2xl">Create Feature</h1>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="feature">Feature Title</Label>
                        <Input
                            id="name"
                            type="name"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder="Feature..."
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <textarea
                            id="description"
                            required
                            autoFocus
                            tabIndex={1}
                            autoComplete="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            placeholder="Description..."
                        />
                        <InputError message={errors.description} />
                    </div>
                </div>
            </form>

            {/* {status && <div className="mb-4 text-center text-sm font-medium text-green-600">{status}</div>} */}
        </>
    );
}
