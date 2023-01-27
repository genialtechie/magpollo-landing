const Note = ({ fill, className }) => {
    return (
        <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 92"
        width="70"
        height="92"
        fill={fill || 'currentColor'}
        className={className}
        >
        <path
            d="M69.0938 79.4375C68.5716 79.4375 68.0708 79.6449 67.7016 80.0141C67.3324 80.3833 67.125 80.8841 67.125 81.4062V87.3125H4.125V4.625H48.5892L67.125 23.1608V32.1875C67.125 32.7096 67.3324 33.2104 67.7016 33.5796C68.0708 33.9488 68.5716 34.1562 69.0938 34.1562C69.6159 34.1562 70.1167 33.9488 70.4859 33.5796C70.8551 33.2104 71.0625 32.7096 71.0625 32.1875V22.3438C71.0603 21.8224 70.8514 21.3233 70.4817 20.9558L50.7942 1.26828C50.4267 0.898562 49.9276 0.689698 49.4062 0.6875H2.15625C1.6341 0.6875 1.13335 0.894922 0.764134 1.26413C0.394922 1.63335 0.1875 2.1341 0.1875 2.65625V89.2812C0.1875 89.8034 0.394922 90.3042 0.764134 90.6734C1.13335 91.0426 1.6341 91.25 2.15625 91.25H69.0938C69.6159 91.25 70.1167 91.0426 70.4859 90.6734C70.8551 90.3042 71.0625 89.8034 71.0625 89.2812V81.4062C71.0625 80.8841 70.8551 80.3833 70.4859 80.0141C70.1167 79.6449 69.6159 79.4375 69.0938 79.4375Z"
            fill="#FFFCE4"
        />
        </svg>
        
    );
};

export default Note;