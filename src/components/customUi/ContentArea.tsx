interface ContentAreaProps {
    children: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = props => {
    const { children } = props;
    return <div className="container relative pb-4">{children}</div>;
};

export default ContentArea;
