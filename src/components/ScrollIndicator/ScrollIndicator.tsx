import './ScrollIndicator.css';

interface ScrollIndicatorProps {
    scrollToNextSection: () => void;
}

const ScrollIndicator = (props: ScrollIndicatorProps) => {
    return (<div className="scroll-indicator" onClick={props.scrollToNextSection}>
        <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
        >
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    </div>);
}

export default ScrollIndicator;