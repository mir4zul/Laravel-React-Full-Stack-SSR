import { Feature, PaginatedData } from '@/types';

export default function Index({ features }: { features: PaginatedData<Feature> }) {
    console.log(features);

    return <div>Index</div>;
}
