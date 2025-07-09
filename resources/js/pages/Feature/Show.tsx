import { Feature } from '@/types';

export default function Show({ feature }: { feature: Feature }) {
    console.log(feature);
    return <div>Show</div>;
}
