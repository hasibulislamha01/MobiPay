import PropTypes from 'prop-types'

const OutlinedButton = ({ bgColor, txtColor, hoverBgColor, hoverTxtColor, btnName }) => {

    console.log(`btn border border-${txtColor}  bg-${bgColor} text-${txtColor} hover:bg-${hoverBgColor} hover:text-${hoverTxtColor} `);

    return (
        <button
            className={`btn border border-${txtColor}  bg-${bgColor} text-${txtColor} hover:bg-${hoverBgColor} hover:text-${hoverTxtColor} `}>
            {btnName}
        </button>
    );
};

OutlinedButton.propTypes = {
    bgColor: PropTypes.string,
    txtColor: PropTypes.string,
    hoverBgColor: PropTypes.string,
    hoverTxtColor: PropTypes.string,
    btnName: PropTypes.string,
}

export default OutlinedButton;