interface ContentAreaProps {
    children: React.ReactNode;
}

const ContentArea: React.FC<ContentAreaProps> = props => {
    const { children } = props;
    return <div className="container relative">{children}</div>;
};

export default ContentArea;
