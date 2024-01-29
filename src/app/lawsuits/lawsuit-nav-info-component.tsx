interface LawsuitNavInfoComponentProps {
    label: string;
    value: string;
}

const LawsuitNavInfoComponent = (props: LawsuitNavInfoComponentProps) => {
    return (
        <div className="">
            <p className="text-base">
                {props.label}
            </p>
            <p className="text-muted-foreground text-sm">
                {props.value}
            </p>
        </div>
    )
}

export default LawsuitNavInfoComponent;