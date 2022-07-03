interface IProps {
    name: string;
}

export function CityName({ name }: IProps) {
    return <div>{name}</div>;
}
