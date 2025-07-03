type Feature = {
    id: number;
    name: string;
    description: string;
    user: {
        id: number;
        name: string;
        email: string;
    };
    created_at: string;
    updated_at: string;
};

interface IndexProps {
    features: Feature[];
}

export default function Index({ features }: IndexProps) {
    console.log(features);

    return <div>Index</div>;
}
