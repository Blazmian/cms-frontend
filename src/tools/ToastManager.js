import { CDBIcon } from "cdbreact"

const ToastManager = ({ title, text, type }) => {

    /**
     * COLOR OF TYPE
     * 
     * -White-
     * Danger, Success, Dark, Primary
     * 
     * -Gray-
     * Warning
     * 
     */

    const iconMap = {
        warning: 'exclamation-triangle',
        danger: 'exclamation-circle',
        primary: 'info-circle',
        dark: 'info-circle',
        success: 'check-circle',
    }

    const iconName = iconMap[type] || 'question-circle'

    return (
        <div style={{ maxWidth: '25rem', borderRadius: '10px' }} className={`w-100 bg-${type} shadow`}>
            <div className="p-2 d-flex align-items-center" style={{ backgroundColor: 'rgba(0, 0, 0, .300)', borderRadius: '10px 10px 0 0' }}>
                {type === 'warning' ? <CDBIcon icon={iconName} /> : <CDBIcon inverse icon={iconName} />}
                <p style={type === 'warning' ? { color: '#272727' } : { color: '#E6E6E6' }} className="ms-2 fw-medium mb-0">{title}</p>
            </div>
            <p style={type === 'warning' ? { color: '#464646' } : { color: 'white' }} className="mx-2 my-3">{text}</p>
        </div>
    )
}

export default ToastManager