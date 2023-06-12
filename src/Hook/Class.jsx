import { useQuery } from '@tanstack/react-query';

const Class = () => {

    const {data: classes = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await fetch('https://music-school-server-farjanaakterlaila.vercel.app/classes');
            return res.json();
        }
    })

    return [classes, loading, refetch]
}

export default Class;